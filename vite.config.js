import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    server: {
      deps: {
        inline: [
          "@nivo",
          "@nivo/colors",
          "@nivo/network",
          "@nivo/sankey",
          "d3-color",
        ],
      },
    },
  },
});
