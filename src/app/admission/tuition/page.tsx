import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuition & Openings | 學費與名額",
  description: "Tuition information and availability",
};

export default function TuitionPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Tuition & Openings</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
