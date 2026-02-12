export type NavItem = {
  href: string;
  labelKey: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Roman Romanov",
  title: "Roman Romanov — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer crafting futuristic, performant web experiences with React, Next.js, and TypeScript.",
  url: "https://www.rrdev.site",
  contactEmail: "webromaromanov@gmail.com",
  contactPhone: "+373 69 96 79 96",
  location: "Moldova, Chișinău",
  resumePath: "/pdf/CV-Romanov-Roman-2026.pdf",
  ogImage: "/og-image.jpg",
  navItems: [
    { href: "#about", labelKey: "about" },
    { href: "#skills", labelKey: "skills" },
    { href: "#projects", labelKey: "projects" },
    { href: "#contact", labelKey: "contact" },
  ] satisfies NavItem[],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/romanov-roman-rro992/",
    },
    { label: "GitHub", href: "https://github.com/extremal92" },
  ] satisfies SocialLink[],
};

export type SiteConfig = typeof siteConfig;
