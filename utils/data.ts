import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Aperture,
  FileText,
  Gauge,
  Layers,
  PenTool,
  Phone,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

import { siteConfig } from "@/utils/site-config";

export type SkillCategoryConfig = {
  id:
    | "frontend"
    | "architecture"
    | "tooling"
    | "performance"
    | "ux"
    | "delivery";
  icon: LucideIcon;
  accent: "cyan" | "purple" | "magenta" | "blue";
  gradient: string;
};

export const skillCategories: SkillCategoryConfig[] = [
  {
    id: "frontend",
    icon: Sparkles,
    accent: "cyan",
    gradient: "from-accent-cyan/40 to-accent-blue/30",
  },
  {
    id: "architecture",
    icon: Layers,
    accent: "purple",
    gradient: "from-accent-purple/40 to-accent-magenta/30",
  },
  {
    id: "tooling",
    icon: Wrench,
    accent: "magenta",
    gradient: "from-accent-magenta/40 to-accent-purple/30",
  },
  {
    id: "performance",
    icon: Gauge,
    accent: "blue",
    gradient: "from-accent-blue/40 to-accent-cyan/30",
  },
  {
    id: "ux",
    icon: PenTool,
    accent: "cyan",
    gradient: "from-accent-cyan/40 to-accent-purple/30",
  },
  {
    id: "delivery",
    icon: Users,
    accent: "purple",
    gradient: "from-accent-purple/40 to-accent-blue/30",
  },
];

export type ProjectCardConfig = {
  id: "apteka" | "profit" | "seolitte" | "simpals" | "maxtreme" | "alpen";
  stack: string[];
  logo: string;
  site?: string;
  metrics?: string;
};

export const projectCards: ProjectCardConfig[] = [
  {
    id: "apteka",
    stack: ["React", "Next.js", "Tailwind CSS", "React Query", "Payments"],
    logo: "/images/logos/apteka.png",
    site: "https://apteka.md",
    metrics:
      "15–25% faster load, resilient MIA/MAIB payments, regional search + maps.",
  },
  {
    id: "profit",
    stack: ["React", "Next.js", "Stripe API", "Socket.io", "Email"],
    logo: "/images/logos/profit.png",
    site: "https://profit.com",
    metrics:
      "SEO-ready SSR pages, trading battles UI, -15–25% failed payments with Stripe.",
  },
  {
    id: "seolitte",
    stack: ["React", "WordPress", "HTML", "CSS", "SEO"],
    logo: "/images/logos/seolitte.png",
    metrics: "Internal React product + WordPress fixes, faster SEO delivery.",
  },
  {
    id: "simpals",
    stack: ["JavaScript", "WordPress", "HTML", "CSS"],
    logo: "/images/logos/simpals.png",
    site: "https://price.md",
    metrics:
      "Supported Moldova e-commerce ecosystem, built modules and site builder.",
  },
  {
    id: "maxtreme",
    stack: ["Product Ops", "Project Mgmt", "E-commerce"],
    logo: "/images/logos/max-streme.png",
    metrics:
      "Co-founded online retail platform: contracts, compliance, supplier ops.",
  },
  {
    id: "alpen",
    stack: ["HTML", "CSS", "WordPress"],
    logo: "/images/logos/alpen-touch-tech-logo.png",
    metrics: "Landing pages + store builds, light/dark email templates.",
  },
];

export const heroMetrics = [
  { id: "experience", labelKey: "metrics.years", value: "9+" },
  { id: "projects", labelKey: "metrics.projects", value: "20+" },
  { id: "systems", labelKey: "metrics.systems", value: "6+" },
];

const sanitizedPhone = siteConfig.contactPhone.replace(/\s+/g, "");

export type ContactLink = {
  id: "email" | "phone" | "linkedin" | "github" | "resume";
  href: string;
  icon: LucideIcon;
  download?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    href: `mailto:${siteConfig.contactEmail}`,
    icon: Activity,
  },
  {
    id: "phone",
    href: `tel:${sanitizedPhone}`,
    icon: Phone,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/romanov-roman-rro992/",
    icon: Aperture,
  },
  {
    id: "github",
    href: "https://github.com/extremal92",
    icon: Layers,
  },
  {
    id: "resume",
    href: siteConfig.resumePath,
    icon: FileText,
    download: true,
  },
];
