"use client";

import { MapPin, Phone, Mail, Clock, UtensilsCrossed, Navigation, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { siteConfig } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function LocationsPage() {
  const { locale } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const locationInfo = [
    {
      icon: MapPin,
      label: { en: "Address", zh: "地址" },
      value: siteConfig.contact.address,
      action: { en: "Get Directions", zh: "導航" },
      href: "https://maps.google.com/?q=Sunny+Child+Care+Center+San+Jose",
      external: true
    },
    {
      icon: Phone,
      label: { en: "Phone Number", zh: "聯絡電話" },
      value: siteConfig.contact.phone,
      action: { en: "Call Now", zh: "撥打電話" },
      href: `tel:${siteConfig.contact.phone.replace(/\D/g, "")}`,
    },
    {
      icon: Mail,
      label: { en: "Email", zh: "電子郵件" },
      value: siteConfig.contact.email,
      action: { en: "Send Email", zh: "寄送郵件" },
      href: `mailto:${siteConfig.contact.email}`,
    },
    {
      icon: Clock,
      label: { en: "Hours of Operation", zh: "營業時間" },
      value: siteConfig.contact.hours[locale],
    },
    {
      icon: UtensilsCrossed,
      label: { en: "Meals", zh: "餐點服務" },
      value: { en: "AM Snacks / Lunch / Dinner", zh: "早點 / 午餐 / 晚餐" }[locale],
    },
  ];

  const servingAreas = [
    { en: "North Valley", zh: "北聖荷西" },
    { en: "Berryessa", zh: "貝律耶薩" },
    { en: "Milpitas", zh: "苗必達" },
    { en: "Alum Rock", zh: "阿倫羅克" },
    { en: "Santa Clara", zh: "聖塔克拉拉" },
    { en: "North San Jose", zh: "聖荷西北區" },
  ];

  return (
    <div className="min-h-screen bg-stone-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/banners/location.webp"
            alt="Sunny Child Care Location"
            fill
            className="object-cover brightness-[0.65]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-stone-50" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
              {locale === "en" ? "Visit Us" : "參觀校園"}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-xl">
              {locale === "en" ? "Our Location" : "地理位置"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              {locale === "en"
                ? "Conveniently located in the heart of San Jose, serving families across the Bay Area."
                : "位於聖荷西市中心，交通便利，服務灣區各地的家庭。"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Info Cards (Left) */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/50"
              >
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8">
                  {locale === "en" ? "Contact Information" : "聯絡資訊"}
                </h2>
                <div className="space-y-8">
                  {locationInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-5"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                        <item.icon size={24} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-1">
                          {item.label[locale]}
                        </p>
                        <p className="text-lg font-medium text-stone-800 leading-snug">
                          {item.value}
                        </p>
                        {item.href && (
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center text-amber-600 text-sm font-medium mt-2 hover:text-amber-700 transition-colors"
                          >
                            {item.action?.[locale]} 
                            {item.external ? <ExternalLink size={14} className="ml-1" /> : <Navigation size={14} className="ml-1" />}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Serving Areas */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-stone-900 text-white rounded-3xl shadow-xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="text-amber-400" />
                  {locale === "en" ? "Serving Families In" : "服務地區"}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {servingAreas.map((area, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
                    >
                      {area[locale]}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Map (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 h-full min-h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.158780841948!2d-121.94073100000001!3d37.3789363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbd7e7cb599b%3A0x5feb29d49ff1cc8d!2sSunny%20Child%20Care%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "600px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunny Child Care Center Location"
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Map Overlay CTA */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <p className="text-stone-500 text-sm font-medium uppercase tracking-wider mb-1">
                    {locale === "en" ? "Ready to visit?" : "準備好參觀了嗎？"}
                  </p>
                  <p className="text-stone-800 font-bold text-lg">
                    {locale === "en" ? "Schedule a tour today" : "立即預約參觀校園"}
                  </p>
                </div>
                <Link 
                  href="/tour"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  {locale === "en" ? "Book a Tour" : "預約參觀"}
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
