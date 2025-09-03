const config = {
    root: ".",
    build: {
        outDir: "app/launcher",
        emptyOutDir: true,
        sourcemap: true,
        target: ["es2015", "chrome89", "edge89", "firefox89", "safari15"],
        lib: {
            entry: "src/launcher/index.js",
            name: "OpenStageControlLauncher",
            fileName: "open-stage-control-launcher",
            formats: ["iife"]
        },
        rollupOptions: {
            external: ["electron", "@electron/remote"],
            output: {
                format: "iife",
                name: "OpenStageControlLauncher",
                entryFileNames: "open-stage-control-launcher.js",
                extend: true,
                globals: {
                    electron: "require('electron')",
                    "@electron/remote": "require('@electron/remote')"
                }
            }
        },
        commonjsOptions: {
            transformMixedEsModules: true,
            include: [/node_modules/, /src/]
        }
    },
    define: {
        "process.env.NODE_ENV": "production",
        global: "window"
    },
    optimizeDeps: {
        include: [
            "ace-builds",
            "chroma-js",
            "fastdom",
            "jsondiffpatch",
            "keyboardjs",
            "nanoid",
            "nanomorph",
            "nanohtml"
        ]
    },
    resolve: {
        mainFields: ["main", "module", "jsnext:main", "jsnext"],
        extensions: [".js", ".json"],
        alias: {
            electron: "electron",
            "@electron/remote": "@electron/remote",
            "../client/globals": "./src/client/globals.js",
            "../client/events/event-emitter":
                "./src/client/events/event-emitter.js",
            "../client/ui/ui-workspace": "./src/client/ui/ui-workspace.js",
            "../client/ui/zoom": "./src/client/ui/zoom.js"
        }
    }
};

module.exports = config;
