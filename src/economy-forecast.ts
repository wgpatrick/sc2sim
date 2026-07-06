/**
 * Mineral-patch depletion: an INFORMATIONAL forecast, not an enforced game
 * mechanic. Real SC2 bases run dry (5.0.16 resized patches to 1600/1100
 * minerals for large/small -- see data.ts's header), but this engine's
 * economy model treats mining as one pool scaled by patch COUNT with
 * infinite capacity per patch (see State.mineralRate in engine.ts) --
 * correct enough for the sub-10-minute openers this project has focused on,
 * but now that expansions are a real search dimension (2026-07-05) and
 * searches can run to 40+ units, "this base would already be mined out"
 * becomes a real blind spot worth at least SURFACING.
 *
 * Deliberately NOT wired into simulate() itself: enforcing depletion
 * properly would mean deciding what happens to workers on a dry patch (real
 * players reassign them to a still-active base or new expansion), and this
 * engine has no worker-reallocation/AI decision layer at all -- every
 * action is explicit in the build order. Silently capping income without
 * a reallocation model would make already-mined-out builds look like
 * economic dead ends instead of "time to expand", which would be MORE
 * misleading than not modeling it. So: report it, don't enforce it.
 */
import type { Snapshot } from "./engine.js";

/** Rough average of 5.0.16's two patch sizes (1600 large / 1100 small);
 * real bases mix both in a map-specific arrangement this project doesn't
 * track, so this is a single flat estimate, not a per-map figure. */
export const DEFAULT_MINERALS_PER_PATCH = 1350;

export interface DepletionForecast {
  t: number;
  townhalls: number;
  totalCapacity: number;
  mineralRate: number;
  /** Seconds from t until total capacity is exhausted at the CURRENT rate,
   * continuing unchanged -- null if the rate is 0 (nothing being mined) or
   * capacity is already info-only-undefined (0 townhalls, shouldn't happen
   * past game start). This does not account for future base/patch count
   * changes, worker reassignment, or oversaturation tier shifts as workers
   * die/are added -- a snapshot-in-time estimate, not a full projection. */
  estimatedSecondsToDepletion: number | null;
}

/**
 * Forecast mineral-patch depletion from a single snapshot, assuming the
 * CURRENT worker allocation and base count hold steady. Pass `snapshot` from
 * anywhere in a SimResult's `snapshots` array -- typically the final one,
 * to ask "at how this build ended up, how much longer could it mine before
 * running dry".
 */
export function forecastDepletion(
  snapshot: Snapshot,
  mineralPatchesPerBase: number,
  mineralsPerPatch: number = DEFAULT_MINERALS_PER_PATCH,
): DepletionForecast {
  const totalCapacity = snapshot.townhalls * mineralPatchesPerBase * mineralsPerPatch;
  const estimatedSecondsToDepletion = snapshot.mineralRate > 0 ? totalCapacity / snapshot.mineralRate : null;
  return {
    t: snapshot.t,
    townhalls: snapshot.townhalls,
    totalCapacity,
    mineralRate: snapshot.mineralRate,
    estimatedSecondsToDepletion,
  };
}

export function describeDepletionForecast(f: DepletionForecast): string {
  if (f.estimatedSecondsToDepletion == null) {
    return `${f.townhalls} townhall(s), ${f.totalCapacity} mineral capacity, not currently mining (rate 0)`;
  }
  const depletesAt = f.t + f.estimatedSecondsToDepletion;
  const fmtT = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
  return (
    `${f.townhalls} townhall(s), ${f.totalCapacity} mineral capacity at ${f.mineralRate.toFixed(1)}/s -- ` +
    `would run dry around ${fmtT(depletesAt)} if nothing changes (${fmtT(f.estimatedSecondsToDepletion)} from now)`
  );
}
