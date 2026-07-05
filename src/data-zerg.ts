import type { GameData, EntityData } from "./engine.js";

/**
 * Zerg game data — first pass, for opponent-threat modeling (see search.ts /
 * README "Modeling the opponent"). Zerg's production model is fundamentally
 * different from Protoss/Terran (larva, not a per-building queue) — see the
 * "Larva" support added to engine.ts (State.larva / scheduleLarvaRegen /
 * the "larva" StartMode) specifically to make this race modelable at all.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │  GROUNDING: structure buildTimes and the larva mechanic itself are      │
 * │  measured DIRECTLY from 3 real 5.0.16 replays (replays/parsed/           │
 * │  Krystianer_vs_Solar_..., SKillous_vs_Solar_..., Harstem_Lockdown_...    │
 * │  .opponent.json — all Zerg opponents, parsed with the timestamp fix).   │
 * │  Cross-replay-consistent start->done deltas: Hatchery 71.4, SpawningPool │
 * │  46.4, RoachWarren 39.3, EvolutionChamber 25.0, Extractor 21.4 (Faster-  │
 * │  clock seconds). Larva regen: steady-state interval measured at 9.51s   │
 * │  IDENTICALLY across all 3 replays (cap 3, confirmed by the 3 starting   │
 * │  Larva at t=0) -- this is the number used below, not a book value.      │
 * │  supplyProvided: Hatchery(4)+Overlord(8)=12 matches all 3 replays'      │
 * │  starting supplyCap of 12 (with 1 free Overlord alive at t=0) exactly.  │
 * │  Drone buildTime (12.1) matches the replays' steady birth cadence and   │
 * │  equals Probe/SCV's, as expected (worker buildTime is race-symmetric).  │
 * │                                                                         │
 * │  ⚠️ Unit costs/buildTime/combat stats NOT covered above (Overlord,       │
 * │  Zergling, Roach, Baneling, Queen) are well-established LotV-stable      │
 * │  book values, not individually replay-verified.                         │
 * │                                                                         │
 * │  NOT MODELED (documented gap): Lair/Hive tech tiers and everything      │
 * │  gated behind them (Hydralisk, Mutalisk, ...), Queen larva injects      │
 * │  (the engine's larva regen is the BASELINE passive rate only — real     │
 * │  play roughly doubles effective larva throughput via injects, so        │
 * │  Zerg army timings from this model will run consistently LATE relative  │
 * │  to a played game that injects on cooldown), creep spread/speed,        │
 * │  multi-hatchery larva accounting (the engine's regen scheduling is      │
 * │  consumption-triggered — see scheduleLarvaRegen — so a newly-finished   │
 * │  2nd Hatchery's extra capacity only fills in once something is          │
 * │  actually being produced afterward, not immediately on completion).     │
 * │  The Drone consumed by morphing into a Hatchery is NOT modeled as       │
 * │  consumed (this engine's generic "build" mode assumes the builder       │
 * │  survives, true for Probe/SCV but not for a Zerg expansion) -- only     │
 * │  matters for expansions, out of scope this pass (techClosure-style      │
 * │  single-base timings only, same scope limit as the Protoss optimizer).  │
 * └───────────────────────────────────────────────────────────────────────┘
 */

function ent(
  name: string,
  minerals: number,
  gas: number,
  buildTime: number,
  producer: string,
  opts: Partial<EntityData> = {},
): EntityData {
  return {
    name,
    minerals,
    gas,
    buildTime,
    producer,
    supplyCost: 0,
    supplyProvided: 0,
    requires: [],
    isStructure: false,
    ...opts,
  };
}

const entities: Record<string, EntityData> = {};
function add(e: EntityData) {
  entities[e.name] = e;
}

// --- Structures (buildTime = replay-measured Faster-clock seconds) --------
// Hatchery's real-game morph-from-Drone is not modeled (see header) --
// treated as an ordinary Drone-built structure like a Nexus/CommandCenter.
add(ent("Hatchery", 300, 0, 71.4, "Drone", { supplyProvided: 4, isStructure: true }));
add(ent("Extractor", 25, 0, 21.4, "Drone", { isStructure: true }));
add(ent("SpawningPool", 200, 0, 46.4, "Drone", { isStructure: true }));
add(ent("RoachWarren", 150, 0, 39.3, "Drone", { isStructure: true, requires: ["SpawningPool"] }));
add(ent("EvolutionChamber", 75, 0, 25.0, "Drone", { isStructure: true }));
// ⚠️ book value, not replay-confirmed (none of the 3 replays built one).
add(ent("BanelingNest", 100, 50, 32.1, "Drone", { isStructure: true, requires: ["SpawningPool"] }));

// --- Drone (worker) --------------------------------------------------------
add(ent("Drone", 50, 0, 12.1, "Larva", { supplyCost: 1, isWorker: true, moveSpeed: 2.8125 }));

// --- Larva-produced army/utility units -------------------------------------
// ⚠️ book values below (cost/buildTime/combat stats), see header.
add(ent("Overlord", 100, 0, 17.9, "Larva", { supplyProvided: 8, moveSpeed: 0.8203, hp: 200, shields: 0 }));
add(ent("Zergling", 25, 0, 17.1, "Larva", { supplyCost: 0.5, requires: ["SpawningPool"], moveSpeed: 4.13, dps: 10.0, hp: 35, shields: 0 }));
add(ent("Roach", 75, 25, 20.7, "Larva", { supplyCost: 2, requires: ["RoachWarren"], moveSpeed: 2.25, dps: 14.6, hp: 145, shields: 0 }));

// --- Morph (from an existing unit, not larva) ------------------------------
add(ent("Baneling", 25, 25, 10.0, "Zergling", { supplyCost: 0, morphFrom: "Zergling", requires: ["BanelingNest"], moveSpeed: 4.13, dps: 20.0, hp: 30, shields: 0 }));

// --- Hatchery-queue unit (NOT larva — trained like a Gateway unit) ---------
add(ent("Queen", 150, 0, 25.7, "Hatchery", { supplyCost: 2, requires: ["SpawningPool"], moveSpeed: 1.31, dps: 11.2, hp: 175, shields: 0 }));

export const ZERG: GameData = {
  patch: "5.0.16",
  race: "Zerg",
  economy: {
    startingWorkers: 8,
    startingMinerals: 50,
    startingGas: 0,
    mineralPatchesPerBase: 8,
    gasGeysersPerBase: 2,
    startingTownhall: "Hatchery",
    gasStructure: "Extractor",
    startingUnits: { Overlord: 1 }, // the free starting Overlord: supply 8, not from Hatchery(4)
    // No independent Zerg income fit yet (same reasoning as data-terran.ts) —
    // reuse the cross-replay Protoss fit; Drone mining mechanics are the same.
    mineralRateFirstWorker: 0.871,
    mineralRateSecondWorker: 0.871,
    mineralRateThirdWorker: 0.652,
    miningMicro: 1.0,
    gasRatePerWorker: 0.871,
    // No Chrono equivalent (inert for Zerg — nothing calls castChrono here).
    nexusStartEnergy: 0,
    nexusMaxEnergy: 0,
    nexusEnergyRegen: 0,
    chronoCost: 50,
    chronoBoostWindow: 20,
    chronoSpeedMultiplier: 1.5,
    probeBuildOccupancy: 4,
    warpInTime: 4,
    // Larva: measured directly from replays (see header) — baseline passive
    // regen only, NOT accounting for Queen inject (see header caveat).
    larvaRegenSeconds: 9.51,
    larvaCapPerTownhall: 3,
  },
  entities,
};
