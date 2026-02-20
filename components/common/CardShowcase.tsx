import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

import { CalendarDays } from "lucide-react";

interface CardShowcaseProps {
  title: string;
  image: string;
  href: string;
  description?: string;
  date?: string;
}

export function CardShowcase({ title, image, href, description, date }: CardShowcaseProps) {
  return (
    <div className="group h-full w-full transition-all duration-300 hover:translate-y-[-4px]">
      <Link href={href} className="flex flex-col h-full w-full rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border border-card-foreground/10">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between p-4 flex-grow space-y-2">
          {date && (
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
              <CalendarDays className="h-3 w-3" />
              {date}
            </div>
          )}
          <h3 className="text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}

export function CardShowcaseSkeleton({ withDescription = false }: { withDescription?: boolean }) {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-border/50 bg-card">
      <div className="aspect-[16/9] w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        {withDescription && (
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
          </div>
        )}
      </div>
    </div>
  );
}