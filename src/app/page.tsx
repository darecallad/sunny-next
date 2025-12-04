import { Metadata } from "next";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ValueGrid } from "@/components/sections/value-grid";
import { VideoSpotlight } from "@/components/sections/video-spotlight";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

export const metadata: Metadata = {
  title: "Sunny Child Care | Bilingual (Mandarin/English) Preschool in San Jose",
  description:
    "Top-rated bilingual (Mandarin/English) preschool & daycare in San Jose (95131). Serving families in San Jose, Milpitas & Cupertino with infant care to kindergarten. 聖荷西首選中英雙語幼兒園。",
  keywords: [
    "Bilingual preschool San Jose",
    "Mandarin English daycare San Jose",
    "infant care San Jose",
    "Chinese immersion preschool",
    "San Jose childcare 95131",
    "preschool in San Jose",
    "Mandarin daycare San Jose",
    "Berryessa childcare",
    "Milpitas preschool",
    "Cupertino preschool",
    "North San Jose daycare",
    "san jose 雙語幼兒園",
    "聖荷西幼兒園",
    "中文幼兒園 San Jose",
  ],
  openGraph: {
    title: "Sunny Child Care | San Jose Bilingual Preschool & Childcare | 中英雙語幼兒園",
    description:
      "Premier Mandarin-English immersion daycare with infant, toddler, preschool & kindergarten programs. Nutritious meals, STEAM curriculum, caring bilingual staff. 聖荷西中英雙語幼兒園。",
    url: "https://www.sunnychildcare.com",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/hero-pexels.jpg",
        width: 1200,
        height: 630,
        alt: "Happy children learning at Sunny Child Care bilingual preschool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Child Care | San Jose Bilingual Preschool & Childcare",
    description:
      "Premier Mandarin-English immersion daycare with comprehensive programs for infants through kindergarten. Enroll today!",
    images: ["/images/banners/hero-pexels.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com",
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
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <AnnouncementBanner />
      <div className="space-y-0">
        <HeroSection />
        <ValueGrid />
        <VideoSpotlight />
        <TestimonialsSection />
        <CtaBanner />
      </div>
    </>
  );
}
