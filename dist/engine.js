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
/**
 * A single number standing in for "how much a unit is worth in a fight",
 * used to compare build orders by VALUE delivered over time instead of raw
 * unit counts. sqrt(DPS * EHP) is the classic Lanchester-square-law
 * approximation of relative fighting power (geometric mean of offense and
 * defense) — it is NOT a combat resolver: it ignores range, splash, bonus
 * damage vs armor types, upgrades, and unit synergy/counters entirely.
 * Treat it as a rough ranking signal, not a win/loss prediction.
 */
export function unitValue(ent) {
    if (!ent.dps)
        return 0;
    const ehp = (ent.hp ?? 0) + (ent.shields ?? 0);
    return Math.sqrt(ent.dps * ehp);
}
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
        var _a;
        this.data = data;
        this.time = 0;
        this.completed = {};
        this.completedLoc = {};
        this.inProgress = [];
        this.probeReleases = [];
        this.proxyEstablished = false; // has a probe already reached the proxy site?
        this.researched = new Set(); // completed upgrades (e.g. WarpGateResearch)
        /** Warp Gates on cooldown after a warp-in: freed at `until`. */
        this.producerReleases = [];
        /** Zerg only: stored larva per location, and pending regen events. */
        this.larva = { home: 0, proxy: 0 };
        this.larvaRegens = [];
        const e = data.economy;
        this.minerals = e.startingMinerals;
        this.gas = e.startingGas;
        this.energy = e.nexusStartEnergy;
        this.probesTotal = e.startingWorkers;
        this.supplyUsed = e.startingWorkers;
        this.completed[e.startingTownhall] = 1;
        this.completedLoc[e.startingTownhall] = { home: 1, proxy: 0 };
        for (const [name, count] of Object.entries(e.startingUnits ?? {})) {
            this.completed[name] = (this.completed[name] ?? 0) + count;
            ((_a = this.completedLoc)[name] ?? (_a[name] = { home: 0, proxy: 0 })).home += count;
        }
        if (e.larvaRegenSeconds != null)
            this.larva.home = e.larvaCapPerTownhall ?? 3;
    }
    get eco() {
        return this.data.economy;
    }
    count(name) {
        return this.completed[name] ?? 0;
    }
    get townhallCount() {
        return this.count(this.eco.startingTownhall);
    }
    get gasStructureCount() {
        return this.count(this.eco.gasStructure);
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
        return Math.min(3 * this.gasStructureCount, this.availableProbes);
    }
    get mineralWorkers() {
        return this.availableProbes - this.gasWorkers;
    }
    get mineralRate() {
        const e = this.eco;
        const patches = this.townhallCount * e.mineralPatchesPerBase;
        const w = this.mineralWorkers;
        const t1 = Math.min(w, patches); // 1st worker per patch
        const t2 = Math.max(0, Math.min(w - patches, patches)); // 2nd worker per patch
        const t3 = Math.max(0, Math.min(w - 2 * patches, patches)); // 3rd (oversaturation)
        const raw = t1 * e.mineralRateFirstWorker +
            t2 * e.mineralRateSecondWorker +
            t3 * e.mineralRateThirdWorker;
        return raw * e.miningMicro;
    }
    get gasRate() {
        return this.gasWorkers * this.eco.gasRatePerWorker;
    }
    get energyRate() {
        return this.townhallCount * this.eco.nexusEnergyRegen;
    }
    freeProducers(type, loc) {
        const done = this.completedLoc[type]?.[loc] ?? 0;
        const busy = this.inProgress.filter((p) => p.producer === type && p.location === loc).length;
        const cooling = this.producerReleases.filter((r) => r.type === type && r.loc === loc).length;
        return done - busy - cooling;
    }
    larvaCap(loc) {
        return (this.eco.larvaCapPerTownhall ?? 3) * (this.completedLoc[this.eco.startingTownhall]?.[loc] ?? 0);
    }
    /** Requirement met if the structure is complete OR the upgrade is researched. */
    reqMet(name) {
        return this.count(name) >= 1 || this.researched.has(name);
    }
    get proxyPylonExists() {
        return (this.completedLoc["Pylon"]?.proxy ?? 0) >= 1;
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
    for (const r of s.producerReleases)
        t = Math.min(t, r.until);
    for (const r of s.larvaRegens)
        t = Math.min(t, r.at);
    return t;
}
/** Consuming a larva always opens room for one more, up to the per-location
 * cap -- schedule its regen unconditionally; applying it later is a no-op
 * if the pool is already full by then. */
