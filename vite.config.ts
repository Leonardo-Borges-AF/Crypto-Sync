import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteEjsPlugin()],
  resolve: {
    alias: [{ find: "~", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    chunkSizeWarningLimit: 1000, // size in KB
  },
});
