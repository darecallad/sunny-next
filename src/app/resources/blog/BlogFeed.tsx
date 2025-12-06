"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Layers } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

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
    <div>
      {/* Controls: Filter */}
      <div className="sticky top-20 z-10 mb-8 flex justify-center bg-stone-50/95 px-4 py-4 backdrop-blur-sm sm:rounded-xl">
        {/* Category Filter */}
        <div className="overflow-x-auto">
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold transition-all",
                selectedCategory === "All"
                  ? "bg-stone-900 text-white shadow-md"
                  : "bg-white text-stone-600 hover:bg-stone-200"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold transition-all",
                  selectedCategory === category
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-white text-stone-600 hover:bg-stone-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout (Flex Wrap for Centering) */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/resources/blog/${post.id}`}
            className="group relative block w-full max-w-[350px] rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-stone-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Category Tag (Top Right) */}
              <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-stone-800 backdrop-blur-md shadow-sm">
                {post.category}
              </div>

              {/* Multiple Images Indicator */}
              {post.images && post.images.length > 1 && (
                <div className="absolute left-3 top-3 rounded bg-black/50 px-1.5 py-0.5 text-xs text-white backdrop-blur-sm">
                  <Layers className="h-3 w-3" />
                </div>
              )}
            </div>

            {/* Central Logo (Overlapping) */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1 shadow-md">
                <Image
                  src="/images/sunny-logomark.png"
                  alt="Sunny Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4 pt-8 text-center">
              {/* Title */}
              <h2 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-stone-900 group-hover:text-orange-600">
                {locale === "zh" ? post.titleZh : post.title}
              </h2>

              {/* Excerpt (Partial Content) - Hidden by default, shown on hover */}
              <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-24 group-hover:opacity-100">
                <p className="mb-4 line-clamp-3 text-sm text-stone-500">
                  {locale === "zh" ? (post.excerptZh || post.excerpt) : post.excerpt}
                </p>
              </div>

              {/* Footer: Author & Read Time */}
              <div className="mt-4 grid grid-cols-2 border-t border-stone-100 pt-3">
                <div className="flex items-center justify-center border-r border-stone-100 px-2">
                  <span className="text-xs font-bold text-stone-700">
                    {locale === "zh" ? "陽光幼兒園" : "Sunny Child Care"}
                  </span>
                </div>
                <div className="flex items-center justify-center px-2 text-stone-400">
                  <Calendar className="mr-1 h-3.5 w-3.5" />
                  <span className="text-xs">{post.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="py-20 text-center text-stone-500">
          <p>No posts found in this category.</p>
        </div>
      )}
    </div>
  );
}
