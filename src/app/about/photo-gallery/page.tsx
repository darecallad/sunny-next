import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | 校園剪影",
  description: "Peek inside our day | 每日生活點滴",
};

export default function PhotoGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Photo Gallery</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
