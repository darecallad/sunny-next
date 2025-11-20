import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sunny Child Care - Bilingual Preschool in San Jose, CA",
  description:
    "Learn about Sunny Child Care's 30-year legacy in San Jose providing exceptional Mandarin-English bilingual education. Experienced teachers, safe environment, nurturing care for children 0-5. Proudly serving San Jose families!",
  keywords: [
    "about Sunny Child Care San Jose",
    "bilingual preschool San Jose",
    "Mandarin English daycare mission",
    "childcare philosophy San Jose CA",
    "preschool values San Jose",
    "experienced teachers San Jose",
    "safe childcare environment",
    "nurturing daycare San Jose",
    "childcare San Jose 95131",
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
