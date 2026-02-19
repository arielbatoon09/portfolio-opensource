import Link from "next/link";
import { GithubIcon, FacebookIcon, LinkedinIcon, MailIcon } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: GithubIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/yourusername",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    href: "mailto:[EMAIL_ADDRESS]",
    icon: MailIcon,
  },
];

export function Footer() {
  return (
    <footer aria-label="Footer" className="py-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-y-2 sm:flex-row sm:justify-between">
        <ul className="flex flex-wrap gap-2 justify-around w-full mb-4 md:justify-center md:mb-0 md:w-auto">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <link.icon className="bg-gray-200/70 dark:bg-gray-800/70 hover:bg-gray-300/70 dark:hover:bg-gray-700/70 transition-colors duration-300 ease-in-out w-8 h-8 p-1.5 rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-x-2 text-center">
          <span className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ariel Batoon |{" "}
            <Link className="hover:text-foreground transition-colors underline" href="/license">
              License
            </Link>
            {" "}|{" "}
            <Link className="hover:text-foreground transition-colors underline" href="/privacy">
              Privacy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}