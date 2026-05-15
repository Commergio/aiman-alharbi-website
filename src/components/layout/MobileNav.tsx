"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useTranslations } from "@/contexts/LocaleContext";

export function MobileNav() {
  const { dict } = useTranslations();
  const { nav } = dict;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex shrink-0 items-center gap-2 self-center lg:hidden">
      <LanguageToggle compact className="hidden min-[400px]:flex" />
      <MagneticButton href="#contact" variant="gold" size="sm" className="hidden min-[380px]:inline-flex">
        {nav.bookConsultation}
      </MagneticButton>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="touch-target flex size-11 items-center justify-center rounded-xl border border-[#0F2745]/12 bg-white/90 text-[#0F2745] shadow-sm backdrop-blur-sm"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? nav.closeMenu : nav.openMenu}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[100] bg-[#0F2745]/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-label={nav.closeMenu}
            />
            <motion.nav
              id="mobile-nav-panel"
              className="fixed inset-x-0 top-0 z-[101] flex max-h-[min(92dvh,640px)] flex-col overflow-y-auto overscroll-contain rounded-b-3xl border-b border-[#0F2745]/10 bg-white/95 px-5 pb-8 pt-[max(4.75rem,env(safe-area-inset-top))] shadow-2xl backdrop-blur-xl sm:pt-[max(5.25rem,env(safe-area-inset-top))] md:pt-[max(6.25rem,env(safe-area-inset-top))] lg:pt-[max(7.25rem,env(safe-area-inset-top))]"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              aria-label={nav.mobileMenuAria}
            >
              <motion.div className="mb-4 flex min-[400px]:hidden">
                <LanguageToggle className="w-full justify-center" />
              </motion.div>
              <ul className="flex flex-col gap-1">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center rounded-xl px-4 text-base text-[#0F2745] transition hover:bg-[#f2f7fd]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <motion.div className="mt-6 border-t border-[#0F2745]/8 pt-6">
                <MagneticButton href="#contact" variant="gold" size="lg" className="w-full">
                  {nav.bookConsultation}
                </MagneticButton>
              </motion.div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
