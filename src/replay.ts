/**
 * Shared types + conversion for tools/parse_replay.py's JSON output (a real
 * game's build order + economy samples, already in Faster-clock seconds —
 * see that script's module docstring for the timestamp convention). Used by
 * both validate-replay.ts (compare sim vs. real for the SAME race/player)
 * and opponent.ts (replay an OPPONENT's real build to get a threat curve).
 */
import type { Action, GameData } from "./engine.js";

export interface BuildEvent {
  t: number;
  event: "start" | "done" | "born" | "morph" | "upgrade";
  name: string;
}

export interface EconomySample {
  t: number;
  minerals: number;
  gas: number;
  mineralRate: number; // per MINUTE (sc2reader convention)
  gasRate: number; // per MINUTE
  supplyUsed: number;
  supplyCap: number;
  workers: number;
}

export interface ParsedReplay {
  source: string;
  map: string;
  length: number;
  patch: string;
  player: { name: string; race: string; result: string };
  buildOrder: BuildEvent[];
  economy: EconomySample[];
}

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
export function sequenceFromReplay(replay: ParsedReplay, data: GameData, horizon: number): Action[] {
  const entities = data.entities;
  const timed: { action: Action; decisionTime: number }[] = [];

  for (const e of replay.buildOrder) {
    if (e.t <= 0 || e.t > horizon) continue; // t=0 is the shared starting state
    const ent = entities[e.name];
    if (!ent) continue; // entity this GameData doesn't model — skip

    if (ent.morphFrom) {
      if (e.event !== "morph") continue;
      timed.push({ action: e.name, decisionTime: e.t });
    } else if (ent.isUpgrade) {
      if (e.event !== "upgrade") continue;
      timed.push({ action: e.name, decisionTime: Math.max(0, e.t - ent.buildTime) });
    } else if (ent.isStructure) {
      if (e.event !== "start") continue;
      timed.push({ action: e.name, decisionTime: e.t });
    } else {
      if (e.event !== "born") continue;
      timed.push({ action: e.name, decisionTime: Math.max(0, e.t - ent.buildTime) });
    }
  }

  timed.sort((a, b) => a.decisionTime - b.decisionTime);
  return timed.map((x) => x.action);
}
