// Entry for a single-file browser bundle (used for the Artifact preview).
// Exposes the API on window.SC2 so an inline UI script can use it without imports.
import { simulate, fmt } from "./engine.js";
import { PROTOSS } from "./data.js";
import { BUILDS } from "./builds.js";
import { DEFAULT_MAP, MAPS } from "./maps.js";
import { optimize, describeComposition } from "./optimizer.js";
window.SC2 = {
    simulate,
    fmt,
    PROTOSS,
    BUILDS,
    DEFAULT_MAP,
    MAPS,
    optimize,
    describeComposition,
};
