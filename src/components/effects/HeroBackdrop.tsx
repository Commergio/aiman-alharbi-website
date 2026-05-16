"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroBackdrop() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`hero-backdrop pointer-events-none absolute inset-0 z-0 min-h-full w-full${reducedMotion ? " hero-backdrop--static" : ""}`}
      aria-hidden
    >
      <div className="hero-backdrop-media" />
      <div className="hero-backdrop-sunflare absolute inset-0" />
      <div className="hero-backdrop-glow absolute inset-0" />
      <div className="hero-backdrop-vignette absolute inset-0" />
      <div className="hero-backdrop-wash absolute inset-0" />
    </div>
  );
}
