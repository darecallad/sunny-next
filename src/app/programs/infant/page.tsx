"use client";

import { useLanguage } from "@/context/language-context";
import { programsContent } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Clock, 
  Baby, 
  Brain, 
  MessageCircle, 
  Activity, 
  Sun, 
  Moon,
  Utensils,
  Music,
  Users,
  ArrowRight,
  Star,
  Heart,
  ShieldCheck
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

  // Custom features for Infant program
  const features = [
    {
      icon: Brain,
      title: { en: "Cognitive Development", zh: "認知發展" },
      description: { en: "Fostering curiosity and problem-solving skills through sensory exploration.", zh: "透過感官探索培養好奇心和解決問題的能力。" },
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: Activity,
      title: { en: "Perceptual Motor", zh: "感知運動" },
      description: { en: "Developing fine and gross motor skills through tummy time and active play.", zh: "透過俯臥時間和活動遊戲發展精細和大肌肉運動技能。" },
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: { en: "Speech & Language", zh: "語言發展" },
      description: { en: "Building vocabulary and communication in an immersive bilingual environment.", zh: "在沉浸式雙語環境中建立詞彙和溝通能力。" },
      color: "bg-violet-100 text-violet-600"
    },
    {
      icon: Heart,
      title: { en: "Social Emotional", zh: "社交情感" },
      description: { en: "Nurturing security, emotional growth, and positive interactions with caregivers.", zh: "培養安全感、情感成長以及與照顧者的積極互動。" },
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const getIconForActivity = (activity: string) => {
    const lower = activity.toLowerCase();
    if (lower.includes("snack") || lower.includes("lunch") || lower.includes("dinner")) return Utensils;
    if (lower.includes("nap") || lower.includes("bedtime") || lower.includes("cots")) return Moon;
    if (lower.includes("playground") || lower.includes("outside")) return Sun;
    if (lower.includes("music")) return Music;
    if (lower.includes("circle") || lower.includes("story")) return Users;
    if (lower.includes("arrival")) return Sun;
    if (lower.includes("diaper") || lower.includes("wash")) return ShieldCheck;
    return Clock;
  };

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-amber-200" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/banners/infant.webp"
            alt="Infant Care"
            fill
            className="object-cover brightness-[0.85]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-50/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium text-sm tracking-wide uppercase mb-6 shadow-lg">
              <Star size={14} className="text-amber-300 fill-amber-300" />
              {locale === "en" ? "Ages 0 - 2 Years" : "0 - 2 歲嬰幼兒"}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-tight tracking-tight">
              {content.hero.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
              {locale === "en" 
                ? "A nurturing second home where your little ones grow, explore, and thrive." 
                : "一個溫馨的第二個家，讓您的寶貝在這裡成長、探索和茁壯。"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-32 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Philosophy & Features */}
            <div className="lg:col-span-7 space-y-8">
              {/* Intro Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl p-8 md:p-12 border border-white/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-amber-100 rounded-2xl text-amber-600 shadow-sm">
                      <Baby size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-stone-800">
                        {locale === "en" ? "Nurturing Development" : "培育發展"}
                      </h2>
                      <p className="text-stone-500 font-medium">
                        {locale === "en" ? "Our Philosophy" : "我們的理念"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                    {content.description.map((para, index) => (
                      <p key={index} className="first-letter:text-4xl first-letter:font-serif first-letter:text-amber-500 first-letter:mr-2 first-letter:float-left">
                        {para[locale]}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white p-8 rounded-[2rem] shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-3">{feature.title[locale]}</h3>
                    <p className="text-stone-500 leading-relaxed">{feature.description[locale]}</p>
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
                className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden sticky top-24"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold flex items-center gap-3 mb-2">
                      <Clock size={24} />
                      {content.scheduleTitle[locale]}
                    </h3>
                    <p className="text-amber-100 text-sm font-medium opacity-90 bg-white/10 inline-block px-3 py-1 rounded-full">
                      {content.note[locale]}
                    </p>
                  </div>
                </div>
                
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-8 space-y-8 custom-scrollbar">
                  {content.schedule.map((item, index) => {
                    const Icon = getIconForActivity(item.activity);
                    return (
                      <div key={index} className="relative pl-10 group">
                        {/* Timeline Line */}
                        {index !== content.schedule.length - 1 && (
                          <div className="absolute left-[15px] top-10 bottom-[-32px] w-[2px] bg-stone-100 group-hover:bg-amber-100 transition-colors" />
                        )}
                        
                        {/* Timeline Dot */}
                        <div className={`absolute left-0 top-1 w-8 h-8 rounded-full border-[3px] flex items-center justify-center bg-white z-10 transition-colors duration-300 ${
                          item.isBold ? "border-amber-500 text-amber-500 shadow-md scale-110" : "border-stone-200 text-stone-300"
                        }`}>
                          <div className={`w-2.5 h-2.5 rounded-full transition-colors ${item.isBold ? "bg-amber-500" : "bg-stone-200"}`} />
                        </div>

                        <div className={`transition-all duration-300 ${item.isBold ? "opacity-100 translate-x-0" : "opacity-70 hover:opacity-100"}`}>
                          <span className="text-xs font-bold text-amber-500/80 uppercase tracking-wider block mb-1.5">
                            {item.time}
                          </span>
                          <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors -ml-3">
                            <Icon size={20} className={`mt-0.5 flex-shrink-0 ${item.isBold ? "text-amber-600" : "text-stone-400"}`} />
                            <p className={`text-base font-medium leading-snug ${item.isBold ? "text-stone-800" : "text-stone-600"}`}>
                              {item.activity}
                            </p>
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b1a_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-stone-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                {locale === "en" ? "Ready to Join Our Family?" : "準備好加入我們的大家庭了嗎？"}
              </h2>
              <p className="text-xl text-stone-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                {locale === "en"
                  ? "Schedule a tour to experience our nurturing environment and meet our dedicated team."
                  : "預約參觀，體驗我們溫馨的環境，認識我們敬業的團隊。"}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/tour"
                  className="inline-flex items-center justify-center px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 hover:shadow-amber-500/20"
                >
                  {locale === "en" ? "Schedule a Tour" : "預約參觀"}
                  <ArrowRight className="ml-2" size={22} />
                </Link>
                <Link
                  href="/admission/tuition"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm hover:-translate-y-1"
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
