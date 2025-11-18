"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { navigation, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { locale } = useLanguage();
  const phoneParts = siteConfig.contact.phone.split(" ");
  const areaCode = phoneParts[0] ?? siteConfig.contact.phone;
  const phoneRest = phoneParts.slice(1).join(" ") || phoneParts[0] || siteConfig.contact.phone;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#27466f]/95 text-white shadow-lg shadow-black/10 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center">
            <span className="inline-flex items-center rounded-3xl bg-white/5 p-1 shadow-lg shadow-black/30 ring-1 ring-white/20">
              <Image
                src="/images/Flogo.png"
                alt="Sunny Child Care bilingual logo"
                width={168}
                height={56}
                className="h-12 w-auto object-contain"
                priority
              />
            </span>
          </Link>
          <Badge className="hidden md:inline-flex border-white/30 bg-white/15 text-xs font-medium text-white" variant="outline">
            {siteConfig.tagline[locale]}
          </Badge>
        </div>

        <nav className="hidden items-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title.en}>
                  {item.children && item.children.length ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-base font-semibold text-white/90 hover:text-white">
                        {item.title[locale]}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[320px] gap-3 p-4">
                          {item.children.map((child) => (
                            <li key={child.title.en}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href ?? "#"}
                                  className="block rounded-lg p-3 leading-none no-underline transition-colors hover:bg-primary/5"
                                >
                                  <div className="text-sm font-semibold text-foreground">
                                    {child.title[locale]}
                                    {child.badge && (
                                      <Badge className="ml-2" variant="secondary">
                                        {child.badge[locale]}
                                      </Badge>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="mt-1 text-sm text-muted-foreground">
                                      {child.description[locale]}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        className="text-base font-semibold text-white/90 hover:text-white"
                        href={item.href ?? "#"}
                      >
                        {item.title[locale]}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageToggle />
          <div className="text-right">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.6em] text-[#f6e4a6]">
              {locale === "en" ? "Call us" : "專線"}
            </p>
            <a
              className="group inline-flex items-center gap-3 text-2xl font-bold text-white"
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f6e4a6]/60 text-[#f6e4a6] transition group-hover:bg-[#f6e4a6]/10">
                <Phone className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight tracking-wide">
                <span className="text-lg">{areaCode}</span>
                <span className="text-2xl">{phoneRest}</span>
              </span>
            </a>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#f2a63b] px-8 text-base font-semibold text-[#1f2b3d] shadow-lg shadow-black/30 hover:bg-[#e7932c]"
          >
            <Link href="/admission/tuition">{locale === "en" ? "Book a tour" : "預約參觀"}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle className="bg-white/5" />
          <Button variant="outline" size="icon" asChild>
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                {navigation.map((item) => (
                  <div key={item.title.en} className="space-y-2">
                    <p className="font-semibold text-sm text-muted-foreground">
                      {item.title[locale]}
                    </p>
                    <div className="space-y-1">
                      {(item.children?.length ? item.children : [item]).map(
                        (child) => (
                          <Link
                            key={child.title.en + child.href}
                            href={child.href ?? "#"}
                            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                            onClick={() => setOpen(false)}
                          >
                            {child.title[locale]}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ))}
                <Button asChild className="w-full" size="lg">
                  <Link href="/booking" onClick={() => setOpen(false)}>
                    Schedule a tour
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
