"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Heart, Users } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { aboutContent, siteConfig } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";

const principleIcons = [Shield, Heart, Users];
const principleImages = [
  "/images/about/health-safety.webp",
  "/images/about/personal-development.webp",
  "/images/about/teachers-family.webp",
];

export default function AboutPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="border-b border-border/40 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/banners/about.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {aboutContent.hero.title[locale]}
          </h1>
          <p className="mt-6 text-xl text-white/95">
            {aboutContent.hero.subtitle[locale]}
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {aboutContent.principles.map((principle, index) => {
              const Icon = principleIcons[index];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={principle.title.en}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={`space-y-4 ${isEven ? "" : "lg:col-start-2"}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">
                        {principle.title[locale]}
                      </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {principle.description[locale]}
                    </p>
                  </div>
                  <div
                    className={`relative h-64 overflow-hidden rounded-2xl border border-border bg-white shadow-lg lg:h-80 ${isEven ? "lg:col-start-2" : "lg:col-start-1"}`}
                  >
                    <Image
                      src={principleImages[index]}
                      alt={`${principle.title.en} - ${principle.description.en.slice(0, 100)}`}
                      fill
                      className="object-contain p-4"
                      priority={index === 0}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="border-y border-border/40 bg-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <p className="mx-auto max-w-4xl text-center text-lg font-medium text-foreground">
            {aboutContent.philosophy[locale]}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gradient-to-b from-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-semibold text-foreground sm:text-4xl">
              {aboutContent.story.title[locale]}
            </h2>
            <Card className="bg-white/90 shadow-lg">
              <CardContent className="space-y-6 p-8">
                {aboutContent.story.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-muted-foreground"
                  >
                    {paragraph[locale]}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-secondary/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            {locale === "en" ? "Ready to join our family?" : "準備加入我們的大家庭了嗎？"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {locale === "en"
              ? "Schedule a tour to experience our nurturing environment and meet our dedicated team."
              : "預約參觀，體驗我們溫馨的環境，認識我們敬業的團隊。"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/admission/tuition"
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90"
            >
              {locale === "en" ? "Schedule a Tour" : "預約參觀"}
            </Link>
            <Link
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-flex h-11 items-center justify-center rounded-md border border-primary bg-transparent px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10"
            >
              {locale === "en" ? "Call Us" : "電話聯絡"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
