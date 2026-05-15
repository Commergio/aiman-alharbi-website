"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { Particles } from "@/components/effects/Particles";
import { useTranslations } from "@/contexts/LocaleContext";

export function CTASection() {
  const { dict } = useTranslations();
  const s = dict.sections.cta;

  return (
    <AnimatedSection id="cta" className="!py-10 sm:!py-12 md:!py-16">
      <div className="section-shell">
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0F2745] via-[#0c1f38] to-[#0a1828] px-5 py-10 text-white sm:px-8 sm:py-12 md:px-14 md:py-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Particles className="opacity-40 mix-blend-screen" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(184,146,90,0.18),transparent_55%)]" />
          <p className="font-body-en text-[10px] uppercase tracking-[0.38em] text-[#D2B181]">{s.tag}</p>
          <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">{s.title}</h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#d8e1ec]">{s.description}</p>
          <div className="mt-8">
            <MagneticButton href="#contact" variant="gold" size="lg">
              {s.button}
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
