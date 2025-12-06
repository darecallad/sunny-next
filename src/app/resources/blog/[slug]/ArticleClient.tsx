"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { BlogPost } from "@/lib/blog";

interface ArticleClientProps {
  postData: BlogPost;
}

export default function ArticleClient({ postData }: ArticleClientProps) {
  const { locale } = useLanguage();

  return (
    <article className="min-h-screen bg-[#F9F9F5] pb-20 pt-32">
      {/* Hero Image */}
      <div className="container mx-auto max-w-[680px] px-5">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/resources/blog"
            className="inline-flex items-center text-sm font-medium text-stone-600 hover:text-[#C2410C] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {locale === "zh" ? "返回部落格" : "Back to Blog"}
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-[#C2410C]">
              {postData.category}
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-[#2D2D2D] md:text-5xl font-[family-name:var(--font-serif)]">
            {locale === "zh" ? postData.titleZh : postData.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500 font-medium">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>
                {locale === "zh" ? "陽光幼兒園" : "Sunny Child Care Center"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{postData.date}</span>
            </div>
          </div>
        </header>

        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-xl shadow-sm">
          <Image
            src={postData.image}
            alt={postData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-stone mx-auto max-w-none 
            leading-[1.8] 
            prose-headings:font-bold prose-headings:text-[#2D2D2D] prose-headings:font-[family-name:var(--font-serif)] prose-h2:mt-[2em] prose-h2:mb-6
            prose-p:text-[#4A4A4A] prose-p:my-6 
            prose-li:text-[#4A4A4A] 
            prose-strong:text-[#2D2D2D] 
            prose-a:font-medium prose-a:!text-[#C2410C] prose-a:underline prose-a:decoration-[#C2410C]/30 prose-a:underline-offset-4 hover:prose-a:decoration-[#C2410C] 
            prose-img:rounded-xl
            prose-blockquote:bg-white prose-blockquote:rounded-r-lg prose-blockquote:border-l-4 prose-blockquote:border-[#C2410C] prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:text-[#2D2D2D] prose-blockquote:font-medium prose-blockquote:shadow-sm"
          dangerouslySetInnerHTML={{
            __html:
              locale === "zh"
                ? postData.contentHtmlZh || postData.contentHtml || ""
                : postData.contentHtml || "",
          }}
        />
      </div>
    </article>
  );
}
