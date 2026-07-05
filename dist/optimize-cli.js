/**
 * Run the optimizer for a few example "army at the enemy" targets.
 *   npm run optimize
 */
import { PROTOSS } from "./data.js";
import { MAPS } from "./maps.js";
import { optimize, describeComposition, fmt } from "./optimizer.js";
const targets = [
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
    console.log(`evaluated ${r.evaluated} candidate builds → best arrival ${fmt(r.arrival)} (${p.strategy})`);
    console.log(`  best params: ${p.probeTarget} probes, ${p.producerCount} producers, ` +
        `${p.gasCount} gas, +${p.openerProbes} opener probes`);
    console.log("  by strategy:");
    for (const [name, sb] of Object.entries(r.bestByStrategy)) {
        console.log(`    ${name.padEnd(10)} ${fmt(sb.arrival)}   (${sb.params.producerCount} producers, ${sb.params.probeTarget} probes)`);
    }
    console.log("\n  winning build order:");
    console.log("    " + r.order.join(", "));
}
