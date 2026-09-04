import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// Static by default. The Vercel adapter exists so exactly one route,
// /api/contact, can run on demand; every content page is prerendered HTML.
export default defineConfig({
  site: "https://drmishra.space",
  output: "static",
  adapter: vercel({ webAnalytics: { enabled: false } }),
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
});
