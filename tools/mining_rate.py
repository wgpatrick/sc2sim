#!/usr/bin/env python3
"""
Estimate empirical mineral/gas income PER WORKER from parsed replays, to
check against sc2sim's calibrated economy constants (src/data.ts).

Ground truth for mineral rate is cleanest before the first Assimilator
completes: every worker is on minerals, no split-estimate needed. After
that, gas workers are estimated as min(3 * assimilators_done, workers) —
the same assumption sc2sim's own engine makes — so per-worker rates past
that point carry that assumption's error too.

Usage:
    .venv/bin/python tools/mining_rate.py replays/parsed/*.json [--window 180]
"""
import argparse
import json


RAMP_SECONDS = 25  # time for probes to walk onto a just-finished Assimilator / start of game


def assimilator_done_times(build_order):
    return sorted(e["t"] for e in build_order if e["name"] == "Assimilator" and e["event"] == "done")


def analyze(replay, window):
    build_order = replay["buildOrder"]
    done_times = assimilator_done_times(build_order)
    rows = []
    for e in replay["economy"]:
        if e["t"] <= 0 or e["t"] > window:
            continue
        assim = sum(1 for d in done_times if d <= e["t"])
        gas_workers = min(3 * assim, e["workers"])
        mineral_workers = e["workers"] - gas_workers
        # A rate sample is only "steady state" once RAMP_SECONDS have passed since
        # the LAST change to worker allocation (game start, or an Assimilator
        # finishing) — otherwise probes are still walking into position and the
        # rate understates true per-worker throughput.
        last_change = max([0] + [d for d in done_times if d <= e["t"]])
        steady = (e["t"] - last_change) >= RAMP_SECONDS
        rows.append(
            {
                "t": e["t"],
                "workers": e["workers"],
                "assimilators": assim,
                "mineralWorkers": mineral_workers,
                "gasWorkers": gas_workers,
                "mineralRate": e["mineralRate"],
                "gasRate": e["gasRate"],
                "mineralPerWorker": e["mineralRate"] / mineral_workers if mineral_workers > 0 else None,
                "gasPerWorker": e["gasRate"] / gas_workers if gas_workers > 0 else None,
                "steady": steady,
            }
        )
    return rows


def stats(xs):
    if not xs:
        return None
    xs = sorted(xs)
    n = len(xs)
    return sum(xs) / n, xs[n // 2], xs[0], xs[-1], n


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("replays", nargs="+")
    ap.add_argument("--window", type=int, default=180, help="seconds of game time to analyze (default 180)")
    args = ap.parse_args()

    gas_free_mineral_rates = []
    all_mineral_rates = []
    all_gas_rates = []

    for path in args.replays:
        replay = json.load(open(path))
        rows = analyze(replay, args.window)
        print(f"\n{replay['source']}  ({replay['player']['name']})")
        print("  t      workers  assim  minWkrs  gasWkrs  min/min  min/wkr/min  gas/min  gas/wkr/min")
        print("  " + "-" * 78)
        for r in rows:
            mpw = f"{r['mineralPerWorker']:.1f}" if r["mineralPerWorker"] is not None else "   -"
            gpw = f"{r['gasPerWorker']:.1f}" if r["gasPerWorker"] is not None else "   -"
            mark = " " if r["steady"] else "*"  # * = within ramp window, excluded from stats
            print(
                f" {mark}{r['t']:>4}s  {r['workers']:>7}  {r['assimilators']:>5}  {r['mineralWorkers']:>7}  "
                f"{r['gasWorkers']:>7}  {r['mineralRate']:>7.0f}  {mpw:>11}  {r['gasRate']:>7.0f}  {gpw:>11}"
            )
            if not r["steady"]:
                continue
            if r["mineralPerWorker"] is not None:
                all_mineral_rates.append(r["mineralPerWorker"])
                if r["assimilators"] == 0:
                    gas_free_mineral_rates.append(r["mineralPerWorker"])
            if r["gasPerWorker"] is not None:
                all_gas_rates.append(r["gasPerWorker"])
    print("\n  (* = within the post-change ramp-up window, excluded from stats below)")

    print("\n" + "=" * 78)
    print("EMPIRICAL PER-WORKER INCOME (minerals or gas per worker per minute)")
    print("=" * 78)
    for label, xs in [
        ("mineral/worker/min — GAS-FREE window (no split assumption, most reliable)", gas_free_mineral_rates),
        ("mineral/worker/min — full window (assumes 3 workers/assimilator on gas)", all_mineral_rates),
        ("gas/worker/min — full window (assumes 3 workers/assimilator on gas)", all_gas_rates),
    ]:
        s = stats(xs)
        if s:
            mean, median, lo, hi, n = s
            print(f"\n  {label}")
            print(f"    mean {mean:.1f}   median {median:.1f}   range [{lo:.1f}, {hi:.1f}]   n={n}")

    print("\n  sc2sim's src/data.ts currently assumes:")
    print(f"    mineralRateFirstWorker / mineralRateSecondWorker: 0.925/s = {0.925 * 60:.1f}/min")
    print(f"    mineralRateThirdWorker (oversaturation):          0.330/s = {0.33 * 60:.1f}/min")
    print(f"    gasRatePerWorker:                                 0.630/s = {0.63 * 60:.1f}/min")


if __name__ == "__main__":
    main()
