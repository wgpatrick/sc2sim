import { simulate, compositionArrivalTime, valueOverTime, fmt } from "./engine.js";
export const STRATEGIES = ["home", "proxyWalk", "proxyWarp"];
function range(lo, hi) {
    const out = [];
    for (let i = lo; i <= hi; i++)
        out.push(i);
    return out;
}
/** Structures required to produce a composition, ordered by dependency depth. */
function techClosure(target, data, extra = []) {
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
    need.delete("Pylon");
    need.delete("Nexus");
    const depth = (name) => {
        const e = data.entities[name];
        const reqs = e.requires.filter((r) => data.entities[r]?.isStructure);
        return reqs.length ? 1 + Math.max(...reqs.map(depth)) : 0;
    };
    return [...need].sort((a, b) => depth(a) - depth(b));
}
/** Turn a parameter set into a valid, supply-correct action list. */
export function generateBuild(target, data, p) {
    const A = [];
    const E = (n) => data.entities[n];
    const pylonSupply = E("Pylon").supplyProvided;
    let supUsed = data.economy.startingWorkers;
    let supCap = E("Nexus").supplyProvided;
    let probes = supUsed;
    const warp = p.strategy === "proxyWarp";
    const proxyProd = p.strategy === "proxyWalk";
    const prodTag = proxyProd ? "@proxy" : "";
    const unitTag = proxyProd ? "@proxy" : ""; // warp units are untagged (auto warp-in)
    const ensureSupply = (cost) => {
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
    A.push("Probe");
    supUsed += 1;
    probes += 1;
    A.push("chrono:Probe");
    for (let i = 0; i < p.openerProbes; i++)
        maybeProbe();
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
        for (let i = 0; i < earlyHomeUnits; i++)
            addUnit(primaryUnit);
        A.push("WarpGateResearch");
        A.push("chrono:WarpGateResearch");
        A.push("Pylon@proxy"); // warp anchor near the enemy
        supCap += pylonSupply;
        for (let i = 0; i < p.producerCount; i++)
            A.push("WarpGate"); // morph the Gateways
    }
    while (probes < p.probeTarget)
        addProbe();
    const rem = { ...target };
    if (earlyHomeUnits > 0)
        rem[primaryUnit] -= earlyHomeUnits;
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
/** The full parameterized search space for one target composition. Shared by
 * optimize() (scores by arrival time) and valueFrontier() (scores by value
 * delivered over time) so both stay in sync as the template evolves. */
function* enumerateBuilds(target, data, map, opts) {
    const maxProbes = opts.maxProbes ?? 20;
    const maxProducers = opts.maxProducers ?? 6;
    const strategies = opts.strategies ?? STRATEGIES;
    const maxEarlyHomeUnits = opts.maxEarlyHomeUnits ?? 6;
    const start = data.economy.startingWorkers;
    for (const strategy of strategies) {
        const earlyOptions = strategy === "proxyWarp" ? range(0, maxEarlyHomeUnits) : [0];
        for (let openerProbes = 0; openerProbes <= 4; openerProbes++) {
            for (let probeTarget = start; probeTarget <= maxProbes; probeTarget++) {
                for (let producerCount = 1; producerCount <= maxProducers; producerCount++) {
                    for (let gasCount = 0; gasCount <= 2; gasCount++) {
                        for (const earlyHomeUnits of earlyOptions) {
                            const params = { openerProbes, probeTarget, producerCount, gasCount, strategy, earlyHomeUnits };
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
