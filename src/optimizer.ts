/**
 * Optimizer: find the build order that gets a target army to the ENEMY fastest.
 *
 * Objective: minimize compositionArrivalTime — when the last required unit of
 * the target reaches the enemy (production/warp-in + travel).
 *
 * Method: search a PARAMETERIZED build template. A greedy generator turns each
 * parameter set into a valid, supply-correct action list; the simulator scores
 * it. The space is small enough to search exhaustively, so within the template
 * this returns the true optimum, deterministically. The three delivery
 * strategies it compares:
 *   • home      — produce at home, walk the army across the map
 *   • proxyWalk — proxy Gateways near the enemy, short walk (pre-warpgate all-in)
 *   • proxyWarp — Warp Gate tech + a proxy Pylon; warp the army onto the enemy
 * (Next step: a GA over raw sequences to explore orderings the template can't.)
 */
import type { GameData, MapConfig, Composition, Action, SimResult } from "./engine.js";
import { simulate, compositionArrivalTime, fmt } from "./engine.js";

export type Strategy = "home" | "proxyWalk" | "proxyWarp";
export const STRATEGIES: Strategy[] = ["home", "proxyWalk", "proxyWarp"];

function range(lo: number, hi: number): number[] {
  const out: number[] = [];
  for (let i = lo; i <= hi; i++) out.push(i);
  return out;
}

export interface BuildParams {
  openerProbes: number;
  probeTarget: number;
  producerCount: number;
  gasCount: number;
  strategy: Strategy;
  /**
   * proxyWarp only: how many of the primary unit to train NORMALLY at home
   * (and walk across the map) before switching the Gateways over to Warp
   * Gate production. Without this, home Gateways sit idle for the ~100s
   * Warp Gate research takes — walking a few units home-produced in the
   * meantime can beat waiting for every unit to warp in.
   */
  earlyHomeUnits: number;
}

export interface StrategyBest {
  arrival: number;
  params: BuildParams;
  order: Action[];
}

export interface OptimizeResult {
  target: Composition;
  arrival: number;
  params: BuildParams;
  order: Action[];
  result: SimResult;
  bestByStrategy: Partial<Record<Strategy, StrategyBest>>;
  evaluated: number;
}

/** Structures required to produce a composition, ordered by dependency depth. */
function techClosure(target: Composition, data: GameData, extra: string[] = []): string[] {
  const need = new Set<string>();
  const addStruct = (name: string) => {
    const e = data.entities[name];
    if (!e || !e.isStructure || need.has(name)) return;
    for (const r of e.requires) addStruct(r);
    need.add(name);
  };
  for (const u of Object.keys(target)) {
    const e = data.entities[u];
    if (!e) continue;
    addStruct(e.producer);
    for (const r of e.requires) addStruct(r);
  }
  for (const x of extra) addStruct(x);
  need.delete("Pylon");
  need.delete("Nexus");
  const depth = (name: string): number => {
    const e = data.entities[name];
    const reqs = e.requires.filter((r) => data.entities[r]?.isStructure);
    return reqs.length ? 1 + Math.max(...reqs.map(depth)) : 0;
  };
  return [...need].sort((a, b) => depth(a) - depth(b));
}

