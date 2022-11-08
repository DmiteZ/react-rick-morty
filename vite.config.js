import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dmitez.github.io/react-rick-morty/",
  plugins: [react()],
});
