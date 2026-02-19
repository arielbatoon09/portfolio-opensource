type HeaderNavigationsType = {
  title: string;
  href?: string;
  subMenus?: HeaderNavigationsType[];
}

export const HeaderNavigations: HeaderNavigationsType[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blogs",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "More",
    subMenus: [
      {
        title: "Works",
        href: "/works",
      },
      {
        title: "Journey",
        href: "/journey",
      },
      {
        title: "Certifications",
        href: "/certifications",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ]
  },
];