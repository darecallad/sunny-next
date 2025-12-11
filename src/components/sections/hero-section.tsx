"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { careHighlights, heroContent, siteConfig } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import heroImg from "../../../public/images/hero-pexels.jpg";

export function HeroSection() {
  const { locale } = useLanguage();
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#FFFBF7]">
      {/* Background image with premium overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Happy children learning and playing at Sunny Child Care bilingual preschool in San Jose"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBF7]/95 via-[#FFFBF7]/80 to-[#FFFBF7]/40 sm:from-[#FFFBF7]/90 sm:via-[#FFFBF7]/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFBF7]" />
      </div>
      
      <div className="container relative z-10 mx-auto flex min-h-[90vh] items-center px-4 py-12 lg:py-24">
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_450px] lg:items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#C07234] shadow-sm backdrop-blur-md border border-[#C07234]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="mr-2 flex h-2 w-2 rounded-full bg-[#C07234] animate-pulse"></span>
                {heroContent.eyebrow[locale]}
              </motion.div>
              <motion.h1 
                className="font-serif text-5xl font-bold leading-[1.1] text-[#8B4513] sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {heroContent.title[locale]}
              </motion.h1>
              <motion.p 
                className="max-w-2xl text-lg font-medium leading-relaxed text-[#5D4037] sm:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {heroContent.description[locale]}
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild size="lg" className="h-14 rounded-full bg-gradient-to-r from-[#C07234] to-[#8B4513] px-8 text-lg font-bold text-white shadow-lg shadow-[#C07234]/25 transition-all hover:scale-105 hover:shadow-xl">
                <Link href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label[locale]}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-2 border-[#8B4513] bg-transparent px-8 text-lg font-bold text-[#8B4513] hover:bg-[#8B4513]/5">
                <Link href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label[locale]}
                </Link>
              </Button>
            </motion.div>
            <motion.dl 
              className="grid gap-6 sm:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {heroContent.stats.map((stat) => (
                <div key={stat.label.en} className="border-l-2 border-[#C07234]/30 pl-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[#8B4513]/70">
                    {stat.label[locale]}
                  </dt>
                  <dd className="text-3xl font-bold text-[#8B4513]">
                    {stat.value[locale]}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-white/10 p-2 backdrop-blur-md border border-white/20 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#C07234] to-[#8B4513] text-white">
                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
                
                <div className="relative flex flex-col gap-6 p-8">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                      <Image
                        src="/images/sunny-logomark.png"
                        alt="Sunny Child Care logomark"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                        {siteConfig.name}
                      </p>
                      <p className="text-xl font-bold">{siteConfig.nameZh}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                        {locale === "en" ? "Why Choose Us" : "為什麼選擇我們"}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight">
                        {locale === "en"
                          ? "Excellence in early childhood education."
                          : "追求卓越的幼兒教育"}
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {careHighlights.map((item) => (
                        <li key={item.title.en} className="flex items-start gap-3 rounded-xl bg-white/5 p-3 transition-colors hover:bg-white/10">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
                            <item.icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="font-bold text-white">{item.title[locale]}</p>
                            <p className="text-sm text-white/70 leading-snug">
                              {item.description[locale]}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-xl bg-black/20 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                            {locale === "en" ? "Visit Us" : "參觀學校"}
                          </p>
                          <p className="mt-1 font-medium">{siteConfig.contact.address}</p>
                        </div>
                        <Button size="icon" className="h-10 w-10 rounded-full bg-white text-[#8B4513] hover:bg-white/90">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
