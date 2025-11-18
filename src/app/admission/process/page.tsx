import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | 入學流程",
  description: "Step by step admission process",
};

export default function ProcessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Admission Process</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
