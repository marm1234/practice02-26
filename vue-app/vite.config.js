import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url))
    },
  },
  plugins: [vue()],
});