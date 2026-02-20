import {
  Code, Terminal, Database, Server,
  Globe, Cpu, FolderGit, Layout, Command,
  AppWindow, Box, Layers, Package, FileJson
} from "lucide-react";

export const skills = [
  // Line 1
  { name: "React", icon: Code, line: 1 },
  { name: "Next.js", icon: AppWindow, line: 1 },
  { name: "TypeScript", icon: Terminal, line: 1 },
  { name: "Tailwind CSS", icon: Layout, line: 1 },
  { name: "Node.js", icon: Server, line: 1 },
  { name: "PostgreSQL", icon: Database, line: 1 },
  { name: "GraphQL", icon: Globe, line: 1 },
  { name: "Docker", icon: Cpu, line: 1 },

  // Line 2
  { name: "Git", icon: FolderGit, line: 2 },
  { name: "Prisma", icon: Database, line: 2 },
  { name: "Figma", icon: Layout, line: 2 },
  { name: "Vercel", icon: Globe, line: 2 },
  { name: "Astro", icon: Code, line: 2 },
  { name: "Rust", icon: Code, line: 2 },
  { name: "Svelte", icon: Code, line: 2 },
  { name: "PHP", icon: Code, line: 2 },

  // Line 3
  { name: "MacOS", icon: Command, line: 3 },
  { name: "Mdx", icon: FileJson, line: 3 },
  { name: "Bun", icon: Package, line: 3 },
  { name: "SQLite", icon: Database, line: 3 },
  { name: "Discord", icon: Layers, line: 3 },
  { name: "YouTube", icon: Layers, line: 3 },
  { name: "Zed", icon: Code, line: 3 },
];
