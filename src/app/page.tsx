import { Metadata } from "next";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ValueGrid } from "@/components/sections/value-grid";
import { VideoSpotlight } from "@/components/sections/video-spotlight";
import { ProgramsPreview } from "@/components/sections/programs-preview";
import { LocationSection } from "@/components/sections/location-section";

export const metadata: Metadata = {
  title: "Best Daycare & Child Care in San Jose, CA (2025) | Sunny Child Care",
  description:
    "Top-rated Child Care & Daycare in San Jose, CA. Premier Mandarin-English bilingual preschool serving Mountain View, Sunnyvale, Cupertino, Santa Clara, Milpitas, Fremont, and surrounding areas. Enroll now!",
  keywords: [
    "Mandarin daycare San Jose",
    "daycare San Jose",
    "preschool in San Jose",
    "childcare San Jose",
    "Bilingual preschool San Jose",
    "Mandarin English daycare San Jose",
    "infant care San Jose",
    "Chinese immersion preschool",
    "San Jose childcare 95131",
    "Berryessa childcare",
    "Milpitas preschool",
    "Cupertino preschool",
    "North San Jose daycare",
    "Mountain View daycare",
    "Sunnyvale childcare",
    "Santa Clara preschool",
    "Fremont daycare",
    "Newark childcare",
    "San Lorenzo preschool",
    "Los Altos daycare",
    "Campbell childcare",
    "san jose 雙語幼兒園",
    "聖荷西幼兒園",
    "中文幼兒園 San Jose",
  ],
  openGraph: {
    title: "Best Daycare & Child Care in San Jose, CA | Sunny Child Care",
    description:
      "Premier Mandarin-English immersion daycare and childcare in San Jose. Infant, toddler, preschool & kindergarten programs. Serving San Jose, Milpitas, Cupertino, Santa Clara, and Sunnyvale.",
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
      <AnnouncementBanner />
      <div className="space-y-0">
        <HeroSection />
        <ValueGrid />
        <ProgramsPreview />
        <VideoSpotlight />
        <TestimonialsSection />
        <LocationSection />
        <CtaBanner />
      </div>
    </>
  );
}
