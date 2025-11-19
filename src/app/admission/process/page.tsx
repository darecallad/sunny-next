"use client";

import Link from "next/link";

import { useLanguage } from "@/context/language-context";
import { admissionProcessContent, siteConfig } from "@/data/site";

export default function ProcessPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="border-b border-border/40 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/banners/process.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {admissionProcessContent.hero.title[locale]}
          </h1>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {admissionProcessContent.steps.map((step, index) => (
                <div 
                  key={index}
                  className="rounded-lg bg-white p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-2xl font-semibold text-[#324f7a] mb-4">
                    {step.title[locale]}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {step.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Hand Background */}
      <section 
        className="py-24 bg-cover bg-center relative border-t border-gray-200"
        style={{
          backgroundImage: "url('/images/banners/process-bottom.webp')",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="absolute inset-0 bg-white/90" />
        <div className="container mx-auto px-4 text-center relative z-10">
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
