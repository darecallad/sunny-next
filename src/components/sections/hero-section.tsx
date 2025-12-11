"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { careHighlights, heroContent, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { locale } = useLanguage();
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pexels.jpg"
          alt="Happy children learning and playing at Sunny Child Care bilingual preschool in San Jose"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 sm:from-white/90 sm:via-white/60 sm:to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary"></span>
                {heroContent.eyebrow[locale]}
              </div>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                {heroContent.title[locale]}
              </h1>
              <p className="max-w-2xl text-lg font-medium text-foreground/80 sm:text-xl">
                {heroContent.description[locale]}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label[locale]}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label[locale]}
                </Link>
              </Button>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {heroContent.stats.map((stat) => (
                <div key={stat.label.en}>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label[locale]}
                  </dt>
                  <dd className="text-2xl font-semibold text-foreground">
                    {stat.value[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-primary text-white shadow-2xl shadow-primary/20">
              {/* Top image - visible */}
              <div className="relative h-64 w-full">
                <Image
                  src="/images/hero-pexels.jpg"
                  alt="Diverse group of children engaging in bilingual learning activities at Sunny Child Care"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 90vw"
                />
              </div>
              
              {/* Content section with darker background */}
              <div className="relative bg-gradient-to-b from-primary to-primary/90">
                <div className="flex flex-col gap-6 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-20 w-20 items-center justify-center p-1">
                    <Image
                      src="/images/sunny-logomark.png"
                      alt="Sunny Child Care logomark - sun icon representing bright education"
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/70">
                      {siteConfig.name}
                    </p>
                    <p className="text-lg font-semibold">{siteConfig.nameZh}</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.4em] text-secondary">
                    {locale === "en" ? "Programs" : "課程"}
                  </p>
                  <p className="mt-1 text-2xl font-semibold">
                    {locale === "en"
                      ? "Bright starts in a bilingual home."
                      : "雙語環境，點亮每一天"}
                  </p>
                  <ul className="mt-4 space-y-4">
                    {careHighlights.map((item) => (
                      <li key={item.title.en} className="flex items-start gap-3">
                        <span className="mt-1 rounded-full bg-white/20 p-2 text-secondary">
                          <item.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold">{item.title[locale]}</p>
                          <p className="text-sm text-white/80">
                            {item.description[locale]}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white/10 p-5 text-sm text-white/85 backdrop-blur">
                  <p className="font-semibold uppercase tracking-[0.3em] text-secondary">
                    {locale === "en" ? "Visit us" : "歡迎來訪"}
                  </p>
                  <p className="text-base font-medium">{siteConfig.contact.address}</p>
                  <p>{siteConfig.contact.hours[locale]}</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
