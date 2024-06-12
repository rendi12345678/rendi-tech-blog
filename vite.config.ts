import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import markdownRawPlugin from "vite-raw-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to load markdown files
    markdownRawPlugin({
      fileRegex: /\.md$/,
    }),
  ],
});
