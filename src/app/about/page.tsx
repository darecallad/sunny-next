"use client";

import { useLanguage } from "@/context/language-context";
import { aboutContent } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Heart, 
  Users, 
  Shield, 
  Sparkles, 
  BookOpen, 
  Smile, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Card = ({ title, description, icon: Icon, index }: { title: string; description: string; icon: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-50 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 text-amber-700 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
        <p className="text-stone-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = aboutContent;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const icons = [Heart, Users, Shield, Sparkles, BookOpen, Smile];

  const principleImages = [
    '/images/about/health-safety.webp',
    '/images/about/personal-development.webp',
    '/images/about/teachers-family.webp'
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/banners/about.webp"
            alt="Sunny Child Care Environment"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-50/90" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6">
              {locale === 'en' ? 'Since 1995' : '始於 1995 年'}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              {t.hero.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              {t.hero.subtitle[locale]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-8 relative inline-block">
              {t.mission.title[locale]}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-amber-500 rounded-full" />
            </h2>
            <div className="space-y-6">
              {t.mission.description.map((desc, i) => (
                <p key={i} className="text-lg text-stone-600 leading-relaxed">
                  {desc[locale]}
                </p>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                locale === 'en' ? 'Nurturing Environment' : '培育環境',
                locale === 'en' ? 'Bilingual Education' : '雙語教育',
                locale === 'en' ? 'Experienced Staff' : '經驗豐富的員工',
                locale === 'en' ? 'Safety First' : '安全第一'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-stone-700">
                  <CheckCircle2 className="text-amber-600 w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/banners/preschool.webp"
                alt="Our Mission"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-serif italic">
                  &quot;{locale === 'en' ? 'Where every child shines' : '讓每個孩子閃耀光芒'}&quot;
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full -z-10 opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-200 rounded-full -z-10 opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators / Features */}
      <section className="py-24 bg-stone-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4"
            >
              {locale === 'en' ? 'Why Choose Sunny' : '為什麼選擇 Sunny'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-stone-600 text-lg"
            >
              {t.philosophy[locale]}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <Card
                key={index}
                index={index}
                title={feature.title[locale]}
                description={feature.description[locale]}
                icon={icons[index % icons.length]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-auto">
              <Image
                src="/images/banners/staffbanner.webp"
                alt="Our Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
            </div>
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-8">
                  {t.story.title[locale]}
                </h2>
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  {t.story.paragraphs.slice(0, 3).map((para, i) => (
                    <p key={i}>{para[locale]}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-stone-800 text-stone-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-amber-50"
          >
            {t.principles.title[locale]}
          </motion.h2>

          <div className="space-y-24">
            {t.principles.list.map((principle, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-serif text-amber-500/20 font-bold">0{index + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-50">
                      {principle.title[locale]}
                    </h3>
                  </div>
                  <p className="text-lg text-stone-300 leading-relaxed">
                    {principle.description[locale]}
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-stone-700 group">
                    <Image
                      src={principleImages[index]}
                      alt={principle.title[locale]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8">
              {locale === 'en' ? 'Join Our Family' : '加入我們的大家庭'}
            </h2>
            <p className="text-xl text-amber-800 mb-10 max-w-2xl mx-auto">
              {locale === 'en' 
                ? 'Experience the difference of a nurturing, bilingual environment for your child.' 
                : '讓您的孩子體驗充滿愛與雙語環境的獨特之處。'}
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              {locale === 'en' ? 'Schedule a Tour' : '預約參觀'}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
