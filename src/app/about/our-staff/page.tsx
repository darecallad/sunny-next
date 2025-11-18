import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Staff | 教學團隊",
  description: "Meet the bilingual team | 雙語師資介紹",
};

export default function OurStaffPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Our Staff</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
