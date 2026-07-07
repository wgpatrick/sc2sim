import type { ParsedReplay } from "./replay.js";

/**
 * EVERY real replay in replays/parsed/*.json (excluding *.opponent.json
 * duplicates), opening 300s trimmed and embedded directly (not
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
export interface SampleReplay {
  label: string;
  race: "Protoss" | "Terran" | "Zerg";
  replay: ParsedReplay;
}

export const SAMPLE_REPLAYS: SampleReplay[] = [
  {
    "label": "ByuN vs Lambo ZvT -- ByuN (Terran) on Washout LE",
    "race": "Terran",
    "replay": {
      "source": "ByuN_vs_Lambo_ZvT_2026-06-25.SC2Replay",
      "map": "Washout LE",
      "length": 577.0982142857143,
      "patch": "5.0.16.97364",
      "player": {
        "name": "ByuN",
        "race": "Terran",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 12.767857142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 25.669642857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 37.767857142857146,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 39.73214285714286,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 49.86607142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 61.16071428571429,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 61.964285714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 63.03571428571429,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 66.96428571428572,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 74.0625,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 86.16071428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 88.39285714285715,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 98.25892857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 109.46428571428572,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 110.35714285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 125.98214285714286,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 130.9375,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 137.4107142857143,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 138.48214285714286,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 138.48214285714286,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 141.83035714285714,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 144.375,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 150.35714285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 162.45535714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 163.25892857142858,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 164.6875,
          "event": "start",
          "name": "BarracksReactor"
        },
        {
          "t": 165.80357142857144,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 168.92857142857144,
          "event": "start",
          "name": "Factory"
        },
        {
          "t": 169.41964285714286,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 177.94642857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 190.04464285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 200.40178571428572,
          "event": "done",
          "name": "BarracksReactor"
        },
        {
          "t": 201.96428571428572,
          "event": "morph",
          "name": "BarracksFlying"
        },
        {
          "t": 202.00892857142858,
          "event": "morph",
          "name": "Reactor"
        },
        {
          "t": 202.14285714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 202.36607142857144,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 207.4107142857143,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 207.4107142857143,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 208.52678571428572,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 211.7857142857143,
          "event": "done",
          "name": "Factory"
        },
        {
          "t": 211.96428571428572,
          "event": "morph",
          "name": "FactoryFlying"
        },
        {
          "t": 213.48214285714286,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 214.24107142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 216.11607142857144,
          "event": "morph",
          "name": "Barracks"
        },
        {
          "t": 217.54464285714286,
          "event": "morph",
          "name": "Factory"
        },
        {
          "t": 217.54464285714286,
          "event": "morph",
          "name": "FactoryReactor"
        },
        {
          "t": 218.79464285714286,
          "event": "start",
          "name": "BarracksTechLab"
        },
        {
          "t": 226.33928571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 228.3482142857143,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 229.50892857142858,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 229.50892857142858,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 236.65178571428572,
          "event": "done",
          "name": "BarracksTechLab"
        },
        {
          "t": 238.43750000000003,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 239.19642857142858,
          "event": "born",
          "name": "BattleHellion"
        },
        {
          "t": 239.33035714285717,
          "event": "born",
          "name": "BattleHellion"
        },
        {
          "t": 240.8482142857143,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 241.07142857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 250.5357142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 253.16964285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 256.25,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 259.95535714285717,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 260.58035714285717,
          "event": "born",
          "name": "BattleHellion"
        },
        {
          "t": 260.7142857142857,
          "event": "born",
          "name": "BattleHellion"
        },
        {
          "t": 262.2767857142857,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 262.6339285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 262.67857142857144,
          "event": "morph",
          "name": "FactoryFlying"
        },
        {
          "t": 262.7232142857143,
          "event": "morph",
          "name": "Reactor"
        },
        {
          "t": 265.26785714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 268.5267857142857,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 268.5267857142857,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 272.99107142857144,
          "event": "morph",
          "name": "Factory"
        },
        {
          "t": 272.99107142857144,
          "event": "start",
          "name": "FactoryReactor"
        },
        {
          "t": 277.67857142857144,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 279.4196428571429,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 279.55357142857144,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 279.95535714285717,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 280.26785714285717,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 285.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 289.8214285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 290.625,
          "event": "start",
          "name": "EngineeringBay"
        },
        {
          "t": 290.9821428571429,
          "event": "start",
          "name": "EngineeringBay"
        },
        {
          "t": 297.0982142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 298.08035714285717,
          "event": "born",
          "name": "Marine"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 251,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 15,
          "gas": 0,
          "mineralRate": 363,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 160,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 175,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 78.57142857142857,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 115,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 92.85714285714286,
          "minerals": 150,
          "gas": 4,
          "mineralRate": 671,
          "gasRate": 22,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 100.0,
          "minerals": 220,
          "gas": 24,
          "mineralRate": 587,
          "gasRate": 134,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 260,
          "gas": 44,
          "mineralRate": 671,
          "gasRate": 156,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 190,
          "gas": 14,
          "mineralRate": 643,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 121.42857142857143,
          "minerals": 295,
          "gas": 34,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 380,
          "gas": 54,
          "mineralRate": 783,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 70,
          "gas": 74,
          "mineralRate": 727,
          "gasRate": 179,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 142.85714285714286,
          "minerals": 10,
          "gas": 90,
          "mineralRate": 699,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 30,
          "gas": 110,
          "mineralRate": 895,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 157.14285714285714,
          "minerals": 140,
          "gas": 130,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 164.2857142857143,
          "minerals": 60,
          "gas": 50,
          "mineralRate": 1063,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 171.42857142857144,
          "minerals": 85,
          "gas": 20,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 178.57142857142858,
          "minerals": 205,
          "gas": 40,
          "mineralRate": 951,
          "gasRate": 179,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 185.71428571428572,
          "minerals": 280,
          "gas": 60,
          "mineralRate": 1007,
          "gasRate": 179,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 192.85714285714286,
          "minerals": 410,
          "gas": 76,
          "mineralRate": 1063,
          "gasRate": 156,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 200.0,
          "minerals": 570,
          "gas": 96,
          "mineralRate": 1175,
          "gasRate": 156,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 207.14285714285717,
          "minerals": 75,
          "gas": 116,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 25.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 214.2857142857143,
          "minerals": 150,
          "gas": 136,
          "mineralRate": 1007,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 221.42857142857144,
          "minerals": 45,
          "gas": 131,
          "mineralRate": 1119,
          "gasRate": 156,
          "supplyUsed": 30.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 228.57142857142858,
          "minerals": 155,
          "gas": 151,
          "mineralRate": 1259,
          "gasRate": 179,
          "supplyUsed": 31.0,
          "supplyCap": 42.0,
          "workers": 24
        },
        {
          "t": 235.71428571428572,
          "minerals": 65,
          "gas": 167,
          "mineralRate": 1259,
          "gasRate": 156,
          "supplyUsed": 32.0,
          "supplyCap": 42.0,
          "workers": 24
        },
        {
          "t": 242.85714285714286,
          "minerals": 85,
          "gas": 187,
          "mineralRate": 1455,
          "gasRate": 156,
          "supplyUsed": 38.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 250.00000000000003,
          "minerals": 125,
          "gas": 107,
          "mineralRate": 1511,
          "gasRate": 156,
          "supplyUsed": 39.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 257.14285714285717,
          "minerals": 200,
          "gas": 127,
          "mineralRate": 1623,
          "gasRate": 156,
          "supplyUsed": 40.0,
          "supplyCap": 42.0,
          "workers": 28
        },
        {
          "t": 264.2857142857143,
          "minerals": 245,
          "gas": 97,
          "mineralRate": 1679,
          "gasRate": 156,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 29
        },
        {
          "t": 271.42857142857144,
          "minerals": 500,
          "gas": 133,
          "mineralRate": 1623,
          "gasRate": 268,
          "supplyUsed": 41.0,
          "supplyCap": 42.0,
          "workers": 30
        },
        {
          "t": 278.5714285714286,
          "minerals": 270,
          "gas": 173,
          "mineralRate": 1791,
          "gasRate": 358,
          "supplyUsed": 43.0,
          "supplyCap": 50.0,
          "workers": 30
        },
        {
          "t": 285.7142857142857,
          "minerals": 265,
          "gas": 209,
          "mineralRate": 1735,
          "gasRate": 335,
          "supplyUsed": 45.0,
          "supplyCap": 63.0,
          "workers": 31
        },
        {
          "t": 292.8571428571429,
          "minerals": 100,
          "gas": 249,
          "mineralRate": 1679,
          "gasRate": 335,
          "supplyUsed": 46.0,
          "supplyCap": 63.0,
          "workers": 32
        },
        {
          "t": 300.0,
          "minerals": 165,
          "gas": 285,
          "mineralRate": 1595,
          "gasRate": 313,
          "supplyUsed": 48.0,
          "supplyCap": 63.0,
          "workers": 33
        }
      ]
    }
  },
  {
    "label": "ByuN vs Lambo ZvT -- Lambo (Zerg) on Washout LE",
    "race": "Zerg",
    "replay": {
      "source": "ByuN_vs_Lambo_ZvT_2026-06-25.SC2Replay",
      "map": "Washout LE",
      "length": 577.0982142857143,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Lambo",
        "race": "Zerg",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 0.44642857142857145,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 9.955357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 10.892857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 12.589285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.589285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 15.937500000000002,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.401785714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 21.696428571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 23.03571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 23.03571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 28.080357142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 28.080357142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 29.687500000000004,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 29.732142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 29.91071428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 33.839285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 33.839285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 38.035714285714285,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 39.41964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 41.875,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 41.875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 48.92857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 55.892857142857146,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 55.892857142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 55.9375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 55.9375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 58.43750000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 67.94642857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 68.08035714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 68.08035714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 68.08035714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 68.08035714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 69.64285714285715,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 74.01785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 77.45535714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 77.94642857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 81.29464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 86.16071428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 86.16071428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 86.96428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 90.08928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 90.08928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 93.4375,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 93.4375,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 95.9375,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 96.47321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 98.39285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 100.625,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 103.25892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 105.98214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 107.23214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 110.53571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 110.53571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 115.40178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 115.40178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 115.49107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 115.58035714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 119.37500000000001,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 119.37500000000001,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 122.05357142857143,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 125.00000000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 126.78571428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 127.72321428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 127.72321428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 134.50892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 141.07142857142858,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 141.07142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 142.36607142857144,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 144.01785714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 144.64285714285714,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 144.64285714285714,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 145.66964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 145.80357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 148.48214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 150.58035714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 153.0357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 153.52678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 154.15178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 160.08928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 162.8125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 162.8125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 162.8125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 162.94642857142858,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 162.94642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 162.94642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 163.0357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 165.13392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 165.17857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 165.17857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 165.625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 165.625,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 165.625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 166.29464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 166.29464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 168.3482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 169.5982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 172.54464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 176.25,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 176.25,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 177.27678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 177.27678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 178.3482142857143,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 178.4375,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 179.10714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 180.49107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 180.49107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 180.89285714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 182.05357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 188.39285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 188.39285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 188.39285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 188.39285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 188.61607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 188.6607142857143,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 191.5625,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 198.125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 198.25892857142858,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 199.375,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 199.55357142857144,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 200.13392857142858,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 200.13392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 200.8482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 200.9375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 200.98214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 200.98214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 201.07142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 207.63392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 209.6875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 209.86607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 210.04464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 210.58035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.8125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 212.99107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 212.99107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 213.08035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 213.08035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 213.125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 213.125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 213.125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 213.125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 214.50892857142858,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 215.3125,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 216.11607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 217.7232142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 220.08928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 221.96428571428572,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 223.75,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 224.82142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 225.00000000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 227.45535714285717,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 227.63392857142858,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 228.25892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 228.25892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 229.5982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 229.86607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 229.86607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 230.66964285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 230.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 230.75892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 230.75892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 230.75892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 232.67857142857144,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 232.7232142857143,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 234.50892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 235.89285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 235.89285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 237.32142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 239.68750000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 240.26785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 241.33928571428572,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 242.67857142857144,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 242.67857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 242.90178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 242.90178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 242.90178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 242.90178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 242.90178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 242.90178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 243.25892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.43750000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.61607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.79464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 244.37500000000003,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 244.37500000000003,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 249.68750000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 251.69642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 251.69642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 251.83035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 251.83035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 252.27678571428572,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 252.54464285714286,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 253.88392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.46428571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 254.46428571428572,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 254.46428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 254.73214285714286,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 255.93750000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 255.93750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 259.1964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 259.2857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 261.83035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 261.83035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 262.8125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 262.9464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 263.8392857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 263.8392857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 263.8392857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 263.8392857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 263.9732142857143,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 264.01785714285717,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 265.0,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 265.2232142857143,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 266.0267857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 266.0267857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 268.70535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 268.7946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 269.6875,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 269.6875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 270.4464285714286,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 271.83035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.7946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 273.9732142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 274.1517857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 274.95535714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 274.95535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 275.0892857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 275.0892857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.3839285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 278.2142857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 278.39285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 278.5714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 278.75,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 279.1964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 282.45535714285717,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 284.64285714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 288.4375,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 288.70535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 289.6875,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 289.6875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 291.3392857142857,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 291.6517857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.6517857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.8125,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 294.24107142857144,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 294.24107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 295.9821428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 297.6339285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 297.6339285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 297.6339285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.92857142857144,
          "event": "start",
          "name": "CreepTumorQueen"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 251,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 60,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 84,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 59,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 13
        },
        {
          "t": 50.0,
          "minerals": 149,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 13
        },
        {
          "t": 57.142857142857146,
          "minerals": 149,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 239,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 24,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 20.0,
          "workers": 14
        },
        {
          "t": 78.57142857142857,
          "minerals": 9,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 64,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 14
        },
        {
          "t": 92.85714285714286,
          "minerals": 164,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 100.0,
          "minerals": 24,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 49,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 114.28571428571429,
          "minerals": 109,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 189,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 0,
          "supplyUsed": 19.0,
          "supplyCap": 20.0,
          "workers": 18
        },
        {
          "t": 128.57142857142858,
          "minerals": 194,
          "gas": 8,
          "mineralRate": 1007,
          "gasRate": 44,
          "supplyUsed": 19.0,
          "supplyCap": 20.0,
          "workers": 19
        },
        {
          "t": 135.71428571428572,
          "minerals": 309,
          "gas": 28,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 20.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 74,
          "gas": 44,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 24.0,
          "workers": 19
        },
        {
          "t": 150.0,
          "minerals": 29,
          "gas": 64,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 32.0,
          "workers": 19
        },
        {
          "t": 157.14285714285714,
          "minerals": 34,
          "gas": 84,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 28.0,
          "supplyCap": 32.0,
          "workers": 19
        },
        {
          "t": 164.2857142857143,
          "minerals": 54,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 134,
          "supplyUsed": 28.0,
          "supplyCap": 32.0,
          "workers": 19
        },
        {
          "t": 171.42857142857144,
          "minerals": 64,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 44,
          "supplyUsed": 30.0,
          "supplyCap": 32.0,
          "workers": 21
        },
        {
          "t": 178.57142857142858,
          "minerals": 119,
          "gas": 0,
          "mineralRate": 1203,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 22
        },
        {
          "t": 185.71428571428572,
          "minerals": 154,
          "gas": 0,
          "mineralRate": 1203,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 23
        },
        {
          "t": 192.85714285714286,
          "minerals": 324,
          "gas": 0,
          "mineralRate": 1315,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 25
        },
        {
          "t": 200.0,
          "minerals": 179,
          "gas": 0,
          "mineralRate": 1343,
          "gasRate": 0,
          "supplyUsed": 31.0,
          "supplyCap": 32.0,
          "workers": 24
        },
        {
          "t": 207.14285714285717,
          "minerals": 149,
          "gas": 0,
          "mineralRate": 1371,
          "gasRate": 0,
          "supplyUsed": 35.0,
          "supplyCap": 40.0,
          "workers": 24
        },
        {
          "t": 214.2857142857143,
          "minerals": 44,
          "gas": 0,
          "mineralRate": 1371,
          "gasRate": 0,
          "supplyUsed": 37.0,
          "supplyCap": 40.0,
          "workers": 28
        },
        {
          "t": 221.42857142857144,
          "minerals": 109,
          "gas": 0,
          "mineralRate": 1399,
          "gasRate": 0,
          "supplyUsed": 39.0,
          "supplyCap": 40.0,
          "workers": 28
        },
        {
          "t": 228.57142857142858,
          "minerals": 149,
          "gas": 0,
          "mineralRate": 1483,
          "gasRate": 0,
          "supplyUsed": 40.0,
          "supplyCap": 40.0,
          "workers": 29
        },
        {
          "t": 235.71428571428572,
          "minerals": 19,
          "gas": 0,
          "mineralRate": 1539,
          "gasRate": 0,
          "supplyUsed": 45.0,
          "supplyCap": 48.0,
          "workers": 30
        },
        {
          "t": 242.85714285714286,
          "minerals": 129,
          "gas": 0,
          "mineralRate": 1707,
          "gasRate": 0,
          "supplyUsed": 47.0,
          "supplyCap": 56.0,
          "workers": 31
        },
        {
          "t": 250.00000000000003,
          "minerals": 79,
          "gas": 8,
          "mineralRate": 1763,
          "gasRate": 44,
          "supplyUsed": 51.0,
          "supplyCap": 56.0,
          "workers": 34
        },
        {
          "t": 257.14285714285717,
          "minerals": 134,
          "gas": 28,
          "mineralRate": 1735,
          "gasRate": 156,
          "supplyUsed": 54.0,
          "supplyCap": 56.0,
          "workers": 36
        },
        {
          "t": 264.2857142857143,
          "minerals": 259,
          "gas": 48,
          "mineralRate": 1791,
          "gasRate": 156,
          "supplyUsed": 56.0,
          "supplyCap": 56.0,
          "workers": 39
        },
        {
          "t": 271.42857142857144,
          "minerals": 154,
          "gas": 68,
          "mineralRate": 1931,
          "gasRate": 156,
          "supplyUsed": 60.0,
          "supplyCap": 60.0,
          "workers": 40
        },
        {
          "t": 278.5714285714286,
          "minerals": 159,
          "gas": 88,
          "mineralRate": 1847,
          "gasRate": 179,
          "supplyUsed": 59.5,
          "supplyCap": 60.0,
          "workers": 42
        },
        {
          "t": 285.7142857142857,
          "minerals": 404,
          "gas": 108,
          "mineralRate": 1987,
          "gasRate": 179,
          "supplyUsed": 59.5,
          "supplyCap": 60.0,
          "workers": 42
        },
        {
          "t": 292.8571428571429,
          "minerals": 259,
          "gas": 124,
          "mineralRate": 2155,
          "gasRate": 156,
          "supplyUsed": 67.5,
          "supplyCap": 68.0,
          "workers": 42
        },
        {
          "t": 300.0,
          "minerals": 389,
          "gas": 144,
          "mineralRate": 2295,
          "gasRate": 156,
          "supplyUsed": 70.5,
          "supplyCap": 76.0,
          "workers": 42
        }
      ]
    }
  },
  {
    "label": "CannonRush vs Calyx PvT -- CannonRush (Protoss) on Sanctuary III LE",
    "race": "Protoss",
    "replay": {
      "source": "CannonRush_vs_Calyx_PvT_2026-06-29.SC2Replay",
      "map": "Sanctuary III LE",
      "length": 542.2321428571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "CannonRush",
        "race": "Protoss",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 12.321428571428573,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 20.401785714285715,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 28.482142857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 33.92857142857143,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 38.705357142857146,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 50.80357142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 51.78571428571429,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 55.401785714285715,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 63.88392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 68.30357142857143,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 71.96428571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 80.13392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 89.73214285714286,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 90.49107142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 101.83035714285715,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 102.58928571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 103.88392857142858,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 114.95535714285715,
          "event": "start",
          "name": "CyberneticsCore"
        },
        {
          "t": 124.06250000000001,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 130.35714285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 135.0,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 142.45535714285714,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 145.49107142857144,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 150.66964285714286,
          "event": "done",
          "name": "CyberneticsCore"
        },
        {
          "t": 152.85714285714286,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 155.44642857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 163.48214285714286,
          "event": "start",
          "name": "Stargate"
        },
        {
          "t": 167.54464285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 171.02678571428572,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 175.3125,
          "event": "done",
          "name": "Nexus"
        },
        {
          "t": 181.65178571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 187.94642857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 191.91964285714286,
          "event": "start",
          "name": "ShieldBattery"
        },
        {
          "t": 194.0625,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 200.04464285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 206.33928571428572,
          "event": "done",
          "name": "Stargate"
        },
        {
          "t": 206.51785714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 209.55357142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 220.49107142857144,
          "event": "done",
          "name": "ShieldBattery"
        },
        {
          "t": 221.83035714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 222.85714285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 233.79464285714286,
          "event": "born",
          "name": "Oracle"
        },
        {
          "t": 233.92857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 234.19642857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 246.02678571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 246.29464285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 255.00000000000003,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 255.58035714285717,
          "event": "start",
          "name": "TwilightCouncil"
        },
        {
          "t": 260.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 260.9375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 269.0625,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 272.0982142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 280.0,
          "event": "upgrade",
          "name": "WarpGateResearch"
        },
        {
          "t": 290.3571428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 291.2946428571429,
          "event": "done",
          "name": "TwilightCouncil"
        },
        {
          "t": 292.99107142857144,
          "event": "start",
          "name": "Pylon"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 209,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 28.571428571428573,
          "minerals": 60,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 42.85714285714286,
          "minerals": 5,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 65,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 71.42857142857143,
          "minerals": 75,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 78.57142857142857,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 130,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 245,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 340,
          "gas": 12,
          "mineralRate": 811,
          "gasRate": 67,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 40,
          "gas": 28,
          "mineralRate": 811,
          "gasRate": 111,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 114.28571428571429,
          "minerals": 145,
          "gas": 48,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 121.42857142857143,
          "minerals": 35,
          "gas": 64,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 128.57142857142858,
          "minerals": 60,
          "gas": 84,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 135.71428571428572,
          "minerals": 10,
          "gas": 104,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 110,
          "gas": 124,
          "mineralRate": 839,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 20
        },
        {
          "t": 150.0,
          "minerals": 165,
          "gas": 148,
          "mineralRate": 867,
          "gasRate": 179,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 20
        },
        {
          "t": 157.14285714285714,
          "minerals": 85,
          "gas": 138,
          "mineralRate": 811,
          "gasRate": 313,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 164.2857142857143,
          "minerals": 35,
          "gas": 24,
          "mineralRate": 811,
          "gasRate": 313,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 171.42857142857144,
          "minerals": 75,
          "gas": 60,
          "mineralRate": 783,
          "gasRate": 313,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 178.57142857142858,
          "minerals": 90,
          "gas": 96,
          "mineralRate": 587,
          "gasRate": 291,
          "supplyUsed": 25.0,
          "supplyCap": 42.0,
          "workers": 21
        },
        {
          "t": 185.71428571428572,
          "minerals": 25,
          "gas": 86,
          "mineralRate": 699,
          "gasRate": 291,
          "supplyUsed": 26.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 192.85714285714286,
          "minerals": 40,
          "gas": 126,
          "mineralRate": 895,
          "gasRate": 313,
          "supplyUsed": 27.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 200.0,
          "minerals": 50,
          "gas": 166,
          "mineralRate": 951,
          "gasRate": 335,
          "supplyUsed": 27.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 207.14285714285717,
          "minerals": 10,
          "gas": 56,
          "mineralRate": 923,
          "gasRate": 358,
          "supplyUsed": 31.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 214.2857142857143,
          "minerals": 70,
          "gas": 92,
          "mineralRate": 923,
          "gasRate": 335,
          "supplyUsed": 32.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 221.42857142857144,
          "minerals": 75,
          "gas": 128,
          "mineralRate": 1119,
          "gasRate": 313,
          "supplyUsed": 33.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 228.57142857142858,
          "minerals": 20,
          "gas": 118,
          "mineralRate": 1091,
          "gasRate": 313,
          "supplyUsed": 37.0,
          "supplyCap": 42.0,
          "workers": 28
        },
        {
          "t": 235.71428571428572,
          "minerals": 115,
          "gas": 158,
          "mineralRate": 1175,
          "gasRate": 313,
          "supplyUsed": 39.0,
          "supplyCap": 42.0,
          "workers": 30
        },
        {
          "t": 242.85714285714286,
          "minerals": 270,
          "gas": 198,
          "mineralRate": 1175,
          "gasRate": 313,
          "supplyUsed": 38.0,
          "supplyCap": 42.0,
          "workers": 29
        },
        {
          "t": 250.00000000000003,
          "minerals": 280,
          "gas": 238,
          "mineralRate": 1315,
          "gasRate": 358,
          "supplyUsed": 40.0,
          "supplyCap": 42.0,
          "workers": 31
        },
        {
          "t": 257.14285714285717,
          "minerals": 170,
          "gas": 178,
          "mineralRate": 1287,
          "gasRate": 358,
          "supplyUsed": 40.0,
          "supplyCap": 42.0,
          "workers": 31
        },
        {
          "t": 264.2857142857143,
          "minerals": 245,
          "gas": 210,
          "mineralRate": 1315,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 33
        },
        {
          "t": 271.42857142857144,
          "minerals": 320,
          "gas": 250,
          "mineralRate": 1371,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 34
        },
        {
          "t": 278.5714285714286,
          "minerals": 395,
          "gas": 290,
          "mineralRate": 1539,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 35
        },
        {
          "t": 285.7142857142857,
          "minerals": 430,
          "gas": 330,
          "mineralRate": 1455,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 34
        },
        {
          "t": 292.8571428571429,
          "minerals": 510,
          "gas": 370,
          "mineralRate": 1567,
          "gasRate": 335,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 35
        },
        {
          "t": 300.0,
          "minerals": 140,
          "gas": 310,
          "mineralRate": 1567,
          "gasRate": 358,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 35
        }
      ]
    }
  },
  {
    "label": "ChangAn vs SortOf ZvZ -- \u957f\u5b89 (Zerg) on Rainfall LE",
    "race": "Zerg",
    "replay": {
      "source": "ChangAn_vs_SortOf_ZvZ_2026-06-23.SC2Replay",
      "map": "Rainfall LE",
      "length": 980.0892857142858,
      "patch": "5.0.16.97364",
      "player": {
        "name": "\u957f\u5b89",
        "race": "Zerg",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 0.44642857142857145,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 9.955357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 12.589285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.589285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 27.857142857142858,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 33.348214285714285,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 40.49107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 42.85714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 45.49107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 45.49107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 45.84821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 52.36607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 52.63392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 52.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 56.205357142857146,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 57.99107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 57.99107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 61.87500000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 62.589285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 68.34821428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 68.34821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 71.38392857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 74.28571428571429,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 80.44642857142858,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 80.44642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 80.58035714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 80.58035714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 80.89285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 81.38392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 90.40178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 91.16071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 97.72321428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 97.72321428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 97.72321428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 97.72321428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 97.72321428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 97.72321428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 98.52678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 98.52678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 98.52678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 99.91071428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 101.33928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 108.30357142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 108.30357142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 108.30357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 109.41964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 111.78571428571429,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 115.00000000000001,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 118.48214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 118.48214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 118.48214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 118.92857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 125.04464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 128.4375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 132.14285714285714,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 132.14285714285714,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 132.14285714285714,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 137.1875,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 137.1875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 137.94642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 147.4107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 147.45535714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 156.96428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 157.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 165.26785714285717,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 165.26785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 166.875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 167.32142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 167.45535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 169.50892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 169.50892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 171.33928571428572,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 176.83035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 176.91964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 179.46428571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 179.46428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 179.55357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 179.5982142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 179.5982142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 180.04464285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 183.21428571428572,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 183.21428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.33928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 189.0625,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 189.0625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 191.69642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 191.69642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 192.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 192.63392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 192.7232142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 195.58035714285717,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 195.8482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 200.2232142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 200.35714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 202.23214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 204.41964285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 205.35714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 206.69642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 206.83035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 208.88392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 209.0625,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 209.24107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 209.64285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.64285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 209.77678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.77678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.77678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 211.74107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 216.5625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 217.00892857142858,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 217.36607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.36607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.36607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 217.5,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.5,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.5,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 217.67857142857144,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 218.83928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 218.83928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 218.9732142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 218.9732142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 220.0,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 221.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 222.1875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 225.62500000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 230.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 231.33928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 233.16964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 233.3482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 233.52678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 234.41964285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 234.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 235.13392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 235.31250000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 235.31250000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.32142857142858,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 238.79464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 240.8482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.48214285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 243.48214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 243.52678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 243.6607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 247.27678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 247.27678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 247.45535714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 247.45535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 247.45535714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 247.45535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.79464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 248.9732142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 249.15178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 249.19642857142858,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 249.19642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 250.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 250.93750000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 250.93750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 253.92857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.06250000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.2857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 255.13392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.66964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 255.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 255.80357142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 255.80357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 261.0714285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 263.5714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 266.0714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 266.0714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.0714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 266.1607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 266.20535714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 266.20535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 266.3392857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 266.42857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 266.42857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.42857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 266.4732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 268.3482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 275.8482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 283.30357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 283.30357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 283.30357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 283.4821428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 283.4821428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 283.4821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 283.61607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 283.61607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 283.61607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 285.3571428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 285.49107142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 285.49107142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 285.49107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 286.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 286.83035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 286.9196428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 286.9196428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 286.9196428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 286.9196428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 289.8214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 290.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 290.17857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 290.625,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 292.45535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.5892857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.5892857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 293.6607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 298.61607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 298.9732142857143,
          "event": "morph",
          "name": "Egg"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 335,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 145,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 15,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 35.714285714285715,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 42.85714285714286,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 50.0,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 57.142857142857146,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 10
        },
        {
          "t": 64.28571428571429,
          "minerals": 15,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 71.42857142857143,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 78.57142857142857,
          "minerals": 180,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 85.71428571428572,
          "minerals": 115,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 92.85714285714286,
          "minerals": 150,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 100.0,
          "minerals": 230,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 107.14285714285715,
          "minerals": 270,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 114.28571428571429,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 11
        },
        {
          "t": 121.42857142857143,
          "minerals": 65,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 11
        },
        {
          "t": 128.57142857142858,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 11
        },
        {
          "t": 135.71428571428572,
          "minerals": 0,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 11
        },
        {
          "t": 142.85714285714286,
          "minerals": 75,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 150.0,
          "minerals": 60,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 157.14285714285714,
          "minerals": 155,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 18.5,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 164.2857142857143,
          "minerals": 180,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 19.5,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 171.42857142857144,
          "minerals": 175,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 20.5,
          "supplyCap": 28.0,
          "workers": 13
        },
        {
          "t": 178.57142857142858,
          "minerals": 200,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 18.5,
          "supplyCap": 28.0,
          "workers": 13
        },
        {
          "t": 185.71428571428572,
          "minerals": 75,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 21.0,
          "supplyCap": 32.0,
          "workers": 15
        },
        {
          "t": 192.85714285714286,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 23.0,
          "supplyCap": 32.0,
          "workers": 17
        },
        {
          "t": 200.0,
          "minerals": 165,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 22.0,
          "supplyCap": 32.0,
          "workers": 16
        },
        {
          "t": 207.14285714285717,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 1007,
          "gasRate": 0,
          "supplyUsed": 26.0,
          "supplyCap": 32.0,
          "workers": 16
        },
        {
          "t": 214.2857142857143,
          "minerals": 190,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 0,
          "supplyUsed": 26.0,
          "supplyCap": 24.0,
          "workers": 16
        },
        {
          "t": 221.42857142857144,
          "minerals": 200,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 0,
          "supplyUsed": 26.0,
          "supplyCap": 24.0,
          "workers": 18
        },
        {
          "t": 228.57142857142858,
          "minerals": 185,
          "gas": 16,
          "mineralRate": 783,
          "gasRate": 89,
          "supplyUsed": 26.0,
          "supplyCap": 24.0,
          "workers": 18
        },
        {
          "t": 235.71428571428572,
          "minerals": 40,
          "gas": 36,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 29.0,
          "supplyCap": 32.0,
          "workers": 18
        },
        {
          "t": 242.85714285714286,
          "minerals": 95,
          "gas": 56,
          "mineralRate": 895,
          "gasRate": 156,
          "supplyUsed": 30.0,
          "supplyCap": 32.0,
          "workers": 18
        },
        {
          "t": 250.00000000000003,
          "minerals": 100,
          "gas": 76,
          "mineralRate": 923,
          "gasRate": 179,
          "supplyUsed": 31.5,
          "supplyCap": 48.0,
          "workers": 21
        },
        {
          "t": 257.14285714285717,
          "minerals": 70,
          "gas": 96,
          "mineralRate": 951,
          "gasRate": 179,
          "supplyUsed": 34.0,
          "supplyCap": 48.0,
          "workers": 24
        },
        {
          "t": 264.2857142857143,
          "minerals": 115,
          "gas": 4,
          "mineralRate": 1147,
          "gasRate": 111,
          "supplyUsed": 34.0,
          "supplyCap": 48.0,
          "workers": 24
        },
        {
          "t": 271.42857142857144,
          "minerals": 70,
          "gas": 12,
          "mineralRate": 1315,
          "gasRate": 67,
          "supplyUsed": 38.0,
          "supplyCap": 48.0,
          "workers": 27
        },
        {
          "t": 278.5714285714286,
          "minerals": 245,
          "gas": 16,
          "mineralRate": 1427,
          "gasRate": 44,
          "supplyUsed": 37.5,
          "supplyCap": 48.0,
          "workers": 27
        },
        {
          "t": 285.7142857142857,
          "minerals": 420,
          "gas": 24,
          "mineralRate": 1483,
          "gasRate": 67,
          "supplyUsed": 37.5,
          "supplyCap": 48.0,
          "workers": 27
        },
        {
          "t": 292.8571428571429,
          "minerals": 150,
          "gas": 32,
          "mineralRate": 1483,
          "gasRate": 67,
          "supplyUsed": 44.5,
          "supplyCap": 48.0,
          "workers": 27
        },
        {
          "t": 300.0,
          "minerals": 270,
          "gas": 36,
          "mineralRate": 1427,
          "gasRate": 44,
          "supplyUsed": 45.5,
          "supplyCap": 48.0,
          "workers": 27
        }
      ]
    }
  },
  {
    "label": "ChangAn vs SortOf ZvZ -- SortOf (Zerg) on Rainfall LE",
    "race": "Zerg",
    "replay": {
      "source": "ChangAn_vs_SortOf_ZvZ_2026-06-23.SC2Replay",
      "map": "Rainfall LE",
      "length": 980.0892857142858,
      "patch": "5.0.16.97364",
      "player": {
        "name": "SortOf",
        "race": "Zerg",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 0.5803571428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 10.089285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 10.669642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 12.723214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.723214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 17.67857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.17857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 22.8125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 22.8125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 22.946428571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 29.687500000000004,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 29.821428571428573,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 29.821428571428573,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 33.61607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 35.089285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 35.089285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 39.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 39.50892857142858,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 39.910714285714285,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 48.705357142857146,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 51.47321428571429,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 51.47321428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 52.05357142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 52.05357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 52.23214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 52.276785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 58.214285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 59.151785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 64.375,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 64.375,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 64.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 64.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 67.72321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 71.29464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 71.29464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 74.46428571428572,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 77.23214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 78.66071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 81.78571428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 86.74107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 86.78571428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 90.80357142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 90.80357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 93.92857142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 93.92857142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 96.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 98.34821428571429,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 98.92857142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 98.92857142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 100.3125,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 103.97321428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 105.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 107.54464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 115.26785714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 116.11607142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 116.11607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 117.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 119.68750000000001,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 119.68750000000001,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 119.77678571428572,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 124.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 129.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 130.04464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 130.04464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 134.2857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 142.00892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 142.00892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 143.79464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 145.89285714285714,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 145.89285714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 146.74107142857144,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 147.45535714285714,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 147.45535714285714,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 153.30357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 153.75,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 153.75,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 155.40178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 157.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 162.8125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 164.5982142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 164.5982142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 164.5982142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 164.5982142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 164.5982142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 164.5982142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 164.9107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 170.89285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 170.89285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 170.89285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 170.89285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 170.89285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 170.89285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 172.32142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 173.30357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 173.30357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 174.41964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 174.64285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 174.64285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 174.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 178.30357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 181.83035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.67857142857144,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 183.92857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 185.44642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 185.44642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 185.44642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 185.44642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 186.07142857142858,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 187.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 190.44642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 190.44642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 191.33928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 193.21428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 193.4375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 196.1607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 196.7857142857143,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 196.875,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 199.50892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 199.50892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 200.17857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 200.8482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 202.94642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 205.35714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 205.35714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 208.30357142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 208.30357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 210.3125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 210.35714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.32142857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 212.32142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 212.45535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 214.55357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 217.5,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 217.8125,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 219.19642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 219.86607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 224.06250000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 225.93750000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 225.93750000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 226.69642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 226.69642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 228.16964285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 228.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 229.37500000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 229.41964285714286,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 229.50892857142858,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 231.33928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 231.33928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 231.38392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 233.57142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 233.9732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 233.9732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 238.08035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 238.08035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 238.08035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 238.08035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 238.12500000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 238.88392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.08035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 245.08928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 246.11607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 246.11607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 246.11607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 246.11607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.39285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 248.52678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.52678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.52678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.06250000000003,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 250.80357142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 252.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 252.32142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 252.58928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.58928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.76785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.94642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.26785714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 255.26785714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 255.26785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 257.9017857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 261.0267857142857,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 261.11607142857144,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 262.9464285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 262.9464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 263.9732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 264.1071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 264.4196428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 264.4196428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 264.4642857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 264.4642857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 267.4107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 270.58035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.08035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.08035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.4375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 276.11607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 276.11607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.25,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 276.25,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.9196428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 281.3392857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 282.7232142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 282.7232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 282.9464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.4196428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.5982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.7767857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 285.2232142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 285.2232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 285.2232142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 285.2232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 286.42857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 292.1875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.1875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.8571428571429,
          "event": "start",
          "name": "EvolutionChamber"
        },
        {
          "t": 294.4196428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 294.5982142857143,
          "event": "start",
          "name": "RoachWarren"
        },
        {
          "t": 295.89285714285717,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 295.9375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 296.6964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.75,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 299.1964285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 299.1964285714286,
          "event": "morph",
          "name": "Larva"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 293,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 60,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 49,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 134,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 119,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 164,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 259,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 78.57142857142857,
          "minerals": 49,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 64,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 119,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 100.0,
          "minerals": 199,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 64,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 129,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 184,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 0,
          "supplyUsed": 19.0,
          "supplyCap": 20.0,
          "workers": 18
        },
        {
          "t": 128.57142857142858,
          "minerals": 299,
          "gas": 8,
          "mineralRate": 895,
          "gasRate": 44,
          "supplyUsed": 19.0,
          "supplyCap": 20.0,
          "workers": 18
        },
        {
          "t": 135.71428571428572,
          "minerals": 344,
          "gas": 16,
          "mineralRate": 895,
          "gasRate": 67,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 409,
          "gas": 28,
          "mineralRate": 643,
          "gasRate": 89,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 20
        },
        {
          "t": 150.0,
          "minerals": 169,
          "gas": 28,
          "mineralRate": 251,
          "gasRate": 22,
          "supplyUsed": 23.0,
          "supplyCap": 24.0,
          "workers": 19
        },
        {
          "t": 157.14285714285714,
          "minerals": 104,
          "gas": 28,
          "mineralRate": 307,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 24.0,
          "workers": 14
        },
        {
          "t": 164.2857142857143,
          "minerals": 94,
          "gas": 28,
          "mineralRate": 335,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 24.0,
          "workers": 13
        },
        {
          "t": 171.42857142857144,
          "minerals": 124,
          "gas": 28,
          "mineralRate": 307,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 24.0,
          "workers": 12
        },
        {
          "t": 178.57142857142858,
          "minerals": 14,
          "gas": 28,
          "mineralRate": 307,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 24.0,
          "workers": 9
        },
        {
          "t": 185.71428571428572,
          "minerals": 59,
          "gas": 28,
          "mineralRate": 391,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 24.0,
          "workers": 10
        },
        {
          "t": 192.85714285714286,
          "minerals": 74,
          "gas": 28,
          "mineralRate": 475,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 24.0,
          "workers": 11
        },
        {
          "t": 200.0,
          "minerals": 49,
          "gas": 28,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 19.0,
          "supplyCap": 24.0,
          "workers": 12
        },
        {
          "t": 207.14285714285717,
          "minerals": 79,
          "gas": 28,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 24.0,
          "workers": 13
        },
        {
          "t": 214.2857142857143,
          "minerals": 74,
          "gas": 28,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 24.0,
          "workers": 15
        },
        {
          "t": 221.42857142857144,
          "minerals": 69,
          "gas": 28,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 22.0,
          "supplyCap": 24.0,
          "workers": 15
        },
        {
          "t": 228.57142857142858,
          "minerals": 79,
          "gas": 32,
          "mineralRate": 867,
          "gasRate": 22,
          "supplyUsed": 24.0,
          "supplyCap": 32.0,
          "workers": 16
        },
        {
          "t": 235.71428571428572,
          "minerals": 19,
          "gas": 40,
          "mineralRate": 839,
          "gasRate": 67,
          "supplyUsed": 27.0,
          "supplyCap": 32.0,
          "workers": 17
        },
        {
          "t": 242.85714285714286,
          "minerals": 89,
          "gas": 48,
          "mineralRate": 951,
          "gasRate": 67,
          "supplyUsed": 28.0,
          "supplyCap": 32.0,
          "workers": 19
        },
        {
          "t": 250.00000000000003,
          "minerals": 104,
          "gas": 56,
          "mineralRate": 951,
          "gasRate": 67,
          "supplyUsed": 28.0,
          "supplyCap": 32.0,
          "workers": 21
        },
        {
          "t": 257.14285714285717,
          "minerals": 154,
          "gas": 60,
          "mineralRate": 1175,
          "gasRate": 44,
          "supplyUsed": 30.0,
          "supplyCap": 32.0,
          "workers": 21
        },
        {
          "t": 264.2857142857143,
          "minerals": 4,
          "gas": 68,
          "mineralRate": 1175,
          "gasRate": 44,
          "supplyUsed": 34.0,
          "supplyCap": 40.0,
          "workers": 21
        },
        {
          "t": 271.42857142857144,
          "minerals": 89,
          "gas": 76,
          "mineralRate": 1203,
          "gasRate": 67,
          "supplyUsed": 35.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 278.5714285714286,
          "minerals": 159,
          "gas": 84,
          "mineralRate": 1287,
          "gasRate": 67,
          "supplyUsed": 37.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 285.7142857142857,
          "minerals": 199,
          "gas": 92,
          "mineralRate": 1287,
          "gasRate": 67,
          "supplyUsed": 37.0,
          "supplyCap": 40.0,
          "workers": 28
        },
        {
          "t": 292.8571428571429,
          "minerals": 39,
          "gas": 100,
          "mineralRate": 1455,
          "gasRate": 67,
          "supplyUsed": 36.5,
          "supplyCap": 40.0,
          "workers": 28
        },
        {
          "t": 300.0,
          "minerals": 109,
          "gas": 104,
          "mineralRate": 1371,
          "gasRate": 44,
          "supplyUsed": 34.0,
          "supplyCap": 48.0,
          "workers": 26
        }
      ]
    }
  },
  {
    "label": "Clem vs Elazer TvZ -- liquidclem (Terran) on Sanctuary III LE",
    "race": "Terran",
    "replay": {
      "source": "Clem_vs_Elazer_TvZ_2026-07-03.SC2Replay",
      "map": "Sanctuary III LE",
      "length": 623.3035714285714,
      "patch": "5.0.16.97425",
      "player": {
        "name": "liquidclem",
        "race": "Terran",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "upgrade",
          "name": "GameHeartActive"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 12.455357142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 24.55357142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 27.5,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 36.651785714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 48.75,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 48.92857142857143,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 50.66964285714286,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 53.392857142857146,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 60.84821428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 65.35714285714286,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 72.94642857142857,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 85.04464285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 86.78571428571429,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 97.14285714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 99.82142857142858,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 124.91071428571429,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 125.26785714285715,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 125.26785714285715,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 130.2232142857143,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 137.32142857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 141.74107142857144,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 144.64285714285714,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 149.41964285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 159.01785714285714,
          "event": "start",
          "name": "Factory"
        },
        {
          "t": 161.51785714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 162.32142857142858,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 164.01785714285717,
          "event": "start",
          "name": "BarracksReactor"
        },
        {
          "t": 165.8482142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 166.07142857142858,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 172.76785714285717,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 178.21428571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 180.49107142857144,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 189.82142857142858,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 189.82142857142858,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 190.3125,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 194.19642857142858,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 199.73214285714286,
          "event": "done",
          "name": "BarracksReactor"
        },
        {
          "t": 201.65178571428572,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 201.875,
          "event": "done",
          "name": "Factory"
        },
        {
          "t": 202.4107142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 202.8125,
          "event": "morph",
          "name": "FactoryFlying"
        },
        {
          "t": 202.99107142857144,
          "event": "morph",
          "name": "BarracksFlying"
        },
        {
          "t": 203.0357142857143,
          "event": "morph",
          "name": "Reactor"
        },
        {
          "t": 205.13392857142858,
          "event": "start",
          "name": "Starport"
        },
        {
          "t": 207.8125,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 208.79464285714286,
          "event": "morph",
          "name": "Factory"
        },
        {
          "t": 208.83928571428572,
          "event": "morph",
          "name": "FactoryReactor"
        },
        {
          "t": 211.1607142857143,
          "event": "morph",
          "name": "Barracks"
        },
        {
          "t": 214.82142857142858,
          "event": "start",
          "name": "BarracksTechLab"
        },
        {
          "t": 218.25892857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 229.2857142857143,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 229.55357142857144,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 230.35714285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 230.5357142857143,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 230.71428571428572,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 230.71428571428572,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 231.69642857142858,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 232.67857142857144,
          "event": "done",
          "name": "BarracksTechLab"
        },
        {
          "t": 240.8482142857143,
          "event": "done",
          "name": "Starport"
        },
        {
          "t": 241.87500000000003,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 243.0357142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 250.71428571428572,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 252.99107142857144,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 252.99107142857144,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 253.16964285714286,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 253.92857142857144,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 253.9732142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 255.13392857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 259.01785714285717,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 260.26785714285717,
          "event": "morph",
          "name": "FactoryFlying"
        },
        {
          "t": 260.3125,
          "event": "morph",
          "name": "Reactor"
        },
        {
          "t": 264.4642857142857,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 266.0714285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 266.42857142857144,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 267.2321428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 273.1696428571429,
          "event": "morph",
          "name": "Factory"
        },
        {
          "t": 273.1696428571429,
          "event": "start",
          "name": "FactoryReactor"
        },
        {
          "t": 275.3571428571429,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 275.58035714285717,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 276.3392857142857,
          "event": "born",
          "name": "Viking"
        },
        {
          "t": 280.625,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 281.9196428571429,
          "event": "start",
          "name": "StarportReactor"
        },
        {
          "t": 282.5446428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 283.61607142857144,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 283.70535714285717,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 290.5357142857143,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 293.92857142857144,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 293.92857142857144,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 294.5982142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 295.7142857142857,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 297.0982142857143,
          "event": "born",
          "name": "SCV"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 251,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 10,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 115,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 65,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 78.57142857142857,
          "minerals": 55,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 140,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 220,
          "gas": 8,
          "mineralRate": 699,
          "gasRate": 44,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 100.0,
          "minerals": 150,
          "gas": 28,
          "mineralRate": 643,
          "gasRate": 156,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 235,
          "gas": 48,
          "mineralRate": 727,
          "gasRate": 156,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 275,
          "gas": 18,
          "mineralRate": 755,
          "gasRate": 156,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 360,
          "gas": 38,
          "mineralRate": 755,
          "gasRate": 156,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 128.57142857142858,
          "minerals": 380,
          "gas": 58,
          "mineralRate": 699,
          "gasRate": 179,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 135.71428571428572,
          "minerals": 90,
          "gas": 78,
          "mineralRate": 839,
          "gasRate": 179,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 142.85714285714286,
          "minerals": 140,
          "gas": 94,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 40,
          "gas": 114,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 157.14285714285714,
          "minerals": 145,
          "gas": 134,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 164.2857142857143,
          "minerals": 0,
          "gas": 4,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 171.42857142857144,
          "minerals": 30,
          "gas": 24,
          "mineralRate": 839,
          "gasRate": 179,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 178.57142857142858,
          "minerals": 90,
          "gas": 44,
          "mineralRate": 839,
          "gasRate": 179,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 185.71428571428572,
          "minerals": 205,
          "gas": 60,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 192.85714285714286,
          "minerals": 265,
          "gas": 80,
          "mineralRate": 895,
          "gasRate": 156,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 200.0,
          "minerals": 390,
          "gas": 108,
          "mineralRate": 923,
          "gasRate": 201,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 207.14285714285717,
          "minerals": 160,
          "gas": 48,
          "mineralRate": 1063,
          "gasRate": 313,
          "supplyUsed": 24.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 214.2857142857143,
          "minerals": 85,
          "gas": 88,
          "mineralRate": 1119,
          "gasRate": 313,
          "supplyUsed": 28.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 221.42857142857144,
          "minerals": 115,
          "gas": 103,
          "mineralRate": 1147,
          "gasRate": 358,
          "supplyUsed": 29.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 228.57142857142858,
          "minerals": 145,
          "gas": 139,
          "mineralRate": 1175,
          "gasRate": 335,
          "supplyUsed": 29.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 235.71428571428572,
          "minerals": 80,
          "gas": 175,
          "mineralRate": 1175,
          "gasRate": 313,
          "supplyUsed": 33.0,
          "supplyCap": 42.0,
          "workers": 24
        },
        {
          "t": 242.85714285714286,
          "minerals": 35,
          "gas": 215,
          "mineralRate": 1175,
          "gasRate": 313,
          "supplyUsed": 36.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 250.00000000000003,
          "minerals": 85,
          "gas": 180,
          "mineralRate": 1427,
          "gasRate": 313,
          "supplyUsed": 39.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 257.14285714285717,
          "minerals": 70,
          "gas": 220,
          "mineralRate": 1399,
          "gasRate": 313,
          "supplyUsed": 41.0,
          "supplyCap": 50.0,
          "workers": 28
        },
        {
          "t": 264.2857142857143,
          "minerals": 95,
          "gas": 110,
          "mineralRate": 1427,
          "gasRate": 335,
          "supplyUsed": 41.0,
          "supplyCap": 50.0,
          "workers": 28
        },
        {
          "t": 271.42857142857144,
          "minerals": 40,
          "gas": 146,
          "mineralRate": 1595,
          "gasRate": 335,
          "supplyUsed": 43.0,
          "supplyCap": 50.0,
          "workers": 30
        },
        {
          "t": 278.5714285714286,
          "minerals": 25,
          "gas": 182,
          "mineralRate": 1623,
          "gasRate": 313,
          "supplyUsed": 44.0,
          "supplyCap": 58.0,
          "workers": 30
        },
        {
          "t": 285.7142857142857,
          "minerals": 30,
          "gas": 172,
          "mineralRate": 1735,
          "gasRate": 313,
          "supplyUsed": 46.0,
          "supplyCap": 58.0,
          "workers": 32
        },
        {
          "t": 292.8571428571429,
          "minerals": 45,
          "gas": 212,
          "mineralRate": 1707,
          "gasRate": 313,
          "supplyUsed": 46.0,
          "supplyCap": 58.0,
          "workers": 32
        },
        {
          "t": 300.0,
          "minerals": 170,
          "gas": 252,
          "mineralRate": 1539,
          "gasRate": 313,
          "supplyUsed": 49.0,
          "supplyCap": 58.0,
          "workers": 34
        }
      ]
    }
  },
  {
    "label": "Clem vs Elazer TvZ -- Elazer (Zerg) on Sanctuary III LE",
    "race": "Zerg",
    "replay": {
      "source": "Clem_vs_Elazer_TvZ_2026-07-03.SC2Replay",
      "map": "Sanctuary III LE",
      "length": 623.3035714285714,
      "patch": "5.0.16.97425",
      "player": {
        "name": "Elazer",
        "race": "Zerg",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "upgrade",
          "name": "GameHeartActive"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "OverseerCocoon"
        },
        {
          "t": 0.26785714285714285,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 10.178571428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 10.669642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 12.410714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.410714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 16.383928571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.580357142857146,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 22.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 22.8125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 22.8125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 28.526785714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 28.526785714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 30.49107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 32.723214285714285,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 34.642857142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 34.642857142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 39.776785714285715,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 39.86607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 40.401785714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 50.3125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 50.580357142857146,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 50.580357142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 50.66964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 51.11607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 52.00892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 52.00892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 60.22321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 61.07142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 62.81250000000001,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 62.81250000000001,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 63.25892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 63.25892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 67.67857142857143,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 70.13392857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 71.02678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 73.21428571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 73.21428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 80.04464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 80.13392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 83.16964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 83.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 89.95535714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 92.27678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 92.27678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 95.35714285714286,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 98.97321428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 99.86607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 102.1875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 109.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 111.11607142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 111.11607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 112.32142857142858,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 114.10714285714286,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 114.33035714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 114.33035714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 118.70535714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 119.68750000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 121.65178571428572,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 122.81250000000001,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 129.5982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 130.8482142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 130.8482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 131.5625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 133.75,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 134.95535714285714,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 134.95535714285714,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 139.50892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 149.41964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 149.41964285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 149.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 150.625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 150.625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 151.20535714285714,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 151.65178571428572,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 159.33035714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 160.13392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 162.76785714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 162.76785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 162.76785714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 162.76785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 166.7857142857143,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 166.7857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 169.24107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 170.04464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 171.91964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 172.27678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 172.27678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 176.69642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 179.15178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 180.40178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 180.58035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 180.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.1875,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 182.1875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 184.95535714285717,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 185.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 185.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 185.5357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 186.60714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.875,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 189.77678571428572,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 189.77678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 190.04464285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 190.8482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 190.8482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 194.01785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 196.51785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 197.63392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 197.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 197.63392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 197.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 197.67857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 197.67857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 202.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 202.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 202.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 202.99107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 202.99107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 202.99107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 202.99107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 203.30357142857144,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 203.92857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 203.92857142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 204.95535714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 206.42857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 207.32142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 207.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 210.13392857142858,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 213.83928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 214.64285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 214.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 214.64285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 214.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 214.64285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 214.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 216.33928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 218.70535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 218.83928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 219.01785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 219.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 219.41964285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 219.46428571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 219.46428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 219.64285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 219.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 220.8482142857143,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 220.9375,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 221.02678571428572,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 221.65178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 223.52678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 226.20535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 226.25000000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 230.93750000000003,
          "event": "start",
          "name": "BanelingNest"
        },
        {
          "t": 231.74107142857144,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 231.91964285714286,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 232.00892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 233.79464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 233.79464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 233.79464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 233.9732142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 234.15178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 235.66964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 235.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 236.11607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 236.56250000000003,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 236.56250000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 236.60714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.18750000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.76785714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 239.37500000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 239.37500000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 243.0357142857143,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 244.15178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 244.15178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 244.5982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 244.5982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 244.5982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 247.18750000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 248.16964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 248.3482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 248.52678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 248.9732142857143,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 249.33035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.33035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 250.31250000000003,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 250.93750000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 251.07142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 251.51785714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 251.51785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 252.63392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 253.25892857142858,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 253.75000000000003,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 253.75000000000003,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 253.75000000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 254.50892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.44642857142858,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 255.5357142857143,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 255.58035714285717,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 255.89285714285717,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 256.11607142857144,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 256.42857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 256.74107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 256.74107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 256.74107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 256.74107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 256.74107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 256.74107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 259.8214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 262.3214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 263.08035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 263.08035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 263.2142857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 263.2142857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 264.4196428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 266.25,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 266.3392857142857,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 266.51785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 266.6964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 266.875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 268.2142857142857,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 268.2589285714286,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 268.5714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 268.5714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 269.64285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 269.7321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 270.4017857142857,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 270.49107142857144,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 270.49107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 270.9821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 271.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 271.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 271.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 271.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 271.4732142857143,
          "event": "morph",
          "name": "Lair"
        },
        {
          "t": 271.74107142857144,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 272.4107142857143,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 273.7946428571429,
          "event": "done",
          "name": "BanelingNest"
        },
        {
          "t": 277.5446428571429,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 279.01785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 279.64285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 280.0,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 280.17857142857144,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 280.17857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 282.0089285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 282.1875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 282.36607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 286.11607142857144,
          "event": "start",
          "name": "Spire"
        },
        {
          "t": 287.5,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 287.5,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 287.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 288.125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 288.3482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 288.92857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 289.7321428571429,
          "event": "morph",
          "name": "OverlordCocoon"
        },
        {
          "t": 290.8482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.42857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.42857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.83035714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 292.8571428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 294.5089285714286,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 295.4017857142857,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 297.8571428571429,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 297.8571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 297.9464285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 298.7946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 298.8392857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 299.2857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 299.4196428571429,
          "event": "morph",
          "name": "Egg"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 251,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 419,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 60,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 59,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 129,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 129,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 164,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 71.42857142857143,
          "minerals": 4,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 14
        },
        {
          "t": 78.57142857142857,
          "minerals": 109,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 164,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 264,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 19,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 84,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 164,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 49,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 113,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 0,
          "supplyUsed": 21.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 113,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 0,
          "supplyUsed": 21.0,
          "supplyCap": 20.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 228,
          "gas": 20,
          "mineralRate": 979,
          "gasRate": 111,
          "supplyUsed": 21.0,
          "supplyCap": 20.0,
          "workers": 19
        },
        {
          "t": 150.0,
          "minerals": 338,
          "gas": 40,
          "mineralRate": 951,
          "gasRate": 179,
          "supplyUsed": 21.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 157.14285714285714,
          "minerals": 173,
          "gas": 56,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 25.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 164.2857142857143,
          "minerals": 238,
          "gas": 76,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 28.0,
          "workers": 21
        },
        {
          "t": 171.42857142857144,
          "minerals": 123,
          "gas": 96,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 29.0,
          "supplyCap": 32.0,
          "workers": 21
        },
        {
          "t": 178.57142857142858,
          "minerals": 138,
          "gas": 116,
          "mineralRate": 1007,
          "gasRate": 156,
          "supplyUsed": 29.0,
          "supplyCap": 32.0,
          "workers": 22
        },
        {
          "t": 185.71428571428572,
          "minerals": 18,
          "gas": 132,
          "mineralRate": 979,
          "gasRate": 134,
          "supplyUsed": 31.0,
          "supplyCap": 32.0,
          "workers": 22
        },
        {
          "t": 192.85714285714286,
          "minerals": 110,
          "gas": 152,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 34.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 200.0,
          "minerals": 120,
          "gas": 72,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 33.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 207.14285714285717,
          "minerals": 105,
          "gas": 92,
          "mineralRate": 1147,
          "gasRate": 156,
          "supplyUsed": 36.0,
          "supplyCap": 40.0,
          "workers": 27
        },
        {
          "t": 214.2857142857143,
          "minerals": 150,
          "gas": 112,
          "mineralRate": 1231,
          "gasRate": 179,
          "supplyUsed": 38.0,
          "supplyCap": 40.0,
          "workers": 27
        },
        {
          "t": 221.42857142857144,
          "minerals": 70,
          "gas": 32,
          "mineralRate": 1399,
          "gasRate": 179,
          "supplyUsed": 38.0,
          "supplyCap": 40.0,
          "workers": 32
        },
        {
          "t": 228.57142857142858,
          "minerals": 135,
          "gas": 48,
          "mineralRate": 1511,
          "gasRate": 156,
          "supplyUsed": 40.0,
          "supplyCap": 40.0,
          "workers": 32
        },
        {
          "t": 235.71428571428572,
          "minerals": 190,
          "gas": 18,
          "mineralRate": 1623,
          "gasRate": 156,
          "supplyUsed": 40.0,
          "supplyCap": 40.0,
          "workers": 33
        },
        {
          "t": 242.85714285714286,
          "minerals": 115,
          "gas": 38,
          "mineralRate": 1539,
          "gasRate": 156,
          "supplyUsed": 45.0,
          "supplyCap": 48.0,
          "workers": 33
        },
        {
          "t": 250.00000000000003,
          "minerals": 125,
          "gas": 58,
          "mineralRate": 1679,
          "gasRate": 156,
          "supplyUsed": 47.0,
          "supplyCap": 48.0,
          "workers": 36
        },
        {
          "t": 257.14285714285717,
          "minerals": 50,
          "gas": 78,
          "mineralRate": 1707,
          "gasRate": 156,
          "supplyUsed": 48.0,
          "supplyCap": 48.0,
          "workers": 38
        },
        {
          "t": 264.2857142857143,
          "minerals": 165,
          "gas": 98,
          "mineralRate": 1819,
          "gasRate": 179,
          "supplyUsed": 48.0,
          "supplyCap": 48.0,
          "workers": 40
        },
        {
          "t": 271.42857142857144,
          "minerals": 20,
          "gas": 114,
          "mineralRate": 1903,
          "gasRate": 156,
          "supplyUsed": 53.0,
          "supplyCap": 56.0,
          "workers": 41
        },
        {
          "t": 278.5714285714286,
          "minerals": 175,
          "gas": 50,
          "mineralRate": 1987,
          "gasRate": 246,
          "supplyUsed": 53.0,
          "supplyCap": 56.0,
          "workers": 41
        },
        {
          "t": 285.7142857142857,
          "minerals": 225,
          "gas": 60,
          "mineralRate": 1819,
          "gasRate": 425,
          "supplyUsed": 53.0,
          "supplyCap": 64.0,
          "workers": 41
        },
        {
          "t": 292.8571428571429,
          "minerals": 55,
          "gas": 90,
          "mineralRate": 1679,
          "gasRate": 627,
          "supplyUsed": 54.0,
          "supplyCap": 72.0,
          "workers": 40
        },
        {
          "t": 300.0,
          "minerals": 28,
          "gas": 104,
          "mineralRate": 1511,
          "gasRate": 627,
          "supplyUsed": 56.5,
          "supplyCap": 72.0,
          "workers": 40
        }
      ]
    }
  },
  {
    "label": "Fjant vs Lambo ZvZ -- Fjant (Zerg) on Rainfall LE",
    "race": "Zerg",
    "replay": {
      "source": "Fjant_vs_Lambo_ZvZ_2026-06-23.SC2Replay",
      "map": "Rainfall LE",
      "length": 421.9196428571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Fjant",
        "race": "Zerg",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 0.44642857142857145,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 9.955357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 10.669642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 12.589285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.589285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 16.383928571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.17857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 21.651785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 22.8125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 22.8125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 28.526785714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 28.526785714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 29.687500000000004,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 32.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 33.79464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 33.79464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 39.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 39.642857142857146,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 39.6875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 48.705357142857146,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 50.35714285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 50.35714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 51.339285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 51.830357142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 51.830357142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 52.276785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 58.214285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 58.839285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 63.48214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 63.48214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 64.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 64.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 66.16071428571429,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 67.72321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 70.08928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 70.98214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 70.98214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 77.23214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 77.36607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 82.23214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 82.23214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 86.74107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 89.50892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 89.50892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 93.88392857142858,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 96.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 98.39285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 102.41071428571429,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 105.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 110.53571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 110.53571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 112.58928571428572,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 112.63392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 112.76785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 115.26785714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 122.85714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 123.83928571428572,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 124.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 129.375,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 129.46428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 129.77678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 129.77678571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 129.77678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 129.9107142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 129.9107142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 129.9107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 134.2857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 140.71428571428572,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 140.71428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 141.60714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 141.60714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 143.0357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 143.79464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 149.2857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 152.58928571428572,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 153.30357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 153.83928571428572,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 155.17857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 155.17857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 157.63392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 161.42857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 161.42857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 162.8125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 165.3125,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 165.3125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 166.1607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 169.77678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 169.77678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 172.32142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 174.82142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 174.95535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 175.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 175.66964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 178.30357142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 178.30357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 181.83035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.7232142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.90178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 183.08035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 184.33035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 187.63392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 187.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 187.8125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 187.8125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 188.70535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 190.13392857142858,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 192.58928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 192.7232142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 192.8125,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 192.8125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 192.85714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 192.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 193.83928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 195.5357142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 196.5625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 198.30357142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 200.8482142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 200.8482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 201.02678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 203.3482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 205.44642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 206.07142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 209.73214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.73214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.73214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 209.86607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.86607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 209.86607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 210.0,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 210.0,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 210.0,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 210.04464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 210.04464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 210.04464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 210.5357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.85714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 213.70535714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 213.70535714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 213.70535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 217.23214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 217.94642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 218.21428571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 218.21428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 220.04464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 221.4732142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 222.36607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.25892857142858,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 223.30357142857144,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 223.30357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 223.79464285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 225.44642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 225.62500000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 225.80357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 226.51785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 227.18750000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 227.36607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 227.54464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 229.37500000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 229.37500000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 231.33928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.4732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.51785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.65178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 233.83928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 235.80357142857144,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 235.80357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 236.02678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 236.91964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.58928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 238.6607142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 238.6607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 242.58928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 242.7232142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 245.5357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 247.0982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 247.54464285714286,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 248.16964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 248.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.48214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.48214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.48214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.61607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.61607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.61607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.6607142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.6607142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.6607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.79464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.79464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.79464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.06250000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.06250000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.19642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.33035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.33035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 255.04464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.80357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.80357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 255.98214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 256.1607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 256.6071428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 256.7857142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 259.0625,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 259.7321428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 259.7321428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 259.7321428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 259.7321428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 259.86607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 259.86607142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 259.86607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 259.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 259.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 259.9107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 261.2946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 261.4732142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 261.6517857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 263.39285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 263.8392857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 266.3392857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 266.3392857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 266.3392857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.4732142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 266.4732142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 266.4732142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.4732142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 266.4732142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 266.4732142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 267.8571428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 268.125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 272.9464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 272.9464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 272.9464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.875,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 276.875,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 276.875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 277.0089285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.0089285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.0089285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 277.0089285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.0089285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.0089285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 277.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.05357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 277.36607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 277.6339285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 280.49107142857144,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 280.5357142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 280.5357142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 280.5357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.89285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 280.9821428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 280.9821428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 280.9821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.9821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 280.9821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 281.0714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 281.0714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 283.30357142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 285.5357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 285.7142857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 285.89285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 289.7321428571429,
          "event": "start",
          "name": "RoachWarren"
        },
        {
          "t": 289.9107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 290.0892857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 290.26785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 294.6875,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 294.6875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 298.0357142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.0357142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.0357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 298.125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 298.125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 298.2142857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.2142857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.2142857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 298.2142857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.2142857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 298.2142857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 298.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 299.4642857142857,
          "event": "born",
          "name": "Larva"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 293,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 65,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 64,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 154,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 144,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 184,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 14
        },
        {
          "t": 71.42857142857143,
          "minerals": 29,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 74,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 184,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 289,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 44,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 134,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 114.28571428571429,
          "minerals": 149,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 79,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 128.57142857142858,
          "minerals": 64,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 135.71428571428572,
          "minerals": 123,
          "gas": 20,
          "mineralRate": 783,
          "gasRate": 111,
          "supplyUsed": 21.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 142.85714285714286,
          "minerals": 208,
          "gas": 40,
          "mineralRate": 755,
          "gasRate": 179,
          "supplyUsed": 21.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 208,
          "gas": 56,
          "mineralRate": 755,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 157.14285714285714,
          "minerals": 138,
          "gas": 76,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 25.0,
          "supplyCap": 28.0,
          "workers": 18
        },
        {
          "t": 164.2857142857143,
          "minerals": 188,
          "gas": 96,
          "mineralRate": 839,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 171.42857142857144,
          "minerals": 148,
          "gas": 16,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 27.0,
          "supplyCap": 32.0,
          "workers": 20
        },
        {
          "t": 178.57142857142858,
          "minerals": 53,
          "gas": 24,
          "mineralRate": 895,
          "gasRate": 89,
          "supplyUsed": 29.0,
          "supplyCap": 32.0,
          "workers": 21
        },
        {
          "t": 185.71428571428572,
          "minerals": 188,
          "gas": 32,
          "mineralRate": 1063,
          "gasRate": 44,
          "supplyUsed": 29.0,
          "supplyCap": 32.0,
          "workers": 21
        },
        {
          "t": 192.85714285714286,
          "minerals": 163,
          "gas": 40,
          "mineralRate": 1147,
          "gasRate": 67,
          "supplyUsed": 31.5,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 200.0,
          "minerals": 178,
          "gas": 44,
          "mineralRate": 1343,
          "gasRate": 44,
          "supplyUsed": 34.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 207.14285714285717,
          "minerals": 178,
          "gas": 52,
          "mineralRate": 1287,
          "gasRate": 44,
          "supplyUsed": 34.5,
          "supplyCap": 40.0,
          "workers": 24
        },
        {
          "t": 214.2857142857143,
          "minerals": 313,
          "gas": 60,
          "mineralRate": 1259,
          "gasRate": 67,
          "supplyUsed": 34.0,
          "supplyCap": 40.0,
          "workers": 24
        },
        {
          "t": 221.42857142857144,
          "minerals": 343,
          "gas": 68,
          "mineralRate": 1315,
          "gasRate": 67,
          "supplyUsed": 35.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 228.57142857142858,
          "minerals": 123,
          "gas": 72,
          "mineralRate": 1259,
          "gasRate": 44,
          "supplyUsed": 35.0,
          "supplyCap": 48.0,
          "workers": 24
        },
        {
          "t": 235.71428571428572,
          "minerals": 83,
          "gas": 80,
          "mineralRate": 1315,
          "gasRate": 67,
          "supplyUsed": 39.0,
          "supplyCap": 48.0,
          "workers": 25
        },
        {
          "t": 242.85714285714286,
          "minerals": 43,
          "gas": 96,
          "mineralRate": 1287,
          "gasRate": 111,
          "supplyUsed": 43.0,
          "supplyCap": 56.0,
          "workers": 26
        },
        {
          "t": 250.00000000000003,
          "minerals": 43,
          "gas": 112,
          "mineralRate": 1287,
          "gasRate": 156,
          "supplyUsed": 46.0,
          "supplyCap": 56.0,
          "workers": 28
        },
        {
          "t": 257.14285714285717,
          "minerals": 153,
          "gas": 132,
          "mineralRate": 1343,
          "gasRate": 156,
          "supplyUsed": 46.5,
          "supplyCap": 56.0,
          "workers": 28
        },
        {
          "t": 264.2857142857143,
          "minerals": 3,
          "gas": 152,
          "mineralRate": 1343,
          "gasRate": 156,
          "supplyUsed": 51.5,
          "supplyCap": 56.0,
          "workers": 27
        },
        {
          "t": 271.42857142857144,
          "minerals": 173,
          "gas": 172,
          "mineralRate": 1343,
          "gasRate": 156,
          "supplyUsed": 51.0,
          "supplyCap": 56.0,
          "workers": 27
        },
        {
          "t": 278.5714285714286,
          "minerals": 333,
          "gas": 192,
          "mineralRate": 1455,
          "gasRate": 179,
          "supplyUsed": 48.0,
          "supplyCap": 56.0,
          "workers": 27
        },
        {
          "t": 285.7142857142857,
          "minerals": 258,
          "gas": 212,
          "mineralRate": 1343,
          "gasRate": 179,
          "supplyUsed": 49.0,
          "supplyCap": 56.0,
          "workers": 27
        },
        {
          "t": 292.8571428571429,
          "minerals": 263,
          "gas": 228,
          "mineralRate": 1455,
          "gasRate": 156,
          "supplyUsed": 48.0,
          "supplyCap": 56.0,
          "workers": 26
        },
        {
          "t": 300.0,
          "minerals": 318,
          "gas": 248,
          "mineralRate": 1371,
          "gasRate": 156,
          "supplyUsed": 47.5,
          "supplyCap": 60.0,
          "workers": 26
        }
      ]
    }
  },
  {
    "label": "Fjant vs Lambo ZvZ -- Lambo (Zerg) on Rainfall LE",
    "race": "Zerg",
    "replay": {
      "source": "Fjant_vs_Lambo_ZvZ_2026-06-23.SC2Replay",
      "map": "Rainfall LE",
      "length": 421.9196428571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Lambo",
        "race": "Zerg",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 0.4910714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 10.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 10.892857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 12.633928571428573,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.633928571428573,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 16.071428571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.401785714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 20.892857142857146,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 23.03571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 23.03571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 28.214285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 28.214285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 29.91071428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 32.589285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 33.035714285714285,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 33.035714285714285,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 39.41964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 39.642857142857146,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 39.6875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 48.92857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 50.44642857142858,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 50.44642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 50.49107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 50.49107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 51.830357142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 51.830357142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 58.43750000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 58.48214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 62.63392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 62.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 62.63392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 62.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 66.51785714285715,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 67.94642857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 70.49107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 70.625,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 70.625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 77.45535714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 78.125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 82.63392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 82.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 86.96428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 90.26785714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 90.26785714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 94.59821428571429,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 96.47321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 97.8125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 100.75892857142858,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 102.09821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 105.98214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 109.95535714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 109.95535714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 112.94642857142858,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 114.24107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 114.24107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 115.49107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 120.62500000000001,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 122.18750000000001,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 125.00000000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 125.75892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 129.19642857142858,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 129.19642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 134.50892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 137.90178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 137.90178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 138.48214285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 138.48214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 141.33928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 141.33928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 142.14285714285714,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 144.01785714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 147.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 151.25,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 151.65178571428572,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 153.52678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 153.75,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 159.2857142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 159.2857142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 159.2857142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 160.04464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 160.04464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 163.0357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 163.21428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 165.89285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 165.89285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 166.02678571428572,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 166.02678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 166.69642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 172.54464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 174.82142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 175.35714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 175.35714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 175.5357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 178.125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 178.83928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 178.83928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 180.49107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 180.66964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 180.8482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 182.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 182.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 183.39285714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 183.48214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 185.04464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.91964285714286,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 191.96428571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 191.96428571428572,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 191.96428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 192.94642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 192.99107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 194.10714285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 194.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 194.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 194.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 194.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 194.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 194.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 194.55357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 195.98214285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 195.98214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 197.1875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 197.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 197.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 202.5,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 204.0625,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 205.08928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 205.08928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 207.8125,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 209.33035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 209.33035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 209.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 209.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 209.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 209.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 212.00892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.14285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.32142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.5,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 214.46428571428572,
          "event": "start",
          "name": "BanelingNest"
        },
        {
          "t": 214.55357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 215.98214285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 217.8125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 217.94642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 219.9107142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 221.11607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 221.51785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 222.36607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 222.99107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.16964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.3482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.88392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 226.51785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.11607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.25000000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.69642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 231.69642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 231.69642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 233.39285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 234.95535714285717,
          "event": "born",
          "name": "BanelingCocoon"
        },
        {
          "t": 234.95535714285717,
          "event": "born",
          "name": "BanelingCocoon"
        },
        {
          "t": 234.95535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 235.00000000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 235.08928571428572,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 235.08928571428572,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 235.08928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 238.25892857142858,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 238.25892857142858,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 238.25892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 239.37500000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 241.29464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 241.74107142857144,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 241.74107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 242.90178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.6607142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 243.6607142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 243.6607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 244.41964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 246.91964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 247.0982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 247.23214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 247.27678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 247.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 248.0357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 248.25892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.25892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.25892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.39285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.39285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.39285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 251.60714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 251.7857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 251.87500000000003,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 251.96428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.14285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 252.14285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 252.14285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 256.6517857142857,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 257.2321428571429,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 257.2321428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 257.3214285714286,
          "event": "done",
          "name": "BanelingNest"
        },
        {
          "t": 258.1696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 258.1696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 258.1696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 259.1517857142857,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 259.1517857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 259.4196428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 261.5625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 261.5625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 261.5625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 263.30357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 264.1964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 265.0446428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 265.0446428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 265.0446428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 265.17857142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 265.17857142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 265.17857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 267.36607142857144,
          "event": "morph",
          "name": "BanelingCocoon"
        },
        {
          "t": 267.76785714285717,
          "event": "morph",
          "name": "BanelingCocoon"
        },
        {
          "t": 268.61607142857144,
          "event": "morph",
          "name": "BanelingCocoon"
        },
        {
          "t": 269.0625,
          "event": "morph",
          "name": "BanelingCocoon"
        },
        {
          "t": 269.64285714285717,
          "event": "morph",
          "name": "BanelingCocoon"
        },
        {
          "t": 270.3125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 270.3125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 270.3125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 270.3125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 270.3125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 270.3125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 272.2767857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 272.3214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 272.45535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 272.8125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 275.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 275.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 276.5625,
          "event": "born",
          "name": "Baneling"
        },
        {
          "t": 276.5625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 276.5625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 278.61607142857144,
          "event": "morph",
          "name": "BanelingCocoon"
        },
        {
          "t": 279.24107142857144,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 279.24107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 281.6071428571429,
          "event": "morph",
          "name": "Baneling"
        },
        {
          "t": 281.7857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 281.7857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 282.0089285714286,
          "event": "morph",
          "name": "Baneling"
        },
        {
          "t": 282.3214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 282.8571428571429,
          "event": "morph",
          "name": "Baneling"
        },
        {
          "t": 284.4642857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 284.5982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 286.9196428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 287.0982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 287.2767857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 287.6339285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 287.6339285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 287.6339285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 287.6339285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 288.125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 288.2142857142857,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 288.6607142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 288.75,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 289.375,
          "event": "start",
          "name": "RoachWarren"
        },
        {
          "t": 289.4196428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 289.4196428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 289.4196428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 289.4642857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 289.4642857142857,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 289.4642857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 289.5982142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 289.5982142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 289.5982142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 291.2946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 291.6517857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.67857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 292.8571428571429,
          "event": "morph",
          "name": "Baneling"
        },
        {
          "t": 293.92857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 293.92857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 294.375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 294.55357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 294.7321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 297.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 297.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 297.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 297.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 297.45535714285717,
          "event": "morph",
          "name": "Egg"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 293,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 0,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 60,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 59,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 139,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 134,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 174,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 71.42857142857143,
          "minerals": 19,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 74,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 184,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 279,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 24,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 74,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 114.28571428571429,
          "minerals": 179,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 121.42857142857143,
          "minerals": 19,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 19.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 44,
          "gas": 4,
          "mineralRate": 895,
          "gasRate": 22,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 128,
          "gas": 12,
          "mineralRate": 923,
          "gasRate": 67,
          "supplyUsed": 21.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 142.85714285714286,
          "minerals": 188,
          "gas": 20,
          "mineralRate": 923,
          "gasRate": 67,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 150.0,
          "minerals": 253,
          "gas": 36,
          "mineralRate": 951,
          "gasRate": 111,
          "supplyUsed": 23.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 157.14285714285714,
          "minerals": 143,
          "gas": 56,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 164.2857142857143,
          "minerals": 203,
          "gas": 76,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 27.0,
          "supplyCap": 28.0,
          "workers": 20
        },
        {
          "t": 171.42857142857144,
          "minerals": 268,
          "gas": 96,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 28.0,
          "supplyCap": 32.0,
          "workers": 21
        },
        {
          "t": 178.57142857142858,
          "minerals": 138,
          "gas": 12,
          "mineralRate": 1007,
          "gasRate": 156,
          "supplyUsed": 29.0,
          "supplyCap": 32.0,
          "workers": 22
        },
        {
          "t": 185.71428571428572,
          "minerals": 113,
          "gas": 28,
          "mineralRate": 1035,
          "gasRate": 134,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 23
        },
        {
          "t": 192.85714285714286,
          "minerals": 233,
          "gas": 40,
          "mineralRate": 1035,
          "gasRate": 111,
          "supplyUsed": 31.0,
          "supplyCap": 32.0,
          "workers": 22
        },
        {
          "t": 200.0,
          "minerals": 173,
          "gas": 56,
          "mineralRate": 1091,
          "gasRate": 134,
          "supplyUsed": 35.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 207.14285714285717,
          "minerals": 318,
          "gas": 72,
          "mineralRate": 1175,
          "gasRate": 134,
          "supplyUsed": 35.0,
          "supplyCap": 40.0,
          "workers": 26
        },
        {
          "t": 214.2857142857143,
          "minerals": 68,
          "gas": 34,
          "mineralRate": 1287,
          "gasRate": 111,
          "supplyUsed": 34.0,
          "supplyCap": 40.0,
          "workers": 28
        },
        {
          "t": 221.42857142857144,
          "minerals": 28,
          "gas": 50,
          "mineralRate": 1343,
          "gasRate": 111,
          "supplyUsed": 36.0,
          "supplyCap": 40.0,
          "workers": 27
        },
        {
          "t": 228.57142857142858,
          "minerals": 53,
          "gas": 62,
          "mineralRate": 1371,
          "gasRate": 111,
          "supplyUsed": 37.0,
          "supplyCap": 40.0,
          "workers": 27
        },
        {
          "t": 235.71428571428572,
          "minerals": 83,
          "gas": 78,
          "mineralRate": 1483,
          "gasRate": 111,
          "supplyUsed": 40.0,
          "supplyCap": 40.0,
          "workers": 27
        },
        {
          "t": 242.85714285714286,
          "minerals": 43,
          "gas": 94,
          "mineralRate": 1399,
          "gasRate": 134,
          "supplyUsed": 40.0,
          "supplyCap": 48.0,
          "workers": 27
        },
        {
          "t": 250.00000000000003,
          "minerals": 73,
          "gas": 110,
          "mineralRate": 1483,
          "gasRate": 134,
          "supplyUsed": 43.0,
          "supplyCap": 48.0,
          "workers": 27
        },
        {
          "t": 257.14285714285717,
          "minerals": 258,
          "gas": 122,
          "mineralRate": 1455,
          "gasRate": 111,
          "supplyUsed": 42.5,
          "supplyCap": 48.0,
          "workers": 27
        },
        {
          "t": 264.2857142857143,
          "minerals": 218,
          "gas": 138,
          "mineralRate": 1483,
          "gasRate": 134,
          "supplyUsed": 46.5,
          "supplyCap": 64.0,
          "workers": 27
        },
        {
          "t": 271.42857142857144,
          "minerals": 273,
          "gas": 25,
          "mineralRate": 1455,
          "gasRate": 111,
          "supplyUsed": 46.5,
          "supplyCap": 64.0,
          "workers": 30
        },
        {
          "t": 278.5714285714286,
          "minerals": 241,
          "gas": 79,
          "mineralRate": 1483,
          "gasRate": 134,
          "supplyUsed": 50.0,
          "supplyCap": 64.0,
          "workers": 30
        },
        {
          "t": 285.7142857142857,
          "minerals": 261,
          "gas": 70,
          "mineralRate": 1651,
          "gasRate": 134,
          "supplyUsed": 52.0,
          "supplyCap": 68.0,
          "workers": 30
        },
        {
          "t": 292.8571428571429,
          "minerals": 151,
          "gas": 82,
          "mineralRate": 1567,
          "gasRate": 111,
          "supplyUsed": 52.0,
          "supplyCap": 64.0,
          "workers": 30
        },
        {
          "t": 300.0,
          "minerals": 101,
          "gas": 98,
          "mineralRate": 1595,
          "gasRate": 111,
          "supplyUsed": 57.0,
          "supplyCap": 64.0,
          "workers": 31
        }
      ]
    }
  },
  {
    "label": "Ghost vs Blezer TvT -- Ghost (Terran) on Rorschach LE",
    "race": "Terran",
    "replay": {
      "source": "Ghost_vs_Blezer_TvT_2026-06-22.SC2Replay",
      "map": "Rorschach LE",
      "length": 917.9017857142858,
      "patch": "5.0.16.97337",
      "player": {
        "name": "Ghost",
        "race": "Terran",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 12.723214285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 24.821428571428573,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 28.97321428571429,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 36.91964285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 49.017857142857146,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 50.401785714285715,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 51.517857142857146,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 55.892857142857146,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 70.13392857142857,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 73.16964285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 77.32142857142857,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 86.875,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 91.5625,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 97.94642857142858,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 98.97321428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 126.20535714285715,
          "event": "start",
          "name": "Factory"
        },
        {
          "t": 130.75892857142858,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 131.60714285714286,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 134.41964285714286,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 134.41964285714286,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 144.375,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 145.5357142857143,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 150.35714285714286,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 151.29464285714286,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 153.75,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 155.44642857142858,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 169.0625,
          "event": "done",
          "name": "Factory"
        },
        {
          "t": 169.77678571428572,
          "event": "start",
          "name": "Armory"
        },
        {
          "t": 170.80357142857144,
          "event": "start",
          "name": "FactoryTechLab"
        },
        {
          "t": 171.7857142857143,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 172.7232142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 188.6607142857143,
          "event": "done",
          "name": "FactoryTechLab"
        },
        {
          "t": 191.74107142857144,
          "event": "start",
          "name": "Starport"
        },
        {
          "t": 194.95535714285717,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 195.89285714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 196.42857142857144,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 196.42857142857144,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 215.04464285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 216.20535714285717,
          "event": "done",
          "name": "Armory"
        },
        {
          "t": 227.45535714285717,
          "event": "done",
          "name": "Starport"
        },
        {
          "t": 231.56250000000003,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 252.99107142857144,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 254.2857142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 259.5089285714286,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 260.80357142857144,
          "event": "born",
          "name": "ThorAP"
        },
        {
          "t": 265.3571428571429,
          "event": "born",
          "name": "Medivac"
        },
        {
          "t": 283.4375,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 283.4821428571429,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 283.4821428571429,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 290.4464285714286,
          "event": "born",
          "name": "Marine"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 209,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 5,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 165,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 5,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 71.42857142857143,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 78.57142857142857,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 85.71428571428572,
          "minerals": 40,
          "gas": 16,
          "mineralRate": 475,
          "gasRate": 89,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 92.85714285714286,
          "minerals": 100,
          "gas": 36,
          "mineralRate": 531,
          "gasRate": 179,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 100.0,
          "minerals": 90,
          "gas": 22,
          "mineralRate": 419,
          "gasRate": 268,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 107.14285714285715,
          "minerals": 0,
          "gas": 58,
          "mineralRate": 503,
          "gasRate": 335,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 114.28571428571429,
          "minerals": 60,
          "gas": 94,
          "mineralRate": 503,
          "gasRate": 313,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 121.42857142857143,
          "minerals": 120,
          "gas": 134,
          "mineralRate": 503,
          "gasRate": 313,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 128.57142857142858,
          "minerals": 15,
          "gas": 74,
          "mineralRate": 447,
          "gasRate": 313,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 135.71428571428572,
          "minerals": 25,
          "gas": 114,
          "mineralRate": 447,
          "gasRate": 335,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 142.85714285714286,
          "minerals": 15,
          "gas": 154,
          "mineralRate": 419,
          "gasRate": 358,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 150.0,
          "minerals": 115,
          "gas": 190,
          "mineralRate": 699,
          "gasRate": 335,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 157.14285714285714,
          "minerals": 85,
          "gas": 226,
          "mineralRate": 671,
          "gasRate": 313,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 164.2857142857143,
          "minerals": 120,
          "gas": 266,
          "mineralRate": 727,
          "gasRate": 313,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 171.42857142857144,
          "minerals": 0,
          "gas": 231,
          "mineralRate": 755,
          "gasRate": 313,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 178.57142857142858,
          "minerals": 35,
          "gas": 271,
          "mineralRate": 783,
          "gasRate": 313,
          "supplyUsed": 20.0,
          "supplyCap": 29.0,
          "workers": 17
        },
        {
          "t": 185.71428571428572,
          "minerals": 80,
          "gas": 311,
          "mineralRate": 839,
          "gasRate": 335,
          "supplyUsed": 21.0,
          "supplyCap": 29.0,
          "workers": 17
        },
        {
          "t": 192.85714285714286,
          "minerals": 20,
          "gas": 251,
          "mineralRate": 867,
          "gasRate": 358,
          "supplyUsed": 21.0,
          "supplyCap": 29.0,
          "workers": 17
        },
        {
          "t": 200.0,
          "minerals": 100,
          "gas": 283,
          "mineralRate": 615,
          "gasRate": 313,
          "supplyUsed": 21.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 207.14285714285717,
          "minerals": 155,
          "gas": 307,
          "mineralRate": 727,
          "gasRate": 223,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 214.2857142857143,
          "minerals": 260,
          "gas": 335,
          "mineralRate": 951,
          "gasRate": 223,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 221.42857142857144,
          "minerals": 75,
          "gas": 163,
          "mineralRate": 1007,
          "gasRate": 223,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 228.57142857142858,
          "minerals": 85,
          "gas": 87,
          "mineralRate": 979,
          "gasRate": 201,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 235.71428571428572,
          "minerals": 110,
          "gas": 115,
          "mineralRate": 1063,
          "gasRate": 223,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 242.85714285714286,
          "minerals": 230,
          "gas": 143,
          "mineralRate": 1091,
          "gasRate": 246,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 250.00000000000003,
          "minerals": 350,
          "gas": 163,
          "mineralRate": 1091,
          "gasRate": 201,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 257.14285714285717,
          "minerals": 475,
          "gas": 187,
          "mineralRate": 1091,
          "gasRate": 179,
          "supplyUsed": 28.0,
          "supplyCap": 37.0,
          "workers": 19
        },
        {
          "t": 264.2857142857143,
          "minerals": 195,
          "gas": 211,
          "mineralRate": 1147,
          "gasRate": 201,
          "supplyUsed": 27.0,
          "supplyCap": 37.0,
          "workers": 19
        },
        {
          "t": 271.42857142857144,
          "minerals": 245,
          "gas": 227,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 28.0,
          "supplyCap": 37.0,
          "workers": 19
        },
        {
          "t": 278.5714285714286,
          "minerals": 295,
          "gas": 251,
          "mineralRate": 867,
          "gasRate": 179,
          "supplyUsed": 29.0,
          "supplyCap": 37.0,
          "workers": 19
        },
        {
          "t": 285.7142857142857,
          "minerals": 80,
          "gas": 75,
          "mineralRate": 783,
          "gasRate": 201,
          "supplyUsed": 35.0,
          "supplyCap": 37.0,
          "workers": 20
        },
        {
          "t": 292.8571428571429,
          "minerals": 170,
          "gas": 95,
          "mineralRate": 979,
          "gasRate": 179,
          "supplyUsed": 36.0,
          "supplyCap": 37.0,
          "workers": 20
        },
        {
          "t": 300.0,
          "minerals": 175,
          "gas": 131,
          "mineralRate": 1007,
          "gasRate": 268,
          "supplyUsed": 37.0,
          "supplyCap": 37.0,
          "workers": 20
        }
      ]
    }
  },
  {
    "label": "Ghost vs Blezer TvT -- Blezer (Terran) on Rorschach LE",
    "race": "Terran",
    "replay": {
      "source": "Ghost_vs_Blezer_TvT_2026-06-22.SC2Replay",
      "map": "Rorschach LE",
      "length": 917.9017857142858,
      "patch": "5.0.16.97337",
      "player": {
        "name": "Blezer",
        "race": "Terran",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 14.866071428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 26.964285714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 39.0625,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 43.25892857142858,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 51.16071428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 63.25892857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 64.6875,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 67.45535714285715,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 71.42857142857143,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 76.07142857142857,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 76.875,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 78.52678571428572,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 90.66964285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 92.85714285714286,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 99.95535714285715,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 102.76785714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 113.88392857142858,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 114.95535714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 117.00892857142858,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 132.99107142857144,
          "event": "start",
          "name": "Factory"
        },
        {
          "t": 138.4375,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 139.82142857142858,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 142.90178571428572,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 144.10714285714286,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 144.10714285714286,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 147.8125,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 148.16964285714286,
          "event": "start",
          "name": "BarracksReactor"
        },
        {
          "t": 155.17857142857144,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 155.9375,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 172.7232142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 175.8482142857143,
          "event": "done",
          "name": "Factory"
        },
        {
          "t": 183.88392857142858,
          "event": "done",
          "name": "BarracksReactor"
        },
        {
          "t": 185.66964285714286,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 188.25892857142858,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 188.4375,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 196.4732142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 198.125,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 208.9732142857143,
          "event": "start",
          "name": "Starport"
        },
        {
          "t": 211.60714285714286,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 211.60714285714286,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 211.83035714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 218.88392857142858,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 219.0625,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 220.44642857142858,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 221.02678571428572,
          "event": "start",
          "name": "FactoryTechLab"
        },
        {
          "t": 221.60714285714286,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 223.92857142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 228.21428571428572,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 235.31250000000003,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 238.88392857142858,
          "event": "done",
          "name": "FactoryTechLab"
        },
        {
          "t": 244.68750000000003,
          "event": "done",
          "name": "Starport"
        },
        {
          "t": 249.64285714285717,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 257.0982142857143,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 259.95535714285717,
          "event": "start",
          "name": "StarportTechLab"
        },
        {
          "t": 261.7857142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 267.5,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 267.5,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 273.8839285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 274.7321428571429,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 275.5357142857143,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 277.8125,
          "event": "done",
          "name": "StarportTechLab"
        },
        {
          "t": 280.80357142857144,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 281.25,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 281.7857142857143,
          "event": "born",
          "name": "Cyclone"
        },
        {
          "t": 286.3392857142857,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 287.0089285714286,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 287.2321428571429,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 287.2321428571429,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 287.5892857142857,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 291.1607142857143,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 291.1607142857143,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 292.05357142857144,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 296.1607142857143,
          "event": "morph",
          "name": "SupplyDepotLowered"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 209,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 21.42857142857143,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 125,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 115,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 57.142857142857146,
          "minerals": 185,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 265,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 65,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 78.57142857142857,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 92.85714285714286,
          "minerals": 130,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 100.0,
          "minerals": 200,
          "gas": 12,
          "mineralRate": 643,
          "gasRate": 67,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 107.14285714285715,
          "minerals": 220,
          "gas": 32,
          "mineralRate": 503,
          "gasRate": 179,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 285,
          "gas": 72,
          "mineralRate": 559,
          "gasRate": 291,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 55,
          "gas": 62,
          "mineralRate": 559,
          "gasRate": 313,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 125,
          "gas": 102,
          "mineralRate": 615,
          "gasRate": 313,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 45,
          "gas": 30,
          "mineralRate": 587,
          "gasRate": 268,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 142.85714285714286,
          "minerals": 125,
          "gas": 54,
          "mineralRate": 643,
          "gasRate": 201,
          "supplyUsed": 18.0,
          "supplyCap": 29.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 110,
          "gas": 24,
          "mineralRate": 671,
          "gasRate": 179,
          "supplyUsed": 19.0,
          "supplyCap": 29.0,
          "workers": 17
        },
        {
          "t": 157.14285714285714,
          "minerals": 230,
          "gas": 44,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 19.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 164.2857142857143,
          "minerals": 295,
          "gas": 68,
          "mineralRate": 867,
          "gasRate": 179,
          "supplyUsed": 20.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 171.42857142857144,
          "minerals": 405,
          "gas": 84,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 178.57142857142858,
          "minerals": 435,
          "gas": 104,
          "mineralRate": 923,
          "gasRate": 134,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 185.71428571428572,
          "minerals": 115,
          "gas": 128,
          "mineralRate": 979,
          "gasRate": 179,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 192.85714285714286,
          "minerals": 125,
          "gas": 52,
          "mineralRate": 951,
          "gasRate": 201,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 200.0,
          "minerals": 130,
          "gas": 72,
          "mineralRate": 1091,
          "gasRate": 179,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 207.14285714285717,
          "minerals": 245,
          "gas": 92,
          "mineralRate": 1063,
          "gasRate": 179,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 214.2857142857143,
          "minerals": 130,
          "gas": 32,
          "mineralRate": 839,
          "gasRate": 291,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 221.42857142857144,
          "minerals": 45,
          "gas": 47,
          "mineralRate": 923,
          "gasRate": 313,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 228.57142857142858,
          "minerals": 60,
          "gas": 87,
          "mineralRate": 1035,
          "gasRate": 335,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 235.71428571428572,
          "minerals": 175,
          "gas": 123,
          "mineralRate": 1035,
          "gasRate": 313,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 242.85714285714286,
          "minerals": 285,
          "gas": 163,
          "mineralRate": 979,
          "gasRate": 335,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 250.00000000000003,
          "minerals": 175,
          "gas": 103,
          "mineralRate": 923,
          "gasRate": 335,
          "supplyUsed": 35.0,
          "supplyCap": 37.0,
          "workers": 22
        },
        {
          "t": 257.14285714285717,
          "minerals": 300,
          "gas": 139,
          "mineralRate": 923,
          "gasRate": 313,
          "supplyUsed": 35.0,
          "supplyCap": 50.0,
          "workers": 22
        },
        {
          "t": 264.2857142857143,
          "minerals": 220,
          "gas": 154,
          "mineralRate": 979,
          "gasRate": 313,
          "supplyUsed": 36.0,
          "supplyCap": 50.0,
          "workers": 23
        },
        {
          "t": 271.42857142857144,
          "minerals": 90,
          "gas": 194,
          "mineralRate": 923,
          "gasRate": 335,
          "supplyUsed": 37.0,
          "supplyCap": 50.0,
          "workers": 23
        },
        {
          "t": 278.5714285714286,
          "minerals": 60,
          "gas": 230,
          "mineralRate": 979,
          "gasRate": 313,
          "supplyUsed": 37.0,
          "supplyCap": 50.0,
          "workers": 24
        },
        {
          "t": 285.7142857142857,
          "minerals": 15,
          "gas": 70,
          "mineralRate": 811,
          "gasRate": 313,
          "supplyUsed": 39.0,
          "supplyCap": 50.0,
          "workers": 24
        },
        {
          "t": 292.8571428571429,
          "minerals": 70,
          "gas": 110,
          "mineralRate": 867,
          "gasRate": 335,
          "supplyUsed": 40.0,
          "supplyCap": 50.0,
          "workers": 24
        },
        {
          "t": 300.0,
          "minerals": 125,
          "gas": 150,
          "mineralRate": 867,
          "gasRate": 335,
          "supplyUsed": 40.0,
          "supplyCap": 50.0,
          "workers": 24
        }
      ]
    }
  },
  {
    "label": "Harstem Lockdown -- Harstem (Protoss) on Lockdown LE",
    "race": "Protoss",
    "replay": {
      "source": "Harstem_Lockdown_2026-06-29.SC2Replay",
      "map": "Lockdown LE",
      "length": 728.2589285714287,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Harstem",
        "race": "Protoss",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 10.848214285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 18.92857142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 27.008928571428573,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 34.55357142857143,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 38.839285714285715,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 50.9375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 52.41071428571429,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 62.36607142857143,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 64.59821428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 68.21428571428572,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 73.30357142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 81.38392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 89.64285714285715,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 90.9375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 103.03571428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 108.79464285714286,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 112.05357142857143,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 115.13392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 124.59821428571429,
          "event": "start",
          "name": "CyberneticsCore"
        },
        {
          "t": 132.32142857142858,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 138.3482142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 139.19642857142858,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 153.25892857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 153.75,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 157.05357142857144,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 160.3125,
          "event": "done",
          "name": "CyberneticsCore"
        },
        {
          "t": 167.1875,
          "event": "start",
          "name": "Stargate"
        },
        {
          "t": 169.24107142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 180.89285714285717,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 181.33928571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 183.48214285714286,
          "event": "done",
          "name": "Nexus"
        },
        {
          "t": 183.57142857142858,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 193.4375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 197.27678571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 199.77678571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 202.45535714285717,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 205.5357142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 208.70535714285717,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 209.375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 210.04464285714286,
          "event": "done",
          "name": "Stargate"
        },
        {
          "t": 216.4732142857143,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 217.63392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 220.98214285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 220.98214285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 221.4732142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 229.73214285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 233.57142857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 233.57142857142858,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 233.57142857142858,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 234.33035714285717,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 239.64285714285717,
          "event": "born",
          "name": "Oracle"
        },
        {
          "t": 241.83035714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 245.66964285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 247.58928571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 247.58928571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 248.12500000000003,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 250.58035714285717,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 253.92857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 257.76785714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 261.20535714285717,
          "event": "start",
          "name": "TwilightCouncil"
        },
        {
          "t": 266.0267857142857,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 267.0089285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 268.4375,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 269.5089285714286,
          "event": "born",
          "name": "Oracle"
        },
        {
          "t": 269.86607142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 278.125,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 281.875,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 281.9642857142857,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 282.67857142857144,
          "event": "upgrade",
          "name": "WarpGateResearch"
        },
        {
          "t": 284.1964285714286,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 290.0446428571429,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 290.2232142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 294.0625,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 294.55357142857144,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 296.9196428571429,
          "event": "done",
          "name": "TwilightCouncil"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 209,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 28.571428571428573,
          "minerals": 65,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 42.85714285714286,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 165,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 78.57142857142857,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 190,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 240,
          "gas": 12,
          "mineralRate": 895,
          "gasRate": 67,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 340,
          "gas": 24,
          "mineralRate": 839,
          "gasRate": 89,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 114.28571428571429,
          "minerals": 35,
          "gas": 40,
          "mineralRate": 839,
          "gasRate": 111,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 121.42857142857143,
          "minerals": 135,
          "gas": 52,
          "mineralRate": 839,
          "gasRate": 111,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 128.57142857142858,
          "minerals": 25,
          "gas": 64,
          "mineralRate": 811,
          "gasRate": 89,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 135.71428571428572,
          "minerals": 55,
          "gas": 76,
          "mineralRate": 839,
          "gasRate": 89,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 20,
          "gas": 92,
          "mineralRate": 867,
          "gasRate": 111,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 20
        },
        {
          "t": 150.0,
          "minerals": 130,
          "gas": 108,
          "mineralRate": 923,
          "gasRate": 134,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 20
        },
        {
          "t": 157.14285714285714,
          "minerals": 140,
          "gas": 132,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 164.2857142857143,
          "minerals": 140,
          "gas": 139,
          "mineralRate": 811,
          "gasRate": 268,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 171.42857142857144,
          "minerals": 45,
          "gas": 21,
          "mineralRate": 811,
          "gasRate": 291,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 178.57142857142858,
          "minerals": 55,
          "gas": 32,
          "mineralRate": 895,
          "gasRate": 291,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 185.71428571428572,
          "minerals": 25,
          "gas": 14,
          "mineralRate": 923,
          "gasRate": 268,
          "supplyUsed": 29.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 192.85714285714286,
          "minerals": 130,
          "gas": 54,
          "mineralRate": 951,
          "gasRate": 313,
          "supplyUsed": 29.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 200.0,
          "minerals": 95,
          "gas": 94,
          "mineralRate": 979,
          "gasRate": 313,
          "supplyUsed": 31.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 207.14285714285717,
          "minerals": 70,
          "gas": 109,
          "mineralRate": 1035,
          "gasRate": 335,
          "supplyUsed": 34.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 214.2857142857143,
          "minerals": 95,
          "gas": 24,
          "mineralRate": 1119,
          "gasRate": 335,
          "supplyUsed": 36.0,
          "supplyCap": 42.0,
          "workers": 27
        },
        {
          "t": 221.42857142857144,
          "minerals": 130,
          "gas": 60,
          "mineralRate": 1147,
          "gasRate": 335,
          "supplyUsed": 37.0,
          "supplyCap": 42.0,
          "workers": 28
        },
        {
          "t": 228.57142857142858,
          "minerals": 245,
          "gas": 96,
          "mineralRate": 1315,
          "gasRate": 313,
          "supplyUsed": 38.0,
          "supplyCap": 42.0,
          "workers": 29
        },
        {
          "t": 235.71428571428572,
          "minerals": 295,
          "gas": 136,
          "mineralRate": 1371,
          "gasRate": 313,
          "supplyUsed": 40.0,
          "supplyCap": 50.0,
          "workers": 31
        },
        {
          "t": 242.85714285714286,
          "minerals": 225,
          "gas": 26,
          "mineralRate": 1427,
          "gasRate": 313,
          "supplyUsed": 44.0,
          "supplyCap": 50.0,
          "workers": 32
        },
        {
          "t": 250.00000000000003,
          "minerals": 95,
          "gas": 66,
          "mineralRate": 1483,
          "gasRate": 313,
          "supplyUsed": 45.0,
          "supplyCap": 50.0,
          "workers": 33
        },
        {
          "t": 257.14285714285717,
          "minerals": 280,
          "gas": 102,
          "mineralRate": 1483,
          "gasRate": 313,
          "supplyUsed": 46.0,
          "supplyCap": 50.0,
          "workers": 34
        },
        {
          "t": 264.2857142857143,
          "minerals": 275,
          "gas": 42,
          "mineralRate": 1595,
          "gasRate": 335,
          "supplyUsed": 47.0,
          "supplyCap": 50.0,
          "workers": 35
        },
        {
          "t": 271.42857142857144,
          "minerals": 385,
          "gas": 74,
          "mineralRate": 1651,
          "gasRate": 291,
          "supplyUsed": 49.0,
          "supplyCap": 58.0,
          "workers": 37
        },
        {
          "t": 278.5714285714286,
          "minerals": 115,
          "gas": 114,
          "mineralRate": 1595,
          "gasRate": 313,
          "supplyUsed": 50.0,
          "supplyCap": 58.0,
          "workers": 38
        },
        {
          "t": 285.7142857142857,
          "minerals": 240,
          "gas": 154,
          "mineralRate": 1791,
          "gasRate": 313,
          "supplyUsed": 51.0,
          "supplyCap": 58.0,
          "workers": 39
        },
        {
          "t": 292.8571428571429,
          "minerals": 290,
          "gas": 194,
          "mineralRate": 1791,
          "gasRate": 313,
          "supplyUsed": 52.0,
          "supplyCap": 58.0,
          "workers": 40
        },
        {
          "t": 300.0,
          "minerals": 170,
          "gas": 34,
          "mineralRate": 1903,
          "gasRate": 335,
          "supplyUsed": 55.0,
          "supplyCap": 58.0,
          "workers": 41
        }
      ]
    }
  },
  {
    "label": "Krystianer vs Solar PvZ Blackrock -- Krystianer (Protoss) on Blackrock LE",
    "race": "Protoss",
    "replay": {
      "source": "Krystianer_vs_Solar_PvZ_Blackrock_2026-06-28.SC2Replay",
      "map": "Blackrock LE",
      "length": 796.9642857142858,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Krystianer",
        "race": "Protoss",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 10.357142857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 18.4375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 26.5625,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 33.4375,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 38.660714285714285,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 50.75892857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 51.29464285714286,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 61.29464285714286,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 63.48214285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 68.125,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 71.875,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 80.71428571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 89.55357142857143,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 90.9375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 103.03571428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 107.58928571428572,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 107.72321428571429,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 115.13392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 119.10714285714286,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 125.44642857142858,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 127.99107142857143,
          "event": "start",
          "name": "CyberneticsCore"
        },
        {
          "t": 137.05357142857144,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 143.21428571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 155.3125,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 158.48214285714286,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 162.14285714285717,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 163.70535714285717,
          "event": "done",
          "name": "CyberneticsCore"
        },
        {
          "t": 165.26785714285717,
          "event": "born",
          "name": "Zealot"
        },
        {
          "t": 177.0982142857143,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 179.01785714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 189.0625,
          "event": "start",
          "name": "Stargate"
        },
        {
          "t": 190.5357142857143,
          "event": "done",
          "name": "Nexus"
        },
        {
          "t": 193.0357142857143,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 193.92857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 194.95535714285717,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 208.57142857142858,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 210.49107142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 210.625,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 216.69642857142858,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 218.30357142857144,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 218.30357142857144,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 219.19642857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 222.7232142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 228.6607142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 231.91964285714286,
          "event": "done",
          "name": "Stargate"
        },
        {
          "t": 235.62500000000003,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 237.23214285714286,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 240.75892857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 241.87500000000003,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 241.87500000000003,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 247.7232142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 252.85714285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 255.08928571428572,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 259.8214285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 267.2321428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 268.2589285714286,
          "event": "born",
          "name": "Oracle"
        },
        {
          "t": 271.9196428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 272.3214285714286,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 276.2946428571429,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 279.33035714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 283.5714285714286,
          "event": "start",
          "name": "TwilightCouncil"
        },
        {
          "t": 284.01785714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 291.42857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 294.1517857142857,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 295.4464285714286,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 296.9642857142857,
          "event": "born",
          "name": "Oracle"
        },
        {
          "t": 297.8571428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 299.5089285714286,
          "event": "start",
          "name": "Assimilator"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 335,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 28.571428571428573,
          "minerals": 55,
          "gas": 0,
          "mineralRate": 475,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 42.85714285714286,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 165,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 71.42857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 78.57142857142857,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 75,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 185,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 240,
          "gas": 8,
          "mineralRate": 867,
          "gasRate": 44,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 345,
          "gas": 16,
          "mineralRate": 895,
          "gasRate": 67,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 114.28571428571429,
          "minerals": 355,
          "gas": 24,
          "mineralRate": 895,
          "gasRate": 67,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 121.42857142857143,
          "minerals": 55,
          "gas": 32,
          "mineralRate": 867,
          "gasRate": 67,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 128.57142857142858,
          "minerals": 10,
          "gas": 48,
          "mineralRate": 867,
          "gasRate": 111,
          "supplyUsed": 19.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 135.71428571428572,
          "minerals": 60,
          "gas": 64,
          "mineralRate": 811,
          "gasRate": 134,
          "supplyUsed": 20.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 45,
          "gas": 80,
          "mineralRate": 895,
          "gasRate": 134,
          "supplyUsed": 20.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 150.0,
          "minerals": 40,
          "gas": 100,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 157.14285714285714,
          "minerals": 85,
          "gas": 120,
          "mineralRate": 839,
          "gasRate": 179,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 164.2857142857143,
          "minerals": 105,
          "gas": 136,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 171.42857142857144,
          "minerals": 60,
          "gas": 131,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 178.57142857142858,
          "minerals": 65,
          "gas": 155,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 26.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 185.71428571428572,
          "minerals": 110,
          "gas": 191,
          "mineralRate": 783,
          "gasRate": 268,
          "supplyUsed": 27.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 192.85714285714286,
          "minerals": 55,
          "gas": 81,
          "mineralRate": 811,
          "gasRate": 335,
          "supplyUsed": 27.0,
          "supplyCap": 34.0,
          "workers": 22
        },
        {
          "t": 200.0,
          "minerals": 30,
          "gas": 92,
          "mineralRate": 923,
          "gasRate": 313,
          "supplyUsed": 30.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 207.14285714285717,
          "minerals": 85,
          "gas": 132,
          "mineralRate": 867,
          "gasRate": 313,
          "supplyUsed": 31.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 214.2857142857143,
          "minerals": 60,
          "gas": 122,
          "mineralRate": 979,
          "gasRate": 335,
          "supplyUsed": 33.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 221.42857142857144,
          "minerals": 130,
          "gas": 162,
          "mineralRate": 1035,
          "gasRate": 335,
          "supplyUsed": 34.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 228.57142857142858,
          "minerals": 115,
          "gas": 198,
          "mineralRate": 1119,
          "gasRate": 313,
          "supplyUsed": 35.0,
          "supplyCap": 42.0,
          "workers": 27
        },
        {
          "t": 235.71428571428572,
          "minerals": 105,
          "gas": 88,
          "mineralRate": 1147,
          "gasRate": 335,
          "supplyUsed": 40.0,
          "supplyCap": 42.0,
          "workers": 29
        },
        {
          "t": 242.85714285714286,
          "minerals": 10,
          "gas": 128,
          "mineralRate": 1287,
          "gasRate": 335,
          "supplyUsed": 41.0,
          "supplyCap": 42.0,
          "workers": 30
        },
        {
          "t": 250.00000000000003,
          "minerals": 70,
          "gas": 160,
          "mineralRate": 1343,
          "gasRate": 291,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 31
        },
        {
          "t": 257.14285714285717,
          "minerals": 135,
          "gas": 200,
          "mineralRate": 1455,
          "gasRate": 313,
          "supplyUsed": 41.0,
          "supplyCap": 50.0,
          "workers": 32
        },
        {
          "t": 264.2857142857143,
          "minerals": 270,
          "gas": 240,
          "mineralRate": 1455,
          "gasRate": 313,
          "supplyUsed": 40.0,
          "supplyCap": 50.0,
          "workers": 33
        },
        {
          "t": 271.42857142857144,
          "minerals": 390,
          "gas": 130,
          "mineralRate": 1511,
          "gasRate": 313,
          "supplyUsed": 44.0,
          "supplyCap": 50.0,
          "workers": 34
        },
        {
          "t": 278.5714285714286,
          "minerals": 35,
          "gas": 170,
          "mineralRate": 1567,
          "gasRate": 335,
          "supplyUsed": 45.0,
          "supplyCap": 50.0,
          "workers": 35
        },
        {
          "t": 285.7142857142857,
          "minerals": 65,
          "gas": 106,
          "mineralRate": 1539,
          "gasRate": 335,
          "supplyUsed": 46.0,
          "supplyCap": 50.0,
          "workers": 37
        },
        {
          "t": 292.8571428571429,
          "minerals": 165,
          "gas": 142,
          "mineralRate": 1595,
          "gasRate": 313,
          "supplyUsed": 48.0,
          "supplyCap": 50.0,
          "workers": 38
        },
        {
          "t": 300.0,
          "minerals": 140,
          "gas": 178,
          "mineralRate": 1651,
          "gasRate": 291,
          "supplyUsed": 48.0,
          "supplyCap": 58.0,
          "workers": 39
        }
      ]
    }
  },
  {
    "label": "SKillous vs Solar PvZ FearAndFaith -- SKillous (Protoss) on Fear and Faith LE",
    "race": "Protoss",
    "replay": {
      "source": "SKillous_vs_Solar_PvZ_FearAndFaith_2026-06-28.SC2Replay",
      "map": "Fear and Faith LE",
      "length": 481.6964285714286,
      "patch": "5.0.16.97364",
      "player": {
        "name": "SKillous",
        "race": "Protoss",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 11.026785714285715,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 19.107142857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 27.1875,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 33.035714285714285,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 38.75,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 50.84821428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 50.892857142857146,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 56.16071428571429,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 63.03571428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 65.9375,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 75.13392857142857,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 87.23214285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 87.36607142857143,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 95.71428571428572,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 99.33035714285715,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 102.58928571428572,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 103.39285714285715,
          "event": "start",
          "name": "CyberneticsCore"
        },
        {
          "t": 109.15178571428572,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 111.42857142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 124.41964285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 127.00892857142858,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 136.51785714285714,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 139.10714285714286,
          "event": "done",
          "name": "CyberneticsCore"
        },
        {
          "t": 142.14285714285714,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 148.9732142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 161.1607142857143,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 162.67857142857144,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 163.21428571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 163.21428571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 170.2232142857143,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 183.61607142857144,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 184.77678571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 185.40178571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 185.40178571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 193.48214285714286,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 198.4375,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 203.21428571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 203.21428571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 207.45535714285717,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 220.2232142857143,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 225.31250000000003,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 228.70535714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 230.04464285714286,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 230.44642857142858,
          "event": "start",
          "name": "ShieldBattery"
        },
        {
          "t": 232.81250000000003,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 238.21428571428572,
          "event": "upgrade",
          "name": "WarpGateResearch"
        },
        {
          "t": 240.80357142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 241.65178571428572,
          "event": "done",
          "name": "Nexus"
        },
        {
          "t": 245.98214285714286,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 250.00000000000003,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 250.66964285714286,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 251.38392857142858,
          "event": "morph",
          "name": "WarpGate"
        },
        {
          "t": 252.90178571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 255.35714285714286,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 257.9017857142857,
          "event": "morph",
          "name": "WarpGate"
        },
        {
          "t": 258.08035714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 259.01785714285717,
          "event": "done",
          "name": "ShieldBattery"
        },
        {
          "t": 263.08035714285717,
          "event": "start",
          "name": "Adept"
        },
        {
          "t": 263.30357142857144,
          "event": "start",
          "name": "Adept"
        },
        {
          "t": 266.0714285714286,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 266.6517857142857,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 266.9196428571429,
          "event": "morph",
          "name": "WarpGate"
        },
        {
          "t": 267.0982142857143,
          "event": "done",
          "name": "Adept"
        },
        {
          "t": 267.3214285714286,
          "event": "done",
          "name": "Adept"
        },
        {
          "t": 270.3571428571429,
          "event": "start",
          "name": "Adept"
        },
        {
          "t": 274.375,
          "event": "done",
          "name": "Adept"
        },
        {
          "t": 274.64285714285717,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 274.64285714285717,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 274.64285714285717,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 274.64285714285717,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 274.64285714285717,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 276.5625,
          "event": "morph",
          "name": "WarpGate"
        },
        {
          "t": 277.6339285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 277.67857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 278.2142857142857,
          "event": "start",
          "name": "Adept"
        },
        {
          "t": 282.2321428571429,
          "event": "done",
          "name": "Adept"
        },
        {
          "t": 283.92857142857144,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 286.4732142857143,
          "event": "start",
          "name": "Adept"
        },
        {
          "t": 287.2767857142857,
          "event": "start",
          "name": "Adept"
        },
        {
          "t": 288.8839285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 288.8839285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 288.8839285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 288.8839285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 288.8839285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 288.8839285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 289.7321428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 290.49107142857144,
          "event": "done",
          "name": "Adept"
        },
        {
          "t": 291.2946428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 291.2946428571429,
          "event": "done",
          "name": "Adept"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 293,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 28.571428571428573,
          "minerals": 70,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 42.85714285714286,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 60,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 71.42857142857143,
          "minerals": 15,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 78.57142857142857,
          "minerals": 110,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 160,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 260,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 100.0,
          "minerals": 155,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 105,
          "gas": 4,
          "mineralRate": 839,
          "gasRate": 22,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 114.28571428571429,
          "minerals": 60,
          "gas": 12,
          "mineralRate": 867,
          "gasRate": 67,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 121.42857142857143,
          "minerals": 145,
          "gas": 28,
          "mineralRate": 811,
          "gasRate": 111,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 128.57142857142858,
          "minerals": 195,
          "gas": 48,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 135.71428571428572,
          "minerals": 305,
          "gas": 68,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 150,
          "gas": 38,
          "mineralRate": 839,
          "gasRate": 179,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 150.0,
          "minerals": 215,
          "gas": 4,
          "mineralRate": 895,
          "gasRate": 156,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 157.14285714285714,
          "minerals": 335,
          "gas": 24,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 164.2857142857143,
          "minerals": 335,
          "gas": 19,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 27.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 171.42857142857144,
          "minerals": 30,
          "gas": 14,
          "mineralRate": 895,
          "gasRate": 156,
          "supplyUsed": 27.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 178.57142857142858,
          "minerals": 105,
          "gas": 34,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 185.71428571428572,
          "minerals": 55,
          "gas": 50,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 192.85714285714286,
          "minerals": 75,
          "gas": 66,
          "mineralRate": 979,
          "gasRate": 134,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 200.0,
          "minerals": 95,
          "gas": 61,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 23
        },
        {
          "t": 207.14285714285717,
          "minerals": 50,
          "gas": 81,
          "mineralRate": 1007,
          "gasRate": 179,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 23
        },
        {
          "t": 214.2857142857143,
          "minerals": 170,
          "gas": 97,
          "mineralRate": 1007,
          "gasRate": 156,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 23
        },
        {
          "t": 221.42857142857144,
          "minerals": 95,
          "gas": 117,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 23
        },
        {
          "t": 228.57142857142858,
          "minerals": 50,
          "gas": 108,
          "mineralRate": 979,
          "gasRate": 134,
          "supplyUsed": 30.0,
          "supplyCap": 37.0,
          "workers": 23
        },
        {
          "t": 235.71428571428572,
          "minerals": 65,
          "gas": 128,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 31.0,
          "supplyCap": 37.0,
          "workers": 24
        },
        {
          "t": 242.85714285714286,
          "minerals": 95,
          "gas": 148,
          "mineralRate": 979,
          "gasRate": 179,
          "supplyUsed": 33.0,
          "supplyCap": 50.0,
          "workers": 25
        },
        {
          "t": 250.00000000000003,
          "minerals": 145,
          "gas": 139,
          "mineralRate": 1063,
          "gasRate": 156,
          "supplyUsed": 33.0,
          "supplyCap": 50.0,
          "workers": 25
        },
        {
          "t": 257.14285714285717,
          "minerals": 155,
          "gas": 109,
          "mineralRate": 1091,
          "gasRate": 156,
          "supplyUsed": 36.0,
          "supplyCap": 58.0,
          "workers": 27
        },
        {
          "t": 264.2857142857143,
          "minerals": 195,
          "gas": 79,
          "mineralRate": 1315,
          "gasRate": 156,
          "supplyUsed": 38.0,
          "supplyCap": 58.0,
          "workers": 28
        },
        {
          "t": 271.42857142857144,
          "minerals": 20,
          "gas": 45,
          "mineralRate": 1259,
          "gasRate": 134,
          "supplyUsed": 42.0,
          "supplyCap": 50.0,
          "workers": 28
        },
        {
          "t": 278.5714285714286,
          "minerals": 35,
          "gas": 40,
          "mineralRate": 1371,
          "gasRate": 134,
          "supplyUsed": 45.0,
          "supplyCap": 50.0,
          "workers": 30
        },
        {
          "t": 285.7142857142857,
          "minerals": 160,
          "gas": 60,
          "mineralRate": 1315,
          "gasRate": 156,
          "supplyUsed": 46.0,
          "supplyCap": 58.0,
          "workers": 30
        },
        {
          "t": 292.8571428571429,
          "minerals": 85,
          "gas": 30,
          "mineralRate": 1455,
          "gasRate": 156,
          "supplyUsed": 51.0,
          "supplyCap": 58.0,
          "workers": 32
        },
        {
          "t": 300.0,
          "minerals": 165,
          "gas": 50,
          "mineralRate": 1539,
          "gasRate": 179,
          "supplyUsed": 50.0,
          "supplyCap": 58.0,
          "workers": 32
        }
      ]
    }
  },
  {
    "label": "Seigneur vs SortOf TvZ -- Seigneur (Terran) on Taito Citadel LE",
    "race": "Terran",
    "replay": {
      "source": "Seigneur_vs_SortOf_TvZ_2026-06-22.SC2Replay",
      "map": "Taito Citadel LE",
      "length": 260.17857142857144,
      "patch": "5.0.15.96883",
      "player": {
        "name": "Seigneur",
        "race": "Terran",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 12.544642857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 15.491071428571429,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 28.92857142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 35.75892857142858,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 36.91964285714286,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 40.9375,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 41.026785714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 42.54464285714286,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 56.16071428571429,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 57.18750000000001,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 70.49107142857143,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 77.5,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 88.97321428571429,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 98.92857142857143,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 102.58928571428572,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 116.91964285714286,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 121.29464285714286,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 132.4107142857143,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 135.0,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 135.0,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 135.17857142857144,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 149.82142857142858,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 153.61607142857144,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 157.7232142857143,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 161.29464285714286,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 161.42857142857144,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 164.0625,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 167.27678571428572,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 175.66964285714286,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 175.75892857142858,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 176.69642857142858,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 179.15178571428572,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 181.91964285714286,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 185.71428571428572,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 188.9732142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 189.10714285714286,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 191.69642857142858,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 191.7857142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 195.75892857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 199.375,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 206.02678571428572,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 206.11607142857144,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 206.1607142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 206.25,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 214.01785714285717,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 214.55357142857144,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 214.55357142857144,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 217.8125,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 221.1607142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 221.25,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 221.33928571428572,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 221.4732142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 221.60714285714286,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 221.65178571428572,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 221.69642857142858,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 222.36607142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 231.4732142857143,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 234.46428571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 238.92857142857144,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 239.24107142857144,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 241.56250000000003,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 241.65178571428572,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 244.50892857142858,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 244.68750000000003,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 246.11607142857144,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 246.4732142857143,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 246.56250000000003,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 249.9107142857143,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 253.92857142857144,
          "event": "born",
          "name": "SCV"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 15.0,
          "workers": 12
        },
        {
          "t": 7.142857142857143,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 293,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 15.0,
          "workers": 12
        },
        {
          "t": 14.285714285714286,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 15.0,
          "workers": 13
        },
        {
          "t": 21.42857142857143,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 15.0,
          "workers": 13
        },
        {
          "t": 28.571428571428573,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 15.0,
          "workers": 13
        },
        {
          "t": 35.714285714285715,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 15.0,
          "workers": 14
        },
        {
          "t": 42.85714285714286,
          "minerals": 15,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 50.0,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 57.142857142857146,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 64.28571428571429,
          "minerals": 100,
          "gas": 4,
          "mineralRate": 643,
          "gasRate": 22,
          "supplyUsed": 15.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 71.42857142857143,
          "minerals": 20,
          "gas": 20,
          "mineralRate": 587,
          "gasRate": 111,
          "supplyUsed": 15.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 10,
          "gas": 40,
          "mineralRate": 503,
          "gasRate": 156,
          "supplyUsed": 15.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 70,
          "gas": 56,
          "mineralRate": 503,
          "gasRate": 156,
          "supplyUsed": 15.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 80,
          "gas": 26,
          "mineralRate": 475,
          "gasRate": 156,
          "supplyUsed": 16.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 100.0,
          "minerals": 140,
          "gas": 46,
          "mineralRate": 503,
          "gasRate": 156,
          "supplyUsed": 16.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 107.14285714285715,
          "minerals": 160,
          "gas": 24,
          "mineralRate": 559,
          "gasRate": 201,
          "supplyUsed": 17.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 114.28571428571429,
          "minerals": 60,
          "gas": 60,
          "mineralRate": 503,
          "gasRate": 268,
          "supplyUsed": 17.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 121.42857142857143,
          "minerals": 65,
          "gas": 50,
          "mineralRate": 503,
          "gasRate": 335,
          "supplyUsed": 18.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 128.57142857142858,
          "minerals": 65,
          "gas": 40,
          "mineralRate": 475,
          "gasRate": 335,
          "supplyUsed": 19.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 135.71428571428572,
          "minerals": 70,
          "gas": 26,
          "mineralRate": 503,
          "gasRate": 313,
          "supplyUsed": 20.0,
          "supplyCap": 23.0,
          "workers": 15
        },
        {
          "t": 142.85714285714286,
          "minerals": 120,
          "gas": 66,
          "mineralRate": 475,
          "gasRate": 313,
          "supplyUsed": 19.0,
          "supplyCap": 23.0,
          "workers": 14
        },
        {
          "t": 150.0,
          "minerals": 95,
          "gas": 6,
          "mineralRate": 615,
          "gasRate": 335,
          "supplyUsed": 20.0,
          "supplyCap": 23.0,
          "workers": 14
        },
        {
          "t": 157.14285714285714,
          "minerals": 90,
          "gas": 46,
          "mineralRate": 699,
          "gasRate": 335,
          "supplyUsed": 21.0,
          "supplyCap": 23.0,
          "workers": 14
        },
        {
          "t": 164.2857142857143,
          "minerals": 110,
          "gas": 32,
          "mineralRate": 671,
          "gasRate": 335,
          "supplyUsed": 21.0,
          "supplyCap": 23.0,
          "workers": 14
        },
        {
          "t": 171.42857142857144,
          "minerals": 125,
          "gas": 22,
          "mineralRate": 615,
          "gasRate": 335,
          "supplyUsed": 22.0,
          "supplyCap": 23.0,
          "workers": 14
        },
        {
          "t": 178.57142857142858,
          "minerals": 155,
          "gas": 8,
          "mineralRate": 699,
          "gasRate": 313,
          "supplyUsed": 22.0,
          "supplyCap": 23.0,
          "workers": 14
        },
        {
          "t": 185.71428571428572,
          "minerals": 180,
          "gas": 48,
          "mineralRate": 671,
          "gasRate": 313,
          "supplyUsed": 24.0,
          "supplyCap": 31.0,
          "workers": 14
        },
        {
          "t": 192.85714285714286,
          "minerals": 215,
          "gas": 38,
          "mineralRate": 727,
          "gasRate": 313,
          "supplyUsed": 25.0,
          "supplyCap": 31.0,
          "workers": 14
        },
        {
          "t": 200.0,
          "minerals": 240,
          "gas": 28,
          "mineralRate": 727,
          "gasRate": 335,
          "supplyUsed": 26.0,
          "supplyCap": 31.0,
          "workers": 15
        },
        {
          "t": 207.14285714285717,
          "minerals": 305,
          "gas": 64,
          "mineralRate": 475,
          "gasRate": 313,
          "supplyUsed": 26.0,
          "supplyCap": 31.0,
          "workers": 15
        },
        {
          "t": 214.2857142857143,
          "minerals": 225,
          "gas": 54,
          "mineralRate": 531,
          "gasRate": 335,
          "supplyUsed": 28.0,
          "supplyCap": 31.0,
          "workers": 15
        },
        {
          "t": 221.42857142857144,
          "minerals": 235,
          "gas": 44,
          "mineralRate": 503,
          "gasRate": 335,
          "supplyUsed": 29.0,
          "supplyCap": 31.0,
          "workers": 15
        },
        {
          "t": 228.57142857142858,
          "minerals": 270,
          "gas": 30,
          "mineralRate": 699,
          "gasRate": 313,
          "supplyUsed": 30.0,
          "supplyCap": 31.0,
          "workers": 16
        },
        {
          "t": 235.71428571428572,
          "minerals": 375,
          "gas": 70,
          "mineralRate": 699,
          "gasRate": 313,
          "supplyUsed": 31.0,
          "supplyCap": 31.0,
          "workers": 17
        },
        {
          "t": 242.85714285714286,
          "minerals": 345,
          "gas": 110,
          "mineralRate": 867,
          "gasRate": 335,
          "supplyUsed": 31.0,
          "supplyCap": 31.0,
          "workers": 17
        },
        {
          "t": 250.00000000000003,
          "minerals": 440,
          "gas": 150,
          "mineralRate": 867,
          "gasRate": 335,
          "supplyUsed": 27.0,
          "supplyCap": 31.0,
          "workers": 17
        },
        {
          "t": 257.14285714285717,
          "minerals": 385,
          "gas": 36,
          "mineralRate": 839,
          "gasRate": 335,
          "supplyUsed": 22.0,
          "supplyCap": 31.0,
          "workers": 18
        },
        {
          "t": 258.4821428571429,
          "minerals": 410,
          "gas": 44,
          "mineralRate": 895,
          "gasRate": 335,
          "supplyUsed": 22.0,
          "supplyCap": 31.0,
          "workers": 18
        },
        {
          "t": 258.4821428571429,
          "minerals": 410,
          "gas": 44,
          "mineralRate": 895,
          "gasRate": 335,
          "supplyUsed": 22.0,
          "supplyCap": 31.0,
          "workers": 18
        }
      ]
    }
  },
  {
    "label": "Seigneur vs SortOf TvZ -- SortOf (Zerg) on Taito Citadel LE",
    "race": "Zerg",
    "replay": {
      "source": "Seigneur_vs_SortOf_TvZ_2026-06-22.SC2Replay",
      "map": "Taito Citadel LE",
      "length": 260.17857142857144,
      "patch": "5.0.15.96883",
      "player": {
        "name": "SortOf",
        "race": "Zerg",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 0.7589285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 7.901785714285714,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 11.473214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 12.901785714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.901785714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 14.598214285714286,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 15.089285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.044642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 20.044642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 22.1875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 22.321428571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 27.232142857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 27.232142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 32.901785714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 40.17857142857143,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 40.17857142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 41.91964285714286,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 43.61607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 46.651785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 50.0,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 52.8125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 57.36607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 58.79464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 58.79464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 62.142857142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 62.142857142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 64.95535714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 64.95535714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 67.00892857142857,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 68.08035714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 70.58035714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 72.23214285714286,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 76.91964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 78.79464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 79.82142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 82.72321428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 82.72321428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 89.0625,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 89.0625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 89.50892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 90.35714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 91.96428571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 91.96428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 93.66071428571429,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 100.22321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 102.5,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 102.5,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 103.39285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 110.9375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 113.34821428571429,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 113.34821428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 113.43750000000001,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 115.53571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 115.53571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 115.80357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 117.23214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 121.65178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 122.81250000000001,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 124.06250000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 124.28571428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 132.36607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 132.94642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 132.94642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 132.94642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 132.94642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 134.375,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 134.375,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 134.375,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 134.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 136.42857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 136.42857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 140.66964285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 140.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 143.08035714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 143.92857142857144,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 145.08928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 145.08928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 145.49107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 147.67857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 149.77678571428572,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 149.9107142857143,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 153.79464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 155.26785714285714,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 156.20535714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 158.48214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 158.48214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 159.82142857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 159.82142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 161.29464285714286,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 164.50892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 169.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 171.25,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 172.00892857142858,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 172.1875,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 175.2232142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 175.3125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 175.625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 175.625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 175.625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 175.625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 175.625,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 175.625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 179.9107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.8125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 182.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 182.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 184.10714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 184.2857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 184.46428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 185.9375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 188.0357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 189.10714285714286,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 189.10714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 192.45535714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 192.45535714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 192.45535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 194.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 196.65178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 199.9107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 199.9107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 199.95535714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 199.95535714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 199.95535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 200.04464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 200.04464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 200.04464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 200.04464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 200.04464285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 200.04464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 202.36607142857144,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 205.89285714285717,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 205.89285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 206.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 207.8125,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 210.625,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 213.6607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 213.6607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 215.35714285714286,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 215.35714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 216.91964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 217.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.05357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 217.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 217.05357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 219.95535714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 219.95535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 220.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 220.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 220.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 221.33928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 224.06250000000003,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 224.06250000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 226.07142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 227.63392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 229.24107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 229.24107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 229.24107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 230.04464285714286,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 230.17857142857144,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 230.80357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 230.80357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 230.80357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 230.80357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 230.80357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 230.80357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 232.05357142857144,
          "event": "born",
          "name": "Egg"
        },
        {
          "t": 234.10714285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 236.7857142857143,
          "event": "born",
          "name": "Egg"
        },
        {
          "t": 237.63392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 237.63392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 237.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 237.63392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 237.63392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 237.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 237.63392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 237.63392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 237.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 238.3482142857143,
          "event": "born",
          "name": "Egg"
        },
        {
          "t": 242.76785714285717,
          "event": "born",
          "name": "Egg"
        },
        {
          "t": 246.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 246.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 246.38392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 246.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 246.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 246.38392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 246.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 246.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 246.38392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 247.50000000000003,
          "event": "born",
          "name": "Egg"
        },
        {
          "t": 249.06250000000003,
          "event": "born",
          "name": "Egg"
        },
        {
          "t": 249.77678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.77678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 252.63392857142858,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 253.48214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 258.2142857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 259.7767857142857,
          "event": "born",
          "name": "Larva"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 14.0,
          "workers": 12
        },
        {
          "t": 7.142857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 335,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 14.0,
          "workers": 12
        },
        {
          "t": 14.285714285714286,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 14.0,
          "workers": 13
        },
        {
          "t": 21.42857142857143,
          "minerals": 94,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 14.0,
          "workers": 14
        },
        {
          "t": 28.571428571428573,
          "minerals": 84,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 14.0,
          "workers": 15
        },
        {
          "t": 35.714285714285715,
          "minerals": 204,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 14.0,
          "workers": 15
        },
        {
          "t": 42.85714285714286,
          "minerals": 9,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 22.0,
          "workers": 14
        },
        {
          "t": 50.0,
          "minerals": 64,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 22.0,
          "workers": 14
        },
        {
          "t": 57.142857142857146,
          "minerals": 69,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 22.0,
          "workers": 14
        },
        {
          "t": 64.28571428571429,
          "minerals": 159,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 22.0,
          "workers": 16
        },
        {
          "t": 71.42857142857143,
          "minerals": 19,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 22.0,
          "workers": 16
        },
        {
          "t": 78.57142857142857,
          "minerals": 54,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 22.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 119,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 22.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 164,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 19.0,
          "supplyCap": 22.0,
          "workers": 18
        },
        {
          "t": 100.0,
          "minerals": 274,
          "gas": 8,
          "mineralRate": 867,
          "gasRate": 44,
          "supplyUsed": 19.0,
          "supplyCap": 22.0,
          "workers": 18
        },
        {
          "t": 107.14285714285715,
          "minerals": 344,
          "gas": 24,
          "mineralRate": 951,
          "gasRate": 134,
          "supplyUsed": 20.0,
          "supplyCap": 22.0,
          "workers": 19
        },
        {
          "t": 114.28571428571429,
          "minerals": 99,
          "gas": 40,
          "mineralRate": 923,
          "gasRate": 134,
          "supplyUsed": 24.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 121.42857142857143,
          "minerals": 119,
          "gas": 56,
          "mineralRate": 1007,
          "gasRate": 134,
          "supplyUsed": 26.0,
          "supplyCap": 28.0,
          "workers": 20
        },
        {
          "t": 128.57142857142858,
          "minerals": 94,
          "gas": 68,
          "mineralRate": 1007,
          "gasRate": 111,
          "supplyUsed": 27.0,
          "supplyCap": 28.0,
          "workers": 20
        },
        {
          "t": 135.71428571428572,
          "minerals": 159,
          "gas": 84,
          "mineralRate": 1007,
          "gasRate": 134,
          "supplyUsed": 28.0,
          "supplyCap": 28.0,
          "workers": 20
        },
        {
          "t": 142.85714285714286,
          "minerals": 284,
          "gas": 96,
          "mineralRate": 1035,
          "gasRate": 111,
          "supplyUsed": 28.0,
          "supplyCap": 36.0,
          "workers": 21
        },
        {
          "t": 150.0,
          "minerals": 89,
          "gas": 104,
          "mineralRate": 1063,
          "gasRate": 67,
          "supplyUsed": 28.0,
          "supplyCap": 36.0,
          "workers": 21
        },
        {
          "t": 157.14285714285714,
          "minerals": 104,
          "gas": 16,
          "mineralRate": 1063,
          "gasRate": 89,
          "supplyUsed": 28.0,
          "supplyCap": 36.0,
          "workers": 21
        },
        {
          "t": 164.2857142857143,
          "minerals": 144,
          "gas": 24,
          "mineralRate": 1091,
          "gasRate": 67,
          "supplyUsed": 30.0,
          "supplyCap": 36.0,
          "workers": 22
        },
        {
          "t": 171.42857142857144,
          "minerals": 19,
          "gas": 32,
          "mineralRate": 1175,
          "gasRate": 67,
          "supplyUsed": 32.0,
          "supplyCap": 36.0,
          "workers": 22
        },
        {
          "t": 178.57142857142858,
          "minerals": 104,
          "gas": 40,
          "mineralRate": 1203,
          "gasRate": 67,
          "supplyUsed": 33.0,
          "supplyCap": 36.0,
          "workers": 22
        },
        {
          "t": 185.71428571428572,
          "minerals": 99,
          "gas": 44,
          "mineralRate": 1231,
          "gasRate": 44,
          "supplyUsed": 36.0,
          "supplyCap": 36.0,
          "workers": 22
        },
        {
          "t": 192.85714285714286,
          "minerals": 149,
          "gas": 52,
          "mineralRate": 1203,
          "gasRate": 44,
          "supplyUsed": 36.0,
          "supplyCap": 44.0,
          "workers": 22
        },
        {
          "t": 200.0,
          "minerals": 24,
          "gas": 60,
          "mineralRate": 1259,
          "gasRate": 67,
          "supplyUsed": 40.0,
          "supplyCap": 44.0,
          "workers": 22
        },
        {
          "t": 207.14285714285717,
          "minerals": 59,
          "gas": 68,
          "mineralRate": 1203,
          "gasRate": 67,
          "supplyUsed": 40.0,
          "supplyCap": 52.0,
          "workers": 22
        },
        {
          "t": 214.2857142857143,
          "minerals": 49,
          "gas": 76,
          "mineralRate": 1147,
          "gasRate": 67,
          "supplyUsed": 41.5,
          "supplyCap": 52.0,
          "workers": 21
        },
        {
          "t": 221.42857142857144,
          "minerals": 39,
          "gas": 84,
          "mineralRate": 1175,
          "gasRate": 67,
          "supplyUsed": 43.5,
          "supplyCap": 58.0,
          "workers": 22
        },
        {
          "t": 228.57142857142858,
          "minerals": 169,
          "gas": 92,
          "mineralRate": 1203,
          "gasRate": 67,
          "supplyUsed": 43.5,
          "supplyCap": 66.0,
          "workers": 22
        },
        {
          "t": 235.71428571428572,
          "minerals": 164,
          "gas": 96,
          "mineralRate": 1175,
          "gasRate": 44,
          "supplyUsed": 46.5,
          "supplyCap": 66.0,
          "workers": 22
        },
        {
          "t": 242.85714285714286,
          "minerals": 299,
          "gas": 104,
          "mineralRate": 1147,
          "gasRate": 67,
          "supplyUsed": 45.0,
          "supplyCap": 66.0,
          "workers": 22
        },
        {
          "t": 250.00000000000003,
          "minerals": 129,
          "gas": 112,
          "mineralRate": 1175,
          "gasRate": 67,
          "supplyUsed": 47.0,
          "supplyCap": 66.0,
          "workers": 22
        },
        {
          "t": 257.14285714285717,
          "minerals": 279,
          "gas": 120,
          "mineralRate": 1175,
          "gasRate": 67,
          "supplyUsed": 46.5,
          "supplyCap": 66.0,
          "workers": 22
        },
        {
          "t": 258.4821428571429,
          "minerals": 299,
          "gas": 120,
          "mineralRate": 1175,
          "gasRate": 67,
          "supplyUsed": 46.5,
          "supplyCap": 66.0,
          "workers": 22
        }
      ]
    }
  },
  {
    "label": "SortOf vs llllllllllll ZvP -- llllllllllll (Protoss) on Blackrock LE",
    "race": "Protoss",
    "replay": {
      "source": "SortOf_vs_llllllllllll_ZvP_2026-06-23.SC2Replay",
      "map": "Blackrock LE",
      "length": 2334.508928571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "llllllllllll",
        "race": "Protoss",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 12.544642857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 24.6875,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 32.54464285714286,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 36.785714285714285,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 48.88392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 50.401785714285715,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 56.74107142857143,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 59.955357142857146,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 68.03571428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 69.41964285714286,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 76.11607142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 87.32142857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 90.84821428571429,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 99.41964285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 103.16964285714286,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 103.75,
          "event": "start",
          "name": "CyberneticsCore"
        },
        {
          "t": 111.51785714285715,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 120.00000000000001,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 123.61607142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 135.2232142857143,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 137.0982142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 137.85714285714286,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 139.46428571428572,
          "event": "done",
          "name": "CyberneticsCore"
        },
        {
          "t": 150.625,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 157.76785714285714,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 162.14285714285717,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 162.99107142857144,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 170.75892857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 172.05357142857144,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 175.0,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 180.89285714285717,
          "event": "start",
          "name": "Stargate"
        },
        {
          "t": 181.4732142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 183.48214285714286,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 187.63392857142858,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 189.55357142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 191.91964285714286,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 197.63392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 201.33928571428572,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 206.65178571428572,
          "event": "done",
          "name": "Nexus"
        },
        {
          "t": 213.52678571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 214.33035714285717,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 220.3125,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 223.75,
          "event": "done",
          "name": "Stargate"
        },
        {
          "t": 225.62500000000003,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 228.83928571428572,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 236.74107142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 242.99107142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 246.33928571428572,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 247.00892857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 251.60714285714286,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 254.68750000000003,
          "event": "born",
          "name": "Oracle"
        },
        {
          "t": 255.08928571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 255.08928571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 260.7589285714286,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 263.1696428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 267.1875,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 269.4642857142857,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 275.9821428571429,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 276.51785714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 277.4107142857143,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 279.2857142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 294.64285714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 294.7767857142857,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 294.8214285714286,
          "event": "born",
          "name": "Oracle"
        },
        {
          "t": 295.26785714285717,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 296.83035714285717,
          "event": "start",
          "name": "TwilightCouncil"
        },
        {
          "t": 299.9107142857143,
          "event": "start",
          "name": "Gateway"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 293,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 105,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 120,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 75,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 78.57142857142857,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 120,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 160,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 100.0,
          "minerals": 265,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 165,
          "gas": 4,
          "mineralRate": 839,
          "gasRate": 22,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 114.28571428571429,
          "minerals": 250,
          "gas": 12,
          "mineralRate": 755,
          "gasRate": 67,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 121.42857142857143,
          "minerals": 270,
          "gas": 28,
          "mineralRate": 839,
          "gasRate": 111,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 128.57142857142858,
          "minerals": 310,
          "gas": 44,
          "mineralRate": 783,
          "gasRate": 134,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 135.71428571428572,
          "minerals": 5,
          "gas": 60,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 10,
          "gas": 55,
          "mineralRate": 755,
          "gasRate": 156,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 150.0,
          "minerals": 70,
          "gas": 75,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 157.14285714285714,
          "minerals": 100,
          "gas": 95,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 164.2857142857143,
          "minerals": 55,
          "gas": 90,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 171.42857142857144,
          "minerals": 125,
          "gas": 110,
          "mineralRate": 979,
          "gasRate": 179,
          "supplyUsed": 27.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 178.57142857142858,
          "minerals": 190,
          "gas": 142,
          "mineralRate": 979,
          "gasRate": 246,
          "supplyUsed": 27.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 185.71428571428572,
          "minerals": 50,
          "gas": 28,
          "mineralRate": 951,
          "gasRate": 335,
          "supplyUsed": 28.0,
          "supplyCap": 29.0,
          "workers": 23
        },
        {
          "t": 192.85714285714286,
          "minerals": 110,
          "gas": 64,
          "mineralRate": 979,
          "gasRate": 313,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 24
        },
        {
          "t": 200.0,
          "minerals": 170,
          "gas": 104,
          "mineralRate": 951,
          "gasRate": 313,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 25
        },
        {
          "t": 207.14285714285717,
          "minerals": 135,
          "gas": 69,
          "mineralRate": 979,
          "gasRate": 313,
          "supplyUsed": 30.0,
          "supplyCap": 50.0,
          "workers": 25
        },
        {
          "t": 214.2857142857143,
          "minerals": 155,
          "gas": 109,
          "mineralRate": 1007,
          "gasRate": 313,
          "supplyUsed": 32.0,
          "supplyCap": 50.0,
          "workers": 26
        },
        {
          "t": 221.42857142857144,
          "minerals": 100,
          "gas": 124,
          "mineralRate": 1035,
          "gasRate": 335,
          "supplyUsed": 32.0,
          "supplyCap": 50.0,
          "workers": 27
        },
        {
          "t": 228.57142857142858,
          "minerals": 45,
          "gas": 14,
          "mineralRate": 1119,
          "gasRate": 358,
          "supplyUsed": 36.0,
          "supplyCap": 50.0,
          "workers": 28
        },
        {
          "t": 235.71428571428572,
          "minerals": 85,
          "gas": 50,
          "mineralRate": 1259,
          "gasRate": 335,
          "supplyUsed": 37.0,
          "supplyCap": 50.0,
          "workers": 28
        },
        {
          "t": 242.85714285714286,
          "minerals": 195,
          "gas": 86,
          "mineralRate": 1315,
          "gasRate": 313,
          "supplyUsed": 38.0,
          "supplyCap": 50.0,
          "workers": 29
        },
        {
          "t": 250.00000000000003,
          "minerals": 305,
          "gas": 126,
          "mineralRate": 1343,
          "gasRate": 313,
          "supplyUsed": 40.0,
          "supplyCap": 50.0,
          "workers": 31
        },
        {
          "t": 257.14285714285717,
          "minerals": 275,
          "gas": 166,
          "mineralRate": 1427,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 50.0,
          "workers": 33
        },
        {
          "t": 264.2857142857143,
          "minerals": 300,
          "gas": 56,
          "mineralRate": 1427,
          "gasRate": 335,
          "supplyUsed": 45.0,
          "supplyCap": 50.0,
          "workers": 34
        },
        {
          "t": 271.42857142857144,
          "minerals": 375,
          "gas": 96,
          "mineralRate": 1539,
          "gasRate": 335,
          "supplyUsed": 47.0,
          "supplyCap": 58.0,
          "workers": 35
        },
        {
          "t": 278.5714285714286,
          "minerals": 65,
          "gas": 132,
          "mineralRate": 1567,
          "gasRate": 335,
          "supplyUsed": 47.0,
          "supplyCap": 58.0,
          "workers": 36
        },
        {
          "t": 285.7142857142857,
          "minerals": 150,
          "gas": 168,
          "mineralRate": 1595,
          "gasRate": 313,
          "supplyUsed": 49.0,
          "supplyCap": 58.0,
          "workers": 37
        },
        {
          "t": 292.8571428571429,
          "minerals": 355,
          "gas": 208,
          "mineralRate": 1651,
          "gasRate": 313,
          "supplyUsed": 49.0,
          "supplyCap": 58.0,
          "workers": 37
        },
        {
          "t": 300.0,
          "minerals": 115,
          "gas": 148,
          "mineralRate": 1763,
          "gasRate": 313,
          "supplyUsed": 49.0,
          "supplyCap": 66.0,
          "workers": 39
        }
      ]
    }
  },
  {
    "label": "SortOf vs llllllllllll ZvP -- SortOf (Zerg) on Blackrock LE",
    "race": "Zerg",
    "replay": {
      "source": "SortOf_vs_llllllllllll_ZvP_2026-06-23.SC2Replay",
      "map": "Blackrock LE",
      "length": 2334.508928571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "SortOf",
        "race": "Zerg",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 0.4017857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 9.910714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 10.089285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 12.544642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.544642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 16.205357142857142,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 19.59821428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 21.875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 22.232142857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 22.232142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 28.34821428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 28.34821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 29.107142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 30.80357142857143,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 30.84821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 34.017857142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 34.017857142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 38.61607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 39.464285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 42.99107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 42.99107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 48.125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 57.32142857142858,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 57.32142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 57.41071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 57.41071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 57.63392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 57.901785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 66.5625,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 67.14285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 67.23214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 69.55357142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 69.55357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 69.55357142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 69.55357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 70.04464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 70.04464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 72.32142857142857,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 76.65178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 77.00892857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 79.375,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 79.375,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 86.16071428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 86.96428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 87.99107142857143,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 89.15178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 89.15178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 95.66964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 99.10714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 99.10714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 102.76785714285715,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 105.17857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 106.38392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 114.68750000000001,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 115.80357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 118.52678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 118.52678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 118.75000000000001,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 118.83928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 124.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 133.6607142857143,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 133.6607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 133.70535714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 135.66964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 135.98214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.98214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.98214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 138.0357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 143.21428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 150.17857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 150.17857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 152.7232142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 152.8125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 152.8125,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 152.8125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 157.94642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 162.23214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 167.23214285714286,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 170.08928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 170.08928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 171.25,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 171.74107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 174.19642857142858,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 174.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 174.55357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 179.2857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 181.20535714285717,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 181.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 183.39285714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 183.70535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 184.64285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 186.69642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 186.69642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 188.39285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 188.39285714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 188.39285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 190.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 191.42857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 191.42857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 193.21428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 195.625,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 197.23214285714286,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 197.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 197.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 200.26785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 202.5,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 202.5,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 202.7232142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 203.9732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 203.9732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 209.64285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 209.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 209.64285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 209.64285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 209.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.1875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.23214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.36607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 212.54464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 214.375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 214.5982142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 215.13392857142858,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 216.11607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 216.11607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 216.11607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 216.11607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 217.67857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 217.85714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 221.74107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.16964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 223.30357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 226.51785714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 226.51785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 229.82142857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 229.82142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 230.00000000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 230.00000000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 231.25000000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 231.60714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.87500000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 235.80357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 238.6607142857143,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 238.6607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 239.19642857142858,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 240.31250000000003,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 240.31250000000003,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 240.31250000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 240.44642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 240.44642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 240.44642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 240.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 241.02678571428572,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 241.25000000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 242.27678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 243.3482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.52678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.70535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.75000000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 243.75000000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 243.88392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 243.88392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 244.01785714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 244.01785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 245.93750000000003,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 246.4732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 247.67857142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 247.81250000000003,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 247.94642857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 247.94642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.16964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 249.01785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 250.26785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.67857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 252.67857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 253.57142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 254.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 257.67857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 257.67857142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 258.5267857142857,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 258.61607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 258.61607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 258.75,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 259.1071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 259.7767857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 259.9107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 260.625,
          "event": "done",
          "name": "SporeCrawler"
        },
        {
          "t": 261.1607142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 261.1607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 262.45535714285717,
          "event": "done",
          "name": "SporeCrawler"
        },
        {
          "t": 262.45535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 264.8214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 264.8214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 264.8214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 264.8214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 265.2232142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 265.7142857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 265.7142857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 267.1875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 269.2857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 269.4196428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 274.8214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 274.8214285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 274.8214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.25,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 276.25,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 276.25,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.5625,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 276.6964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 276.74107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 276.9196428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 277.0982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 277.36607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 277.36607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 278.7946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 278.8392857142857,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 279.8214285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 280.3125,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 280.3125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 286.20535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 288.30357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 290.6696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 290.6696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 290.6696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 290.6696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 290.7142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.14285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 293.08035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 294.9107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 294.95535714285717,
          "event": "born",
          "name": "Overseer"
        },
        {
          "t": 294.95535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 295.7142857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 296.0714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.1696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 299.7321428571429,
          "event": "morph",
          "name": "Egg"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 335,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 55,
          "gas": 0,
          "mineralRate": 475,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 84,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 54,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 149,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 13
        },
        {
          "t": 57.142857142857146,
          "minerals": 234,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 179,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 189,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 29,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 129,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 174,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 100.0,
          "minerals": 274,
          "gas": 8,
          "mineralRate": 839,
          "gasRate": 44,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 4,
          "gas": 28,
          "mineralRate": 699,
          "gasRate": 134,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 109,
          "gas": 48,
          "mineralRate": 783,
          "gasRate": 179,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 39,
          "gas": 64,
          "mineralRate": 699,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 129,
          "gas": 84,
          "mineralRate": 699,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 184,
          "gas": 100,
          "mineralRate": 783,
          "gasRate": 134,
          "supplyUsed": 19.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 142.85714285714286,
          "minerals": 144,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 22,
          "supplyUsed": 20.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 69,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 157.14285714285714,
          "minerals": 189,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 18
        },
        {
          "t": 164.2857142857143,
          "minerals": 259,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 23.0,
          "supplyCap": 28.0,
          "workers": 18
        },
        {
          "t": 171.42857142857144,
          "minerals": 14,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 0,
          "supplyUsed": 23.0,
          "supplyCap": 28.0,
          "workers": 18
        },
        {
          "t": 178.57142857142858,
          "minerals": 84,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 24.0,
          "supplyCap": 32.0,
          "workers": 18
        },
        {
          "t": 185.71428571428572,
          "minerals": 54,
          "gas": 0,
          "mineralRate": 1007,
          "gasRate": 0,
          "supplyUsed": 25.0,
          "supplyCap": 32.0,
          "workers": 18
        },
        {
          "t": 192.85714285714286,
          "minerals": 174,
          "gas": 0,
          "mineralRate": 1035,
          "gasRate": 0,
          "supplyUsed": 24.0,
          "supplyCap": 32.0,
          "workers": 19
        },
        {
          "t": 200.0,
          "minerals": 39,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 0,
          "supplyUsed": 24.0,
          "supplyCap": 32.0,
          "workers": 17
        },
        {
          "t": 207.14285714285717,
          "minerals": 143,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 27.0,
          "supplyCap": 40.0,
          "workers": 18
        },
        {
          "t": 214.2857142857143,
          "minerals": 78,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 29.0,
          "supplyCap": 40.0,
          "workers": 20
        },
        {
          "t": 221.42857142857144,
          "minerals": 63,
          "gas": 0,
          "mineralRate": 1091,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 40.0,
          "workers": 22
        },
        {
          "t": 228.57142857142858,
          "minerals": 103,
          "gas": 0,
          "mineralRate": 1119,
          "gasRate": 0,
          "supplyUsed": 34.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 235.71428571428572,
          "minerals": 103,
          "gas": 0,
          "mineralRate": 1231,
          "gasRate": 0,
          "supplyUsed": 36.5,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 242.85714285714286,
          "minerals": 8,
          "gas": 0,
          "mineralRate": 1315,
          "gasRate": 0,
          "supplyUsed": 36.5,
          "supplyCap": 44.0,
          "workers": 23
        },
        {
          "t": 250.00000000000003,
          "minerals": 73,
          "gas": 0,
          "mineralRate": 1315,
          "gasRate": 0,
          "supplyUsed": 38.5,
          "supplyCap": 44.0,
          "workers": 27
        },
        {
          "t": 257.14285714285717,
          "minerals": 83,
          "gas": 0,
          "mineralRate": 1371,
          "gasRate": 0,
          "supplyUsed": 41.0,
          "supplyCap": 44.0,
          "workers": 28
        },
        {
          "t": 264.2857142857143,
          "minerals": 63,
          "gas": 0,
          "mineralRate": 1455,
          "gasRate": 0,
          "supplyUsed": 43.0,
          "supplyCap": 44.0,
          "workers": 30
        },
        {
          "t": 271.42857142857144,
          "minerals": 223,
          "gas": 0,
          "mineralRate": 1651,
          "gasRate": 0,
          "supplyUsed": 43.5,
          "supplyCap": 44.0,
          "workers": 33
        },
        {
          "t": 278.5714285714286,
          "minerals": 153,
          "gas": 4,
          "mineralRate": 1791,
          "gasRate": 22,
          "supplyUsed": 43.5,
          "supplyCap": 44.0,
          "workers": 34
        },
        {
          "t": 285.7142857142857,
          "minerals": 113,
          "gas": 12,
          "mineralRate": 1763,
          "gasRate": 67,
          "supplyUsed": 46.5,
          "supplyCap": 52.0,
          "workers": 33
        },
        {
          "t": 292.8571428571429,
          "minerals": 18,
          "gas": 20,
          "mineralRate": 1763,
          "gasRate": 67,
          "supplyUsed": 51.0,
          "supplyCap": 52.0,
          "workers": 33
        },
        {
          "t": 300.0,
          "minerals": 43,
          "gas": 28,
          "mineralRate": 1791,
          "gasRate": 67,
          "supplyUsed": 55.0,
          "supplyCap": 60.0,
          "workers": 33
        }
      ]
    }
  },
  {
    "label": "SortOf vs llllllllllll ZvT -- llllllllllll (Terran) on Fear and Faith LE",
    "race": "Terran",
    "replay": {
      "source": "SortOf_vs_llllllllllll_ZvT_2026-06-23.SC2Replay",
      "map": "Fear and Faith LE",
      "length": 679.5982142857143,
      "patch": "5.0.16.97364",
      "player": {
        "name": "llllllllllll",
        "race": "Terran",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 12.5,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 24.59821428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 28.080357142857146,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 36.69642857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 48.79464285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 49.50892857142858,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 52.63392857142858,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 59.776785714285715,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 60.892857142857146,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 76.33928571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 81.20535714285715,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 88.4375,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 98.30357142857143,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 99.0625,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 100.53571428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 125.98214285714286,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 126.47321428571429,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 126.47321428571429,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 134.50892857142858,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 136.1607142857143,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 138.6607142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 143.3482142857143,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 157.36607142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 159.01785714285714,
          "event": "start",
          "name": "Factory"
        },
        {
          "t": 164.77678571428572,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 166.60714285714286,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 169.46428571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 177.14285714285717,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 177.45535714285717,
          "event": "start",
          "name": "BarracksReactor"
        },
        {
          "t": 181.5625,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 181.74107142857144,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 193.6607142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 194.6875,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 196.25,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 197.27678571428572,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 201.875,
          "event": "done",
          "name": "Factory"
        },
        {
          "t": 204.64285714285717,
          "event": "morph",
          "name": "FactoryFlying"
        },
        {
          "t": 207.14285714285717,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 207.14285714285717,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 210.04464285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 213.16964285714286,
          "event": "done",
          "name": "BarracksReactor"
        },
        {
          "t": 213.21428571428572,
          "event": "start",
          "name": "Starport"
        },
        {
          "t": 213.52678571428572,
          "event": "morph",
          "name": "BarracksFlying"
        },
        {
          "t": 213.57142857142858,
          "event": "morph",
          "name": "Reactor"
        },
        {
          "t": 216.20535714285717,
          "event": "morph",
          "name": "Factory"
        },
        {
          "t": 216.20535714285717,
          "event": "morph",
          "name": "FactoryReactor"
        },
        {
          "t": 220.44642857142858,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 222.14285714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 231.74107142857144,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 234.24107142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 239.06250000000003,
          "event": "morph",
          "name": "Barracks"
        },
        {
          "t": 241.87500000000003,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 246.33928571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 248.92857142857144,
          "event": "done",
          "name": "Starport"
        },
        {
          "t": 252.45535714285717,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 253.21428571428572,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 258.4375,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 259.4642857142857,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 259.4642857142857,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 263.4375,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 263.8392857142857,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 264.7767857142857,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 266.11607142857144,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 270.6696428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 273.8839285714286,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 273.8839285714286,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 275.4017857142857,
          "event": "start",
          "name": "BarracksTechLab"
        },
        {
          "t": 282.76785714285717,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 283.0357142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 284.5089285714286,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 286.3839285714286,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 288.70535714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 293.2589285714286,
          "event": "done",
          "name": "BarracksTechLab"
        },
        {
          "t": 295.1339285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 295.26785714285717,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 295.3125,
          "event": "born",
          "name": "Liberator"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 335,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 475,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 10,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 55,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 120,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 55,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 0,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 78.57142857142857,
          "minerals": 65,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 135,
          "gas": 4,
          "mineralRate": 699,
          "gasRate": 22,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 92.85714285714286,
          "minerals": 205,
          "gas": 24,
          "mineralRate": 615,
          "gasRate": 134,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 100.0,
          "minerals": 285,
          "gas": 44,
          "mineralRate": 615,
          "gasRate": 156,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 107.14285714285715,
          "minerals": 165,
          "gas": 14,
          "mineralRate": 671,
          "gasRate": 156,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 255,
          "gas": 34,
          "mineralRate": 727,
          "gasRate": 179,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 340,
          "gas": 54,
          "mineralRate": 755,
          "gasRate": 179,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 128.57142857142858,
          "minerals": 365,
          "gas": 70,
          "mineralRate": 671,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 135.71428571428572,
          "minerals": 420,
          "gas": 40,
          "mineralRate": 839,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 142.85714285714286,
          "minerals": 130,
          "gas": 60,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 80,
          "gas": 80,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 157.14285714285714,
          "minerals": 125,
          "gas": 100,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 164.2857142857143,
          "minerals": 35,
          "gas": 20,
          "mineralRate": 923,
          "gasRate": 179,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 171.42857142857144,
          "minerals": 145,
          "gas": 36,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 178.57142857142858,
          "minerals": 215,
          "gas": 6,
          "mineralRate": 1007,
          "gasRate": 156,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 185.71428571428572,
          "minerals": 280,
          "gas": 26,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 192.85714285714286,
          "minerals": 20,
          "gas": 46,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 200.0,
          "minerals": 65,
          "gas": 66,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 207.14285714285717,
          "minerals": 170,
          "gas": 86,
          "mineralRate": 839,
          "gasRate": 179,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 214.2857142857143,
          "minerals": 80,
          "gas": 6,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 221.42857142857144,
          "minerals": 85,
          "gas": 22,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 22
        },
        {
          "t": 228.57142857142858,
          "minerals": 200,
          "gas": 42,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 29.0,
          "workers": 23
        },
        {
          "t": 235.71428571428572,
          "minerals": 55,
          "gas": 37,
          "mineralRate": 1147,
          "gasRate": 156,
          "supplyUsed": 31.0,
          "supplyCap": 42.0,
          "workers": 24
        },
        {
          "t": 242.85714285714286,
          "minerals": 50,
          "gas": 82,
          "mineralRate": 1203,
          "gasRate": 156,
          "supplyUsed": 31.0,
          "supplyCap": 42.0,
          "workers": 24
        },
        {
          "t": 250.00000000000003,
          "minerals": 180,
          "gas": 114,
          "mineralRate": 1203,
          "gasRate": 223,
          "supplyUsed": 32.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 257.14285714285717,
          "minerals": 170,
          "gas": 29,
          "mineralRate": 1231,
          "gasRate": 335,
          "supplyUsed": 35.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 264.2857142857143,
          "minerals": 65,
          "gas": 65,
          "mineralRate": 1315,
          "gasRate": 335,
          "supplyUsed": 40.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 271.42857142857144,
          "minerals": 50,
          "gas": 101,
          "mineralRate": 1539,
          "gasRate": 313,
          "supplyUsed": 40.0,
          "supplyCap": 55.0,
          "workers": 27
        },
        {
          "t": 278.5714285714286,
          "minerals": 60,
          "gas": 116,
          "mineralRate": 1567,
          "gasRate": 313,
          "supplyUsed": 40.0,
          "supplyCap": 55.0,
          "workers": 27
        },
        {
          "t": 285.7142857142857,
          "minerals": 160,
          "gas": 156,
          "mineralRate": 1539,
          "gasRate": 313,
          "supplyUsed": 41.0,
          "supplyCap": 55.0,
          "workers": 28
        },
        {
          "t": 292.8571428571429,
          "minerals": 85,
          "gas": 196,
          "mineralRate": 1567,
          "gasRate": 313,
          "supplyUsed": 46.0,
          "supplyCap": 55.0,
          "workers": 29
        },
        {
          "t": 300.0,
          "minerals": 300,
          "gas": 236,
          "mineralRate": 1679,
          "gasRate": 335,
          "supplyUsed": 44.0,
          "supplyCap": 55.0,
          "workers": 30
        }
      ]
    }
  },
  {
    "label": "SortOf vs llllllllllll ZvT -- SortOf (Zerg) on Fear and Faith LE",
    "race": "Zerg",
    "replay": {
      "source": "SortOf_vs_llllllllllll_ZvT_2026-06-23.SC2Replay",
      "map": "Fear and Faith LE",
      "length": 679.5982142857143,
      "patch": "5.0.16.97364",
      "player": {
        "name": "SortOf",
        "race": "Zerg",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 0.5803571428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 10.089285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 12.723214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.723214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 12.723214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 16.875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 22.232142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 22.276785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 24.86607142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 24.86607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 29.017857142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 29.017857142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 31.74107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 33.48214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 34.41964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 34.41964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 41.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 42.767857142857146,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 42.767857142857146,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 50.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 51.339285714285715,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 51.339285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 52.23214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 52.36607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 54.91071428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 54.91071428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 60.267857142857146,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 61.74107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 64.375,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 64.375,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 64.50892857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 64.50892857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 69.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 70.04464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 72.36607142857143,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 73.88392857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 73.88392857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 79.28571428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 80.04464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 82.1875,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 82.1875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 88.79464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 92.1875,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 92.1875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 95.71428571428572,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 98.30357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 98.92857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 103.34821428571429,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 104.46428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 107.8125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 111.07142857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 111.07142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 112.76785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 116.60714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 116.60714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 117.32142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 118.79464285714286,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 124.77678571428572,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 125.62500000000001,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 126.83035714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 130.625,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 130.625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 130.71428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 136.33928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 137.0982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 137.76785714285714,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 137.76785714285714,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 145.8482142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 147.85714285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 147.85714285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 147.85714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 149.24107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 149.24107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 150.08928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 155.35714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 157.85714285714286,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 159.01785714285714,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 162.23214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 162.23214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 162.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 164.86607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 167.14285714285717,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 167.14285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 167.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 167.94642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 174.375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 176.33928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 176.65178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 180.04464285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 180.04464285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 180.08928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 180.08928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 180.2232142857143,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 180.2232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 180.89285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 183.88392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.1607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 187.90178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 188.08035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 188.25892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 188.48214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 188.48214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 188.52678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 188.52678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 193.0357142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 193.0357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 193.52678571428572,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 194.9107142857143,
          "event": "start",
          "name": "EvolutionChamber"
        },
        {
          "t": 195.66964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 200.66964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 200.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 200.66964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 200.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 201.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 203.57142857142858,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 205.08928571428572,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 205.17857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 205.3125,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 206.02678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 206.02678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 206.51785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 207.54464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 209.55357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 213.83928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 214.6875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 215.80357142857144,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 216.02678571428572,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 216.02678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 218.16964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 218.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 218.16964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 218.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 218.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 218.3482142857143,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 218.3482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 218.79464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 218.79464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 224.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 224.33035714285717,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 224.68750000000003,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 224.68750000000003,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 224.68750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 225.5357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 226.69642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 226.69642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 226.69642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 229.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 230.93750000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 230.93750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 230.93750000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 230.93750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 231.02678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.69642857142858,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 231.69642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 232.81250000000003,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 233.6607142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 233.70535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 234.19642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 234.37500000000003,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 234.55357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 236.07142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 236.07142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.76785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 238.21428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 243.21428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 245.13392857142858,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 245.2232142857143,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 245.58035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 247.7232142857143,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 247.7232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.16964285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.16964285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 248.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.21428571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 248.21428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.21428571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 248.21428571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.9107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.9107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.9107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 250.35714285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 250.35714285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 251.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 252.7232142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 253.30357142857144,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 255.08928571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.17857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.35714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 255.49107142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 255.5357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 259.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 260.0446428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 260.9821428571429,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 262.05357142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 262.05357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 262.8125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 262.99107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 263.1696428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 263.3482142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 263.3482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 268.08035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 268.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 268.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 268.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 268.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 268.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 269.5089285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 270.8482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.61607142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 275.0,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 275.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 275.0892857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 277.0089285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.0089285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.0089285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 277.1875,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.1875,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 277.1875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 279.01785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 279.4642857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 280.2232142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 280.2232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.3571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 280.3571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.3571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 280.3571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.3571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 280.3571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.3571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 280.3571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.3571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 280.3571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.5357142857143,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 281.1607142857143,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 281.25,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 282.0982142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 282.9464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 282.99107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 282.99107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 283.4375,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 284.5089285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.5982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.8214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 285.0,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 285.17857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 287.76785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 287.76785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 288.5267857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 289.7321428571429,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 289.8214285714286,
          "event": "start",
          "name": "BanelingNest"
        },
        {
          "t": 294.01785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 295.0892857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 295.0892857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 296.5625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 296.5625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 296.6071428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 296.6071428571429,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 296.6071428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 296.6071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.0357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 299.1071428571429,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 299.1071428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 299.9107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 299.9107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 299.9107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 299.9107142857143,
          "event": "morph",
          "name": "Larva"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 251,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 12.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 55,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 134,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 119,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 149,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 199,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 99,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 144,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 254,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 9,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 44,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 114.28571428571429,
          "minerals": 49,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 169,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 49,
          "gas": 4,
          "mineralRate": 923,
          "gasRate": 22,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 114,
          "gas": 8,
          "mineralRate": 951,
          "gasRate": 44,
          "supplyUsed": 21.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 142.85714285714286,
          "minerals": 174,
          "gas": 20,
          "mineralRate": 923,
          "gasRate": 89,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 18
        },
        {
          "t": 150.0,
          "minerals": 114,
          "gas": 32,
          "mineralRate": 951,
          "gasRate": 111,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 157.14285714285714,
          "minerals": 174,
          "gas": 52,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 28.0,
          "workers": 19
        },
        {
          "t": 164.2857142857143,
          "minerals": 184,
          "gas": 72,
          "mineralRate": 979,
          "gasRate": 179,
          "supplyUsed": 25.0,
          "supplyCap": 28.0,
          "workers": 20
        },
        {
          "t": 171.42857142857144,
          "minerals": 204,
          "gas": 88,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 27.0,
          "supplyCap": 32.0,
          "workers": 20
        },
        {
          "t": 178.57142857142858,
          "minerals": 164,
          "gas": 4,
          "mineralRate": 923,
          "gasRate": 134,
          "supplyUsed": 28.0,
          "supplyCap": 32.0,
          "workers": 20
        },
        {
          "t": 185.71428571428572,
          "minerals": 244,
          "gas": 8,
          "mineralRate": 1063,
          "gasRate": 44,
          "supplyUsed": 29.0,
          "supplyCap": 40.0,
          "workers": 22
        },
        {
          "t": 192.85714285714286,
          "minerals": 284,
          "gas": 16,
          "mineralRate": 1147,
          "gasRate": 67,
          "supplyUsed": 31.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 200.0,
          "minerals": 334,
          "gas": 24,
          "mineralRate": 1147,
          "gasRate": 67,
          "supplyUsed": 30.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 207.14285714285717,
          "minerals": 71,
          "gas": 32,
          "mineralRate": 1091,
          "gasRate": 67,
          "supplyUsed": 33.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 214.2857142857143,
          "minerals": 36,
          "gas": 40,
          "mineralRate": 1287,
          "gasRate": 67,
          "supplyUsed": 35.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 221.42857142857144,
          "minerals": 106,
          "gas": 44,
          "mineralRate": 1427,
          "gasRate": 44,
          "supplyUsed": 36.5,
          "supplyCap": 40.0,
          "workers": 27
        },
        {
          "t": 228.57142857142858,
          "minerals": 96,
          "gas": 52,
          "mineralRate": 1399,
          "gasRate": 44,
          "supplyUsed": 38.5,
          "supplyCap": 40.0,
          "workers": 27
        },
        {
          "t": 235.71428571428572,
          "minerals": 126,
          "gas": 60,
          "mineralRate": 1427,
          "gasRate": 67,
          "supplyUsed": 39.0,
          "supplyCap": 48.0,
          "workers": 29
        },
        {
          "t": 242.85714285714286,
          "minerals": 126,
          "gas": 68,
          "mineralRate": 1539,
          "gasRate": 67,
          "supplyUsed": 43.0,
          "supplyCap": 48.0,
          "workers": 29
        },
        {
          "t": 250.00000000000003,
          "minerals": 86,
          "gas": 76,
          "mineralRate": 1567,
          "gasRate": 67,
          "supplyUsed": 46.0,
          "supplyCap": 56.0,
          "workers": 32
        },
        {
          "t": 257.14285714285717,
          "minerals": 236,
          "gas": 88,
          "mineralRate": 1651,
          "gasRate": 89,
          "supplyUsed": 47.0,
          "supplyCap": 56.0,
          "workers": 33
        },
        {
          "t": 264.2857142857143,
          "minerals": 351,
          "gas": 108,
          "mineralRate": 1735,
          "gasRate": 156,
          "supplyUsed": 49.0,
          "supplyCap": 56.0,
          "workers": 35
        },
        {
          "t": 271.42857142857144,
          "minerals": 191,
          "gas": 128,
          "mineralRate": 1763,
          "gasRate": 156,
          "supplyUsed": 56.0,
          "supplyCap": 56.0,
          "workers": 35
        },
        {
          "t": 278.5714285714286,
          "minerals": 251,
          "gas": 48,
          "mineralRate": 1763,
          "gasRate": 179,
          "supplyUsed": 55.5,
          "supplyCap": 60.0,
          "workers": 35
        },
        {
          "t": 285.7142857142857,
          "minerals": 261,
          "gas": 68,
          "mineralRate": 1735,
          "gasRate": 179,
          "supplyUsed": 57.5,
          "supplyCap": 60.0,
          "workers": 42
        },
        {
          "t": 292.8571428571429,
          "minerals": 231,
          "gas": 34,
          "mineralRate": 1707,
          "gasRate": 156,
          "supplyUsed": 57.5,
          "supplyCap": 60.0,
          "workers": 40
        },
        {
          "t": 300.0,
          "minerals": 311,
          "gas": 54,
          "mineralRate": 1819,
          "gasRate": 156,
          "supplyUsed": 60.0,
          "supplyCap": 68.0,
          "workers": 43
        }
      ]
    }
  },
  {
    "label": "UEDdemonFan vs ByuN PvT -- UED\u0434\u0435\u043c\u043e\u043dFan (Protoss) on Lockdown LE",
    "race": "Protoss",
    "replay": {
      "source": "UEDdemonFan_vs_ByuN_PvT_2026-06-23.SC2Replay",
      "map": "Lockdown LE",
      "length": 662.8571428571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "UED\u0434\u0435\u043c\u043e\u043dFan",
        "race": "Protoss",
        "result": "Loss"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 11.517857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 19.59821428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 27.67857142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 32.5,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 38.88392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 50.35714285714286,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 50.98214285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 54.330357142857146,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 63.080357142857146,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 64.41964285714286,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 71.38392857142857,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 79.46428571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 85.84821428571429,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 89.41964285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 100.75892857142858,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 101.51785714285715,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 102.76785714285715,
          "event": "start",
          "name": "CyberneticsCore"
        },
        {
          "t": 113.61607142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 119.15178571428572,
          "event": "start",
          "name": "Nexus"
        },
        {
          "t": 127.36607142857143,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 138.48214285714286,
          "event": "done",
          "name": "CyberneticsCore"
        },
        {
          "t": 142.8125,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 145.2232142857143,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 155.98214285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 160.2232142857143,
          "event": "born",
          "name": "Adept"
        },
        {
          "t": 164.24107142857144,
          "event": "done",
          "name": "Assimilator"
        },
        {
          "t": 168.08035714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 177.00892857142858,
          "event": "start",
          "name": "TwilightCouncil"
        },
        {
          "t": 180.17857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 187.1875,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 190.35714285714286,
          "event": "born",
          "name": "AdeptPhaseShift"
        },
        {
          "t": 190.58035714285717,
          "event": "done",
          "name": "Nexus"
        },
        {
          "t": 192.27678571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 203.125,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 203.9732142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 211.20535714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 212.05357142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 212.7232142857143,
          "event": "done",
          "name": "TwilightCouncil"
        },
        {
          "t": 214.2857142857143,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 219.2857142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 220.13392857142858,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 230.17857142857144,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 230.71428571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 231.25000000000003,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 239.19642857142858,
          "event": "start",
          "name": "Gateway"
        },
        {
          "t": 242.27678571428572,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 242.81250000000003,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 247.36607142857144,
          "event": "upgrade",
          "name": "WarpGateResearch"
        },
        {
          "t": 249.10714285714286,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 254.37500000000003,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 254.9107142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 258.1696428571429,
          "event": "start",
          "name": "RoboticsFacility"
        },
        {
          "t": 262.99107142857144,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 264.2857142857143,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 266.4732142857143,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 267.0089285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 274.5089285714286,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 278.5714285714286,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 279.1071428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 280.8482142857143,
          "event": "done",
          "name": "Pylon"
        },
        {
          "t": 283.8392857142857,
          "event": "born",
          "name": "Stalker"
        },
        {
          "t": 285.625,
          "event": "done",
          "name": "Gateway"
        },
        {
          "t": 286.20535714285717,
          "event": "start",
          "name": "Pylon"
        },
        {
          "t": 290.6696428571429,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 291.20535714285717,
          "event": "born",
          "name": "Probe"
        },
        {
          "t": 295.6696428571429,
          "event": "start",
          "name": "Assimilator"
        },
        {
          "t": 295.9375,
          "event": "done",
          "name": "Assimilator"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 335,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 28.571428571428573,
          "minerals": 75,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 35.714285714285715,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 42.85714285714286,
          "minerals": 20,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 110,
          "gas": 0,
          "mineralRate": 727,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 71.42857142857143,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 95,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 150,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 92.85714285714286,
          "minerals": 245,
          "gas": 8,
          "mineralRate": 895,
          "gasRate": 44,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 285,
          "gas": 20,
          "mineralRate": 811,
          "gasRate": 111,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 235,
          "gas": 36,
          "mineralRate": 811,
          "gasRate": 134,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 114.28571428571429,
          "minerals": 345,
          "gas": 52,
          "mineralRate": 839,
          "gasRate": 134,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 121.42857142857143,
          "minerals": 30,
          "gas": 68,
          "mineralRate": 811,
          "gasRate": 134,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 128.57142857142858,
          "minerals": 35,
          "gas": 88,
          "mineralRate": 811,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 135.71428571428572,
          "minerals": 85,
          "gas": 108,
          "mineralRate": 783,
          "gasRate": 179,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 55,
          "gas": 103,
          "mineralRate": 811,
          "gasRate": 179,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 19
        },
        {
          "t": 150.0,
          "minerals": 55,
          "gas": 69,
          "mineralRate": 783,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 157.14285714285714,
          "minerals": 110,
          "gas": 89,
          "mineralRate": 839,
          "gasRate": 156,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 164.2857142857143,
          "minerals": 100,
          "gas": 59,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 171.42857142857144,
          "minerals": 160,
          "gas": 83,
          "mineralRate": 979,
          "gasRate": 179,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 178.57142857142858,
          "minerals": 70,
          "gas": 15,
          "mineralRate": 923,
          "gasRate": 246,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 185.71428571428572,
          "minerals": 125,
          "gas": 51,
          "mineralRate": 923,
          "gasRate": 313,
          "supplyUsed": 26.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 192.85714285714286,
          "minerals": 50,
          "gas": 33,
          "mineralRate": 923,
          "gasRate": 291,
          "supplyUsed": 30.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 200.0,
          "minerals": 60,
          "gas": 73,
          "mineralRate": 951,
          "gasRate": 313,
          "supplyUsed": 30.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 207.14285714285717,
          "minerals": 65,
          "gas": 113,
          "mineralRate": 951,
          "gasRate": 313,
          "supplyUsed": 32.0,
          "supplyCap": 42.0,
          "workers": 24
        },
        {
          "t": 214.2857142857143,
          "minerals": 45,
          "gas": 3,
          "mineralRate": 1035,
          "gasRate": 313,
          "supplyUsed": 34.0,
          "supplyCap": 42.0,
          "workers": 26
        },
        {
          "t": 221.42857142857144,
          "minerals": 70,
          "gas": 43,
          "mineralRate": 1091,
          "gasRate": 335,
          "supplyUsed": 36.0,
          "supplyCap": 42.0,
          "workers": 28
        },
        {
          "t": 228.57142857142858,
          "minerals": 120,
          "gas": 83,
          "mineralRate": 1175,
          "gasRate": 358,
          "supplyUsed": 36.0,
          "supplyCap": 42.0,
          "workers": 28
        },
        {
          "t": 235.71428571428572,
          "minerals": 175,
          "gas": 119,
          "mineralRate": 1259,
          "gasRate": 335,
          "supplyUsed": 38.0,
          "supplyCap": 42.0,
          "workers": 30
        },
        {
          "t": 242.85714285714286,
          "minerals": 90,
          "gas": 155,
          "mineralRate": 1343,
          "gasRate": 313,
          "supplyUsed": 40.0,
          "supplyCap": 42.0,
          "workers": 32
        },
        {
          "t": 250.00000000000003,
          "minerals": 30,
          "gas": 145,
          "mineralRate": 1399,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 50.0,
          "workers": 32
        },
        {
          "t": 257.14285714285717,
          "minerals": 65,
          "gas": 81,
          "mineralRate": 1511,
          "gasRate": 313,
          "supplyUsed": 44.0,
          "supplyCap": 50.0,
          "workers": 34
        },
        {
          "t": 264.2857142857143,
          "minerals": 45,
          "gas": 121,
          "mineralRate": 1455,
          "gasRate": 313,
          "supplyUsed": 44.0,
          "supplyCap": 50.0,
          "workers": 34
        },
        {
          "t": 271.42857142857144,
          "minerals": 125,
          "gas": 111,
          "mineralRate": 1651,
          "gasRate": 335,
          "supplyUsed": 48.0,
          "supplyCap": 50.0,
          "workers": 36
        },
        {
          "t": 278.5714285714286,
          "minerals": 145,
          "gas": 151,
          "mineralRate": 1651,
          "gasRate": 335,
          "supplyUsed": 48.0,
          "supplyCap": 50.0,
          "workers": 36
        },
        {
          "t": 285.7142857142857,
          "minerals": 130,
          "gas": 137,
          "mineralRate": 1735,
          "gasRate": 313,
          "supplyUsed": 52.0,
          "supplyCap": 58.0,
          "workers": 38
        },
        {
          "t": 292.8571428571429,
          "minerals": 120,
          "gas": 127,
          "mineralRate": 1819,
          "gasRate": 335,
          "supplyUsed": 56.0,
          "supplyCap": 58.0,
          "workers": 40
        },
        {
          "t": 300.0,
          "minerals": 130,
          "gas": 121,
          "mineralRate": 1819,
          "gasRate": 358,
          "supplyUsed": 56.0,
          "supplyCap": 58.0,
          "workers": 40
        }
      ]
    }
  },
  {
    "label": "UEDdemonFan vs ByuN PvT -- ByuN (Terran) on Lockdown LE",
    "race": "Terran",
    "replay": {
      "source": "UEDdemonFan_vs_ByuN_PvT_2026-06-23.SC2Replay",
      "map": "Lockdown LE",
      "length": 662.8571428571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "ByuN",
        "race": "Terran",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 0.0,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 12.723214285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 24.821428571428573,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 36.91964285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 39.464285714285715,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 49.017857142857146,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 60.892857142857146,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 61.11607142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 63.34821428571429,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 65.89285714285715,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 73.21428571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 85.3125,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 87.32142857142858,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 97.41071428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 101.47321428571429,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 103.03571428571429,
          "event": "morph",
          "name": "SupplyDepot"
        },
        {
          "t": 109.77678571428572,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 110.22321428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 135.5357142857143,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 135.625,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 139.46428571428572,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 139.46428571428572,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 142.27678571428572,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 145.89285714285714,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 147.85714285714286,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 151.96428571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 164.64285714285717,
          "event": "start",
          "name": "Factory"
        },
        {
          "t": 166.51785714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 168.30357142857144,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 168.92857142857144,
          "event": "start",
          "name": "BarracksReactor"
        },
        {
          "t": 169.2857142857143,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 176.69642857142858,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 181.4732142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 193.57142857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 198.125,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 204.64285714285717,
          "event": "done",
          "name": "BarracksReactor"
        },
        {
          "t": 205.66964285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 206.96428571428572,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 207.5,
          "event": "done",
          "name": "Factory"
        },
        {
          "t": 209.19642857142858,
          "event": "start",
          "name": "Starport"
        },
        {
          "t": 211.42857142857144,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 211.42857142857144,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 217.76785714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 224.64285714285717,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 224.77678571428572,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 229.5982142857143,
          "event": "born",
          "name": "WidowMineBurrowed"
        },
        {
          "t": 229.86607142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 237.36607142857144,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 239.95535714285717,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 239.95535714285717,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 241.96428571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 243.21428571428572,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 244.9107142857143,
          "event": "done",
          "name": "Starport"
        },
        {
          "t": 244.95535714285717,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 245.08928571428572,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 251.91964285714286,
          "event": "born",
          "name": "WidowMineBurrowed"
        },
        {
          "t": 253.9732142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 254.06250000000003,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 264.64285714285717,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 264.9107142857143,
          "event": "start",
          "name": "Bunker"
        },
        {
          "t": 265.3571428571429,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 266.0714285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 268.4821428571429,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 268.4821428571429,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 273.30357142857144,
          "event": "born",
          "name": "WidowMine"
        },
        {
          "t": 273.6607142857143,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 275.3571428571429,
          "event": "start",
          "name": "FactoryTechLab"
        },
        {
          "t": 276.0714285714286,
          "event": "born",
          "name": "Medivac"
        },
        {
          "t": 276.25,
          "event": "start",
          "name": "StarportTechLab"
        },
        {
          "t": 280.3571428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 280.49107142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 283.2142857142857,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 283.3482142857143,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 286.7857142857143,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 289.6875,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 289.9107142857143,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 290.89285714285717,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 292.45535714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 292.5892857142857,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 293.2142857142857,
          "event": "done",
          "name": "FactoryTechLab"
        },
        {
          "t": 293.4821428571429,
          "event": "done",
          "name": "Bunker"
        },
        {
          "t": 294.1071428571429,
          "event": "done",
          "name": "StarportTechLab"
        },
        {
          "t": 295.0892857142857,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 295.3571428571429,
          "event": "start",
          "name": "SupplyDepot"
        }
      ],
      "economy": [
        {
          "t": 0.044642857142857144,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 0,
          "gasRate": 0,
          "supplyUsed": 8.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 7.142857142857143,
          "minerals": 35,
          "gas": 0,
          "mineralRate": 293,
          "gasRate": 0,
          "supplyUsed": 9.0,
          "supplyCap": 13.0,
          "workers": 8
        },
        {
          "t": 14.285714285714286,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 447,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 21.42857142857143,
          "minerals": 95,
          "gas": 0,
          "mineralRate": 475,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 110,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 130,
          "gas": 0,
          "mineralRate": 559,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 120,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 205,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 78.57142857142857,
          "minerals": 115,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 150,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 225,
          "gas": 8,
          "mineralRate": 699,
          "gasRate": 44,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 100.0,
          "minerals": 245,
          "gas": 28,
          "mineralRate": 643,
          "gasRate": 156,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 107.14285714285715,
          "minerals": 325,
          "gas": 48,
          "mineralRate": 643,
          "gasRate": 179,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 220,
          "gas": 14,
          "mineralRate": 699,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 121.42857142857143,
          "minerals": 290,
          "gas": 34,
          "mineralRate": 615,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 360,
          "gas": 54,
          "mineralRate": 559,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 36,
          "gas": 74,
          "mineralRate": 587,
          "gasRate": 156,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 142.85714285714286,
          "minerals": 44,
          "gas": 94,
          "mineralRate": 503,
          "gasRate": 179,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 54,
          "gas": 110,
          "mineralRate": 783,
          "gasRate": 156,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 157.14285714285714,
          "minerals": 69,
          "gas": 130,
          "mineralRate": 1007,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 164.2857142857143,
          "minerals": 39,
          "gas": 50,
          "mineralRate": 1063,
          "gasRate": 156,
          "supplyUsed": 21.0,
          "supplyCap": 21.0,
          "workers": 18
        },
        {
          "t": 171.42857142857144,
          "minerals": 44,
          "gas": 20,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 178.57142857142858,
          "minerals": 89,
          "gas": 40,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 185.71428571428572,
          "minerals": 149,
          "gas": 56,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 192.85714285714286,
          "minerals": 224,
          "gas": 76,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 23.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 200.0,
          "minerals": 344,
          "gas": 96,
          "mineralRate": 979,
          "gasRate": 156,
          "supplyUsed": 24.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 207.14285714285717,
          "minerals": 329,
          "gas": 124,
          "mineralRate": 1063,
          "gasRate": 201,
          "supplyUsed": 27.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 214.2857142857143,
          "minerals": 49,
          "gas": 35,
          "mineralRate": 867,
          "gasRate": 291,
          "supplyUsed": 29.0,
          "supplyCap": 42.0,
          "workers": 22
        },
        {
          "t": 221.42857142857144,
          "minerals": 129,
          "gas": 71,
          "mineralRate": 1035,
          "gasRate": 313,
          "supplyUsed": 30.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 228.57142857142858,
          "minerals": 119,
          "gas": 111,
          "mineralRate": 1231,
          "gasRate": 313,
          "supplyUsed": 32.0,
          "supplyCap": 42.0,
          "workers": 23
        },
        {
          "t": 235.71428571428572,
          "minerals": 179,
          "gas": 126,
          "mineralRate": 1231,
          "gasRate": 313,
          "supplyUsed": 35.0,
          "supplyCap": 42.0,
          "workers": 24
        },
        {
          "t": 242.85714285714286,
          "minerals": 219,
          "gas": 166,
          "mineralRate": 1231,
          "gasRate": 313,
          "supplyUsed": 37.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 250.00000000000003,
          "minerals": 99,
          "gas": 81,
          "mineralRate": 1343,
          "gasRate": 358,
          "supplyUsed": 39.0,
          "supplyCap": 42.0,
          "workers": 25
        },
        {
          "t": 257.14285714285717,
          "minerals": 164,
          "gas": 117,
          "mineralRate": 1483,
          "gasRate": 335,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 27
        },
        {
          "t": 264.2857142857143,
          "minerals": 144,
          "gas": 153,
          "mineralRate": 1427,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 42.0,
          "workers": 27
        },
        {
          "t": 271.42857142857144,
          "minerals": 69,
          "gas": 193,
          "mineralRate": 1427,
          "gasRate": 313,
          "supplyUsed": 46.0,
          "supplyCap": 50.0,
          "workers": 28
        },
        {
          "t": 278.5714285714286,
          "minerals": 89,
          "gas": 183,
          "mineralRate": 1679,
          "gasRate": 313,
          "supplyUsed": 46.0,
          "supplyCap": 50.0,
          "workers": 28
        },
        {
          "t": 285.7142857142857,
          "minerals": 264,
          "gas": 223,
          "mineralRate": 1511,
          "gasRate": 335,
          "supplyUsed": 48.0,
          "supplyCap": 50.0,
          "workers": 30
        },
        {
          "t": 292.8571428571429,
          "minerals": 119,
          "gas": 259,
          "mineralRate": 1679,
          "gasRate": 335,
          "supplyUsed": 50.0,
          "supplyCap": 58.0,
          "workers": 32
        },
        {
          "t": 300.0,
          "minerals": 69,
          "gas": 24,
          "mineralRate": 1679,
          "gasRate": 335,
          "supplyUsed": 55.0,
          "supplyCap": 66.0,
          "workers": 32
        }
      ]
    }
  }
];

