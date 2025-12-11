"use client";

import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function LocationSection() {
  const { locale } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {locale === "en" ? "Conveniently Located" : "交通便利，位置優越"}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {locale === "en"
                  ? "Located in North San Jose, serving families from Berryessa, Milpitas, and Santa Clara. Easy access to major highways and tech campuses."
                  : "位於北聖荷西，服務 Berryessa、Milpitas 和 Santa Clara 的家庭。鄰近主要高速公路與科技園區，接送方便。"}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {locale === "en" ? "Address" : "地址"}
                  </h3>
                  <p className="text-muted-foreground">{siteConfig.contact.address}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {locale === "en" ? "(Near Berryessa BART & Great Mall)" : "(鄰近 Berryessa BART 與 Great Mall)"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {locale === "en" ? "Hours" : "營業時間"}
                  </h3>
                  <p className="text-muted-foreground">{siteConfig.contact.hours[locale]}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {locale === "en" ? "Contact" : "聯絡電話"}
                  </h3>
                  <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
                  <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-4">
              <a
                href="https://maps.google.com/?q=2586+Seaboard+Ave,+San+Jose,+CA+95131"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === "en" ? "Get Directions" : "導航至校園"}
              </a>
            </Button>
          </div>

          {/* Map Embed */}
          <div className="h-[400px] w-full overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=2586+Seaboard+Ave,+San+Jose,+CA+95131&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Sunny Child Care Location"
              loading="lazy"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
