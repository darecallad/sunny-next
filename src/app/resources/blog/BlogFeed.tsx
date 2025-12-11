"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Layers, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { motion, AnimatePresence } from "framer-motion";

interface BlogFeedProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogFeed({ posts, categories }: BlogFeedProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { locale } = useLanguage();

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="relative min-h-[60vh]">
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#F9F9F5]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl mix-blend-multiply animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      {/* Controls: Filter */}
      <div className="sticky top-24 z-30 mb-12 flex justify-center px-4">
        <div className="bg-white/80 backdrop-blur-md shadow-lg shadow-stone-200/50 rounded-full p-1.5 border border-white/50 overflow-x-auto max-w-full">
          <div className="flex gap-1">
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold transition-all duration-300",
                selectedCategory === "All"
                  ? "bg-stone-900 text-white shadow-md scale-105"
                  : "bg-transparent text-stone-600 hover:bg-stone-100"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold transition-all duration-300",
                  selectedCategory === category
                    ? "bg-stone-900 text-white shadow-md scale-105"
                    : "bg-transparent text-stone-600 hover:bg-stone-100"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={post.id}
            >
              <Link
                href={`/resources/blog/${post.id}`}
                className="group relative block h-full rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden border border-stone-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer z-10 pointer-events-none" />
                  
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-white/90 backdrop-blur text-orange-600 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Multiple Images Indicator */}
                  {post.images && post.images.length > 1 && (
                    <div className="absolute top-4 right-4 z-20 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm flex items-center gap-1">
                      <Layers className="h-3 w-3" />
                      <span>{post.images.length}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-aspect-[4/3])]">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-400 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-stone-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {locale === "zh" ? post.titleZh : post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-stone-500 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
                    {locale === "zh" ? (post.excerptZh || post.excerpt) : post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-orange-600 text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                    {locale === "zh" ? "閱讀更多" : "Read Article"}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center text-stone-500"
        >
          <p>No posts found in this category.</p>
        </motion.div>
      )}
    </div>
  );
}
