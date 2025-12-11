"use client";

import { useLanguage } from "@/context/language-context";
import { admissionProcessContent } from "@/data/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  FileText, 
  CheckCircle, 
  Heart, 
  ArrowRight,
  CalendarCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [MapPin, FileText, CheckCircle, Heart];

export default function AdmissionProcessPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banners/process.jpeg')",
            backgroundPosition: "50% 30%"
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl font-bold md:text-6xl lg:text-7xl">
              {admissionProcessContent.hero.title[locale]}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              {locale === "en" 
                ? "Your journey to joining our community starts here." 
                : "加入我們大家庭的旅程從這裡開始。"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-background to-background opacity-70" />
        
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-5xl">
            {/* Vertical Line with Animation */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-100 md:left-1/2 md:-ml-px">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-blue-600"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-24">
              {admissionProcessContent.steps.map((step, index) => {
                const Icon = icons[index] || CheckCircle;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cn(
                      "relative flex flex-col gap-8 md:flex-row md:items-center",
                      isEven ? "md:flex-row-reverse" : ""
                    )}
                  >
                    {/* Content Side */}
                    <div className="flex-1 md:w-1/2">
                      <div className={cn(
                        "group relative rounded-2xl border border-white bg-white/60 p-8 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl md:p-10",
                        isEven ? "md:text-left" : "md:text-right"
                      )}>
                        {/* Glass shine effect */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-white/80 to-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                        
                        <div className={cn(
                          "mb-4 flex items-center gap-3 text-blue-600",
                          isEven ? "md:justify-start" : "md:justify-end"
                        )}>
                          <span className="text-sm font-bold tracking-wider uppercase text-blue-500/80">
                            {locale === "en" ? `Step 0${index + 1}` : `第 ${index + 1} 步`}
                          </span>
                        </div>
                        <h3 className="mb-4 font-serif text-2xl font-bold text-slate-800 md:text-3xl">
                          {step.title[locale].split("：")[1] || step.title[locale].split(": ")[1] || step.title[locale]}
                        </h3>
                        <p className="leading-relaxed text-slate-600">
                          {step.description[locale]}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-4 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg md:left-1/2 md:h-16 md:w-16 z-10">
                      <Icon className="h-5 w-5 text-white md:h-8 md:w-8" />
                    </div>

                    {/* Empty Side for Layout Balance */}
                    <div className="hidden flex-1 md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient Background that transitions to footer */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/50 to-[#C07234]/10" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className="rounded-3xl bg-white p-12 shadow-2xl ring-1 ring-black/5 md:p-16 relative overflow-hidden">
              {/* Decorative blobs */}
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="mb-6 font-serif text-3xl font-bold text-slate-800 md:text-5xl">
                  {locale === "en" ? "Ready to Visit Us?" : "準備好參觀了嗎？"}
                </h2>
                <p className="mb-10 text-lg text-slate-600 md:text-xl max-w-2xl mx-auto">
                  {locale === "en"
                    ? "Schedule a tour today to see our campus and meet our teachers."
                    : "立即預約參觀，親自體驗我們的校園環境並認識我們的老師。"}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button 
                    asChild 
                    size="lg" 
                    className="h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 text-lg font-semibold text-white hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                  >
                    <Link href="/admission/tuition">
                      <CalendarCheck className="mr-2 h-5 w-5" />
                      {locale === "en" ? "Schedule a Tour" : "預約參觀"}
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="h-14 rounded-full border-2 border-slate-200 bg-transparent px-8 text-lg font-semibold text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all"
                  >
                    <Link href="/contact">
                      {locale === "en" ? "Contact Us" : "聯絡我們"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
