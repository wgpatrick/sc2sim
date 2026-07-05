/**
 * Terran game data — first pass, for opponent-threat modeling (see search.ts /
 * README "Modeling the opponent"), not yet a fully-searchable race template
 * the way data.ts (Protoss) is.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │  GROUNDING: structure costs/supply/buildTimes below were originally      │
 * │  cross-checked against 1 real 5.0.16 replay, then RECONFIRMED 2026-07-05 │
 * │  against an expanded 8-replay Terran-side corpus (replays/parsed/         │
 * │  *.T*.json -- covers TvZ/TvT/PvT/ZvT, parsed with the timestamp fix --   │
 * │  see parse_replay.py). Structure start->done deltas, now cross-replay-   │
 * │  consistent rather than single-sample: SupplyDepot 21.4 (n=105),         │
 * │  Barracks 46.4 (n=45), Refinery 21.4 (n=41), Factory 42.9 (n=9),         │
 * │  Starport 35.7 (n=11), EngineeringBay 25.0 (n=12), CommandCenter 71.4    │
 * │  (n=17) -- every value below EXACTLY matched the original single-replay   │
 * │  figures, no corrections needed. supplyProvided for CommandCenter (13)   │
 * │  and SupplyDepot (8) likewise confirmed, matching Terran's 5.0.16 8-      │
 * │  worker-start/13-supply-townhall economy change. SCV buildTime (12.1)    │
 * │  matches the replays' steady SCV birth cadence and equals Probe's,       │
 * │  exactly as expected (worker buildTime is race-symmetric).              │
 * │                                                                         │
 * │  ⚠️ Unit costs/supply/buildTime/combat stats below (Marine, Reaper,      │
 * │  Hellion, Cyclone, Viking, Medivac, Liberator) are well-established      │
 * │  LotV-stable book values (Liquipedia-class), NOT individually re-        │
 * │  verified against 5.0.16 game files or replay cadence -- none of the 8   │
 * │  replays happened to train most of these (see the mineral/gas income     │
 * │  fit below for the corpus's actual size). Same caveat as data.ts's        │
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
        startingTownhall: "CommandCenter",
        gasStructure: "Refinery",
        // Independent Terran fit (2026-07-05), via tools/calibrate_income.py
        // --townhall CommandCenter --gas Refinery, across 8 real 5.0.16 Terran-
        // side replays (191 mineral / 127 gas samples): rateAB=0.980, rateC=0.132,
        // R²=0.528 mineral; gas=0.770, R²=0.471. Both R² are markedly weaker than
        // the Protoss (0.92/0.90) and Zerg (0.88) fits on the same methodology,
        // despite SCV/Probe mining being mechanically identical (same worker,
        // same patches) — the leading suspect is Orbital Command / MULEs, which
        // inject bursts of minerals with NO corresponding change in
        // workers_active_count, something this engine doesn't model (see header).
        // A MULE-heavy sample looks, to this regression, like "10 workers
        // suddenly mining 30% faster" — pure noise against the worker-count
        // model. The tier-1/2 rate (0.980) is adopted directly since it's a real
        // cross-game measurement and the closest thing to "true SCV rate before
        // Orbitals matter" available; the tier-3 (oversaturation) rate of 0.132 is
        // NOT adopted as measured — at 13% of tier-1/2 it implies oversaturated
        // SCVs mine barely at all, physically implausible next to Protoss's ~70%
        // and Zerg's ~29%, and far more consistent with a MULE-driven regression
        // artifact than a real mining-behavior difference. Falling back to the
        // Protoss-measured oversaturation ratio (0.61/0.871 ≈ 70%) applied to the
        // Terran tier-1/2 rate until MULE income can be isolated and subtracted.
        mineralRateFirstWorker: 0.980,
        mineralRateSecondWorker: 0.980,
        mineralRateThirdWorker: 0.68, // 0.980 * (0.61/0.871); see note above — not an independent Terran fit
        miningMicro: 1.0,
        gasRatePerWorker: 0.770,
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
