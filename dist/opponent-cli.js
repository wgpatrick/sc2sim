/**
 * Demonstrate opponent-threat-curve scoring: build a REAL opponent's value
 * curve from a recorded replay, then search for the Protoss build that best
 * keeps pace with (or beats) that specific real game's threat -- not the
 * one that merely arrives fastest in isolation.
 *   npm run opponent
 *
 * Opponents are auto-discovered from every Terran/Zerg-side replay in
 * replays/parsed/ (by the parsed JSON's own player.race -- Protoss-side
 * files are skipped) rather than a hardcoded list, so this scales with the
 * corpus automatically: 22 opponents as of 2026-07-05 (8 Terran, 14 Zerg),
 * up from the original 3. Still not a statistical archetype of a matchup --
 * see README "Modeling the opponent" -- but no longer "whichever 3 replays
 * happen to be in this repo" either.
 */
import * as fs from "fs";
import { PROTOSS } from "./data.js";
import { TERRAN } from "./data-terran.js";
import { ZERG } from "./data-zerg.js";
import { MAPS } from "./maps.js";
import { describeComposition } from "./optimizer.js";
import { searchRawSequences, arrivalScorer } from "./search.js";
import { threatCurveFromReplay, assessDanger, dangerScorer, describeCurve } from "./opponent.js";
import { fmt } from "./engine.js";
const map = MAPS.standard;
const REPLAY_DIR = "replays/parsed";
// A shallower budget than search.ts's default (250/150): this CLI runs one
// search per opponent (22 of them), and we mainly want a broadly-consistent
// safety signal across the whole corpus, not the exact GA optimum for each
// individual game -- see search-cli.ts / README for the full-budget search.
const SEARCH_OPTS = { populationSize: 120, generations: 60 };
function discoverOpponents(dir) {
    const out = [];
    for (const f of fs.readdirSync(dir).sort()) {
        if (!f.endsWith(".json"))
            continue;
        const p = `${dir}/${f}`;
        let race;
        try {
            race = JSON.parse(fs.readFileSync(p, "utf8")).player?.race;
        }
        catch {
            continue; // not valid JSON / not a parsed-replay file -- skip
        }
        if (race === "Terran")
            out.push({ path: p, data: TERRAN });
        else if (race === "Zerg")
            out.push({ path: p, data: ZERG });
        // Protoss-side files are the economy-calibration corpus, not opponent candidates.
    }
    return out;
}
const opponents = discoverOpponents(REPLAY_DIR);
const target = { Stalker: 3, Adept: 2 };
console.log(`Discovered ${opponents.length} opponents (${opponents.filter((o) => o.data === TERRAN).length} Terran, ${opponents.filter((o) => o.data === ZERG).length} Zerg) in ${REPLAY_DIR}/`);
console.log(`MY TARGET: ${describeComposition(target)}\n`);
// The "fastest arrival" build ignores the opponent entirely, so it's the
// SAME build for every opponent below -- search for it once, not once per
// opponent (this used to be silently recomputed inside the loop).
const fast = searchRawSequences(target, PROTOSS, map, arrivalScorer, SEARCH_OPTS);
let sumFastDeficit = 0;
let sumSafeDeficit = 0;
let improvedCount = 0;
const rows = [];
for (const { path, data } of opponents) {
    console.log("\n" + "=".repeat(72));
    const curve = threatCurveFromReplay(path, data, map);
    if (curve.points.length === 0) {
        // The replay-derived sequence deadlocked at t=0 (see the note printed
        // above by threatCurveFromReplay) -- no real signal to score safety
        // against, so skip rather than "optimize" against a vacuous curve.
        console.log(`OPPONENT: ${describeCurve(curve)}  -- SKIPPED (empty curve, no comparison possible)`);
        continue;
    }
    console.log(`OPPONENT: ${describeCurve(curve)}`);
    console.log("=".repeat(72));
    const fastDanger = assessDanger(fast.result, PROTOSS, curve);
    // Danger-scored: search for the build that never falls behind THIS
    // opponent's real recorded value curve.
    const safe = searchRawSequences(target, PROTOSS, map, dangerScorer(PROTOSS, curve), SEARCH_OPTS);
    const safeDanger = assessDanger(safe.result, PROTOSS, curve);
    console.log(`\nfastest-arrival build (ignores opponent):`);
    console.log(`  worst deficit vs this opponent: ${fastDanger.worstDeficit.toFixed(1)} value at ${fmt(fastDanger.worstDeficitTime)}`);
    console.log(`  (positive = behind the real opponent's value at that moment)`);
    console.log(`\ndanger-scored build (optimized against this specific real game):`);
    console.log(`  worst deficit vs this opponent: ${safeDanger.worstDeficit.toFixed(1)} value at ${fmt(safeDanger.worstDeficitTime)}`);
    console.log(`  build order: ${safe.best.join(", ")}`);
    const improvement = fastDanger.worstDeficit - safeDanger.worstDeficit;
    if (improvement > 0.5) {
        console.log(`\n  -> danger-scoring reduced the worst deficit by ${improvement.toFixed(1)} value`);
        improvedCount++;
    }
    else {
        console.log(`\n  -> fastest-arrival build was already safe against this opponent`);
    }
    sumFastDeficit += fastDanger.worstDeficit;
    sumSafeDeficit += safeDanger.worstDeficit;
    rows.push({ source: curve.source, race: curve.opponentRace, fastDeficit: fastDanger.worstDeficit, safeDeficit: safeDanger.worstDeficit });
}
console.log("\n" + "=".repeat(72));
console.log(`SUMMARY across all ${opponents.length} opponents`);
console.log("=".repeat(72));
console.log(`  ${"opponent".padEnd(46)} race     fast-deficit  safe-deficit`);
for (const r of rows) {
    console.log(`  ${r.source.padEnd(46)} ${r.race.padEnd(8)} ${r.fastDeficit.toFixed(1).padStart(11)}  ${r.safeDeficit.toFixed(1).padStart(11)}`);
}
console.log(`\n  mean worst deficit: fastest-arrival ${(sumFastDeficit / rows.length).toFixed(1)}, danger-scored ${(sumSafeDeficit / rows.length).toFixed(1)}`);
console.log(`  danger-scoring improved safety against ${improvedCount}/${rows.length} opponents`);
