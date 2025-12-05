import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuition & Tour for Best Child Care in San Jose (2025) | Sunny Child Care",
  description:
    "Explore tuition options and current openings at Sunny Child Care in San Jose, CA. Schedule a personalized campus tour to learn about our infant, toddler, preschool, and kindergarten programs. Serving Mountain View, Sunnyvale, Cupertino, Santa Clara, Milpitas, Fremont, and surrounding areas.",
  keywords: [
    "childcare tuition San Jose",
    "daycare costs San Jose CA",
    "preschool fees San Jose",
    "schedule tour San Jose",
    "childcare openings San Jose",
    "enrollment availability San Jose",
    "bilingual preschool rates San Jose",
    "daycare pricing San Jose 95131",
    "affordable childcare San Jose",
    "Mountain View daycare tuition",
    "Sunnyvale childcare cost",
    "Cupertino preschool fees",
    "Santa Clara daycare rates",
    "Milpitas childcare pricing",
    "學費",
    "預約參觀",
    "幼兒園名額",
    "聖荷西托兒費用",
  ],
  openGraph: {
    title: "Tuition & Tour for Best Child Care in San Jose | Sunny Child Care",
    description:
      "Discover competitive tuition rates and current openings. Schedule your personalized campus tour to find the perfect program for your child aged 0-6 years. 查詢學費與名額，預約參觀。",
    url: "https://www.sunnychildcare.com/admission/tuition",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/admission/booking.jpg",
        width: 1200,
        height: 630,
        alt: "Schedule a tour at Sunny Child Care - parent and child visiting campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule a Tour | Sunny Child Care San Jose",
    description:
      "Explore tuition options and current openings. Book your personalized campus tour today!",
    images: ["/images/admission/booking.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/admission/tuition",
  },
};

export default function TuitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
