import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev (and the Alloy sandbox) serves from the root; the GitHub Pages build is
// published under the repository subpath.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Brandzy-Clone-website/" : "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    watch: { usePolling: true },
  },
}));