/** Turn a parameter set into a valid, supply-correct action list. */
export function generateBuild(target: Composition, data: GameData, p: BuildParams): Action[] {
  const A: Action[] = [];
  const E = (n: string) => data.entities[n];
  const pylonSupply = E("Pylon").supplyProvided;
  let supUsed = data.economy.startingWorkers;
  let supCap = E("Nexus").supplyProvided;
  let probes = supUsed;

  const warp = p.strategy === "proxyWarp";
  const proxyProd = p.strategy === "proxyWalk";
  const prodTag = proxyProd ? "@proxy" : "";
  const unitTag = proxyProd ? "@proxy" : ""; // warp units are untagged (auto warp-in)

  const ensureSupply = (cost: number) => {
    while (supUsed + cost > supCap) {
      A.push("Pylon");
      supCap += pylonSupply;
    }
  };
  const addProbe = () => {
    ensureSupply(1);
    A.push("Probe");
    supUsed += 1;
    probes += 1;
  };
  const addUnit = (n: string) => {
    const e = E(n);
    ensureSupply(e.supplyCost);
    A.push(n + unitTag);
    supUsed += e.supplyCost;
  };
  const maybeProbe = () => {
    if (probes < p.probeTarget) addProbe();
  };

  A.push("Probe");
  supUsed += 1;
  probes += 1;
  A.push("chrono:Probe");
  for (let i = 0; i < p.openerProbes; i++) maybeProbe();

  A.push("Pylon");
  supCap += pylonSupply;
  maybeProbe();

  // Warp Gate research needs a Cybernetics Core even if the army itself doesn't.
  const structs = techClosure(target, data, warp ? ["CyberneticsCore"] : []);
  const primaryUnit = Object.keys(target)[0];
  const primary = E(primaryUnit).producer;
  const needGas = Object.keys(target).some((n) => E(n).gas > 0);
  const gasCount = needGas || warp ? Math.max(1, p.gasCount) : p.gasCount; // warp research needs gas

  for (let i = 0; i < gasCount; i++) {
    A.push("Assimilator");
    maybeProbe();
  }

  if (proxyProd) {
    A.push("Pylon@proxy"); // power for proxy production buildings
    supCap += pylonSupply;
  }

  for (const st of structs) {
    A.push(st === primary ? st + prodTag : st);
    maybeProbe();
  }
  for (let i = 1; i < p.producerCount; i++) {
    A.push(primary + prodTag);
    maybeProbe();
  }

  const earlyHomeUnits = warp ? Math.min(p.earlyHomeUnits, target[primaryUnit] ?? 0) : 0;

  if (warp) {
    // Keep the home Gateways producing (units walk across the map) instead of
    // sitting idle for the ~100s Warp Gate research takes.
    for (let i = 0; i < earlyHomeUnits; i++) addUnit(primaryUnit);

    A.push("WarpGateResearch");
    A.push("chrono:WarpGateResearch");
    A.push("Pylon@proxy"); // warp anchor near the enemy
    supCap += pylonSupply;
    for (let i = 0; i < p.producerCount; i++) A.push("WarpGate"); // morph the Gateways
  }

  while (probes < p.probeTarget) addProbe();

  const rem: Composition = { ...target };
  if (earlyHomeUnits > 0) rem[primaryUnit] -= earlyHomeUnits;
  const types = Object.keys(target);
  let any = true;
  while (any) {
    any = false;
    for (const n of types) {
      if (rem[n] > 0) {
        addUnit(n);
        rem[n]--;
        any = true;
      }
    }
  }
  return A;
}

export interface OptimizeOptions {
  maxProbes?: number;
  maxProducers?: number;
  strategies?: Strategy[];
  maxEarlyHomeUnits?: number;
}

export function optimize(
  target: Composition,
  data: GameData,
  map: MapConfig,
  opts: OptimizeOptions = {},
): OptimizeResult {
  const maxProbes = opts.maxProbes ?? 20;
  const maxProducers = opts.maxProducers ?? 6;
  const strategies = opts.strategies ?? STRATEGIES;
  const maxEarlyHomeUnits = opts.maxEarlyHomeUnits ?? 6;
  const start = data.economy.startingWorkers;

  let best: { arrival: number; params: BuildParams; order: Action[]; result: SimResult } | null = null;
  const bestByStrategy: Partial<Record<Strategy, StrategyBest>> = {};
  let evaluated = 0;

  for (const strategy of strategies) {
    const earlyOptions = strategy === "proxyWarp" ? range(0, maxEarlyHomeUnits) : [0];
    for (let openerProbes = 0; openerProbes <= 4; openerProbes++) {
      for (let probeTarget = start; probeTarget <= maxProbes; probeTarget++) {
        for (let producerCount = 1; producerCount <= maxProducers; producerCount++) {
          for (let gasCount = 0; gasCount <= 2; gasCount++) {
            for (const earlyHomeUnits of earlyOptions) {
              const params: BuildParams = { openerProbes, probeTarget, producerCount, gasCount, strategy, earlyHomeUnits };
              const order = generateBuild(target, data, params);
              const result = simulate(data, order, map);
              evaluated++;
              const arrival = compositionArrivalTime(result, target);
              if (!isFinite(arrival)) continue;
              if (!best || arrival < best.arrival) best = { arrival, params, order, result };
              const sb = bestByStrategy[strategy];
              if (!sb || arrival < sb.arrival) bestByStrategy[strategy] = { arrival, params, order };
            }
          }
        }
      }
    }
  }

  if (!best) throw new Error("No valid build found for target composition");
  return { target, arrival: best.arrival, params: best.params, order: best.order, result: best.result, bestByStrategy, evaluated };
}

export function describeComposition(comp: Composition): string {
  return Object.entries(comp)
    .map(([n, c]) => `${c} ${n}`)
    .join(" + ");
}

export { fmt };