function scheduleLarvaRegen(s, loc) {
    const seconds = s.eco.larvaRegenSeconds;
    if (seconds == null)
        return;
    s.larvaRegens.push({ loc, at: s.time + seconds });
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
    var _a, _b, _c, _d, _e, _f;
    const t = nextEventTime(s);
    if (!isFinite(t))
        return false;
    advanceBy(s, t - s.time, snaps);
    const done = s.inProgress.filter((p) => p.finishTime <= s.time + EPS);
    s.inProgress = s.inProgress.filter((p) => p.finishTime > s.time + EPS);
    for (const p of done) {
        if (p.kind === "upgrade") {
            s.researched.add(p.name);
            continue;
        }
        if (p.kind === "morph") {
            // p.producer holds the FROM entity (e.g. Gateway->WarpGate, Zergling->Baneling).
            s.completed[p.producer] = (s.completed[p.producer] ?? 0) - 1;
            ((_a = s.completedLoc)[_b = p.producer] ?? (_a[_b] = { home: 0, proxy: 0 }))[p.location] -= 1;
            s.completed[p.name] = (s.completed[p.name] ?? 0) + 1;
            ((_c = s.completedLoc)[_d = p.name] ?? (_c[_d] = { home: 0, proxy: 0 }))[p.location] += 1;
            continue;
        }
        s.completed[p.name] = (s.completed[p.name] ?? 0) + 1;
        // Location-split count for ALL kinds, not just structures: a unit can
        // later be consumed as a morphFrom source (e.g. Zergling -> Baneling),
        // which checks freeProducers()/completedLoc same as a building would.
        ((_e = s.completedLoc)[_f = p.name] ?? (_e[_f] = { home: 0, proxy: 0 }))[p.location] += 1;
        if (p.name === "Probe")
            s.probesTotal += 1;
    }
    s.probeReleases = s.probeReleases.filter((r) => r > s.time + EPS);
    s.producerReleases = s.producerReleases.filter((r) => r.until > s.time + EPS);
    for (const r of s.larvaRegens) {
        if (r.at <= s.time + EPS && s.larva[r.loc] < s.larvaCap(r.loc))
            s.larva[r.loc] += 1;
    }
    s.larvaRegens = s.larvaRegens.filter((r) => r.at > s.time + EPS);
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
/** Decide how (and whether) an entity can start right now. null = not yet. */
function planStart(s, ent, tag) {
    if (ent.isUpgrade) {
        return s.freeProducers(ent.producer, "home") >= 1
            ? { mode: "research", kind: "upgrade", unitLoc: "home", producerType: ent.producer, producerLoc: "home" }
            : null;
    }
    if (ent.morphFrom) {
        const loc = tag === "proxy" ? "proxy" : "home";
        return s.freeProducers(ent.morphFrom, loc) >= 1
            ? { mode: "morph", kind: "morph", unitLoc: loc, producerType: ent.morphFrom, producerLoc: loc }
            : null;
    }
    if (ent.isStructure) {
        const loc = tag === "proxy" ? "proxy" : "home";
        return s.availableProbes >= 1 ? { mode: "build", kind: "structure", unitLoc: loc } : null;
    }
    return chooseProduction(s, ent, tag);
}
/** Choose warp-in vs. normal production for a unit. Warp-in is preferred. */
function chooseProduction(s, ent, tag) {
    if (ent.producer === "Larva") {
        // Zerg: trained from a shared per-location larva pool, not a queue on a
        // specific building — see State.larva / scheduleLarvaRegen.
        const order = tag === "proxy" ? ["proxy"] : tag === "home" ? ["home"] : ["proxy", "home"];
        for (const loc of order)
            if (s.larva[loc] >= 1)
                return { mode: "larva", kind: "unit", unitLoc: loc, producerLoc: loc };
        return null;
    }
    if (ent.producer === "Gateway" && ent.warpCooldown != null && s.researched.has("WarpGateResearch")) {
        const wgLoc = s.freeProducers("WarpGate", "home") >= 1 ? "home" : s.freeProducers("WarpGate", "proxy") >= 1 ? "proxy" : null;
        if (wgLoc) {
            // Warp in at a proxy Pylon if one exists (delivers at the enemy), else at home.
            const warpLoc = s.proxyPylonExists ? "proxy" : "home";
            return { mode: "warp", kind: "unit", unitLoc: warpLoc, producerType: "WarpGate", producerLoc: wgLoc };
        }
    }
    const order = tag === "proxy" ? ["proxy"] : tag === "home" ? ["home"] : ["proxy", "home"];
    for (const loc of order)
        if (s.freeProducers(ent.producer, loc) >= 1)
            return { mode: "gate", kind: "unit", unitLoc: loc, producerType: ent.producer, producerLoc: loc };
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
            return fail(s, log, snaps, actions, `Unknown entity "${pa.name}"`, data, map);
        while (true) {
            if (++guard > SAFETY)
                return fail(s, log, snaps, actions, "Safety guard tripped", data, map);
            const reqOk = ent.requires.every((r) => s.reqMet(r));
            const plan = reqOk ? planStart(s, ent, pa.location) : null;
            const supplyOk = s.supplyUsed + ent.supplyCost <= s.supplyCap + EPS;
            if (reqOk && plan && supplyOk) {
                const tAfford = timeToAfford(s, ent.minerals, ent.gas);
                const tEvent = nextEventTime(s) - s.time;
                if (tAfford <= tEvent + EPS || !isFinite(tEvent)) {
                    if (!isFinite(tAfford))
                        return fail(s, log, snaps, actions, `Can never afford "${ent.name}"`, data, map);
                    advanceBy(s, tAfford, snaps);
                    startEntity(s, ent, plan, map, actions, log);
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
                    return fail(s, log, snaps, actions, `Deadlocked before "${ent.name}": ${why}`, data, map);
                }
            }
        }
    }
    computeArrivalTimes(actions, data, map);
    return {
        ok: true,
        finishTime: s.time,
        actions,
        log,
        snapshots: snaps,
        final: snaps[snaps.length - 1],
    };
}
/** Compute travel-adjusted arrival times for army units now that chrono has
 * finalized every finishTime. Mutates `actions` in place. */
