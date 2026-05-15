"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroBackdrop() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-backdrop pointer-events-none absolute inset-0 z-0 min-h-full w-full"
      aria-hidden
      initial={false}
    >
      <motion.div
        className="hero-backdrop-media"
        animate={reducedMotion ? undefined : { scale: [1, 1.035, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-backdrop-sunflare absolute inset-0"
        animate={reducedMotion ? undefined : { opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-backdrop-glow absolute inset-0"
        animate={reducedMotion ? undefined : { opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="hero-backdrop-vignette absolute inset-0"
        animate={reducedMotion ? undefined : { opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="hero-backdrop-wash absolute inset-0" />
    </motion.div>
  );
}
