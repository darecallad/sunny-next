import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent & Staff Resources | Brightwheel Portal | Sunny Child Care San Jose",
  description:
    "Access parent resources at Sunny Child Care San Jose including Brightwheel communication portal, school calendars, parent handbook, enrollment forms, and staff resources. Stay connected with your child's San Jose childcare.",
  keywords: [
    "parent resources San Jose",
    "Brightwheel portal San Jose",
    "childcare communication San Jose",
    "parent handbook San Jose",
    "school calendar San Jose",
    "enrollment forms San Jose",
    "staff resources San Jose",
    "daycare portal San Jose CA",
    "preschool resources San Jose 95131",
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
