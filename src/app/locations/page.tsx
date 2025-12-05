"use client";

import { MapPin, Phone, Mail, Clock, UtensilsCrossed } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { siteConfig } from "@/data/site";

export default function LocationsPage() {
  const { locale } = useLanguage();

  const locationInfo = [
    {
      icon: MapPin,
      label: { en: "Address", zh: "地址" },
      value: siteConfig.contact.address,
    },
    {
      icon: Phone,
      label: { en: "Phone Number", zh: "聯絡電話" },
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`,
    },
    {
      icon: Mail,
      label: { en: "Email", zh: "電子郵件" },
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Clock,
      label: { en: "Hours of Operation", zh: "營業時間" },
      value: siteConfig.contact.hours[locale],
    },
    {
      icon: UtensilsCrossed,
      label: { en: "Meals", zh: "餐點服務" },
      value: { en: "AM Snacks / Lunch / Dinner", zh: "早點 / 午餐 / 晚餐" }[locale],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="border-b border-border/40 py-16 bg-cover relative"
        style={{
          backgroundImage: "url('/images/banners/location.webp')",
          backgroundPosition: "50% 155%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {locale === "en" ? "Visit Our Center" : "參觀我們的校園"}
          </h1>
          <p className="mt-4 text-lg text-white/95">
            {locale === "en"
              ? "We're located in San Jose and welcome families to tour our bilingual campus."
              : "我們位於聖荷西，歡迎家長預約參觀雙語校園。"}
          </p>
        </div>
      </section>

      {/* Map & Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
            {/* Google Maps */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.158780841948!2d-121.94073100000001!3d37.3789363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbd7e7cb599b%3A0x5feb29d49ff1cc8d!2sSunny%20Child%20Care%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunny Child Care Center Location"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col space-y-6">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-foreground">
                  {locale === "en" ? "Contact Information" : "聯絡資訊"}
                </h2>
              </div>
              <div className="space-y-6">
                {locationInfo.map((item) => (
                  <div key={item.label.en} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label[locale]}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Neighborhoods & Directions (GEO Optimization) */}
              <div className="rounded-xl border border-border bg-secondary/30 p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {locale === "en" ? "Serving Our Community" : "服務社區"}
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {locale === "en" 
                      ? "Our center is easily accessible from major highways (I-680, I-880) and serves families throughout the South Bay area:"
                      : "我們的中心鄰近主要高速公路 (I-680, I-880)，交通便利，服務南灣各地區家庭："}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 list-disc pl-5">
                    <li>San Jose (North, East, Berryessa)</li>
                    <li>Milpitas & Fremont</li>
                    <li>Santa Clara & Sunnyvale</li>
                    <li>Cupertino & Mountain View</li>
                    <li>Newark & San Lorenzo</li>
                    <li>Los Altos & Campbell</li>
                  </ul>
                  <p className="text-sm pt-2">
                    {locale === "en"
                      ? "Just 5 minutes from the Great Mall and Berryessa BART Station."
                      : "距離 Great Mall 和 Berryessa BART 站僅 5 分鐘車程。"}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[400px] overflow-hidden rounded-xl border border-border shadow-sm lg:h-auto">
              {/* Google Maps Embed Code Here */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y border-border/40 bg-secondary/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-foreground">
            {locale === "en" ? "Ready to visit?" : "準備好參觀了嗎？"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {locale === "en"
              ? "Schedule a personalized tour and see our classrooms, meet our bilingual teachers, and learn about our programs."
              : "預約專屬導覽，參觀教室、認識雙語師資，了解我們的課程內容。"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/admission/tuition"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              {locale === "en" ? "Schedule a Tour" : "預約參觀"}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-flex h-11 items-center justify-center rounded-md border border-primary bg-transparent px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10"
            >
              {locale === "en" ? "Call Us" : "電話聯絡"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
