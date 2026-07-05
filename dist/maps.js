/**
 * Map / distance presets.
 *
 * Distances are expressed as TRAVEL TIME in Faster-clock seconds for a
 * reference-speed unit (Stalker, 2.95). Each unit's actual travel time scales
 * by REF_SPEED / unit.moveSpeed, so faster units arrive sooner. See engine.ts.
 *
 * ⚠️ These distances are reasonable estimates, not measured. Calibrate against
 * real maps / headless SC2 for exact timing-attack numbers.
 *
 * Rules of thumb (ground, main-to-main):
 *   • A close-positions / small map ≈ 25–30s of Stalker walking.
 *   • A standard 2-player ladder map ≈ 33–40s.
 *   • A proxy staged just outside the enemy ≈ 4–8s.
 */
export const MAPS = {
    standard: {
        name: "Standard ladder (main-to-main ~36s)",
        homeToEnemySeconds: 36,
        proxyToEnemySeconds: 6,
        proxyProbeTravelSeconds: 30, // probe walks most of the map to the proxy site
    },
    close: {
        name: "Close positions (~26s)",
        homeToEnemySeconds: 26,
        proxyToEnemySeconds: 5,
        proxyProbeTravelSeconds: 22,
    },
    rushDistance: {
        name: "Long rush distance (~44s)",
        homeToEnemySeconds: 44,
        proxyToEnemySeconds: 7,
        proxyProbeTravelSeconds: 36,
    },
};
export const DEFAULT_MAP = MAPS.standard;
