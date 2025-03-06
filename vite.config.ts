import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: {
      "@infrastructure": path.resolve(__dirname, "src/infrastructure/http"),
      "@use-cases/hotel": path.resolve(__dirname, "src/use-cases/hotel"),
      "@adapters/hotel": path.resolve(__dirname, "src/adapters/hotel"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
});
