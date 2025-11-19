"use client";

import Image from "next/image";
import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const { locale } = useLanguage();
  
  // Flatten navigation and ensure Contact Us is included
  const flatNav = navigation.flatMap((item) => {
    if (item.children?.length) {
      return item.children;
    }
    return [item];
  });

  return (
    <footer className="bg-[#27466f] text-white">
      <div className="container mx-auto space-y-8 px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="w-full max-w-sm">
              <Link href="/" className="inline-flex w-full items-center justify-center rounded-3xl bg-white/5 px-4 py-3 shadow-lg shadow-black/30 ring-1 ring-white/10">
                <Image
                  src="/images/Flogo.png"
                  alt="Sunny Child Care - Bilingual Mandarin-English Preschool San Jose"
                  width={220}
                  height={64}
                  className="h-12 w-full object-contain"
                />
              </Link>
            </div>
            <p className="max-w-md text-base text-white/80">
              {locale === "en" ? siteConfig.description : siteConfig.descriptionZh}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-amber-200">
              {locale === "en" ? "Contact us" : "聯絡資訊"}
            </h4>
            <div className="mt-3 space-y-1 text-sm">
              <p className="font-semibold text-white">{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.hours[locale]}</p>
              <p>
                <span className="font-semibold text-amber-200">
                  {locale === "en" ? "Phone" : "電話"}
                </span>{" "}
                <Link
                  className="text-white"
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                >
                  {siteConfig.contact.phone}
                </Link>
              </p>
              <p>
                <span className="font-semibold text-amber-200">Email</span>{" "}
                <Link className="text-white" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-amber-200">
              {locale === "en" ? "Quick links" : "快速連結"}
            </h4>
            <ul className="mt-3 columns-2 gap-4 text-sm">
              {flatNav.slice(0, 10).map((item) => (
                <li key={`${item.title.en}-${item.href}`} className="py-1">
                  <Link className="text-white/80 hover:text-white" href={item.href ?? "#"}>
                    {item.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="border-white/20" />
        <div className="py-2 text-center text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {locale === "en" ? "All rights reserved." : "版權所有"}
          </p>
        </div>
      </div>
    </footer>
  );
}
