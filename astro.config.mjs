import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://astronaut.github.io',
  base: 'my-repo',
});

//If you don't have vercel the configuration will be empty

//ej : export default defineConfig({});
