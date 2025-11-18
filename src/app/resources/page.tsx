import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | 親職資源",
  description: "Parent resources and information",
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Resources</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
