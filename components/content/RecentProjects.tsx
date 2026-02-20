"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Projects } from "@/constants/projects";
import { CardShowcase, CardShowcaseSkeleton } from "@/components/common/CardShowcase";

export function RecentProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const recentProjects = Projects.filter(p => p.featured).slice(0, 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className="!py-12">
      <SectionHeading
        title="Recent Projects"
        description="Here are some of my recent projects"
        button={{ label: "View All", href: "/projects" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          <>
            <CardShowcaseSkeleton />
            <CardShowcaseSkeleton />
          </>
        ) : (
          recentProjects.map((project) => (
            <CardShowcase
              key={project.id}
              title={project.title}
              image={project.thumbnail}
              href={`/projects/${project.slug}`}
            />
          ))
        )}
      </div>
    </Section>
  );
}