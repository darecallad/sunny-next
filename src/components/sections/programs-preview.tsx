"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: { en: "Infant & Toddler", zh: "嬰幼班" },
    description: {
      en: "Nurturing care for our youngest learners (6 weeks - 24 months). Focus on sensory exploration, motor skills, and emotional security.",
      zh: "為 6 週至 24 個月的寶寶提供溫暖照護。專注於感官探索、動作發展與情感安全感。",
    },
    href: "/programs/infant",
    image: "/images/banners/infant.webp",
  },
  {
    title: { en: "Preschool", zh: "幼兒園" },
    description: {
      en: "Play-based learning for ages 2-4. Developing social skills, bilingual foundations, and creative expression.",
      zh: "為 2-4 歲幼兒設計的遊戲式學習。培養社交技巧、雙語基礎與創造力表達。",
    },
    href: "/programs/preschool",
    image: "/images/banners/preschool.webp",
  },
  {
    title: { en: "TK / Kindergarten", zh: "學前 / 小學" },
    description: {
      en: "School readiness for ages 4-6. Advanced bilingual literacy, math concepts, and project-based inquiry.",
      zh: "為 4-6 歲兒童準備的入學銜接。進階雙語讀寫、數學概念與專題式探究。",
    },
    href: "/programs/kindergarten",
    image: "/images/banners/kindergarten.webp",
  },
];

export function ProgramsPreview() {
  const { locale } = useLanguage();

  return (
    <section className="bg-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {locale === "en" ? "Our Programs" : "課程介紹"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {locale === "en"
              ? "Age-appropriate bilingual curriculum for every stage of development."
              : "為每個發展階段設計的適齡雙語課程。"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.href} className="overflow-hidden border-none shadow-md transition-all hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title[locale]}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {program.title[locale]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {program.description[locale]}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between hover:bg-primary/10 hover:text-primary">
                  <Link href={program.href}>
                    {locale === "en" ? "Learn More" : "了解更多"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
