/**
 * Raw action-sequence search: a genetic algorithm that searches the space of
 * build orders DIRECTLY (mutating/crossing Action[] sequences), instead of
 * optimizer.ts's parameterized template (which can only ever re-order what
 * `generateBuild` already knows how to express).
 *
 * Why this exists: `optimize()` finds the true optimum WITHIN its template,
 * but the template hardcodes a shape (probes -> pylon -> gas -> tech ->
 * units, one primary producer, a fixed chrono:Probe opener). It cannot
 * discover cutting probes at an unusual point to rush a second producer,
 * chrono-ing the tech building instead of Probes, interleaving two producer
 * types, or any ordering nobody thought to parameterize. This module
 * searches the same objective (via a pluggable Scorer, e.g.
 * compositionArrivalTime) directly over sequences, seeded from the
 * template's own output so it never regresses, then mutates/crosses freely.
 * Chrono TARGET selection falls out of this for free -- "chrono:X" is just
 * another candidate action the search can insert, retarget, or remove.
 *
 * `simulate()` is the fitness oracle (a black box, ~10us/call) -- this is
 * NOT branch-and-bound (no admissible lower bound / pruning guarantee of
 * optimality); it's a stochastic local search that in practice explores far
 * more of the space than the template's ~3,500-10,000 exhaustive candidates
 * because the population/generation budget is orders of magnitude larger.
 */
import type { GameData, MapConfig, Composition, Action, SimResult } from "./engine.js";
import { simulate, workerNameOf } from "./engine.js";
import { compositionArrivalTime } from "./engine.js";
import { generateBuild, techClosure, defaultStrategies, optimize, type BuildParams, type Strategy } from "./optimizer.js";

export type Scorer = (result: SimResult, target: Composition, data: GameData) => number;

/** Lower is better; Infinity for a build that never delivers the target. */
export const arrivalScorer: Scorer = (result, target) => compositionArrivalTime(result, target);

// --- Deterministic PRNG (mulberry32) — GA runs are reproducible by seed. ---
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
type Rng = () => number;
const randInt = (rng: Rng, lo: number, hi: number) => lo + Math.floor(rng() * (hi - lo + 1));
const pick = <T>(rng: Rng, xs: T[]): T => xs[Math.floor(rng() * xs.length)];

// --- Vocabulary: which raw actions are legal to insert for this target ----
export interface Vocabulary {
  structures: string[]; // tech structures this composition/strategy needs (proxy-taggable)
  units: string[]; // unit types in the target composition
  chronoTargets: string[]; // legal chrono:X names
  warp: boolean;
}

export function buildVocabulary(target: Composition, data: GameData, warp: boolean): Vocabulary {
  // The townhall (Nexus/CommandCenter/Hatchery) is included so the GA can
  // discover taking a natural expansion -- previously hardcoded out (see git
  // history), which silently made "build a 2nd base" undiscoverable no
  // matter how much it would have helped a longer-horizon/safety objective.
  const extra = [data.economy.startingTownhall, ...(warp ? ["CyberneticsCore"] : [])];
  const structures = techClosure(target, data, extra);
  const units = Object.keys(target);
  // No Chrono, no chrono targets -- keeps tweakChrono() from ever inserting
  // a "chrono:X" action for a race that can't use it (see mutate() below).
  const chronoTargets = data.economy.hasChrono ? [workerNameOf(data), ...structures, ...units, ...(warp ? ["WarpGateResearch"] : [])] : [];
  return { structures, units, chronoTargets, warp };
}

// --- Random valid-ish seed individuals (from the template generator) ------
function randomParams(rng: Rng, strategies: Strategy[], start: number): BuildParams {
  const strategy = pick(rng, strategies);
  return {
    openerProbes: randInt(rng, 0, 4),
    probeTarget: randInt(rng, start, start + 14),
    producerCount: randInt(rng, 1, 6),
    gasCount: randInt(rng, 0, 2),
    strategy,
    earlyHomeUnits: strategy === "proxyWarp" ? randInt(rng, 0, 6) : 0,
    // The GA's tweakChrono mutation explores this properly; the seed value
    // just needs to be valid so generateBuild() has something to start from.
    secondChrono: pick(rng, ["none", "probe", "primary"] as const),
  };
}

// --- Mutation operators: each returns a NEW array ---------------------------
function insertAction(seq: Action[], rng: Rng, vocab: Vocabulary, data: GameData): Action[] {
  const pool = [...vocab.structures, ...vocab.units, workerNameOf(data), data.economy.supplyStructure, data.economy.gasStructure];
  const name = pick(rng, pool);
  const tag = rng() < 0.25 ? "@proxy" : "";
  const at = randInt(rng, 0, seq.length);
  return [...seq.slice(0, at), name + tag, ...seq.slice(at)];
}

