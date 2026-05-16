"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";

export function AchievementsSection() {
  const { dict } = useTranslations();
  const s = dict.sections.achievements;

  return (
    <AnimatedSection id="achievements">
      <div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} align="center" />

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {s.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
              }}
              className="stat-card group relative min-w-0 overflow-hidden rounded-2xl border border-[#0F2745]/10 bg-white/90 px-3 py-5 text-center backdrop-blur-sm sm:px-5 sm:py-8"
            >
              <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#B8925A]/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="font-heading-en text-2xl font-semibold text-[#0F2745] sm:text-4xl md:text-5xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-2 break-safe text-xs leading-snug text-[#4a6078] sm:mt-3 sm:text-sm">{stat.label}</p>
              <p className="mt-1 font-body-en text-[9px] uppercase tracking-[0.28em] text-[#9aacbd]">
                {stat.labelSecondary}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
