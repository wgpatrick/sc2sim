#!/usr/bin/env python3
"""
Parse a .SC2Replay into JSON matching sc2sim's SimResult/Snapshot shape,
for comparing the simulator's predictions against a real game.

Usage:
    .venv/bin/python tools/parse_replay.py replays/foo.SC2Replay [--player NAME] [--race Protoss]
    .venv/bin/python tools/parse_replay.py replays/*.SC2Replay --out replays/parsed

Output: one JSON file per replay in replays/parsed/, containing:
    - map, length, patch, player {name, race, result}
    - buildOrder: [{t, event: "start"|"done"|"morph"|"upgrade", name}], real
      entities only (UI beacons / cosmetic sprays / reward dances excluded)
    - economy: [{t, minerals, gas, mineralRate, gasRate, supplyUsed, supplyCap,
      workers}] sampled from PlayerStatsEvent (~every 10s)
"""

import argparse
import json
import os
import sys

import sc2reader

NOISE_PREFIXES = (
    "Beacon",
    "RewardDance",
    "Spray",
    "XelNaga",
    "VespeneGeyser",
    "MineralField",
    "LabMineralField",
    "RichMineralField",
    "Rock",
    "Debris",
    "Cocoon",
    "Broodling",
)


def is_noise(name: str) -> bool:
    return any(name.startswith(p) for p in NOISE_PREFIXES)


def pick_player(replay, player_name, race):
    candidates = replay.players
    if player_name:
        candidates = [p for p in candidates if p.name == player_name]
    if race:
        candidates = [p for p in candidates if p.play_race == race]
    if not candidates:
        raise SystemExit(
            f"No matching player (name={player_name!r}, race={race!r}) in "
            f"{[(p.name, p.play_race) for p in replay.players]}"
        )
    if len(candidates) > 1:
        raise SystemExit(
            f"Ambiguous player match, pass --player: {[p.name for p in candidates]}"
        )
    return candidates[0]


def extract_build_order(replay, player):
    events = []
    for e in replay.events:
        if e.name == "UnitInitEvent":
            unit_name = e.unit_type_name
            if e.control_pid != player.pid or is_noise(unit_name):
                continue
            events.append({"t": e.second, "event": "start", "name": unit_name})
        elif e.name == "UnitDoneEvent":
            u = e.unit
            if u.owner != player or is_noise(u.name):
                continue
            events.append({"t": e.second, "event": "done", "name": u.name})
        elif e.name == "UnitBornEvent":
            u = e.unit
            if u.owner != player or is_noise(u.name):
                continue
            # Structures reach UnitBornEvent too (placed instantly); skip those,
            # they're already captured by Init/Done above.
            if u.is_building:
                continue
            events.append({"t": e.second, "event": "born", "name": u.name})
        elif e.name == "UnitTypeChangeEvent":
            u = e.unit
            if u.owner != player or is_noise(e.unit_type_name):
                continue
            events.append({"t": e.second, "event": "morph", "name": e.unit_type_name})
        elif e.name == "UpgradeCompleteEvent":
            if e.pid != player.pid or is_noise(e.upgrade_type_name):
                continue
            events.append({"t": e.second, "event": "upgrade", "name": e.upgrade_type_name})
    events.sort(key=lambda ev: ev["t"])
    return events


def extract_economy(replay, player):
    # NOTE: minerals_collection_rate / vespene_collection_rate are PER-MINUTE
    # (matching the in-game HUD), while sc2sim's EconomyConfig rates are
    # per-second. Divide by 60 before comparing against the simulator.
    snaps = []
    for e in replay.events:
        if e.name != "PlayerStatsEvent" or e.pid != player.pid:
            continue
        snaps.append(
            {
                "t": e.second,
                "minerals": e.minerals_current,
                "gas": e.vespene_current,
                "mineralRate": e.minerals_collection_rate,
                "gasRate": e.vespene_collection_rate,
                "supplyUsed": e.food_used,
                "supplyCap": e.food_made,
                "workers": e.workers_active_count,
            }
        )
    return snaps


def parse_one(path, player_name, race):
    replay = sc2reader.load_replay(path, load_level=4)
    player = pick_player(replay, player_name, race)
    return {
        "source": os.path.basename(path),
        "map": replay.map_name,
        "length": replay.game_length.seconds,
        "patch": replay.release_string,
        "player": {"name": player.name, "race": player.play_race, "result": player.result},
        "buildOrder": extract_build_order(replay, player),
        "economy": extract_economy(replay, player),
    }


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("replays", nargs="+", help=".SC2Replay file(s)")
    ap.add_argument("--player", help="Exact player name (needed if ambiguous)")
    ap.add_argument("--race", default="Protoss", help="Filter to this race (default: Protoss)")
    ap.add_argument("--out", default=None, help="Output directory (default: <replay dir>/parsed)")
    args = ap.parse_args()

    for path in args.replays:
        out_dir = args.out or os.path.join(os.path.dirname(path) or ".", "parsed")
        os.makedirs(out_dir, exist_ok=True)
        data = parse_one(path, args.player, args.race)
        out_path = os.path.join(
            out_dir, os.path.splitext(os.path.basename(path))[0] + ".json"
        )
        with open(out_path, "w") as f:
            json.dump(data, f, indent=2)
        print(f"{path} -> {out_path}  ({len(data['buildOrder'])} build events, "
              f"{len(data['economy'])} economy samples)")


if __name__ == "__main__":
    main()
