import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrollment Process for Best Daycare in San Jose (2025) | Sunny Child Care",
  description:
    "Simple 4-step enrollment at Sunny Child Care San Jose: Schedule a campus tour, submit application, complete enrollment via Brightwheel, and join our bilingual community. Serving Mountain View, Sunnyvale, Cupertino, Santa Clara, Milpitas, Fremont, and surrounding areas.",
  keywords: [
    "childcare enrollment process San Jose",
    "daycare admission San Jose",
    "preschool enrollment steps San Jose CA",
    "how to enroll San Jose",
    "Brightwheel enrollment",
    "campus tour San Jose",
    "admission requirements San Jose",
    "enroll childcare San Jose 95131",
    "Mountain View daycare enrollment",
    "Sunnyvale childcare admission",
    "Cupertino preschool registration",
    "Santa Clara daycare sign up",
    "Milpitas childcare enrollment",
  ],
  openGraph: {
    title: "Enrollment Process for Best Daycare in San Jose | Sunny Child Care",
    description:
      "Easy 4-step enrollment: Tour our campus, apply online, complete Brightwheel enrollment, and start. Schedule your tour today at (510) 333-5943.",
    url: "https://www.sunnychildcare.com/admission/process",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/admission/process.jpeg",
        width: 1200,
        height: 630,
        alt: "Parents touring Sunny Child Care campus during enrollment process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrollment Process | Sunny Child Care",
    description:
      "4 easy steps to join our bilingual childcare community. Schedule a tour today!",
    images: ["/images/admission/process.jpeg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/admission/process",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
