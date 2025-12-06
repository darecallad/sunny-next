import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parenting Blog | Expert Advice & Activities | Sunny Child Care San Jose",
  description:
    "Explore our parenting blog for expert advice on bilingual education, child development, nutrition, and fun activities for families in San Jose and the Bay Area.",
  keywords: [
    "parenting blog San Jose",
    "bilingual education blog",
    "child development tips",
    "preschool activities San Jose",
    "toddler nutrition guide",
    "early childhood education blog",
    "Sunny Child Care blog",
  ],
  openGraph: {
    title: "Parenting Blog | Sunny Child Care San Jose",
    description:
      "Expert advice, activity ideas, and stories from our bilingual community in San Jose.",
    url: "https://www.sunnychildcare.com/resources/blog",
    siteName: "Sunny Child Care",
    type: "website",
    images: [
      {
        url: "/images/gallery/center/1.webp", // Using one of the blog images as default OG image
        width: 1200,
        height: 630,
        alt: "Sunny Child Care Parenting Blog",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
