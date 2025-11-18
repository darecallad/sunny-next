"use client";

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
import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-semibold">
              SC
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Sunny
              </p>
              <p className="text-lg font-semibold leading-tight text-foreground">
                Child Care
              </p>
            </div>
          </Link>
          <Badge className="hidden md:inline-flex" variant="secondary">
            {siteConfig.shortTagline}
          </Badge>
        </div>

        <nav className="hidden items-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children && item.children.length ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-base font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[320px] gap-3 p-4">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href ?? "#"}
                                  className="block rounded-lg p-3 leading-none no-underline transition-colors hover:bg-muted"
                                >
                                  <div className="text-sm font-semibold">
                                    {child.title}
                                    {child.badge && (
                                      <Badge className="ml-2" variant="secondary">
                                        {child.badge}
                                      </Badge>
                                    )}
                                  </div>
                                  {child.description && (
                                    <p className="mt-1 text-sm text-muted-foreground">
                                      {child.description}
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
                        className="text-base font-medium"
                        href={item.href ?? "#"}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Call us
            </p>
            <a
              className="text-lg font-semibold text-foreground"
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <Button asChild size="lg">
            <Link href="/admission/tuition">Book a tour</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
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
                  <div key={item.title} className="space-y-2">
                    <p className="font-semibold text-sm text-muted-foreground">
                      {item.title}
                    </p>
                    <div className="space-y-1">
                      {(item.children?.length ? item.children : [item]).map(
                        (child) => (
                          <Link
                            key={child.title + child.href}
                            href={child.href ?? "#"}
                            className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                            onClick={() => setOpen(false)}
                          >
                            {child.title}
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
