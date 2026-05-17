import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Commergio — site developer */
export const COMMERGIO = {
  url: "https://commergio.com",
} as const;

/** Contact details — not locale-specific */
export const CONTACT = {
  email: "mark@AimanAlharbi.com",
  phone: "+966 504136298",
  whatsapp: "https://wa.me/966504136298",
  x: "https://x.com/aiman_alharbi?s=21",
  xHandle: "@aiman_alharbi",
} as const;

/** Service card icons (order matches dictionary services.items) */
export const SERVICE_ICONS: LucideIcon[] = [
  ChartNoAxesCombined,
  Building2,
  TrendingUp,
  BriefcaseBusiness,
  UsersRound,
  GraduationCap,
  Target,
  Layers3,
  Sparkles,
  BadgeCheck,
];
