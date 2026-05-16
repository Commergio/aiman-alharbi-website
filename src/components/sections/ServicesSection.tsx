"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";
import { SERVICE_ICONS } from "@/lib/content";
import { staggerItem } from "@/lib/motion";
import { CardDescription, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const { dict } = useTranslations();
  const s = dict.sections.services;

  return (
    <AnimatedSection id="services">
      <div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.div
          className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {s.items.map((title, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="service-card group relative min-w-0 overflow-hidden rounded-[1.35rem] border border-[#0F2745]/10 bg-white/80 p-5 backdrop-blur-md sm:p-6"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(184,146,90,0.08), transparent 55%, rgba(15,39,69,0.04))",
                  }}
                />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="font-body-en text-[10px] tracking-[0.28em] text-[#8a9bb0]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-2xl border border-[#0F2745]/10 bg-white p-2.5 text-[#B8925A] shadow-sm">
                    <Icon className="size-5" />
                  </span>
                </div>
                <CardTitle className="relative mt-4 break-safe text-base sm:text-lg">{title}</CardTitle>
                <CardDescription className="relative mt-2">{s.cardDescription}</CardDescription>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
