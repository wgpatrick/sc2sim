/**
 * Unit tests for engine.ts internals — fast, deterministic checks that
 * don't need a replay or a published build. Complements validate.ts /
 * validate-replay.ts (which check REAL-WORLD accuracy) by pinning specific
 * MECHANICS so a regression like the 2026-07-05 probesTotal/consumesBuilder
 * bugs (both silently wrong for a whole session before being noticed by
 * accident) gets caught in milliseconds instead of by hand.
 *
 *   npm test
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { simulate, compositionArrivalTime, unitValue, valueOverTime } from "./engine.js";
import { toCombatUnit } from "./combat.js";
import { PROTOSS } from "./data.js";
import { TERRAN } from "./data-terran.js";
import { ZERG } from "./data-zerg.js";
import { MAPS } from "./maps.js";
import { assessDanger } from "./opponent.js";
const map = MAPS.standard;
test("worker count grows past the starting count (regression: probesTotal used to only count 'Probe')", () => {
    for (const [race, data, workerName] of [
        ["Terran", TERRAN, "SCV"],
        ["Zerg", ZERG, "Drone"],
    ]) {
        const start = data.economy.startingWorkers;
        // Train several extra workers back to back (the sim only advances to the
        // START of the last queued action, not its finish, so at least the
        // earlier ones in the chain will have completed and be reflected below).
        const r = simulate(data, [workerName, workerName, workerName, workerName], map);
        assert.ok(r.ok, `${race}: sim failed: ${r.error}`);
        assert.ok(r.final.probes > start, `${race}: probesTotal (${r.final.probes}) should exceed starting workers (${start}) after training more`);
    }
});
test("Zerg structures permanently consume their builder Drone (consumesBuilder)", () => {
    const before = ZERG.economy.startingWorkers;
    const r = simulate(ZERG, ["SpawningPool", "Drone"], map);
    assert.ok(r.ok, `sim failed: ${r.error}`);
    // The Drone action after SpawningPool only STARTS before the sim ends (it's
    // last in the order), so probesTotal should read exactly one less than the
    // start (SpawningPool consumed a Drone; the new one hasn't finished yet).
    assert.equal(r.final.probes, before - 1);
    assert.equal(r.final.supplyUsed, before - 1);
});
test("Protoss structures do NOT consume their builder Probe", () => {
    const before = PROTOSS.economy.startingWorkers;
    const r = simulate(PROTOSS, ["Pylon"], map);
    assert.ok(r.ok, `sim failed: ${r.error}`);
    assert.equal(r.final.probes, before, "building a Pylon must not remove a Probe from the worker count");
});
test("MULE income bonus is reflected in mineral bank over its duration", () => {
    const mule = TERRAN.economy.mule;
    const base = ["SCV", "SupplyDepot", "Refinery", "SCV", "SCV", "SCV", "SCV", "Barracks", "SupplyDepot", "OrbitalCommand"];
    const r1 = simulate(TERRAN, [...base, "MULE", "SCV", "SCV", "SCV", "SCV", "SCV"], map);
    const r2 = simulate(TERRAN, [...base, "SCV", "SCV", "SCV", "SCV", "SCV"], map);
    assert.ok(r1.ok, r1.error ?? "");
    assert.ok(r2.ok, r2.error ?? "");
    const sampleT = 200; // safely inside both runs' timelines and past the MULE window
    const snapshotAt = (snaps, t) => {
        for (let i = snaps.length - 1; i >= 0; i--)
            if (snaps[i].t <= t)
                return snaps[i].minerals;
        return snaps[0].minerals;
    };
    const withMuleMinerals = snapshotAt(r1.snapshots, sampleT);
    const withoutMuleMinerals = snapshotAt(r2.snapshots, sampleT);
    const diff = withMuleMinerals - withoutMuleMinerals;
    // Expect roughly mule.mineralRate * mule.durationSeconds extra minerals
    // (loose tolerance: other actions shift timing slightly between the runs).
    const expected = mule.mineralRate * mule.durationSeconds;
    assert.ok(diff > expected * 0.5, `expected MULE to add roughly ${expected.toFixed(0)} minerals, saw ${diff.toFixed(0)}`);
});
test("InjectLarva delivers +3 larva after the configured delay, not before", () => {
    const inject = ZERG.economy.inject;
    const order = [
        "Overlord", "Overlord", "Overlord", "Overlord", "Overlord", "Overlord", "Overlord", "Overlord",
        "SpawningPool", "Queen", "InjectLarva",
    ];
    const r = simulate(ZERG, order, map);
    assert.ok(r.ok, r.error ?? "");
    const injectLine = r.log.find((l) => l.includes("InjectLarva") && l.includes("+3 larva"));
    assert.ok(injectLine, "expected a log line confirming the inject cast");
    // The delay should match the configured value (within a second for the fmt() rounding).
    assert.ok(injectLine.includes(`${inject.delaySeconds.toFixed(1)}s`) || injectLine.includes(`${Math.round(inject.delaySeconds)}`));
});
test("compositionArrivalTime is Infinity when the target is never fully produced", () => {
    const r = simulate(PROTOSS, ["Probe"], map);
    assert.ok(r.ok);
    assert.equal(compositionArrivalTime(r, { Zealot: 4 }), Infinity);
});
test("a second townhall is buildable and counted (expansions are structurally wired up)", () => {
    const twoBase = simulate(PROTOSS, ["Pylon", "Nexus"], map);
    assert.ok(twoBase.ok, twoBase.error ?? "");
    const nexus = twoBase.actions.find((a) => a.name === "Nexus" && a.kind === "structure");
    assert.ok(nexus, "expected the 2nd Nexus to be built");
    // The detailed patch/tier rate math is exercised by calibrate_income.py /
    // validate-replay.ts against real replay data; this just pins that a 2nd
    // townhall is a legal, simulatable action at all (search.ts's GA vocabulary
    // used to hardcode it out entirely -- see the 2026-07-05 fix).
});
test("Chrono energy cap scales per Nexus, not a flat 200 total (regression: Scouting Report audit)", () => {
    // Before the fix, advanceBy() capped `s.energy` at a flat `nexusMaxEnergy`
    // (200) no matter how many Nexuses were completed. With 2 Nexuses banking
    // energy long enough, the pool should be able to exceed that old flat cap
    // (up to 400 combined) since each Nexus caps and regens independently.
    const order = ["Pylon", "Nexus", ...Array(20).fill("Probe")];
    const r = simulate(PROTOSS, order, map);
    assert.ok(r.ok, r.error ?? "");
    assert.equal(r.final.townhalls, 2);
    assert.ok(r.final.energy > PROTOSS.economy.nexusMaxEnergy, `2-Nexus energy (${r.final.energy}) should exceed the single-Nexus cap of ${PROTOSS.economy.nexusMaxEnergy}`);
    assert.ok(r.final.energy <= PROTOSS.economy.nexusMaxEnergy * 2, `2-Nexus energy (${r.final.energy}) should still be capped at 2x a single Nexus`);
});
test("assessDanger returns 0 (not -Infinity) when both value curves are empty", () => {
    // An empty order list "succeeds" trivially with no actions -- valueOverTime is empty.
    const empty = simulate(PROTOSS, [], map);
    assert.ok(empty.ok);
    const curve = { source: "test", opponentRace: "Terran", points: [] };
    const d = assessDanger(empty, PROTOSS, curve);
    assert.equal(d.worstDeficit, 0);
    assert.equal(d.worstDeficitTime, 0);
});
test("mineral income survives a townhall morph (regression: townhallCount only recognized the STARTING townhall name)", () => {
    // Before the fix, morphing CommandCenter->OrbitalCommand (or Hatchery->
    // Lair) made townhallCount() -- and therefore mineralRate -- permanently
    // drop to ZERO the instant the morph completed, because it only ever
    // counted `economy.startingTownhall` by name. This broke almost every
    // Terran/Zerg build that ever teched up its main base, including two of
    // the four hand-written presets shipped in the browser UI.
    for (const [race, data, order] of [
        ["Terran", TERRAN, ["SCV", "SupplyDepot", "SCV", "SCV", "Barracks", "SCV", "SCV", "OrbitalCommand", "SCV", "SCV", "SCV"]],
        ["Zerg", ZERG, ["Drone", "Drone", "Overlord", "Drone", "SpawningPool", "Drone", "Drone", "Drone", "Drone", "Extractor", "Drone", "Drone", "Lair", "Drone", "Drone", "Drone"]],
    ]) {
        const r = simulate(data, [...order], map);
        assert.ok(r.ok, `${race}: sim failed: ${r.error}`);
        assert.ok(r.final.mineralRate > 0, `${race}: mineralRate should stay positive after the townhall morph, was ${r.final.mineralRate}`);
    }
});
test("a townhall morph does not silently drop supply cap (regression: Lair defaulted to supplyProvided 0)", () => {
    const withLair = simulate(ZERG, ["Drone", "Drone", "Overlord", "Drone", "SpawningPool", "Drone", "Drone", "Drone", "Drone", "Extractor", "Drone", "Drone", "Lair"], map);
    const withoutLair = simulate(ZERG, ["Drone", "Drone", "Overlord", "Drone", "SpawningPool", "Drone", "Drone", "Drone", "Drone", "Extractor", "Drone", "Drone"], map);
    assert.ok(withLair.ok, withLair.error ?? "");
    assert.ok(withoutLair.ok, withoutLair.error ?? "");
    assert.ok(withLair.final.supplyCap >= withoutLair.final.supplyCap, "morphing to Lair must not reduce supply cap versus not morphing at all");
});
test("Zealot warp-in delivers at the proxy distance, not the full home-to-enemy walk", () => {
    const proxyOrder = [
        "Probe", "Probe", "Probe", "Pylon", "Probe", "Assimilator", "Probe",
        "Gateway", "CyberneticsCore", "WarpGateResearch", "Pylon@proxy", "WarpGate", "Zealot",
    ];
    const homeOrder = ["Probe", "Probe", "Probe", "Pylon", "Gateway", "Zealot"];
    const proxyResult = simulate(PROTOSS, proxyOrder, map);
    const homeResult = simulate(PROTOSS, homeOrder, map);
    assert.ok(proxyResult.ok, proxyResult.error ?? "");
    assert.ok(homeResult.ok, homeResult.error ?? "");
    const warpZealot = proxyResult.actions.find((a) => a.name === "Zealot");
    const homeZealot = homeResult.actions.find((a) => a.name === "Zealot");
    assert.ok(warpZealot?.warpedIn, "expected the Zealot to have warped in");
    const proxyTravel = warpZealot.arrivalTime - warpZealot.finishTime;
    const homeTravel = homeZealot.arrivalTime - homeZealot.finishTime;
    assert.ok(proxyTravel < homeTravel, `proxy travel (${proxyTravel.toFixed(1)}s) should be less than home travel (${homeTravel.toFixed(1)}s)`);
});
test("unitValue()/toCombatUnit() only apply an upgrade multiplier when it's in the researched set (regression: Scouting Report Phase 2)", () => {
    const zealot = PROTOSS.entities.Zealot;
    const base = unitValue(zealot);
    const withWeapons = unitValue(zealot, ["GroundWeaponsLevel1"]);
    const withEverything = unitValue(zealot, ["GroundWeaponsLevel1", "GroundArmorLevel1", "Charge"]);
    assert.ok(withWeapons > base, "GroundWeaponsLevel1 should raise Zealot value");
    assert.ok(withEverything > withWeapons, "stacking all 3 Zealot upgrades should raise value further");
    // An unrelated upgrade name (not in Zealot's upgrades list) must be a no-op.
    assert.equal(unitValue(zealot, ["InfantryWeaponsLevel1"]), base);
    const combatBase = toCombatUnit("Zealot", zealot);
    const combatUpgraded = toCombatUnit("Zealot", zealot, ["GroundWeaponsLevel1", "GroundArmorLevel1", "Charge"]);
    assert.ok(combatUpgraded.dps > combatBase.dps);
    assert.ok(combatUpgraded.hp > combatBase.hp);
});
test("valueOverTime only credits a unit with upgrades researched by ITS OWN completion time, not ones the build researches later", () => {
    // 1st Zealot completes at 103.7s, long before Charge exists at all.
    // 2nd Zealot completes at 212.8s, after Charge finishes at 209.3s -- it
    // alone should get Charge's dpsMultiplier (1.15).
    const order = [
        "Pylon", "Gateway", "CyberneticsCore", "Assimilator", "Zealot", "Probe", "Probe",
        "TwilightCouncil", "Charge", "Pylon", "Probe", "Probe", "Zealot", "Probe", "Probe", "Probe",
    ];
    const r = simulate(PROTOSS, order, map);
    assert.ok(r.ok, r.error ?? "");
    const zealots = r.actions.filter((a) => a.name === "Zealot");
    assert.equal(zealots.length, 2);
    assert.deepEqual(zealots[0].researchedAtFinish, [], "1st Zealot completed well before Charge existed");
    assert.deepEqual(zealots[1].researchedAtFinish, ["Charge"], "2nd Zealot completed after Charge finished");
    const points = valueOverTime(r, PROTOSS);
    const zealotPoints = points.filter((p) => p.name === "Zealot");
    assert.equal(zealotPoints.length, 2);
    const firstZealotValue = zealotPoints[0].value;
    const secondZealotMarginalValue = zealotPoints[1].value - firstZealotValue;
    assert.ok(secondZealotMarginalValue > firstZealotValue, `Charge-boosted 2nd Zealot (${secondZealotMarginalValue.toFixed(1)}) should be worth strictly more than the un-upgraded 1st Zealot (${firstZealotValue.toFixed(1)})`);
});
test("Phase 3 roster: Protoss Templar Archives/Robotics Bay tech is fully buildable, including the Archon 2-Templar merge", () => {
    const order = [
        "Probe", "Probe", "Probe", "Probe", "Pylon", "Probe", "Assimilator", "Probe", "Gateway", "CyberneticsCore",
        "Probe", "Probe", "TwilightCouncil", "Pylon", "Probe", "TemplarArchives", "Probe", "Assimilator", "Probe",
        "HighTemplar", "HighTemplar", "Archon",
    ];
    const r = simulate(PROTOSS, order, map);
    assert.ok(r.ok, r.error ?? "");
    const archon = r.actions.find((a) => a.name === "Archon");
    assert.ok(archon, "expected the Archon merge to complete");
    assert.equal(r.final.energy >= 0, true);
    const robo = simulate(PROTOSS, [
        "Probe", "Probe", "Probe", "Probe", "Pylon", "Probe", "Assimilator", "Probe", "Gateway", "CyberneticsCore",
        "Probe", "Probe", "RoboticsFacility", "Pylon", "Probe", "Assimilator", "Probe", "RoboticsBay", "Probe",
        "Colossus", "Disruptor",
    ], map);
    assert.ok(robo.ok, robo.error ?? "");
    assert.ok(robo.actions.find((a) => a.name === "Colossus"));
    assert.ok(robo.actions.find((a) => a.name === "Disruptor"));
});
test("Phase 3 roster: Zerg Hive tier is fully buildable (regression: Hive morphing past Lair must not lock out Lair-tech structures)", () => {
    const order = [
        "Drone", "Drone", "Overlord", "Drone", "Drone", "SpawningPool", "Drone", "Extractor", "Drone", "Drone",
        "Overlord", "Lair", "Drone", "InfestationPit", "Drone", "Hive", "Drone", "UltraliskCavern", "Drone", "HydraliskDen", "Drone", "LurkerDen",
        "Overlord", "Drone", "Drone", "Drone", "Overlord", "Drone", "Drone", "Overlord",
        "Ultralisk", "Hydralisk", "Lurker", "Infestor",
    ];
    const r = simulate(ZERG, order, map);
    assert.ok(r.ok, r.error ?? "");
    for (const name of ["Ultralisk", "Lurker", "Infestor"]) {
        assert.ok(r.actions.find((a) => a.name === name), `expected ${name} to complete`);
    }
    // The regression this test pins: HydraliskDen/LurkerDen both require "Lair"
    // by name, but Lair itself was consumed when it morphed into Hive earlier
    // in this same order -- reqMet() must still recognize Hive as satisfying
    // a "Lair" requirement (see State.reqMet's morph-ancestry walk).
    assert.ok(r.actions.find((a) => a.name === "HydraliskDen"));
    assert.ok(r.actions.find((a) => a.name === "LurkerDen"));
});
test("Phase 3 roster: Terran Ghost/Thor/Battlecruiser are fully buildable (dual tech-building + tech-structure requirements)", () => {
    const order = [
        "SCV", "SCV", "SCV", "SupplyDepot", "SCV", "Barracks", "SCV", "SCV", "Refinery", "SCV",
        "GhostAcademy", "BarracksTechLab", "SCV", "SupplyDepot", "SCV", "Factory", "SCV", "SCV",
        "Armory", "FactoryTechLab", "SCV", "Starport", "SCV", "SupplyDepot", "SCV", "SupplyDepot",
        "FusionCore", "StarportTechLab", "SCV", "SCV",
        "Ghost", "Thor", "Battlecruiser",
    ];
    const r = simulate(TERRAN, order, map);
    assert.ok(r.ok, r.error ?? "");
    for (const name of ["Ghost", "Thor", "Battlecruiser"]) {
        assert.ok(r.actions.find((a) => a.name === name), `expected ${name} to complete`);
    }
});
