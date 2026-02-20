import { Section } from "@/components/common/Section";
import { CardShowcase } from "@/components/common/CardShowcase";
import { SectionHeading } from "@/components/common/SectionHeading";

export function RecentBlogs() {
  return (
    <Section className="!py-12">
      <SectionHeading title="Recent Blogs" description="Here are some of my recent blogs" button={{ label: "View All", href: "/blogs" }} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardShowcase />
        <CardShowcase />
      </div>
    </Section>
  );
}