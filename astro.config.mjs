import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig, envField } from "astro/config";

export default defineConfig({
  output: "server",
  adapter: vercel({ imageService: true }),

  image: {
    service: "vercel",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svg: true,
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        context: "server",
        access: "public",
      }),
      SPOTIFY_CLIENT_ID: envField.string({
        context: "server",
        access: "public",
      }),
      SPOTIFY_CLIENT_SECRET: envField.string({
        context: "server",
        access: "public",
      }),
      SPOTIFY_REFRESH_TOKEN: envField.string({
        context: "server",
        access: "public",
      }),
      VIEWS_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  integrations: [react(), mdx()],
});
