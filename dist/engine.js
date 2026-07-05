/**
 * sc2sim — an event-driven StarCraft II build-order economy simulator.
 *
 * Design goals (see README):
 *   1. No opponent, no combat, no map. We simulate ONE player's economy + tech.
 *   2. Event-driven "fast-forward": we jump the clock to the next moment something
 *      can happen, rather than ticking every frame. A full build runs in microseconds.
 *   3. All balance numbers live in `data.ts` (a data file), never in this engine.
 *      When a patch changes the numbers, you swap the data, not the code.
 *
 * This file is the engine. It is race-agnostic; `data.ts` supplies the Protoss data.
 */
const EPS = 1e-6;
class State {
    constructor(data) {
        this.data = data;
        this.time = 0;
        this.completed = {};
        this.inProgress = [];
        /** Release times for probes temporarily pulled off minerals to build. */
        this.probeReleases = [];
        const e = data.economy;
        this.minerals = e.startingMinerals;
        this.gas = e.startingGas;
        this.energy = e.nexusStartEnergy;
        this.probesTotal = e.startingWorkers;
        this.supplyUsed = e.startingWorkers; // each Probe costs 1 supply
        this.completed["Nexus"] = 1;
    }
    get eco() {
        return this.data.economy;
    }
    count(name) {
        return this.completed[name] ?? 0;
    }
    get nexusCount() {
        return this.count("Nexus");
    }
    get assimilators() {
        return this.count("Assimilator");
    }
    /** Probes currently occupied warping in a structure. */
    get busyProbes() {
        return this.probeReleases.length;
    }
    get availableProbes() {
        return this.probesTotal - this.busyProbes;
    }
    // Supply cap comes only from COMPLETED providers (Nexus, Pylon, ...).
    get supplyCap() {
        let cap = 0;
        for (const name in this.completed) {
            const ent = this.data.entities[name];
            if (ent)
                cap += ent.supplyProvided * this.completed[name];
        }
        return cap;
    }
    // --- Worker assignment + income --------------------------------------
    // Policy: put up to 3 workers on gas per Assimilator, the rest on minerals.
    get gasWorkers() {
        return Math.min(3 * this.assimilators, this.availableProbes);
    }
    get mineralWorkers() {
        return this.availableProbes - this.gasWorkers;
    }
    get mineralRate() {
        const e = this.eco;
        const patches = this.nexusCount * e.mineralPatchesPerBase;
        const w = this.mineralWorkers;
        const first = Math.min(w, patches);
        const second = Math.max(0, Math.min(w - patches, patches));
        return first * e.mineralRateFirstWorker + second * e.mineralRateSecondWorker;
    }
    get gasRate() {
        return this.gasWorkers * this.eco.gasRatePerWorker;
    }
    get energyRate() {
        return this.nexusCount * this.eco.nexusEnergyRegen;
    }
    freeProducers(type) {
        const busy = this.inProgress.filter((p) => p.producer === type).length;
        return this.count(type) - busy;
    }
}
// ---------------------------------------------------------------------------
// Simulator
// ---------------------------------------------------------------------------
function fmt(t) {
    const s = Math.round(t);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
/** Time until minerals+gas both reach the target, given current rates. */
function timeToAfford(s, minNeed, gasNeed) {
    const tMin = minNeed <= s.minerals + EPS
        ? 0
        : s.mineralRate > 0
            ? (minNeed - s.minerals) / s.mineralRate
            : Infinity;
    const tGas = gasNeed <= s.gas + EPS
        ? 0
        : s.gasRate > 0
            ? (gasNeed - s.gas) / s.gasRate
            : Infinity;
    return Math.max(tMin, tGas);
}
/** Next discrete event time (a production or probe-release completes). */
function nextEventTime(s) {
    let t = Infinity;
    for (const p of s.inProgress)
        t = Math.min(t, p.finishTime);
    for (const r of s.probeReleases)
        t = Math.min(t, r);
    return t;
}
/** Accrue resources/energy over dt with no completions in between. */
function advanceBy(s, dt, snapshots) {
    if (dt <= 0)
        return;
    s.minerals += s.mineralRate * dt;
    s.gas += s.gasRate * dt;
    s.energy = Math.min(s.eco.nexusMaxEnergy, s.energy + s.energyRate * dt);
    s.time += dt;
    snap(s, snapshots);
}
/** Jump to the next completion event and apply all effects at that instant. */
function advanceToNextEvent(s, snapshots) {
    const t = nextEventTime(s);
    if (!isFinite(t))
        return false;
    advanceBy(s, t - s.time, snapshots);
    // Complete productions finishing now.
    const done = s.inProgress.filter((p) => p.finishTime <= s.time + EPS);
    s.inProgress = s.inProgress.filter((p) => p.finishTime > s.time + EPS);
    for (const p of done) {
        s.completed[p.name] = (s.completed[p.name] ?? 0) + 1;
        if (p.name === "Probe")
            s.probesTotal += 1;
    }
    // Release probes that finished warping in a structure.
    s.probeReleases = s.probeReleases.filter((r) => r > s.time + EPS);
    snap(s, snapshots);
    return true;
}
function snap(s, snapshots) {
    const last = snapshots[snapshots.length - 1];
    const cur = {
        t: s.time,
        minerals: s.minerals,
        gas: s.gas,
        supplyUsed: s.supplyUsed,
        supplyCap: s.supplyCap,
        probes: s.probesTotal,
        energy: s.energy,
    };
    if (last && Math.abs(last.t - cur.t) < EPS)
        snapshots[snapshots.length - 1] = cur;
    else
        snapshots.push(cur);
}
export function simulate(data, order) {
    const s = new State(data);
    const log = [];
    const actions = [];
    const snapshots = [];
    snap(s, snapshots);
    const SAFETY = 100000;
    let guard = 0;
    for (const raw of order) {
        const action = raw.trim();
        if (!action)
            continue;
        if (action.toLowerCase().startsWith("chrono:")) {
            const target = action.slice(action.indexOf(":") + 1).trim();
            const res = castChrono(s, target, log, snapshots);
            if (!res && ++guard > SAFETY)
                break;
            continue;
        }
        const ent = data.entities[action];
        if (!ent) {
            return fail(s, log, snapshots, actions, `Unknown entity "${action}"`);
        }
        // Advance until we can legally start this entity.
        while (true) {
            if (++guard > SAFETY)
                return fail(s, log, snapshots, actions, "Safety guard tripped (loop)");
            const reqOk = ent.requires.every((r) => s.count(r) >= 1);
            const prodOk = ent.producer === "Probe"
                ? s.availableProbes >= 1
                : s.freeProducers(ent.producer) >= 1;
            const supplyOk = s.supplyUsed + ent.supplyCost <= s.supplyCap + EPS;
            if (reqOk && prodOk && supplyOk) {
                const tAfford = timeToAfford(s, ent.minerals, ent.gas);
                const tEvent = nextEventTime(s) - s.time;
                if (tAfford <= tEvent + EPS || !isFinite(tEvent)) {
                    if (isFinite(tAfford)) {
                        advanceBy(s, tAfford, snapshots);
                        startEntity(s, ent, actions, log);
                        break;
                    }
                    return fail(s, log, snapshots, actions, `Can never afford "${ent.name}" (no income for a required resource)`);
                }
                advanceToNextEvent(s, snapshots);
            }
            else {
                // Blocked on a discrete condition (tech / producer / supply).
                if (!advanceToNextEvent(s, snapshots)) {
                    const why = !reqOk
                        ? `missing prerequisite (needs ${ent.requires.join(", ")})`
                        : !supplyOk
                            ? "supply blocked (no Pylon/Nexus queued)"
                            : "no free producer";
                    return fail(s, log, snapshots, actions, `Deadlocked before "${ent.name}": ${why}`);
                }
            }
        }
    }
    const result = {
        ok: true,
        finishTime: s.time,
        actions,
        log,
        snapshots,
        final: snapshots[snapshots.length - 1],
    };
    return result;
}
function startEntity(s, ent, actions, log) {
    s.minerals -= ent.minerals;
    s.gas -= ent.gas;
    const kind = ent.isStructure ? "structure" : "unit";
    if (ent.isStructure) {
        // A Probe warps it in and is briefly pulled off minerals.
        s.probeReleases.push(s.time + s.eco.probeBuildOccupancy);
    }
    else {
        // Units reserve supply the instant production starts.
        s.supplyUsed += ent.supplyCost;
    }
    const finishTime = s.time + ent.buildTime;
    const row = { name: ent.name, kind, startTime: s.time, finishTime };
    s.inProgress.push({
        name: ent.name,
        finishTime,
        kind,
        producer: ent.isStructure ? "Probe" : ent.producer,
        boosted: false,
        ref: row,
    });
    actions.push(row);
    log.push(`${fmt(s.time)}  start ${ent.name}  (done ${fmt(finishTime)})`);
}
/**
 * Cast Chrono Boost on the in-progress item named `target`.
 * +50% speed for a 20s window. Time saved on remaining work R:
 *   R > boostWork  ->  save (window * (mult-1))        (boost expires before finish)
 *   else           ->  save R * (mult-1)/mult          (item finishes during boost)
 */
function castChrono(s, target, log, snapshots) {
    const e = s.eco;
    const boostWork = e.chronoBoostWindow * e.chronoSpeedMultiplier;
    let guard = 0;
    while (true) {
        if (++guard > 100000)
            return false;
        const item = s.inProgress
            .filter((p) => p.name === target && !p.boosted)
            .sort((a, b) => a.finishTime - b.finishTime)[0];
        if (!item) {
            log.push(`${fmt(s.time)}  chrono ${target} SKIPPED (not in production)`);
            return false;
        }
        if (s.energy >= e.chronoCost - EPS) {
            const R = item.finishTime - s.time;
            const saved = R > boostWork
                ? e.chronoBoostWindow * (e.chronoSpeedMultiplier - 1)
                : (R * (e.chronoSpeedMultiplier - 1)) / e.chronoSpeedMultiplier;
            item.finishTime -= saved;
            item.ref.finishTime = item.finishTime;
            item.boosted = true;
            s.energy -= e.chronoCost;
            log.push(`${fmt(s.time)}  chrono ${target}  (-${saved.toFixed(1)}s, done ${fmt(item.finishTime)})`);
            return true;
        }
        // Need energy: wait for it, but not past the target finishing or another event.
        const tEnergy = (e.chronoCost - s.energy) / (s.energyRate || Infinity);
        const tEvent = nextEventTime(s) - s.time;
        if (tEnergy <= tEvent + EPS) {
            advanceBy(s, tEnergy, snapshots);
        }
        else {
            advanceToNextEvent(s, snapshots);
        }
    }
}
function fail(s, log, snapshots, actions, error) {
    log.push(`ERROR: ${error}`);
    return {
        ok: false,
        error,
        finishTime: s.time,
        actions,
        log,
        snapshots,
        final: snapshots[snapshots.length - 1],
    };
}
export { fmt };
