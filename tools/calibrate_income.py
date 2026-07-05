#!/usr/bin/env python3
"""
Fit sc2sim's tiered income model (src/data.ts's mineralRateFirstWorker /
mineralRateSecondWorker / mineralRateThirdWorker / gasRatePerWorker) against
real income samples from parsed replays, via least squares -- rather than
mining_rate.py's flat per-worker average, which conflates saturation tiers.

Reproduces the engine's own tier split (src/engine.ts State.mineralRate):
given `patches = nexusCount * 8` and `w` mineral workers,
    t1 = min(w, patches)                      -- 1st worker/patch
    t2 = max(0, min(w - patches, patches))     -- 2nd worker/patch
    t3 = max(0, min(w - 2*patches, patches))   -- 3rd+ (oversaturation)
    mineralRate = t1*rateAB + t2*rateAB + t3*rateC   (rate1 == rate2, per data.ts)

Solves rateAB, rateC by ordinary least squares over every steady-state economy
sample across all replays passed in, using each sample's ACTUAL nexus count
(from the replay's own Nexus "done" events, not assumed to be 1).

Usage:
    .venv/bin/python tools/calibrate_income.py replays/parsed/*.json [--window 240]
"""
import argparse
import json


RAMP_SECONDS = 25


def nexus_count_at(build_order, t):
    n = 1  # start with the initial Nexus
    for e in build_order:
        if e["name"] == "Nexus" and e["event"] == "done" and e["t"] <= t:
            n += 1
    return n


def assimilator_done_times(build_order):
    return sorted(e["t"] for e in build_order if e["name"] == "Assimilator" and e["event"] == "done")


def collect_samples(paths, window):
    mineral_rows = []  # (t1, t2, t3, observed_mineral_rate)
    gas_rows = []  # (gas_workers, observed_gas_rate)
    for path in paths:
        replay = json.load(open(path))
        bo = replay["buildOrder"]
        done_times = assimilator_done_times(bo)
        nexus_done = sorted(e["t"] for e in bo if e["name"] == "Nexus" and e["event"] == "done")
        for e in replay["economy"]:
            t = e["t"]
            if t <= 0 or t > window:
                continue
            last_change = max([0] + [d for d in done_times if d <= t] + [d for d in nexus_done if d <= t])
            if (t - last_change) < RAMP_SECONDS:
                continue  # still ramping onto a just-finished Assimilator/Nexus
            assim = sum(1 for d in done_times if d <= t)
            nexus = 1 + sum(1 for d in nexus_done if d <= t)
            gas_workers = min(3 * assim, e["workers"])
            mineral_workers = e["workers"] - gas_workers
            patches = nexus * 8
            t1 = min(mineral_workers, patches)
            t2 = max(0, min(mineral_workers - patches, patches))
            t3 = max(0, min(mineral_workers - 2 * patches, patches))
            if t1 + t2 + t3 > 0:
                mineral_rows.append((t1, t2, t3, e["mineralRate"] / 60.0))
            if gas_workers > 0:
                gas_rows.append((gas_workers, e["gasRate"] / 60.0))
    return mineral_rows, gas_rows


def fit_2param(rows):
    """Least squares fit of rate = a*x1 + b*x2 (no intercept), 2 unknowns."""
    Sx1x1 = sum(x1 * x1 for x1, x2, y in rows)
    Sx1x2 = sum(x1 * x2 for x1, x2, y in rows)
    Sx2x2 = sum(x2 * x2 for x1, x2, y in rows)
    Sx1y = sum(x1 * y for x1, x2, y in rows)
    Sx2y = sum(x2 * y for x1, x2, y in rows)
    det = Sx1x1 * Sx2x2 - Sx1x2 * Sx1x2
    if abs(det) < 1e-9:
        return None
    a = (Sx1y * Sx2x2 - Sx2y * Sx1x2) / det
    b = (Sx1x1 * Sx2y - Sx1x2 * Sx1y) / det
    return a, b


def fit_1param(rows):
    Sxx = sum(x * x for x, y in rows)
    Sxy = sum(x * y for x, y in rows)
    return Sxy / Sxx if Sxx > 1e-9 else None


def r_squared(rows, predict):
    ys = [row[-1] for row in rows]
    mean_y = sum(ys) / len(ys)
    ss_tot = sum((y - mean_y) ** 2 for y in ys)
    ss_res = sum((row[-1] - predict(row)) ** 2 for row in rows)
    return 1 - ss_res / ss_tot if ss_tot > 1e-9 else None


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("replays", nargs="+")
    ap.add_argument("--window", type=int, default=240)
    args = ap.parse_args()

    mineral_rows, gas_rows = collect_samples(args.replays, args.window)
    print(f"{len(mineral_rows)} mineral samples, {len(gas_rows)} gas samples (steady-state, t<={args.window}s)\n")

    # Mineral: combine t1+t2 into one column (rate1==rate2, per data.ts / the treatise)
    m_rows_2col = [(t1 + t2, t3, y) for t1, t2, t3, y in mineral_rows]
    fit = fit_2param(m_rows_2col)
    if fit:
        rateAB, rateC = fit
        r2 = r_squared(m_rows_2col, lambda row: row[0] * rateAB + row[1] * rateC)
        print("MINERALS (tiered fit, rate1==rate2 by assumption):")
        print(f"  rateFirstWorker = rateSecondWorker = {rateAB:.4f}/s ({rateAB*60:.1f}/min)")
        print(f"  rateThirdWorker (oversaturation)   = {rateC:.4f}/s ({rateC*60:.1f}/min)")
        print(f"  R^2 = {r2:.3f}")
        print(f"  current data.ts: 0.9250/s (55.5/min) and 0.3300/s (19.8/min)\n")

    gas_1col = [(w, y) for w, y in gas_rows]
    g = fit_1param(gas_1col)
    if g:
        r2g = r_squared(gas_1col, lambda row: row[0] * g)
        print("GAS:")
        print(f"  gasRatePerWorker = {g:.4f}/s ({g*60:.1f}/min)")
        print(f"  R^2 = {r2g:.3f}")
        print(f"  current data.ts: 0.6300/s (37.8/min)")


if __name__ == "__main__":
    main()
