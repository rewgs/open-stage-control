import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "app/server",
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: "src/server/index.js",
      formats: ["cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "electron",
        "@electron/remote",
        "os",
        "path",
        "fs",
        "http",
        "https",
        "ws",
        "python-shell",
        "child_process",
        "events",
        "util",
        "source-map-support",
        "yargs",
        "env-paths",
        "qrcode",
      ],
    },
  },
});
