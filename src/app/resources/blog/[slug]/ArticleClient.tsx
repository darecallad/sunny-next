"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock, Share2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { BlogPost } from "@/lib/blog";
import { motion, useScroll, useSpring } from "framer-motion";

interface ArticleClientProps {
  postData: BlogPost;
  relatedPosts?: BlogPost[];
}

export default function ArticleClient({ postData, relatedPosts = [] }: ArticleClientProps) {
  const { locale } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <article className="min-h-screen bg-[#F9F9F5] pb-20 pt-32 relative">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Image */}
      <div className="container mx-auto max-w-[800px] px-5">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            href="/resources/blog"
            className="group inline-flex items-center text-sm font-medium text-stone-600 hover:text-[#C2410C] transition-colors"
          >
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm group-hover:bg-orange-50 transition-colors">
               <ArrowLeft className="h-4 w-4" />
            </div>
            {locale === "zh" ? "返回部落格" : "Back to Blog"}
          </Link>
        </motion.div>

        {/* Header */}
        <header className="mb-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="rounded-full bg-orange-100/80 backdrop-blur-sm px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-[#C2410C] shadow-sm border border-orange-200/50">
              {postData.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-3xl font-bold leading-tight text-[#2D2D2D] md:text-5xl font-[family-name:var(--font-serif)]"
          >
            {locale === "zh" ? postData.titleZh : postData.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500 font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white rounded-full shadow-sm">
                <User className="h-3.5 w-3.5 text-orange-500" />
              </div>
              <span>
                {locale === "zh" ? "陽光幼兒園" : "Sunny Child Care Center"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white rounded-full shadow-sm">
                <Calendar className="h-3.5 w-3.5 text-orange-500" />
              </div>
              <span>{postData.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white rounded-full shadow-sm">
                <Clock className="h-3.5 w-3.5 text-orange-500" />
              </div>
              <span>{postData.readTime || "4 min read"}</span>
            </div>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl shadow-xl shadow-stone-200"
        >
          <Image
            src={postData.image}
            alt={postData.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover hover:scale-105 transition-transform duration-1000"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="prose prose-lg prose-stone mx-auto max-w-none 
            leading-[1.8] 
            prose-headings:font-bold prose-headings:text-[#2D2D2D] prose-headings:font-[family-name:var(--font-serif)] prose-h2:mt-[2em] prose-h2:mb-6 prose-h2:text-3xl
            prose-p:text-[#4A4A4A] prose-p:my-6 prose-p:text-lg
            prose-li:text-[#4A4A4A] prose-li:text-lg
            prose-strong:text-[#2D2D2D] 
            prose-a:font-medium prose-a:!text-[#C2410C] prose-a:underline prose-a:decoration-[#C2410C]/30 prose-a:underline-offset-4 hover:prose-a:decoration-[#C2410C] 
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
            prose-blockquote:bg-white prose-blockquote:rounded-r-xl prose-blockquote:border-l-4 prose-blockquote:border-[#C2410C] prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:not-italic prose-blockquote:text-[#2D2D2D] prose-blockquote:font-medium prose-blockquote:shadow-sm prose-blockquote:text-xl prose-blockquote:leading-relaxed"
          dangerouslySetInnerHTML={{
            __html:
              locale === "zh"
                ? postData.contentHtmlZh || postData.contentHtml || ""
                : postData.contentHtml || "",
          }}
        />
        
        {/* Share Section */}
        <div className="mt-16 border-t border-stone-200 pt-8 flex justify-between items-center">
           <div className="text-stone-500 font-medium">
              {locale === "zh" ? "分享這篇文章" : "Share this article"}
           </div>
           <div className="flex gap-3">
              <button className="p-2 rounded-full bg-white shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">
                 <Share2 className="w-5 h-5" />
              </button>
           </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-stone-800 mb-8 font-serif">
              {locale === "zh" ? "更多文章" : "More to Read"}
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/resources/blog/${post.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-stone-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-stone-800 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                    {locale === "zh" ? post.titleZh : post.title}
                  </h4>
                  <p className="text-sm text-stone-500 line-clamp-2">
                    {locale === "zh" ? (post.excerptZh || post.excerpt) : post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
