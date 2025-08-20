// var networkInterfaces = require('os').networkInterfaces
import networkInterfaces from "node:os";

// module.exports = (proto, port) => {
//     var address = Object.values(networkInterfaces())
//         .reduce((a, b) => a.concat(b), [])
//         .filter((i) => i.family === "IPv4")
//         .map((i) => i.address + ":");
//
//     return address.map((x) => proto + x + port);
// };

export default (proto, port) => {
    const address = Object.values(networkInterfaces())
        .reduce((a, b) => a.concat(b), [])
        .filter((i) => i.family === "IPv4")
        .map((i) => i.address + ":");

    return address.map((x) => proto + x + port);
};
