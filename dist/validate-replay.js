/**
 * Diff harness: replay the REAL build order from a parsed replay (see
 * tools/parse_replay.py) through the simulator, and compare the sim's
 * predicted timings/economy against what actually happened in the game.
 *
 *   npm run diff replays/parsed/Krystianer_vs_Solar_PvZ_Blackrock_2026-06-28.json
 *   npm run diff replays/parsed/*.json                 (all at once)
 *   npm run diff replays/parsed/foo.json --horizon 300  (override the default 3 min)
 *
 * Unlike validate.ts (hand-transcribed published builds), this derives BOTH
 * the action sequence AND the ground-truth timings straight from the replay,
 * so there's no manual transcription to get wrong — but it only covers
 * entities sc2sim actually models (data.ts), and real games only track the
 * sim closely before scouting/harassment/decisions start diverging the two
 * timelines. Default horizon is 3 minutes for that reason; the mineral/gas
 * BANK comparison (not just entity timings) is the main signal to trust —
 * it's what the sim's economy model is actually for.
 */
import * as fs from "fs";
import { simulate, fmt } from "./engine.js";
import { PROTOSS } from "./data.js";
import { MAPS } from "./maps.js";
const DEFAULT_HORIZON = 180; // 3 minutes — before scouting/harassment decisions diverge the two timelines
/**
 * Turn the replay's real events into an ordered Action[] the engine can run.
 * We only know true DECISION times for structures (Init) and morphs; units
 * and upgrades only expose completion in tracker data, so we back out an
 * estimated decision time (completion - known buildTime) purely to interleave
 * the sequence realistically. The actual comparison later uses completion
 * times exclusively, which both sides genuinely have.
 */
