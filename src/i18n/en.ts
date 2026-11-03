import type { Strings } from "./types";

const en: Strings = {
  meta: {
    title: "Cluewren: Automated playtesting for coding agents",
    description:
      "Ask your coding agent questions about the game open in your Unity, Godot, or Unreal editor. The agent writes a C# harness, Jev plays it, and the agent reports a verdict with measured evidence.",
  },
  nav: {
    label: "Primary navigation",
    skip: "Skip to content",
    docs: "Docs",
    github: "GitHub",
    language: "Language",
  },
  hero: {
    title: "Playtest your game with your coding agent",
    lead:
      "Ask Claude Code or Codex to verify claims, reach goals, or explore the game open in your editor. The agent writes a C# harness, Jev plays it through your engine, and the agent reports a verdict with measured evidence.",
    primary: "Get started",
    secondary: "GitHub",
    requirements:
      "You need Windows 11, the .NET 10 SDK, a TypeSafe API key, and a build from source.",
  },
  report: {
    label: "Sample playtest report",
    caption: "Excerpt from a real run on Unity's FPS Microgame sample.",
    duration: "{s} s, 1 episode",
  },
  steps: {
    title: "How it works",
    items: [
      {
        title: "Open your game in the editor",
        body: "Open your project in Unity, Godot, or Unreal Engine with the Cluewren plugin installed.",
      },
      {
        title: "Ask your coding agent",
        body: "Ask Claude Code or Codex to verify a claim, reach a goal, or explore.",
      },
      {
        title: "Play and report",
        body: "The agent reads the code and writes a C# harness. Jev plays it, then the agent reviews frames when the verdict needs them and reports a verdict with measured evidence.",
      },
    ],
  },
  engines: {
    title: "Tested engines",
    head: {
      engine: "Engine",
      tested: "Tested version",
      install: "How it installs",
    },
    rows: [
      {
        engine: "Unity",
        tested: "6000.6.7f1 (package declares 6000.0 or later)",
        install: "UPM package from a git URL or from disk",
      },
      {
        engine: "Godot",
        tested: "4.7.2",
        install: "Copy addon into addons/ and enable it",
      },
      {
        engine: "Unreal Engine",
        tested: "5.8 (Win64 only)",
        install: "C++ projects build the plugin; Blueprint-only projects use a prebuilt BuildPlugin package",
      },
    ],
  },
  data: {
    title: "Data boundaries",
    stays: {
      title: "What stays on your machine",
      items: [
        "No accounts, no telemetry, and nothing is sent to Cluewren.",
        "Run memory stays in your project: harness.cs, trace logs, report.json, and notes.",
        "Gameplay frames are held only in the brain process memory (the last 160 MiB), never written to disk, and discarded on exit.",
      ],
    },
    leaves: {
      title: "What leaves your machine",
      items: [
        "Jev decision requests (game-state text computed by the harness, plus options) go to api.typesafe.ai.",
        "Whatever your coding agent reads or fetches (source code, or frames via the frames tool) goes to the agent's own provider. Cluewren cannot control what the agent sends.",
      ],
    },
  },
  sandbox: {
    title: "Harness sandbox",
    body:
      "On Windows 11, the harness runs in an AppContainer with no network access, writes only to its run folder, and holds no API keys. If the container cannot be created, Cluewren falls back to a plain child process with no keys in its environment. That fallback process can read your files and reach the network, and the run log states when it is used.",
    more: "Read more about the sandbox",
  },
  start: {
    title: "Quick start",
    body: "These commands build Cluewren and register it with your agent.",
    connect: "Run connect claude or connect codex for the agent you use.",
    next: {
      title: "Next steps",
      items: [
        {
          text: "Install the plugin for your engine",
          page: "getting-started/install/",
        },
        {
          text: "Put your TypeSafe API key in keys.env",
          page: "guides/decision-model-key/",
        },
        {
          text: "Start a new agent session and ask for a run",
          page: "getting-started/first-run/",
        },
      ],
    },
  },
  footer: {
    license: "Cluewren is open source under the Apache-2.0 license.",
    derived: "Derived from Aura Autopilot, licensed under Apache-2.0.",
  },
  notFound: {
    title: "Page not found",
    body: "The requested page does not exist.",
    home: "Back to home",
  },
};

export default en;
