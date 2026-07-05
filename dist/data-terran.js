/**
 * Terran game data — first pass, for opponent-threat modeling (see search.ts /
 * README "Modeling the opponent"), not yet a fully-searchable race template
 * the way data.ts (Protoss) is.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │  GROUNDING: structure costs/supply/buildTimes below are CROSS-CHECKED   │
 * │  against a real 5.0.16 replay (replays/parsed/CannonRush_vs_Calyx_PvT_   │
 * │  2026-06-29.opponent.json, Calyx/Terran, parsed with the timestamp fix  │
 * │  -- see parse_replay.py). Structure start->done deltas from that replay: │
 * │  CommandCenter 71.4, SupplyDepot 21.4, Refinery 21.4, Barracks 46.4,     │
 * │  Factory 42.9, Starport 35.7, EngineeringBay 25.0 (Faster-clock          │
 * │  seconds) -- all used directly below. supplyProvided for CommandCenter   │
 * │  (13) and SupplyDepot (8) likewise read off that replay's supplyCap      │
 * │  jumps, confirming Terran shares Protoss's 5.0.16 8-worker-start/13-     │
 * │  supply-townhall economy change. SCV buildTime (12.1) matches the        │
 * │  replay's steady SCV birth cadence and equals Probe's, exactly as        │
 * │  expected (worker buildTime is race-symmetric).                         │
 * │                                                                         │
 * │  ⚠️ Unit costs/supply/buildTime/combat stats below (Marine, Reaper,      │
 * │  Hellion, Cyclone, Viking, Medivac, Liberator) are well-established      │
 * │  LotV-stable book values (Liquipedia-class), NOT individually re-        │
 * │  verified against 5.0.16 game files or replay cadence the way the        │
 * │  structures above were -- only 1 Terran replay exists in this corpus     │
 * │  and it happened not to train most of these. Same caveat as data.ts's    │
 * │  Protoss combat stats: baseline, no upgrades, ranking signal only.       │
 * │                                                                         │
 * │  NOT MODELED (documented gap, not silently wrong): Orbital Command       │
 * │  (MULE / Calldown Extra Supplies), Tech Lab / Reactor add-ons and every  │
 * │  addon-gated unit (Marauder, Siege Tank, Banshee, Battlecruiser, ...),   │
 * │  Planetary Fortress. The engine also has no bunker/repair/lift-off       │
 * │  modeling. Terran's whole macro-cycle (MULEs especially) is a bigger     │
 * │  income-model difference from Protoss than the roster below reflects.   │
 * └───────────────────────────────────────────────────────────────────────┘
 */
function ent(name, minerals, gas, buildTime, producer, opts = {}) {
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
const entities = {};
function add(e) {
    entities[e.name] = e;
}
// --- Structures (buildTime = replay-measured Faster-clock seconds) --------
add(ent("CommandCenter", 400, 0, 71.4, "SCV", { supplyProvided: 13, isStructure: true }));
add(ent("SupplyDepot", 100, 0, 21.4, "SCV", { supplyProvided: 8, isStructure: true }));
add(ent("Refinery", 75, 0, 21.4, "SCV", { isStructure: true }));
add(ent("Barracks", 150, 0, 46.4, "SCV", { isStructure: true, requires: ["SupplyDepot"] }));
add(ent("EngineeringBay", 125, 0, 25.0, "SCV", { isStructure: true, requires: ["SupplyDepot"] }));
add(ent("Factory", 150, 100, 42.9, "SCV", { isStructure: true, requires: ["Barracks"] }));
add(ent("Starport", 150, 100, 35.7, "SCV", { isStructure: true, requires: ["Factory"] }));
// --- SCV (worker) ---------------------------------------------------------
add(ent("SCV", 50, 0, 12.1, "CommandCenter", { supplyCost: 1, isWorker: true, moveSpeed: 2.8125 }));
// --- Barracks-tier (no add-on requirement) --------------------------------
// ⚠️ book values, see header — not replay-verified individually.
add(ent("Marine", 50, 0, 12.9, "Barracks", { supplyCost: 1, moveSpeed: 2.25, dps: 7.0, hp: 45, shields: 0 }));
add(ent("Reaper", 50, 50, 32.1, "Barracks", { supplyCost: 1, moveSpeed: 3.9375, dps: 10.2, hp: 60, shields: 0 }));
// --- Factory-tier (no add-on requirement) ---------------------------------
add(ent("Hellion", 100, 0, 21.4, "Factory", { supplyCost: 2, moveSpeed: 5.95, dps: 9.7, hp: 90, shields: 0 }));
add(ent("Cyclone", 150, 100, 32.1, "Factory", { supplyCost: 3, moveSpeed: 4.6875, dps: 22.3, hp: 180, shields: 0 }));
// --- Starport-tier (no add-on requirement) --------------------------------
add(ent("Viking", 150, 75, 30.0, "Starport", { supplyCost: 2, moveSpeed: 3.375, dps: 14.0, hp: 135, shields: 0 }));
// Medivac has no weapon (healer/transport) — dps 0, no fighting VALUE by this
// ranking signal, same treatment as Protoss's Observer.
add(ent("Medivac", 100, 25, 30.0, "Starport", { supplyCost: 2, moveSpeed: 3.5, hp: 150, shields: 0 }));
add(ent("Liberator", 150, 150, 42.9, "Starport", { supplyCost: 3, moveSpeed: 4.0, dps: 18.6, hp: 180, shields: 0 }));
export const TERRAN = {
    patch: "5.0.16",
    race: "Terran",
    economy: {
        startingWorkers: 8,
        startingMinerals: 50,
        startingGas: 0,
        mineralPatchesPerBase: 8,
        gasGeysersPerBase: 2,
        // No independent Terran income fit yet (only 1 replay, and it never runs
        // gas-free long enough for a clean tiered fit the way the Protoss corpus
        // did) — reuse the cross-replay Protoss fit as a same-patch placeholder;
        // SCV/Probe mining mechanics are identical (same worker, same patches).
        mineralRateFirstWorker: 0.871,
        mineralRateSecondWorker: 0.871,
        mineralRateThirdWorker: 0.652,
        miningMicro: 1.0,
        gasRatePerWorker: 0.871,
        // No Chrono equivalent modeled (Terran's real analog, MULEs, isn't
        // modeled either — see header). These fields are inert for Terran unless
        // something calls castChrono, which nothing does for this race yet.
        nexusStartEnergy: 0,
        nexusMaxEnergy: 0,
        nexusEnergyRegen: 0,
        chronoCost: 50,
        chronoBoostWindow: 20,
        chronoSpeedMultiplier: 1.5,
        probeBuildOccupancy: 4,
        warpInTime: 4,
    },
    entities,
};
