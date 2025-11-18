import Link from "next/link";

import { siteConfig, navigation } from "@/data/site";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const flatNav = navigation.flatMap((item) =>
    item.children?.length ? item.children : [item]
  );

  return (
    <footer className="bg-muted/40 text-sm text-muted-foreground">
      <div className="container mx-auto space-y-8 px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Sunny Child Care
            </p>
            <p className="mt-2 text-2xl font-semibold text-foreground">
              Where every child feels at home.
            </p>
            <p className="mt-3 max-w-sm text-base">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Visit us
            </h4>
            <p className="mt-2 font-semibold text-foreground">
              {siteConfig.contact.address}
            </p>
            <p className="mt-1">{siteConfig.contact.hours}</p>
            <div className="mt-4 space-y-1">
              <Link className="font-semibold text-foreground" href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
                {siteConfig.contact.phone}
              </Link>
              <br />
              <Link className="font-semibold" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Quick links
            </h4>
            <ul className="mt-2 columns-2 gap-4">
              {flatNav.slice(0, 10).map((item) => (
                <li key={item.title} className="py-1">
                  <Link className="text-foreground hover:text-primary" href={item.href ?? "#"}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4 py-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socials.map((social) => (
              <Link key={social.title} href={social.href} className="hover:text-primary">
                {social.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
