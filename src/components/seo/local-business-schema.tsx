export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ChildCare", "EducationalOrganization"],
    name: "Sunny Child Care",
    alternateName: ["中英雙語幼兒園", "Sunny Childcare"],
    description:
      "Premier Mandarin-English bilingual childcare and preschool in San Jose offering infant, toddler, preschool, and kindergarten programs with STEAM curriculum and nutritious meals.",
    url: "https://www.sunnychildcare.com",
    logo: "https://www.sunnychildcare.com/logo.png",
    image: [
      "https://www.sunnychildcare.com/images/banners/hero-pexels.jpg",
      "https://www.sunnychildcare.com/images/banners/about.webp",
      "https://www.sunnychildcare.com/images/banners/location.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2586 Seaboard Ave",
      addressLocality: "San Jose",
      addressRegion: "CA",
      postalCode: "95131",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.3951",
      longitude: "-121.9113",
    },
    telephone: "(510) 333-5943",
    email: "Center.admin@sunnychildcare.com",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    servesCuisine: "Nutritious meals, Organic options",
    hasMap: "https://maps.google.com/?q=2586+Seaboard+Ave,+San+Jose,+CA+95131",
    areaServed: {
      "@type": "City",
      name: "San Jose",
      containedIn: {
        "@type": "State",
        name: "California",
      },
    },
    knowsLanguage: ["English", "Chinese", "Mandarin"],
    availableLanguage: ["English", "Chinese"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    foundingDate: "1995",
    slogan: "Grow confident, curious, and bilingual",
    sameAs: [
      // Add social media URLs when available
      // "https://www.facebook.com/sunnychildcare",
      // "https://www.instagram.com/sunnychildcare",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Childcare Programs",
      itemListElement: [
        {
          "@type": "EducationalOccupationalProgram",
          name: "Infant & Toddler Program",
          description: "Care for ages 6-36 months with bilingual exposure",
          timeToComplete: "P36M",
          occupationalCategory: "Infant Care",
        },
        {
          "@type": "EducationalOccupationalProgram",
          name: "Preschool Program",
          description: "Ages 2-6 with Mandarin-English immersion and STEAM",
          timeToComplete: "P4Y",
          occupationalCategory: "Preschool Education",
        },
        {
          "@type": "EducationalOccupationalProgram",
          name: "Pre-K / TK / Kindergarten",
          description: "School readiness for ages 4-6",
          timeToComplete: "P2Y",
          occupationalCategory: "Kindergarten Preparation",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
