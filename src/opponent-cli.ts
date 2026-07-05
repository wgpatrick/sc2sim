/**
 * Demonstrate opponent-threat-curve scoring: build a REAL opponent's value
 * curve from a recorded replay, then search for the Protoss build that best
 * keeps pace with (or beats) that specific real game's threat -- not the
 * one that merely arrives fastest in isolation.
 *   npm run opponent
 */
import { PROTOSS } from "./data.js";
import { TERRAN } from "./data-terran.js";
import { ZERG } from "./data-zerg.js";
import { MAPS } from "./maps.js";
import { describeComposition } from "./optimizer.js";
import { searchRawSequences, arrivalScorer } from "./search.js";
import { threatCurveFromReplay, assessDanger, dangerScorer, describeCurve } from "./opponent.js";
import { fmt } from "./engine.js";
import type { Composition } from "./engine.js";

const map = MAPS.standard;

const opponents: { path: string; data: typeof TERRAN | typeof ZERG }[] = [
  { path: "replays/parsed/CannonRush_vs_Calyx_PvT_2026-06-29.opponent.json", data: TERRAN },
  { path: "replays/parsed/Harstem_Lockdown_2026-06-29.opponent.json", data: ZERG },
  { path: "replays/parsed/Krystianer_vs_Solar_PvZ_Blackrock_2026-06-28.opponent.json", data: ZERG },
];

const target: Composition = { Stalker: 3, Adept: 2 };

for (const { path, data } of opponents) {
  console.log("\n" + "=".repeat(72));
  const curve = threatCurveFromReplay(path, data, map);
  console.log(`OPPONENT: ${describeCurve(curve)}`);
  console.log(`MY TARGET: ${describeComposition(target)}`);
  console.log("=".repeat(72));

  // Baseline: search purely for fastest arrival (ignores the opponent).
  const fast = searchRawSequences(target, PROTOSS, map, arrivalScorer);
  const fastDanger = assessDanger(fast.result, PROTOSS, curve);

  // Danger-scored: search for the build that never falls behind THIS
  // opponent's real recorded value curve.
  const safe = searchRawSequences(target, PROTOSS, map, dangerScorer(PROTOSS, curve));
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
    console.log(`     (fastest-arrival build undervalues safety the danger-scored one restores)`);
  } else {
    console.log(`\n  -> fastest-arrival build was already safe against this opponent`);
  }
}
