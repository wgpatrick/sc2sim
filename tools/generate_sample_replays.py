#!/usr/bin/env python3
"""
Generate src/sample-replays.ts from replays/parsed/*.json -- embeds the
opening 300s of EVERY parsed replay (not just a hand-picked few) directly in
the browser bundle, so the "browse the replay corpus" panel (see index.html)
and the Opponent panel's picker both have the full real-game corpus to work
with, not just a UI-convenience subset. *.opponent.json files are skipped
(they're extra per-opponent data for a game already covered by its primary
file, not a distinct replay).

Labels are built entirely from each file's own JSON content (player name/
race, map), not by parsing the filename -- filenames aren't consistently
structured (some have a matchup code, some don't; "Harstem_Lockdown" has no
"_vs_" at all), but player/map fields are always present and authoritative.

Usage:
    .venv/bin/python tools/generate_sample_replays.py > src/sample-replays.ts
"""
import json
import re
import sys
from pathlib import Path

HORIZON = 300.0  # Faster-clock seconds -- same window as the previous hand-picked subset.
PARSED_DIR = Path(__file__).resolve().parent.parent / "replays" / "parsed"


def label_for(source: str, player_name: str, player_race: str, map_name: str) -> str:
    # Strip ".SC2Replay" and a trailing "_YYYY-MM-DD", then underscores -> spaces.
    stem = re.sub(r"\.SC2Replay$", "", source)
    stem = re.sub(r"_\d{4}-\d{2}-\d{2}$", "", stem)
    title = stem.replace("_", " ")
    return f"{title} -- {player_name} ({player_race}) on {map_name}"


def trim(events: list, horizon: float) -> list:
    return [e for e in events if e["t"] <= horizon]


def main() -> None:
    files = sorted(p for p in PARSED_DIR.glob("*.json") if ".opponent." not in p.name)
    entries = []
    races_seen = set()
    for path in files:
        raw = json.loads(path.read_text())
        player = raw["player"]
        races_seen.add(player["race"])
        entry = {
            "label": label_for(raw["source"], player["name"], player["race"], raw["map"]),
            "race": player["race"],
            "replay": {
                "source": raw["source"],
                "map": raw["map"],
                "length": raw["length"],
                "patch": raw["patch"],
                "player": player,
                "buildOrder": trim(raw["buildOrder"], HORIZON),
                "economy": trim(raw["economy"], HORIZON),
            },
        }
        entries.append(entry)

    race_union = " | ".join(f'"{r}"' for r in sorted(races_seen))
    print(f"""\
import type {{ ParsedReplay }} from "./replay.js";

/**
 * EVERY real replay in replays/parsed/*.json (excluding *.opponent.json
 * duplicates), opening {HORIZON:.0f}s trimmed and embedded directly (not
 * fetched) so the browser demo works from a plain file:// open with no
 * server and no CORS -- see index.html's "Opponent" panel and "Browse the
 * replay corpus" panel / README "Modeling the opponent". Full
 * replays/parsed/*.json (whole-game, much larger) remain the source of
 * truth for calibration/validation; this is a UI convenience trim, not a
 * subset -- every replay the project has collected is here. Regenerate with
 * `tools/generate_sample_replays.py` whenever the corpus grows. Includes
 * real MULE/InjectLarva "cast" events (see tools/parse_replay.py's
 * ABILITY_TO_ACTION) alongside the usual structure/unit build order.
 */
export interface SampleReplay {{
  label: string;
  race: {race_union};
  replay: ParsedReplay;
}}

export const SAMPLE_REPLAYS: SampleReplay[] = {json.dumps(entries, indent=2)};
""")


if __name__ == "__main__":
    main()
