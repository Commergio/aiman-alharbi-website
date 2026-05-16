"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { RevealItem } from "@/components/motion/RevealItem";
import { RevealStagger } from "@/components/motion/RevealStagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/card";
import { useTranslations } from "@/contexts/LocaleContext";

const BIOGRAPHY_BOOK_IMAGE = encodeURI("/ChatGPT Image May 16, 2026, 12_03_38 AM.png");

export function BiographySection() {
  const { dict } = useTranslations();
  const s = dict.sections.biography;

  return (
    <AnimatedSection id="biography">
      <div className="section-shell min-w-0">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.figure
          className="bio-office mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="bio-office-frame relative overflow-hidden"
            whileHover={{ scale: 1.008 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/aiman-office.png"
              alt={s.office.alt}
              fill
              className="bio-office-image object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
            />
            <div className="bio-office-overlay" aria-hidden />
          </motion.div>
          <figcaption className="bio-office-caption">{s.office.caption}</figcaption>
        </motion.figure>

        <RevealStagger className="grid gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:items-start [&>*]:min-w-0">
          <RevealItem>
            <Card className="glass-card space-y-1 p-6 md:p-8">
              {s.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[#0F2745]/8 py-4 last:border-none"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#B8925A]" />
                  <p className="break-safe text-[#2E445D]">{item}</p>
                </div>
              ))}
            </Card>
          </RevealItem>
          <RevealItem>
            <motion.div className="bio-narrative flex min-w-0 flex-col gap-5 text-[#344B63]">
              <div className="bio-executive-panel">
                <div className="bio-executive-panel-inner">
                  <p className="bio-executive-panel-kicker">{s.summaryHeading}</p>
                  <ol className="bio-executive-summary">
                    {s.paragraphs.map((p, i) => (
                      <li key={p} className="bio-executive-point">
                        <span className="bio-executive-point-index" aria-hidden>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="bio-executive-paragraph">{p}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <Card className="bio-book-showcase glass-card mt-2 overflow-hidden rounded-2xl border border-[#B8925A]/22 p-4 shadow-none backdrop-blur-[6px] sm:p-5">
                <div className="bio-book-layout">
                  <motion.div
                    className="bio-book-media"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div className="bio-book-visual relative overflow-hidden rounded-2xl">
                      <Image
                        src={BIOGRAPHY_BOOK_IMAGE}
                        alt={s.book.alt}
                        fill
                        className="bio-book-image object-cover"
                        sizes="288px"
                      />
                      <div className="bio-book-shine" aria-hidden />
                    </motion.div>
                  </motion.div>

                  <div className="bio-book-about min-w-0">
                    <p className="bio-book-kicker">{s.book.kicker}</p>
                    <h3 className="bio-book-title">{s.book.title}</h3>
                    <p className="bio-book-lead">{s.book.description}</p>
                    <div className="bio-book-synopsis space-y-3">
                      {s.book.synopsis.map((paragraph) => (
                        <p key={paragraph} className="bio-book-paragraph">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <ul className="bio-book-highlights">
                      {s.book.highlights.map((item) => (
                        <li key={item} className="bio-book-highlight-item">
                          <CheckCircle2 className="bio-book-highlight-icon" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </RevealItem>
        </RevealStagger>
      </div>
    </AnimatedSection>
  );
}
