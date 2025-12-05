import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daycare & Preschool Photo Gallery in San Jose | Sunny Child Care",
  description:
    "Explore Sunny Child Care's photo gallery featuring our classrooms, Halloween celebrations, Easter parties, and daily activities. See our vibrant bilingual learning environment serving San Jose, Milpitas, and Cupertino.",
  keywords: [
    "daycare photo gallery San Jose",
    "preschool photos",
    "childcare activities pictures",
    "classroom photos San Jose",
    "preschool events gallery",
    "bilingual preschool photos",
    "Halloween party photos",
    "Easter celebration pictures",
    "childcare facility photos",
    "Mountain View daycare photos",
    "Sunnyvale childcare gallery",
    "Cupertino preschool images",
    "Santa Clara daycare photos",
    "Milpitas childcare gallery",
  ],
  openGraph: {
    title: "Daycare & Preschool Photo Gallery in San Jose | Sunny Child Care",
    description:
      "View photos of our vibrant learning spaces, special celebrations, and daily activities at Sunny Child Care's bilingual preschool in San Jose.",
    url: "https://www.sunnychildcare.com/about/photo-gallery",
    siteName: "Sunny Child Care",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: "/images/banners/gallery.jpg",
        width: 1200,
        height: 630,
        alt: "Sunny Child Care photo gallery - children's activities and celebrations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Sunny Child Care",
    description:
      "View photos of our vibrant learning spaces and special celebrations at our San Jose bilingual preschool.",
    images: ["/images/banners/gallery.jpg"],
  },
  alternates: {
    canonical: "https://www.sunnychildcare.com/about/photo-gallery",
  },
};

export default function PhotoGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
