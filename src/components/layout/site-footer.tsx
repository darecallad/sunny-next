"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, Clock, ArrowRight } from "lucide-react";

import { navigation, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const { locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Helper to find specific nav sections
  const programsNav = navigation.find(item => item.title.en === "Programs")?.children || [];
  const centerNav = navigation.find(item => item.title.en === "Our Center")?.children || [];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#C07234] to-[#8B4513] pt-20 text-white">
      {/* Decorative background elements */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" /> {/* Texture placeholder */}

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Socials (4 cols) */}
          <div className="space-y-8 lg:col-span-4">
            <Link href="/" className="block w-fit">
              <div className="relative h-24 w-72">
                <Image
                  src="/images/Flogo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="max-w-sm text-base leading-relaxed text-white/90">
              {locale === "en" ? siteConfig.description : siteConfig.descriptionZh}
            </p>
            <div className="flex gap-4">
              {siteConfig.socials.map((social) => {
                const Icon = social.title === "Instagram" ? Instagram : social.title === "Facebook" ? Facebook : Youtube;
                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white hover:text-primary hover:shadow-lg hover:scale-110"
                    aria-label={social.title}
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-display text-xl font-bold tracking-wide">
              {locale === "en" ? "Programs" : "課程介紹"}
            </h3>
            <ul className="space-y-4">
              {programsNav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href || "#"} 
                    className="group flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-white transition-all group-hover:w-3" />
                    <span className="transition-transform group-hover:translate-x-1">{item.title[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Center Info (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-display text-xl font-bold tracking-wide">
              {locale === "en" ? "Our Center" : "園所介紹"}
            </h3>
            <ul className="space-y-4">
              {centerNav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href || "#"} 
                    className="group flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-white transition-all group-hover:w-3" />
                    <span className="transition-transform group-hover:translate-x-1">{item.title[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & CTA (4 cols) */}
          <div className="space-y-8 lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md transition-transform hover:-translate-y-1">
              <h3 className="mb-3 font-display text-2xl font-bold">
                {locale === "en" ? "Schedule a Tour" : "預約參觀"}
              </h3>
              <p className="mb-6 text-sm text-white/90">
                {locale === "en" 
                  ? "Experience our bilingual environment firsthand." 
                  : "親自體驗我們的雙語教學環境。"}
              </p>
              <Button asChild size="lg" className="w-full bg-white text-primary shadow-lg transition-all hover:bg-white/90 hover:scale-[1.02]">
                <Link href="/admission/tuition">
                  {locale === "en" ? "Book a Visit" : "立即預約"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-4 text-sm text-white/90">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/60" />
                <span className="leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/90">
                <Phone className="h-5 w-5 shrink-0 text-white/60" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-white hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/90">
                <Mail className="h-5 w-5 shrink-0 text-white/60" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white hover:underline">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Section */}
        <div className="py-8">
          <div className="mb-8 text-center">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              {locale === "en" ? "Serving Families In" : "服務區域"}
            </h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              {[
                "San Jose", "Milpitas", "Santa Clara", "Sunnyvale", "Cupertino", 
                "Mountain View", "Fremont", "Newark", "Campbell", "Los Altos"
              ].map((city, index, arr) => (
                <span key={city} className="flex items-center">
                  <span className="hover:text-white transition-colors cursor-default">{city}</span>
                  {index < arr.length - 1 && (
                    <span className="ml-6 h-1 w-1 rounded-full bg-white/30" />
                  )}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 md:flex-row">
            <p>
              © {currentYear} {siteConfig.name}. {locale === "en" ? "All rights reserved." : "版權所有"}
            </p>
            <div className="flex gap-8">
              <span>{locale === "en" ? "State Licensed Facility" : "加州立案合格設施"}</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                {locale === "en" ? "Privacy Policy" : "隱私權政策"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
