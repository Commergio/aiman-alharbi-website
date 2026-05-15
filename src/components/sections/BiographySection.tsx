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

/** أبعاد ملف صورة الكتاب في `public` — لنسبة العرض قدر الإمكان بدون قص */
const BOOK_IMAGE_NATURAL_W = 1086;
const BOOK_IMAGE_NATURAL_H = 1448;
const BIOGRAPHY_BOOK_IMAGE = encodeURI("/ChatGPT Image May 16, 2026, 12_03_38 AM.png");

export function BiographySection() {
  const { dict } = useTranslations();
  const s = dict.sections.biography;

  return (
    <AnimatedSection id="biography">
      <motion.div className="section-shell">
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

        <RevealStagger className="grid gap-10 lg:grid-cols-[0.95fr_1.15fr]">
          <RevealItem>
            <Card className="glass-card space-y-1 p-6 md:p-8">
              {s.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[#0F2745]/8 py-4 last:border-none"
                >
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#B8925A]" />
                  <p className="text-[#2E445D]">{item}</p>
                </div>
              ))}
            </Card>
          </RevealItem>
          <RevealItem>
            <motion.div className="bio-narrative flex flex-col gap-5 text-[#344B63]">
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

              <Card className="bio-book-card glass-card mx-auto mt-2 w-full max-w-[264px] overflow-hidden rounded-2xl border border-[#B8925A]/22 p-0 shadow-none backdrop-blur-[6px] sm:max-w-[288px] md:max-w-[304px]">
                <motion.div
                  className="bio-book-visual relative w-full overflow-hidden rounded-t-2xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={BIOGRAPHY_BOOK_IMAGE}
                    alt={s.book.alt}
                    width={BOOK_IMAGE_NATURAL_W}
                    height={BOOK_IMAGE_NATURAL_H}
                    className="bio-book-image"
                    sizes="(max-width: 640px) 264px, 304px"
                  />
                  <div className="bio-book-shine" aria-hidden />
                </motion.div>
                <div className="bio-book-copy">
                  <p className="bio-book-title">{s.book.title}</p>
                  <p className="bio-book-description">{s.book.description}</p>
                </div>
              </Card>
            </motion.div>
          </RevealItem>
        </RevealStagger>
      </motion.div>
    </AnimatedSection>
  );
}
