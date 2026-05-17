import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from "next/font/google";

import { LocaleInitScript } from "@/components/providers/LocaleInitScript";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aimanalharbi.com"),
  title: {
    default: "Aiman Alharbi | أيمن شجاع سعود الحربي",
    template: "%s | Aiman Alharbi",
  },
  description:
    "خبير التسويق والعقار والاستشارات الإدارية — موقع أيمن شجاع سعود الحربي الرسمي: خبرة تنفيذية تتجاوز 20 عاماً في التسويق، التطوير العقاري، والاستشارات الإدارية.",
  applicationName: "Aiman Alharbi",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "أيمن شجاع سعود الحربي",
    "استشارات تسويقية",
    "استشارات عقارية",
    "تطوير الأعمال",
    "خبير تسويق",
    "مدرب سعودي",
    "رخصة فال",
    "الاستشارات الإدارية",
  ],
  openGraph: {
    title: "أيمن شجاع سعود الحربي | Executive Consultant",
    description:
      "هوية تنفيذية احترافية في التسويق والعقار والاستشارات الإدارية وبناء الاستراتيجيات المؤسسية.",
    type: "website",
    locale: "ar_SA",
    siteName: "Aiman Alharbi",
    images: [{ url: "/aiman-photo.png", width: 1200, height: 1600, alt: "أيمن شجاع سعود الحربي" }],
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "أيمن شجاع سعود الحربي",
    description: "خبرة تنفيذية في التسويق والعقار والاستشارات الإدارية.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${arabic.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <LocaleInitScript />
        <link rel="preload" href="/hero-skyline.png" as="image" type="image/png" />
        <link rel="preload" href="/aiman-photo.png" as="image" type="image/png" />
      </head>
      <body className="sharp-ui relative flex min-h-full flex-col overflow-x-clip bg-[#f8fafc]">
        <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
