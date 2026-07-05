/**
 * Zerg game data — first pass, for opponent-threat modeling (see search.ts /
 * README "Modeling the opponent"). Zerg's production model is fundamentally
 * different from Protoss/Terran (larva, not a per-building queue) — see the
 * "Larva" support added to engine.ts (State.larva / scheduleLarvaRegen /
 * the "larva" StartMode) specifically to make this race modelable at all.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │  GROUNDING: structure buildTimes and the larva mechanic itself were      │
 * │  originally measured from 3 real 5.0.16 replays, then CROSS-CHECKED     │
 * │  2026-07-05 against an expanded 12-replay Zerg-side corpus (replays/     │
 * │  parsed/*.Z*.json — 6 new games covering ZvT/ZvZ/ZvP on top of the       │
 * │  original 3). Cross-replay-consistent start->done deltas: Hatchery 71.4  │
 * │  (36/43 samples), SpawningPool 46.4 (11/11 exact), RoachWarren 39.3      │
 * │  (6/6 exact), EvolutionChamber 25.0 (9/11), Extractor 21.4 (8 clean),    │
 * │  BanelingNest 42.9 (4/4 exact — NEW: corrects a 32.1 book-value guess    │
 * │  from when the corpus had zero BanelingNest samples). Larva regen:      │
 * │  steady-state interval measured at 9.51s IDENTICALLY across the         │
 * │  original 3 replays (cap 3, confirmed by the 3 starting Larva at t=0);  │
 * │  NOT re-derived from the expanded 12-replay corpus (a deliberate call — │
 * │  cross-replay-identical results across independent games are a strong   │
 * │  signal of a true game constant, and re-fitting risked introducing a    │
 * │  worse number for no real gain). supplyProvided: Hatchery(4)+           │
 * │  Overlord(8)=12 matches the original 3 replays' starting supplyCap of   │
 * │  12 (with 1 free Overlord alive at t=0) exactly. Drone buildTime (12.1)  │
 * │  matches the replays' steady birth cadence and equals Probe/SCV's, as    │
 * │  expected (worker buildTime is race-symmetric).                         │
 * │                                                                         │
 * │  ⚠️ Unit costs/buildTime/combat stats NOT covered above (Overlord,       │
 * │  Zergling, Roach, Baneling, Queen) are well-established LotV-stable      │
 * │  book values, not individually replay-verified.                         │
 * │                                                                         │
 * │  Queen inject (2026-07-05): "InjectLarva" is now MODELED as an engine    │
 * │  mechanic (see engine.ts's generic per-caster energy pool --             │
 * │  EconomyConfig.casters/.inject). Cost (25 energy), delay (29s Normal /    │
 * │  20.7s Faster), yield (+3 larva), and the universal 0.5625/s energy      │
 * │  regen are well-known SC2 ability constants, NOT independently replay-   │
 * │  calibrated -- parse_replay.py doesn't yet detect real Spawn Larvae       │
 * │  casts, so a REPLAYED real game's threat curve (opponent.ts) still only   │
 * │  reflects passive larva regen, not real injects. The MECHANIC is real     │
 * │  and usable in a hand-written or searched build order now; historical     │
 * │  replay-derived curves are not yet inject-aware.                        │
 * │                                                                         │
 * │  Lair tier (2026-07-05): Lair (Hatchery morph) + HydraliskDen/Spire +    │
 * │  Hydralisk/Mutalisk are now modeled. Costs/buildTimes/combat stats        │
 * │  pulled from Liquipedia (current LotV), NOT replay-verified. Mutalisk's   │
 * │  bounce attack (Glave Wurm: 9/3/1 dmg across up to 3 targets) is modeled   │
 * │  as single-target-only dps (9/1.09s ≈ 8.3) for consistency with this       │
 * │  project's no-splash-modeled convention elsewhere -- understates its       │
 * │  real value against groups, same caveat as Baneling/other AoE units.       │
 * │                                                                         │
 * │  NOT MODELED (documented gap): Hive tier (Ultralisk Cavern, Infestation   │
 * │  Pit, Ultralisk, Infestor, Viper, Lurker Den/Lurker, Overseer, ...),      │
 * │  creep spread/speed,                                                     │
 * │  multi-hatchery larva accounting (the engine's regen scheduling is      │
 * │  consumption-triggered — see scheduleLarvaRegen — so a newly-finished   │
 * │  2nd Hatchery's extra capacity only fills in once something is          │
 * │  actually being produced afterward, not immediately on completion).     │
 * │                                                                         │
 * │  FIXED 2026-07-05: every structure below now correctly consumes its      │
 * │  builder Drone (EntityData.consumesBuilder) -- this was a real, not      │
 * │  cosmetic, gap: it was ALSO discovered that engine.ts's probesTotal      │
 * │  tracker had a hardcoded `name === "Probe"` check, meaning trained        │
 * │  Drones/SCVs never grew the available-worker count for ANY non-Protoss   │
 * │  race at all (a much bigger bug than just the consumesBuilder gap this    │
 * │  entry used to describe) -- see engine.ts's State.isWorker(). Both are    │
 * │  fixed now; Terran/Zerg economies actually grow past their starting 8     │
 * │  workers in simulation, not just in the replay data they're fit from.    │
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
// Every Zerg structure morphs from and PERMANENTLY CONSUMES a Drone (fixed
// 2026-07-05 -- see engine.ts's EntityData.consumesBuilder / State.probesTotal;
// previously modeled like a Nexus/CommandCenter where the builder survives).
add(ent("Hatchery", 300, 0, 71.4, "Drone", { supplyProvided: 4, isStructure: true, consumesBuilder: true }));
add(ent("Extractor", 25, 0, 21.4, "Drone", { isStructure: true, consumesBuilder: true }));
add(ent("SpawningPool", 200, 0, 46.4, "Drone", { isStructure: true, consumesBuilder: true }));
add(ent("RoachWarren", 150, 0, 39.3, "Drone", { isStructure: true, requires: ["SpawningPool"], consumesBuilder: true }));
add(ent("EvolutionChamber", 75, 0, 25.0, "Drone", { isStructure: true, consumesBuilder: true }));
// Replay-confirmed 2026-07-05: 42.9 exactly, 4/4 samples in the expanded
// 12-replay corpus (was a 32.1 book-value guess before this corpus existed).
add(ent("BanelingNest", 100, 50, 42.9, "Drone", { isStructure: true, requires: ["SpawningPool"], consumesBuilder: true }));
// Lair tier (see header) — Liquipedia LotV values, not replay-verified.
// Lair morphs from HATCHERY, not Drone -- no builder to consume (already a morph).
add(ent("Lair", 150, 100, 40.7, "Hatchery", { isStructure: true, morphFrom: "Hatchery", requires: ["SpawningPool"] }));
add(ent("HydraliskDen", 100, 100, 20.7, "Drone", { isStructure: true, requires: ["Lair"], consumesBuilder: true })); // 29s Normal -> 20.7 Faster
add(ent("Spire", 150, 150, 47.1, "Drone", { isStructure: true, requires: ["Lair"], consumesBuilder: true })); // 66s Normal -> 47.1 Faster
// --- Drone (worker) --------------------------------------------------------
add(ent("Drone", 50, 0, 12.1, "Larva", { supplyCost: 1, isWorker: true, moveSpeed: 2.8125 }));
// --- Larva-produced army/utility units -------------------------------------
// ⚠️ book values below (cost/buildTime/combat stats), see header.
add(ent("Overlord", 100, 0, 17.9, "Larva", { supplyProvided: 8, moveSpeed: 0.8203, hp: 200, shields: 0 }));
add(ent("Zergling", 25, 0, 17.1, "Larva", { supplyCost: 0.5, requires: ["SpawningPool"], moveSpeed: 4.13, dps: 10.0, hp: 35, shields: 0 }));
add(ent("Roach", 75, 25, 20.7, "Larva", { supplyCost: 2, requires: ["RoachWarren"], moveSpeed: 2.25, dps: 14.6, hp: 145, shields: 0 }));
// Lair-tier (see header) — Liquipedia LotV: Hydralisk 100/50/2 supply, 24s
// (Faster 17.1), 90 HP, 12 dmg/0.59s -> 20.4 dps. Mutalisk 100/100/2 supply,
// 24s (Faster 17.1), 120 HP, 9 dmg (first bounce only, see header) /1.09s -> 8.3 dps.
add(ent("Hydralisk", 100, 50, 17.1, "Larva", { supplyCost: 2, requires: ["HydraliskDen"], moveSpeed: 3.15, dps: 20.4, hp: 90, shields: 0 }));
add(ent("Mutalisk", 100, 100, 17.1, "Larva", { supplyCost: 2, requires: ["Spire"], moveSpeed: 5.6, dps: 8.3, hp: 120, shields: 0 }));
// --- Morph (from an existing unit, not larva) ------------------------------
add(ent("Baneling", 25, 25, 10.0, "Zergling", { supplyCost: 0, morphFrom: "Zergling", requires: ["BanelingNest"], moveSpeed: 4.13, dps: 20.0, hp: 30, shields: 0 }));
// --- Hatchery-queue unit (NOT larva — trained like a Gateway unit) ---------
add(ent("Queen", 150, 0, 25.7, "Hatchery", { supplyCost: 2, requires: ["SpawningPool"], moveSpeed: 1.31, dps: 11.2, hp: 175, shields: 0 }));
export const ZERG = {
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
        // Independent Zerg fit (2026-07-05), via tools/calibrate_income.py
        // --townhall Hatchery --gas Extractor, across 12 real 5.0.16 Zerg-side
        // replays (285 mineral samples): rateAB=0.936, rateC=0.276, R²=0.878 —
        // strong, on par with Protoss's fit, and confirms Drone/Probe mining IS
        // close to mechanically identical (0.936 vs Protoss's 0.871, within the
        // range of cross-game variance rather than a systematic race difference).
        mineralRateFirstWorker: 0.936,
        mineralRateSecondWorker: 0.936,
        mineralRateThirdWorker: 0.276, // ~29% of tier-1/2 — lower than Protoss's ~70%; only 1 replay
        // had enough sustained oversaturation to inform this tier, so treat as a real but low-confidence
        // measurement rather than a confirmed Zerg/Protoss mining-behavior difference.
        miningMicro: 1.0,
        // Gas fit attempt FAILED (R²=0.000 on 98 samples) — degenerate, not adopted.
        // Root cause: most of these replays open with a late or "extractor trick"
        // gas timing (first Extractor done at 124-217s in 2 of the 3 inspected),
        // so very few samples land inside the window/ramp-filtered steady state;
        // the ones that do appear to have gas workers pulled on/off inconsistently
        // (idle micro, drone pulls) rather than a stable saturated rate. Keeping
        // the Protoss-derived placeholder until a wider/longer window or Zerg
        // replays with earlier, sustained gas mining are available.
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
        // regen only. Queen inject is now a separate additive mechanic below,
        // not folded into this rate (see header).
        larvaRegenSeconds: 9.51,
        larvaCapPerTownhall: 3,
        // Queen inject (see header): energy pool + "InjectLarva" action. Universal
        // 0.5625/s regen (same rate as Nexus's), 25 start energy per Queen.
        casters: {
            Queen: { startEnergy: 25, maxEnergyPerCaster: 200, regenPerCaster: 0.5625 },
        },
        inject: {
            cost: 25,
            larvaCount: 3,
            delaySeconds: 20.7, // 29s Normal / 1.4 (Faster clock, same convention as buildTime)
        },
    },
    entities,
};
