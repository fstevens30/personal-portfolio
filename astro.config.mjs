import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",
  site: "https://flynnstevens.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
