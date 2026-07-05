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

TIME UNIT — read before touching any timestamp in this file:
    sc2reader's `event.second` is `event.frame / 16`: it assumes the FIXED
    16-loops/sec "Normal"-speed conversion no matter what speed the match was
    actually played at. Every 1v1 ladder replay (this repo's whole corpus) is
    played at "Faster" (1.4x), where the real, on-screen clock runs at
    frame/(16*1.4) = frame/22.4. sc2sim's engine (data.ts, validate.ts) works
    entirely in that Faster-clock convention -- the same one Blizzard's UI
    and published build orders use. So `event.second` is ~40% too large
    versus everything else in this repo. Verified empirically: a parsed
    Gateway start->done delta was 65s (the raw/Normal nominal build time);
    data.ts's Gateway buildTime is 46.4 (the Faster value); 65 / 46.4 = 1.40.
    `to_faster_seconds()` below converts every timestamp this tool emits
    into that same Faster-clock convention. Never use `event.second` or
    `replay.game_length.seconds` directly.
"""

import argparse
import json
import os
import sys

import sc2reader

# SC2's game-speed multipliers (Slower..Faster); ladder 1v1 is always Faster.
SPEED_MULTIPLIER = {"Slower": 0.6, "Slow": 0.8, "Normal": 1.0, "Fast": 1.2, "Faster": 1.4}


def to_faster_seconds(event, speed_mult: float) -> float:
    """The real, on-screen-clock time (Faster-seconds) for a sc2reader event,
    undoing its fixed-16fps `.second` assumption. See module docstring."""
    return event.frame / (16.0 * speed_mult)


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


def extract_build_order(replay, player, speed_mult):
    # sc2reader's Unit objects are mutated in place as parsing proceeds, so by
    # the time we iterate replay.events (after the whole replay is parsed),
    # `unit.name` reflects the unit's FINAL type — e.g. a Gateway that later
    # morphs into a WarpGate reports "WarpGate" even for its original
    # construction-done event decades earlier. We track each unit's type
    # ourselves in a forward pass so every event uses the type it actually
    # had at that point in history.
    events = []
    current_type = {}
    for e in replay.events:
        if e.name == "UnitInitEvent":
            unit_name = e.unit_type_name
            current_type[e.unit_id] = unit_name
            if e.control_pid != player.pid or is_noise(unit_name):
                continue
            events.append({"t": to_faster_seconds(e, speed_mult), "event": "start", "name": unit_name})
        elif e.name == "UnitDoneEvent":
            u = e.unit
            name = current_type.get(e.unit_id, u.name)
            if u.owner != player or is_noise(name):
                continue
            events.append({"t": to_faster_seconds(e, speed_mult), "event": "done", "name": name})
        elif e.name == "UnitBornEvent":
            u = e.unit
            name = current_type.setdefault(e.unit_id, u.name)
            if u.owner != player or is_noise(name):
                continue
            # Structures reach UnitBornEvent too (placed instantly); skip those,
            # they're already captured by Init/Done above.
            if u.is_building:
                continue
            events.append({"t": to_faster_seconds(e, speed_mult), "event": "born", "name": name})
        elif e.name == "UnitTypeChangeEvent":
            u = e.unit
            new_name = e.unit_type_name
            current_type[e.unit_id] = new_name
            if u.owner != player or is_noise(new_name):
                continue
            events.append({"t": to_faster_seconds(e, speed_mult), "event": "morph", "name": new_name})
        elif e.name == "UpgradeCompleteEvent":
            if e.pid != player.pid or is_noise(e.upgrade_type_name):
                continue
            events.append({"t": to_faster_seconds(e, speed_mult), "event": "upgrade", "name": e.upgrade_type_name})
    events.sort(key=lambda ev: ev["t"])
    return events


def extract_economy(replay, player, speed_mult):
    # NOTE: minerals_collection_rate / vespene_collection_rate are PER-MINUTE
    # (matching the in-game HUD), while sc2sim's EconomyConfig rates are
    # per-second. Divide by 60 before comparing against the simulator. These
    # are Blizzard's own real-time collection-rate stats (not derived from
    # event.second), so they are NOT affected by the frame/16fps issue above.
    snaps = []
    for e in replay.events:
        if e.name != "PlayerStatsEvent" or e.pid != player.pid:
            continue
        snaps.append(
            {
                "t": to_faster_seconds(e, speed_mult),
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
    speed_mult = SPEED_MULTIPLIER.get(str(replay.speed), 1.4)
    return {
        "source": os.path.basename(path),
        "map": replay.map_name,
        "length": replay.frames / (16.0 * speed_mult),
        "patch": replay.release_string,
        "speed": str(replay.speed),
        "player": {"name": player.name, "race": player.play_race, "result": player.result},
        "buildOrder": extract_build_order(replay, player, speed_mult),
        "economy": extract_economy(replay, player, speed_mult),
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
