import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-K, TK & Kindergarten | School Readiness | Sunny Child Care",
  description:
    "Comprehensive kindergarten prep in San Jose with STEAM-focused curriculum. Math, science, literacy, bilingual education prepare children ages 4-6 for academic success in elementary school.",
  keywords: [
    "kindergarten prep San Jose",
    "TK program San Jose",
    "transitional kindergarten",
    "Pre-K San Jose",
    "school readiness",
    "kindergarten curriculum",
    "STEAM kindergarten",
    "bilingual kindergarten",
  ],
  openGraph: {
    title: "Pre-K, TK & Kindergarten | School Readiness",
    description:
      "Comprehensive kindergarten prep with STEAM curriculum, math, science, literacy, and bilingual education. Ages 4-6 ready for elementary success.",
    url: "https://www.sunnychildcare.com/programs/kindergarten",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/kindergarten.jpg",
        width: 1200,
        height: 630,
        alt: "Kindergarten students learning with STEAM curriculum at Sunny Child Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kindergarten Prep | School Readiness | Sunny Child Care",
    description:
      "STEAM-focused Pre-K, TK & Kindergarten preparing children ages 4-6 for elementary school success.",
    images: ["/images/banners/kindergarten.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/programs/kindergarten",
  },
};

export default function KindergartenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
