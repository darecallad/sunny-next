import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | Sunny Child Care San Jose, CA",
  description:
    "Contact Sunny Child Care at 2586 Seaboard Ave, San Jose, CA 95131 for enrollment inquiries, campus tours, or questions about our bilingual Mandarin-English programs. Call (510) 333-5943, email Center.admin@sunnychildcare.com, or send us a message today.",
  keywords: [
    "contact Sunny Child Care San Jose",
    "childcare contact San Jose",
    "daycare inquiry San Jose",
    "preschool contact form San Jose",
    "bilingual preschool contact San Jose",
    "enrollment inquiry San Jose",
    "campus tour request San Jose",
    "childcare questions San Jose",
    "Mandarin preschool contact",
    "San Jose daycare contact 95131",
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
