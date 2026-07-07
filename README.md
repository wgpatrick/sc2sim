# sc2sim — StarCraft II build-order simulator + optimizer

An event-driven economy simulator for StarCraft II build orders, written in
TypeScript so it can run both in Node and directly in the browser on this site.
**Protoss** (patch 5.0.16, the 8-worker-start economy) is the fully-searchable
race; **Terran and Zerg** now have real, replay-grounded data too (see
"Modeling the opponent"), enough to replay their actual recorded games and
score a Protoss build's safety against them. The browser UI lets you simulate
a build order in any of the three races, run either search (the exhaustive
template optimizer or the raw-sequence GA) on Protoss, and compare your build
live against a real recorded opponent's value curve — no server, no signup,
runs entirely client-side.

> **Goal:** a fast, deterministic simulator you can call millions of times inside
> a search loop, so an optimizer can *discover* build orders instead of us
> hand-writing them — and increasingly, discover them against a specific real
> opponent, not just in isolation.

## What it does

Given a build order like:

```
Probe
chrono:Probe
Probe
Pylon
Gateway
Assimilator
CyberneticsCore
Stalker
```

it computes **when** each action happens, respecting minerals, gas, supply,
worker saturation, production-building availability, tech prerequisites, and
Chrono Boost / Nexus energy. `chrono:X` casts Chrono Boost on the in-production `X`.

## Run it

```bash
npm install        # just TypeScript
npm run demo       # compile + run the sample builds in Node
npm run optimize   # exhaustive template search — fastest army-at-the-enemy
npm run search     # raw-sequence GA — beats the template, see below
npm run frontier   # Pareto frontier of (time, value) across many compositions
npm run opponent   # score builds against a REAL recorded Terran/Zerg opponent
npm run validate   # compare vs. published pro builds
npm run diff replays/parsed/*.json   # compare vs. real replays directly
npm test           # unit tests for engine mechanics (Node's built-in test runner)
```

Open the interactive version in a browser (after `npm run build`, which emits
`dist/`): serve the folder and visit `index.html`. On this site it's published at
`/sc2sim/`. It opens on a **"Best builds" panel** (2026-07-06) that needs no
configuration — it runs the raw-sequence GA against a curated set of common
targets and shows the fastest ones found, split into 1-base rushes and macro
targets (the latter chosen to straddle the point where taking an expansion
starts paying off — watch the "1 base"/"2 bases" badge flip around 40 units).
Click "Load into simulator" on any card to inspect the full build order.
Everything below that (Simulator, Optimizer, Value frontier, Opponent) is
still there for hand-editing a build or searching a specific target yourself.

## Why no full game engine?

Build-order optimization needs **one player, no opponent, no combat, no map** —
just the economy and tech tree. That abstraction (from Churchill & Buro's
*Build Order Optimization in StarCraft*, and the BOSS project) is what makes the
sim small and fast enough to search over.

## Architecture

