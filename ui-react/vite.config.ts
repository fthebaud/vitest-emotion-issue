/* eslint-disable */
// @ts-nocheck
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },

  // BUILD FOR PRODUCTION (BUNDLE): https://vitejs.dev/guide/build.html#building-for-production
  build: {
    // keep d.ts files emitted by tsc
    emptyOutDir: false,
    // Targets browsers with native ES module support: https://caniuse.com/es6-module
    target: "modules",
    // LIBRARY MODE: https://vitejs.dev/guide/build.html#library-mode
    // Don't forget to update module, main and exports in package.json
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) =>
        `@company/ui-react${format === "umd" ? ".umd" : ""}.js`,
      // We only keep UMD format because of an eslint issue:
      // eslint and eslint import plugin will throw "ERR_PACKAGE_PATH_NOT_EXPORTED" when trying to import '@company/ui-react', even though the import uses ES module and works...
      formats: ["es", "umd"],
      name: "@company/ui-react",
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the component library (i.e. peer dependencies)
      external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
      // Global variables to use in the UMD build for externalized deps:
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "@emotion/react",
          "@emotion/styled": "@emotion/styled",
        },
      },
    },
  },
});
