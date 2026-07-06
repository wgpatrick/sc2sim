import { test } from "node:test";
import assert from "node:assert/strict";
import { forecastDepletion } from "./economy-forecast.js";
import { simulate } from "./engine.js";
import { PROTOSS } from "./data.js";
import { MAPS } from "./maps.js";

test("forecasts a finite depletion time when actively mining", () => {
  const r = simulate(PROTOSS, ["Probe", "Probe", "Probe"], MAPS.standard);
  assert.ok(r.ok);
  const f = forecastDepletion(r.final, PROTOSS.economy.mineralPatchesPerBase);
  assert.equal(f.townhalls, 1);
  assert.equal(f.totalCapacity, 1 * PROTOSS.economy.mineralPatchesPerBase * 1350);
  assert.ok(f.estimatedSecondsToDepletion !== null && f.estimatedSecondsToDepletion > 0);
});

test("a 2nd townhall doubles the reported capacity", () => {
  // The sim only advances to the START of its last action, so follow the
  // Nexus with enough further actions that it actually COMPLETES first.
  const r = simulate(PROTOSS, ["Pylon", "Nexus", "Probe", "Probe", "Probe", "Probe", "Probe", "Probe", "Probe", "Probe", "Probe"], MAPS.standard);
  assert.ok(r.ok, r.error ?? "");
  const f = forecastDepletion(r.final, PROTOSS.economy.mineralPatchesPerBase);
  assert.equal(f.townhalls, 2);
  assert.equal(f.totalCapacity, 2 * PROTOSS.economy.mineralPatchesPerBase * 1350);
});

test("returns null depletion time when nothing is mining", () => {
  // No workers assigned to minerals is not directly constructible here, but
  // a rate of exactly 0 must still be handled without dividing by zero.
  const zeroRateSnapshot = { t: 0, minerals: 50, gas: 0, supplyUsed: 8, supplyCap: 15, probes: 0, energy: 0, mineralRate: 0, gasRate: 0, townhalls: 1 };
  const f = forecastDepletion(zeroRateSnapshot, 8);
  assert.equal(f.estimatedSecondsToDepletion, null);
});
