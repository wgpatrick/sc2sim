#!/usr/bin/env node
/**
 * Derive "pros hit this around X" benchmark context (src/benchmarks.ts) from
 * the real parsed replay corpus, rather than hand-guessing round numbers --
 * same "don't quietly present a guess as fact" ethos as
 * tools/calibrate_income.py's fitted mineral rates.
 *
 * For each race, computes two milestones across every replays/parsed/*.json
 * file for that race (excluding the *.opponent.json duplicates):
 *   - natural: t of the first SECOND townhall "start" event (the natural
 *     expansion decision), from the replay's own build order.
 *   - firstArmy: t of the first "born" event whose unit is a real combat
 *     entity for that race (dps > 0 in src/data*.ts) -- deliberately excludes
 *     workers, Overlords/eggs/cocoons, and support casters (Queen) by going
 *     through the actual entity table rather than a hand-maintained name list.
 *
 * Usage: node tools/calibrate_benchmarks.mjs   (run after `npm run build`)
 * Paste the printed numbers into src/benchmarks.ts by hand -- this script is
 * a one-off derivation aid, not something the app runs at request time.
 */
import fs from "fs";
import path from "path";
import { PROTOSS } from "../dist/data.js";
import { TERRAN } from "../dist/data-terran.js";
import { ZERG } from "../dist/data-zerg.js";

const DATA = { Protoss: PROTOSS, Terran: TERRAN, Zerg: ZERG };
const TOWNHALLS = { Protoss: ["Nexus"], Terran: ["CommandCenter"], Zerg: ["Hatchery"] };

const dir = "replays/parsed";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json") && !f.includes(".opponent."));

const byRace = {};

for (const f of files) {
  const raw = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  const race = raw.player?.race;
  if (!race || !DATA[race]) continue;
  const armyNames = new Set(
    Object.values(DATA[race].entities).filter((e) => (e.dps ?? 0) > 0).map((e) => e.name),
  );
  (byRace[race] ??= { naturalTimes: [], firstArmyTimes: [], n: 0 });
  byRace[race].n++;

  const bo = raw.buildOrder ?? [];
  const naturalStart = bo.find((e) => e.event === "start" && TOWNHALLS[race].includes(e.name));
  if (naturalStart) byRace[race].naturalTimes.push(naturalStart.t);

  const firstArmy = bo.find((e) => e.event === "born" && armyNames.has(e.name));
  if (firstArmy) byRace[race].firstArmyTimes.push(firstArmy.t);
}

function stats(arr) {
  if (!arr.length) return null;
  const min = Math.min(...arr), max = Math.max(...arr);
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return { n: arr.length, min: Math.round(min), max: Math.round(max), avg: Math.round(avg) };
}

for (const [race, d] of Object.entries(byRace)) {
  console.log(`${race} (${d.n} replays):`);
  console.log("  natural expansion:", stats(d.naturalTimes));
  console.log("  first army unit:  ", stats(d.firstArmyTimes));
}
