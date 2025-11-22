import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infant & Toddler Care | Ages 0-3 | Sunny Child Care San Jose | 嬰幼兒照顧",
  description:
    "Nurturing infant and toddler care in San Jose, CA with bilingual exposure. Flexible schedules, sensory activities, developmental focus for ages 6-36 months. 聖荷西專業嬰幼兒照顧，提供 0-3 歲寶寶安全溫馨的雙語成長環境。",
  keywords: [
    "infant care San Jose",
    "toddler daycare San Jose",
    "baby childcare San Jose CA",
    "infant program San Jose",
    "bilingual infant care San Jose",
    "toddler development San Jose",
    "ages 0-3 daycare San Jose",
    "infant toddler care San Jose 95131",
    "baby daycare San Jose",
    "嬰幼兒照顧",
    "托嬰中心",
    "聖荷西托嬰",
    "寶寶照顧",
  ],
  openGraph: {
    title: "Infant & Toddler Care | Ages 0-3 | Sunny Child Care | 嬰幼兒照顧",
    description:
      "Loving care for infants and toddlers ages 6-36 months. Bilingual exposure, sensory play, flexible schedules, and developmental activities in a nurturing environment. 聖荷西嬰幼兒照顧首選。",
    url: "https://www.sunnychildcare.com/programs/infant",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/infant.jpg",
        width: 1200,
        height: 630,
        alt: "Happy infant and toddler enjoying activities at Sunny Child Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infant & Toddler Care | Sunny Child Care",
    description:
      "Nurturing care for ages 0-3 with bilingual exposure, sensory activities, and flexible schedules.",
    images: ["/images/banners/infant.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/programs/infant",
  },
};

export default function InfantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
