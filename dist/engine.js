/**
 * sc2sim — an event-driven StarCraft II build-order economy simulator.
 *
 * Design goals (see README):
 *   1. No opponent, no map combat. We simulate ONE player's economy + tech,
 *      plus a lightweight SPATIAL layer (travel time / proxies) so we can ask
 *      "when does the army ARRIVE at the enemy", not just "when is it built".
 *   2. Event-driven "fast-forward": we jump the clock to the next moment
 *      something can happen. A full build runs in microseconds.
 *   3. All balance numbers live in `data.ts`; map numbers in `maps.ts`.
 *      The engine holds no constants.
 */
// --- Spatial / map model ------------------------------------------------
/** Reference unit speed (Stalker). Map distances are expressed relative to it. */
export const REF_SPEED = 2.95;
/** Travel time to the enemy for a unit produced at `loc`. */
export function travelToEnemy(ent, loc, map) {
    const base = loc === "proxy" ? map.proxyToEnemySeconds : map.homeToEnemySeconds;
    const speed = ent.moveSpeed && ent.moveSpeed > 0 ? ent.moveSpeed : REF_SPEED;
    return base * (REF_SPEED / speed);
}
function parseAction(raw) {
    const a = raw.trim();
    if (!a)
        return null;
    if (a.toLowerCase().startsWith("chrono:")) {
        return { chrono: true, name: a.slice(a.indexOf(":") + 1).trim(), location: "auto" };
    }
    const at = a.indexOf("@");
    if (at >= 0) {
        const loc = a.slice(at + 1).trim().toLowerCase();
        return {
            chrono: false,
            name: a.slice(0, at).trim(),
            location: loc === "proxy" ? "proxy" : "home",
        };
    }
    return { chrono: false, name: a, location: "auto" };
}
const EPS = 1e-6;
class State {
    constructor(data) {
        this.data = data;
        this.time = 0;
        this.completed = {};
        this.completedLoc = {};
        this.inProgress = [];
        this.probeReleases = [];
        this.proxyEstablished = false; // has a probe already reached the proxy site?
        const e = data.economy;
        this.minerals = e.startingMinerals;
        this.gas = e.startingGas;
        this.energy = e.nexusStartEnergy;
        this.probesTotal = e.startingWorkers;
        this.supplyUsed = e.startingWorkers;
        this.completed["Nexus"] = 1;
        this.completedLoc["Nexus"] = { home: 1, proxy: 0 };
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
    get busyProbes() {
        return this.probeReleases.length;
    }
    get availableProbes() {
        return this.probesTotal - this.busyProbes;
    }
    get supplyCap() {
        let cap = 0;
        for (const name in this.completed) {
            const ent = this.data.entities[name];
            if (ent)
                cap += ent.supplyProvided * this.completed[name];
        }
        return cap;
    }
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
    freeProducers(type, loc) {
        const done = this.completedLoc[type]?.[loc] ?? 0;
        const busy = this.inProgress.filter((p) => p.producer === type && p.location === loc).length;
        return done - busy;
    }
}
// ---------------------------------------------------------------------------
// Simulator
// ---------------------------------------------------------------------------
export function fmt(t) {
    const s = Math.round(t);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
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
function nextEventTime(s) {
    let t = Infinity;
    for (const p of s.inProgress)
        t = Math.min(t, p.finishTime);
    for (const r of s.probeReleases)
        t = Math.min(t, r);
    return t;
}
function advanceBy(s, dt, snaps) {
    if (dt <= 0)
        return;
    s.minerals += s.mineralRate * dt;
    s.gas += s.gasRate * dt;
    s.energy = Math.min(s.eco.nexusMaxEnergy, s.energy + s.energyRate * dt);
    s.time += dt;
    snap(s, snaps);
}
function advanceToNextEvent(s, snaps) {
    var _a, _b;
    const t = nextEventTime(s);
    if (!isFinite(t))
        return false;
    advanceBy(s, t - s.time, snaps);
    const done = s.inProgress.filter((p) => p.finishTime <= s.time + EPS);
    s.inProgress = s.inProgress.filter((p) => p.finishTime > s.time + EPS);
    for (const p of done) {
        s.completed[p.name] = (s.completed[p.name] ?? 0) + 1;
        if (p.kind === "structure") {
            const cl = ((_a = s.completedLoc)[_b = p.name] ?? (_a[_b] = { home: 0, proxy: 0 }));
            cl[p.location] += 1;
        }
        if (p.name === "Probe")
            s.probesTotal += 1;
    }
    s.probeReleases = s.probeReleases.filter((r) => r > s.time + EPS);
    snap(s, snaps);
    return true;
}
function snap(s, snaps) {
    const cur = {
        t: s.time,
        minerals: s.minerals,
        gas: s.gas,
        supplyUsed: s.supplyUsed,
        supplyCap: s.supplyCap,
        probes: s.probesTotal,
        energy: s.energy,
    };
    const last = snaps[snaps.length - 1];
    if (last && Math.abs(last.t - cur.t) < EPS)
        snaps[snaps.length - 1] = cur;
    else
        snaps.push(cur);
}
/** Pick where a unit is produced given its tag and available producers. */
function chooseUnitLocation(s, ent, tag) {
    if (tag === "proxy")
        return s.freeProducers(ent.producer, "proxy") >= 1 ? "proxy" : null;
    if (tag === "home")
        return s.freeProducers(ent.producer, "home") >= 1 ? "home" : null;
    // auto: prefer proxy (closer to enemy) then home
    if (s.freeProducers(ent.producer, "proxy") >= 1)
        return "proxy";
    if (s.freeProducers(ent.producer, "home") >= 1)
        return "home";
    return null;
}
export function simulate(data, order, map) {
    const s = new State(data);
    const log = [];
    const actions = [];
    const snaps = [];
    snap(s, snaps);
    const SAFETY = 100000;
    let guard = 0;
    for (const raw of order) {
        const pa = parseAction(raw);
        if (!pa)
            continue;
        if (pa.chrono) {
            castChrono(s, pa.name, log, snaps);
            if (++guard > SAFETY)
                break;
            continue;
        }
        const ent = data.entities[pa.name];
        if (!ent)
            return fail(s, log, snaps, actions, `Unknown entity "${pa.name}"`);
        const structLoc = pa.location === "proxy" ? "proxy" : "home";
        while (true) {
            if (++guard > SAFETY)
                return fail(s, log, snaps, actions, "Safety guard tripped");
            const reqOk = ent.requires.every((r) => s.count(r) >= 1);
            const unitLoc = ent.isStructure ? structLoc : chooseUnitLocation(s, ent, pa.location);
            const prodOk = ent.isStructure ? s.availableProbes >= 1 : unitLoc !== null;
            const supplyOk = s.supplyUsed + ent.supplyCost <= s.supplyCap + EPS;
            if (reqOk && prodOk && supplyOk) {
                const tAfford = timeToAfford(s, ent.minerals, ent.gas);
                const tEvent = nextEventTime(s) - s.time;
                if (tAfford <= tEvent + EPS || !isFinite(tEvent)) {
                    if (!isFinite(tAfford))
                        return fail(s, log, snaps, actions, `Can never afford "${ent.name}"`);
                    advanceBy(s, tAfford, snaps);
                    startEntity(s, ent, unitLoc, map, actions, log);
                    break;
                }
                advanceToNextEvent(s, snaps);
            }
            else {
                if (!advanceToNextEvent(s, snaps)) {
                    const why = !reqOk
                        ? `missing prerequisite (needs ${ent.requires.join(", ")})`
                        : !supplyOk
                            ? "supply blocked (no Pylon/Nexus queued)"
                            : "no free producer";
                    return fail(s, log, snaps, actions, `Deadlocked before "${ent.name}": ${why}`);
                }
            }
        }
    }
    // Post-pass: compute arrival times now that chrono has finalized finishTimes.
    for (const a of actions) {
        if (a.kind === "unit") {
            const ent = data.entities[a.name];
            if (ent.isWorker)
                continue; // workers aren't army
            a.arrivalTime = a.finishTime + travelToEnemy(ent, a.location, map);
        }
    }
    return {
        ok: true,
        finishTime: s.time,
        actions,
        log,
        snapshots: snaps,
        final: snaps[snaps.length - 1],
    };
}
function startEntity(s, ent, loc, map, actions, log) {
    s.minerals -= ent.minerals;
    s.gas -= ent.gas;
    const kind = ent.isStructure ? "structure" : "unit";
    let finishTime;
    if (ent.isStructure) {
        if (loc === "proxy") {
            // The first proxy building pays the full probe walk; once a probe is out
            // there, subsequent proxy buildings start locally (no repeated cross-map trip).
            const travel = s.proxyEstablished ? 0 : map.proxyProbeTravelSeconds;
            const occupancy = s.proxyEstablished ? s.eco.probeBuildOccupancy : map.proxyProbeTravelSeconds;
            s.proxyEstablished = true;
            s.probeReleases.push(s.time + occupancy);
            finishTime = s.time + travel + ent.buildTime;
        }
        else {
            s.probeReleases.push(s.time + s.eco.probeBuildOccupancy);
            finishTime = s.time + ent.buildTime;
        }
    }
    else {
        s.supplyUsed += ent.supplyCost;
        finishTime = s.time + ent.buildTime;
    }
    const row = { name: ent.name, kind, startTime: s.time, finishTime, location: loc };
    s.inProgress.push({
        name: ent.name,
        finishTime,
        kind,
        producer: ent.isStructure ? "Probe" : ent.producer,
        location: loc,
        boosted: false,
        ref: row,
    });
    actions.push(row);
    const tag = loc === "proxy" ? " @proxy" : "";
    log.push(`${fmt(s.time)}  start ${ent.name}${tag}  (done ${fmt(finishTime)})`);
}
function castChrono(s, target, log, snaps) {
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
        const tEnergy = (e.chronoCost - s.energy) / (s.energyRate || Infinity);
        const tEvent = nextEventTime(s) - s.time;
        if (tEnergy <= tEvent + EPS)
            advanceBy(s, tEnergy, snaps);
        else
            advanceToNextEvent(s, snaps);
    }
}
function fail(s, log, snaps, actions, error) {
    log.push(`ERROR: ${error}`);
    return {
        ok: false,
        error,
        finishTime: s.time,
        actions,
        log,
        snapshots: snaps,
        final: snaps[snaps.length - 1],
    };
}
/**
 * Time by which the target composition has ALL ARRIVED at the enemy.
 * For each unit type we take the k-th earliest arrival (k = required count).
 * Returns Infinity if the build never produces enough of some unit.
 */
export function compositionArrivalTime(res, comp) {
    if (!res.ok)
        return Infinity;
    let worst = 0;
    for (const [name, need] of Object.entries(comp)) {
        const arrivals = res.actions
            .filter((a) => a.name === name && a.arrivalTime !== undefined)
            .map((a) => a.arrivalTime)
            .sort((x, y) => x - y);
        if (arrivals.length < need)
            return Infinity;
        worst = Math.max(worst, arrivals[need - 1]);
    }
    return worst;
}
