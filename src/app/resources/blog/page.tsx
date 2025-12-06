import { getSortedPostsData } from "@/lib/blog";
import BlogFeed from "./BlogFeed";

export default function BlogPage() {
  const posts = getSortedPostsData();
  
  // Extract unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <div className="min-h-screen bg-stone-50 pb-20 pt-32">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-stone-800 md:text-4xl">
            Parenting Blog
          </h1>
          <p className="text-lg font-medium text-stone-600">育兒部落格</p>
        </div>

        {/* Client-side Feed with Filtering */}
        <BlogFeed posts={posts} categories={categories} />
      </div>
    </div>
  );
}
