/**
 * Sample Protoss build orders for the 8-worker (5.0.16) economy.
 * "chrono:X" casts Chrono Boost on the in-production X.
 *
 * These are hand-written openers used to exercise + validate the simulator.
 * The point of the optimizer (next milestone) is to DISCOVER better orderings
 * than these automatically.
 */
export const BUILDS = [
    {
        name: "Gateway macro opener",
        description: "Standard economic opening: pump probes with early chrono, expand into a Cyber Core and first Stalkers.",
        order: [
            "Probe",
            "chrono:Probe",
            "Probe",
            "chrono:Probe",
            "Probe",
            "Pylon",
            "Probe",
            "Gateway",
            "Probe",
            "Assimilator",
            "Probe",
            "CyberneticsCore",
            "Probe",
            "Pylon",
            "Probe",
            "Nexus",
            "Stalker",
            "chrono:Stalker",
            "Stalker",
        ],
    },
    {
        name: "Fast Adept pressure",
        description: "Rush a Cybernetics Core and chrono out early Adepts for cheese/harass timing.",
        order: [
            "Probe",
            "chrono:Probe",
            "Probe",
            "Pylon",
            "Probe",
            "Gateway",
            "Probe",
            "Assimilator",
            "Probe",
            "CyberneticsCore",
            "Pylon",
            "Adept",
            "chrono:Adept",
            "Adept",
            "chrono:Adept",
            "Adept",
        ],
    },
    {
        name: "Fastest Cybernetics Core",
        description: "Minimal tech rush — how fast can a Cybernetics Core finish from the 8-worker start?",
        order: ["Probe", "Pylon", "Gateway", "Assimilator", "CyberneticsCore"],
    },
    {
        name: "Proxy-pylon warp-in Zealots",
        description: "Warp Gate tech + a proxy Pylon: keep Gateways safe at home, then WARP Zealots onto the enemy (arrival ≈ warp-in time, not a cross-map walk). Watch the last column.",
        order: [
            "Probe", "chrono:Probe", "Probe", "Probe", "Pylon", "Probe",
            "Gateway", "Assimilator", "Probe", "CyberneticsCore",
            "WarpGateResearch", "chrono:WarpGateResearch", "Pylon", "Probe",
            "Gateway", "Pylon@proxy", "WarpGate", "WarpGate",
            "Zealot", "Zealot", "Zealot", "Zealot",
        ],
    },
];
