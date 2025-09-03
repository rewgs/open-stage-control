const config = {
  root: ".",
  build: {
    outDir: "app/client",
    emptyOutDir: true,
    sourcemap: true,
    target: ["es2015", "chrome89", "edge89", "firefox89", "safari15"],
    lib: {
      entry: "src/client/index.js",
      name: "OpenStageControlClient",
      fileName: "open-stage-control-client",
      formats: ["iife"],
    },
    rollupOptions: {
      external: ["electron"],
      output: {
        format: "iife",
        name: "OpenStageControlClient",
        entryFileNames: "open-stage-control-client.js",
        extend: true,
        globals: {
          electron: 'require("electron")',
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/, /src/],
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
    global: "window",
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
      "nanohtml",
      "escaper",
    ],
    exclude: ["electron"],
  },
  resolve: {
    mainFields: ["main", "module", "jsnext:main", "jsnext"],
    extensions: [".js", ".json"],
    alias: {
      "./globals": "./src/client/globals.js",
      "./stacktrace": "./src/client/stacktrace.js",
      "./locales": "./src/client/locales/index.js",
      "./ui/ui-loading": "./src/client/ui/ui-loading.js",
      "./ipc/": "./src/client/ipc/index.js",
      "./backup": "./src/client/backup.js",
      "./ui/init": "./src/client/ui/init.js",
      escaper: require.resolve("escaper"),
    },
  },
};

module.exports = config;
