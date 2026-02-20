import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import { Section } from "@/components/common/Section";

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = Projects.findIndex((p) => p.slug === slug);
  const project = Projects[projectIndex];

  if (!project) {
    return notFound();
  }

  const prevProject = Projects[projectIndex - 1] || null;
  const nextProject = Projects[projectIndex + 1] || null;

  return (
    <div className="pt-24 pb-16">
      <Section className="!pt-0">
        {/* Top: Back to Project button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="-ml-4 text-muted-foreground hover:text-foreground">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
            </Link>
          </Button>
        </div>

        {/* Banner: Project Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-sm mb-12">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="outline" className="text-sm py-1">
                {project.type}
              </Badge>
              <Badge variant="secondary" className="text-sm py-1">
                {project.category}
              </Badge>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Content Body */}
          <div className="prose dark:prose-invert max-w-none mb-12">
            {project.content ? (
              <div dangerouslySetInnerHTML={{ __html: project.content }} />
            ) : (
              <>
                <h3>Overview</h3>
                <p>{project.description}</p>
              </>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-16">
            {project.demoUrl && (
              <Button asChild>
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button variant="outline" asChild>
                <Link href={project.repoUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> View Source
                </Link>
              </Button>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-border pt-8 mt-12">
            <p className="text-sm text-muted-foreground mb-8 text-center italic">
              Last Updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Previous Project */}
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex flex-col p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-left"
                >
                  <span className="text-xs text-muted-foreground mb-1 flex items-center">
                    <ArrowLeft className="mr-1 h-3 w-3 transition-transform group-hover:-translate-x-1" /> Previous Work
                  </span>
                  <span className="font-medium text-foreground">{prevProject.title}</span>
                </Link>
              ) : (
                <div className="flex flex-col p-4 border border-border/50 rounded-lg bg-muted/10 text-left opacity-50 cursor-not-allowed">
                  <span className="text-xs text-muted-foreground mb-1 flex items-center">
                    <ArrowLeft className="mr-1 h-3 w-3" /> Previous Work
                  </span>
                  <span className="font-medium text-muted-foreground">Start of Projects</span>
                </div>
              )}

              {/* Next Project */}
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex flex-col p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors text-right items-end"
                >
                  <span className="text-xs text-muted-foreground mb-1 flex items-center">
                    Next Work <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="font-medium text-foreground">{nextProject.title}</span>
                </Link>
              ) : (
                <div className="flex flex-col p-4 border border-border/50 rounded-lg bg-muted/10 text-right items-end opacity-50 cursor-not-allowed">
                  <span className="text-xs text-muted-foreground mb-1 flex items-center">
                    Next Work <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                  <span className="font-medium text-muted-foreground">End of Projects</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}