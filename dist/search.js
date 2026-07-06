import { simulate, workerNameOf } from "./engine.js";
import { compositionArrivalTime } from "./engine.js";
import { generateBuild, techClosure, defaultStrategies, optimize } from "./optimizer.js";
/** Lower is better; Infinity for a build that never delivers the target. */
export const arrivalScorer = (result, target) => compositionArrivalTime(result, target);
// --- Deterministic PRNG (mulberry32) — GA runs are reproducible by seed. ---
function mulberry32(seed) {
    let a = seed >>> 0;
    return function rng() {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
const randInt = (rng, lo, hi) => lo + Math.floor(rng() * (hi - lo + 1));
const pick = (rng, xs) => xs[Math.floor(rng() * xs.length)];
export function buildVocabulary(target, data, warp) {
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
function randomParams(rng, strategies, start) {
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
        secondChrono: pick(rng, ["none", "probe", "primary"]),
    };
}
// --- Mutation operators: each returns a NEW array ---------------------------
function insertAction(seq, rng, vocab, data) {
    const pool = [...vocab.structures, ...vocab.units, workerNameOf(data), data.economy.supplyStructure, data.economy.gasStructure];
    const name = pick(rng, pool);
    const tag = rng() < 0.25 ? "@proxy" : "";
    const at = randInt(rng, 0, seq.length);
    return [...seq.slice(0, at), name + tag, ...seq.slice(at)];
}
function deleteAction(seq, rng) {
    if (seq.length <= 4)
        return seq.slice();
    const at = randInt(rng, 0, seq.length - 1);
    return [...seq.slice(0, at), ...seq.slice(at + 1)];
}
function swapActions(seq, rng) {
    if (seq.length < 2)
        return seq.slice();
    const out = seq.slice();
    const i = randInt(rng, 0, out.length - 1);
    const j = randInt(rng, 0, out.length - 1);
    [out[i], out[j]] = [out[j], out[i]];
    return out;
}
function moveAction(seq, rng) {
    if (seq.length < 2)
        return seq.slice();
    const out = seq.slice();
    const i = randInt(rng, 0, out.length - 1);
    const [item] = out.splice(i, 1);
    const j = randInt(rng, 0, out.length);
    out.splice(j, 0, item);
    return out;
}
function duplicateAction(seq, rng) {
    if (seq.length === 0)
        return seq.slice();
    const i = randInt(rng, 0, seq.length - 1);
    const at = randInt(rng, 0, seq.length);
    return [...seq.slice(0, at), seq[i], ...seq.slice(at)];
}
/** Insert, retarget, or remove a chrono cast -- this is how chrono TARGET
 * becomes a first-class search dimension instead of a hardcoded opener.
 * Never called with an empty vocab.chronoTargets -- see mutate(). */
function tweakChrono(seq, rng, vocab) {
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
function toggleProxyTag(seq, rng, data) {
    const idx = seq
        .map((_, i) => i)
        .filter((i) => {
        const base = seq[i].split("@")[0];
        return !seq[i].startsWith("chrono:") && data.entities[base]?.isStructure;
    });
    if (idx.length === 0)
        return seq.slice();
    const i = pick(rng, idx);
    const out = seq.slice();
    out[i] = out[i].includes("@proxy") ? out[i].replace("@proxy", "") : out[i].split("@")[0] + "@proxy";
    return out;
}
const OPERATORS = [insertAction, deleteAction, swapActions, moveAction, duplicateAction];
function mutate(seq, rng, vocab, data) {
    const r = rng();
    if (r < 0.25 && vocab.chronoTargets.length > 0)
        return tweakChrono(seq, rng, vocab);
    if (r < 0.35)
        return toggleProxyTag(seq, rng, data);
    return pick(rng, OPERATORS)(seq, rng, vocab, data);
}
function crossover(a, b, rng) {
    if (a.length < 2 || b.length < 2)
        return rng() < 0.5 ? a.slice() : b.slice();
    const ca = randInt(rng, 1, a.length - 1);
    const cb = randInt(rng, 1, b.length - 1);
    return [...a.slice(0, ca), ...b.slice(cb)];
}
export function searchRawSequences(target, data, map, scorer = arrivalScorer, opts = {}) {
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
    const score = (seq) => {
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
        }
        catch {
            seeds = []; // no valid template build either (e.g. an unreachable target) -- fall through unseeded.
        }
    }
    let population = [];
    for (const seed of seeds)
        population.push(seed.slice());
    while (population.length < popSize) {
        const params = randomParams(rng, strategies, start);
        let seq = generateBuild(target, data, params);
        const passes = randInt(rng, 0, 4);
        for (let i = 0; i < passes; i++)
            seq = mutate(seq, rng, vocab, data);
        population.push(seq);
    }
    const history = [];
    let best = population[0];
    let bestScore = Infinity;
    const tournamentPick = (scored) => {
        let winner = scored[randInt(rng, 0, scored.length - 1)];
        for (let i = 1; i < tournamentSize; i++) {
            const c = scored[randInt(rng, 0, scored.length - 1)];
            if (c.s < winner.s)
                winner = c;
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
        const next = scored.slice(0, eliteCount).map((x) => x.seq);
        while (next.length < popSize) {
            const parentA = tournamentPick(scored);
            const parentB = tournamentPick(scored);
            let child = rng() < crossoverRate ? crossover(parentA, parentB, rng) : parentA.slice();
            const mutations = 1 + (rng() < 0.4 ? 1 : 0) + (rng() < 0.15 ? 1 : 0);
            for (let i = 0; i < mutations; i++)
                child = mutate(child, rng, vocab, data);
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
function simplifySequence(seq, targetScore, score) {
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
