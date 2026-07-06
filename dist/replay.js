/**
 * Turn a replay's real events into an ordered Action[] the engine can run,
 * for WHATEVER race's GameData is passed in (entities not in `data` are
 * skipped, so a Protoss-parsed replay run against TERRAN data would just
 * produce an empty/near-empty sequence — always pass the matching race).
 * We only know true DECISION times for structures (Init) and morphs; units
 * and upgrades only expose completion in tracker data, so we back out an
 * estimated decision time (completion - known buildTime) purely to
 * interleave the sequence realistically.
 */
export function sequenceFromReplay(replay, data, horizon) {
    const entities = data.entities;
    const timed = [];
    for (const e of replay.buildOrder) {
        if (e.t <= 0 || e.t > horizon)
            continue; // t=0 is the shared starting state
        if (e.event === "cast") {
            // Real MULE/Queen-inject casts (2026-07-05) -- "MULE"/"InjectLarva" are
            // action-string names, not entities, so they're not looked up in
            // `entities` below. Only emit if this GameData actually has the
            // mechanic (defensive: skips silently if replay/race are mismatched).
            if (e.name === "MULE" && data.economy.mule)
                timed.push({ action: "MULE", decisionTime: e.t });
            else if (e.name === "InjectLarva" && data.economy.inject)
                timed.push({ action: "InjectLarva", decisionTime: e.t });
            continue;
        }
        const ent = entities[e.name];
        if (!ent)
            continue; // entity this GameData doesn't model — skip
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
