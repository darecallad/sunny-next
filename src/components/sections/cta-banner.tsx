import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-6 rounded-3xl border border-primary/30 bg-primary text-primary-foreground p-8 shadow-2xl shadow-primary/40 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em]">Book a visit</p>
          <h2 className="mt-2 text-3xl font-semibold">
            Come see why Sunny feels like home.
          </h2>
          <p className="mt-3 text-base opacity-90">
            Tours run daily. We’ll walk you through classrooms, menus, and the
            Mandarin-English immersion experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button asChild size="lg" variant="secondary" className="text-primary">
            <Link href="/booking" className="flex items-center gap-2">
              Schedule a tour
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-primary-foreground">
            <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}>
              Call {siteConfig.contact.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
