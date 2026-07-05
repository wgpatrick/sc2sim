import { simulate, compositionArrivalTime, fmt } from "./engine.js";
export const STRATEGIES = ["home", "proxyWalk", "proxyWarp"];
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
    const primary = E(Object.keys(target)[0]).producer;
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
    if (warp) {
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
export function optimize(target, data, map, opts = {}) {
    const maxProbes = opts.maxProbes ?? 20;
    const maxProducers = opts.maxProducers ?? 6;
    const strategies = opts.strategies ?? STRATEGIES;
    const start = data.economy.startingWorkers;
    let best = null;
    const bestByStrategy = {};
    let evaluated = 0;
    for (const strategy of strategies) {
        for (let openerProbes = 0; openerProbes <= 4; openerProbes++) {
            for (let probeTarget = start; probeTarget <= maxProbes; probeTarget++) {
                for (let producerCount = 1; producerCount <= maxProducers; producerCount++) {
                    for (let gasCount = 0; gasCount <= 2; gasCount++) {
                        const params = { openerProbes, probeTarget, producerCount, gasCount, strategy };
                        const order = generateBuild(target, data, params);
                        const result = simulate(data, order, map);
                        evaluated++;
                        const arrival = compositionArrivalTime(result, target);
                        if (!isFinite(arrival))
                            continue;
                        if (!best || arrival < best.arrival)
                            best = { arrival, params, order, result };
                        const sb = bestByStrategy[strategy];
                        if (!sb || arrival < sb.arrival)
                            bestByStrategy[strategy] = { arrival, params, order };
                    }
                }
            }
        }
    }
    if (!best)
        throw new Error("No valid build found for target composition");
    return { target, arrival: best.arrival, params: best.params, order: best.order, result: best.result, bestByStrategy, evaluated };
}
export function describeComposition(comp) {
    return Object.entries(comp)
        .map(([n, c]) => `${c} ${n}`)
        .join(" + ");
}
export { fmt };
