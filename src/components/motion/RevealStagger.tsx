"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { staggerContainer, viewportItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
};

export function RevealStagger({ children, className }: RevealStaggerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={viewportItem}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}
