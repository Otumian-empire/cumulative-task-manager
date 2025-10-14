import react from "@vitejs/plugin-react-swc";
import "dotenv/config";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: Number(process.env?.PORT ?? 3000),
    },
});
