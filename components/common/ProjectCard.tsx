import { Project } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full w-full transition-all duration-300 hover:translate-y-[-4px]">
      <Link href={`/projects/${project.slug}`} className="flex flex-col h-full w-full rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border border-card-foreground/10">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between p-4 flex-grow space-y-3">
          <h3 className="text-lg font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{project.title}</h3>

          <div className="flex flex-wrap gap-2 text-xs">
            <Badge variant="outline" className={cn(
              "px-2 py-0.5 rounded-full border shadow-sm font-medium",
              project.type === "Open Source" && "border-green-500 text-green-600 bg-green-50 dark:bg-green-900/10",
              project.type === "Personal" && "border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-900/10",
              project.type === "Business" && "border-purple-500 text-purple-600 bg-purple-50 dark:bg-purple-900/10",
            )}>
              {project.type}
            </Badge>
            <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground border-transparent px-2 py-0.5 rounded-full font-medium">
              {project.category}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-1.5 py-0 rounded text-[10px] bg-secondary/70">
                {tech}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-border/50 bg-card">
      <div className="aspect-[16/9] w-full">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="p-4 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-24 rounded-full" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  );
}