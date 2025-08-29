// var build = require("./build.js");

import build from "./build";

build({
    input: "../src/launcher/index.js",
    output: "../app/launcher/open-stage-control-launcher.js",
    options: {
        debug: true,
        ignoreMissing: false,
        detectGlobals: false,
        bare: true,
        noParse: ["**/mathjs/dist/math.min.js"]
    },
    exclude: ["electron"]
})();
