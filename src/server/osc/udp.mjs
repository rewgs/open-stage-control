/**
 * NOTE: The "./osc" import here will not be replicated with ESM.
 * Instead, I'll be editing the source code to import from the osc library directly.
 * See the TODO in osc.js for more details.
 */
// var osc = require("./osc"),
//     settings = require("../settings.mjs"),
//     zeroconf = require("../zeroconf.mjs"),
//     oscInPort = settings.read("osc-port") || settings.read("port") || 8080;

import "../settings.mjs";
import "../zeroconf.mjs";

var oscInPort = settings.read("osc-port") || settings.read("port") || 8080;

// TODO: Change to use directly from osc library instead of osc.js file.
var oscUDPServer = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: oscInPort,
    metadata: true,
    broadcast: true
});

oscUDPServer.on("error", function (e) {
    if (e.code === "EADDRINUSE") {
        console.error(
            `(ERROR, UDP) could not open port ${oscInPort} (already in use) `
        );
    } else {
        console.error("(ERROR, UDP)", e);
    }
});

zeroconf.publish({
    name:
        settings.infos.productName +
        (settings.read("instance-name")
            ? " (" + settings.read("instance-name") + ")"
            : ""),
    protocol: "udp",
    type: "osc",
    port: oscInPort
});

// module.exports = oscUDPServer;
export default oscUDPServer;
