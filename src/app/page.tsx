import { Metadata } from "next";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ValueGrid } from "@/components/sections/value-grid";
import { VideoSpotlight } from "@/components/sections/video-spotlight";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";

export const metadata: Metadata = {
  title: "Sunny Child Care | Bilingual Childcare & Preschool in San Jose, CA 95131",
  description:
    "Premier Mandarin-English immersion daycare at 2586 Seaboard Ave, San Jose, CA 95131. Infant, toddler, preschool & kindergarten programs with nutritious meals, STEAM curriculum, and caring bilingual staff. Serving San Jose families since 1995. Enroll today!",
  keywords: [
    "childcare San Jose",
    "daycare San Jose",
    "preschool San Jose",
    "bilingual preschool San Jose",
    "Mandarin English daycare San Jose",
    "Chinese immersion preschool San Jose",
    "infant care San Jose",
    "toddler daycare San Jose",
    "kindergarten prep San Jose",
    "STEAM preschool San Jose",
    "childcare San Jose 95131",
    "daycare Seaboard Ave",
  ],
  openGraph: {
    title: "Sunny Child Care | Bilingual Childcare & Preschool in San Jose",
    description:
      "Premier Mandarin-English immersion daycare with infant, toddler, preschool & kindergarten programs. Nutritious meals, STEAM curriculum, caring bilingual staff.",
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
    title: "Sunny Child Care | Bilingual Childcare in San Jose",
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
