import { simulate, compositionArrivalTime, valueOverTime, fmt, workerNameOf } from "./engine.js";
export const STRATEGIES = ["home", "proxyWalk", "proxyWarp"];
/** The strategies worth searching for this race -- excludes proxyWarp for
 * anything without Warp Gate tech, since generateBuild() would otherwise
 * just silently downgrade it to a "home" build with wasted search budget. */
export function defaultStrategies(data) {
    return data.economy.hasWarpGate ? STRATEGIES : STRATEGIES.filter((s) => s !== "proxyWarp");
}
function range(lo, hi) {
    const out = [];
    for (let i = lo; i <= hi; i++)
        out.push(i);
    return out;
}
/**
 * Structures required to produce a composition, ordered by dependency depth.
 * The single canonical implementation -- search.ts imports this rather than
 * keeping its own copy (the two drifted once already: search.ts's copy got
 * race-agnostic treatment of the townhall exclusion before this one did).
 */
export function techClosure(target, data, extra = []) {
    const need = new Set();
    const addStruct = (name) => {
        const e = data.entities[name];
        if (!e || !e.isStructure || need.has(name))
            return;
        for (const r of e.requires)
            addStruct(r);
        need.add(name);
    };
    for (const u of Object.keys(target)) {
        const e = data.entities[u];
        if (!e)
            continue;
        addStruct(e.producer);
        for (const r of e.requires)
            addStruct(r);
    }
    for (const x of extra)
        addStruct(x);
    // The supply structure is auto-inserted by generateBuild's own supply
    // logic, not a discovery target; the townhall is deliberately NOT excluded
    // (see buildVocabulary in search.ts) so the GA can discover expansions.
    need.delete(data.economy.supplyStructure);
    const depth = (name) => {
        const e = data.entities[name];
        const reqs = e.requires.filter((r) => data.entities[r]?.isStructure);
        return reqs.length ? 1 + Math.max(...reqs.map(depth)) : 0;
    };
    return [...need].sort((a, b) => depth(a) - depth(b));
}
/** Turn a parameter set into a valid, supply-correct action list. Works for
 * any race: names are all derived from `data` (worker via workerNameOf(),
 * supply/gas/townhall via data.economy) rather than hardcoded Protoss
 * entity names, and Chrono/Warp-Gate steps are gated behind
 * data.economy.hasChrono/hasWarpGate so they're simply no-ops (never
 * emitted) for races that don't have those mechanics -- see the 2026-07-05
 * fix (this used to crash immediately for Terran/Zerg on `E("Nexus")`). */
export function generateBuild(target, data, p) {
    const A = [];
    const E = (n) => data.entities[n];
    const worker = workerNameOf(data);
    const supplyStruct = data.economy.supplyStructure;
    const supplyPerStructure = E(supplyStruct).supplyProvided;
    let supUsed = data.economy.startingWorkers;
    let supCap = E(data.economy.startingTownhall).supplyProvided;
    let probes = supUsed;
    // Defensive: only ever true for a race that actually has Warp Gate tech,
    // regardless of what strategy the caller passed in.
    const warp = p.strategy === "proxyWarp" && data.economy.hasWarpGate;
    const proxyProd = p.strategy === "proxyWalk";
    const prodTag = proxyProd ? "@proxy" : "";
    const unitTag = proxyProd ? "@proxy" : ""; // warp units are untagged (auto warp-in)
    const ensureSupply = (cost) => {
        while (supUsed + cost > supCap) {
            A.push(supplyStruct);
            supCap += supplyPerStructure;
        }
    };
    const addProbe = () => {
        ensureSupply(1);
        A.push(worker);
        supUsed += 1;
        probes += 1;
    };
    const addUnit = (n) => {
        const e = E(n);
        ensureSupply(e.supplyCost);
        A.push(n + unitTag);
        supUsed += e.supplyCost;
    };
    const maybeProbe = () => {
        if (probes < p.probeTarget)
            addProbe();
    };
    A.push(worker);
    supUsed += 1;
    probes += 1;
    if (data.economy.hasChrono)
        A.push(`chrono:${worker}`);
    for (let i = 0; i < p.openerProbes; i++)
        maybeProbe();
    A.push(supplyStruct);
    supCap += supplyPerStructure;
    maybeProbe();
    // Warp Gate research needs a Cybernetics Core even if the army itself doesn't.
    const structs = techClosure(target, data, warp ? ["CyberneticsCore"] : []);
    const primaryUnit = Object.keys(target)[0];
    const primary = E(primaryUnit).producer;
    const needGas = Object.keys(target).some((n) => E(n).gas > 0);
    const gasCount = needGas || warp ? Math.max(1, p.gasCount) : p.gasCount; // warp research needs gas
    for (let i = 0; i < gasCount; i++) {
        A.push(data.economy.gasStructure);
        maybeProbe();
    }
    if (proxyProd && data.economy.hasWarpGate) {
        // Power for proxy production buildings -- a Protoss-only mechanic
        // (Terran/Zerg production buildings need no nearby supply structure to
        // function, so there's nothing to build here for them).
        A.push(`${supplyStruct}@proxy`);
        supCap += supplyPerStructure;
    }
    for (const st of structs) {
        A.push(st === primary ? st + prodTag : st);
        maybeProbe();
    }
    for (let i = 1; i < p.producerCount; i++) {
        A.push(primary + prodTag);
        maybeProbe();
    }
    // Second Chrono charge (~89s after the opener, from Nexus energy regen):
    // "probe" is a no-op unless a worker happens to be in production when the
    // simulator reaches this point in the sequence (harmless skip otherwise);
    // "primary" is applied below, right when the first primary-unit action is
    // emitted (chrono needs the unit already IN PROGRESS to have any target).
    // Both are pure no-ops (never emitted) for races without hasChrono.
    if (data.economy.hasChrono && p.secondChrono === "probe")
        A.push(`chrono:${worker}`);
    const earlyHomeUnits = warp ? Math.min(p.earlyHomeUnits, target[primaryUnit] ?? 0) : 0;
    if (warp) {
        // Keep the home Gateways producing (units walk across the map) instead of
        // sitting idle for the ~100s Warp Gate research takes.
        for (let i = 0; i < earlyHomeUnits; i++)
            addUnit(primaryUnit);
        A.push("WarpGateResearch");
        A.push("chrono:WarpGateResearch");
        A.push(`${supplyStruct}@proxy`); // warp anchor near the enemy
        supCap += supplyPerStructure;
        for (let i = 0; i < p.producerCount; i++)
            A.push("WarpGate"); // morph the Gateways
    }
    while (probes < p.probeTarget)
        addProbe();
    const rem = { ...target };
    if (earlyHomeUnits > 0)
        rem[primaryUnit] -= earlyHomeUnits;
    const types = Object.keys(target);
    let chronoedPrimary = false;
    let any = true;
    while (any) {
        any = false;
        for (const n of types) {
            if (rem[n] > 0) {
                addUnit(n);
                rem[n]--;
                any = true;
                if (data.economy.hasChrono && p.secondChrono === "primary" && n === primaryUnit && !chronoedPrimary) {
                    A.push(`chrono:${primaryUnit}`);
                    chronoedPrimary = true;
                }
            }
        }
    }
    return A;
}
/** The full parameterized search space for one target composition. Shared by
 * optimize() (scores by arrival time) and valueFrontier() (scores by value
 * delivered over time) so both stay in sync as the template evolves. */
