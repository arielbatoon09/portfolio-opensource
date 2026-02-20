import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  button?: {
    label: string;
    href: string;
  }
};

export function SectionHeading({ title, description, button }: SectionHeadingProps) {
  return (
    <div className="space-y-1 mb-5 flex justify-between items-center">
      <div>
        <h2 className="font-custom text-foreground text-xl font-bold">{title}</h2>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      {button && <Button className="group" variant="link" asChild><Link className="text-base" href={button.href}>{button.label} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" /></Link></Button>}
    </div>
  );
}