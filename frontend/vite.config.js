import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Your existing polyfills configuration
      include: ["crypto"],
    }),
  ],

  server: {
    proxy: {
      // Any request that starts with "/api" will be forwarded
      '/api': {
        target: 'http://localhost:5000', // backend server URL
        changeOrigin: true, // Necessary for virtual hosted sites
      },
    },
  },
});