function* enumerateBuilds(target, data, map, opts) {
    const maxProbes = opts.maxProbes ?? 20;
    const maxProducers = opts.maxProducers ?? 6;
    const strategies = opts.strategies ?? defaultStrategies(data);
    const maxEarlyHomeUnits = opts.maxEarlyHomeUnits ?? 6;
    const start = data.economy.startingWorkers;
    // No point enumerating 3 identical candidates for a race with no Chrono.
    const chronoOptions = data.economy.hasChrono ? ["none", "probe", "primary"] : ["none"];
    for (const strategy of strategies) {
        const earlyOptions = strategy === "proxyWarp" ? range(0, maxEarlyHomeUnits) : [0];
        for (let openerProbes = 0; openerProbes <= 4; openerProbes++) {
            for (let probeTarget = start; probeTarget <= maxProbes; probeTarget++) {
                for (let producerCount = 1; producerCount <= maxProducers; producerCount++) {
                    for (let gasCount = 0; gasCount <= 2; gasCount++) {
                        for (const earlyHomeUnits of earlyOptions) {
                            for (const secondChrono of chronoOptions) {
                                const params = {
                                    openerProbes, probeTarget, producerCount, gasCount, strategy, earlyHomeUnits, secondChrono,
                                };
                                const order = generateBuild(target, data, params);
                                const result = simulate(data, order, map);
                                yield { params, order, result };
                            }
                        }
                    }
                }
            }
        }
    }
}
export function optimize(target, data, map, opts = {}) {
    let best = null;
    const bestByStrategy = {};
    let evaluated = 0;
    for (const { params, order, result } of enumerateBuilds(target, data, map, opts)) {
        evaluated++;
        const arrival = compositionArrivalTime(result, target);
        if (!isFinite(arrival))
            continue;
        if (!best || arrival < best.arrival)
            best = { arrival, params, order, result };
        const sb = bestByStrategy[params.strategy];
        if (!sb || arrival < sb.arrival)
            bestByStrategy[params.strategy] = { arrival, params, order };
    }
    if (!best)
        throw new Error("No valid build found for target composition");
    return { target, arrival: best.arrival, params: best.params, order: best.order, result: best.result, bestByStrategy, evaluated };
}
/**
 * The Pareto frontier of (time, value delivered at the enemy) across every
 * build the search explores, for EVERY target composition given — not just
 * one fixed unit count. Answers "what's the most fighting value achievable
 * by time t", generalizing compositionArrivalTime (which only answers "when
 * does exactly this composition arrive"). See engine.ts's unitValue() /
 * valueOverTime() for what "value" means here and its limitations — this is
 * a ranking signal, not a combat outcome predictor.
 */
export function valueFrontier(targets, data, map, opts = {}) {
    const pool = [];
    for (const target of targets) {
        for (const { params, order, result } of enumerateBuilds(target, data, map, opts)) {
            for (const v of valueOverTime(result, data)) {
                pool.push({ t: v.t, value: v.value, name: v.name, target, params, order });
            }
        }
    }
    pool.sort((a, b) => a.t - b.t || b.value - a.value);
    const frontier = [];
    let maxValue = -Infinity;
    for (const p of pool) {
        if (p.value > maxValue) {
            frontier.push(p);
            maxValue = p.value;
        }
    }
    return frontier;
}
export function describeComposition(comp) {
    return Object.entries(comp)
        .map(([n, c]) => `${c} ${n}`)
        .join(" + ");
}
export { fmt };
