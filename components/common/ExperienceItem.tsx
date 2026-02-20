import { Briefcase, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceItemProps {
  title: string;
  company: string;
  type: string;
  location: string;
  period: string;
  description: string;
  isLast?: boolean;
  latest?: boolean;
}

export function ExperienceItem({
  title,
  company,
  type,
  location,
  period,
  description,
  isLast,
  latest
}: ExperienceItemProps) {
  return (
    <div className={cn("relative group pl-2", !isLast && "pb-10 md:pb-12")}>
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-[-25px] md:left-[-33px] top-6 bottom-0 w-0.5 bg-border/50 group-hover:bg-primary/20 transition-colors duration-300"></div>
      )}

      {/* Dot Indicator */}
      <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center">
        {latest && (
          <span className="absolute h-3.5 w-3.5 rounded-full bg-primary animate-ping opacity-75"></span>
        )}
        <span
          className={cn(
            "relative h-3.5 w-3.5 rounded-full bg-background border-2 transition-all duration-300 shadow-[0_0_0_4px_rgba(0,0,0,0.05)] dark:shadow-none z-10",
            latest
              ? "border-primary bg-primary ring-2 ring-primary/20"
              : "border-muted-foreground/30 group-hover:border-primary group-hover:bg-primary group-hover:scale-125"
          )}
        ></span>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start md:items-center mb-2 gap-1">
        <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-mono bg-secondary/40 px-2 py-1 rounded self-start sm:self-auto">
          <CalendarDays className="w-3.5 h-3.5" /> <span>{period}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground mb-3 text-sm font-medium">
        <div className="flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5" />
          <span className="text-foreground">{company}</span>
        </div>
        <span className="text-border hidden sm:inline">|</span>
        <span>{type}</span>
        <span className="text-border hidden sm:inline">|</span>
        <span>{location}</span>
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
