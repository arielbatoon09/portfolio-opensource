import { Briefcase, Award, Zap, Share2, Mail, LucideIcon, Home, User, BookOpen, Layers } from "lucide-react"

export type SubNavigation = {
  title: string
  href: string
  description?: string
  icon?: LucideIcon
}

export type NavigationItem = {
  title: string
  href?: string
  submenu?: SubNavigation[]
  icon?: LucideIcon
}

export const HeaderNavigations: NavigationItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Blogs", href: "/blog" },
  { title: "Projects", href: "/projects" },
  {
    title: "More",
    submenu: [
      { title: "Experience", href: "/experience", description: "My professional journey", icon: Briefcase },
      { title: "Certifications", href: "/certifications", description: "Achievements and badges", icon: Award },
      { title: "Skills", href: "/skills", description: "Technologies I use", icon: Zap },
      { title: "Socials", href: "/socials", description: "Connect with me", icon: Share2 },
      { title: "Contact", href: "/contact", description: "Get in touch", icon: Mail },
    ],
  },
]

export const MobileNavigations: NavigationItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "/about", icon: User },
  { title: "Blogs", href: "/blog", icon: BookOpen },
  { title: "Projects", href: "/projects", icon: Layers },
  { title: "Experience", href: "/experience", icon: Briefcase },
  { title: "Certifications", href: "/certifications", icon: Award },
  { title: "Skills", href: "/skills", icon: Zap },
  { title: "Socials", href: "/socials", icon: Share2 },
]