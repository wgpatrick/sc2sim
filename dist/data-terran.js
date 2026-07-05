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
 * │  FIXED 2026-07-05: engine.ts's probesTotal tracker had a hardcoded        │
 * │  `name === "Probe"` check, so trained SCVs never grew the available-      │
 * │  worker count in simulation (capped at startingWorkers=8 forever) --      │
 * │  see engine.ts's State.isWorker(). This affected every sim run in this    │
 * │  race, not just this pass's new mechanics.                              │
 * │                                                                         │
 * │  ⚠️ Unit costs/supply/buildTime/combat stats below (Marine, Reaper,      │
 * │  Hellion, Cyclone, Viking, Medivac, Liberator) are well-established      │
 * │  LotV-stable book values (Liquipedia-class), NOT individually re-        │
 * │  verified against 5.0.16 game files or replay cadence -- none of the 8   │
 * │  replays happened to train most of these (see the mineral/gas income     │
 * │  fit below for the corpus's actual size). Same caveat as data.ts's        │
 * │  Protoss combat stats: baseline, no upgrades, ranking signal only.       │
 * │                                                                         │
 * │  MULE (2026-07-05): Orbital Command + Calldown: MULE are now MODELED as  │
 * │  an engine mechanic (see engine.ts's generic per-caster energy pool --   │
 * │  EconomyConfig.casters/.mule, action "MULE"). Numbers are well-known      │
 * │  SC2 ability constants (50 energy, 90s/64.3-Faster duration, universal    │
 * │  0.5625/s energy regen), NOT independently replay-calibrated -- MULE     │
 * │  yield is DERIVED as 3x the measured tier-1/2 SCV rate (the commonly-     │
 * │  cited "MULE mines ~3x a worker" ratio), because parse_replay.py doesn't  │
 * │  yet detect real Calldown: MULE casts to isolate their contribution from  │
 * │  the income fit above -- that fit still has MULE bursts baked in as       │
 * │  unexplained noise (see the R² discussion). So: the MECHANIC is real and  │
 * │  usable in a build order now; the INCOME FIT still isn't MULE-aware.      │
 * │  Orbital Command's own cost/buildTime (150 minerals, 17.9s morph) are     │
 * │  standard LotV-stable values, not individually replay-verified.          │
 * │                                                                         │
 * │  Tech Lab + addon-gated units (2026-07-05): Marauder/Siege Tank/Banshee   │
 * │  now modeled. Approximation: a Tech Lab is its own producer-type entity   │
 * │  (BarracksTechLab/FactoryTechLab/StarportTechLab) rather than a per-      │
 * │  building attachment -- this engine only tracks aggregate structure       │
 * │  counts, not "which specific Barracks has an addon", so 2 Tech Labs       │
 * │  built lets 2 Marauders train in parallel, matching 2 separately-teched   │
 * │  Barracks reasonably well. Reactor's real effect (2 parallel queue slots  │
 * │  on ONE building) is NOT modeled -- it doesn't gate any new unit type,     │
 * │  and modeling it precisely needs a per-building slot concept this engine  │
 * │  doesn't have; still a documented gap, see below. All costs/buildTimes/    │
 * │  stats for Tech Lab, Marauder, Siege Tank, Banshee pulled from Liquipedia  │
 * │  (current LotV), NOT independently replay-verified. Siege Tank uses       │
 * │  UNSIEGED stats (siege mode's range/splash isn't modeled, consistent      │
 * │  with the project's no-special-abilities convention elsewhere).          │
 * │                                                                         │
 * │  NOT MODELED (documented gap, not silently wrong): Reactor's parallel-    │
 * │  queue effect, Battlecruiser (needs Fusion Core, a 4th tech building --   │
 * │  out of scope, rarely relevant to this tool's early-game focus), Ghost,   │
 * │  Planetary Fortress. The engine also has no bunker/repair/lift-off        │
 * │  modeling.                                                               │
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
// Orbital Command: CommandCenter morph, requires a Barracks (tech, not a
// producer dependency). Not replay-verified (see header) -- standard LotV value.
// supplyProvided carries over from CommandCenter (still 13) -- an Orbital is
// still a townhall, not a downgrade; caught by engine.test.ts's regression
// suite (a first version of this line silently dropped supply to 0 on morph).
add(ent("OrbitalCommand", 150, 0, 17.9, "CommandCenter", { supplyProvided: 13, isStructure: true, morphFrom: "CommandCenter", requires: ["Barracks"] }));
// Tech Lab add-ons -- see header for the "own producer-type entity" approximation.
// Same building/cost/buildTime regardless of which structure it attaches to.
add(ent("BarracksTechLab", 50, 25, 12.9, "SCV", { isStructure: true, requires: ["Barracks"] }));
add(ent("FactoryTechLab", 50, 25, 12.9, "SCV", { isStructure: true, requires: ["Factory"] }));
add(ent("StarportTechLab", 50, 25, 12.9, "SCV", { isStructure: true, requires: ["Starport"] }));
// --- SCV (worker) ---------------------------------------------------------
// alsoProducer: morphing to Orbital Command must not stop SCV production --
// caught by engine.test.ts (a first version of this file had no such
// fallback, so any Orbital-teched base could NEVER train another worker).
add(ent("SCV", 50, 0, 12.1, "CommandCenter", { supplyCost: 1, isWorker: true, moveSpeed: 2.8125, alsoProducer: ["OrbitalCommand"] }));
// --- Barracks-tier (no add-on requirement) --------------------------------
// ⚠️ book values, see header — not replay-verified individually.
add(ent("Marine", 50, 0, 12.9, "Barracks", { supplyCost: 1, moveSpeed: 2.25, dps: 7.0, hp: 45, shields: 0 }));
add(ent("Reaper", 50, 50, 32.1, "Barracks", { supplyCost: 1, moveSpeed: 3.9375, dps: 10.2, hp: 60, shields: 0 }));
// Marauder: Barracks + Tech Lab. Liquipedia LotV: 100/25/2 supply, 21s (Faster 15.0),
// 125 HP, 10 dmg/1.07s cooldown -> 9.3 dps baseline (unupgraded, vs unarmored).
add(ent("Marauder", 100, 25, 15.0, "BarracksTechLab", { supplyCost: 2, moveSpeed: 3.15, dps: 9.3, hp: 125, shields: 0 }));
// --- Factory-tier (no add-on requirement) ---------------------------------
add(ent("Hellion", 100, 0, 21.4, "Factory", { supplyCost: 2, moveSpeed: 5.95, dps: 9.7, hp: 90, shields: 0 }));
add(ent("Cyclone", 150, 100, 32.1, "Factory", { supplyCost: 3, moveSpeed: 4.6875, dps: 22.3, hp: 180, shields: 0 }));
// Siege Tank: Factory + Tech Lab. Liquipedia LotV UNSIEGED stats (see header):
// 150/125/3 supply, 32s (Faster 22.9), 175 HP, 15 dmg/0.74s -> 20.3 dps baseline.
add(ent("SiegeTank", 150, 125, 22.9, "FactoryTechLab", { supplyCost: 3, moveSpeed: 3.15, dps: 20.3, hp: 175, shields: 0 }));
// --- Starport-tier (no add-on requirement) --------------------------------
add(ent("Viking", 150, 75, 30.0, "Starport", { supplyCost: 2, moveSpeed: 3.375, dps: 14.0, hp: 135, shields: 0 }));
// Medivac has no weapon (healer/transport) — dps 0, no fighting VALUE by this
// ranking signal, same treatment as Protoss's Observer.
add(ent("Medivac", 100, 25, 30.0, "Starport", { supplyCost: 2, moveSpeed: 3.5, hp: 150, shields: 0 }));
add(ent("Liberator", 150, 150, 42.9, "Starport", { supplyCost: 3, moveSpeed: 4.0, dps: 18.6, hp: 180, shields: 0 }));
// Banshee: Starport + Tech Lab. Liquipedia LotV: 150/100/3 supply, 43s (Faster 30.7),
// 140 HP, 12 dmg x2 hits/0.89s -> 27 dps baseline.
add(ent("Banshee", 150, 100, 30.7, "StarportTechLab", { supplyCost: 3, moveSpeed: 3.85, dps: 27, hp: 140, shields: 0 }));
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
        supplyStructure: "SupplyDepot",
        hasChrono: false,
        hasWarpGate: false,
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
        // MULE (see header): Orbital Command energy pool + Calldown: MULE. Universal
        // 0.5625/s regen (same rate as Nexus's), 50 start energy per Orbital.
        casters: {
            OrbitalCommand: { startEnergy: 50, maxEnergyPerCaster: 200, regenPerCaster: 0.5625 },
        },
        mule: {
            cost: 50,
            durationSeconds: 64.3, // 90s Normal / 1.4 (Faster clock, same convention as buildTime)
            mineralRate: 0.98 * 3, // derived: ~3x tier-1/2 SCV rate, not independently calibrated -- see header
        },
    },
    entities,
};
