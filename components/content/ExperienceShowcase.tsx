import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ExperienceItem } from "@/components/common/ExperienceItem";

export function ExperienceShowcase() {
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
      company: "University / Institution", // You might want to update this if you have a specific name
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

  return (
    <Section className="!py-12">
      <SectionHeading
        title="Work Experience"
        description="A glimpse into my professional journey."
        button={{ label: "View All Experiences", href: "/experience" }}
      />

      <div className="relative ml-3 md:ml-4 space-y-0 pl-8 md:pl-10 py-2">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            isLast={index === experiences.length - 1}
            latest={index === 0}
            {...exp}
          />
        ))}
      </div>
    </Section>
  );
}
