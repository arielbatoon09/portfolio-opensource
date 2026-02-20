import Link from "next/link";
import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { Socials } from "@/constants/socials";
import { Section } from "@/components/common/Section";
import { StatusIndicator } from "@/components/common/StatusIndicator";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <Section className="!pb-0">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] gap-10 md:gap-16 items-center">
        {/* Left Column: Image & Status */}
        <div className="space-y-6 mx-auto w-full max-w-sm md:max-w-none md:sticky md:top-24">
          <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden ring-1 ring-border/20">
            <Image
              src="/media/ariel-profile-img.png"
              alt="Ariel Batoon"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl">
            <div className="flex items-center gap-3 text-sm font-medium text-foreground/80">
              <div className="p-1.5 bg-primary/10 rounded-full text-primary">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Cebu, Philippines</span>
            </div>
            <div className="h-px bg-border/50 w-full"></div>
            <div className="pl-1">
              <StatusIndicator />
            </div>

            <div className="pt-2 flex flex-col gap-2 w-full">
              <Button size="sm" className="w-full gap-2">
                <Download className="w-4 h-4" /> Download CV
              </Button>
              <Button size="sm" variant="outline" className="w-full gap-2 bg-background/50 backdrop-blur hover:bg-secondary/60" asChild>
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Text & Actions */}
        <div className="space-y-8 pt-2 md:sticky md:top-24">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight leading-tight">
              Developing with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Passion</span> & Purpose.
            </h1>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
              <p>
                I'm <span className="font-semibold text-foreground">Ariel Batoon</span>, a dedicated <strong>Software Engineer</strong> with over <strong>3 years of professional experience</strong> at <strong>GrowthOps Asia</strong> and as a Freelancer. I specialize in building scalable, modern web applications that solve real-world problems.
              </p>
              <p>
                Currently, I also serve as a <strong>Part-time Instructor</strong> for the IT Department, teaching Modern Development from basic to advanced concepts. I am passionate about sharing knowledge and empowering the next generation of developers.
              </p>
              <p>
                On a personal level, I am the <strong>Founder and Lead Software Engineer</strong> of <Link href="https://hysync.org" target="_blank" className="font-semibold text-primary hover:underline underline-offset-4 decoration-primary/30">Hysync</Link>, a Hytale server project where I architect complex game mechanics using <strong>Java (Gradle)</strong> and manage the ecosystem's companion <strong>Web Applications</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            {Socials.map((social) => (
              <Link key={social.name} href={social.href} target="_blank" className="hover:text-primary transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}