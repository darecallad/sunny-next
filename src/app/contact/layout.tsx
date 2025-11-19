import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Sunny Child Care San Jose",
  description:
    "Contact Sunny Child Care in San Jose for enrollment inquiries, campus tours, or questions about our bilingual Mandarin-English programs. Call (510) 333-5943 or email us today.",
  keywords: [
    "contact Sunny Child Care",
    "childcare contact San Jose",
    "daycare inquiry",
    "preschool contact form",
    "bilingual preschool contact",
    "enrollment inquiry San Jose",
    "campus tour request",
    "childcare questions",
    "Mandarin preschool contact",
    "San Jose daycare contact",
  ],
  openGraph: {
    title: "Contact Us | Sunny Child Care San Jose",
    description:
      "Get in touch with Sunny Child Care for enrollment inquiries and campus tours. We're here to answer your questions about our bilingual programs.",
    url: "https://www.sunnychildcare.com/contact",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/location.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sunny Child Care - bilingual preschool in San Jose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Sunny Child Care",
    description:
      "Contact us for enrollment inquiries and campus tours. Call (510) 333-5943 or send us a message.",
    images: ["/images/banners/location.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
