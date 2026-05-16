"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { SiteBackground } from "@/components/effects/SiteBackground";
import { SiteNav } from "@/components/layout/SiteNav";
import { LuxuryLoader } from "@/components/loading/LuxuryLoader";
import { BiographySection } from "@/components/sections/BiographySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LazyWhenVisible } from "@/components/ui/LazyWhenVisible";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { useSectionObserver } from "@/hooks/useSectionObserver";

const SECTION_IDS = [
  "hero",
  "biography",
  "experience",
  "services",
  "certifications",
  "achievements",
  "articles",
  "trust",
  "cta",
  "contact",
];

const LOADER_SEEN_KEY = "aiman-site-seen";

const SmoothScroll = dynamic(
  () => import("@/components/providers/SmoothScroll").then((m) => ({ default: m.SmoothScroll })),
  { ssr: false },
);

const HomeBelowFold = dynamic(
  () => import("@/components/home/HomeBelowFold").then((m) => ({ default: m.HomeBelowFold })),
  { loading: () => <div className="min-h-[50vh]" aria-hidden /> },
);

const FloatingWhatsApp = dynamic(
  () => import("@/components/contact/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp })),
  { ssr: false },
);

const FloatingAIAssistant = dynamic(
  () => import("@/components/ai/FloatingAIAssistant").then((m) => ({ default: m.FloatingAIAssistant })),
  { ssr: false },
);

function HomePageContent() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const activeSection = useSectionObserver(SECTION_IDS, "hero");

  useEffect(() => {
    if (sessionStorage.getItem(LOADER_SEEN_KEY)) {
      setLoading(false);
      setReady(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem(LOADER_SEEN_KEY, "1");
    }, 1100);

    return () => window.clearTimeout(timer);
  }, []);

  const interactiveReady = ready && !loading;

  return (
    <SmoothScroll>
      <SiteBackground />
      <LuxuryLoader visible={loading} onComplete={() => setReady(true)} />

      <SiteNav />

      <main className="page-main relative z-10 min-w-0">
        <HeroSection />
        <BiographySection />
        <LazyWhenVisible rootMargin="320px 0px" minHeight="40vh">
          <HomeBelowFold />
        </LazyWhenVisible>
      </main>

      {interactiveReady ? (
        <>
          <FloatingAIAssistant activeSection={activeSection} ready />
          <FloatingWhatsApp visible />
        </>
      ) : null}
    </SmoothScroll>
  );
}

export function HomePage() {
  return (
    <LocaleProvider>
      <HomePageContent />
    </LocaleProvider>
  );
}
