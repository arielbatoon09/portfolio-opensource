import {
  Code, Terminal, Database, Server,
  Globe, Cpu, FolderGit, Layout, Command,
  AppWindow, Box, Layers, Package, FileJson,
  Shield, Bot, Cloud, Wrench, PenTool
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon: any }[];
}

const SkillItem = ({ name, icon: Icon }: { name: string; icon: any }) => (
  <div className={cn(
    "flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm hover:border-primary/50 hover:bg-secondary/50 transition-colors cursor-default",
  )}>
    <Icon className="h-4 w-4 text-primary" />
    <span className="text-foreground/80">{name}</span>
  </div>
);

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold text-foreground border-b border-border/50 pb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  </div>
);

export function SkillsGrid() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: Code },
        { name: "Next.js", icon: AppWindow },
        { name: "TypeScript", icon: Terminal },
        { name: "Tailwind CSS", icon: Layout },
        { name: "Astro", icon: Globe },
        { name: "Svelte", icon: Code },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: Server },
        { name: "PostgreSQL", icon: Database },
        { name: "GraphQL", icon: Globe },
        { name: "Prisma", icon: Database },
        { name: "PHP", icon: Code },
        { name: "Bun", icon: Package },
        { name: "SQLite", icon: Database },
        { name: "Rust", icon: Code },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: Cpu },
        { name: "Vercel", icon: Cloud },
        { name: "AWS", icon: Cloud }, // Added as placeholder based on category
        { name: "CI/CD", icon: Box },   // Added as placeholder
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "OpenAI API", icon: Bot },
        { name: "LangChain", icon: Bot },
        { name: "Python", icon: Code },
      ]
    },
    {
      title: "Security & Identity",
      skills: [
        { name: "Auth.js", icon: Shield },
        { name: "Clerk", icon: Shield },
        { name: "OAuth", icon: Shield },
      ]
    },
    {
      title: "CMS & No-Code",
      skills: [
        { name: "WordPress", icon: Layout },
        { name: "Sanity", icon: FileJson },
        { name: "Strapi", icon: Database },
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", icon: FolderGit },
        { name: "Figma", icon: PenTool },
        { name: "VS Code", icon: Code },
        { name: "Postman", icon: Activity },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
      {categories.map((category) => (
        <SkillCategory key={category.title} title={category.title} skills={category.skills} />
      ))}
    </div>
  );
}

// Helper component for icon
function Activity(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
