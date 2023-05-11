/* eslint-disable */
// @ts-nocheck
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },

  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: "jsdom",
    // Before each test, clear mock history (calls, etc.) but do not reset its implementation to the default one
    clearMocks: true,
    setupFiles: ["src/test/setup.ts"],
    deps: {
      inline: ["vitest-canvas-mock"],
      external: ["@emotion/styled"],
    },
    coverage: {
      // By default the coverage tool ignores files that are never imported by a test, giving an inacurate coverage of the project.
      all: true,
      provider: "istanbul",
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },

  // dev server
  server: {
    port: 3000,
  },
  // production preview server
  preview: {
    port: 3000,
  },
});
