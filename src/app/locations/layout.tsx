import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Sunny Child Care | 2586 Seaboard Ave, San Jose, CA 95131",
  description:
    "Find Sunny Child Care at 2586 Seaboard Ave, San Jose, CA 95131. Hours: Mon-Fri 8:30am-6pm. Call (510) 333-5943 to schedule a tour. Licensed facility with free parking near major tech hubs.",
  keywords: [
    "Sunny Child Care location",
    "2586 Seaboard Ave San Jose",
    "childcare San Jose CA 95131",
    "daycare address",
    "preschool North San Jose",
    "childcare near Great Mall",
    "bilingual preschool location",
  ],
  openGraph: {
    title: "Visit Sunny Child Care | 2586 Seaboard Ave, San Jose",
    description:
      "Conveniently located at 2586 Seaboard Ave, San Jose. Open Mon-Fri 8:30am-6pm. Call (510) 333-5943 to schedule a campus tour today!",
    url: "https://www.sunnychildcare.com/locations",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/location.jpg",
        width: 1200,
        height: 630,
        alt: "Sunny Child Care campus entrance at 2586 Seaboard Ave, San Jose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Sunny Child Care | San Jose Location",
    description:
      "2586 Seaboard Ave, San Jose, CA 95131. Mon-Fri 8:30am-6pm. Call (510) 333-5943 for a tour.",
    images: ["/images/banners/location.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/locations",
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
