"use client";

import { useState } from "react";
import { Calendar, Users, Clock } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Child = {
  month: string;
  day: string;
  year: string;
};

export default function TuitionPage() {
  const { locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [children, setChildren] = useState<Child[]>([{ month: "", day: "", year: "" }]);

  const addChild = () => {
    setChildren([...children, { month: "", day: "", year: "" }]);
  };

  const removeChild = (index: number) => {
    if (children.length > 1) {
      setChildren(children.filter((_, i) => i !== index));
    }
  };

  const updateChild = (index: number, field: keyof Child, value: string) => {
    const newChildren = [...children];
    newChildren[index][field] = value;
    setChildren(newChildren);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      chineseTour: formData.get("chineseTour") as string,
      contactMethod: formData.get("contactMethod") as string,
      children: children,
      startDate: formData.get("startDate") as string,
      message: formData.get("message") as string,
      locale: locale,
    };

    try {
      const response = await fetch("/api/tour", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
        setChildren([{ month: "", day: "", year: "" }]);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#324f7a]/5">
      {/* Hero Section */}
      <section 
        className="border-b border-border/40 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/banners/booking.jpg')",
          backgroundPosition: "50% 70%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            {locale === "en" ? "Tuition & Openings" : "學費與名額"}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white/95">
            {locale === "en"
              ? "Complete the form to learn about our center team and schedule a visit."
              : "填寫表單，了解我們的教學團隊並預約參觀。"}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Parent Information */}
                  <div>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-[#324f7a]">
                      <Users className="h-6 w-6" />
                      {locale === "en" ? "Your Information" : "您的資訊"}
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="mb-2 block font-medium text-gray-700">
                          {locale === "en" ? "First Name" : "名字"} *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="mb-2 block font-medium text-gray-700">
                          {locale === "en" ? "Last Name" : "姓氏"} *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
                          {locale === "en" ? "Email Address" : "電子郵件"} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block font-medium text-gray-700">
                          {locale === "en" ? "Phone Number" : "聯絡電話"} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tour Preferences */}
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-[#324f7a]">
                      <Calendar className="h-6 w-6" />
                      {locale === "en" ? "Tour Preferences" : "參觀偏好"}
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-3 block font-medium text-gray-700">
                          {locale === "en" ? "Chinese Tour" : "中文導覽"} *
                        </label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="chineseTour"
                              value="Yes"
                              required
                              className="h-4 w-4 text-[#f2a63b] focus:ring-[#f2a63b]"
                            />
                            <span>{locale === "en" ? "Yes" : "是"}</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="chineseTour"
                              value="No"
                              className="h-4 w-4 text-[#f2a63b] focus:ring-[#f2a63b]"
                            />
                            <span>{locale === "en" ? "No" : "否"}</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contactMethod" className="mb-2 block font-medium text-gray-700">
                          {locale === "en" ? "Preferred Contact Method" : "聯絡方式"}
                        </label>
                        <select
                          id="contactMethod"
                          name="contactMethod"
                          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                        >
                          <option value="">{locale === "en" ? "Select..." : "請選擇..."}</option>
                          <option value="Email">{locale === "en" ? "Email" : "電子郵件"}</option>
                          <option value="Phone">{locale === "en" ? "Phone Call" : "電話"}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Child Information */}
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-[#324f7a]">
                      <Users className="h-6 w-6" />
                      {locale === "en" ? "Child Information" : "子女資訊"}
                    </h2>
                    <div className="space-y-4">
                      {children.map((child, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <p className="font-medium text-gray-700">
                              {locale === "en" ? `Child ${index + 1} - Date of Birth` : `子女 ${index + 1} - 出生日期`}
                            </p>
                            {children.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeChild(index)}
                                className="text-sm text-red-600 hover:text-red-700"
                              >
                                {locale === "en" ? "Remove" : "移除"}
                              </button>
                            )}
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="mb-1 block text-sm text-gray-600">
                                {locale === "en" ? "Month" : "月"}
                              </label>
                              <input
                                type="number"
                                min="1"
                                max="12"
                                placeholder="MM"
                                value={child.month}
                                onChange={(e) => updateChild(index, "month", e.target.value)}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-center focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-sm text-gray-600">
                                {locale === "en" ? "Day" : "日"}
                              </label>
                              <input
                                type="number"
                                min="1"
                                max="31"
                                placeholder="DD"
                                value={child.day}
                                onChange={(e) => updateChild(index, "day", e.target.value)}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-center focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-sm text-gray-600">
                                {locale === "en" ? "Year" : "年"}
                              </label>
                              <input
                                type="number"
                                min="2017"
                                max={new Date().getFullYear()}
                                placeholder="YYYY"
                                value={child.year}
                                onChange={(e) => updateChild(index, "year", e.target.value)}
                                required
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-center focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button
                        type="button"
                        onClick={addChild}
                        variant="outline"
                        className="w-full border-[#324f7a] text-[#324f7a] hover:bg-[#324f7a]/10"
                      >
                        + {locale === "en" ? "Add Another Child" : "新增子女"}
                      </Button>
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-[#324f7a]">
                      <Clock className="h-6 w-6" />
                      {locale === "en" ? "Timeline" : "時間規劃"}
                    </h2>
                    <div>
                      <label htmlFor="startDate" className="mb-2 block font-medium text-gray-700">
                        {locale === "en" ? "Desired Start Date" : "期望開始日期"}
                      </label>
                      <select
                        id="startDate"
                        name="startDate"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                      >
                        <option value="">{locale === "en" ? "Select..." : "請選擇..."}</option>
                        <option value="Within a Month">{locale === "en" ? "Within a Month" : "一個月內"}</option>
                        <option value="1-3 Months">{locale === "en" ? "1-3 Months" : "1-3 個月"}</option>
                        <option value="3-6 Months">{locale === "en" ? "3-6 Months" : "3-6 個月"}</option>
                        <option value="6-9 Months">{locale === "en" ? "6-9 Months" : "6-9 個月"}</option>
                        <option value="9+ Months">{locale === "en" ? "9+ Months" : "9 個月以上"}</option>
                        <option value="Unsure">{locale === "en" ? "Unsure at this time" : "尚未確定"}</option>
                      </select>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="border-t border-gray-200 pt-8">
                    <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
                      {locale === "en" ? "Comments or Questions" : "備註或問題"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder={locale === "en" ? "What would you like to learn on your tour?" : "您想在參觀時了解什麼？"}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#f2a63b] focus:outline-none focus:ring-2 focus:ring-[#f2a63b]/20"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="border-t border-gray-200 pt-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#f2a63b] py-6 text-lg font-semibold text-white hover:bg-[#f2a63b]/90 disabled:opacity-50"
                    >
                      {isSubmitting
                        ? locale === "en"
                          ? "Sending..."
                          : "傳送中..."
                        : locale === "en"
                        ? "Schedule Tour"
                        : "預約參觀"}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="mt-4 rounded-md bg-green-50 p-4 text-center text-green-800">
                        {locale === "en"
                          ? "✅ Thank you! We'll contact you soon to schedule your tour."
                          : "✅ 感謝您！我們會盡快與您聯繫安排參觀。"}
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mt-4 rounded-md bg-red-50 p-4 text-center text-red-800">
                        {locale === "en"
                          ? "❌ Sorry, something went wrong. Please try again or call us."
                          : "❌ 抱歉，發生錯誤。請重試或直接致電我們。"}
                      </div>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
