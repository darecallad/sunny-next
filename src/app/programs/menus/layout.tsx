import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutritious Meals & Menus | Sunny Child Care San Jose, CA",
  description:
    "Chef-designed nutritious meals served daily at Sunny Child Care in San Jose. View our rotating menu featuring warm lunches, organic milk, seasonal fruits. Accommodating dietary needs for healthy growing kids.",
  keywords: [
    "childcare nutrition San Jose",
    "preschool meals San Jose",
    "daycare food menu San Jose",
    "healthy childcare meals San Jose CA",
    "nutritious lunch San Jose",
    "organic milk daycare",
    "dietary accommodations San Jose",
    "chef-designed meals San Jose",
    "preschool menu San Jose 95131",
  ],
  openGraph: {
    title: "Nutritious Meals & Menus | Sunny Child Care",
    description:
      "Chef-designed nutritious meals daily. Rotating menu with warm lunches, organic milk, seasonal fruits. Dietary accommodations available.",
    url: "https://www.sunnychildcare.com/programs/menus",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/menu.jpg",
        width: 1200,
        height: 630,
        alt: "Nutritious meal served at Sunny Child Care with fresh fruits and vegetables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutritious Meals & Menus | Sunny Child Care",
    description:
      "Chef-designed meals daily with organic ingredients and seasonal produce for healthy kids.",
    images: ["/images/banners/menu.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/programs/menus",
  },
};

export default function MenusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
