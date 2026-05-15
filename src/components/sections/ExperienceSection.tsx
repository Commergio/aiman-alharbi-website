"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { TimelineItem } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

function ExperienceCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <article
      className="exec-card experience-card group relative w-[200px] shrink-0 overflow-hidden rounded-xl border border-[#0F2745]/10 bg-white/90 p-3 shadow-[0_12px_32px_-24px_rgba(15,39,69,0.35)] backdrop-blur-sm sm:w-[220px] sm:p-3.5"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#B8925A]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-2">
        <span className="font-body-en text-[8px] tracking-[0.24em] text-[#B8925A]">{item.year}</span>
        <span className="rounded-lg border border-[#0F2745]/10 bg-[#f5f9ff] p-1.5 text-[#B8925A]">
          <BriefcaseBusiness className="size-3" aria-hidden />
        </span>
      </div>
      <h3 className="mt-2 line-clamp-2 text-xs font-semibold leading-snug text-[#0F2745] sm:text-[13px]">{item.role}</h3>
      <p className="mt-0.5 line-clamp-1 text-[10px] font-medium text-[#5a7088] sm:text-[11px]">{item.org}</p>
      <p className="mt-2 line-clamp-3 text-[10px] leading-[1.45] text-[#3d5169] sm:text-[11px] sm:leading-snug">{item.detail}</p>
      <span className="mt-2 inline-flex font-body-en text-[8px] tracking-[0.2em] text-[#9aacbd]">
        {String(index + 1).padStart(2, "0")} / EXEC
      </span>
    </article>
  );
}

export function ExperienceSection() {
  const { dict } = useTranslations();
  const s = dict.sections.experience;
  const reduced = useReducedMotion();
  const loopItems = reduced ? s.timeline : [...s.timeline, ...s.timeline];

  return (
    <AnimatedSection id="experience">
      <motion.div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.div
          className="experience-marquee relative mt-4 sm:mt-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          role="region"
          aria-label={s.title}
        >
          <ul className="sr-only">
            {s.timeline.map((item) => (
              <li key={`${item.role}-${item.org}`}>
                {item.year}: {item.role} — {item.org}. {item.detail}
              </li>
            ))}
          </ul>

          <div className={cn("experience-marquee-viewport", reduced && "overflow-x-auto")}>
            <div
              className={cn(
                "experience-marquee-track flex w-max gap-3 py-1 sm:gap-3.5",
                !reduced && "experience-marquee-animate",
              )}
              aria-hidden={!reduced}
            >
              {loopItems.map((item, index) => (
                <ExperienceCard
                  key={`${item.role}-${item.org}-${index}`}
                  item={item}
                  index={index % s.timeline.length}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
