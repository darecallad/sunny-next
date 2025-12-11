"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, ChevronRight } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-gradient-to-r from-[#C07234]/95 to-[#8B4513]/95 shadow-xl backdrop-blur-md"
          : "border-transparent bg-gradient-to-r from-[#C07234] to-[#8B4513]"
      }`}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 transition-all duration-300 lg:h-28">
        <Link href="/" className="relative flex items-center gap-2 group">
          <div className="relative h-20 w-64 transition-all duration-300 lg:h-24 lg:w-80 group-hover:scale-105">
            <Image
              src="/images/Flogo.png"
              alt="Sunny Child Care - Bilingual Childcare & Preschool in San Jose logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 180px, 320px"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title.en}>
                  {item.children && item.children.length ? (
                    <>
                      <NavigationMenuTrigger
                        className="h-12 rounded-full bg-transparent px-6 font-display text-lg font-bold tracking-wide text-white transition-all hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white"
                      >
                        {item.title[locale]}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[280px] p-3">
                          {item.children.map((child) => (
                            <li key={child.title.en}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href ?? "#"}
                                  className="group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#C07234]/5 focus:bg-[#C07234]/5"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-serif text-sm font-bold tracking-wide text-[#5D4037] transition-colors group-hover:text-[#C07234]">
                                      {child.title[locale]}
                                      {child.badge && (
                                        <Badge variant="secondary" className="h-5 px-1.5 text-[10px] bg-[#C07234]/10 text-[#C07234] border-none">
                                          {child.badge[locale]}
                                        </Badge>
                                      )}
                                    </div>
                                    <ChevronRight className="h-3 w-3 text-[#C07234] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                  </div>
                                  {child.description && (
                                    <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground/80 group-hover:text-[#8B4513]/70 transition-colors">
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
                        className="group inline-flex h-12 w-max items-center justify-center rounded-full bg-transparent px-6 py-2 font-display text-lg font-bold tracking-wide text-white transition-all hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10"
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

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageToggle />
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-8 font-bold text-[#C07234] shadow-lg transition-all hover:bg-white/90 hover:scale-105 hover:shadow-xl"
          >
            <Link href="/admission/tuition">
              {locale === "en" ? "Book a Tour" : "預約參觀"}
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-primary/20 bg-background p-0 sm:max-w-sm">
              <SheetHeader className="border-b p-6 text-left bg-gradient-to-r from-[#C07234] to-[#8B4513] text-white">
                <SheetTitle className="text-2xl font-display font-bold text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col overflow-y-auto bg-secondary/5 pb-20">
                <div className="flex flex-col p-6">
                  {navigation.map((item) => (
                    <div key={item.title.en} className="mb-6 last:mb-0">
                      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#C07234]">
                        {item.title[locale]}
                      </h4>
                      <div className="flex flex-col space-y-1">
                        {(item.children?.length ? item.children : [item]).map((child) => (
                          <Link
                            key={child.title.en + child.href}
                            href={child.href ?? "#"}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-[#C07234]/10 hover:text-[#C07234]"
                          >
                            <span>{child.title[locale]}</span>
                            {child.badge && (
                              <Badge variant="secondary" className="text-[10px] bg-[#C07234]/10 text-[#C07234]">
                                {child.badge[locale]}
                              </Badge>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto border-t bg-background p-6">
                  <Button asChild className="w-full bg-gradient-to-r from-[#C07234] to-[#8B4513] text-lg font-bold text-white shadow-lg" size="lg">
                    <Link href="/admission/tuition" onClick={() => setOpen(false)}>
                      {locale === "en" ? "Book a Tour" : "預約參觀"}
                    </Link>
                  </Button>
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
