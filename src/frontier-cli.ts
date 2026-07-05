/**
 * Demo: the value-over-time frontier, searched across several unit-count
 * targets instead of one fixed composition.
 *   npm run frontier
 */
import { PROTOSS } from "./data.js";
import { MAPS } from "./maps.js";
import { valueFrontier, describeComposition, fmt } from "./optimizer.js";
import type { Composition } from "./engine.js";

function sweep(unit: string, counts: number[]): Composition[] {
  return counts.map((n) => ({ [unit]: n }));
}

const targets: Composition[] = [
  ...sweep("Zealot", [2, 4, 6, 8, 10, 12, 16]),
  ...sweep("Stalker", [2, 4, 6, 8, 10, 12, 16]),
  ...sweep("Adept", [2, 4, 6, 8, 10, 12]),
];

const map = MAPS.standard;
console.log(`searching ${targets.length} target compositions across ${map.name}...`);

const t0 = Date.now();
const frontier = valueFrontier(targets, PROTOSS, map);
console.log(`done in ${((Date.now() - t0) / 1000).toFixed(1)}s\n`);

console.log("Pareto frontier: max fighting value deliverable BY time t, across every build searched");
console.log("  t       value   unit        from build (strategy, target)");
console.log("  " + "-".repeat(70));
for (const p of frontier) {
  console.log(
    `  ${fmt(p.t).padStart(5)}  ${p.value.toFixed(1).padStart(7)}   +${p.name.padEnd(10)} ${p.params.strategy.padEnd(10)} target ${describeComposition(p.target)}`,
  );
}
