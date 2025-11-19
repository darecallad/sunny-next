import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sunny Child Care | Our Mission & Philosophy | San Jose",
  description:
    "Learn about Sunny Child Care's 30-year legacy of bilingual education in San Jose. Discover our health-first approach, nurturing environment, and family-focused philosophy serving Bay Area families.",
  keywords: [
    "about Sunny Child Care",
    "childcare philosophy",
    "bilingual education San Jose",
    "preschool mission",
    "daycare values",
    "Mandarin immersion approach",
    "early childhood education",
  ],
  openGraph: {
    title: "About Sunny Child Care | Our Mission & Philosophy",
    description:
      "30+ years of bilingual education excellence. Learn about our health-first approach, nurturing environment, and commitment to developing confident, curious, bilingual children.",
    url: "https://www.sunnychildcare.com/about",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/about.webp",
        width: 1200,
        height: 630,
        alt: "Sunny Child Care about us - children playing and learning together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sunny Child Care | Mission & Philosophy",
    description:
      "30+ years of bilingual education excellence in San Jose. Health-first, family-focused childcare approach.",
    images: ["/images/banners/about.webp"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
