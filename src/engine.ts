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

// ---------------------------------------------------------------------------
// Data model
// ---------------------------------------------------------------------------

export interface EntityData {
  name: string;
  minerals: number;
  gas: number;
  supplyCost: number; // supply CONSUMED (Probe 1, Stalker 2, structures 0)
  supplyProvided: number; // supply PROVIDED once complete (Pylon 8, Nexus 13)
  buildTime: number; // Faster-clock seconds
  producer: string; // "Probe" | "Nexus" | "Gateway" | "Stargate" | "RoboticsFacility"
  requires: string[]; // prerequisite structures that must be COMPLETE
  isStructure: boolean;
  isWorker?: boolean; // the harvesting worker; excluded from army-arrival
  moveSpeed?: number; // game units/sec; used for arrival-time (units only)
}

export interface EconomyConfig {
  startingWorkers: number;
  startingMinerals: number;
  startingGas: number;
  mineralPatchesPerBase: number;
  gasGeysersPerBase: number;
  mineralRateFirstWorker: number;
  mineralRateSecondWorker: number;
  gasRatePerWorker: number;
  nexusStartEnergy: number;
  nexusMaxEnergy: number;
  nexusEnergyRegen: number;
  chronoCost: number;
  chronoBoostWindow: number;
  chronoSpeedMultiplier: number;
  probeBuildOccupancy: number;
}

export interface GameData {
  patch: string;
  race: string;
  economy: EconomyConfig;
  entities: Record<string, EntityData>;
}

// --- Spatial / map model ------------------------------------------------

/** Reference unit speed (Stalker). Map distances are expressed relative to it. */
export const REF_SPEED = 2.95;

export interface MapConfig {
  name: string;
  /** Ground travel time (Faster s) home->enemy for a REF_SPEED unit. */
  homeToEnemySeconds: number;
  /** Ground travel time (Faster s) from a proxy staging point -> enemy. */
  proxyToEnemySeconds: number;
  /** Probe walk time (Faster s) from home mineral line -> proxy build site. */
  proxyProbeTravelSeconds: number;
}

export type Location = "home" | "proxy";

/** Travel time to the enemy for a unit produced at `loc`. */
export function travelToEnemy(
  ent: EntityData,
  loc: Location,
  map: MapConfig,
): number {
  const base = loc === "proxy" ? map.proxyToEnemySeconds : map.homeToEnemySeconds;
  const speed = ent.moveSpeed && ent.moveSpeed > 0 ? ent.moveSpeed : REF_SPEED;
  return base * (REF_SPEED / speed);
}

// ---------------------------------------------------------------------------
// Actions & results
// ---------------------------------------------------------------------------

/**
 * A build order is a list of action strings:
 *   "Probe"          build/train at home
 *   "Gateway@proxy"  build a structure (or train a unit) at the proxy
 *   "chrono:Probe"   cast Chrono Boost on the in-production Probe
 */
export type Action = string;

interface ParsedAction {
  chrono: boolean;
  name: string;
  location: Location | "auto";
}

