/**
 * Protoss game data.
 *
 * ┌───────────────────────────────────────────────────────────────────────┐
 * │  CONFIRMED for patch 5.0.16 (live, late June 2026):                     │
 * │    • startingWorkers: 12 -> 8                                            │
 * │    • Nexus supply provided: 15 -> 13                                     │
 * │    • Chrono Boost: 50 energy, +50% for 20s; Nexus starts 50 energy,      │
 * │      200 max, regen 0.5625/s                                             │
 * │                                                                         │
 * │  ⚠️ APPROXIMATE — VERIFY per patch:                                      │
 * │    • Unit/structure buildTime and cost values below are best-effort     │
 * │      LotV numbers. Regenerate authoritatively from BurnySc2/sc2-techtree │
 * │      (its data.json) and drop the values in here. The ENGINE is correct  │
 * │      regardless of these constants — they are pure data.                 │
 * │    • Income rates (mineralRate*, gasRate) are calibration targets.       │
 * │      Tune them against headless SC2 (see README "Validation").           │
 * └───────────────────────────────────────────────────────────────────────┘
 */
function ent(name, minerals, gas, buildTime, producer, opts = {}) {
    return {
        name,
        minerals,
        gas,
        buildTime,
        producer,
        supplyCost: opts.supplyCost ?? 0,
        supplyProvided: opts.supplyProvided ?? 0,
        requires: opts.requires ?? [],
        isStructure: opts.isStructure ?? false,
    };
}
const entities = {};
function add(e) {
    entities[e.name] = e;
}
// --- Structures ---------------------------------------------------------
add(ent("Nexus", 400, 0, 71, "Probe", { supplyProvided: 13, isStructure: true }));
add(ent("Pylon", 100, 0, 18, "Probe", { supplyProvided: 8, isStructure: true }));
add(ent("Assimilator", 75, 0, 21, "Probe", { isStructure: true }));
add(ent("Gateway", 150, 0, 46, "Probe", { isStructure: true, requires: ["Pylon"] }));
add(ent("CyberneticsCore", 150, 0, 36, "Probe", { isStructure: true, requires: ["Gateway"] }));
add(ent("Forge", 150, 0, 32, "Probe", { isStructure: true, requires: ["Pylon"] }));
add(ent("TwilightCouncil", 150, 100, 36, "Probe", { isStructure: true, requires: ["CyberneticsCore"] }));
add(ent("Stargate", 150, 150, 43, "Probe", { isStructure: true, requires: ["CyberneticsCore"] }));
add(ent("RoboticsFacility", 150, 100, 46, "Probe", { isStructure: true, requires: ["CyberneticsCore"] }));
// --- Nexus-produced -----------------------------------------------------
add(ent("Probe", 50, 0, 12, "Nexus", { supplyCost: 1 }));
// --- Gateway units ------------------------------------------------------
add(ent("Zealot", 100, 0, 27, "Gateway", { supplyCost: 2 }));
add(ent("Stalker", 125, 50, 30, "Gateway", { supplyCost: 2, requires: ["CyberneticsCore"] }));
add(ent("Adept", 100, 25, 27, "Gateway", { supplyCost: 2, requires: ["CyberneticsCore"] }));
add(ent("Sentry", 50, 100, 26, "Gateway", { supplyCost: 2, requires: ["CyberneticsCore"] }));
// --- Stargate units -----------------------------------------------------
add(ent("Oracle", 150, 150, 37, "Stargate", { supplyCost: 3 }));
add(ent("VoidRay", 200, 150, 43, "Stargate", { supplyCost: 4 }));
// --- Robotics units -----------------------------------------------------
add(ent("Immortal", 275, 100, 39, "RoboticsFacility", { supplyCost: 4 }));
add(ent("Observer", 25, 75, 21, "RoboticsFacility", { supplyCost: 1 }));
export const PROTOSS = {
    patch: "5.0.16",
    race: "Protoss",
    economy: {
        startingWorkers: 8, // 5.0.16: was 12
        startingMinerals: 50,
        startingGas: 0,
        mineralPatchesPerBase: 8,
        gasGeysersPerBase: 2,
        // Income calibration targets (resources/second per worker):
        mineralRateFirstWorker: 0.933, // ~56/min, 1st worker on a patch
        mineralRateSecondWorker: 0.7, // ~42/min, 2nd worker on a patch
        gasRatePerWorker: 0.63, // ~38/min, up to 3 per assimilator
        // Chrono Boost / Nexus energy (confirmed LotV):
        nexusStartEnergy: 50,
        nexusMaxEnergy: 200,
        nexusEnergyRegen: 0.5625,
        chronoCost: 50,
        chronoBoostWindow: 20,
        chronoSpeedMultiplier: 1.5,
        probeBuildOccupancy: 4, // seconds a probe is off minerals to start a structure
    },
    entities,
};
