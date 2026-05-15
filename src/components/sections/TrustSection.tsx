"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";

export function TrustSection() {
  const { dict } = useTranslations();
  const s = dict.sections.trust;

  return (
    <AnimatedSection id="trust">
      <div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.div
          className="grid gap-6 lg:grid-cols-[1fr_1.35fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-[1.5rem] bg-[#0F2745] p-6 text-white sm:p-8 md:p-10"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.35 }}
          >
            <Quote className="size-5 text-[#D2B181]" />
            <p className="mt-5 text-lg leading-9 text-[#e7edf3]">{s.quote}</p>
            <p className="mt-6 font-body-en text-xs tracking-[0.34em] text-[#D2B181]">{s.tag}</p>
            <div className="pointer-events-none absolute -end-16 -top-16 size-48 rounded-full bg-[#B8925A]/10 blur-2xl" />
          </motion.div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4">
            {s.partners.map((name, i) => (
              <motion.div
                key={name}
                className="flex min-h-[5.5rem] items-center justify-center rounded-2xl border border-[#0F2745]/10 bg-white/90 px-3 text-center text-xs text-[#41576e] backdrop-blur-sm sm:text-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ borderColor: "rgba(184,146,90,0.35)", y: -3 }}
              >
                <span className="leading-snug">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
