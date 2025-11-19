import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preschool Program | Ages 2-6 | Mandarin-English | Sunny Child Care",
  description:
    "Award-winning bilingual preschool in San Jose for ages 2-6. Play-based learning, performing arts, STEAM curriculum, and daily Mandarin-English immersion. Preparing confident, curious learners.",
  keywords: [
    "preschool San Jose",
    "bilingual preschool",
    "Mandarin English preschool",
    "ages 2-6 preschool",
    "STEAM preschool",
    "Chinese immersion",
    "dual language preschool",
    "play-based learning",
  ],
  openGraph: {
    title: "Preschool Program | Ages 2-6 | Mandarin-English",
    description:
      "Award-winning bilingual preschool with play-based learning, performing arts, STEAM curriculum, and Mandarin-English immersion. Ages 2-6 years.",
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
