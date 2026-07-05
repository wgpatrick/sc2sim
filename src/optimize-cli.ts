/**
 * Run the optimizer for a few example "army at the enemy" targets.
 *   npm run optimize
 */
import { PROTOSS } from "./data.js";
import { MAPS } from "./maps.js";
import { optimize, describeComposition, fmt } from "./optimizer.js";
import type { Composition } from "./engine.js";

const targets: Composition[] = [
  { Zealot: 4 }, // pure gateway, no gas — classic proxy candidate
  { Stalker: 4 }, // needs gas + Cyber
  { Adept: 4 }, // adept all-in
  { Stalker: 3, Adept: 2 }, // mixed
];

const map = MAPS.standard;

for (const target of targets) {
  console.log("\n" + "=".repeat(72));
  console.log(`TARGET: ${describeComposition(target)} arriving at the enemy`);
  console.log(`map: ${map.name}`);
  console.log("=".repeat(72));

  const r = optimize(target, PROTOSS, map);
  const p = r.params;
  console.log(
    `evaluated ${r.evaluated} candidate builds → best arrival ${fmt(r.arrival)}`,
  );
  console.log(
    `  best params: ${p.proxy ? "PROXY" : "home"}, ${p.probeTarget} probes, ` +
      `${p.producerCount} producers, ${p.gasCount} gas, +${p.openerProbes} opener probes`,
  );
  if (r.bestHome && r.bestProxy) {
    const diff = r.bestHome.arrival - r.bestProxy.arrival;
    console.log(
      `  home best:  ${fmt(r.bestHome.arrival)}   proxy best: ${fmt(r.bestProxy.arrival)}` +
        `   → proxy is ${diff >= 0 ? "faster" : "slower"} by ${fmt(Math.abs(diff))}`,
    );
  }
  console.log("\n  winning build order:");
  console.log("    " + r.order.join(", "));
}
