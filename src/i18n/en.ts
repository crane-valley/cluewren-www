import type { Strings } from "./types";

const en: Strings = {
  meta: {
    title: "Cluewren",
    description:
      "Cluewren plays the game open in your Unity, Godot, or Unreal editor for your coding agent. A fast decision model plays inside a C# harness the agent writes, and the agent reports findings with evidence.",
  },
  nav: { docs: "Docs", github: "GitHub", language: "Language" },
  hero: {
    lead: "Your coding agent can play the game open in your Unity, Godot, or Unreal editor to explore for bugs, verify claims, or reach goals in play.",
    primary: "Get started",
    secondary: "GitHub",
  },
  steps: {
    title: "How it works",
    items: [
      {
        title: "Open your game in its editor",
        body: "Open your project in Unity, Godot, or Unreal Engine with the Cluewren plugin installed.",
      },
      {
        title: "Ask your coding agent",
        body: "Ask Claude Code or Codex to explore the game for bugs, test it, verify a claim about how it works or looks, or reach a goal in play.",
      },
      {
        title: "Play and report",
        body: "Your agent researches the code, writes a C# harness that a fast decision model plays, inspects the frames, and reports what play showed with evidence.",
      },
    ],
  },
  features: {
    title: "Features",
    items: [
      {
        title: "Engine plugins",
        body: "Plugins connect Unity 6000.0+, Godot 4, and Unreal Engine 5 to the local Cluewren process over a loopback WebSocket with a secret handshake.",
      },
      {
        title: "Your own coding agent",
        body: "Cluewren never starts or drives a language model. It runs as an MCP server for your Claude Code or Codex session, using your existing subscription or API key.",
      },
      {
        title: "What leaves your machine",
        body: "Decision requests with game-state text go to TypeSafe's API, and your agent talks to its own provider. Nothing goes to Cluewren: no accounts, no telemetry. Recordings and run data stay in your project.",
      },
      {
        title: "Sandboxed execution",
        body: "The harness code written by your agent runs in a Windows AppContainer with no API keys, and under bubblewrap on Linux when available.",
      },
    ],
  },
  start: {
    title: "Quick start",
    body: "Requires the .NET 10 SDK. Clone the repository, build the Release binary, and run connect to set up Claude Code (use connect codex for Codex):",
    more: "Read the docs for engine plugin installation and API key setup",
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
