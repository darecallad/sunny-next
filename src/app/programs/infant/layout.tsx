import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infant & Toddler Care | Ages 0-3 | Sunny Child Care San Jose, CA",
  description:
    "Nurturing infant and toddler care in San Jose, CA with bilingual exposure. Flexible schedules, sensory activities, developmental focus for ages 6-36 months. Low teacher-child ratios, nutritious meals daily at our San Jose location.",
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
  ],
  openGraph: {
    title: "Infant & Toddler Care | Ages 0-3 | Sunny Child Care",
    description:
      "Loving care for infants and toddlers ages 6-36 months. Bilingual exposure, sensory play, flexible schedules, and developmental activities in a nurturing environment.",
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
