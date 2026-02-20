import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";

export function CTABanner() {
  return (
    <Section className="!py-12">
      <div className="bg-gradient-to-r from-black via-gray-900 to-black container max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center py-16 text-center space-y-6 md:rounded-lg">
        <h2 className="text-4xl font-bold text-white">Need help building something?</h2>
        <p className="text-white/75 w-full md:max-w-xl">Whether you{"'"}re searching for a dedicated partner to develop your project or simply need expert support, I{"'"}m here to help.</p>
        <Button variant="outline" size="lg" asChild><Link href="/contact">Let's Talk!</Link></Button>
      </div>
    </Section>
  );
}