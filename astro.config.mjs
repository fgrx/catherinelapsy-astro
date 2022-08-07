import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://catherinelapsy.com",
  integrations: [vue(), tailwind(), image(), partytown(), sitemap()],
});
