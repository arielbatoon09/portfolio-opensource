import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "max-w-4xl mx-auto py-24 lg:py-32 px-6 lg:px-4",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}