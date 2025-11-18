"use client";

import Link from "next/link";

import { testimonials } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  const { locale } = useLanguage();
  return (
    <section
      className="bg-gradient-to-b from-white to-amber-50/60"
      id="testimonials"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            {locale === "en" ? "Love from our families" : "家長真心話"}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            {locale === "en" ? "Parent testimonials" : "家長推薦"}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {locale === "en"
              ? "Real stories from families who trust Sunny Child Care with their little learners every day."
              : "來自每天和我們一起陪伴孩子的家長故事。"}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-white/90 shadow-lg">
              <CardContent className="flex h-full flex-col gap-6 p-6">
                <p className="text-base leading-relaxed text-foreground">
                  “{testimonial.quote[locale]}”
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    {testimonial.source?.[locale] ?? (locale === "en" ? "Family" : "家長")}
                  </Badge>
                  {testimonial.href && (
                    <div className="mt-2 text-sm">
                      <Link
                        href={testimonial.href}
                        target="_blank"
                        className="text-primary underline"
                      >
                        {locale === "en" ? "Read full story" : "閱讀完整評語"}
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
