import { Facebook, Github, Linkedin, Mail } from "lucide-react";


export type Social = {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const Socials: Social[] = [
  {
    name: "Github",
    href: "https://github.com/arielbatoon09",
    icon: <Github />
  },
  {
    name: "Facebook",
    href: "https://facebook.com/itsarielbatoon",
    icon: <Facebook />
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/arielbatoon",
    icon: <Linkedin />
  },
  {
    name: "Mail",
    href: "mailto:info.arielbatoon@gmail.com",
    icon: <Mail />
  }
]