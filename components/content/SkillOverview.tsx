import { Section } from "@/components/common/Section";
import { SkillsMarquee } from "@/components/common/SkillsMarquee";
import { SectionHeading } from "@/components/common/SectionHeading";

export function SkillOverview() {
  return (
    <Section className="!py-12">
      <SectionHeading title="Skills & Technologies" description="Here are some of the technologies I've been working with:" button={{ label: "View All", href: "/about#skills" }} />
      <SkillsMarquee />
    </Section>
  );
}