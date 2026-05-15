"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
      <div className="section-shell">
        <SectionHeading title={s.title} subtitle={s.subtitle} />

        <motion.div
          className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="glass-card space-y-1 rounded-[1.5rem] border border-[#0F2745]/10 p-4 sm:p-6 md:p-8">
            {channels.map((ch) => {
              const Icon = ch.icon;
              const inner = (
                <div className="flex items-center gap-4 border-b border-[#0F2745]/8 py-4 last:border-none">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-[#B8925A]/20 bg-[#B8925A]/8 text-[#B8925A]">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs text-[#7a8ea7]">{ch.label}</p>
                    <p className="mt-0.5 text-sm text-[#334B63]">{ch.value}</p>
                  </div>
                </div>
              );
              return ch.href ? (
                <a key={ch.label} href={ch.href} target="_blank" rel="noopener noreferrer" className="block transition hover:opacity-80">
                  {inner}
                </a>
              ) : (
                <div key={ch.label}>{inner}</div>
              );
            })}
          </div>

          <motion.form
            className="glass-card space-y-4 rounded-[1.5rem] border border-white/50 p-4 shadow-[0_24px_60px_-36px_rgba(15,39,69,0.35)] backdrop-blur-xl sm:p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-sm font-medium text-[#0F2745]">{s.form.title}</p>
            <Input placeholder={s.form.name} className="input-premium" />
            <Input placeholder={s.form.phone} className="input-premium" type="tel" />
            <Select defaultValue="" className="input-premium">
              <option value="" disabled>
                {s.form.serviceType}
              </option>
              {s.form.options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </Select>
            <Textarea placeholder={s.form.message} className="input-premium min-h-[120px]" />
            <MagneticButton variant="default" size="lg" className="w-full sm:w-auto">
              {s.form.submit}
            </MagneticButton>
          </motion.form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
