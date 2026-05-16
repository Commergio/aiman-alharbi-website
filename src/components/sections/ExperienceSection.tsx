"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { useMemo, useRef, type CSSProperties } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";
import { useExperienceMarqueeChunk } from "@/hooks/useExperienceMarqueeLoop";
import { useMarqueeShift } from "@/hooks/useMarqueeShift";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { Locale } from "@/lib/i18n";
import type { TimelineItem } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

function ExperienceCard({
  item,
  index,
  locale,
}: {
  item: TimelineItem;
  index: number;
  locale: Locale;
}) {
  return (
    <article
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="exec-card experience-card group relative w-[var(--experience-card-width)] max-w-full shrink-0 overflow-hidden rounded-xl border border-[#0F2745]/10 bg-white/90 p-3 shadow-[0_12px_32px_-24px_rgba(15,39,69,0.35)] backdrop-blur-sm sm:p-3.5"
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

function MarqueeGroup({
  items,
  timelineLength,
  locale,
  groupKey,
}: {
  items: TimelineItem[];
  timelineLength: number;
  locale: Locale;
  groupKey: string;
}) {
  return (
    <>
      {items.map((item, index) => (
        <ExperienceCard
          key={`${groupKey}-${item.role}-${item.org}-${index}`}
          item={item}
          index={index % timelineLength}
          locale={locale}
        />
      ))}
    </>
  );
}

export function ExperienceSection() {
  const { dict, locale } = useTranslations();
  const s = dict.sections.experience;
  const reduced = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const chunk = useExperienceMarqueeChunk(s.timeline, !reduced, viewportRef);
  const shiftPx = useMarqueeShift(groupRef, [chunk, locale, reduced]);

  const trackStyle = useMemo(
    () =>
      ({
        "--marquee-shift": shiftPx > 0 ? `${shiftPx}px` : undefined,
        "--marquee-duration": shiftPx > 0 ? `${Math.max(28, Math.round(shiftPx / 28))}s` : undefined,
      }) as CSSProperties,
    [shiftPx],
  );

  return (
    <AnimatedSection id="experience">
      <div className="section-shell" role="region" aria-label={s.title}>
        <SectionHeading
          title={s.title}
          subtitle={s.subtitle}
          className="!mb-5 !space-y-3 md:!mb-6"
        />

        <motion.div
          className="experience-marquee-bleed relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
        >
        <ul className="sr-only">
          {s.timeline.map((item) => (
            <li key={`${item.role}-${item.org}`}>
              {item.year}: {item.role} — {item.org}. {item.detail}
            </li>
          ))}
        </ul>

        <div ref={viewportRef} dir="ltr" className={cn("experience-marquee-viewport", reduced && "overflow-x-auto")}>
          {reduced ? (
            <div className="experience-marquee-track experience-marquee-track--static flex w-max py-1">
              <div className="experience-marquee-group flex flex-nowrap">
                <MarqueeGroup
                  items={s.timeline}
                  timelineLength={s.timeline.length}
                  locale={locale}
                  groupKey="static"
                />
              </div>
            </div>
          ) : (
            <div
              className={cn(
                "experience-marquee-track experience-marquee-animate py-1",
                shiftPx > 0 && "experience-marquee-animate--ready",
              )}
              style={trackStyle}
              aria-hidden
            >
              <div ref={groupRef} className="experience-marquee-group flex flex-nowrap">
                <MarqueeGroup
                  items={chunk}
                  timelineLength={s.timeline.length}
                  locale={locale}
                  groupKey="a"
                />
              </div>
              <div className="experience-marquee-group flex flex-nowrap" aria-hidden>
                <MarqueeGroup
                  items={chunk}
                  timelineLength={s.timeline.length}
                  locale={locale}
                  groupKey="b"
                />
              </div>
            </div>
          )}
        </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
