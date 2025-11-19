import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrollment Process | How to Join Sunny Child Care in San Jose",
  description:
    "Simple 4-step enrollment at Sunny Child Care: Schedule a campus tour, submit application, complete enrollment via Brightwheel, and join our bilingual community. Start your journey today!",
  keywords: [
    "childcare enrollment process",
    "daycare admission San Jose",
    "preschool enrollment steps",
    "how to enroll",
    "Brightwheel enrollment",
    "campus tour San Jose",
    "admission requirements",
  ],
  openGraph: {
    title: "Enrollment Process | Join Sunny Child Care",
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
