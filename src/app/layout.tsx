import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/data/site";
import { LanguageProvider } from "@/context/language-context";
import { montserrat, notoSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "childcare San Jose",
    "bilingual preschool",
    "Mandarin English daycare",
    "Chinese immersion preschool San Jose",
    "dual language childcare",
    "preschool San Jose CA",
    "infant care San Jose",
    "toddler daycare San Jose",
    "kindergarten prep San Jose",
    "STEAM preschool",
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
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://www.sunnychildcare.com",
    siteName: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
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
    // google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${montserrat.variable} ${notoSans.variable} antialiased`}>
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
