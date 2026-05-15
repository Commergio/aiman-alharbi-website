import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aimanalharbi.com"),
  title: "أيمن شجاع سعود الحربي | خبير التسويق والعقار والاستشارات الإدارية",
  description:
    "موقع أيمن شجاع سعود الحربي الرسمي: خبرة تنفيذية تتجاوز 20 عاماً في التسويق، التطوير العقاري، الاستشارات الإدارية، وتدريب الشركات والكوادر المهنية.",
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
      <body className="sharp-ui relative flex min-h-full flex-col overflow-x-hidden bg-[#f8fafc]">
        <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
