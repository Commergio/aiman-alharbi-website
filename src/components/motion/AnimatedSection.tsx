"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { sectionReveal, viewportSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "footer";
};

export function AnimatedSection({ id, children, className, as = "section" }: AnimatedSectionProps) {
  const reduced = useReducedMotion();
  const Component = as === "footer" ? motion.footer : motion.section;

  return (
    <Component
      id={id}
      className={cn("section-surface section-pad relative", className)}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={viewportSection}
      variants={sectionReveal}
    >
      {children}
    </Component>
  );
}