function deleteAction(seq: Action[], rng: Rng): Action[] {
  if (seq.length <= 4) return seq.slice();
  const at = randInt(rng, 0, seq.length - 1);
  return [...seq.slice(0, at), ...seq.slice(at + 1)];
}

function swapActions(seq: Action[], rng: Rng): Action[] {
  if (seq.length < 2) return seq.slice();
  const out = seq.slice();
  const i = randInt(rng, 0, out.length - 1);
  const j = randInt(rng, 0, out.length - 1);
  [out[i], out[j]] = [out[j], out[i]];
  return out;
}

function moveAction(seq: Action[], rng: Rng): Action[] {
  if (seq.length < 2) return seq.slice();
  const out = seq.slice();
  const i = randInt(rng, 0, out.length - 1);
  const [item] = out.splice(i, 1);
  const j = randInt(rng, 0, out.length);
  out.splice(j, 0, item);
  return out;
}

function duplicateAction(seq: Action[], rng: Rng): Action[] {
  if (seq.length === 0) return seq.slice();
  const i = randInt(rng, 0, seq.length - 1);
  const at = randInt(rng, 0, seq.length);
  return [...seq.slice(0, at), seq[i], ...seq.slice(at)];
}

/** Insert, retarget, or remove a chrono cast -- this is how chrono TARGET
 * becomes a first-class search dimension instead of a hardcoded opener.
 * Never called with an empty vocab.chronoTargets -- see mutate(). */
function tweakChrono(seq: Action[], rng: Rng, vocab: Vocabulary): Action[] {
  const chronoIdx = seq.map((a, i) => (a.startsWith("chrono:") ? i : -1)).filter((i) => i >= 0);
  const r = rng();
  if (r < 0.4 || chronoIdx.length === 0) {
    // Add a new chrono cast at a random position.
    const target = pick(rng, vocab.chronoTargets);
    const at = randInt(rng, 0, seq.length);
    return [...seq.slice(0, at), `chrono:${target}`, ...seq.slice(at)];
  }
  const idx = pick(rng, chronoIdx);
  if (r < 0.75) {
    // Retarget an existing chrono cast.
    const target = pick(rng, vocab.chronoTargets);
    const out = seq.slice();
    out[idx] = `chrono:${target}`;
    return out;
  }
  // Remove it.
  return [...seq.slice(0, idx), ...seq.slice(idx + 1)];
}

function toggleProxyTag(seq: Action[], rng: Rng, data: GameData): Action[] {
  const idx = seq
    .map((_, i) => i)
    .filter((i) => {
      const base = seq[i].split("@")[0];
      return !seq[i].startsWith("chrono:") && data.entities[base]?.isStructure;
    });
  if (idx.length === 0) return seq.slice();
  const i = pick(rng, idx);
  const out = seq.slice();
  out[i] = out[i].includes("@proxy") ? out[i].replace("@proxy", "") : out[i].split("@")[0] + "@proxy";
  return out;
}

const OPERATORS = [insertAction, deleteAction, swapActions, moveAction, duplicateAction] as const;

function mutate(seq: Action[], rng: Rng, vocab: Vocabulary, data: GameData): Action[] {
  const r = rng();
  if (r < 0.25 && vocab.chronoTargets.length > 0) return tweakChrono(seq, rng, vocab);
  if (r < 0.35) return toggleProxyTag(seq, rng, data);
  return pick(rng, OPERATORS as unknown as Array<(s: Action[], rng: Rng, v: Vocabulary, d: GameData) => Action[]>)(seq, rng, vocab, data);
}

function crossover(a: Action[], b: Action[], rng: Rng): Action[] {
  if (a.length < 2 || b.length < 2) return rng() < 0.5 ? a.slice() : b.slice();
  const ca = randInt(rng, 1, a.length - 1);
  const cb = randInt(rng, 1, b.length - 1);
  return [...a.slice(0, ca), ...b.slice(cb)];
}

export interface SearchOptions {
  populationSize?: number;
  generations?: number;
  seed?: number;
  eliteFraction?: number;
  tournamentSize?: number;
  crossoverRate?: number;
  strategies?: Strategy[];
  /** Extra hand-picked sequences (e.g. optimize()'s best-by-strategy) to seed
   * the population with, so the GA never does worse than the template. */
  seeds?: Action[][];
}

export interface SearchResult {
  best: Action[];
  score: number;
  result: SimResult;
  generations: number;
  evaluated: number;
  /** Best score seen after each generation, for convergence inspection. */
  history: number[];
}

