import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    "/api/": {
      target: "http://localhost:55714/",
      changeOrigin: true,
      secure: false,
    },
  },
});