function parseAction(raw: string): ParsedAction | null {
  const a = raw.trim();
  if (!a) return null;
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

export interface StartedItem {
  name: string;
  kind: "unit" | "structure";
  startTime: number;
  finishTime: number; // production/construction complete
  location: Location;
  arrivalTime?: number; // when it reaches the enemy (units only)
}

export interface Snapshot {
  t: number;
  minerals: number;
  gas: number;
  supplyUsed: number;
  supplyCap: number;
  probes: number;
  energy: number;
}

export interface SimResult {
  ok: boolean;
  error?: string;
  finishTime: number;
  actions: StartedItem[];
  log: string[];
  snapshots: Snapshot[];
  final: Snapshot;
}

// ---------------------------------------------------------------------------
// Internal state
// ---------------------------------------------------------------------------

interface InProgress {
  name: string;
  finishTime: number;
  kind: "unit" | "structure";
  producer: string;
  location: Location;
  boosted: boolean;
  ref: StartedItem;
}

const EPS = 1e-6;

class State {
  time = 0;
  minerals: number;
  gas: number;
  energy: number;
  supplyUsed: number;
  probesTotal: number;
  completed: Record<string, number> = {};
  completedLoc: Record<string, { home: number; proxy: number }> = {};
  inProgress: InProgress[] = [];
  probeReleases: number[] = [];

  constructor(private data: GameData) {
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
  count(name: string): number {
    return this.completed[name] ?? 0;
  }
  get nexusCount(): number {
    return this.count("Nexus");
  }
  get assimilators(): number {
    return this.count("Assimilator");
  }
  get busyProbes(): number {
    return this.probeReleases.length;
  }
  get availableProbes(): number {
    return this.probesTotal - this.busyProbes;
  }
  get supplyCap(): number {
    let cap = 0;
    for (const name in this.completed) {
      const ent = this.data.entities[name];
      if (ent) cap += ent.supplyProvided * this.completed[name];
    }
    return cap;
  }
  get gasWorkers(): number {
    return Math.min(3 * this.assimilators, this.availableProbes);
  }
  get mineralWorkers(): number {
    return this.availableProbes - this.gasWorkers;
  }
  get mineralRate(): number {
    const e = this.eco;
    const patches = this.nexusCount * e.mineralPatchesPerBase;
    const w = this.mineralWorkers;
    const first = Math.min(w, patches);
    const second = Math.max(0, Math.min(w - patches, patches));
    return first * e.mineralRateFirstWorker + second * e.mineralRateSecondWorker;
  }
  get gasRate(): number {
    return this.gasWorkers * this.eco.gasRatePerWorker;
  }
  get energyRate(): number {
    return this.nexusCount * this.eco.nexusEnergyRegen;
  }
  freeProducers(type: string, loc: Location): number {
    const done = this.completedLoc[type]?.[loc] ?? 0;
    const busy = this.inProgress.filter(
      (p) => p.producer === type && p.location === loc,
    ).length;
    return done - busy;
  }
}

// ---------------------------------------------------------------------------
// Simulator
// ---------------------------------------------------------------------------

export function fmt(t: number): string {
  const s = Math.round(t);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function timeToAfford(s: State, minNeed: number, gasNeed: number): number {
  const tMin =
    minNeed <= s.minerals + EPS
      ? 0
      : s.mineralRate > 0
        ? (minNeed - s.minerals) / s.mineralRate
        : Infinity;
  const tGas =
    gasNeed <= s.gas + EPS
      ? 0
      : s.gasRate > 0
        ? (gasNeed - s.gas) / s.gasRate
        : Infinity;
  return Math.max(tMin, tGas);
}

function nextEventTime(s: State): number {
  let t = Infinity;
  for (const p of s.inProgress) t = Math.min(t, p.finishTime);
  for (const r of s.probeReleases) t = Math.min(t, r);
  return t;
}

function advanceBy(s: State, dt: number, snaps: Snapshot[]): void {
  if (dt <= 0) return;
  s.minerals += s.mineralRate * dt;
  s.gas += s.gasRate * dt;
  s.energy = Math.min(s.eco.nexusMaxEnergy, s.energy + s.energyRate * dt);
  s.time += dt;
  snap(s, snaps);
}

function advanceToNextEvent(s: State, snaps: Snapshot[]): boolean {
  const t = nextEventTime(s);
  if (!isFinite(t)) return false;
  advanceBy(s, t - s.time, snaps);
  const done = s.inProgress.filter((p) => p.finishTime <= s.time + EPS);
  s.inProgress = s.inProgress.filter((p) => p.finishTime > s.time + EPS);
  for (const p of done) {
    s.completed[p.name] = (s.completed[p.name] ?? 0) + 1;
    if (p.kind === "structure") {
      const cl = (s.completedLoc[p.name] ??= { home: 0, proxy: 0 });
      cl[p.location] += 1;
    }
    if (p.name === "Probe") s.probesTotal += 1;
  }
  s.probeReleases = s.probeReleases.filter((r) => r > s.time + EPS);
  snap(s, snaps);
  return true;
}

function snap(s: State, snaps: Snapshot[]): void {
  const cur: Snapshot = {
    t: s.time,
    minerals: s.minerals,
    gas: s.gas,
    supplyUsed: s.supplyUsed,
    supplyCap: s.supplyCap,
    probes: s.probesTotal,
    energy: s.energy,
  };
  const last = snaps[snaps.length - 1];
  if (last && Math.abs(last.t - cur.t) < EPS) snaps[snaps.length - 1] = cur;
  else snaps.push(cur);
}

/** Pick where a unit is produced given its tag and available producers. */
function chooseUnitLocation(
  s: State,
  ent: EntityData,
  tag: Location | "auto",
): Location | null {
  if (tag === "proxy") return s.freeProducers(ent.producer, "proxy") >= 1 ? "proxy" : null;
  if (tag === "home") return s.freeProducers(ent.producer, "home") >= 1 ? "home" : null;
  // auto: prefer proxy (closer to enemy) then home
  if (s.freeProducers(ent.producer, "proxy") >= 1) return "proxy";
  if (s.freeProducers(ent.producer, "home") >= 1) return "home";
  return null;
}

export function simulate(
  data: GameData,
  order: Action[],
  map: MapConfig,
): SimResult {
  const s = new State(data);
  const log: string[] = [];
  const actions: StartedItem[] = [];
  const snaps: Snapshot[] = [];
  snap(s, snaps);

  const SAFETY = 100000;
  let guard = 0;

  for (const raw of order) {
    const pa = parseAction(raw);
    if (!pa) continue;

    if (pa.chrono) {
      castChrono(s, pa.name, log, snaps);
      if (++guard > SAFETY) break;
      continue;
    }

    const ent = data.entities[pa.name];
    if (!ent) return fail(s, log, snaps, actions, `Unknown entity "${pa.name}"`);
    const structLoc: Location = pa.location === "proxy" ? "proxy" : "home";

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
          startEntity(s, ent, unitLoc!, map, actions, log);
          break;
        }
        advanceToNextEvent(s, snaps);
      } else {
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
      if (ent.isWorker) continue; // workers aren't army
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

function startEntity(
  s: State,
  ent: EntityData,
  loc: Location,
  map: MapConfig,
  actions: StartedItem[],
  log: string[],
): void {
  s.minerals -= ent.minerals;
  s.gas -= ent.gas;
  const kind: "unit" | "structure" = ent.isStructure ? "structure" : "unit";

  let finishTime: number;
  if (ent.isStructure) {
    if (loc === "proxy") {
      // Probe walks to the proxy, THEN warp-in begins.
      const travel = map.proxyProbeTravelSeconds;
      s.probeReleases.push(s.time + travel);
      finishTime = s.time + travel + ent.buildTime;
    } else {
      s.probeReleases.push(s.time + s.eco.probeBuildOccupancy);
      finishTime = s.time + ent.buildTime;
    }
  } else {
    s.supplyUsed += ent.supplyCost;
    finishTime = s.time + ent.buildTime;
  }

  const row: StartedItem = { name: ent.name, kind, startTime: s.time, finishTime, location: loc };
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

function castChrono(s: State, target: string, log: string[], snaps: Snapshot[]): boolean {
  const e = s.eco;
  const boostWork = e.chronoBoostWindow * e.chronoSpeedMultiplier;
  let guard = 0;
  while (true) {
    if (++guard > 100000) return false;
    const item = s.inProgress
      .filter((p) => p.name === target && !p.boosted)
      .sort((a, b) => a.finishTime - b.finishTime)[0];
    if (!item) {
      log.push(`${fmt(s.time)}  chrono ${target} SKIPPED (not in production)`);
      return false;
    }
    if (s.energy >= e.chronoCost - EPS) {
      const R = item.finishTime - s.time;
      const saved =
        R > boostWork
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
    if (tEnergy <= tEvent + EPS) advanceBy(s, tEnergy, snaps);
    else advanceToNextEvent(s, snaps);
  }
}

function fail(
  s: State,
  log: string[],
  snaps: Snapshot[],
  actions: StartedItem[],
  error: string,
): SimResult {
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

// ---------------------------------------------------------------------------
// Objective helpers
// ---------------------------------------------------------------------------

export type Composition = Record<string, number>;

/**
 * Time by which the target composition has ALL ARRIVED at the enemy.
 * For each unit type we take the k-th earliest arrival (k = required count).
 * Returns Infinity if the build never produces enough of some unit.
 */
export function compositionArrivalTime(res: SimResult, comp: Composition): number {
  if (!res.ok) return Infinity;
  let worst = 0;
  for (const [name, need] of Object.entries(comp)) {
    const arrivals = res.actions
      .filter((a) => a.name === name && a.arrivalTime !== undefined)
      .map((a) => a.arrivalTime!)
      .sort((x, y) => x - y);
    if (arrivals.length < need) return Infinity;
    worst = Math.max(worst, arrivals[need - 1]);
  }
  return worst;
}
