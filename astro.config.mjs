import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify/functions";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  site: "https://catherinelapsy.com",
  integrations: [vue(), tailwind(), partytown(), sitemap()],
});
