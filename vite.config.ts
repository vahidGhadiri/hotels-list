import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        description: "A task management app built with React and Vite",
        short_name: "Entrance Task",
        name: "Entrance Task",
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/api\/.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:js|css|html|woff?|ttf|svg)$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60, //
              },
            },
          },
        ],
        globPatterns: ["**/*.{js,css,html}"],
        globIgnores: ["**/node_modules/**/*"],
      },
    }),
  ],
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
