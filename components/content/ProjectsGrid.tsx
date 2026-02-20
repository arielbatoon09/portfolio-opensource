"use client"

import { useState, useMemo, useEffect } from "react";
import { Project, ProjectType, ProjectCategory, Projects } from "@/constants/projects";
import { ProjectFilters } from "@/components/content/ProjectFilters";
import { CardShowcase, CardShowcaseSkeleton } from "@/components/common/CardShowcase";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { PageHeading } from "@/components/common/PageHeading";

export function ProjectsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;

  const [activeFilters, setActiveFilters] = useState({
    type: "All" as ProjectType | "All",
    category: "All" as ProjectCategory | "All",
    tech: "All",
    search: "",
  });

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Derived state for filtered projects
  const filteredProjects = useMemo(() => {
    return Projects.filter((project) => {
      const typeMatch = activeFilters.type === "All" || project.type === activeFilters.type;
      const categoryMatch = activeFilters.category === "All" || project.category === activeFilters.category;
      const techMatch = activeFilters.tech === "All" || project.techStack.includes(activeFilters.tech);
      const searchMatch = !activeFilters.search ||
        project.title.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(activeFilters.search.toLowerCase());

      return typeMatch && categoryMatch && techMatch && searchMatch;
    });
  }, [activeFilters]);

  // Derived state for pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    simulateLoading();
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get all unique tech stacks for filter dropdown
  const allTechStacks = Array.from(new Set(Projects.flatMap(p => p.techStack))).sort();

  return (
    <Section className="!pt-24">
      <PageHeading
        title="Featured Projects"
        description="Explore my portfolio of web applications, open source contributions, and experiments."
      />

      <div>
        <ProjectFilters
          onFilter={(filters) => {
            simulateLoading();
            setActiveFilters(filters as any);
            setCurrentPage(1);
          }}
          availableTech={allTechStacks}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <CardShowcaseSkeleton key={i} withDescription />
            ))}
          </div>
        ) : currentProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project) => (
              <CardShowcase
                key={project.id}
                title={project.title}
                image={project.thumbnail}
                href={`/projects/${project.slug}`}
                description={project.description}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-2 text-muted-foreground">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {!isLoading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
