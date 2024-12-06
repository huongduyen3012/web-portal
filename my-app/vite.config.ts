import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    port: 3000,
    // proxy: {
    //   "/warehouse": {
    //     target: "http://localhost:4000/", // URL for `web-warehouse`
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dashboard/, ""),
    //   },
    // },
  },
});
