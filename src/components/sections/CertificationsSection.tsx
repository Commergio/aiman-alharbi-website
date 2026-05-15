"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";

export function CertificationsSection() {
  const { dict } = useTranslations();
  const s = dict.sections.certifications;

  return (
    <AnimatedSection id="certifications">
      <motion.div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-[#0F2745]/10 bg-white/80 px-5 py-4 backdrop-blur-sm">
            <FileText className="mt-0.5 size-5 shrink-0 text-[#B8925A]" />
            <p className="text-sm leading-7 text-[#3d5169]">{s.intro}</p>
          </div>

          <div className="overflow-x-auto overflow-y-hidden rounded-[1.65rem] border border-[#0F2745]/12 bg-white shadow-[0_28px_60px_-36px_rgba(15,39,69,0.45)]">
            <motion.div
              className="border-b border-white/10 bg-[#0F2745] px-6 py-5 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="font-body-en text-[10px] tracking-[0.32em] text-[#d2b181]">{s.recordLabel}</p>
              <p className="mt-1 text-lg font-medium">{s.recordTitle}</p>
            </motion.div>
            <div className="divide-y divide-[#e6edf5]">
              {s.credentials.map((row, index) => (
                <motion.div
                  key={`${row.category}-${index}`}
                  className="flex flex-col gap-4 px-5 py-5 sm:px-6 md:flex-row md:items-start md:justify-between"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex min-w-0 flex-1 gap-4">
                    <span className="font-body-en mt-0.5 text-xs tabular-nums text-[#9aacbd]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[#B8925A]">{row.category}</p>
                      <p className="mt-1.5 text-base font-medium text-[#0F2745]">{row.title}</p>
                      {row.detail ? <p className="mt-1 text-sm text-[#4a6078]">{row.detail}</p> : null}
                    </div>
                  </div>
                  {row.reference ? (
                    <div className="shrink-0 rounded-xl border border-[#0F2745]/10 bg-[#fafcff] px-4 py-3 text-center md:min-w-[148px]">
                      <p className="text-[10px] text-[#7d8ea1]">{s.referenceLabel}</p>
                      <p className="mt-1 font-mono text-sm font-semibold text-[#0F2745]">{row.reference}</p>
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
