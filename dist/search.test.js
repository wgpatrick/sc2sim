/**
 * Unit tests for search.ts's vocabulary construction -- fast, deterministic
 * checks that don't need a full GA run (see engine.test.ts's module comment
 * for why this style exists). Specifically pins the Scouting Report Phase 2
 * wiring: combat upgrades (Charge/Blink/*WeaponsLevel1/*ArmorLevel1/
 * CarapaceLevel1) must be insertable actions, with their producer structure
 * (Forge/TwilightCouncil/EngineeringBay/EvolutionChamber) pulled into the
 * vocabulary too -- otherwise they'd be "discoverable" but never actually
 * buildable.
 *
 *   npm test
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildVocabulary } from "./search.js";
import { PROTOSS } from "./data.js";
import { TERRAN } from "./data-terran.js";
import { ZERG } from "./data-zerg.js";
test("Protoss vocabulary includes Charge/Blink/Ground upgrades and their producer structures", () => {
    const vocab = buildVocabulary({ Zealot: 4 }, PROTOSS, false);
    for (const name of ["Charge", "Blink", "GroundWeaponsLevel1", "GroundArmorLevel1"]) {
        assert.ok(vocab.upgrades.includes(name), `expected ${name} in vocab.upgrades`);
        assert.ok(vocab.chronoTargets.includes(name), `expected chrono:${name} to be a legal cast`);
    }
    assert.ok(vocab.structures.includes("TwilightCouncil"), "Charge/Blink's producer must be reachable");
    assert.ok(vocab.structures.includes("Forge"), "GroundWeapons/ArmorLevel1's producer must be reachable");
    // WarpGateResearch is handled separately via the `warp` flag, not vocab.upgrades.
    assert.ok(!vocab.upgrades.includes("WarpGateResearch"));
});
test("Terran vocabulary includes Infantry upgrades and EngineeringBay, but no Protoss-only names", () => {
    const vocab = buildVocabulary({ Marine: 4 }, TERRAN, false);
    assert.ok(vocab.upgrades.includes("InfantryWeaponsLevel1"));
    assert.ok(vocab.upgrades.includes("InfantryArmorLevel1"));
    assert.ok(vocab.structures.includes("EngineeringBay"));
    assert.ok(!vocab.upgrades.includes("Charge"));
    assert.equal(vocab.chronoTargets.length, 0, "Terran has no Chrono -- chronoTargets must stay empty");
});
test("Zerg vocabulary includes Missile Weapons/Carapace and EvolutionChamber", () => {
    const vocab = buildVocabulary({ Roach: 4 }, ZERG, false);
    assert.ok(vocab.upgrades.includes("MissileWeaponsLevel1"));
    assert.ok(vocab.upgrades.includes("CarapaceLevel1"));
    assert.ok(vocab.structures.includes("EvolutionChamber"));
});
