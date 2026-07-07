/**
 * "Pros hit this around X" context for arrival-time results -- addresses the
 * Scouting Report's ladder-player finding that a raw time like "2:38" means
 * nothing without a reference point. Ranges below are DERIVED from the real
 * parsed replay corpus (replays/parsed/*.json) via
 * tools/calibrate_benchmarks.mjs, not hand-guessed -- same "don't quietly
 * present a guess as fact" standard as the fitted income model in data.ts.
 * Re-run that script and update these numbers if the replay corpus grows.
 */
import { fmt } from "./engine.js";

export interface BenchmarkRange {
  n: number;
  minSeconds: number;
  maxSeconds: number;
  avgSeconds: number;
}

export interface RaceBenchmarks {
  /** First SECOND townhall ("start" event) across the sample. */
  naturalExpansion: BenchmarkRange;
  /** First real combat unit ("born" event, dps > 0) across the sample. */
  firstArmyUnit: BenchmarkRange;
}

export const BENCHMARKS: Record<"Protoss" | "Terran" | "Zerg", RaceBenchmarks> = {
  Protoss: {
    naturalExpansion: { n: 6, minSeconds: 104, maxSeconds: 170, avgSeconds: 127 },
    firstArmyUnit: { n: 6, minSeconds: 160, maxSeconds: 181, avgSeconds: 167 },
  },
  Terran: {
    naturalExpansion: { n: 6, minSeconds: 130, maxSeconds: 260, avgSeconds: 163 },
    firstArmyUnit: { n: 7, minSeconds: 121, maxSeconds: 148, avgSeconds: 137 },
  },
  Zerg: {
    naturalExpansion: { n: 9, minSeconds: 42, maxSeconds: 112, avgSeconds: 87 },
    firstArmyUnit: { n: 9, minSeconds: 98, maxSeconds: 165, avgSeconds: 142 },
  },
};

function describeRange(label: string, r: BenchmarkRange): string {
  return `${label} ${fmt(r.minSeconds)}-${fmt(r.maxSeconds)} (avg ${fmt(r.avgSeconds)}, n=${r.n})`;
}

/** A short "pros hit this around X" caption for a given race + arrival time,
 * picking whichever milestone the arrival time is closer to so a 4-Zealot
 * rush isn't compared against a macro expansion benchmark or vice versa. */
export function benchmarkCaption(race: "Protoss" | "Terran" | "Zerg", arrivalSeconds: number): string {
  const b = BENCHMARKS[race];
  const nearestIsExpansion =
    Math.abs(arrivalSeconds - b.naturalExpansion.avgSeconds) <= Math.abs(arrivalSeconds - b.firstArmyUnit.avgSeconds);
  const r = nearestIsExpansion ? b.naturalExpansion : b.firstArmyUnit;
  const label = nearestIsExpansion ? "pros' natural expansion:" : "pros' first army unit:";
  return describeRange(label, r);
}
