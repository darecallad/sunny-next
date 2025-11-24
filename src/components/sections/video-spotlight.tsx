"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { spotlight } from "@/data/site";
import { useLanguage } from "@/context/language-context";

export function VideoSpotlight() {
  const { locale } = useLanguage();
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-background to-secondary/30">
        <CardContent className="grid gap-8 p-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <Badge variant="secondary">{spotlight.badge[locale]}</Badge>
            <h2 className="text-3xl font-semibold text-foreground">
              {spotlight.title[locale]}
            </h2>
            <p className="text-lg text-muted-foreground">{spotlight.description[locale]}</p>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-border/60 bg-black/70 shadow-2xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${spotlight.videoId}?autoplay=0&mute=1&loop=1&playlist=${spotlight.videoId}`}
              title="Sunny Child Care tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
