import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Location | Sunny Child Care San Jose | 交通位置",
  description:
    "Find Sunny Child Care at 2586 Seaboard Ave, San Jose, CA 95131. Hours: Mon-Fri 8:30am-6pm. Call (510) 333-5943 to schedule a tour. 位於聖荷西便利地點，提供免費停車。",
  keywords: [
    "Sunny Child Care location",
    "2586 Seaboard Ave San Jose",
    "childcare San Jose CA 95131",
    "daycare address",
    "preschool North San Jose",
    "childcare near Great Mall",
    "bilingual preschool location",
    "聖荷西幼兒園地址",
    "交通位置",
    "幼兒園地圖",
  ],
  openGraph: {
    title: "Our Location | Sunny Child Care San Jose | 交通位置",
    description:
      "Conveniently located at 2586 Seaboard Ave, San Jose. Open Mon-Fri 8:30am-6pm. Call (510) 333-5943 to schedule a campus tour today! 歡迎預約參觀。",
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
