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
import { simulate, compositionArrivalTime } from "./engine.js";
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
test("assessDanger returns 0 (not -Infinity) when both value curves are empty", () => {
    // An empty order list "succeeds" trivially with no actions -- valueOverTime is empty.
    const empty = simulate(PROTOSS, [], map);
    assert.ok(empty.ok);
    const curve = { source: "test", opponentRace: "Terran", points: [] };
    const d = assessDanger(empty, PROTOSS, curve);
    assert.equal(d.worstDeficit, 0);
    assert.equal(d.worstDeficitTime, 0);
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
