/**
 * Combat resolution: a step up from unitValue()'s scalar ranking heuristic
 * (sqrt(dps * ehp), see engine.ts) toward actually answering "who wins this
 * fight" between two compositions -- but still NOT a real RTS combat
 * simulator. Explicitly out of scope, same as unitValue(): unit positioning
 * / range / kiting, splash damage, bonus damage vs armor types, upgrades,
 * spellcaster abilities (Guardian Shield, Force Field, EMP, ...), and
 * air/ground targeting restrictions (every unit can hit every unit here).
 * What IS modeled: both sides deal their full DPS simultaneously each tick,
 * splitting damage across the enemy by focusing the lowest-HP unit first
 * (the simplest targeting rule that isn't actively unrealistic -- "spread
 * damage evenly across all enemies" would be worse, since real players and
 * their units' auto-acquire both concentrate fire).
 *
 * Use this to sanity-check unitValue()'s ranking on a specific matchup, or
 * (see opponent-cli.ts) to ask "if these two armies clashed AT THIS MOMENT,
 * who actually wins" alongside the value-based worst-deficit metric.
 */
import type { EntityData, GameData, SimResult } from "./engine.js";

export interface CombatUnit {
  name: string;
  hp: number;
  dps: number;
}

export interface CombatResult {
  winner: "A" | "B" | "draw";
  ticks: number;
  survivorsA: CombatUnit[];
  survivorsB: CombatUnit[];
}

/** Turn an EntityData into a CombatUnit; shields are folded into hp as
 * extra effective HP (same simplification unitValue() already makes via
 * `ehp = hp + shields`) -- real shields regenerate out of combat and
 * absorb before armor bonuses apply, neither of which matters for a single
 * uninterrupted exchange like this. Non-combat units (dps undefined/0,
 * e.g. workers, Observers, Medivacs) are excluded by the caller, not here.
 * `researched` (a unit's StartedItem.researchedAtFinish) applies the same
 * upgrade multipliers unitValue() does -- see EntityData.upgrades. */
export function toCombatUnit(name: string, ent: EntityData, researched?: Iterable<string>): CombatUnit {
  let dps = ent.dps ?? 0;
  let hp = (ent.hp ?? 0) + (ent.shields ?? 0);
  if (researched && ent.upgrades?.length) {
    const have = researched instanceof Set ? researched : new Set(researched);
    for (const u of ent.upgrades) {
      if (!have.has(u.name)) continue;
      if (u.dpsMultiplier) dps *= u.dpsMultiplier;
      if (u.ehpMultiplier) hp *= u.ehpMultiplier;
    }
  }
  return { name, hp, dps };
}

function applyDamage(units: CombatUnit[], damage: number): void {
  units.sort((a, b) => a.hp - b.hp); // focus fire the weakest first
  let remaining = damage;
  for (const u of units) {
    if (remaining <= 0) break;
    const dealt = Math.min(u.hp, remaining);
    u.hp -= dealt;
    remaining -= dealt;
  }
}

/**
 * Resolve a straight fight between composition A and B. Deterministic (no
 * randomness) -- ties in simultaneous mutual annihilation are possible and
 * reported as "draw". `tickSeconds` controls resolution (smaller = closer
 * to continuous damage, larger = faster to compute); `maxTicks` bounds
 * runtime for degenerate cases (e.g. one side with 0 total dps).
 */
export function resolveCombat(a: CombatUnit[], b: CombatUnit[], opts: { tickSeconds?: number; maxTicks?: number } = {}): CombatResult {
  const tickSeconds = opts.tickSeconds ?? 0.5;
  const maxTicks = opts.maxTicks ?? 240;
  let unitsA = a.map((u) => ({ ...u }));
  let unitsB = b.map((u) => ({ ...u }));
  let ticks = 0;

  while (unitsA.length > 0 && unitsB.length > 0 && ticks < maxTicks) {
    const dpsA = unitsA.reduce((s, u) => s + u.dps, 0) * tickSeconds;
    const dpsB = unitsB.reduce((s, u) => s + u.dps, 0) * tickSeconds;
    if (dpsA <= 0 && dpsB <= 0) break; // neither side can deal damage -- stalemate
    applyDamage(unitsB, dpsA);
    applyDamage(unitsA, dpsB);
    unitsA = unitsA.filter((u) => u.hp > 0);
    unitsB = unitsB.filter((u) => u.hp > 0);
    ticks++;
  }

  const aAlive = unitsA.length > 0;
  const bAlive = unitsB.length > 0;
  const winner = aAlive && !bAlive ? "A" : bAlive && !aAlive ? "B" : "draw";
  return { winner, ticks, survivorsA: unitsA, survivorsB: unitsB };
}

/** Every combat unit (non-worker, dps > 0) that had ARRIVED by time t in a
 * completed sim run -- "if a fight broke out at this exact moment, who's
 * actually there". Pairs naturally with valueOverTime()'s same arrival-time
 * data (see opponent.ts), but returns full CombatUnit[] instead of a single
 * scalar so resolveCombat() can use it. */
export function compositionAt(result: SimResult, data: GameData, t: number): CombatUnit[] {
  const units: CombatUnit[] = [];
  for (const a of result.actions) {
    if (a.kind !== "unit" || a.arrivalTime === undefined || a.arrivalTime > t) continue;
    const ent = data.entities[a.name];
    if (!ent || ent.isWorker || !ent.dps) continue;
    units.push(toCombatUnit(a.name, ent, a.researchedAtFinish));
  }
  return units;
}

export function describeCombatResult(r: CombatResult): string {
  const w = r.winner === "draw" ? "draw (mutual annihilation or stalemate)" : `${r.winner} wins`;
  return `${w} after ${r.ticks} ticks -- survivors A: ${r.survivorsA.map((u) => u.name).join(", ") || "(none)"}; B: ${r.survivorsB.map((u) => u.name).join(", ") || "(none)"}`;
}
