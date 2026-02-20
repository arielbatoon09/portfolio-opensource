import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function AuthCard({ children, className, title, description }: AuthCardProps) {
  return (
    <div className={cn("w-full max-w-md space-y-8", className)}>
      <div className="text-center">
        {title && <h2 className="mt-6 text-3xl font-extrabold text-foreground">{title}</h2>}
        {description && (
          <p className="mt-2 text-sm text-muted-foreground italic">
            {description}
          </p>
        )}
      </div>
      <div className="bg-card border border-border/50 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
