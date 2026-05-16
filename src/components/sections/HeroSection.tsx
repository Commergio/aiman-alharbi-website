"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { HeroBackdrop } from "@/components/effects/HeroBackdrop";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useTranslations } from "@/contexts/LocaleContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const portraitFloat = {
  y: [0, -14, 0],
  transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
};

export function HeroSection() {
  const { dict } = useTranslations();
  const { site, hero } = dict;
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="hero-section section-surface relative min-h-[min(100dvh,920px)] overflow-hidden pt-[calc(4.25rem+env(safe-area-inset-top,0px))] sm:pt-[calc(4.75rem+env(safe-area-inset-top,0px))] md:pt-[calc(5.25rem+env(safe-area-inset-top,0px))]"
    >
      <HeroBackdrop />

      <div className="hero-section-content section-shell relative z-10 grid min-w-0 items-center gap-4 pb-10 pt-1 md:grid-cols-[minmax(0,1fr)_minmax(240px,42%)] md:items-stretch md:gap-6 md:pb-12 md:pt-2 lg:grid-cols-[minmax(0,1fr)_minmax(280px,40%)] lg:gap-8 lg:pb-14 lg:pt-3">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero-copy relative z-10 min-w-0 max-w-full space-y-4 sm:space-y-5 lg:pe-2"
        >
          <motion.span variants={item} className="hero-badge">
            <span className="hero-badge-dot" aria-hidden />
            {hero.badge}
          </motion.span>

          <motion.h1 variants={item} className="hero-title">
            {site.name}
          </motion.h1>

          <motion.p variants={item} className="hero-subtitle">
            {site.subtitle}
          </motion.p>

          <motion.p variants={item} className="hero-description">
            {site.description}
          </motion.p>

          <motion.div variants={item} className="hero-cta flex flex-col gap-2.5 pt-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <MagneticButton href="#contact" variant="default" size="lg" className="w-full sm:w-auto sm:min-w-[10.5rem]">
              {hero.ctaBook}
            </MagneticButton>
            <MagneticButton href="#biography" variant="secondary" size="lg" className="w-full sm:w-auto sm:min-w-[10.5rem]">
              {hero.ctaProfile}
            </MagneticButton>
            <MagneticButton href="#contact" variant="gold" size="lg" className="w-full sm:w-auto sm:min-w-[10.5rem]">
              {hero.ctaContact}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-portrait-media"
            animate={reducedMotion ? undefined : portraitFloat}
          >
            <Image
              src="/aiman-photo.png"
              alt={hero.photoAlt}
              fill
              priority
              className="hero-portrait-image object-cover"
              sizes="320px"
            />
          </motion.div>
          <motion.span
            className="mt-3 hidden shrink-0 font-body-en text-[9px] tracking-[0.28em] text-[#8a9bb0] md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {hero.years}
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
