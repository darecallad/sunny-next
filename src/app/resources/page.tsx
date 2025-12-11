"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Download, BookOpen, Calendar as CalendarIcon, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { useLanguage } from "@/context/language-context";
import { resourcesContent } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ResourcesPage() {
  const { locale } = useLanguage();
  const content = resourcesContent;

  // Add Blog to the items list manually for the UI
  const blogItem = {
    image: "/images/banners/blog-banner.jpg", // We might need to check if this exists, or use a generic one
    title: { en: "Parenting Blog", zh: "育兒部落格" },
    description: {
      en: "Expert tips, activity ideas, and insights for raising happy, healthy toddlers.",
      zh: "專家建議、活動點子，以及培養快樂健康幼兒的見解。",
    },
    buttonText: { en: "Read Articles", zh: "閱讀文章" },
    buttonLink: "/resources/blog",
    isExternal: false,
    icon: BookOpen,
    color: "bg-orange-100 text-orange-600",
  };

  const enhancedItems = [
    blogItem,
    ...content.items.map((item, index) => ({
      ...item,
      icon: index === 0 ? MessageCircle : index === 1 ? CalendarIcon : FileText,
      color: index === 0 ? "bg-blue-100 text-blue-600" : index === 1 ? "bg-green-100 text-green-600" : "bg-purple-100 text-purple-600",
    }))
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F5]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('/images/banners/resources.jpg')",
            backgroundPosition: "50% 30%",
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl font-bold md:text-6xl lg:text-7xl mb-6 tracking-tight">
              {content.hero.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              {locale === "en" 
                ? "Everything you need to support your child's journey at Sunny." 
                : "支持孩子在 Sunny 成長所需的一切資源。"}
            </p>
          </motion.div>
        </div>

        {/* Decorative curve */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F9F9F5] rounded-t-[50%] scale-x-150 translate-y-8" />
      </section>

      {/* Resources Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {enhancedItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="group h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden rounded-3xl relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image Side */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                      <Image
                        src={item.image || "/images/banners/resources.jpg"} // Fallback
                        alt={item.title[locale]}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shadow-lg backdrop-blur-sm bg-opacity-90`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 flex flex-col justify-center relative">
                      <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title[locale]}
                      </h2>
                      <p className="text-slate-600 mb-8 leading-relaxed">
                        {item.description[locale]}
                      </p>
                      
                      <div className="mt-auto">
                        {'calendars' in item && item.calendars ? (
                          <div className="flex flex-wrap gap-3">
                            {item.calendars.map((calendar, calIndex) => (
                              <a
                                key={calIndex}
                                href={calendar.link}
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                <Download className="h-4 w-4" />
                                {calendar.year}
                              </a>
                            ))}
                          </div>
                        ) : (
                          item.isExternal ? (
                            <a
                              href={item.buttonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                            >
                              {item.buttonText?.[locale]}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          ) : (
                            <Link 
                              href={item.buttonLink}
                              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                            >
                              {item.buttonText?.[locale]}
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 skew-y-3 transform origin-bottom-right translate-y-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -ml-32 -mb-32 opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">
                {locale === "en" ? "Ready to Get Started?" : "準備好開始了嗎？"}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
                {locale === "en"
                  ? "Schedule a tour to experience our nurturing environment and meet our dedicated team."
                  : "預約參觀，親自體驗我們充滿關愛的環境，並認識我們敬業的團隊。"}
              </p>
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/30"
              >
                <Link href="/admission/tuition">
                  {locale === "en" ? "Schedule a Tour" : "預約參觀"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}              : "預約參觀，體驗我們溫馨的環境，認識我們敬業的團隊。"}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/admission/tuition"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              {locale === "en" ? "Schedule a Tour" : "預約參觀"}
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-flex h-11 items-center justify-center rounded-md border border-primary bg-transparent px-8 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/10"
            >
              {locale === "en" ? `Call ${siteConfig.contact.phone}` : `電話 ${siteConfig.contact.phone}`}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
