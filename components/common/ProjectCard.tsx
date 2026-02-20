import { Project } from "@/constants/projects";
import { CardShowcase, CardShowcaseSkeleton } from "@/components/common/CardShowcase";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <CardShowcase
      title={project.title}
      image={project.thumbnail}
      href={`/projects/${project.slug}`}
    />
  );
}

export function ProjectCardSkeleton() {
  return <CardShowcaseSkeleton />;
}
