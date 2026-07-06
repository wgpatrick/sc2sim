/**
 * Node CLI: run the sample builds through the simulator and print timelines.
 *   npm run demo
 */
import { simulate, fmt } from "./engine.js";
import { PROTOSS } from "./data.js";
import { BUILDS } from "./builds.js";
import { DEFAULT_MAP } from "./maps.js";
import { forecastDepletion, describeDepletionForecast } from "./economy-forecast.js";

function printBuild(name: string, description: string, order: string[]) {
  console.log("\n" + "=".repeat(72));
  console.log(`BUILD: ${name}   [patch ${PROTOSS.patch}, ${PROTOSS.race}]`);
  console.log(description);
  console.log(`map: ${DEFAULT_MAP.name}`);
  console.log("=".repeat(72));

  const res = simulate(PROTOSS, order, DEFAULT_MAP);
  for (const line of res.log) console.log("  " + line);

  if (!res.ok) {
    console.log(`\n  ❌ INVALID: ${res.error}`);
    return;
  }

  // Show arrival times for army units (the map layer in action).
  const army = res.actions.filter((a) => a.kind === "unit" && !PROTOSS.entities[a.name]?.isWorker);
  if (army.length) {
    console.log("\n  army arrival at enemy:");
    for (const a of army)
      console.log(
        `    ${a.name.padEnd(10)} built ${fmt(a.finishTime)}  ->  arrives ${fmt(a.arrivalTime!)} (${a.location})`,
      );
  }

  const f = res.final;
  console.log(
    `\n  Last action ${fmt(res.finishTime)}   ` +
      `(supply ${Math.round(f.supplyUsed)}/${Math.round(f.supplyCap)}, ${f.probes} probes)`,
  );
  console.log(`  Mineral outlook: ${describeDepletionForecast(forecastDepletion(f, PROTOSS.economy.mineralPatchesPerBase))}`);
}

for (const b of BUILDS) printBuild(b.name, b.description, b.order);
