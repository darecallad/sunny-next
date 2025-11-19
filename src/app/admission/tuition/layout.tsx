import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuition & Openings | Schedule a Tour | Sunny Child Care San Jose",
  description:
    "Explore tuition options and current openings at Sunny Child Care. Schedule a personalized campus tour to learn about our infant, toddler, preschool, and kindergarten programs in San Jose.",
  keywords: [
    "childcare tuition San Jose",
    "daycare costs",
    "preschool fees",
    "schedule tour",
    "childcare openings",
    "enrollment availability",
    "bilingual preschool rates",
    "daycare pricing",
  ],
  openGraph: {
    title: "Tuition & Openings | Schedule Tour | Sunny Child Care",
    description:
      "Discover competitive tuition rates and current openings. Schedule your personalized campus tour to find the perfect program for your child aged 0-6 years.",
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
