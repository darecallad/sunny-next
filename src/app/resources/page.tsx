"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Download } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { resourcesContent, siteConfig } from "@/data/site";

export default function ResourcesPage() {
  const { locale } = useLanguage();
  const content = resourcesContent;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="border-b border-border/40 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/banners/resources.jpg')",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {content.hero.title[locale]}
          </h1>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-12">
            {content.items.map((item, index) => (
              <div 
                key={index}
                className="grid gap-8 lg:grid-cols-2 lg:items-center bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="relative h-80 lg:h-96 bg-white flex items-center justify-center p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={`${item.title.en} - ${item.description.en.slice(0, 80)}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 50vw, 90vw"
                    />
                  </div>
                </div>
                <div className="p-8 lg:py-12">
                  <h2 className="text-2xl font-semibold text-[#324f7a] mb-4">
                    {item.title[locale]}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {item.description[locale]}
                  </p>
                  
                  {item.calendars ? (
                    <div className="flex flex-wrap gap-4">
                      {item.calendars.map((calendar, calIndex) => (
                        <a
                          key={calIndex}
                          href={calendar.link}
                          download
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#324f7a] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#324f7a]/90"
                        >
                          <Download className="h-4 w-4" />
                          Calendar ({calendar.year})
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.buttonLink}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#f2a63b] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#f2a63b]/90"
                    >
                      {item.buttonText?.[locale]}
                      {item.isExternal && <ExternalLink className="h-4 w-4" />}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            {locale === "en" ? "Ready to Get Started?" : "準備好開始了嗎？"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">
            {locale === "en"
              ? "Schedule a tour to experience our nurturing environment and meet our dedicated team."
              : "預約參觀，體驗我們溫馨的環境，認識我們敬業的團隊。"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/admission/tuition"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#f2a63b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#f2a63b]/90"
            >
              {locale === "en" ? "Schedule a Tour" : "預約參觀"}
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#324f7a] bg-transparent px-8 text-sm font-medium text-[#324f7a] shadow-sm transition-colors hover:bg-[#324f7a]/10"
            >
              {locale === "en" ? `Call ${siteConfig.contact.phone}` : `電話 ${siteConfig.contact.phone}`}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
