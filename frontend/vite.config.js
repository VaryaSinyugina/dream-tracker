import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { svgSpritemap } from "vite-plugin-svg-spritemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSpritemap({
      pattern: "src/assets/svg/*.svg", // путь к иконкам
      filename: "sprite.svg", // имя выходного файла
    }),
  ],
});
