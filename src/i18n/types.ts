export type Locale = "en" | "ja";

interface Item {
  title: string;
  body: string;
}

export interface Strings {
  meta: { title: string; description: string };
  nav: { label: string; skip: string; docs: string; github: string; language: string };
  hero: { title: string; lead: string; primary: string; secondary: string; requirements: string };
  report: { label: string; caption: string; duration: string };
  steps: { title: string; items: Item[] };
  engines: {
    title: string;
    head: { engine: string; tested: string; install: string };
    rows: { engine: string; tested: string; install: string }[];
  };
  data: { title: string; stays: { title: string; items: string[] }; leaves: { title: string; items: string[] } };
  sandbox: { title: string; body: string; more: string };
  start: {
    title: string;
    body: string;
    connect: string;
    next: { title: string; items: { text: string; page: string }[] };
  };
  footer: { license: string; derived: string };
  notFound: { title: string; body: string; home: string };
}
