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
import type { Composition, GameData, MapConfig, SimResult } from "./engine.js";
import { simulate, valueOverTime, fmt, type ValuePoint } from "./engine.js";
import type { Scorer } from "./search.js";
import { sequenceFromReplay, type ParsedReplay } from "./replay.js";

export interface ThreatCurve {
  /** Which real game this was derived from, for provenance/logging. */
  source: string;
  opponentRace: string;
  /** Cumulative fighting value delivered at time t, straight from a REAL
   * recorded build order replayed through that race's own simulate(). */
  points: ValuePoint[];
  /** The underlying sim result, kept so callers can derive a full
   * composition-at-time-t (see combat.ts's compositionAt) rather than just
   * the scalar value points -- optional so synthetic/averaged curves (see
   * asThreatCurve()) don't need to fabricate one. */
  opponentResult?: SimResult;
}

/**
 * Replay a real opponent's recorded build order (from tools/parse_replay.py)
 * through their own race's simulate(), and return their value-over-time
 * curve. `horizon` should match how far the sequence conversion trusts the
 * replay (see replay.ts / validate-replay.ts's 3-minute default rationale).
 *
 * Takes an already-parsed ParsedReplay object rather than a file path --
 * this module does no file I/O itself (no `fs` import), so it works
 * unchanged in a browser (see index.html's "Opponent" panel, which embeds
 * replay JSON directly) as well as Node CLIs (which read the file
 * themselves, e.g. opponent-cli.ts's `JSON.parse(fs.readFileSync(path))`).
 */
export function threatCurveFromReplay(
  replay: ParsedReplay,
  opponentData: GameData,
  map: MapConfig,
  horizon = 240,
): ThreatCurve {
  const actions = sequenceFromReplay(replay, opponentData, horizon);
  const result = simulate(opponentData, actions, map);
  // A real build order can outrun what this engine's greedy scheduler can
  // replay exactly (real Queen injects/micro this model doesn't capture —
  // see data-zerg.ts's header) -- use whatever DID complete rather than
  // discarding the whole curve; computeArrivalTimes runs even on failure.
  if (!result.ok) {
    console.warn(`  (note: ${replay.source} only replays cleanly to ${fmt(result.finishTime)} -- ${result.error})`);
  }
  return {
    source: replay.source,
    opponentRace: replay.player.race,
    points: valueOverTime(result, opponentData, { allowPartial: true }),
    opponentResult: result,
  };
}

/** Step-function lookup: cumulative value the curve had reached by time t. */
export function valueAt(curve: ThreatCurve, t: number): number {
  let v = 0;
  for (const p of curve.points) {
    if (p.t > t) break;
    v = p.value;
  }
  return v;
}

export interface DangerAssessment {
  /** The largest (opponent value - my value) at any of MY sampled timestamps
   * — the worst moment of the game to be caught, by this measure. <=0 means
   * this build was never behind the real opponent's recorded value curve. */
  worstDeficit: number;
  worstDeficitTime: number;
  /** My own cumulative value at the end of the horizon, for context. */
  myFinalValue: number;
  opponentFinalValue: number;
}

/**
 * Compare MY build's value-over-time curve against a real opponent's. We
 * sample at every timestamp MY build delivers a new unit (its own natural
 * step points) plus the opponent's own step points, so the comparison
 * doesn't miss a moment where the opponent jumps ahead between my arrivals.
 */
export function assessDanger(myResult: SimResult, data: GameData, curve: ThreatCurve): DangerAssessment {
  const mine = valueOverTime(myResult, data);
  const sampleTimes = [...new Set([...mine.map((p) => p.t), ...curve.points.map((p) => p.t)])].sort((a, b) => a - b);

  if (sampleTimes.length === 0) {
    // Neither curve ever delivered anything (e.g. a replay that deadlocks at
    // t=0 -- see opponent-cli.ts's discovery notes). There's no data to be
    // "behind" on, so 0 (neutral) is the honest answer, not -Infinity, which
    // would misleadingly read as "infinitely safe".
    return { worstDeficit: 0, worstDeficitTime: 0, myFinalValue: 0, opponentFinalValue: 0 };
  }

  const myValueAt = (t: number): number => {
    let v = 0;
    for (const p of mine) {
      if (p.t > t) break;
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
export function dangerScorer(data: GameData, curve: ThreatCurve): Scorer {
  return (result: SimResult, _target: Composition) => assessDanger(result, data, curve).worstDeficit;
}

export function describeCurve(curve: ThreatCurve): string {
  const last = curve.points[curve.points.length - 1];
  return `${curve.source} (${curve.opponentRace}): ${curve.points.length} steps, final value ${last?.value.toFixed(1) ?? 0} by ${fmt(last?.t ?? 0)}`;
}

export interface AveragedCurvePoint {
  t: number;
  mean: number;
  min: number;
  max: number;
}

export interface AveragedThreatCurve {
  /** e.g. "12 Zerg replays" -- for provenance/logging, same role as ThreatCurve.source. */
  label: string;
  opponentRace: string;
  n: number;
  points: AveragedCurvePoint[];
}

/**
 * Aggregate multiple same-matchup replays' threat curves into one averaged
 * curve with a min/max band, sampled on a common time grid -- a first step
 * toward "the statistical archetype of a Zerg opener" instead of "whichever
 * specific replay happens to be in this repo" (see README "Modeling the
 * opponent", known limitation). Each input curve is resampled via valueAt()
 * (a step-function lookup), so curves of different lengths/step counts
 * combine cleanly; `maxT` bounds how far the grid extends regardless of
 * how long any individual replay's curve runs.
 */
export function averageThreatCurve(curves: ThreatCurve[], opponentRace: string, opts: { gridStep?: number; maxT?: number } = {}): AveragedThreatCurve {
  const gridStep = opts.gridStep ?? 10;
  const maxT = opts.maxT ?? 300;
  const points: AveragedCurvePoint[] = [];
  for (let t = 0; t <= maxT; t += gridStep) {
    const values = curves.map((c) => valueAt(c, t));
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    points.push({ t, mean, min: Math.min(...values), max: Math.max(...values) });
  }
  return { label: `${curves.length} ${opponentRace} replays`, opponentRace, n: curves.length, points };
}

/** Adapts an AveragedThreatCurve into a plain ThreatCurve (mean as the
 * value series) so it drops straight into assessDanger()/dangerScorer()
 * unchanged -- "score against the average opener", not one specific game. */
export function asThreatCurve(avg: AveragedThreatCurve): ThreatCurve {
  return {
    source: avg.label,
    opponentRace: avg.opponentRace,
    points: avg.points.map((p) => ({ t: p.t, value: p.mean, name: "average" })),
  };
}
