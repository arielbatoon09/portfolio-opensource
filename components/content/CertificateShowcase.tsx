import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CertificateCard, CertificateEmptyState } from "@/components/common/CertificateCard";
import { GraduationCap } from "lucide-react";

export function CertificateShowcase() {
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
    <Section className="!pt-12 !pb-24">
      <SectionHeading
        title="Certifications"
        description="Continuous learning and validation of expertise."
        button={{ label: "View All Certificates", href: "/certificates" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
        <CertificateEmptyState />
      </div>
    </Section>
  );
}
