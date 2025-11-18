import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sunny | 關於 Sunny",
  description: "Mission, vision, and campus | 園所理念與校舍環境",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">About Sunny</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
