import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menus | 營養餐點",
  description: "Nutritious meals for growing minds",
};

export default function MenusPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Menus</h1>
      <p className="text-lg text-gray-600">Content coming soon...</p>
    </div>
  );
}
