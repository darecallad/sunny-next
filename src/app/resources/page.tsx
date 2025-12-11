"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Download, BookOpen, Calendar as CalendarIcon, MessageCircle, FileText, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/language-context";
import { resourcesContent } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ResourcesPage() {
  const { locale } = useLanguage();
  const content = resourcesContent;

  // Blog Item - Featured
  const blogItem = {
    image: "/images/blog/parent-talking-to-toddler.png",
    title: { en: "Parenting Blog", zh: "育兒部落格" },
    description: {
      en: "Explore our collection of expert tips, activity ideas, and insights designed to help you raise happy, healthy toddlers. From behavioral advice to fun weekend activities.",
      zh: "探索我們專家的建議、活動點子和見解，旨在幫助您培養快樂健康的幼兒。從行為建議到有趣的週末活動，應有盡有。",
    },
    buttonText: { en: "Read Articles", zh: "閱讀文章" },
    buttonLink: "/resources/blog",
    isExternal: false,
    icon: BookOpen,
  };

  // Other Resources
  const otherItems = content.items.map((item, index) => ({
    ...item,
    icon: index === 0 ? MessageCircle : index === 1 ? CalendarIcon : FileText,
  }));

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section - Minimalist & Elegant */}
      <section className="relative h-[40vh] min-h-[350px] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banners/resources.jpg')",
            backgroundPosition: "50% 30%",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight drop-shadow-md">
              {content.hero.title[locale]}
            </h1>
            <div className="w-24 h-1 bg-white/80 mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-light tracking-wide">
              {locale === "en" 
                ? "Supporting your family's journey with essential tools and insights." 
                : "提供重要工具與見解，支持您家庭的成長旅程。"}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 space-y-24">
        
        {/* Featured Resource: Blog */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px flex-1 bg-slate-200"></span>
              <span className="text-slate-400 font-serif italic text-lg">Featured</span>
              <span className="h-px flex-1 bg-slate-200"></span>
            </div>

            <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-[450px] overflow-hidden">
                  <Image
                    src={blogItem.image}
                    alt={blogItem.title[locale]}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <BookOpen className="w-32 h-32 text-slate-900" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 relative z-10">
                    {blogItem.title[locale]}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                    {blogItem.description[locale]}
                  </p>
                  
                  <div className="relative z-10">
                    <Link 
                      href={blogItem.buttonLink}
                      className="inline-flex items-center gap-3 text-slate-900 font-medium text-lg group/btn"
                    >
                      <span className="border-b-2 border-slate-900 pb-1 group-hover/btn:border-blue-600 group-hover/btn:text-blue-600 transition-colors">
                        {blogItem.buttonText[locale]}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:text-blue-600 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Other Resources Grid */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px flex-1 bg-slate-200"></span>
            <span className="text-slate-400 font-serif italic text-lg">Essentials</span>
            <span className="h-px flex-1 bg-slate-200"></span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden rounded-2xl group flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image || "/images/banners/resources.jpg"}
                      alt={item.title[locale]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-sm">
                      <item.icon className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                      {item.title[locale]}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {item.description[locale]}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100">
                      {'calendars' in item && item.calendars ? (
                        <div className="flex flex-col gap-3">
                          {item.calendars.map((calendar, calIndex) => (
                            <a
                              key={calIndex}
                              href={calendar.link}
                              download
                              className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors group/cal"
                            >
                              <span className="font-medium text-sm">{calendar.year} Calendar</span>
                              <Download className="h-4 w-4 text-slate-400 group-hover/cal:text-blue-600" />
                            </a>
                          ))}
                        </div>
                      ) : (
                        item.isExternal ? (
                          <a
                            href={item.buttonLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-blue-600 transition-colors group/link"
                          >
                            {item.buttonText?.[locale]}
                            <ExternalLink className="h-4 w-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                          </a>
                        ) : (
                          <Link 
                            href={item.buttonLink || "#"}
                            className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-blue-600 transition-colors group/link"
                          >
                            {item.buttonText?.[locale]}
                            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section - Sunny & Warm */}
        <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-orange-400 to-amber-500 text-white py-20 px-6 text-center shadow-xl">
          <div className="absolute inset-0 opacity-20">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay" />
             <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full blur-3xl mix-blend-overlay" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 drop-shadow-sm">
              {locale === "en" ? "Join Our Community" : "加入我們的大家庭"}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-medium leading-relaxed drop-shadow-sm">
              {locale === "en"
                ? "Experience the difference of a nurturing, bilingual environment where your child can truly thrive."
                : "體驗充滿關愛的雙語環境，讓您的孩子在這裡茁壯成長。"}
            </p>
            <Button
              asChild
              size="lg"
              className="h-14 px-10 text-lg rounded-full bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-orange-100"
            >
              <Link href="/admission/tuition">
                {locale === "en" ? "Schedule a Tour" : "預約參觀"}
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
