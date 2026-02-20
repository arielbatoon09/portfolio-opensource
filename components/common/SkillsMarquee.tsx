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
  const firstRow = skills.filter((skill) => skill.line === 1);
  const secondRow = skills.filter((skill) => skill.line === 2);
  const thirdRow = skills.filter((skill) => skill.line === 3);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s] mt-2">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:50s] mt-2">
        {thirdRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
    </div>
  );
}