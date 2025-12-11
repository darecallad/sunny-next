import { siteConfig } from "@/data/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    "name": "Sunny Child Care",
    "image": [
      "https://www.sunnychildcare.com/images/banners/hero-pexels.jpg",
      "https://www.sunnychildcare.com/images/banners/about.webp"
    ],
    "@id": "https://www.sunnychildcare.com",
    "url": "https://www.sunnychildcare.com",
    "telephone": "+14081234567", // Placeholder, should be updated if real number exists in config
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Sunny Lane", // Placeholder
      "addressLocality": "San Jose",
      "addressRegion": "CA",
      "postalCode": "95131",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.3861,
      "longitude": -121.8836
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/sunnychildcare",
      "https://www.instagram.com/sunnychildcare"
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
