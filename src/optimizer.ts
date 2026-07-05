/**
 * Optimizer: find the build order that gets a target army to the ENEMY fastest.
 *
 * Objective: minimize compositionArrivalTime — the moment the last required
 * unit of the target composition reaches the enemy base (production time +
 * travel time, with proxies shortening travel at the cost of build delay).
 *
 * Method: we don't search raw action sequences (yet). We search over a
 * PARAMETERIZED build template — how many workers, how many production
 * buildings, gas count, opener workers, and proxy vs. home. A greedy generator
 * turns each parameter set into a valid, supply-correct action list; the
 * simulator scores it. The parameter space is small enough to search
 * exhaustively, so within the template this returns the true optimum,
 * deterministically. (Next step: a GA over raw sequences to explore orderings
 * the template can't express.)
 */
import type { GameData, MapConfig, Composition, Action, SimResult } from "./engine.js";
import { simulate, compositionArrivalTime, fmt } from "./engine.js";

export interface BuildParams {
  openerProbes: number; // extra probes before tech
  probeTarget: number; // total probes to reach before massing army
  producerCount: number; // number of the primary production building
  gasCount: number; // Assimilators
  proxy: boolean; // build production near the enemy
}

export interface OptimizeResult {
  target: Composition;
  arrival: number;
  params: BuildParams;
  order: Action[];
  result: SimResult;
  bestHome?: { arrival: number; params: BuildParams; order: Action[] };
  bestProxy?: { arrival: number; params: BuildParams; order: Action[] };
  evaluated: number;
}

/** Structures required to produce a composition, ordered by dependency depth. */
function techClosure(target: Composition, data: GameData): string[] {
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
  need.delete("Pylon"); // handled specially (supply/power)
  need.delete("Nexus");
  const depth = (name: string): number => {
    const e = data.entities[name];
    const reqs = e.requires.filter((r) => data.entities[r]?.isStructure);
    return reqs.length ? 1 + Math.max(...reqs.map(depth)) : 0;
  };
  return [...need].sort((a, b) => depth(a) - depth(b));
}

/** Turn a parameter set into a valid, supply-correct action list. */
export function generateBuild(
  target: Composition,
  data: GameData,
  p: BuildParams,
): Action[] {
  const A: Action[] = [];
  const E = (n: string) => data.entities[n];
  const pylonSupply = E("Pylon").supplyProvided;
  let supUsed = data.economy.startingWorkers;
  let supCap = E("Nexus").supplyProvided; // 13
  let probes = supUsed;
  const tag = p.proxy ? "@proxy" : "";

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
    A.push(n + tag);
    supUsed += e.supplyCost;
  };
  const maybeProbe = () => {
    if (probes < p.probeTarget) addProbe();
  };

  // Opener: first probe + a chrono, then a few more workers.
  A.push("Probe");
  supUsed += 1;
  probes += 1;
  A.push("chrono:Probe");
  for (let i = 0; i < p.openerProbes; i++) maybeProbe();

  // First (home) Pylon — supply + power.
  A.push("Pylon");
  supCap += pylonSupply;
  maybeProbe();

  const structs = techClosure(target, data);
  const primary = E(Object.keys(target)[0]).producer;
  const needGas = Object.keys(target).some((n) => E(n).gas > 0);
  const gasCount = needGas ? Math.max(1, p.gasCount) : p.gasCount;

  for (let i = 0; i < gasCount; i++) {
    A.push("Assimilator");
    maybeProbe();
  }

  // Proxy power pylon before any proxy production.
  if (p.proxy) {
    A.push("Pylon@proxy");
    supCap += pylonSupply;
  }

  // Tech + first primary producer, in dependency order.
  for (const st of structs) {
    A.push(st === primary ? st + tag : st);
    maybeProbe();
  }
  // Additional primary producers.
  for (let i = 1; i < p.producerCount; i++) {
    A.push(primary + tag);
    maybeProbe();
  }

  // Finish economy, then mass the army uninterrupted.
  while (probes < p.probeTarget) addProbe();

  const rem: Composition = { ...target };
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
  maxProbes?: number; // upper bound on probeTarget (default 20)
  maxProducers?: number; // upper bound on producer count (default 6)
  allowProxy?: boolean; // include proxy builds in the search (default true)
}

export function optimize(
  target: Composition,
  data: GameData,
  map: MapConfig,
  opts: OptimizeOptions = {},
): OptimizeResult {
  const maxProbes = opts.maxProbes ?? 20;
  const maxProducers = opts.maxProducers ?? 6;
  const proxyOptions = opts.allowProxy === false ? [false] : [false, true];
  const start = data.economy.startingWorkers;

  let best: { arrival: number; params: BuildParams; order: Action[]; result: SimResult } | null = null;
  let bestHome: { arrival: number; params: BuildParams; order: Action[] } | undefined;
  let bestProxy: { arrival: number; params: BuildParams; order: Action[] } | undefined;
  let evaluated = 0;

  for (const proxy of proxyOptions) {
    for (let openerProbes = 0; openerProbes <= 4; openerProbes++) {
      for (let probeTarget = start; probeTarget <= maxProbes; probeTarget++) {
        for (let producerCount = 1; producerCount <= maxProducers; producerCount++) {
          for (let gasCount = 0; gasCount <= 2; gasCount++) {
            const params: BuildParams = { openerProbes, probeTarget, producerCount, gasCount, proxy };
            const order = generateBuild(target, data, params);
            const result = simulate(data, order, map);
            evaluated++;
            const arrival = compositionArrivalTime(result, target);
            if (!isFinite(arrival)) continue;
            if (!best || arrival < best.arrival) best = { arrival, params, order, result };
            if (proxy && (!bestProxy || arrival < bestProxy.arrival))
              bestProxy = { arrival, params, order };
            if (!proxy && (!bestHome || arrival < bestHome.arrival))
              bestHome = { arrival, params, order };
          }
        }
      }
    }
  }

  if (!best) throw new Error("No valid build found for target composition");
  return {
    target,
    arrival: best.arrival,
    params: best.params,
    order: best.order,
    result: best.result,
    bestHome,
    bestProxy,
    evaluated,
  };
}

/** Human-readable one-liner for a target composition. */
export function describeComposition(comp: Composition): string {
  return Object.entries(comp)
    .map(([n, c]) => `${c} ${n}`)
    .join(" + ");
}

export { fmt };
