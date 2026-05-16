"use client";

import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustSection } from "@/components/sections/TrustSection";

export function HomeBelowFold() {
  return (
    <>
      <ExperienceSection />
      <ServicesSection />
      <CertificationsSection />
      <AchievementsSection />
      <ArticlesSection />
      <TrustSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
