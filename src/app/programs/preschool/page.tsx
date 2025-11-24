"use client";

import Link from "next/link";

import { useLanguage } from "@/context/language-context";
import { programsContent, siteConfig } from "@/data/site";

export default function PreschoolPage() {
  const { locale } = useLanguage();
  const content = programsContent.preschool;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="border-b border-border/40 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/banners/preschool.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {content.hero.title[locale]}
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6">
            {content.description.map((para, index) => (
              <p key={index} className="text-lg leading-relaxed text-gray-700">
                {para[locale]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold text-primary text-center mb-8">
              {content.scheduleTitle[locale]}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm border border-border">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      {locale === "en" ? "Time" : "時間"}
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      {locale === "en" ? "Activity" : "活動"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.schedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-secondary/10"}>
                      <td className="px-6 py-3 text-sm text-muted-foreground whitespace-nowrap">
                        {item.time}
                      </td>
                      <td className={`px-6 py-3 text-sm ${
                        item.isBold ? "font-semibold text-primary" : "text-muted-foreground"
                      }`}>
                        {item.activity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            {locale === "en" ? "Ready to Get Started?" : "準備好開始了嗎？"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {locale === "en"
              ? "Schedule a tour to experience our nurturing environment and meet our dedicated team."
              : "預約參觀，體驗我們溫馨的環境，認識我們敬業的團隊。"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/admission/tuition"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              {locale === "en" ? "Schedule a Tour" : "預約參觀"}
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-flex h-11 items-center justify-center rounded-md border border-primary bg-transparent px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10"
            >
              {locale === "en" ? `Call ${siteConfig.contact.phone}` : `電話 ${siteConfig.contact.phone}`}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
