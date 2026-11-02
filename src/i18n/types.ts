export type Locale = "en" | "ja";

export interface Strings {
  meta: { title: string; description: string };
  nav: { docs: string; github: string; language: string };
  hero: { lead: string; primary: string; secondary: string };
  steps: { title: string; items: { title: string; body: string }[] };
  features: { title: string; items: { title: string; body: string }[] };
  start: { title: string; body: string; more: string };
  footer: { license: string; derived: string };
  notFound: { title: string; body: string; home: string };
}
