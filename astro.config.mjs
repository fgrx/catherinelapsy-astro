import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",

  //adapter: netlify(),
  site: "https://catherinelapsy.com",

  image: {
    domains: ["res.cloudinary.com", "cloudinary.com"],
  },

  integrations: [vue(), partytown(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