function buildActionSequence(replay, horizon) {
    const entities = PROTOSS.entities;
    const timed = [];
    for (const e of replay.buildOrder) {
        if (e.t <= 0 || e.t > horizon)
            continue; // t=0 is the shared starting state
        const ent = entities[e.name];
        if (!ent)
            continue; // entity sc2sim doesn't model — skip
        if (ent.morphFrom) {
            if (e.event !== "morph")
                continue;
            timed.push({ action: e.name, decisionTime: e.t });
        }
        else if (ent.isUpgrade) {
            if (e.event !== "upgrade")
                continue;
            timed.push({ action: e.name, decisionTime: Math.max(0, e.t - ent.buildTime) });
        }
        else if (ent.isStructure) {
            if (e.event !== "start")
                continue;
            timed.push({ action: e.name, decisionTime: e.t });
        }
        else {
            if (e.event !== "born")
                continue;
            timed.push({ action: e.name, decisionTime: Math.max(0, e.t - ent.buildTime) });
        }
    }
    timed.sort((a, b) => a.decisionTime - b.decisionTime);
    return timed.map((x) => x.action);
}
/** Real completion time for the n-th occurrence of each entity, from the replay. */
function realFinishTimes(replay, horizon) {
    const done = new Map();
    for (const e of replay.buildOrder) {
        if (e.t <= 0 || e.t > horizon)
            continue; // t=0 is the shared starting state (8 probes, 1 Nexus)
        const ent = PROTOSS.entities[e.name];
        if (!ent)
            continue;
        const wantEvent = ent.morphFrom ? "morph" : ent.isUpgrade ? "upgrade" : ent.isStructure ? "done" : "born";
        if (e.event !== wantEvent)
            continue;
        if (!done.has(e.name))
            done.set(e.name, []);
        done.get(e.name).push(e.t);
    }
    return done;
}
function simFinishTimes(actions) {
    const m = new Map();
    for (const a of actions) {
        if (!m.has(a.name))
            m.set(a.name, []);
        m.get(a.name).push(a.finishTime);
    }
    for (const arr of m.values())
        arr.sort((a, b) => a - b);
    return m;
}
/** Linear-interpolate the sim's snapshot series at time t. */
function snapshotAt(snapshots, t) {
    if (t <= snapshots[0].t)
        return snapshots[0];
    for (let i = 1; i < snapshots.length; i++) {
        if (snapshots[i].t >= t) {
            const a = snapshots[i - 1];
            const b = snapshots[i];
            const f = b.t === a.t ? 0 : (t - a.t) / (b.t - a.t);
            return {
                minerals: a.minerals + (b.minerals - a.minerals) * f,
                gas: a.gas + (b.gas - a.gas) * f,
                supplyUsed: a.supplyUsed + (b.supplyUsed - a.supplyUsed) * f,
                probes: a.probes + (b.probes - a.probes) * f,
            };
        }
    }
    return snapshots[snapshots.length - 1];
}
function runOne(path, horizon) {
    const replay = JSON.parse(fs.readFileSync(path, "utf8"));
    const actions = buildActionSequence(replay, horizon);
    const result = simulate(PROTOSS, actions, MAPS.standard);
    console.log(`\n${"=".repeat(76)}`);
    console.log(`${replay.source}  —  ${replay.player.name} (${replay.player.race}), ${replay.map}`);
    console.log(`horizon: ${fmt(horizon)}, ${actions.length} actions replayed`);
    console.log("=".repeat(76));
    if (!result.ok) {
        console.log(`⚠️  sim diverged from the real sequence: ${result.error}`);
        console.log("   (showing partial results up to the point of divergence)");
    }
    const real = realFinishTimes(replay, horizon);
    const sim = simFinishTimes(result.actions);
    console.log("\n  entity                sim      real     delta   n");
    console.log("  " + "-".repeat(52));
    let total = 0;
    let n = 0;
    const allNames = new Set([...real.keys(), ...sim.keys()]);
    for (const name of [...allNames].sort()) {
        const r = real.get(name) ?? [];
        const s = sim.get(name) ?? [];
        const k = Math.min(r.length, s.length);
        for (let i = 0; i < k; i++) {
            const d = s[i] - r[i];
            total += Math.abs(d);
            n++;
            console.log(`  ${(name + (k > 1 ? ` #${i + 1}` : "")).padEnd(20)} ${fmt(s[i]).padStart(6)}   ${fmt(r[i]).padStart(6)}   ${(d >= 0 ? "+" : "") + d.toFixed(0)}s`);
        }
        if (r.length !== s.length) {
            console.log(`  ${name.padEnd(20)} (real ${r.length}x, sim ${s.length}x — count mismatch)`);
        }
    }
    console.log("  " + "-".repeat(52));
    if (n > 0)
        console.log(`  mean absolute error: ${(total / n).toFixed(1)}s over ${n} matched completions`);
    console.log("\n  bank: sim's forecast vs the real game (this is the metric that matters)");
    console.log("  t       minerals(sim/real)   gas(sim/real)   workers(sim/real)   supplyUsed(sim/real)");
    console.log("  " + "-".repeat(80));
    let mineralErr = 0;
    let gasErr = 0;
    let bankSamples = 0;
    for (const e of replay.economy) {
        if (e.t > horizon || e.t === 0)
            continue;
        const simAt = snapshotAt(result.snapshots, e.t);
        mineralErr += Math.abs(simAt.minerals - e.minerals);
        gasErr += Math.abs(simAt.gas - e.gas);
        bankSamples++;
        console.log(`  ${fmt(e.t).padStart(5)}   ${simAt.minerals.toFixed(0).padStart(5)} / ${String(e.minerals).padStart(5)}` +
            `        ${simAt.gas.toFixed(0).padStart(4)} / ${String(e.gas).padStart(4)}` +
            `        ${simAt.probes.toFixed(0).padStart(3)} / ${String(e.workers).padStart(3)}` +
            `           ${simAt.supplyUsed.toFixed(0).padStart(3)} / ${String(e.supplyUsed).padStart(3)}`);
    }
    const mineralMAE = bankSamples > 0 ? mineralErr / bankSamples : null;
    const gasMAE = bankSamples > 0 ? gasErr / bankSamples : null;
    if (mineralMAE != null) {
        console.log(`  bank MAE: ${mineralMAE.toFixed(0)} minerals, ${gasMAE.toFixed(0)} gas, over ${bankSamples} samples`);
    }
    return { name: replay.source, meanAbsError: n > 0 ? total / n : null, n, mineralMAE, gasMAE };
}
function main() {
    const args = process.argv.slice(2);
    let horizon = DEFAULT_HORIZON;
    const hi = args.indexOf("--horizon");
    if (hi >= 0) {
        horizon = Number(args[hi + 1]);
        args.splice(hi, 2);
    }
    if (args.length === 0) {
        console.error("usage: node dist/validate-replay.js <parsed-replay.json...> [--horizon seconds]");
        process.exit(1);
    }
    const summaries = args.map((p) => runOne(p, horizon));
    if (summaries.length > 1) {
        console.log(`\n${"=".repeat(76)}`);
        for (const s of summaries) {
            const t = s.meanAbsError != null ? `${s.meanAbsError.toFixed(1)}s MAE (${s.n} completions)` : "n/a";
            const bank = s.mineralMAE != null ? `${s.mineralMAE.toFixed(0)} min / ${s.gasMAE.toFixed(0)} gas bank MAE` : "n/a";
            console.log(`  ${s.name.padEnd(50)} timing: ${t}   bank: ${bank}`);
        }
        const withBank = summaries.filter((s) => s.mineralMAE != null);
        if (withBank.length > 0) {
            const avgMineral = withBank.reduce((a, s) => a + s.mineralMAE, 0) / withBank.length;
            const avgGas = withBank.reduce((a, s) => a + s.gasMAE, 0) / withBank.length;
            console.log(`\n  overall bank MAE: ${avgMineral.toFixed(0)} minerals, ${avgGas.toFixed(0)} gas, across ${withBank.length} replays`);
        }
    }
}
main();
