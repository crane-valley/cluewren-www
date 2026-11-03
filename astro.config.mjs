import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cluewren.dev",
  integrations: [sitemap({ i18n: { defaultLocale: "en", locales: { en: "en", ja: "ja" } } })],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: { prefixDefaultLocale: false },
  },
});
