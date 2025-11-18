"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { announcement, careHighlights, heroContent, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { locale } = useLanguage();
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <Badge variant="outline" className="bg-white">
            {announcement.badge[locale]}
          </Badge>
          <Link
            href={announcement.href}
            className="inline-flex items-center gap-2 font-medium text-primary"
          >
            {announcement.title[locale]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {heroContent.eyebrow[locale]}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                {heroContent.title[locale]}
              </h1>
              <p className="text-lg text-muted-foreground">
                {heroContent.description[locale]}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
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
            <div className="relative overflow-hidden rounded-[32px] border border-white/30 bg-[#223659] text-white shadow-2xl shadow-primary/20">
              <Image
                src="/images/hero-banner.webp"
                alt="Families learning together at Sunny Child Care"
                width={640}
                height={760}
                className="h-full w-full object-cover opacity-90"
                priority
                sizes="(min-width: 1024px) 380px, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111c30] via-[#111c30]/40 to-transparent" />
              <div className="relative z-10 flex h-full flex-col gap-6 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 p-2 shadow-lg shadow-black/40">
                    <Image
                      src="/images/sunny-logomark.png"
                      alt="Sunny logomark"
                      width={40}
                      height={40}
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
                  <p className="text-sm uppercase tracking-[0.4em] text-amber-200">
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
                        <span className="mt-1 rounded-full bg-white/20 p-2 text-amber-200">
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
                  <p className="font-semibold uppercase tracking-[0.3em] text-amber-200">
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
    </section>
  );
}
