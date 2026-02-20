"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ExperienceItem } from "@/components/common/ExperienceItem";
import { SkillsGrid } from "@/components/content/SkillsGrid";
import { CertificateCard, CertificateEmptyState } from "@/components/common/CertificateCard";
import { Briefcase, Code2, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutTabs() {
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "certificates">("experience");

  useEffect(() => {
    const handleNavigation = () => {
      // Small timeout to allow the URL to update before we read it
      setTimeout(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash === "experience" || hash === "skills" || hash === "certificates") {
          setActiveTab(hash as "experience" | "skills" | "certificates");

          const element = document.getElementById("professional-journey");
          if (element) {
            // Adjust offset for sticky header if needed, but smooth scroll to center or start is good
            const yOffset = -100; // Offset for sticky headers
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }, 50);
    };

    // Check on mount
    handleNavigation();

    // Listen for hash changes and popstate (history navigation)
    window.addEventListener("hashchange", handleNavigation);
    window.addEventListener("popstate", handleNavigation);

    // Also listen for clicks on links that might be hash links to this page, 
    // to force update if Next.js intercepts it without firing events immediately
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash) {
        // If the link points to the current page's hash
        if (target.pathname === window.location.pathname || target.href.includes(window.location.pathname)) {
          handleNavigation();
        }
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "certificates", label: "Certificates", icon: Award },
  ] as const;

  const experiences = [
    {
      title: "Web Developer",
      company: "GrowthOps Asia",
      period: "2021 - Present",
      type: "Full-time",
      location: "Hybrid / Remote",
      description: "Contributing to high-impact digital solutions in a fast-paced agency environment. Collaborating with cross-functional teams to deliver robust web applications and enhance user experiences for enterprise clients."
    },
    {
      title: "Part-time Instructor (IT Dept)",
      company: "University / Institution",
      period: "2023 - Present",
      type: "Part-time",
      location: "On-site",
      description: "Teaching Modern Development to IT students every Saturday. Curriculum covers web development fundamentals to advanced topics, mentoring students to bridge the gap between theory and industry practice."
    },
    {
      title: "Freelance Software Engineer",
      company: "Self-Employed",
      period: "2021 - Present",
      type: "Freelance",
      location: "Remote",
      description: "Delivering tailored web solutions and consulting for diverse clients alongside my corporate role. focused on responsive UI/UX design, performance optimization, and custom software development."
    },
    {
      title: "Founder & Lead Software Engineer",
      company: "Hysync",
      period: "2020 - Present",
      type: "Personal Project",
      location: "Remote",
      description: "Leading the development of a large-scale Hytale server ecosystem. Architecting core game mechanics using Java and Gradle, while simultaneously managing and developing the platform's web applications and cloud infrastructure."
    }
  ];

  const certificates = [
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
      year: "2023",
      verified: true,
      href: "#",
      color: "text-blue-500"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022",
      verified: true,
      href: "#",
      color: "text-indigo-500"
    }
  ];

  return (
    <Section id="professional-journey" className="!py-12">
      <SectionHeading
        title="Professional Journey"
        description="Explore my experience, skills, and certifications."
      />

      <div className="flex flex-col items-start mb-8">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-secondary/30 rounded-full border border-border/50 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.location.hash = tab.id;
              }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                activeTab === tab.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-primary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative ml-3 md:ml-4 space-y-0 pl-8 md:pl-10 py-2 max-w-3xl mx-auto"
            >
              {experiences.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  isLast={index === experiences.length - 1}
                  latest={index === 0}
                  {...exp}
                />
              ))}
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SkillsGrid />
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {certificates.map((cert, index) => (
                <CertificateCard key={index} {...cert} />
              ))}
              <CertificateEmptyState />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}