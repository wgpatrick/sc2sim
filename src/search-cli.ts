/**
 * Run the raw-sequence GA (search.ts) on the same targets optimize-cli.ts
 * uses, seeded with the template optimizer's own best answer per strategy --
 * so any improvement shown here is something the template genuinely could
 * NOT express, not just a different random draw.
 *   npm run search
 */
import { PROTOSS } from "./data.js";
import { MAPS } from "./maps.js";
import { optimize, describeComposition, fmt } from "./optimizer.js";
import { searchRawSequences, arrivalScorer } from "./search.js";
import type { Composition } from "./engine.js";

const targets: Composition[] = [
  { Zealot: 4 },
  { Stalker: 4 },
  { Adept: 4 },
  { Stalker: 3, Adept: 2 },
];

const map = MAPS.standard;

for (const target of targets) {
  console.log("\n" + "=".repeat(72));
  console.log(`TARGET: ${describeComposition(target)} arriving at the enemy`);
  console.log("=".repeat(72));

  const tmpl = optimize(target, PROTOSS, map);
  const seeds = Object.values(tmpl.bestByStrategy).map((sb) => sb.order);

  const t0 = Date.now();
  const ga = searchRawSequences(target, PROTOSS, map, arrivalScorer, { seeds });
  const ms = Date.now() - t0;

  const improvement = tmpl.arrival - ga.score;
  console.log(`template optimizer : ${fmt(tmpl.arrival)}  (${tmpl.evaluated} candidates, ${tmpl.params.strategy})`);
  console.log(
    `raw-sequence GA     : ${fmt(ga.score)}  (${ga.evaluated} evaluations, ${ga.generations} generations, ${ms}ms)`,
  );
  if (improvement > 0.05) {
    console.log(`  -> GA found a build ${improvement.toFixed(1)}s FASTER than any template-shaped build.`);
  } else if (improvement < -0.05) {
    console.log(`  -> GA regressed by ${(-improvement).toFixed(1)}s (should not happen -- it's seeded with the template's answer).`);
  } else {
    console.log(`  -> GA matched the template optimum (no faster ordering found in this search budget).`);
  }
  console.log("\n  GA build order:");
  console.log("    " + ga.best.join(", "));
}
