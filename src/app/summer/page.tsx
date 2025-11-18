import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer | 夏令營",
  description: "Summer camp program for kids",
};

export default function SummerPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Summer Program</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