export function searchRawSequences(
  target: Composition,
  data: GameData,
  map: MapConfig,
  scorer: Scorer = arrivalScorer,
  opts: SearchOptions = {},
): SearchResult {
  const popSize = opts.populationSize ?? 250;
  const generations = opts.generations ?? 150;
  const eliteCount = Math.max(2, Math.floor(popSize * (opts.eliteFraction ?? 0.06)));
  const tournamentSize = opts.tournamentSize ?? 5;
  const crossoverRate = opts.crossoverRate ?? 0.5;
  const strategies = opts.strategies ?? defaultStrategies(data);
  const rng = mulberry32(opts.seed ?? 42);
  const start = data.economy.startingWorkers;

  const warpInPlay = strategies.includes("proxyWarp");
  const vocab = buildVocabulary(target, data, warpInPlay);

  let evaluated = 0;
  const score = (seq: Action[]): number => {
    evaluated++;
    const res = simulate(data, seq, map);
    return res.ok ? scorer(res, target, data) : Infinity;
  };

  // Initial population: randomized-template builds, given a few mutation
  // passes each so the GA starts already exploring off-template variants.
  //
  // If the caller didn't supply seeds, fall back to the template optimizer's
  // own (cheap, reduced-budget) answer -- without this, "seeded so it never
  // regresses" was only true for callers that remembered to wire it up by
  // hand (search-cli.ts did; opponent-cli.ts and the browser UI's GA button
  // did not), and an unseeded population can occasionally fail to find ANY
  // valid build within the generation budget even when one obviously exists
  // (observed: 12 Zergling returned Infinity with the browser's reduced
  // budget, purely because the random population never stumbled onto a
  // supply-safe ordering in time).
  let seeds = opts.seeds;
  if (!seeds) {
    try {
      const templateResult = optimize(target, data, map, { maxProbes: 14, maxProducers: 3, maxEarlyHomeUnits: 1, strategies });
      seeds = [templateResult.order, ...Object.values(templateResult.bestByStrategy).map((b) => b.order)];
    } catch {
      seeds = []; // no valid template build either (e.g. an unreachable target) -- fall through unseeded.
    }
  }
  let population: Action[][] = [];
  for (const seed of seeds) population.push(seed.slice());
  while (population.length < popSize) {
    const params = randomParams(rng, strategies, start);
    let seq = generateBuild(target, data, params);
    const passes = randInt(rng, 0, 4);
    for (let i = 0; i < passes; i++) seq = mutate(seq, rng, vocab, data);
    population.push(seq);
  }

  const history: number[] = [];
  let best: Action[] = population[0];
  let bestScore = Infinity;

  const tournamentPick = (scored: { seq: Action[]; s: number }[]): Action[] => {
    let winner = scored[randInt(rng, 0, scored.length - 1)];
    for (let i = 1; i < tournamentSize; i++) {
      const c = scored[randInt(rng, 0, scored.length - 1)];
      if (c.s < winner.s) winner = c;
    }
    return winner.seq;
  };

  for (let gen = 0; gen < generations; gen++) {
    const scored = population.map((seq) => ({ seq, s: score(seq) })).sort((a, b) => a.s - b.s);
    if (scored[0].s < bestScore) {
      bestScore = scored[0].s;
      best = scored[0].seq;
    }
    history.push(bestScore);

    const next: Action[][] = scored.slice(0, eliteCount).map((x) => x.seq);
    while (next.length < popSize) {
      const parentA = tournamentPick(scored);
      const parentB = tournamentPick(scored);
      let child = rng() < crossoverRate ? crossover(parentA, parentB, rng) : parentA.slice();
      const mutations = 1 + (rng() < 0.4 ? 1 : 0) + (rng() < 0.15 ? 1 : 0);
      for (let i = 0; i < mutations; i++) child = mutate(child, rng, vocab, data);
      next.push(child);
    }
    population = next;
  }

  const simplified = simplifySequence(best, bestScore, score);
  best = simplified.seq;
  bestScore = simplified.score;

  return { best, score: bestScore, result: simulate(data, best, map), generations, evaluated, history };
}

/**
 * GA "bloat" control: crossover/mutation tend to accumulate actions that are
 * harmless but useless (a chrono cast that always gets skipped, a spare
 * Pylon, a redundant producer) because they don't hurt the score, so nothing
 * ever prunes them. Greedily try deleting each action of the winning
 * sequence; keep the deletion if the score doesn't get WORSE. This can only
 * shrink the sequence, never regress it — purely a readability/practicality
 * pass over an already-scored-optimal individual.
 */
function simplifySequence(
  seq: Action[],
  targetScore: number,
  score: (seq: Action[]) => number,
): { seq: Action[]; score: number } {
  let cur = seq.slice();
  let curScore = targetScore;
  let improved = true;
  while (improved) {
    improved = false;
    for (let i = cur.length - 1; i >= 0; i--) {
      const candidate = [...cur.slice(0, i), ...cur.slice(i + 1)];
      const s = score(candidate);
      if (s <= curScore + 1e-6) {
        cur = candidate;
        curScore = s;
        improved = true;
      }
    }
  }
  return { seq: cur, score: curScore };
}
