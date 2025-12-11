"use client";

import { useLanguage } from "@/context/language-context";
import { programsContent } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Clock, 
  Baby, 
  Brain, 
  Heart, 
  MessageCircle, 
  Activity, 
  Sun, 
  Moon,
  Utensils,
  Music,
  Users,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function InfantPage() {
  const { locale } = useLanguage();
  const content = programsContent.infant;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: Brain,
      title: { en: "Cognitive", zh: "認知發展" },
      description: { en: "Fostering curiosity and problem-solving skills through exploration.", zh: "透過探索培養好奇心和解決問題的能力。" },
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Activity,
      title: { en: "Perceptual Motor", zh: "感知運動" },
      description: { en: "Developing fine and gross motor skills through active play.", zh: "透過活動遊戲發展精細和大肌肉運動技能。" },
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MessageCircle,
      title: { en: "Speech & Language", zh: "語言發展" },
      description: { en: "Building vocabulary and communication in a bilingual environment.", zh: "在雙語環境中建立詞彙和溝通能力。" },
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: { en: "Social Intelligence", zh: "社交智能" },
      description: { en: "Nurturing emotional growth and positive interactions with peers.", zh: "培養情感成長和與同伴的積極互動。" },
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const getIconForActivity = (activity: string) => {
    const lower = activity.toLowerCase();
    if (lower.includes("snack") || lower.includes("lunch") || lower.includes("dinner")) return Utensils;
    if (lower.includes("nap") || lower.includes("bedtime")) return Moon;
    if (lower.includes("playground") || lower.includes("outside")) return Sun;
    if (lower.includes("music")) return Music;
    if (lower.includes("circle")) return Users;
    if (lower.includes("arrival")) return Sun;
    return Clock;
  };

  return (
    <div className="min-h-screen bg-stone-50" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/banners/infant.webp"
            alt="Infant Care"
            fill
            className="object-cover brightness-[0.7]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-50" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm tracking-widest uppercase mb-4 backdrop-blur-sm">
              {locale === "en" ? "Ages 0 - 2 Years" : "0 - 2 歲嬰幼兒"}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-xl leading-tight">
              {content.hero.title[locale]}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              {locale === "en" 
                ? "A nurturing second home where your little ones grow, explore, and thrive." 
                : "一個溫馨的第二個家，讓您的寶貝在這裡成長、探索和茁壯。"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Description */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-stone-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                    <Baby size={28} />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-stone-800">
                    {locale === "en" ? "Nurturing Development" : "培育發展"}
                  </h2>
                </div>
                <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                  {content.description.map((para, index) => (
                    <p key={index}>{para[locale]}</p>
                  ))}
                </div>
              </motion.div>

              {/* Developmental Domains Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
                  >
                    <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon size={20} />
                    </div>
                    <h3 className="font-bold text-stone-800 mb-2">{feature.title[locale]}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{feature.description[locale]}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Schedule */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 overflow-hidden sticky top-24"
              >
                <div className="bg-amber-500 p-6 text-white">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Clock size={20} />
                    {content.scheduleTitle[locale]}
                  </h3>
                  <p className="text-amber-100 text-sm mt-2 opacity-90">
                    {content.note[locale]}
                  </p>
                </div>
                
                <div className="max-h-[600px] overflow-y-auto p-6 space-y-6 custom-scrollbar">
                  {content.schedule.map((item, index) => {
                    const Icon = getIconForActivity(item.activity);
                    return (
                      <div key={index} className="relative pl-8 pb-0 last:pb-0">
                        {/* Timeline Line */}
                        {index !== content.schedule.length - 1 && (
                          <div className="absolute left-[11px] top-8 bottom-[-24px] w-[2px] bg-stone-100" />
                        )}
                        
                        {/* Timeline Dot */}
                        <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white z-10 ${
                          item.isBold ? "border-amber-500 text-amber-500" : "border-stone-300 text-stone-300"
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${item.isBold ? "bg-amber-500" : "bg-stone-300"}`} />
                        </div>

                        <div className={`flex gap-4 ${item.isBold ? "opacity-100" : "opacity-80"}`}>
                          <div className="flex-1">
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-1">
                              {item.time}
                            </span>
                            <div className="flex items-start gap-2">
                              <Icon size={16} className={`mt-1 flex-shrink-0 ${item.isBold ? "text-amber-500" : "text-stone-400"}`} />
                              <p className={`text-sm font-medium leading-snug ${item.isBold ? "text-stone-800" : "text-stone-600"}`}>
                                {item.activity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                {locale === "en" ? "Ready to Join Our Family?" : "準備好加入我們的大家庭了嗎？"}
              </h2>
              <p className="text-lg text-stone-300 mb-10 leading-relaxed">
                {locale === "en"
                  ? "Schedule a tour to experience our nurturing environment and meet our dedicated team."
                  : "預約參觀，體驗我們溫馨的環境，認識我們敬業的團隊。"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tour"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  {locale === "en" ? "Schedule a Tour" : "預約參觀"}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/admission/tuition"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all backdrop-blur-sm"
                >
                  {locale === "en" ? "View Tuition" : "查看學費"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
