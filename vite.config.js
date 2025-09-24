// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        inception: resolve(__dirname, "films/inception.html"),
        matrix: resolve(__dirname, "films/matrix.html"),
        // etc.
      }
    }
  }
});