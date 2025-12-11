import { getSortedPostsData } from "@/lib/blog";
import BlogFeed from "./BlogFeed";

export const revalidate = 3600; // Revalidate every hour

export default function BlogPage() {
  const posts = getSortedPostsData();
  
  // Extract unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <div className="min-h-screen pb-20 pt-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-stone-800 md:text-5xl font-serif">
            Parenting Blog
          </h1>
          <p className="text-xl font-medium text-stone-500">育兒部落格</p>
        </div>

        {/* Client-side Feed with Filtering */}
        <BlogFeed posts={posts} categories={categories} />
      </div>
    </div>
  );
}
