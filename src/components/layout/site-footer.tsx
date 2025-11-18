"use client";

import Image from "next/image";
import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const { locale } = useLanguage();
  const flatNav = navigation.flatMap((item) =>
    item.children?.length ? item.children : [item]
  );

  return (
    <footer className="bg-[#27466f] text-white">
      <div className="container mx-auto space-y-8 px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 p-1 shadow-lg shadow-black/30 ring-1 ring-white/20">
                <Image
                  src="/images/Flogo.png"
                  alt="Sunny Child Care logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                  {siteConfig.name}
                </p>
                <p className="text-2xl font-semibold">{siteConfig.nameZh}</p>
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
              {siteConfig.tagline[locale]}
            </p>
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
        <div className="flex flex-col gap-4 py-2 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {locale === "en" ? "All rights reserved." : "版權所有"}
          </p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socials.map((social) => (
              <Link key={social.title} href={social.href} className="hover:text-white">
                {social.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
