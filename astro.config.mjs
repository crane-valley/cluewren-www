import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cluewren.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: { prefixDefaultLocale: false },
  },
});