| File | Responsibility |
|------|----------------|
| `src/engine.ts` | Race-agnostic **event-driven simulator** + spatial layer (travel/arrival) + `compositionArrivalTime`. Fast-forwards the clock; never ticks per-frame. Handles Protoss/Terran/Zerg production models generically (townhall/gas-structure config, Zerg's larva pool, and a generic per-caster energy pool shared by Chrono/MULE/Queen-inject — see "Modeling the opponent"). |
| `src/data.ts`   | **Protoss** numbers — costs, build times, supply, move speeds, tech requirements, income + Chrono constants. Swap per patch; the engine never changes. |
| `src/data-terran.ts` · `src/data-zerg.ts` | **Terran / Zerg** numbers — real enough to both replay their recorded games AND be searched/optimized directly (`optimizer.ts`/`search.ts` are race-agnostic as of 2026-07-05). Includes MULE/Orbital Command, Queen inject, Tech Lab-gated units (Marauder/Siege Tank/Banshee), and Lair-tier units (Hydralisk/Mutalisk). |
| `src/maps.ts`   | **Distance presets** (travel seconds home→enemy, proxy→enemy, probe→proxy). |
| `src/optimizer.ts` | **The template optimizer**: given a target army, exhaustively search a parameterized build template for the one that ARRIVES at the enemy fastest. Race-agnostic (derives worker/supply/gas names from `data`, gates Chrono/Warp-Gate steps behind the race actually having them). |
| `src/search.ts` | **The raw-sequence GA**: searches Action[] sequences directly (not the template), seeded from the template's own answer. Finds orderings/chrono placements the template can't express; also the only place a natural expansion (2nd townhall) is a discoverable action. |
| `src/opponent.ts` | **Opponent modeling**: replay a real Terran/Zerg opponent's recorded build order through their own race data to get a value-over-time threat curve, score Protoss builds by whether they ever fall behind it, or aggregate several same-race replays into an averaged "statistical archetype" curve (`averageThreatCurve`). Does no file I/O itself — works unchanged in a browser. |
| `src/combat.ts` | **Combat resolution**: a step up from the value heuristic — `resolveCombat()` actually resolves who wins a straight fight between two compositions (simultaneous DPS exchange, focus-fire-weakest), instead of just comparing a scalar. Still not a real RTS combat sim (no positioning/range/splash/armor/upgrades). |
| `src/economy-forecast.ts` | **Mineral-patch depletion forecast** — informational only (not enforced in `simulate()`): given a snapshot, estimates how much longer the current worker/base allocation can mine before hitting an assumed per-base capacity. |
| `src/replay.ts` | Shared `ParsedReplay` type + real-build-order → `Action[]` conversion (including real MULE/Queen-inject ability casts), used by both the diff harness and opponent modeling. |
| `src/sample-replays.ts` | 3 real replays' opening 5 minutes, trimmed and embedded directly (not fetched) so the browser's Opponent panel works from a plain `file://` open, no server needed. |
| `src/builds.ts` | Sample hand-written build orders used to exercise the sim. |
| `src/cli.ts` · `src/optimize-cli.ts` · `src/search-cli.ts` · `src/opponent-cli.ts` | Node runners (`npm run demo` / `optimize` / `search` / `opponent`). |
| `src/*.test.ts` | Unit tests (`npm test`, Node's built-in test runner) covering engine mechanics that are cheap to pin but expensive to re-discover by hand — worker-count growth, `consumesBuilder`, MULE/inject timing, combat resolution, depletion forecasting. |
| `tools/parse_replay.py` · `tools/calibrate_income.py` | Replay-grounding pipeline: `.SC2Replay` → JSON (real build order + economy samples + real MULE/Queen-inject ability casts, both players) → fitted income constants. (`tools/mining_rate.py` is a superseded, simpler predecessor kept as an independent cross-check.) |
| `index.html`    | Self-contained browser UI (timeline, chart, optimizer, GA search, value frontier, opponent comparison) importing `dist/` directly — no bundler. |

The simulation loop, per action: compute the earliest time all preconditions
(money, supply, a free producer, met prerequisites) are satisfied → jump the
clock there, accruing income over the interval → start the action, occupying its
producer and scheduling its completion.

## Data accuracy

- **From SC2's own game data (patch 5.0.16):** all unit/structure costs, supply,
  and build times in `data.ts` are taken from the `data.json` generated by
  [BurnySc2/sc2-techtree](https://github.com/BurnySc2/sc2-techtree) — the same
  file BuRny's planner uses. That snapshot is confirmed current to 5.0.16 (it
  already carries Nexus supply = 13). Build times are stored in **Faster-clock
  seconds** (raw game data ÷ 1.4; verified against Probe 12, Gateway 46, Nexus 71).
- **Confirmed 5.0.16 overrides:** 8-worker start, Nexus supply 13, Chrono Boost
  (50 energy, +50% for 20s, Nexus 50→200 energy at 0.5625/s).
- **Warp Gate (final 5.0.16, after hotfixes):** research at the **Cybernetics
  Core** (the PTR's move-to-Gateway was reverted), 50/50 over ~100s; Gateway→Warp
  Gate morph ~7s; warp-in ~4s at any powered Pylon (the old 11.4s proxy penalty
  is gone); per-unit warp cooldown ≈ build time − 7s. Adept build time is the
  hotfix's 33s. Warp cooldowns/warp-in time are best-effort — verify per patch.
- **Mineral + gas income — now fit directly from real replay income data.**
  `tools/calibrate_income.py` does an ordinary-least-squares fit of the
  engine's tiered mineral model (rate1==rate2, distinct oversaturation rate3)
  and a single-tier gas rate against every steady-state `PlayerStatsEvent`
  sample. The corpus was **expanded 2026-07-05** with 9 new post-5.0.16
  replays (13 total `.SC2Replay` games, 26 parsed player-sides) to ground all
  three races, not just Protoss:
  - **Protoss**: 5 replays, 103 mineral / 58 gas samples. R² = 0.917 / 0.900.
    Mineral rate **0.871/s**, oversaturation rate **0.61/s** (~70% of
    tier-1/2 — oversaturated workers mine much closer to full rate than
    assumed), gas rate **0.870/s** (was ~38% too low — gas and mineral income
    per worker turn out to be nearly on par). Essentially unchanged from the
    original 3-replay fit, a good sign the estimate isn't a fluke.
  - **Terran** (new race, `tools/calibrate_income.py --townhall CommandCenter
    --gas Refinery`): 8 replays, 191 mineral / 127 gas samples. R² = 0.528 /
    0.471 — markedly weaker than Protoss/Zerg despite SCV mining being
    mechanically identical; the leading suspect is Orbital Command/MULEs
    injecting mineral bursts uncorrelated with worker count, which this
    engine doesn't model (see `src/data-terran.ts`'s header). Tier-1/2 rate
    (0.980/s) adopted directly; the raw tier-3 fit (0.132/s, physically
    implausible next to Protoss's/Zerg's oversaturation ratios) was rejected
    and replaced with a derived value using Protoss's measured ratio.
  - **Zerg** (new race, `--townhall Hatchery --gas Extractor`): 12 replays,
    285 mineral samples, R² = 0.878 — on par with Protoss, confirming
    Drone/Probe mining is close to mechanically identical (0.936/s vs
    Protoss's 0.871/s). The gas fit was degenerate (R²=0.000, mostly
    extractor-trick/late-gas openings leaving too few steady-state samples)
    and was **not adopted** — Zerg still uses the Protoss-derived gas rate as
    a placeholder.
  `probeBuildOccupancy` remains an uncalibrated placeholder — hard to isolate
  from bank data alone.
- **Found and fixed a replay-timestamp unit bug along the way.**
  `tools/parse_replay.py` was using sc2reader's `event.second` (frame ÷ 16, a
  fixed "Normal speed" assumption) directly, but every replay here is played
  at **Faster** (1.4×) — the same clock `data.ts` already uses everywhere
  else. That made every timestamp in `replays/parsed/*.json` ~40% too large
  (a parsed Gateway start→done was 65s, the raw/Normal nominal value, not the
  46.4s Faster value it should be). Fixed via `to_faster_seconds()`; every
  fixture was regenerated. This was silently inflating the diff harness's
  reported error (Gateway sim 1:47 vs "real" 2:32) in a way that looked like
  an income-model problem but wasn't.
- **Found and fixed a worker-count bug affecting every non-Protoss sim.**
  `engine.ts`'s tracker for "how many workers are available to mine" only
  ever incremented on a completed unit literally named `"Probe"` -- so
  trained SCVs and Drones never grew Terran/Zerg's available-worker count
  past the starting 8 in ANY simulation, including everything built earlier
  this session (income calibration itself was unaffected, since that's fit
  directly against replay-recorded worker counts, not the engine's own
  tracking -- but every Terran/Zerg *simulated* build was quietly running on
  a frozen 8-worker economy forever). Fixed by checking `EntityData.isWorker`
  instead of the hardcoded name (2026-07-05). Also fixed: every Zerg
  structure now correctly consumes its builder Drone permanently (morphing
  a Drone into a building removes it from the mining pool in the real
  game; the engine previously treated every race's builder as surviving,
  true for Probe/SCV but not Zerg). Both fixes changed the diff harness's
  bank MAE (see below) -- not a regression, a more honestly-grounded number.
- **Found and fixed two more bugs while writing the first unit tests**
  (2026-07-05): Orbital Command's entity definition had no `supplyProvided`,
  so morphing a CommandCenter into one silently DROPPED 13 supply cap
  instead of carrying it over (an Orbital is still a townhall). And SCV's
  producer was hardcoded to `"CommandCenter"` only, so once a base's CC
  morphed into an Orbital, that base could NEVER train another SCV again in
  simulation — a real regression for any Terran build that techs Orbital and
  keeps macroing, which is nearly all of them. Fixed via a new
  `EntityData.alsoProducer` field (a unit can be trained from either
  producer type). Both caught by `npm test` before either one shipped
  unnoticed, which is exactly the point of having that test layer now.

An optimizer is adversarial against wrong constants: if the income model is off,
the "optimal" build will be one that abuses the error. So validation comes before
optimization. The costs/build-times, and now the income rates too, are grounded
in real recorded games, not book values or a fit to just 1-2 published builds.

To refresh the data after a future patch, regenerate `data.json` from
sc2-techtree and re-derive the values in `data.ts` (÷ 1.4 for the Faster clock),
then re-run `tools/calibrate_income.py` against fresh replays of that patch.

## Validation

**Two independent checks, both against real data:**

- `npm run validate` replays 2 hand-transcribed published pro builds (Harstem's
  gasless PvT and PvZ Stargate builds, [Spawning Tool #203088](https://lotv.spawningtool.com/build/203088/)/[#203087](https://lotv.spawningtool.com/build/203087/))
  and compares the sim's timing for each milestone to the published game-time:
  **8.8s mean error over 17 milestones, 2 builds.** (This moved from an
  earlier 5.0s after recalibrating income against the broader replay corpus
  instead of fitting directly to these same 2 builds — see the data-accuracy
  note above; less overfit-prone, at the cost of a slightly looser fit to
  these two specific games.)
- `npm run diff replays/parsed/*.json` replays the REAL build order and
  timings straight out of parsed `.SC2Replay` files (no manual transcription
  to get wrong) and compares the sim's predicted completions AND mineral/gas
  bank against what actually happened, now **race-aware** (`validate-replay.ts`
  picks Protoss/Terran/Zerg data per replay's own player race, added
  2026-07-05 alongside the corpus expansion — previously hardcoded to
  Protoss, which would have silently mis-simulated the new Terran/Zerg-side
  files): **85 minerals / 58 gas mean bank error across all 26 parsed replay
  sides** (Protoss, Terran, and Zerg together; Zerg's gas number is the weak
  spot, consistent with its still-unadopted gas-income fit, see "Data
  accuracy"). This number moved around some as bugs were fixed this session
  (81→92→85 minerals) — worker-count and Drone-consumption fixes pulled in
  opposite directions, then the Orbital Command supply/production fixes
  pulled it back down; each change is the honest number at the time, not a
  regression. Individual-game timing MAE
  ranges from ~1s to a couple minutes — real games diverge from any fixed
  build order once scouting/tech decisions kick in, which is exactly why the
  bank comparison (not raw timing MAE) is the metric to trust, and why the
  default horizon is capped at 3 minutes.

Published pro builds and real replays are the best ground truth available
without a current-patch client — see the headless caveat below.

### Running SC2 headless (and why it can't give 5.0.16 ground truth)

You *can* script builds in a headless StarCraft II instance and read exact
completion times, but the patch it runs is the catch:

- **Official Blizzard Linux headless build: 4.10 (2019)** — nothing newer is
  published.
- **Community (AI Arena) headless: up to ~5.0.13/5.0.14 (Build 75689).** AI Arena
  confirms **there are no Linux builds past Build 75689**, and Blizzard has
  declined to release newer ones. Even 5.0.14 **predates** the 8-worker / warp-gate
  5.0.16 overhaul, so no headless build has the 5.0.16 economy.
- **"Loading a newer patch onto an old binary" is limited.** The AI Arena
  `sc2patch` approach modifies *map files* to emulate a version on the 4.10 binary
  — it doesn't run true 5.0.16 balance. The client can pull another version's data
  via a replay, but only for versions with a matching Linux binary (≤ Build 75689).
- **True 5.0.16 ground truth = the retail client.** Windows/Mac retail is on
  5.0.16; python-sc2 can also drive **retail via Wine/Lutris** on Linux
  (`SC2PF=WineLinux`), which auto-updates to the live patch. That needs a
  Battle.net login and a ~30 GB install — it runs on your machine, not a headless
  CI box. Single-player build-order timing doesn't hit the bot-vs-bot desync issues
  that plague 5.x headless multiplayer.

Either way, headless SC2 would still validate the **engine's logic** (event
scheduling, worker saturation, Chrono, warp cooldowns); the published-build check
above already validates the **5.0.16 timings**. To script it when you want to:

- With [python-sc2](https://github.com/BurnySc2/python-sc2) (or [pysc2](https://github.com/google-deepmind/pysc2)),
  spawn a bot on an empty map **with no opponent**, execute a scripted build via
  the raw API, and read back the exact game-time each unit/structure completes.
- Run stepped (non-realtime) mode and it simulates far faster than a played game.
- The loop: script a known build → record real completion times → tune `data.ts`
  until the sim matches → trust the optimizer. Do this on **4.10** to check the
  engine's *logic*, or on the **retail client** for true 5.0.16 numbers.

## The optimizer

`npm run optimize` searches for the build that gets a target army to the enemy
fastest. It searches a **parameterized build template** — worker count,
production-building count, gas, opener workers, and (now) a **second Chrono
Boost target** (Probe / the primary tech structure / the primary unit, once
Nexus energy refills — chrono used to be hardcoded to the opener Probe only)
— across **three delivery strategies**, turning each parameter set into a
valid supply-correct build (the greedy generator auto-inserts Pylons and
prerequisites) and scoring it with `compositionArrivalTime`. The space is
small enough to search exhaustively (~31,600 candidates in a couple seconds),
so within the template the result is the true optimum, deterministically.
The simulator validates every candidate, so a broken build can never "win".

The three strategies:
- **home** — produce at home, walk the army across the map.
- **proxyWalk** — proxy Gateways near the enemy; units walk a short distance (the classic proxy 2-gate all-in).
- **proxyWarp** — Warp Gate tech + a proxy Pylon; **warp** the army onto the enemy in ~4s instead of walking.

Example (standard map, patch 5.0.16):

```
TARGET: 4 Zealot arriving at the enemy → best 2:49 (proxyWalk)
  home 3:14 · proxyWalk 2:49 · proxyWarp 3:51
```

The optimizer finds **proxyWalk fastest for these one-shot timings** — proxy
Gateways already deliver units in ~7s, so paying ~100s for Warp Gate research
can't beat them *on first-arrival time*. That's realistic: proxy 2-gate is a
top all-in. Warp-in's real advantages — keeping production safe at home and
continuously reinforcing the front — live in objectives this metric doesn't yet
capture, so `proxyWarp` is modelled and evaluated but wins only when those matter.

**Race-agnostic as of 2026-07-05.** `generateBuild()` used to hardcode
`"Nexus"`/`"Pylon"`/`"Assimilator"`/Chrono/Warp-Gate — pointing it at Terran
or Zerg data crashed immediately. It now derives every name from `data`
(worker via a new `workerNameOf()` helper, supply/gas/townhall via
`EconomyConfig`) and gates Chrono/Warp-Gate steps behind the race actually
having them, so `optimize({ Marine: 4 }, TERRAN, map)` and
`optimize({ Zergling: 6 }, ZERG, map)` work directly — e.g. the Zerg case
correctly discovers it doesn't need extra Overlords for just 6 Zerglings.
The browser UI's Optimizer/Value-frontier panels are still Protoss-only for
now (their unit dropdowns are hardcoded), but the underlying library call
works for any race.

## The raw-sequence search (a genetic algorithm)

The template optimizer above is exact *within its template* — but the
template hardcodes a build's SHAPE (probes → pylon → gas → tech → units, one
primary producer). It can't discover cutting probes at an unusual point to
rush a second producer, chrono-ing the tech building instead of Probes, or any
ordering nobody thought to parameterize. `npm run search` (`src/search.ts`)
searches **Action[] sequences directly** with a genetic algorithm — mutation
operators insert/delete/swap/move/duplicate an action, retarget or add/remove
a `chrono:X` cast, or toggle a structure between home/proxy — using
`simulate()` as a ~10μs-per-call fitness oracle. It's seeded with the
template optimizer's own best answer per strategy, so it can never regress;
a greedy post-hoc pass prunes GA "bloat" (harmless-but-useless actions that
crossover/mutation tend to accumulate) down to a minimal sequence with the
same score.

Result on the same 4 example targets: it beats the template's exhaustive
optimum by **10–18 seconds every time**, in 5–15s of search each:

```
TARGET: 4 Zealot arriving at the enemy
template optimizer : 2:49  (31590 candidates, proxyWalk)
raw-sequence GA     : 2:35  (37533 evaluations, 150 generations, 5.1s)
  -> GA found a build 14.2s FASTER than any template-shaped build.
  Pylon@proxy, Gateway@proxy, Gateway@proxy, Zealot@proxy, Zealot@proxy,
  Zealot@proxy, Zealot@proxy, chrono:Zealot, chrono:Zealot
```

This is a stochastic local search, not branch-and-bound — there's no
admissible lower bound, so it's not *provably* optimal the way the template
search is within its own space. But because a single `simulate()` call is
sub-millisecond, the GA explores an evaluation budget an order of magnitude
larger than the template's exhaustive search, which is why it keeps finding
better answers in practice.

**Expansions are a real search dimension** (2026-07-05): the vocabulary
builder used to hardcode the townhall entity OUT of the discoverable action
set (`need.delete("Nexus")`), so "take a natural expansion" was
undiscoverable no matter how much it would help — confirmed fixed by
observing the GA now takes an early Nexus (at 1:24, done 2:35) once the
target composition is large enough to make it worth it (e.g. 40 Stalkers);
it correctly stays on one base for the smaller example targets above, where
expanding wouldn't help arrival time. Both the template optimizer and the GA
are exposed side-by-side in the browser UI now ("Optimize (template)" /
"Search (GA)" buttons) — the GA there uses a lighter search budget (120/60
vs. this module's own 250/150 default) since it runs on a cold, unwarmed JIT
in the page's main thread, where the full budget took ~19s and blocked the
UI; the lighter budget runs in ~200ms with barely any quality loss.

## The value frontier

`compositionArrivalTime` (above) answers "when does exactly this fixed unit
count arrive" — useful, but it's really one point on a bigger question: *how
much fighting value can reach the enemy, as a function of time*. `npm run
frontier` searches many target compositions (different unit types AND
counts) and reports the **Pareto frontier** of (time, value) across every
build evaluated — for any deadline t, the most value any searched build
delivers by then.

"Value" is `unitValue()` in `engine.ts`: `sqrt(dps * (hp + shields))`, the
classic Lanchester-square-law approximation of fighting power (geometric
mean of offense and defense). This is a **ranking signal, not a combat
resolver** — it ignores range, splash, bonus damage vs. armor types,
upgrades (Blink, Charge, +1/+1, ...), and unit counters/synergy entirely. Two
armies with equal value do not necessarily draw; a small Immortal count can
beat a much higher-value Zealot ball a real matchup would never predict from
this number alone. Treat it as "which build order is worth investigating
further", not "which build order wins."

In the browser, this button sweeps every target composition through a
**reduced search budget** (`maxProbes: 14, maxProducers: 3,
maxEarlyHomeUnits: 1` vs. the library default) — the full default blocked
the page for ~24s with no feedback for the default 3-unit/7-count sweep
(21 target compositions × ~31,600 candidates each), which is long enough to
trigger the browser's own "page unresponsive" warning. The reduced budget
runs in ~2s with an identical frontier in testing (same point count, same
top value, just reached a little later on the time axis) — same tradeoff
already applied to the GA search button above.

Example (standard map): the frontier over Zealot/Stalker/Adept count sweeps
is dominated entirely by Zealots out to ~4:30 — cheap, no gas, no Cybernetics
Core requirement — which matches the real game's well-known early Zealot
timing-attack meta. Stalkers/Adepts only start winning value-per-time once
gas income and Warp Gate throughput ramp up past this window.

## Modeling the opponent

Everything above optimizes Protoss **in isolation** — "how fast can MY army
arrive", independent of what the enemy is doing. But the real question in a
match is two-player: a build that's 10s faster but leaves you with less
fighting value than the enemy actually has at that moment isn't better, it's
a loss. `src/opponent.ts` scores builds against a REAL opponent instead of a
hand-authored archetype:

1. **Terran and Zerg now have real data** (`src/data-terran.ts`,
   `src/data-zerg.ts`), grounded the same way Protoss was — structure
   costs/buildTimes cross-checked against `replays/parsed/*.T*.json` /
   `*.Z*.json` (`parse_replay.py` had only ever pulled the Protoss player
   until this pass). Structure buildTimes were reconfirmed 2026-07-05 against
   an expanded corpus (8 Terran-side, 12 Zerg-side replays) — every value
   matched the original single/triple-replay figures exactly, except
   BanelingNest (corrected from an unverified 32.1 book-value guess to a
   replay-confirmed 42.9, 4/4 exact samples). Zerg needed a real engine
   addition, not just data: production is **larva-based**, not a
   per-building queue, so `engine.ts` gained a regenerating larva-pool
   production mode. The regen rate (9.51s, cap 3) was measured directly off
   the original 3 Zerg replays — identical across all 3 — and deliberately
   NOT re-derived from the larger corpus (a cross-replay-identical result is
   a strong signal of a true game constant; re-fitting risked a worse number
   for no real gain). (This also surfaced and fixed a latent bug: the engine
   hardcoded `"Nexus"`/`"Assimilator"` in several places despite claiming to
   be race-agnostic, which would have silently zeroed Terran's starting
   supply cap.)
2. **`threatCurveFromReplay()`** replays a real opponent's recorded build
   order through their own race's `simulate()`, producing a cumulative
   fighting-value-over-time curve straight from a game someone actually
   played.
3. **`dangerScorer()`** is a `Scorer` (pluggable into the GA search above)
   that ranks Protoss builds by the worst moment they're ever behind that
   curve, instead of by raw arrival time.
4. **MULE and Queen inject are modeled**, and now **replay-aware** too
   (2026-07-05): Terran's Orbital Command + Calldown: MULE and Zerg's Queen
   + Spawn Larvae inject both run on the same generalized mechanic in
   `engine.ts` (a per-caster-type energy pool that scales with how many
   casters exist — `EconomyConfig.casters` — plus a race-specific effect:
   `.mule` adds a temporary flat mineral-income bonus, `.inject` adds a
   delayed larva batch). Action syntax: `"MULE"` and `"InjectLarva"`.
   `tools/parse_replay.py` now detects the REAL ability casts in a replay
   (`CalldownMULE`/`SpawnLarva` command events) and `replay.ts` translates
   them into these actions when replaying a real game — so
   `threatCurveFromReplay()` reflects actual recorded MULEs/injects, not
   just passive income/larva. Re-parsing the corpus with this turned up 75
   real MULE casts and 316 real Queen injects across 20 replays.
5. **Addon-gated units + Lair tier**: Terran Tech Lab unlocks
   Marauder/Siege Tank/Banshee (modeled as their own producer-type entity —
   `BarracksTechLab` etc. — since the engine only tracks aggregate structure
   counts, not which specific building has an addon attached); Zerg Lair
   unlocks HydraliskDen/Spire and Hydralisk/Mutalisk. Costs/stats pulled from
   Liquipedia, not replay-verified. Hive tier, Reactor's parallel-queue
   effect, and Battlecruiser remain out of scope (see the data files' headers).
6. **Statistical archetype, a first step** (2026-07-05): `averageThreatCurve()`
   resamples N same-race threat curves onto a common time grid and reports
   a mean (plus min/max band), so you can danger-score against "the average
   Zerg opener across 10 replays" instead of one specific game — `npm run
   opponent` demonstrates this per race after the per-opponent loop. Not a
   full distributional model (no skill/recency weighting, no
   regret-minimization across the distribution).
7. **Combat-resolution sanity check** (2026-07-05, `src/combat.ts`): the
   danger score above is still built on `unitValue()`'s scalar ranking, so
   `resolveCombat()` adds a second, independent check — an actual
   simultaneous-damage-exchange fight (focus-fire-weakest) between "my units
   by time t" and "their units by time t" at each opponent's worst-deficit
   moment. Still not a real combat sim (no positioning/range/splash/armor/
   upgrades), but it resolves an actual winner instead of just a value gap,
   and the two mostly agree in practice — a useful cross-check on the
   heuristic rather than a replacement for it.

`npm run opponent` auto-discovers every Terran/Zerg-side replay in
`replays/parsed/` (20 — 8 Terran, 12 Zerg) and runs both scorers against
each, printing a summary table across all of them, then the statistical-
archetype comparison per race. The clearest single result, against the
Krystianer/Solar Zerg replay:

```
fastest-arrival build (ignores opponent):
  worst deficit vs this opponent: +53.9 value at 16:38

danger-scored build (optimized against this specific real game):
  worst deficit vs this opponent: -41.8 value at 2:52
  -> danger-scoring reduced the worst deficit by 95.7 value
  combat check at 2:52 (5 of mine vs 4 of theirs): A wins after 6 ticks -- survivors A: Stalker, Stalker; B: (none)
```

The "fastest" build is a burst rush that produces a handful of units and then
stops — by minute 16 a real Zerg's macro has snowballed past its total value
entirely (a positive deficit = behind). The danger-scored search instead
found a build that keeps producing and stays ahead of that specific game's
value curve the whole way through. **This is the concrete case for why
"fastest" and "safest" are different objectives**, and why ranking builds
only against each other (as the template optimizer and plain GA search do)
misses it. Across all 18 opponents with a usable curve (2 of the 20 replay
straight into a deadlock at t=0 and are skipped — no signal to score
against), danger-scoring improves the worst deficit for 10/18 and the mean
worst deficit drops from +55.9 (fastest-arrival) to -4.8 (danger-scored).

**All of this is in the browser too**, not just the CLI: `index.html`'s
"Opponent" panel lets you pick one of 3 embedded real replays, click
Compare, and see a chart of your currently-edited build's value curve
plotted against the real opponent's — the same `assessDanger()` computation
`npm run opponent` does, live and interactive.

Known limitations, honestly: Terran/Zerg data still covers non-addon-gated
units plus Tech Lab/Lair-tier only (see those files' headers for the full
gap list — Hive tier, Reactor's parallel-queue effect, Battlecruiser). The
statistical archetype (item 6 above) is a first step, not a full
distributional model. And `combat.ts`'s resolver (item 7) is a
simultaneous-damage-exchange approximation, not a real RTS combat sim — no
positioning, range, splash, armor types, or upgrades on either side yet.

## Roadmap

1. ✅ Event-driven economy simulator.
2. ✅ Chrono Boost / Nexus energy, sample builds, browser UI.
3. ✅ Authoritative unit data from SC2 game files (5.0.16).
4. ✅ Spatial layer — travel time, proxies, army arrival at the enemy.
5. ✅ Optimizer for "target army at the enemy, fastest" (3 strategies).
6. ✅ Warp Gate tech: research → Gateway morph → warp-in; proxy-pylon delivery.
7. ✅ Replay-based validation (`tools/parse_replay.py`, `npm run diff`)
   against real pro games, not just transcribed builds.
8. ✅ Value-over-time frontier (`npm run frontier`) — rank builds by fighting
   value delivered by time t, not just "when does this exact count arrive".
9. ✅ **Calibrate income from real replay data** (`tools/calibrate_income.py`,
   a tiered least-squares fit, R²=0.98/0.92) — plus finding and fixing a
   replay-timestamp unit bug that had been corrupting the ground truth.
   Map distances remain estimates (still ⏭️ — no headless 5.0.16 client, see
   below).
10. ✅ **GA over raw action sequences** (`src/search.ts`) — beats the
    template's exhaustive optimum by 10-18s on every example target.
    Chrono TARGET is now a first-class search dimension (both in the GA and
    as a lightweight `secondChrono` param in the template optimizer), not a
    hardcoded opener-Probe-only cast. Now exposed side-by-side with the
    template optimizer in the browser UI. ⏭️ Still open: branch & bound with
    an admissible lower bound for *provably* min-time openers (the GA is a
    strong stochastic search, not a proof of optimality).
11. 🟡 **Combat resolution beyond the value heuristic** — `src/combat.ts`'s
    `resolveCombat()` (2026-07-05) actually resolves who wins a straight
    fight between two compositions (simultaneous DPS exchange, focus-fire-
    weakest), and is wired into `npm run opponent` as a sanity check
    alongside the value-based danger score. Still not a real combat sim —
    positioning, range, splash, bonus damage vs. armor types, and upgrades
    (Blink, Charge, +1/+1) remain unmodeled, and it isn't yet a pluggable
    `Scorer` the GA can search against directly (only a post-hoc check).
12. ✅ **Terran & Zerg data + opponent-threat safety objective** — done:
    real replay-grounded data for both races, a genuine larva-pool
    production model for Zerg (9.51s regen, cap 3, calibrated from replay
    data), MULE/Queen inject and Tech Lab/Lair-tier addon-gated units all
    modeled, `npm run opponent` drawing on 20 replays with a statistical
    per-race archetype option, and `optimizer.ts`/`search.ts` made
    race-agnostic so Terran/Zerg builds can be searched/optimized directly,
    not just replayed. Still open: Hive tier, Reactor's parallel-queue
    effect, Battlecruiser, Ghost, Planetary Fortress.
13. 🟡 **Multi-objective / game-theoretic framing** — `averageThreatCurve()`
    (2026-07-05) is a first step (score against the mean of N same-race
    replays instead of one specific game), but not yet full
    regret-minimization across a *distribution* of opponent openings, and
    doesn't weight by skill level or patch recency.
14. ✅ **Expansions as a real search dimension** — the GA's vocabulary
    previously hardcoded out the townhall entity, so "take a natural
    expansion" was undiscoverable no matter how much it would have helped —
    confirmed fixed by observing the GA now takes an early Nexus when the
    target composition is large enough to make it worth it (e.g. 40
    Stalkers). Also fixed alongside it: every Zerg structure now correctly
    consumes its builder Drone (`EntityData.consumesBuilder`), and mineral-
    patch depletion is now at least forecast (`economy-forecast.ts`,
    informational only, not enforced — see its own header for why).
15. ✅ **Real MULE/Queen-inject casts detected in replays** — `parse_replay.py`
    now captures `CalldownMULE`/`SpawnLarva` command events (75/316 real
    casts found across the 20-opponent corpus), and `threatCurveFromReplay()`
    reflects them, closing the gap between "the mechanic is modeled" and
    "replayed real games actually use it".
16. ✅ **The browser UI caught up** — race picker (Protoss/Terran/Zerg) for
    the simulator panel, the simulator's own narration log surfaced, the
    raw-sequence GA exposed alongside the template optimizer, shareable
    URL-encoded build state, and a full "Opponent" comparison panel (pick a
    real replay, see your build's value curve plotted against theirs) — all
    of this used to be CLI-only.
17. ⏭️ A small, ongoing punch list from a full-codebase audit (2026-07-05):
    no CI running `tsc`/tests/validation on push, `optimizer.ts`'s search
    space could grow (e.g. worker-count upper bound is a fixed 20), and the
    Terran/Zerg unit roster still leans on Liquipedia book values rather
    than replay-verified combat stats for most non-buildTime numbers.
18. ✅ **UX pass: "just show me the good builds"** (2026-07-06) — feedback
    that the page required already knowing what to search for before it was
    useful, and that unit dropdowns were an incomplete hardcoded list
    (missing Observer). Fixed the second by deriving every unit dropdown
    from the race's own entity data instead of a hand-maintained array (the
    same "don't hardcode a list that drifts" lesson as everywhere else this
    project has hit it). Fixed the first with the new "Best builds" panel:
    no configuration, runs on page load, curated rush + macro targets, top
    results as load-into-simulator cards. Also fixed the Value Frontier
    button freezing the page for ~24s (same root cause and fix as the GA
    search button's tuning, just never applied there before).
19. ✅ **Second UX pass, from actually using the redesigned page** (2026-07-06)
    — hands-on feedback surfaced both UX confusion and two real engine bugs:
    - **Two real, previously-undiscovered engine bugs.** `townhallCount`
      only ever recognized a race's *starting* townhall name, so morphing
      CommandCenter→OrbitalCommand or Hatchery→Lair made mineral income (and
      Zerg larva regen) permanently drop to **zero** the instant the morph
      completed — silently broken for almost every Terran/Zerg build that
      ever teched up its main base, including 2 of the 4 hand-written
      presets shipped in the browser UI (one didn't even simulate: "Can
      never afford Marine"). Fixed with a new `EntityData.isTownhall` flag
      counted across every tier (Nexus; CommandCenter+OrbitalCommand;
      Hatchery+Lair) instead of matching one hardcoded name. Separately,
      Lair defaulted to `supplyProvided: 0` instead of matching Hatchery's
      4, so the same morph also silently dropped supply cap (the same bug
      class as the OrbitalCommand supply fix from item 17, just missed for
      Zerg). Both caught by writing regression tests first — see
      `engine.test.ts`.
    - **`searchRawSequences` wasn't actually seeded for every caller.** The
      module's own docstring claims results are "seeded from the template's
      own output so it never regresses," but that only happened for callers
      that explicitly passed `opts.seeds` (`search-cli.ts` did;
      `opponent-cli.ts` and the entire browser UI's GA button/Best Builds
      panel did not). An unseeded population can occasionally fail to find
      *any* valid build within budget even when one obviously exists
      (observed: 12 Zergling returned `Infinity`). Fixed by auto-seeding
      from a cheap, reduced-budget `optimize()` call whenever the caller
      doesn't supply seeds, so the "never regresses" guarantee is now
      actually true everywhere, not just where a caller remembered to wire
      it up.
    - **UX**: global race selector (drives Best Builds/Optimizer/Frontier/
      Simulator together, where they used to be Protoss-locked or
      independently switched); split the page into "Find a build"
      (discovery/search tools) vs. "Inspect a build" (Simulator + Opponent)
      instead of an undifferentiated stack of panels; de-jargoned copy
      ("Exact search"/"Smart search" instead of "template optimizer"/
      "raw-sequence GA") and moved the detailed "how it works" explanation
      to a new `about.html` page instead of a dense intro paragraph;
      relabeled the Simulator's hand-written example builds so they no
      longer read as recommended/optimal; the Opponent panel now shows
      *which* build it's comparing inline instead of only in a parenthetical
      referring back up the page, and dropped its Protoss-only restriction;
      the main Simulator chart gained y-axis value labels (it previously had
      none at all -- only the Frontier chart did) and a hover tooltip
      showing exact values + the most recent action.
20. **Roadmap from the "Scouting Report" audit** (2026-07-06) -- a
    from-scratch review through a pro's, a ladder player's, and a YouTube
    fan's eyes (published as a Claude Artifact), re-verified against the
    code before being turned into this sequence. Phases 1-3 done this
    session; 4-5 remain:
    - ✅ **Phase 1, quick wins**: fixed per-Nexus Chrono energy (the cap now
      scales as `townhallCount * nexusMaxEnergy` instead of a flat 200
      regardless of base count -- same bug class as the townhall-counting
      fix in item 19, pinned by a new regression test); supply-count
      build-order notation ("14 Pylon, 16 Gate") alongside the raw
      timestamps; rough benchmark context ("pros hit this around X") next
      to arrival times, DERIVED from the real replay corpus via a new
      `tools/calibrate_benchmarks.mjs` (not hand-guessed -- see
      `src/benchmarks.ts`); hover-tooltip glossary for chrono/value/danger score.
    - ✅ **Phase 2, upgrades** (the single biggest gap: exactly 1 upgrade
      existed anywhere in the codebase, `WarpGateResearch`) -- added Charge,
      Blink, and one weapon+armor tier per race (`EntityData.upgrades`,
      applied by `unitValue()`/`combat.ts`'s `toCombatUnit()` based on which
      upgrades were researched by the time a specific unit completed
      production -- `StartedItem.researchedAtFinish` -- not a static
      baseline forever, and not every upgrade the whole build eventually
      researches). Wired into `search.ts`'s vocabulary so the GA can
      discover *when* to research them, the same way `chrono:X` already
      works. Scoped to 1 tier + 2 signature abilities first (Forge/
      EngineeringBay/EvolutionChamber tier-1 weapon+armor, plus Protoss's
      Charge/Blink), not the full ~27-upgrade matrix; Air/Vehicle/Starship
      and Melee-vs-Missile-split upgrade lines documented as out of scope.
    - ✅ **Phase 3, roster expansion**, ordered by real-ladder frequency, all
      stats sourced from Liquipedia's LotV pages (Normal -> Faster / 1.4):
      Protoss Templar Archives (High Templar/Dark Templar/Archon) + Robotics
      Bay (Colossus/Disruptor); Zerg Hive tier (Infestation Pit/Ultralisk
      Cavern/Lurker Den -> Infestor/Ultralisk/Lurker); Terran Ghost/Thor/
      Battlecruiser (Ghost Academy/Armory/Fusion Core). Carrier/Tempest/
      Mothership/Viper/Brood Lord/Nydus deferred as rarer/later-game.
      Archon's real 2-Templar merge doesn't fit this engine's 1-input
      `morphFrom` model -- approximated as morphing from a single High
      Templar at the *delta* cost beyond one already-built HT, documented
      as a limitation rather than silently modeled wrong. Along the way,
      found and fixed a real engine bug this phase exposed: `Hive` morphs
      from `Lair` (decrementing it from `completed`), which was silently
      making every `requires: ["Lair"]` structure (HydraliskDen, Spire,
      InfestationPit) permanently unbuildable the instant a base hit Hive
      tier -- `State.reqMet()` now walks morph ancestry so a Hive-tech base
      still counts as having "Lair tech", matching the real game.
    - ⏭️ **Phase 4, accuracy**: real per-map distance data for a handful of
      named ladder maps, replacing the 3 abstract presets.
    - ✅ **Phase 5, engagement**: a new "⚔️ Race two builds" panel runs any
      two build orders (independent race/label per side, a "load current
      build" shortcut, prefilled with a macro-vs-rush pair) through the same
      `valueOverTime()` used elsewhere and draws both step curves on one
      chart (`drawTwoCurveChart()`, factored out of the Opponent panel's
      chart so both share one implementation). Also: the replay corpus is
      now actually 26 games' worth of "browsable" instead of a 3-game UI
      subset -- `tools/generate_sample_replays.py` regenerates
      `src/sample-replays.ts` from EVERY `replays/parsed/*.json` (not a
      hand-picked few), and a new "📼 Browse the replay corpus" panel lists
      all of them with their real build order expandable and loadable
      straight into the Simulator via `sequenceFromReplay()`.

## References

- Churchill & Buro, *Build Order Optimization in StarCraft* (AAAI 2011)
- BOSS — Build Order Search System (David Churchill)
- [BurnySc2/sc2-planner](https://github.com/BurnySc2/sc2-planner) — a build calculator on GitHub Pages
- [Blizzard 5.0.16 patch notes](https://news.blizzard.com/en-us/article/24259080/starcraft-ii-5-0-16-patch-notes)
