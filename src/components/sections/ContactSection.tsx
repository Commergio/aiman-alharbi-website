"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslations } from "@/contexts/LocaleContext";
import { CONTACT } from "@/lib/content";

export function ContactSection() {
  const { dict } = useTranslations();
  const { site } = dict;
  const s = dict.sections.contact;

  const channels = [
    { icon: MessageCircle, label: s.channels.whatsapp, value: CONTACT.phone, href: CONTACT.whatsapp },
    { icon: Mail, label: s.channels.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: ExternalLink, label: s.channels.x, value: CONTACT.xHandle, href: CONTACT.x },
    { icon: MapPin, label: s.channels.office, value: site.office },
    { icon: Phone, label: s.channels.phone, value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  ];

  return (
    <AnimatedSection id="contact">
      <motion.div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.div
          className="grid min-w-0 gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <motion.div className="glass-card space-y-1 rounded-[1.5rem] border border-[#0F2745]/10 p-4 sm:p-6 md:p-8">
            {channels.map((ch) => {
              const Icon = ch.icon;
              const inner = (
                <motion.div className="flex items-center gap-4 border-b border-[#0F2745]/8 py-4 last:border-none">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-[#B8925A]/20 bg-[#B8925A]/8 text-[#B8925A]">
                    <Icon className="size-4" />
                  </span>
                  <motion.div>
                    <p className="text-xs text-[#7a8ea7]">{ch.label}</p>
                    <p className="mt-0.5 break-safe text-sm text-[#334B63]">{ch.value}</p>
                  </motion.div>
                </motion.div>
              );
              return ch.href ? (
                <a key={ch.label} href={ch.href} target="_blank" rel="noopener noreferrer" className="block transition hover:opacity-80">
                  {inner}
                </a>
              ) : (
                <motion.div key={ch.label}>{inner}</motion.div>
              );
            })}
          </motion.div>

          <ContactForm />
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
