"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useTranslations } from "@/contexts/LocaleContext";

export function SiteNav() {
  const { dict } = useTranslations();
  const { nav } = dict;
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 140], ["transparent", "rgba(255,255,255,0.94)"]);
  const borderColor = useTransform(scrollY, [0, 140], ["transparent", "rgba(15,39,69,0.1)"]);
  const borderWidth = useTransform(scrollY, [0, 140], ["0px", "1px"]);
  const shadow = useTransform(
    scrollY,
    [0, 140],
    ["none", "0 12px 40px -24px rgba(15,39,69,0.18)"],
  );

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 bg-transparent pt-[env(safe-area-inset-top)]"
      style={{
        backgroundColor: bg,
        borderBottomStyle: "solid",
        borderBottomColor: borderColor,
        borderBottomWidth: borderWidth,
        boxShadow: shadow,
      }}
    >
      <div className="section-shell flex min-w-0 items-center justify-between gap-2 py-3 sm:gap-3 sm:py-3.5">
        <Link
          href="#hero"
          className="flex min-w-0 max-w-[min(100%,14rem)] flex-1 items-center sm:max-w-[min(100%,16rem)] lg:max-w-none"
          aria-label={nav.homeAria}
        >
          <span className="inline-flex shrink-0 overflow-hidden rounded-lg bg-white p-1.5 shadow-[0_6px_18px_-10px_rgba(15,39,69,0.35)] sm:rounded-xl sm:p-2">
            <Image
              src="/Logo_website1.png"
              alt={nav.logoAlt}
              width={138}
              height={64}
              priority
              sizes="(max-width: 1024px) 40vw, 160px"
              className="h-8 w-auto max-w-full object-contain object-center min-[360px]:h-9 sm:h-10 md:h-11"
            />
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-5" aria-label={nav.mainNavAria}>
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#4a6078] transition hover:text-[#0F2745]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageToggle />
          <MagneticButton href="#contact" variant="gold" size="sm">
            {nav.bookConsultation}
          </MagneticButton>
        </div>

        <div className="shrink-0 lg:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
