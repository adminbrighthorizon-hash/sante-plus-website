import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "http://localhost:4321",
  base: process.env.PUBLIC_BASE_PATH ?? "/",
  integrations: [tailwind(), robotsTxt()],
});
