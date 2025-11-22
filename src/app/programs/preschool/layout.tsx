import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preschool Program | Ages 2-6 | Mandarin-English | Sunny Child Care San Jose | 幼兒園課程",
  description:
    "Award-winning bilingual preschool in San Jose, CA for ages 2-6. Play-based learning, performing arts, STEAM curriculum, and daily Mandarin-English immersion. 聖荷西雙語幼兒園，提供 2-6 歲幼兒全方位中英沉浸式教育。",
  keywords: [
    "preschool San Jose",
    "bilingual preschool San Jose",
    "Mandarin English preschool San Jose",
    "ages 2-6 preschool San Jose CA",
    "STEAM preschool San Jose",
    "Chinese immersion San Jose",
    "dual language preschool San Jose",
    "play-based learning San Jose",
    "preschool San Jose 95131",
    "幼兒園課程",
    "雙語幼兒園",
    "聖荷西幼兒園",
    "中文幼兒園",
  ],
  openGraph: {
    title: "Preschool Program | Ages 2-6 | Mandarin-English | 幼兒園課程",
    description:
      "Award-winning bilingual preschool with play-based learning, performing arts, STEAM curriculum, and Mandarin-English immersion. Ages 2-6 years. 聖荷西雙語幼兒園。",
    url: "https://www.sunnychildcare.com/programs/preschool",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/preschool.jpg",
        width: 1200,
        height: 630,
        alt: "Preschool children engaged in bilingual learning activities at Sunny Child Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilingual Preschool | Ages 2-6 | Sunny Child Care",
    description:
      "Award-winning Mandarin-English preschool with STEAM curriculum, performing arts, and play-based learning.",
    images: ["/images/banners/preschool.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/programs/preschool",
  },
};

export default function PreschoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