function computeArrivalTimes(actions, data, map) {
    for (const a of actions) {
        if (a.kind === "unit") {
            const ent = data.entities[a.name];
            if (ent.isWorker)
                continue; // workers aren't army
            a.arrivalTime = a.finishTime + travelToEnemy(ent, a.location, map);
        }
    }
}
function startEntity(s, ent, plan, map, actions, log) {
    s.minerals -= ent.minerals;
    s.gas -= ent.gas;
    const loc = plan.unitLoc;
    let finishTime = s.time + ent.buildTime;
    let producerForItem = ""; // producer type recorded on the in-progress item
    let warpedIn = false;
    let verb = "start";
    switch (plan.mode) {
        case "research":
            producerForItem = plan.producerType; // occupies e.g. the Cybernetics Core
            verb = "research";
            break;
        case "morph":
            producerForItem = plan.producerType; // occupies the Gateway being morphed
            verb = "morph";
            break;
        case "build":
            if (loc === "proxy") {
                // First proxy building pays the cross-map probe walk once; later proxy
                // buildings start locally (a probe is already out there).
                const travel = s.proxyEstablished ? 0 : map.proxyProbeTravelSeconds;
                const occupancy = s.proxyEstablished ? s.eco.probeBuildOccupancy : map.proxyProbeTravelSeconds;
                s.proxyEstablished = true;
                s.probeReleases.push(s.time + occupancy);
                finishTime = s.time + travel + ent.buildTime;
            }
            else {
                s.probeReleases.push(s.time + s.eco.probeBuildOccupancy);
            }
            break;
        case "gate":
            s.supplyUsed += ent.supplyCost;
            producerForItem = plan.producerType; // Gateway/Stargate/Robo, busy until done
            break;
        case "warp":
            s.supplyUsed += ent.supplyCost;
            finishTime = s.time + s.eco.warpInTime; // unit exists after the warp-in
            // The Warp Gate is on cooldown separately (throughput), longer than warp-in.
            s.producerReleases.push({
                type: "WarpGate",
                loc: plan.producerLoc,
                until: s.time + (ent.warpCooldown ?? ent.buildTime),
            });
            warpedIn = true;
            break;
        case "larva":
            // No producer building is occupied — larva consumption is independent
            // of the townhall's own action queue (it can still train a Queen etc.
            // at the same time). Just spend one larva and schedule its regen.
            s.supplyUsed += ent.supplyCost;
            s.larva[plan.producerLoc] -= 1;
            scheduleLarvaRegen(s, plan.producerLoc);
            break;
    }
    const row = {
        name: ent.name,
        kind: plan.kind,
        startTime: s.time,
        finishTime,
        location: loc,
        warpedIn: warpedIn || undefined,
    };
    s.inProgress.push({
        name: ent.name,
        finishTime,
        kind: plan.kind,
        producer: producerForItem,
        location: loc,
        boosted: false,
        ref: row,
    });
    actions.push(row);
    const tag = warpedIn ? ` (warp-in${loc === "proxy" ? " @proxy" : ""})` : loc === "proxy" ? " @proxy" : "";
    log.push(`${fmt(s.time)}  ${verb} ${ent.name}${tag}  (done ${fmt(finishTime)})`);
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
function fail(s, log, snaps, actions, error, data, map) {
    log.push(`ERROR: ${error}`);
    // Compute arrival times for whatever DID complete before the deadlock, so
    // callers that want a partial threat/value curve (e.g. opponent.ts,
    // replaying a real game past the point our greedy scheduler can keep up
    // with real injects/micro) aren't left with nothing.
    computeArrivalTimes(actions, data, map);
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
/**
 * Cumulative fighting VALUE delivered at the enemy over time — a step curve
 * that rises each time a unit arrives. This is the general replacement for
 * compositionArrivalTime: instead of asking "when did exactly N of unit X
 * arrive", it answers "how much value is at the enemy by time t", for every
 * t, so builds can be compared across DIFFERENT compositions and unit mixes.
 */
export function valueOverTime(res, data, opts = {}) {
    if (!res.ok && !opts.allowPartial)
        return [];
    const arrivals = res.actions
        .filter((a) => a.kind === "unit" && a.arrivalTime !== undefined && !data.entities[a.name]?.isWorker)
        .sort((x, y) => x.arrivalTime - y.arrivalTime);
    const points = [];
    let cum = 0;
    for (const a of arrivals) {
        cum += unitValue(data.entities[a.name]);
        points.push({ t: a.arrivalTime, value: cum, name: a.name });
    }
    return points;
}
