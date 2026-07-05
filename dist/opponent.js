/**
 * Opponent modeling: instead of optimizing a Protoss build order in
 * isolation ("how fast can MY army arrive"), score it against a REAL
 * opponent's recorded threat curve -- "how much fighting value does the
 * enemy have by time t, in a game someone actually played" (see
 * replays/parsed/*.opponent.json, extracted straight from this repo's
 * replay corpus, not hand-authored archetypes).
 *
 * This directly answers a sharper question than compositionArrivalTime:
 * not "when do I arrive", but "am I ever BEHIND the enemy's real value
 * curve" -- a build that's fast but leaves you with less value than a real
 * opponent had at the same timestamp is a build that loses to that opener,
 * regardless of how it ranks against other Protoss builds in isolation.
 */
import * as fs from "fs";
import { simulate, valueOverTime, fmt } from "./engine.js";
import { sequenceFromReplay } from "./replay.js";
/**
 * Replay a real opponent's recorded build order (from tools/parse_replay.py)
 * through their own race's simulate(), and return their value-over-time
 * curve. `horizon` should match how far the sequence conversion trusts the
 * replay (see replay.ts / validate-replay.ts's 3-minute default rationale).
 */
export function threatCurveFromReplay(path, opponentData, map, horizon = 240) {
    const replay = JSON.parse(fs.readFileSync(path, "utf8"));
    const actions = sequenceFromReplay(replay, opponentData, horizon);
    const result = simulate(opponentData, actions, map);
    // A real build order can outrun what this engine's greedy scheduler can
    // replay exactly (real Queen injects/micro this model doesn't capture —
    // see data-zerg.ts's header) -- use whatever DID complete rather than
    // discarding the whole curve; computeArrivalTimes runs even on failure.
    if (!result.ok) {
        console.warn(`  (note: ${path} only replays cleanly to ${fmt(result.finishTime)} -- ${result.error})`);
    }
    return {
        source: replay.source,
        opponentRace: replay.player.race,
        points: valueOverTime(result, opponentData, { allowPartial: true }),
    };
}
/** Step-function lookup: cumulative value the curve had reached by time t. */
export function valueAt(curve, t) {
    let v = 0;
    for (const p of curve.points) {
        if (p.t > t)
            break;
        v = p.value;
    }
    return v;
}
/**
 * Compare MY build's value-over-time curve against a real opponent's. We
 * sample at every timestamp MY build delivers a new unit (its own natural
 * step points) plus the opponent's own step points, so the comparison
 * doesn't miss a moment where the opponent jumps ahead between my arrivals.
 */
export function assessDanger(myResult, data, curve) {
    const mine = valueOverTime(myResult, data);
    const sampleTimes = [...new Set([...mine.map((p) => p.t), ...curve.points.map((p) => p.t)])].sort((a, b) => a - b);
    if (sampleTimes.length === 0) {
        // Neither curve ever delivered anything (e.g. a replay that deadlocks at
        // t=0 -- see opponent-cli.ts's discovery notes). There's no data to be
        // "behind" on, so 0 (neutral) is the honest answer, not -Infinity, which
        // would misleadingly read as "infinitely safe".
        return { worstDeficit: 0, worstDeficitTime: 0, myFinalValue: 0, opponentFinalValue: 0 };
    }
    const myValueAt = (t) => {
        let v = 0;
        for (const p of mine) {
            if (p.t > t)
                break;
            v = p.value;
        }
        return v;
    };
    let worstDeficit = -Infinity;
    let worstDeficitTime = 0;
    for (const t of sampleTimes) {
        const deficit = valueAt(curve, t) - myValueAt(t);
        if (deficit > worstDeficit) {
            worstDeficit = deficit;
            worstDeficitTime = t;
        }
    }
    const myFinalValue = mine.length ? mine[mine.length - 1].value : 0;
    const opponentFinalValue = curve.points.length ? curve.points[curve.points.length - 1].value : 0;
    return { worstDeficit, worstDeficitTime, myFinalValue, opponentFinalValue };
}
/**
 * A Scorer (see search.ts) that ranks builds by SAFETY against a real
 * opponent's recorded threat curve, not by raw arrival time: lower is
 * better, and the score is the worst deficit ever reached (can go negative,
 * meaning this build was always ahead of that real game's value curve).
 * Pass this to searchRawSequences()/optimize() in place of arrivalScorer to
 * search for the build that best keeps pace with a specific real opponent
 * opener, instead of the one that arrives fastest in isolation.
 */
export function dangerScorer(data, curve) {
    return (result, _target) => assessDanger(result, data, curve).worstDeficit;
}
export function describeCurve(curve) {
    const last = curve.points[curve.points.length - 1];
    return `${curve.source} (${curve.opponentRace}): ${curve.points.length} steps, final value ${last?.value.toFixed(1) ?? 0} by ${fmt(last?.t ?? 0)}`;
}
