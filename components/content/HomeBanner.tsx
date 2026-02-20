import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { StatusIndicator } from "@/components/common/StatusIndicator";

export function HomeBanner() {
  return (
    <Section className="!pb-12">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 md:gap-14 items-center">
        {/* Image Container */}
        <div className="relative aspect-square mx-auto bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl overflow-hidden flex items-center justify-center shadow-lg">
          <Image src="/media/ariel-profile.jpg" alt="Ariel Batoon Profile" height={500}
            width={500} className="object-cover h-full w-full"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <StatusIndicator />
          <h1 className="font-bold w-full font-sans text-5xl leading-9 -mt-3">Hey, I{"'"}m Ariel
            <span className="ml-1 inline-block origin-bottom-right animate-wave cursor-pointer">
              <Image className="" src="/waving-hand.svg" height={42} width={42} alt="wave hand" />
            </span>
          </h1>
          <p className="leading-relaxed font-sans">
            A full-stack Software Engineer building modern web applications and tailored software solutions, and Founder of <Link href="https://hysync.org" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline">Hysync</Link>, a Hytale server.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <Button size="lg" className="bg-foreground hover:bg-foreground/90"><Calendar /> Get in Touch</Button>
            <Button size="lg" variant="outline">Explore Projects</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}