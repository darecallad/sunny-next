"use client";

import { features, valueIntro } from "@/data/site";
import { useLanguage } from "@/context/language-context";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ValueGrid() {
  const { locale } = useLanguage();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFBF7] py-20 md:py-32" id="why-sunny">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#C07234]/5 blur-3xl" />
        <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#8B4513]/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C07234]">
              {valueIntro.eyebrow[locale]}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#8B4513] sm:text-5xl">
              {valueIntro.title[locale]}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5D4037]/80">
              {valueIntro.body[locale]}
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title.en} variants={item}>
              <Card
                className="group relative h-full overflow-hidden border border-[#C07234]/10 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C07234]/10 hover:border-[#C07234]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C07234]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <CardHeader className="relative flex flex-col gap-4 pb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C07234] to-[#8B4513] text-white shadow-lg shadow-[#C07234]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#8B4513] group-hover:text-[#C07234] transition-colors">
                    {feature.title[locale]}
                  </h3>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-base leading-relaxed text-[#5D4037]/80">
                    {feature.description[locale]}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
