"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ctaContent, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";

export function CtaBanner() {
  const { locale } = useLanguage();
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-6 rounded-3xl border border-primary/30 bg-primary text-primary-foreground p-8 shadow-2xl shadow-primary/40 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em]">
            {ctaContent.eyebrow[locale]}
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            {ctaContent.title[locale]}
          </h2>
          <p className="mt-3 text-base opacity-90">
            {ctaContent.body[locale]}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
            <Link href={ctaContent.primaryCta.href} className="flex items-center gap-2">
              {ctaContent.primaryCta.label[locale]}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:bg-white/10">
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
              {ctaContent.secondaryLabel[locale]} {siteConfig.contact.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
