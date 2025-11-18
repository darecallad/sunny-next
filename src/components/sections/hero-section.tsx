import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { announcement, careHighlights, heroContent, siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <Badge variant="outline" className="bg-white">
            {announcement.badge}
          </Badge>
          <Link
            href={announcement.href}
            className="inline-flex items-center gap-2 font-medium text-primary"
          >
            {announcement.title}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {heroContent.eyebrow}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                {heroContent.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {heroContent.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </Link>
              </Button>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {heroContent.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-4">
            <Card className="border-primary/20 shadow-xl shadow-primary/10">
              <CardContent className="space-y-6 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-primary">
                    Programs
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">
                    Bright starts in a bilingual home.
                  </p>
                </div>
                <ul className="space-y-4">
                  {careHighlights.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl bg-muted/60 p-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Visit us</p>
                  <p>{siteConfig.contact.address}</p>
                  <p>{siteConfig.contact.hours}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
