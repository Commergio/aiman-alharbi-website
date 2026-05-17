"use client";

import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FooterCommergioCredit } from "@/components/layout/FooterCommergioCredit";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useTranslations } from "@/contexts/LocaleContext";
import { CONTACT } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function FooterSection() {
  const { dict } = useTranslations();
  const { site, nav } = dict;
  const f = dict.sections.footer;
  const contact = dict.sections.contact.channels;
  const year = new Date().getFullYear();
  const expertiseItems = dict.sections.services.items.slice(0, 5);

  const contactLinks = [
    { icon: MessageCircle, label: contact.whatsapp, href: CONTACT.whatsapp, value: CONTACT.phone },
    { icon: Mail, label: contact.email, href: `mailto:${CONTACT.email}`, value: CONTACT.email },
    { icon: Phone, label: contact.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, value: CONTACT.phone },
    { icon: MapPin, label: contact.office, href: "#contact", value: site.office },
    { icon: ExternalLink, label: contact.x, href: CONTACT.x, value: CONTACT.xHandle },
  ];

  return (
    <AnimatedSection
      id="footer"
      as="footer"
      className="footer-executive relative overflow-hidden !border-0 !py-0 safe-bottom"
    >
      <div className="relative z-[1]">
        {/* CTA band */}
        <div className="border-b border-white/10">
          <motion.div
            className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-12 md:py-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="max-w-xl space-y-3">
              <span className="font-body-en inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.38em] text-[#d2b181]">
                <span className="h-px w-8 bg-[#B8925A]/70" aria-hidden />
                {f.badge}
              </span>
              <h2 className="text-xl font-semibold leading-snug text-white sm:text-2xl md:text-[1.65rem]">
                {f.ctaTitle}
              </h2>
              <p className="text-sm leading-7 text-white/70 sm:text-[15px]">{f.ctaSubtitle}</p>
            </motion.div>
            <motion.div variants={fadeUp} className="shrink-0">
              <MagneticButton href="#contact" variant="gold" size="lg" className="gap-2">
                <span>{nav.bookConsultation}</span>
                <ArrowUpRight className="size-4 shrink-0" aria-hidden />
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Main grid */}
        <div className="section-shell py-12 md:py-14 lg:py-16">
          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
          >
            {/* Brand */}
            <motion.div variants={fadeUp} className="space-y-5 sm:col-span-2 lg:col-span-5">
              <Link href="#hero" aria-label={nav.homeAria} className="inline-block max-w-full">
                <span className="inline-flex overflow-hidden rounded-xl bg-white p-2.5 shadow-[0_10px_28px_-14px_rgba(0,0,0,0.45)] sm:rounded-2xl sm:p-3">
                  <Image
                    src="/Logo_website1.png"
                    alt={nav.logoAlt}
                    width={138}
                    height={64}
                    sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 192px"
                    className="h-auto w-auto max-w-[9rem] object-contain object-center sm:max-w-[10rem] md:max-w-[11rem] lg:max-w-[12rem]"
                  />
                </span>
              </Link>
              <div className="space-y-2">
                <p className="text-lg font-medium text-white">{site.name}</p>
                <p className="max-w-md text-sm leading-7 text-white/70">{site.description}</p>
              </div>
              <p className="font-body-en text-[10px] uppercase tracking-[0.32em] text-[#d2b181]/90">
                {site.subtitle}
              </p>
            </motion.div>

            {/* Explore */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <p className="font-body-en mb-4 text-[10px] uppercase tracking-[0.34em] text-[#d2b181]">
                {f.columns.explore}
              </p>
              <ul className="space-y-2.5">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-executive-link text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Expertise */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <p className="font-body-en mb-4 text-[10px] uppercase tracking-[0.34em] text-[#d2b181]">
                {f.columns.expertise}
              </p>
              <ul className="space-y-2.5">
                {expertiseItems.map((label) => (
                  <li key={label}>
                    <Link href="#services" className="footer-executive-link text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-3">
              <p className="font-body-en mb-4 text-[10px] uppercase tracking-[0.34em] text-[#d2b181]">
                {f.columns.contact}
              </p>
              <ul className="space-y-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="footer-executive-link group flex gap-3 text-sm"
                        {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#d2b181] transition group-hover:border-[#B8925A]/35 group-hover:bg-[#B8925A]/10">
                          <Icon className="size-4" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] text-white/50">{item.label}</span>
                          <span className="mt-0.5 block font-medium text-white/90 group-hover:text-[#d2b181]">{item.value}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-shell flex flex-col items-center gap-4 py-6 text-xs text-white/55">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span>{site.nameLegal}</span>
              <span className="font-body-en sm:text-end">
                © {year} {site.name}. {f.rights}.
              </span>
            </div>
            <FooterCommergioCredit />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
