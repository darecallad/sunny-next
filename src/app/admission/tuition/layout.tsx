import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuition & Openings | Schedule a Tour | Sunny Child Care San Jose, CA",
  description:
    "Explore tuition options and current openings at Sunny Child Care in San Jose, CA. Schedule a personalized campus tour to learn about our infant, toddler, preschool, and kindergarten programs. Competitive rates in San Jose area.",
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
