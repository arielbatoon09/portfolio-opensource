import Link from "next/link";
import { ExternalLink, GraduationCap, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificateCardProps {
  title: string;
  issuer: string;
  year: string;
  verified: boolean;
  href: string;
  icon?: React.ReactNode;
  color?: string; // e.g. "text-blue-500"
}

export function CertificateCard({
  title,
  issuer,
  year,
  verified,
  href,
  icon,
  color = "text-primary"
}: CertificateCardProps) {
  return (
    <Link href={href} className="group h-full block">
      <div className="bg-card hover:bg-muted/40 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 rounded-xl p-5 h-full transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
        {/* Hover Effect Light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="space-y-4 relative z-10">
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-secondary/50",
            color
          )}>
            {icon || <GraduationCap className="w-6 h-6" />}
          </div>
          <div>
            <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">{title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{issuer}</p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-border/50 flex justify-between items-center text-xs text-muted-foreground font-mono relative z-10">
          <span className="flex items-center gap-1.5 px-2 py-1 bg-secondary/50 rounded">
            <CalendarDays className="w-3 h-3" /> {year}
          </span>
          {verified && (
            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              Verified
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function CertificateEmptyState() {
  return (
    <div className="h-full border border-dashed border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 text-muted-foreground/50 hover:bg-muted/20 transition-colors min-h-[200px]">
      <div className="p-3 bg-secondary/50 rounded-full">
        <GraduationCap className="w-6 h-6" />
      </div>
      <p className="text-sm font-medium">More to come...</p>
    </div>
  )
}
