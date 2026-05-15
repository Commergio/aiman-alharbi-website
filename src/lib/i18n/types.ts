export type Locale = "ar" | "en";

export type NavLink = { href: string; label: string };

export type TimelineItem = { year: string; role: string; org: string; detail: string };

export type CredentialRow = {
  category: string;
  title: string;
  detail?: string;
  reference?: string;
};

export type Article = { title: string; excerpt: string; tag: string; read: string };

export type Stat = { value: number; suffix: string; label: string; labelSecondary: string };

export type Dictionary = {
  meta: { title: string; description: string };
  site: {
    name: string;
    nameLegal: string;
    subtitle: string;
    description: string;
    office: string;
    tagline: string;
  };
  nav: {
    links: NavLink[];
    bookConsultation: string;
    homeAria: string;
    logoAlt: string;
    mainNavAria: string;
    footerNavAria: string;
    openMenu: string;
    closeMenu: string;
    mobileMenuAria: string;
  };
  language: { label: string; ar: string; en: string };
  hero: {
    badge: string;
    years: string;
    ctaBook: string;
    ctaProfile: string;
    ctaContact: string;
    photoAlt: string;
  };
  loader: { identity: string; preparing: string };
  ai: {
    guide: string;
    minimize: string;
    open: string;
    sections: Record<string, string>;
  };
  floatingWhatsapp: { ariaLabel: string };
  sections: {
    biography: {
      title: string;
      subtitle: string;
      summaryHeading: string;
      paragraphs: string[];
      highlights: string[];
      book: { alt: string; title: string; description: string };
      office: { alt: string; caption: string };
    };
    experience: { title: string; subtitle: string; timeline: TimelineItem[] };
    services: { title: string; subtitle: string; items: string[]; cardDescription: string };
    certifications: {
      title: string;
      subtitle: string;
      intro: string;
      recordLabel: string;
      recordTitle: string;
      referenceLabel: string;
      credentials: CredentialRow[];
    };
    achievements: { title: string; subtitle: string; stats: Stat[] };
    articles: { title: string; subtitle: string; readAnalysis: string; items: Article[] };
    trust: { title: string; subtitle: string; quote: string; tag: string; partners: string[] };
    cta: { tag: string; title: string; description: string; button: string };
    contact: {
      title: string;
      subtitle: string;
      channels: { whatsapp: string; email: string; x: string; office: string; phone: string };
      form: {
        title: string;
        name: string;
        phone: string;
        serviceType: string;
        message: string;
        submit: string;
        options: string[];
      };
    };
    footer: {
      rights: string;
      badge: string;
      ctaTitle: string;
      ctaSubtitle: string;
      columns: { explore: string; expertise: string; contact: string };
    };
  };
};
