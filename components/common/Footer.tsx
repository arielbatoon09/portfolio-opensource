import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Socials } from "@/constants/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4">
      <div className="container mx-auto max-w-4xl px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm text-muted-foreground">© {currentYear} Ariel Batoon. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-1">
          {Socials.map((link) => (
            <Link key={link.name} href={link.href} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground">
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}