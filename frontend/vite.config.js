import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // To include only specific polyfills:
      include: ["crypto"],
      // Other options, if needed:
      // globals: true,
    }),
  ],
});
