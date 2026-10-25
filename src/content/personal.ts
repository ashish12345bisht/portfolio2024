import type { PersonalProject } from "./types";

// Newest first. Add each new app here and it shows up in the Personal projects section.
export const personalProjects: PersonalProject[] = [
  {
    name: "Code Typer",
    tagline: "Learn DSA by typing the solutions",
    summary:
      "A typing game for coding practice. Pick a problem, read the approach, then type the solution while it tracks your speed and accuracy. 229 problems, from first syntax to graphs and DP, in C++, Java, Python or JavaScript.",
    features: [
      "18 syntax basics for beginners, then 211 DSA problems across 18 topics",
      "Every solution in all four languages is compiled and run against test cases",
      "Live WPM and accuracy, auto-indent, and progress saved per language",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Vitest", "Vercel"],
    platform: "Web",
    repo: "https://github.com/ashish12345bisht/code-typer",
    live: "https://code-typer.ashishxbisht.in",
  },
  {
    name: "Copyshelf",
    tagline: "Clipboard history for Linux",
    summary:
      "Press Super+V, pick something you copied earlier, and it gets pasted into the app you're using, just like Win+V on Windows. Works across GNOME, KDE, Sway, Hyprland and X11.",
    features: [
      "Remembers your last 25 copies, text and images, across restarts, with pinning and search",
      "Auto-pastes into the focused app, including terminals, via a GNOME Shell extension on Wayland",
      "Skips secrets that password managers mark as sensitive",
    ],
    stack: [
      "Python",
      "GTK · PyGObject",
      "GNOME Shell extension",
      "Wayland / X11",
      "GitHub Actions",
    ],
    version: "v0.2.0",
    platform: "Linux",
    repo: "https://github.com/ashish12345bisht/copyshelf",
    install:
      "curl -fsSL https://raw.githubusercontent.com/ashish12345bisht/copyshelf/main/get.sh | bash",
  },
];
