import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { skills } from "@/constants/skills";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
}

const SkillCard = ({ name, icon: Icon }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-border bg-muted/20 px-4 py-2 hover:bg-muted/50 hover:border-primary transition-colors cursor-default",
        "dark:bg-secondary/20 dark:hover:bg-secondary/40"
      )}
    >
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export function SkillsMarquee() {
  const rowLines = [1, 2, 3];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {rowLines.map((line, index) => (
        <Marquee
          key={line}
          reverse={index % 2 !== 0} // Line 2 (index 1) will be reversed (To Right)
          pauseOnHover
          className={cn("[--duration:50s]", index > 0 && "mt-2")}
        >
          {skills
            .filter((skill) => skill.line === line)
            .map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
        </Marquee>
      ))}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
    </div>
  );
}