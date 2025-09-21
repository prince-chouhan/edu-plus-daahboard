import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tagger from "@dhiwise/component-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",                  // <-- changed to "dist"
    chunkSizeWarningLimit: 2000
  },
  plugins: [tsconfigPaths(), react(), tagger()],
  server: {
    port: 4028,                      // use a number here (cleaner)
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});
