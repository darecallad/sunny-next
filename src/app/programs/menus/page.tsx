"use client";

import { useLanguage } from "@/context/language-context";
import { programsContent } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Utensils, 
  Apple, 
  Carrot, 
  Fish, 
  Milk, 
  Wheat, 
  Leaf, 
  Download, 
  ChefHat,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function MenusPage() {
  const { locale } = useLanguage();
  const content = programsContent.menus;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Nutrition Highlights
  const highlights = [
    {
      icon: Leaf,
      title: { en: "Fresh Ingredients", zh: "新鮮食材" },
      description: { en: "Locally sourced, seasonal produce for maximum nutrition.", zh: "選用當地當季食材，確保最高營養價值。" },
      color: "bg-lime-100 text-lime-600"
    },
    {
      icon: ChefHat,
      title: { en: "Prepared with Love", zh: "用心烹調" },
      description: { en: "Home-style cooking with low salt and sugar.", zh: "家常烹調方式，堅持低鹽低糖。" },
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Sparkles,
      title: { en: "Balanced Diet", zh: "均衡飲食" },
      description: { en: "Carefully planned menus covering all food groups.", zh: "精心規劃的菜單，涵蓋所有食物類別。" },
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  // Sample Menu Data (Static for visual "Surprise")
  const sampleMenu = [
    {
      meal: { en: "Morning Snack", zh: "早點" },
      items: { en: "Seasonal Fruits & Yogurt", zh: "時令水果與優格" },
      icon: Apple,
      color: "text-rose-500 bg-rose-50"
    },
    {
      meal: { en: "Lunch", zh: "午餐" },
      items: { en: "Brown Rice, Steamed Fish, Stir-fried Veggies", zh: "糙米飯、清蒸魚、炒時蔬" },
      icon: Fish,
      color: "text-blue-500 bg-blue-50"
    },
    {
      meal: { en: "Afternoon Snack", zh: "午點" },
      items: { en: "Whole Wheat Toast & Milk", zh: "全麥吐司與牛奶" },
      icon: Wheat,
      color: "text-amber-500 bg-amber-50"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-lime-200" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/banners/menu.webp"
            alt="Healthy Food"
            fill
            className="object-cover brightness-[0.85]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-50/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium text-sm tracking-wide uppercase mb-6 shadow-lg">
              <Utensils size={14} className="text-lime-300 fill-lime-300" />
              {locale === "en" ? "Nutrition & Wellness" : "營養與健康"}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-tight tracking-tight">
              {content.hero.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
              {locale === "en" 
                ? "Fueling growing bodies with wholesome, delicious meals." 
                : "用健康美味的餐點，為成長中的身體注入活力。"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-32 relative z-20">
        <div className="container mx-auto px-4">
          
          {/* Philosophy Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-8 md:p-16 border border-white/50 relative overflow-hidden mb-12"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-50/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-8">
                {locale === "en" ? "Our Food Philosophy" : "我們的飲食理念"}
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-12">
                {content.description[locale]}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-bold text-stone-800 mb-2">{item.title[locale]}</h3>
                    <p className="text-sm text-stone-500">{item.description[locale]}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sample Menu & Download Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left: Sample Menu Visualization */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-lg p-8 border border-stone-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                  <Utensils size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-800">
                  {locale === "en" ? "A Typical Day" : "一日餐點範例"}
                </h3>
              </div>

              <div className="space-y-6">
                {sampleMenu.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                        {item.meal[locale]}
                      </p>
                      <p className="font-medium text-stone-700">
                        {item.items[locale]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-lime-50 rounded-xl border border-lime-100 flex gap-3">
                <Carrot className="text-lime-600 flex-shrink-0" size={20} />
                <p className="text-sm text-lime-800">
                  {locale === "en" 
                    ? "We accommodate food allergies and dietary restrictions. Please inform us during enrollment." 
                    : "我們配合食物過敏和飲食限制。請在註冊時告知我們。"}
                </p>
              </div>
            </motion.div>

            {/* Right: Download CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-[2rem] shadow-xl"
            >
              <Image
                src="/images/banners/menu-bottom.webp"
                alt="Fresh Food"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  {locale === "en" ? "View Full Menu" : "查看完整菜單"}
                </h3>
                <p className="text-white/90 mb-8 max-w-xs">
                  {locale === "en" 
                    ? "Download our monthly menu to see what's cooking in our kitchen." 
                    : "下載我們的月度菜單，看看廚房裡正在準備什麼美味。"}
                </p>
                
                <a
                  href={content.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 hover:bg-lime-400 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:-translate-y-1 group-hover:scale-105"
                >
                  <Download className="mr-2" size={20} />
                  {content.downloadText[locale]}
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
