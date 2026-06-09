import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";

const externalLinks = [
  rehypeExternalLinks,
  { target: "_blank", rel: ["noopener", "noreferrer"] },
];

export default defineConfig({
  site: "https://flynnstevens.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [externalLinks],
  },
  integrations: [
    AstroPWA({
      mode: "production",
      registerType: "autoUpdate",
      manifest: {
        name: "Flynn Stevens",
        short_name: "Flynn",
        description: "Junior Software Developer based in Ōtautahi, Aotearoa",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icons/profile-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/profile-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico}"],
      },
    }),
    mdx({
      rehypePlugins: [externalLinks],
    }),
  ],
});
