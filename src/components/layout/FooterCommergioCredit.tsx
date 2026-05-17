"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { useTranslations } from "@/contexts/LocaleContext";
import { COMMERGIO } from "@/lib/content";

function CommergioMark() {
  return (
    <span className="footer-credit-mark" aria-hidden>
      <svg viewBox="0 0 40 40" className="size-9 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footer-credit-gold" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f2e0bc" />
            <stop offset="1" stopColor="#b8925a" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" className="footer-credit-mark-bg" />
        <path
          d="M12 28V12h8.2c4.2 0 6.8 2.4 6.8 6.1 0 2.5-1.2 4.3-3.2 5.2L26 28h-3.4l-4.8-5.8H15.2V28H12zm3.2-8.6h4.6c2.1 0 3.3-1 3.3-2.7s-1.2-2.6-3.3-2.6h-4.6v5.3z"
          className="footer-credit-mark-letter"
        />
        <circle cx="30" cy="10" r="2.5" className="footer-credit-mark-spark" />
      </svg>
    </span>
  );
}

export function FooterCommergioCredit() {
  const { dict } = useTranslations();
  const { creditPrefix, creditBrand, creditTagline, creditAria } = dict.sections.footer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full justify-center"
    >
      <Link
        href={COMMERGIO.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={creditAria}
        className="footer-credit-pill group"
      >
        <CommergioMark />
        <span className="footer-credit-copy">
          <span className="footer-credit-prefix">{creditPrefix}</span>
          <span className="footer-credit-brand">{creditBrand}</span>
          <span className="footer-credit-tagline">{creditTagline}</span>
        </span>
        <span className="footer-credit-arrow" aria-hidden>
          <ExternalLink className="size-3.5 transition-transform duration-300 group-hover:scale-110" />
        </span>
      </Link>
    </motion.div>
  );
}
