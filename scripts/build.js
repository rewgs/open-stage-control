// var browserify = require("browserify"),
//     exorcist = require("exorcist"),
// licensify = require("licensify"),
//     fs = require("fs"),
//     path = require("path");

import browserify from "browserify";
import exorcist from "exorcist";
import licensify from "licensify";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// module.exports = (opt) => {
//     var { input, output, options, ignore, exclude, transforms, plugins } = opt,
//         inputPath = path.resolve(__dirname + "/" + input),
//         outputPath = path.resolve(__dirname + "/" + output),
//         b;
//
//     if (!plugins) plugins = [];
//     if (!plugins.includes(licensify)) plugins.push(licensify);
//
//     b = browserify(inputPath, options);
//
//     if (ignore) b.ignore(ignore);
//     if (exclude) b.exclude(exclude);
//
//     for (var plugin of plugins) {
//         b.plugin(plugin);
//     }
//
//     if (transforms) {
//         for (var transform of transforms) {
//             var [t, opts] = transform;
//             b.transform(t, opts);
//         }
//     }
//
//     function bundle() {
//         var output = b.bundle();
//
//         var toWrite = output.pipe(exorcist(outputPath + ".map"));
//         toWrite.pipe(fs.createWriteStream(outputPath));
//
//         return output;
//     }
//
//     bundle.b = b;
//
//     return bundle;
// };

export default (opt) => {
    var { input, output, options, ignore, exclude, transforms, plugins } = opt,
        inputPath = path.resolve(__dirname + "/" + input),
        outputPath = path.resolve(__dirname + "/" + output),
        b;

    if (!plugins) plugins = [];
    if (!plugins.includes(licensify)) plugins.push(licensify);

    b = browserify(inputPath, options);

    if (ignore) b.ignore(ignore);
    if (exclude) b.exclude(exclude);

    for (var plugin of plugins) {
        b.plugin(plugin);
    }

    if (transforms) {
        for (var transform of transforms) {
            var [t, opts] = transform;
            b.transform(t, opts);
        }
    }

    function bundle() {
        var output = b.bundle();

        var toWrite = output.pipe(exorcist(outputPath + ".map"));
        toWrite.pipe(fs.createWriteStream(outputPath));

        return output;
    }

    bundle.b = b;

    return bundle;
};
