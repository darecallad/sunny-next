import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/data/site";
import { LanguageProvider } from "@/context/language-context";
import { montserrat, notoSans, playfair } from "@/lib/fonts";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sunny Child Care | Mandarin Bilingual Daycare & Preschool in San Jose",
    template: `%s | Sunny Child Care San Jose`,
  },
  description: "Sunny Child Care offers a loving, Mandarin bilingual immersion environment for infants, toddlers, and preschoolers in San Jose, CA. Nurturing growth through play-based learning.",
  keywords: [
    "childcare San Jose",
    "San Jose day care",
    "bilingual preschool",
    "Mandarin English daycare",
    "Chinese immersion preschool San Jose",
    "dual language childcare",
    "preschool San Jose CA",
    "infant care San Jose",
    "toddler daycare San Jose",
    "kindergarten prep San Jose",
    "STEAM preschool",
    "Mountain View childcare",
    "Sunnyvale daycare",
    "Cupertino preschool",
    "Santa Clara childcare",
    "Milpitas daycare",
    "Fremont preschool",
    "Newark childcare",
    "San Lorenzo daycare",
    "Los Altos preschool",
    "Campbell childcare",
  ],
  authors: [{ name: "Sunny Child Care" }],
  creator: "Sunny Child Care",
  publisher: "Sunny Child Care",
  metadataBase: new URL("https://www.sunnychildcare.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "zh-CN": "/",
    },
  },
  icons: {
    icon: "/images/sunny-logomark.png",
    apple: "/images/sunny-logomark.png",
  },
  openGraph: {
    title: "Sunny Child Care | Mandarin Bilingual Daycare & Preschool in San Jose",
    description: "Sunny Child Care offers a loving, Mandarin bilingual immersion environment for infants, toddlers, and preschoolers in San Jose, CA. Nurturing growth through play-based learning.",
    url: "https://www.sunnychildcare.com",
    siteName: "Sunny Child Care San Jose",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/hero-pexels.jpg",
        width: 1200,
        height: 630,
        alt: "Sunny Child Care - Bilingual Mandarin-English Preschool in San Jose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Child Care | Mandarin Bilingual Daycare & Preschool in San Jose",
    description: "Sunny Child Care offers a loving, Mandarin bilingual immersion environment for infants, toddlers, and preschoolers in San Jose, CA. Nurturing growth through play-based learning.",
    images: ["/images/hero-pexels.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "nv2kB0y_hUkqbG__iE_-boqxuTLEi1pi_DpVybFMods",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${montserrat.variable} ${notoSans.variable} ${playfair.variable} antialiased`}>
        <LocalBusinessSchema />
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
