import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kindergarten Prep & TK in San Jose | Sunny Child Care",
  description:
    "Comprehensive kindergarten prep in San Jose, CA with STEAM-focused curriculum. Math, science, literacy, bilingual education prepare children ages 4-6 for academic success. Serving Mountain View, Sunnyvale, Cupertino, Santa Clara, Milpitas, Fremont, and surrounding areas.",
  keywords: [
    "kindergarten prep San Jose",
    "TK program San Jose",
    "transitional kindergarten San Jose",
    "Pre-K San Jose CA",
    "school readiness San Jose",
    "kindergarten curriculum San Jose",
    "STEAM kindergarten San Jose",
    "bilingual kindergarten San Jose",
    "kindergarten San Jose 95131",
    "Mountain View kindergarten prep",
    "Sunnyvale TK program",
    "Cupertino Pre-K",
    "Santa Clara school readiness",
    "Milpitas kindergarten curriculum",
    "學前班",
    "幼小銜接",
    "聖荷西幼兒園",
    "雙語學前教育",
  ],
  openGraph: {
    title: "Best Kindergarten Prep & TK in San Jose | Sunny Child Care",
    description:
      "Comprehensive kindergarten prep with STEAM curriculum, math, science, literacy, and bilingual education. Ages 4-6 ready for elementary success. 聖荷西優質學前教育。",
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
