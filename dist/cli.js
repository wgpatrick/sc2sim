/**
 * Node CLI: run the sample builds through the simulator and print timelines.
 *   npm run demo
 */
import { simulate, fmt } from "./engine.js";
import { PROTOSS } from "./data.js";
import { BUILDS } from "./builds.js";
function printBuild(name, description, order) {
    console.log("\n" + "=".repeat(72));
    console.log(`BUILD: ${name}   [patch ${PROTOSS.patch}, ${PROTOSS.race}]`);
    console.log(description);
    console.log("=".repeat(72));
    const res = simulate(PROTOSS, order);
    for (const line of res.log)
        console.log("  " + line);
    if (!res.ok) {
        console.log(`\n  ❌ INVALID: ${res.error}`);
        return;
    }
    const f = res.final;
    console.log("\n  " + "-".repeat(68));
    console.log(`  Last action started at ${fmt(res.finishTime)}   ` +
        `(supply ${Math.round(f.supplyUsed)}/${Math.round(f.supplyCap)}, ` +
        `${f.probes} probes, ${Math.round(f.minerals)}m ${Math.round(f.gas)}g)`);
}
for (const b of BUILDS)
    printBuild(b.name, b.description, b.order);
// A quick sanity check the numbers move the right direction.
console.log("\n" + "=".repeat(72));
console.log("SANITY: chrono should make the fastest-Cyber build finish sooner");
console.log("=".repeat(72));
const base = ["Probe", "Pylon", "Gateway", "Assimilator", "CyberneticsCore"];
const boosted = [
    "Probe",
    "chrono:Probe",
    "Pylon",
    "Gateway",
    "Assimilator",
    "CyberneticsCore",
    "chrono:CyberneticsCore",
];
const rb = simulate(PROTOSS, base);
const rc = simulate(PROTOSS, boosted);
const cyberBase = rb.actions.find((a) => a.name === "CyberneticsCore");
const cyberBoost = rc.actions.find((a) => a.name === "CyberneticsCore");
console.log(`  Cyber Core done (no chrono): ${fmt(cyberBase.finishTime)}`);
console.log(`  Cyber Core done (chrono):    ${fmt(cyberBoost.finishTime)}`);
console.log(cyberBoost.finishTime < cyberBase.finishTime
    ? "  ✅ chrono helped"
    : "  ⚠️  chrono did not help — check the model");
