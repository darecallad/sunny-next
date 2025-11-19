import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | Sunny Child Care",
  description:
    "Explore photo albums showcasing daily activities, special events, and memorable moments at Sunny Child Care. View our classroom, Halloween party, Easter celebration, and more.",
  keywords: [
    "daycare photo gallery",
    "childcare photos",
    "preschool activities",
    "San Jose childcare photos",
    "classroom pictures",
    "daycare events",
  ],
  openGraph: {
    title: "Photo Gallery | Sunny Child Care",
    description:
      "View photos of our vibrant learning spaces and special celebrations at Sunny Child Care in San Jose.",
    url: "https://sunnychildcare.com/about/photo-gallery",
    siteName: "Sunny Child Care",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Sunny Child Care",
    description:
      "View photos of our vibrant learning spaces and special celebrations at Sunny Child Care in San Jose.",
  },
  alternates: {
    canonical: "https://sunnychildcare.com/about/photo-gallery",
  },
};

export default function PhotoGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
