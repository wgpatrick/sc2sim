/**
 * Validation: compare the sim against PUBLISHED pro builds with known timings.
 *   npm run validate
 *
 * Ground truth: real 5.0.16 builds transcribed from Spawning Tool (probes fill
 * supply between the listed milestones). This is how we validate WITHOUT a
 * current-patch headless client (the newest headless Linux build is 4.10, seven
 * years behind 5.0.16 — see README). Using several builds with different tech
 * paths guards against tuning the income model to one build.
 */
import { simulate, fmt } from "./engine.js";
import { PROTOSS } from "./data.js";
import { MAPS } from "./maps.js";
const CASES = [
    {
        name: "Harstem 5.0.16 gasless PvT",
        url: "https://lotv.spawningtool.com/build/203088/",
        order: [
            "Probe", "chrono:Probe", "Probe", "Probe", "Probe",
            "Pylon",
            "Probe", "Probe",
            "Gateway",
            "Probe", "Probe",
            "Nexus",
            "Assimilator", "CyberneticsCore", "Assimilator",
            "Probe", "Probe",
            "Pylon",
            "Adept", "chrono:Adept",
            "WarpGateResearch",
            "Adept", "chrono:Adept", "Adept",
            "TwilightCouncil",
        ],
        published: {
            Pylon: 32, Gateway: 58, Nexus: 90, Assimilator: 96, CyberneticsCore: 107,
            Adept: 145, WarpGateResearch: 152, TwilightCouncil: 190,
        },
    },
    {
        name: "Harstem 5.0.16 PvZ (Stargate)",
        url: "https://lotv.spawningtool.com/build/203087/",
        order: [
            "Probe", "chrono:Probe", "Probe", "Probe", "Probe", // -> 12
            "Pylon",
            "Probe", "Probe", // -> 14
            "Gateway",
            "Probe", "Assimilator", // 15
            "Probe", "Assimilator", // 16
            "Probe", "Probe", "Probe", // -> 19
            "Nexus",
            "CyberneticsCore",
            "Probe", "Assimilator", // 20
            "Pylon",
            "Adept", "chrono:Adept",
            "Stargate",
            "Adept", "chrono:Adept",
            "WarpGateResearch", "chrono:WarpGateResearch",
            "Adept",
            "Oracle",
        ],
        published: {
            Pylon: 34, Gateway: 60, Assimilator: 68, Nexus: 114, CyberneticsCore: 125,
            Adept: 161, Stargate: 169, WarpGateResearch: 185, Oracle: 215,
        },
    },
];
let grandTotal = 0;
let grandN = 0;
for (const c of CASES) {
    const res = simulate(PROTOSS, c.order, MAPS.standard);
    console.log(`\n${c.name}`);
    console.log(`  ${c.url}`);
    if (!res.ok) {
        console.log(`  ❌ INVALID: ${res.error}`);
        continue;
    }
    const firstStart = {};
    for (const a of res.actions)
        if (!(a.name in firstStart))
            firstStart[a.name] = a.startTime;
    console.log("  milestone            sim     published   delta");
    console.log("  " + "-".repeat(48));
    let total = 0;
    let n = 0;
    for (const [name, pub] of Object.entries(c.published)) {
        const sim = firstStart[name];
        if (sim == null) {
            console.log(`  ${name.padEnd(20)} (not built)`);
            continue;
        }
        const d = sim - pub;
        total += Math.abs(d);
        n++;
        console.log(`  ${name.padEnd(20)} ${fmt(sim).padStart(5)} ${fmt(pub).padStart(9)}    ${d >= 0 ? "+" : ""}${d.toFixed(0)}s`);
    }
    console.log("  " + "-".repeat(48));
    console.log(`  mean absolute error: ${(total / n).toFixed(1)}s over ${n} milestones`);
    grandTotal += total;
    grandN += n;
}
console.log(`\n=== overall: ${(grandTotal / grandN).toFixed(1)}s mean abs error over ${grandN} milestones, ${CASES.length} builds ===`);
