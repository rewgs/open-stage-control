/**
 * TODO: Rather than updating this file's imports, I'm going to just get rid of it entirely.
 * All it does is import and export a couple of classes from the osc package.
 * Find where these are used, and import directly from the osc package instead.
 */

var osc = require("osc/src/osc.js"),
    transports = require("osc/src/platforms/osc-node.js");

osc.UDPPort = transports.UDPPort;
osc.TCPSocketPort = transports.TCPSocketPort;

module.exports = osc;
