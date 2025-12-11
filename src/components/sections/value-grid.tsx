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
    <section className="bg-gradient-to-b from-white to-secondary/5 py-16 md:py-24" id="why-sunny">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {valueIntro.eyebrow[locale]}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            {valueIntro.title[locale]}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {valueIntro.body[locale]}
          </p>
        </div>
        <motion.div 
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title.en} variants={item}>
              <Card
                className="group relative h-full overflow-hidden border-none bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title[locale]}
                  </h3>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-base leading-relaxed text-muted-foreground">
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
