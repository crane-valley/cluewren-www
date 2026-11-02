import en from "./en";
import ja from "./ja";
import type { Locale, Strings } from "./types";

export const strings: Record<Locale, Strings> = { en, ja };

export const languages: Record<Locale, { label: string; lang: string; home: string }> = {
  en: { label: "English", lang: "en", home: "/" },
  ja: { label: "日本語", lang: "ja", home: "/ja/" },
};

export const repo = "https://github.com/crane-valley/cluewren";

export function docsUrl(locale: Locale) {
  return locale === "en" ? "https://docs.cluewren.dev/" : "https://docs.cluewren.dev/ja/";
}
