import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  id: string;
  title: string;
  titleZh: string;
  excerpt: string;
  excerptZh?: string;
  image: string;
  images?: string[]; // Support for multiple images
  category: string;
  author: string;
  date: string;
  readTime: string;
  contentHtml?: string;
  contentHtmlZh?: string;
};

export function getSortedPostsData(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as Omit<BlogPost, "id" | "contentHtml">),
    };
  });

  // Filter out future posts (Time-Release Logic)
  // Use San Jose time (PST/PDT) to determine "today" instead of UTC
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Los_Angeles",
  });
  const publishedPosts = allPostsData.filter((post) => post.date <= today);

  // Sort posts by date
  return publishedPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Split content into English and Chinese if separator exists
  const contentParts = matterResult.content.split("<!-- zh-start -->");
  const englishContent = contentParts[0];
  const chineseContent = contentParts[1] || "";

  // Use remark to convert markdown into HTML string
  const processedContentEn = await remark().use(html).process(englishContent);
  const contentHtml = processedContentEn.toString();

  let contentHtmlZh = "";
  if (chineseContent) {
    const processedContentZh = await remark().use(html).process(chineseContent);
    contentHtmlZh = processedContentZh.toString();
  }

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    contentHtmlZh,
    ...(matterResult.data as Omit<BlogPost, "id" | "contentHtml" | "contentHtmlZh">),
  };
}
