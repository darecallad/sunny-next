import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent & Staff Resources | Brightwheel Portal | Sunny Child Care",
  description:
    "Access parent resources at Sunny Child Care including Brightwheel communication portal, school calendars, parent handbook, enrollment forms, and staff resources. Stay connected and informed.",
  keywords: [
    "parent resources",
    "Brightwheel portal",
    "childcare communication",
    "parent handbook",
    "school calendar",
    "enrollment forms",
    "staff resources",
    "daycare portal",
  ],
  openGraph: {
    title: "Parent & Staff Resources | Sunny Child Care",
    description:
      "Access Brightwheel portal, school calendars, parent handbook, and enrollment resources. Everything you need to stay connected with your child's care.",
    url: "https://www.sunnychildcare.com/resources",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/resources.jpg",
        width: 1200,
        height: 630,
        alt: "Parent accessing Sunny Child Care resources and communication portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Sunny Child Care Portal",
    description:
      "Brightwheel portal, calendars, handbooks, and enrollment resources for parents and staff.",
    images: ["/images/banners/resources.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
