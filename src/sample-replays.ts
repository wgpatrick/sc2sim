import type { ParsedReplay } from "./replay.js";

/**
 * A handful of real replays' opening 300s, trimmed and embedded directly
 * (not fetched) so the browser demo works from a plain file:// open with no
 * server and no CORS -- see index.html's "Opponent" panel / README "Modeling
 * the opponent". Full replays/parsed/*.json (whole-game, much larger) remain
 * the source of truth for calibration/validation; this is a UI convenience
 * subset only. Includes real MULE/InjectLarva "cast" events (2026-07-05,
 * see tools/parse_replay.py's ABILITY_TO_ACTION) alongside the usual
 * structure/unit build order.
 */
export interface SampleReplay {
  label: string;
  race: "Terran" | "Zerg";
  replay: ParsedReplay;
}

export const SAMPLE_REPLAYS: SampleReplay[] = [
  {
    "label": "CannonRush vs Calyx (PvT) -- Terran side",
    "race": "Terran",
    "replay": {
      "source": "CannonRush_vs_Calyx_PvT_2026-06-29.SC2Replay",
      "map": "Sanctuary III LE",
      "length": 542.2321428571429,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Calyx",
        "race": "Terran",
        "result": "Win"
      },
      "buildOrder": [
        {
          "t": 0.0,
          "event": "upgrade",
          "name": "GhostAlternate"
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
          "t": 12.589285714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 24.6875,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 28.883928571428573,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 36.785714285714285,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 48.88392857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 50.3125,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 54.86607142857143,
          "event": "start",
          "name": "Barracks"
        },
        {
          "t": 60.98214285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 61.78571428571429,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 77.94642857142857,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 79.33035714285715,
          "event": "start",
          "name": "Refinery"
        },
        {
          "t": 83.21428571428572,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 90.04464285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 100.75892857142858,
          "event": "done",
          "name": "Refinery"
        },
        {
          "t": 101.29464285714286,
          "event": "done",
          "name": "Barracks"
        },
        {
          "t": 102.14285714285715,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 126.47321428571429,
          "event": "start",
          "name": "Factory"
        },
        {
          "t": 130.3125,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 130.75892857142858,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 130.75892857142858,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 136.60714285714286,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 139.64285714285714,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 142.7232142857143,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 157.63392857142858,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 161.07142857142858,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 165.58035714285717,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 168.70535714285717,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 169.33035714285717,
          "event": "done",
          "name": "Factory"
        },
        {
          "t": 169.73214285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 176.38392857142858,
          "event": "morph",
          "name": "SupplyDepotLowered"
        },
        {
          "t": 181.83035714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 184.10714285714286,
          "event": "start",
          "name": "CommandCenter"
        },
        {
          "t": 189.50892857142858,
          "event": "start",
          "name": "SupplyDepot"
        },
        {
          "t": 195.75892857142858,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 197.5,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 198.61607142857144,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 204.46428571428572,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 207.90178571428572,
          "event": "born",
          "name": "Reaper"
        },
        {
          "t": 209.10714285714286,
          "event": "start",
          "name": "BarracksReactor"
        },
        {
          "t": 210.9375,
          "event": "done",
          "name": "SupplyDepot"
        },
        {
          "t": 211.02678571428572,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 211.02678571428572,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 215.0,
          "event": "start",
          "name": "Starport"
        },
        {
          "t": 216.5625,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 224.2857142857143,
          "event": "born",
          "name": "Hellion"
        },
        {
          "t": 225.2232142857143,
          "event": "start",
          "name": "FactoryTechLab"
        },
        {
          "t": 230.04464285714286,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 238.08035714285717,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 240.17857142857144,
          "event": "born",
          "name": "KD8Charge"
        },
        {
          "t": 242.14285714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 243.08035714285717,
          "event": "done",
          "name": "FactoryTechLab"
        },
        {
          "t": 244.82142857142858,
          "event": "done",
          "name": "BarracksReactor"
        },
        {
          "t": 250.71428571428572,
          "event": "done",
          "name": "Starport"
        },
        {
          "t": 255.5357142857143,
          "event": "done",
          "name": "CommandCenter"
        },
        {
          "t": 259.9107142857143,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 259.9107142857143,
          "event": "cast",
          "name": "MULE"
        },
        {
          "t": 264.7321428571429,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 266.6071428571429,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 266.74107142857144,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 276.83035714285717,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 279.86607142857144,
          "event": "born",
          "name": "Cyclone"
        },
        {
          "t": 283.0357142857143,
          "event": "born",
          "name": "VikingAssault"
        },
        {
          "t": 283.61607142857144,
          "event": "morph",
          "name": "OrbitalCommand"
        },
        {
          "t": 284.4196428571429,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 284.55357142857144,
          "event": "born",
          "name": "Marine"
        },
        {
          "t": 288.92857142857144,
          "event": "born",
          "name": "SCV"
        },
        {
          "t": 299.7767857142857,
          "event": "born",
          "name": "MULE"
        },
        {
          "t": 299.7767857142857,
          "event": "cast",
          "name": "MULE"
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
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 10.0,
          "supplyCap": 13.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 95,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 15,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 13.0,
          "workers": 10
        },
        {
          "t": 42.85714285714286,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 13.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 13.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 25,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 5,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 21.0,
          "workers": 13
        },
        {
          "t": 78.57142857142857,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 85.71428571428572,
          "minerals": 90,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 21.0,
          "workers": 14
        },
        {
          "t": 92.85714285714286,
          "minerals": 105,
          "gas": 16,
          "mineralRate": 587,
          "gasRate": 89,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 100.0,
          "minerals": 115,
          "gas": 36,
          "mineralRate": 531,
          "gasRate": 179,
          "supplyUsed": 16.0,
          "supplyCap": 21.0,
          "workers": 15
        },
        {
          "t": 107.14285714285715,
          "minerals": 40,
          "gas": 14,
          "mineralRate": 531,
          "gasRate": 223,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 110,
          "gas": 50,
          "mineralRate": 587,
          "gasRate": 313,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 170,
          "gas": 90,
          "mineralRate": 587,
          "gasRate": 313,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 128.57142857142858,
          "minerals": 80,
          "gas": 26,
          "mineralRate": 559,
          "gasRate": 291,
          "supplyUsed": 17.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 135.71428571428572,
          "minerals": 60,
          "gas": 12,
          "mineralRate": 559,
          "gasRate": 291,
          "supplyUsed": 18.0,
          "supplyCap": 21.0,
          "workers": 16
        },
        {
          "t": 142.85714285714286,
          "minerals": 50,
          "gas": 40,
          "mineralRate": 727,
          "gasRate": 268,
          "supplyUsed": 19.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 150.0,
          "minerals": 100,
          "gas": 68,
          "mineralRate": 923,
          "gasRate": 246,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 157.14285714285714,
          "minerals": 155,
          "gas": 92,
          "mineralRate": 811,
          "gasRate": 201,
          "supplyUsed": 20.0,
          "supplyCap": 21.0,
          "workers": 17
        },
        {
          "t": 164.2857142857143,
          "minerals": 215,
          "gas": 112,
          "mineralRate": 867,
          "gasRate": 179,
          "supplyUsed": 21.0,
          "supplyCap": 29.0,
          "workers": 18
        },
        {
          "t": 171.42857142857144,
          "minerals": 285,
          "gas": 136,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 22.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 178.57142857142858,
          "minerals": 255,
          "gas": 106,
          "mineralRate": 951,
          "gasRate": 179,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 19
        },
        {
          "t": 185.71428571428572,
          "minerals": 35,
          "gas": 126,
          "mineralRate": 1035,
          "gasRate": 156,
          "supplyUsed": 25.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 192.85714285714286,
          "minerals": 10,
          "gas": 146,
          "mineralRate": 1007,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 200.0,
          "minerals": 145,
          "gas": 170,
          "mineralRate": 1035,
          "gasRate": 179,
          "supplyUsed": 26.0,
          "supplyCap": 29.0,
          "workers": 20
        },
        {
          "t": 207.14285714285717,
          "minerals": 100,
          "gas": 194,
          "mineralRate": 895,
          "gasRate": 201,
          "supplyUsed": 29.0,
          "supplyCap": 29.0,
          "workers": 21
        },
        {
          "t": 214.2857142857143,
          "minerals": 155,
          "gas": 164,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 29.0,
          "supplyCap": 37.0,
          "workers": 21
        },
        {
          "t": 221.42857142857144,
          "minerals": 80,
          "gas": 88,
          "mineralRate": 1035,
          "gasRate": 201,
          "supplyUsed": 30.0,
          "supplyCap": 37.0,
          "workers": 22
        },
        {
          "t": 228.57142857142858,
          "minerals": 115,
          "gas": 95,
          "mineralRate": 1203,
          "gasRate": 268,
          "supplyUsed": 30.0,
          "supplyCap": 37.0,
          "workers": 22
        },
        {
          "t": 235.71428571428572,
          "minerals": 250,
          "gas": 119,
          "mineralRate": 1231,
          "gasRate": 223,
          "supplyUsed": 31.0,
          "supplyCap": 37.0,
          "workers": 23
        },
        {
          "t": 242.85714285714286,
          "minerals": 380,
          "gas": 155,
          "mineralRate": 1231,
          "gasRate": 291,
          "supplyUsed": 31.0,
          "supplyCap": 37.0,
          "workers": 24
        },
        {
          "t": 250.00000000000003,
          "minerals": 260,
          "gas": 91,
          "mineralRate": 1231,
          "gasRate": 291,
          "supplyUsed": 33.0,
          "supplyCap": 37.0,
          "workers": 24
        },
        {
          "t": 257.14285714285717,
          "minerals": 225,
          "gas": 48,
          "mineralRate": 1231,
          "gasRate": 268,
          "supplyUsed": 36.0,
          "supplyCap": 50.0,
          "workers": 24
        },
        {
          "t": 264.2857142857143,
          "minerals": 65,
          "gas": 88,
          "mineralRate": 1147,
          "gasRate": 313,
          "supplyUsed": 36.0,
          "supplyCap": 50.0,
          "workers": 24
        },
        {
          "t": 271.42857142857144,
          "minerals": 185,
          "gas": 128,
          "mineralRate": 1343,
          "gasRate": 335,
          "supplyUsed": 39.0,
          "supplyCap": 50.0,
          "workers": 25
        },
        {
          "t": 278.5714285714286,
          "minerals": 365,
          "gas": 164,
          "mineralRate": 1511,
          "gasRate": 313,
          "supplyUsed": 40.0,
          "supplyCap": 50.0,
          "workers": 26
        },
        {
          "t": 285.7142857142857,
          "minerals": 360,
          "gas": 104,
          "mineralRate": 1371,
          "gasRate": 335,
          "supplyUsed": 41.0,
          "supplyCap": 50.0,
          "workers": 26
        },
        {
          "t": 292.8571428571429,
          "minerals": 400,
          "gas": 69,
          "mineralRate": 1427,
          "gasRate": 335,
          "supplyUsed": 40.0,
          "supplyCap": 50.0,
          "workers": 26
        },
        {
          "t": 300.0,
          "minerals": 255,
          "gas": 105,
          "mineralRate": 1231,
          "gasRate": 313,
          "supplyUsed": 42.0,
          "supplyCap": 50.0,
          "workers": 26
        }
      ]
    }
  },
  {
    "label": "Krystianer vs Solar (PvZ, Blackrock) -- Zerg side",
    "race": "Zerg",
    "replay": {
      "source": "Krystianer_vs_Solar_PvZ_Blackrock_2026-06-28.SC2Replay",
      "map": "Blackrock LE",
      "length": 796.9642857142858,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Teamless",
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
          "t": 11.294642857142858,
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
          "t": 16.875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.80357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 22.36607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 23.4375,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 23.4375,
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
          "t": 30.312500000000004,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 34.50892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 34.50892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 34.50892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 37.54464285714286,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 39.776785714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 39.82142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 49.330357142857146,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 51.91964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 51.91964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 52.36607142857143,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 52.36607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 52.85714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 52.99107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 58.839285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 59.955357142857146,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 65.0,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 65.0,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 65.13392857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 65.13392857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 68.34821428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 71.96428571428572,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 72.09821428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 72.09821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 73.70535714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 77.85714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 78.25892857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 85.84821428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 85.84821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 87.36607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 90.40178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 90.40178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 96.875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 102.67857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 106.38392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 115.89285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 118.39285714285715,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 118.61607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 118.61607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 118.61607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 120.53571428571429,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 120.53571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 128.125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 129.46428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 132.05357142857144,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 134.82142857142858,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 135.75892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.75892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.75892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 135.75892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.75892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.75892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 135.75892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.75892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 135.75892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 137.63392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 138.9732142857143,
          "event": "morph",
          "name": "Egg"
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
          "t": 147.14285714285714,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 148.75,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 151.11607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 151.11607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 153.48214285714286,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 156.29464285714286,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 156.65178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 157.23214285714286,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 158.6607142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 160.89285714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 160.89285714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 166.1607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 168.16964285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 175.66964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 176.51785714285717,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 176.51785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 176.5625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 180.3125,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 180.3125,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 185.17857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.02678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 186.07142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.42857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 188.70535714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 188.70535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 189.01785714285717,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 190.89285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 191.96428571428572,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 194.19642857142858,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 196.60714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 196.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 198.16964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 198.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 199.15178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 203.0357142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 203.0357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 206.25,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 206.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 208.25892857142858,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 208.6607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 208.75,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 208.75,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 208.88392857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 208.88392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 210.26785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 211.7857142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 214.24107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 215.75892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 218.16964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 218.9732142857143,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 219.19642857142858,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 219.50892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 221.25,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 222.4107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 222.4107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 223.08035714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.25892857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.4375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.92857142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 223.92857142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 225.26785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 227.54464285714286,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 229.77678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 231.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 231.38392857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 231.38392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 231.65178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 231.65178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 232.23214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 234.68750000000003,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 234.77678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 236.33928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 238.25892857142858,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 238.3482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 238.39285714285717,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 239.10714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 242.58928571428572,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 244.2857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 244.37500000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 244.37500000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 247.63392857142858,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 247.63392857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.48214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 248.48214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 248.61607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 250.49107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 250.49107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 251.83035714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 251.83035714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 251.83035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 251.91964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.0982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.27678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 254.5982142857143,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 254.5982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.73214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.73214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.77678571428572,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 254.86607142857144,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 258.125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 260.4464285714286,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 260.4464285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 261.4732142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 261.6071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 261.6964285714286,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 261.74107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 262.36607142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 263.61607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 264.5982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 265.5357142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 266.74107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 266.74107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.875,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 266.875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.875,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 266.875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 267.6339285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 268.4821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 269.0625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 269.95535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 272.05357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 272.9017857142857,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 273.61607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 273.61607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 273.75,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 273.75,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 273.8839285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 273.8839285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 274.9107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 276.2946428571429,
          "event": "done",
          "name": "SporeCrawler"
        },
        {
          "t": 276.5625,
          "event": "start",
          "name": "CreepTumor"
        },
        {
          "t": 276.74107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 276.74107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.9642857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 277.14285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 277.99107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 279.4642857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 280.49107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 280.625,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 280.625,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 281.20535714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 281.20535714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 282.2321428571429,
          "event": "morph",
          "name": "SporeCrawlerUprooted"
        },
        {
          "t": 282.4107142857143,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 283.3482142857143,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 283.61607142857144,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 283.8392857142857,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 284.1964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 284.1964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 284.4196428571429,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 286.6517857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 287.05357142857144,
          "event": "morph",
          "name": "SporeCrawler"
        },
        {
          "t": 287.5,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 287.8125,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 288.2589285714286,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 288.8839285714286,
          "event": "done",
          "name": "CreepTumor"
        },
        {
          "t": 288.92857142857144,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 288.9732142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 289.1071428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 289.1071428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 289.4196428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 291.20535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 291.3839285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 291.5625,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 292.0982142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 292.6339285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 292.6339285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 292.76785714285717,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 292.76785714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 293.3482142857143,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 294.1071428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 294.24107142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 294.2857142857143,
          "event": "morph",
          "name": "Egg"
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
          "t": 295.26785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.4821428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 298.70535714285717,
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
          "minerals": 35,
          "gas": 0,
          "mineralRate": 419,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 475,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 42.85714285714286,
          "minerals": 44,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 50.0,
          "minerals": 134,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 13.0,
          "supplyCap": 12.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 99,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 64.28571428571429,
          "minerals": 139,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 13
        },
        {
          "t": 71.42857142857143,
          "minerals": 29,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 29,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 124,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 224,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 100.0,
          "minerals": 334,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 339,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 114.28571428571429,
          "minerals": 444,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 121.42857142857143,
          "minerals": 244,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 0,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 128.57142857142858,
          "minerals": 54,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 135.71428571428572,
          "minerals": 84,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 21.0,
          "supplyCap": 28.0,
          "workers": 15
        },
        {
          "t": 142.85714285714286,
          "minerals": 144,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 22.0,
          "supplyCap": 28.0,
          "workers": 16
        },
        {
          "t": 150.0,
          "minerals": 209,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 0,
          "supplyUsed": 23.0,
          "supplyCap": 28.0,
          "workers": 16
        },
        {
          "t": 157.14285714285714,
          "minerals": 139,
          "gas": 4,
          "mineralRate": 1007,
          "gasRate": 22,
          "supplyUsed": 25.0,
          "supplyCap": 28.0,
          "workers": 17
        },
        {
          "t": 164.2857142857143,
          "minerals": 139,
          "gas": 16,
          "mineralRate": 923,
          "gasRate": 89,
          "supplyUsed": 25.0,
          "supplyCap": 28.0,
          "workers": 18
        },
        {
          "t": 171.42857142857144,
          "minerals": 204,
          "gas": 36,
          "mineralRate": 923,
          "gasRate": 156,
          "supplyUsed": 26.0,
          "supplyCap": 28.0,
          "workers": 18
        },
        {
          "t": 178.57142857142858,
          "minerals": 254,
          "gas": 56,
          "mineralRate": 923,
          "gasRate": 179,
          "supplyUsed": 27.0,
          "supplyCap": 36.0,
          "workers": 18
        },
        {
          "t": 185.71428571428572,
          "minerals": 354,
          "gas": 76,
          "mineralRate": 895,
          "gasRate": 179,
          "supplyUsed": 27.0,
          "supplyCap": 36.0,
          "workers": 19
        },
        {
          "t": 192.85714285714286,
          "minerals": 59,
          "gas": 92,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 28.0,
          "supplyCap": 36.0,
          "workers": 19
        },
        {
          "t": 200.0,
          "minerals": 64,
          "gas": 96,
          "mineralRate": 895,
          "gasRate": 67,
          "supplyUsed": 30.0,
          "supplyCap": 36.0,
          "workers": 20
        },
        {
          "t": 207.14285714285717,
          "minerals": 44,
          "gas": 4,
          "mineralRate": 699,
          "gasRate": 44,
          "supplyUsed": 30.0,
          "supplyCap": 40.0,
          "workers": 21
        },
        {
          "t": 214.2857142857143,
          "minerals": 19,
          "gas": 4,
          "mineralRate": 951,
          "gasRate": 22,
          "supplyUsed": 33.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 221.42857142857144,
          "minerals": 94,
          "gas": 4,
          "mineralRate": 1091,
          "gasRate": 0,
          "supplyUsed": 34.0,
          "supplyCap": 40.0,
          "workers": 23
        },
        {
          "t": 228.57142857142858,
          "minerals": 79,
          "gas": 4,
          "mineralRate": 1287,
          "gasRate": 0,
          "supplyUsed": 36.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 235.71428571428572,
          "minerals": 39,
          "gas": 4,
          "mineralRate": 1287,
          "gasRate": 0,
          "supplyUsed": 38.0,
          "supplyCap": 40.0,
          "workers": 26
        },
        {
          "t": 242.85714285714286,
          "minerals": 124,
          "gas": 4,
          "mineralRate": 1455,
          "gasRate": 0,
          "supplyUsed": 40.0,
          "supplyCap": 40.0,
          "workers": 26
        },
        {
          "t": 250.00000000000003,
          "minerals": 124,
          "gas": 4,
          "mineralRate": 1511,
          "gasRate": 0,
          "supplyUsed": 42.0,
          "supplyCap": 48.0,
          "workers": 28
        },
        {
          "t": 257.14285714285717,
          "minerals": 59,
          "gas": 8,
          "mineralRate": 1315,
          "gasRate": 22,
          "supplyUsed": 41.5,
          "supplyCap": 48.0,
          "workers": 26
        },
        {
          "t": 264.2857142857143,
          "minerals": 69,
          "gas": 8,
          "mineralRate": 1287,
          "gasRate": 0,
          "supplyUsed": 42.5,
          "supplyCap": 52.0,
          "workers": 24
        },
        {
          "t": 271.42857142857144,
          "minerals": 79,
          "gas": 8,
          "mineralRate": 1399,
          "gasRate": 0,
          "supplyUsed": 45.5,
          "supplyCap": 52.0,
          "workers": 27
        },
        {
          "t": 278.5714285714286,
          "minerals": 74,
          "gas": 8,
          "mineralRate": 1595,
          "gasRate": 0,
          "supplyUsed": 47.5,
          "supplyCap": 52.0,
          "workers": 31
        },
        {
          "t": 285.7142857142857,
          "minerals": 219,
          "gas": 8,
          "mineralRate": 1679,
          "gasRate": 0,
          "supplyUsed": 48.5,
          "supplyCap": 52.0,
          "workers": 34
        },
        {
          "t": 292.8571428571429,
          "minerals": 139,
          "gas": 12,
          "mineralRate": 1847,
          "gasRate": 22,
          "supplyUsed": 51.5,
          "supplyCap": 60.0,
          "workers": 35
        },
        {
          "t": 300.0,
          "minerals": 103,
          "gas": 24,
          "mineralRate": 1903,
          "gasRate": 89,
          "supplyUsed": 56.5,
          "supplyCap": 60.0,
          "workers": 36
        }
      ]
    }
  },
  {
    "label": "Harstem Lockdown -- Zerg side",
    "race": "Zerg",
    "replay": {
      "source": "Harstem_Lockdown_2026-06-29.SC2Replay",
      "map": "Lockdown LE",
      "length": 728.2589285714287,
      "patch": "5.0.16.97364",
      "player": {
        "name": "Shino",
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
          "t": 0.35714285714285715,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 9.866071428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 11.294642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 12.5,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 12.5,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 18.258928571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 20.80357142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 23.4375,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 23.4375,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 27.946428571428573,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 30.312500000000004,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 30.401785714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 30.401785714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 33.035714285714285,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 39.82142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 45.17857142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 45.17857142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 45.80357142857143,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 45.80357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 46.5625,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 46.69642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 49.330357142857146,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 51.205357142857146,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 58.705357142857146,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 58.705357142857146,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 58.839285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 58.839285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 58.839285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 63.34821428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 63.34821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 65.08928571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 68.34821428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 75.49107142857143,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 77.23214285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 77.23214285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 77.85714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 78.97321428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 82.94642857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 87.36607142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 87.5,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 91.11607142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 91.11607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 95.08928571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 95.08928571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 96.875,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 98.39285714285715,
          "event": "start",
          "name": "Extractor"
        },
        {
          "t": 99.64285714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 99.64285714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 101.51785714285715,
          "event": "start",
          "name": "SpawningPool"
        },
        {
          "t": 104.59821428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 106.38392857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 106.875,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 115.89285714285715,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 116.02678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 116.74107142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 116.74107142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 119.01785714285715,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 119.01785714285715,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 119.82142857142858,
          "event": "done",
          "name": "Extractor"
        },
        {
          "t": 125.40178571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 126.47321428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 128.16964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 128.16964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 134.9107142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 135.71428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 138.61607142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 138.61607142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 144.41964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 146.91964285714286,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 146.91964285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 147.94642857142858,
          "event": "done",
          "name": "SpawningPool"
        },
        {
          "t": 153.57142857142858,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 153.57142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 153.92857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 154.73214285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 154.9107142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 155.9375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 156.42857142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 158.52678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 163.4375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 165.9375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 168.08035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 168.08035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 170.13392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 170.35714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 170.66964285714286,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 170.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 171.875,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 171.875,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 171.875,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 172.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 172.05357142857144,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 172.05357142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 172.94642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 174.50892857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 175.44642857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 176.11607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 182.27678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 182.27678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 182.45535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 182.5,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 182.5,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 184.95535714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 186.65178571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 186.65178571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 187.8125,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 188.25892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 188.25892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 188.39285714285717,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 191.96428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 192.05357142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 193.3482142857143,
          "event": "start",
          "name": "Hatchery"
        },
        {
          "t": 194.24107142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 194.46428571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 195.9375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 196.96428571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 201.4732142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 203.9732142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 204.86607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 210.98214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 213.08035714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 213.08035714285717,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 213.08035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 213.48214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 214.82142857142858,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 214.82142857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 216.11607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 217.05357142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 218.52678571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 220.49107142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 220.89285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 221.07142857142858,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 221.25,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 222.7232142857143,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 222.7232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 223.125,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.30357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 223.48214285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 224.64285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 226.38392857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 233.25892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 233.25892857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 233.25892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 234.19642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 234.19642857142858,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 234.19642857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 235.66964285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 235.66964285714286,
          "event": "born",
          "name": "Zergling"
        },
        {
          "t": 235.66964285714286,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 236.7857142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 236.7857142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 237.36607142857144,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.54464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.54464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 237.54464285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 238.52678571428572,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 238.52678571428572,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 240.89285714285717,
          "event": "upgrade",
          "name": "zerglingmovementspeed"
        },
        {
          "t": 241.87500000000003,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 242.27678571428572,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 243.48214285714286,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 245.40178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 245.58035714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 247.32142857142858,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 249.50892857142858,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.50892857142858,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.68750000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.68750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.68750000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.68750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 249.68750000000003,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 249.68750000000003,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 251.51785714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 251.7857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.0982142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 252.90178571428572,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 254.19642857142858,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 254.37500000000003,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 255.62500000000003,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 255.66964285714286,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 256.20535714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 257.14285714285717,
          "event": "born",
          "name": "Queen"
        },
        {
          "t": 257.5446428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 257.5446428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 257.7232142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 257.7232142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 259.4642857142857,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 259.4642857142857,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 261.2946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 261.6071428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 263.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 263.39285714285717,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 263.6607142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 263.6607142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 264.7767857142857,
          "event": "done",
          "name": "Hatchery"
        },
        {
          "t": 264.7767857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 265.0446428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 265.0446428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 266.3392857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 268.3482142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 268.3482142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 270.7142857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 270.80357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 270.89285714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 271.0714285714286,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 271.11607142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 272.67857142857144,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 273.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.3482142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.4375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.4375,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 273.75,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 274.2857142857143,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 275.17857142857144,
          "event": "start",
          "name": "CreepTumorQueen"
        },
        {
          "t": 275.3571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 275.3571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 275.5357142857143,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 275.5357142857143,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 276.25,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 278.0357142857143,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 278.4821428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 278.4821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 280.0446428571429,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 280.625,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 281.3392857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 281.6071428571429,
          "event": "start",
          "name": "SporeCrawler"
        },
        {
          "t": 282.76785714285717,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 283.7946428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.1517857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 284.375,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.55357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 284.7321428571429,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 285.3571428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 285.3571428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 285.49107142857144,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 285.49107142857144,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 285.58035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 285.58035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 285.58035714285717,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 285.58035714285717,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 285.89285714285717,
          "event": "done",
          "name": "CreepTumorQueen"
        },
        {
          "t": 286.0714285714286,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 286.11607142857144,
          "event": "morph",
          "name": "CreepTumorBurrowed"
        },
        {
          "t": 289.24107142857144,
          "event": "cast",
          "name": "InjectLarva"
        },
        {
          "t": 292.2767857142857,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 293.30357142857144,
          "event": "born",
          "name": "Larva"
        },
        {
          "t": 293.4821428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 293.4821428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 294.1071428571429,
          "event": "born",
          "name": "Overlord"
        },
        {
          "t": 294.1071428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 294.1071428571429,
          "event": "done",
          "name": "SporeCrawler"
        },
        {
          "t": 296.2946428571429,
          "event": "born",
          "name": "Drone"
        },
        {
          "t": 296.2946428571429,
          "event": "morph",
          "name": "Larva"
        },
        {
          "t": 298.0357142857143,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.1696428571429,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.2142857142857,
          "event": "born",
          "name": "Drone"
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
          "t": 298.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 298.2142857142857,
          "event": "morph",
          "name": "Egg"
        },
        {
          "t": 299.4642857142857,
          "event": "done",
          "name": "SporeCrawler"
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
          "mineralRate": 531,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 9
        },
        {
          "t": 28.571428571428573,
          "minerals": 10,
          "gas": 0,
          "mineralRate": 503,
          "gasRate": 0,
          "supplyUsed": 11.0,
          "supplyCap": 12.0,
          "workers": 10
        },
        {
          "t": 35.714285714285715,
          "minerals": 40,
          "gas": 0,
          "mineralRate": 615,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 42.85714285714286,
          "minerals": 105,
          "gas": 0,
          "mineralRate": 643,
          "gasRate": 0,
          "supplyUsed": 12.0,
          "supplyCap": 12.0,
          "workers": 11
        },
        {
          "t": 50.0,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 587,
          "gasRate": 0,
          "supplyUsed": 14.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 57.142857142857146,
          "minerals": 125,
          "gas": 0,
          "mineralRate": 699,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 12
        },
        {
          "t": 64.28571428571429,
          "minerals": 195,
          "gas": 0,
          "mineralRate": 671,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 71.42857142857143,
          "minerals": 245,
          "gas": 0,
          "mineralRate": 755,
          "gasRate": 0,
          "supplyUsed": 16.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 78.57142857142857,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 783,
          "gasRate": 0,
          "supplyUsed": 15.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 85.71428571428572,
          "minerals": 50,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 15
        },
        {
          "t": 92.85714285714286,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 811,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 100.0,
          "minerals": 185,
          "gas": 0,
          "mineralRate": 867,
          "gasRate": 0,
          "supplyUsed": 17.0,
          "supplyCap": 20.0,
          "workers": 17
        },
        {
          "t": 107.14285714285715,
          "minerals": 5,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 114.28571428571429,
          "minerals": 110,
          "gas": 0,
          "mineralRate": 951,
          "gasRate": 0,
          "supplyUsed": 18.0,
          "supplyCap": 20.0,
          "workers": 16
        },
        {
          "t": 121.42857142857143,
          "minerals": 165,
          "gas": 0,
          "mineralRate": 839,
          "gasRate": 0,
          "supplyUsed": 19.0,
          "supplyCap": 20.0,
          "workers": 18
        },
        {
          "t": 128.57142857142858,
          "minerals": 235,
          "gas": 12,
          "mineralRate": 895,
          "gasRate": 67,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 19
        },
        {
          "t": 135.71428571428572,
          "minerals": 350,
          "gas": 28,
          "mineralRate": 979,
          "gasRate": 134,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 19
        },
        {
          "t": 142.85714285714286,
          "minerals": 355,
          "gas": 48,
          "mineralRate": 951,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 20.0,
          "workers": 20
        },
        {
          "t": 150.0,
          "minerals": 460,
          "gas": 64,
          "mineralRate": 867,
          "gasRate": 156,
          "supplyUsed": 20.0,
          "supplyCap": 24.0,
          "workers": 20
        },
        {
          "t": 157.14285714285714,
          "minerals": 65,
          "gas": 84,
          "mineralRate": 839,
          "gasRate": 156,
          "supplyUsed": 27.0,
          "supplyCap": 32.0,
          "workers": 20
        },
        {
          "t": 164.2857142857143,
          "minerals": 30,
          "gas": 0,
          "mineralRate": 979,
          "gasRate": 134,
          "supplyUsed": 28.0,
          "supplyCap": 32.0,
          "workers": 20
        },
        {
          "t": 171.42857142857144,
          "minerals": 45,
          "gas": 0,
          "mineralRate": 923,
          "gasRate": 22,
          "supplyUsed": 30.0,
          "supplyCap": 32.0,
          "workers": 22
        },
        {
          "t": 178.57142857142858,
          "minerals": 80,
          "gas": 0,
          "mineralRate": 1063,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 22
        },
        {
          "t": 185.71428571428572,
          "minerals": 235,
          "gas": 0,
          "mineralRate": 1231,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 24
        },
        {
          "t": 192.85714285714286,
          "minerals": 380,
          "gas": 0,
          "mineralRate": 1287,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 26
        },
        {
          "t": 200.0,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 1287,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 25
        },
        {
          "t": 207.14285714285717,
          "minerals": 160,
          "gas": 0,
          "mineralRate": 1371,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 25
        },
        {
          "t": 214.2857142857143,
          "minerals": 330,
          "gas": 0,
          "mineralRate": 1427,
          "gasRate": 0,
          "supplyUsed": 32.0,
          "supplyCap": 32.0,
          "workers": 25
        },
        {
          "t": 221.42857142857144,
          "minerals": 190,
          "gas": 0,
          "mineralRate": 1483,
          "gasRate": 0,
          "supplyUsed": 37.0,
          "supplyCap": 40.0,
          "workers": 25
        },
        {
          "t": 228.57142857142858,
          "minerals": 70,
          "gas": 0,
          "mineralRate": 1343,
          "gasRate": 0,
          "supplyUsed": 40.0,
          "supplyCap": 48.0,
          "workers": 25
        },
        {
          "t": 235.71428571428572,
          "minerals": 190,
          "gas": 0,
          "mineralRate": 1119,
          "gasRate": 0,
          "supplyUsed": 38.0,
          "supplyCap": 48.0,
          "workers": 24
        },
        {
          "t": 242.85714285714286,
          "minerals": 100,
          "gas": 0,
          "mineralRate": 895,
          "gasRate": 0,
          "supplyUsed": 39.5,
          "supplyCap": 48.0,
          "workers": 24
        },
        {
          "t": 250.00000000000003,
          "minerals": 85,
          "gas": 0,
          "mineralRate": 1091,
          "gasRate": 0,
          "supplyUsed": 42.5,
          "supplyCap": 48.0,
          "workers": 28
        },
        {
          "t": 257.14285714285717,
          "minerals": 105,
          "gas": 0,
          "mineralRate": 1343,
          "gasRate": 0,
          "supplyUsed": 45.5,
          "supplyCap": 48.0,
          "workers": 28
        },
        {
          "t": 264.2857142857143,
          "minerals": 185,
          "gas": 0,
          "mineralRate": 1483,
          "gasRate": 0,
          "supplyUsed": 44.5,
          "supplyCap": 48.0,
          "workers": 29
        },
        {
          "t": 271.42857142857144,
          "minerals": 330,
          "gas": 0,
          "mineralRate": 1567,
          "gasRate": 0,
          "supplyUsed": 44.5,
          "supplyCap": 52.0,
          "workers": 31
        },
        {
          "t": 278.5714285714286,
          "minerals": 50,
          "gas": 12,
          "mineralRate": 1455,
          "gasRate": 67,
          "supplyUsed": 46.5,
          "supplyCap": 52.0,
          "workers": 32
        },
        {
          "t": 285.7142857142857,
          "minerals": 75,
          "gas": 32,
          "mineralRate": 1623,
          "gasRate": 156,
          "supplyUsed": 46.5,
          "supplyCap": 52.0,
          "workers": 35
        },
        {
          "t": 292.8571428571429,
          "minerals": 220,
          "gas": 52,
          "mineralRate": 1623,
          "gasRate": 156,
          "supplyUsed": 46.5,
          "supplyCap": 52.0,
          "workers": 34
        },
        {
          "t": 300.0,
          "minerals": 105,
          "gas": 72,
          "mineralRate": 1679,
          "gasRate": 179,
          "supplyUsed": 50.5,
          "supplyCap": 60.0,
          "workers": 35
        }
      ]
    }
  }
];
