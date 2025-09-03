import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

// Function to process SCSS files
function processScss() {
  const inDir = resolve(__dirname, "src/scss");
  const outDir = resolve(__dirname, "app/assets");

  // Process themes
  const themesDir = resolve(inDir, "themes");
  fs.readdirSync(themesDir).forEach((file) => {
    if (file.includes(".scss") && file !== "default.scss") {
      return {
        build: {
          rollupOptions: {
            input: resolve(themesDir, file),
            output: {
              dir: resolve(outDir, "themes"),
              entryFileNames: `[name].css`,
            },
          },
        },
      };
    }
  });
}

export default defineConfig({
  root: "src/scss",
  build: {
    outDir: "../../app/assets",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: resolve(__dirname, "src/scss/index.scss"),
      output: {
        entryFileNames: "open-stage-control.css",
      },
    },
    cssCodeSplit: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
