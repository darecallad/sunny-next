import { getAllPostIds, getPostData, getSortedPostsData } from "@/lib/blog";
import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  return {
    title: `${postData.title} | Sunny Child Care Blog`,
    description: postData.excerpt,
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      images: [postData.image],
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  const allPosts = getSortedPostsData();
  
  // Get 3 related posts (excluding current one)
  const relatedPosts = allPosts
    .filter(post => post.id !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return <ArticleClient postData={postData} relatedPosts={relatedPosts} />;
}
