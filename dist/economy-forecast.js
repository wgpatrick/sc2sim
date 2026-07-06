/** Rough average of 5.0.16's two patch sizes (1600 large / 1100 small);
 * real bases mix both in a map-specific arrangement this project doesn't
 * track, so this is a single flat estimate, not a per-map figure. */
export const DEFAULT_MINERALS_PER_PATCH = 1350;
/**
 * Forecast mineral-patch depletion from a single snapshot, assuming the
 * CURRENT worker allocation and base count hold steady. Pass `snapshot` from
 * anywhere in a SimResult's `snapshots` array -- typically the final one,
 * to ask "at how this build ended up, how much longer could it mine before
 * running dry".
 */
export function forecastDepletion(snapshot, mineralPatchesPerBase, mineralsPerPatch = DEFAULT_MINERALS_PER_PATCH) {
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
export function describeDepletionForecast(f) {
    if (f.estimatedSecondsToDepletion == null) {
        return `${f.townhalls} townhall(s), ${f.totalCapacity} mineral capacity, not currently mining (rate 0)`;
    }
    const depletesAt = f.t + f.estimatedSecondsToDepletion;
    const fmtT = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;
    return (`${f.townhalls} townhall(s), ${f.totalCapacity} mineral capacity at ${f.mineralRate.toFixed(1)}/s -- ` +
        `would run dry around ${fmtT(depletesAt)} if nothing changes (${fmtT(f.estimatedSecondsToDepletion)} from now)`);
}
