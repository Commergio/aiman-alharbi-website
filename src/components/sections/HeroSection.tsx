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

      <motion.div className="hero-section-content section-shell relative z-10 grid min-w-0 items-center gap-4 pb-10 pt-1 min-[520px]:grid-cols-[minmax(0,1fr)_minmax(280px,48%)] min-[520px]:items-stretch min-[520px]:gap-6 min-[520px]:pb-12 min-[520px]:pt-2 lg:min-[520px]:grid-cols-[minmax(0,1fr)_minmax(320px,46%)] lg:gap-8 lg:pb-14 lg:pt-3">
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

          <motion.div variants={item} className="hero-cta flex flex-col gap-2.5 pt-2 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:gap-3">
            <MagneticButton href="#contact" variant="default" size="lg" className="w-full min-[400px]:w-auto">
              {hero.ctaBook}
            </MagneticButton>
            <MagneticButton href="#biography" variant="secondary" size="lg" className="w-full min-[400px]:w-auto">
              {hero.ctaProfile}
            </MagneticButton>
            <MagneticButton href="#contact" variant="gold" size="lg" className="w-full min-[400px]:w-auto">
              {hero.ctaContact}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait relative mx-auto flex w-full min-w-0 max-w-[min(94vw,400px)] shrink-0 flex-col justify-end min-[400px]:max-w-[440px] min-[520px]:mx-0 min-[520px]:h-full min-[520px]:w-full min-[520px]:max-w-none"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-portrait-media relative w-full min-h-[min(260px,42vh)] min-[520px]:min-h-0 min-[520px]:flex-1 min-[520px]:h-full"
            animate={reducedMotion ? undefined : portraitFloat}
          >
            <Image
              src="/aiman-photo.png"
              alt={hero.photoAlt}
              fill
              priority
              className="hero-portrait-image"
              sizes="(max-width: 519px) 400px, (max-width: 1280px) 520px, 620px"
            />
          </motion.div>
          <motion.span
            className="mt-3 hidden shrink-0 font-body-en text-[9px] tracking-[0.28em] text-[#8a9bb0] min-[520px]:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {hero.years}
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
