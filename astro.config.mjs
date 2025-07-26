import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://kolyyb.github.io',
  base: 'cvkpm',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
