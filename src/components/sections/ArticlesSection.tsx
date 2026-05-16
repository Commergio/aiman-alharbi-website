"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";

export function ArticlesSection() {
  const { dict } = useTranslations();
  const s = dict.sections.articles;

  return (
    <AnimatedSection id="articles">
      <div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.div
          className="grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {s.items.map((article, index) => (
            <motion.article
              key={article.title}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              whileHover={{ y: -6 }}
              className={`editorial-card group relative flex min-w-0 flex-col overflow-hidden rounded-[1.35rem] border border-[#0F2745]/10 bg-white p-5 sm:p-6 ${
                index === 0 ? "xl:row-span-2 xl:p-8" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-[#B8925A]/25 bg-[#B8925A]/8 px-3 py-1 text-[10px] font-medium text-[#6A542F]">
                  {article.tag}
                </span>
                <span className="font-body-en text-[10px] text-[#9aacbd]">{article.read}</span>
              </div>
              <h3
                className={`mt-5 break-safe font-semibold leading-snug text-[#0F2745] ${
                  index === 0 ? "text-xl sm:text-2xl xl:text-3xl" : "text-lg"
                }`}
              >
                {article.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#4a6078]">{article.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#0F2745]">
                <span>{s.readAnalysis}</span>
                <ArrowUpLeft className="size-4 text-[#B8925A] transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="pointer-events-none absolute -bottom-12 -start-12 size-32 rounded-full bg-[#0F2745]/[0.03]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
