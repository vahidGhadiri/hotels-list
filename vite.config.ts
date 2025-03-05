import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
    plugins: [react()],
    server: {
        port: 8080,
        open: true
    },
    resolve: {
        alias: {
            "@adapters/hotel": path.resolve(__dirname, "src/adapters/hotel"),
            "@use-cases/hotel": path.resolve(__dirname, "src/use-cases/hotel"),
            "@infrastructure": path.resolve(__dirname, "src/infrastructure/http"),
        }
    }
})

