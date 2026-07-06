import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveCombat, toCombatUnit } from "./combat.js";
import { PROTOSS } from "./data.js";
import { ZERG } from "./data-zerg.js";

test("a decisively stronger composition wins", () => {
  const strong = [toCombatUnit("Immortal", PROTOSS.entities.Immortal), toCombatUnit("Immortal", PROTOSS.entities.Immortal)];
  const weak = [toCombatUnit("Zergling", ZERG.entities.Zergling)];
  const r = resolveCombat(strong, weak);
  assert.equal(r.winner, "A");
  assert.ok(r.survivorsA.length > 0);
  assert.equal(r.survivorsB.length, 0);
});

test("an identical composition on both sides ends in mutual annihilation (draw)", () => {
  const a = [toCombatUnit("Zealot", PROTOSS.entities.Zealot), toCombatUnit("Zealot", PROTOSS.entities.Zealot)];
  const b = [toCombatUnit("Zealot", PROTOSS.entities.Zealot), toCombatUnit("Zealot", PROTOSS.entities.Zealot)];
  const r = resolveCombat(a, b);
  assert.equal(r.winner, "draw");
  assert.equal(r.survivorsA.length, 0);
  assert.equal(r.survivorsB.length, 0);
});

test("two non-combat (0 dps) sides stalemate rather than looping forever", () => {
  const a = [{ name: "Observer", hp: 40, dps: 0 }];
  const b = [{ name: "Overlord", hp: 200, dps: 0 }];
  const r = resolveCombat(a, b);
  assert.equal(r.winner, "draw");
  assert.equal(r.ticks, 0);
  assert.equal(r.survivorsA.length, 1);
  assert.equal(r.survivorsB.length, 1);
});

test("focus fire kills the lowest-HP unit first", () => {
  const attacker = [{ name: "BigHitter", hp: 1, dps: 100 }];
  const defenders = [
    { name: "Tanky", hp: 500, dps: 0 },
    { name: "Fragile", hp: 10, dps: 0 },
  ];
  const r = resolveCombat(attacker, defenders, { tickSeconds: 1, maxTicks: 1 });
  // After 1 tick (100 damage), Fragile (10 hp) should be dead, Tanky should have taken the remainder.
  assert.ok(!r.survivorsB.some((u) => u.name === "Fragile"));
  assert.ok(r.survivorsB.some((u) => u.name === "Tanky"));
});
