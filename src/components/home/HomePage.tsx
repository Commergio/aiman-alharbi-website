"use client";

import { useEffect, useState } from "react";

import { SiteBackground } from "@/components/effects/SiteBackground";
import { FloatingAIAssistant } from "@/components/ai/FloatingAIAssistant";
import { FloatingWhatsApp } from "@/components/contact/FloatingWhatsApp";
import { LuxuryLoader } from "@/components/loading/LuxuryLoader";
import { SiteNav } from "@/components/layout/SiteNav";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { BiographySection } from "@/components/sections/BiographySection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { useGsapReveal } from "@/hooks/useGsapReveal";
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

function HomePageContent() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const activeSection = useSectionObserver(SECTION_IDS, "hero");

  useGsapReveal(ready);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <SiteBackground />
      <LuxuryLoader visible={loading} onComplete={() => setReady(true)} />

      <SiteNav />

      <main className="page-main relative z-10 min-w-0">
        <HeroSection />
        <BiographySection />
        <ExperienceSection />
        <ServicesSection />
        <CertificationsSection />
        <AchievementsSection />
        <ArticlesSection />
        <TrustSection />
        <CTASection />
        <ContactSection />
        <FooterSection />
      </main>

      <FloatingAIAssistant activeSection={activeSection} ready={ready && !loading} />
      <FloatingWhatsApp visible={ready && !loading} />
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
