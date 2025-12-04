"use client";

import { useState } from "react";
import { Calendar, Users, Clock } from "lucide-react";
import { toast } from "sonner";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Child = {
  month: string;
  day: string;
  year: string;
};

export default function TuitionPage() {
  const { locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [children, setChildren] = useState<Child[]>([{ month: "", day: "", year: "" }]);
  const [startDate, setStartDate] = useState<string>("");
  const [tourDateTime, setTourDateTime] = useState<string>("");

  // US Federal Holidays 2025-2026
  const usHolidays = [
    "2025-11-27", "2025-11-28", // Thanksgiving
    "2025-12-25", // Christmas
    "2026-01-01", // New Year's Day
    "2026-01-19", // MLK Day
    "2026-02-16", // Presidents' Day
    "2026-05-25", // Memorial Day
    "2026-07-03", "2026-07-04", // Independence Day
    "2026-09-07", // Labor Day
    "2026-10-12", // Columbus Day
    "2026-11-11", // Veterans Day
    "2026-11-26", "2026-11-27", // Thanksgiving
    "2026-12-25", // Christmas
  ];

  // Generate next 3 Fridays with two time slots each
  const generateFridaySlots = () => {
    const slots = [];
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 5 = Friday
    
    // Calculate days until next Friday
    let daysUntilFriday = (5 - currentDay + 7) % 7;
    if (daysUntilFriday === 0) {
      // If today is Friday, check if it's past 3:30 PM
      const currentHour = today.getHours();
      const currentMinute = today.getMinutes();
      if (currentHour > 15 || (currentHour === 15 && currentMinute >= 30)) {
        // If past 3:30 PM, start from next Friday
        daysUntilFriday = 7;
      }
    }
    
    // Generate 3 Friday slots
    let addedFridays = 0;
    let weekOffset = 0;
    
    while (addedFridays < 3) {
      const targetDate = new Date(today);
      targetDate.setDate(today.getDate() + daysUntilFriday + (weekOffset * 7));
      
      const year = targetDate.getFullYear();
      const month = targetDate.getMonth() + 1;
      const day = targetDate.getDate();
      const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      // Skip if it's a US holiday
      if (!usHolidays.includes(dateString)) {
        const weekday = locale === "en" ? "Friday" : "週五";
        
        // Morning slot: 10:30 AM - Chinese Tour
        const morningTime = locale === "en" ? "10:30 AM" : "上午 10:30";
        const morningTour = locale === "en" ? "Chinese Tour" : "中文 Tour";
        const morningDisplay = locale === "en" 
          ? `${month}/${day} ${weekday} ${morningTime} - ${morningTour}`
          : `${month}/${day} ${weekday} ${morningTime} ${morningTour}`;
        const morningValue = `${dateString} Friday 10:30 AM - Chinese Tour`;
        
        slots.push({ display: morningDisplay, value: morningValue });
        
        // Afternoon slot: 3:30 PM - English Tour
        const afternoonTime = locale === "en" ? "3:30 PM" : "下午 3:30";
        const afternoonTour = locale === "en" ? "English Tour" : "英文 Tour";
        const afternoonDisplay = locale === "en" 
          ? `${month}/${day} ${weekday} ${afternoonTime} - ${afternoonTour}`
          : `${month}/${day} ${weekday} ${afternoonTime} ${afternoonTour}`;
        const afternoonValue = `${dateString} Friday 3:30 PM - English Tour`;
        
        slots.push({ display: afternoonDisplay, value: afternoonValue });
        
        addedFridays++;
      }
      
      weekOffset++;
    }
    
    return slots;
  };

  const fridaySlots = generateFridaySlots();

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

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      children: children,
      tourDateTime: formData.get("tourDateTime") as string,
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
        toast.success(
          locale === "en" 
            ? "Tour request submitted successfully! We'll contact you soon." 
            : "參觀申請已成功提交！我們會盡快聯絡您。",
          { duration: 5000 }
        );
        // Reset form state before resetting the form
        setChildren([{ month: "", day: "", year: "" }]);
        setTourDateTime("");
        setStartDate("");
        // Use setTimeout to avoid accessing e.currentTarget after reset
        setTimeout(() => {
          const form = document.querySelector('form');
          if (form) form.reset();
        }, 0);
      } else {
        toast.error(
          locale === "en" 
            ? "Failed to submit tour request. Please try again." 
            : "提交參觀申請失敗，請重試。",
          { duration: 5000 }
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        locale === "en" 
          ? "An error occurred. Please try again later." 
          : "發生錯誤，請稍後再試。",
        { duration: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
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
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-primary">
                      <Users className="h-6 w-6" />
                      {locale === "en" ? "Your Information" : "您的資訊"}
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          {locale === "en" ? "First Name" : "名字"} *
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          {locale === "en" ? "Last Name" : "姓氏"} *
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {locale === "en" ? "Email Address" : "電子郵件"} *
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {locale === "en" ? "Phone Number" : "聯絡電話"} *
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Child Information */}
                  <div className="border-t border-border pt-8">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-primary">
                      <Users className="h-6 w-6" />
                      {locale === "en" ? "Child Information" : "子女資訊"} *
                    </h2>
                    <div className="space-y-4">
                      {children.map((child, index) => (
                        <div key={index} className="rounded-lg border border-border bg-secondary/10 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <p className="font-medium text-foreground">
                              {locale === "en" ? `Child ${index + 1} - Date of Birth` : `子女 ${index + 1} - 出生日期`}
                            </p>
                            {children.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeChild(index)}
                                className="text-sm text-destructive hover:text-destructive/80"
                              >
                                {locale === "en" ? "Remove" : "移除"}
                              </button>
                            )}
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-1">
                              <Label htmlFor={`child-${index}-month`} className="text-sm text-muted-foreground">
                                {locale === "en" ? "Month" : "月"}
                              </Label>
                              <Input
                                id={`child-${index}-month`}
                                type="number"
                                min="1"
                                max="12"
                                placeholder="MM"
                                value={child.month}
                                onChange={(e) => updateChild(index, "month", e.target.value)}
                                required
                                className="text-center"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor={`child-${index}-day`} className="text-sm text-muted-foreground">
                                {locale === "en" ? "Day" : "日"}
                              </Label>
                              <Input
                                id={`child-${index}-day`}
                                type="number"
                                min="1"
                                max="31"
                                placeholder="DD"
                                value={child.day}
                                onChange={(e) => updateChild(index, "day", e.target.value)}
                                required
                                className="text-center"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor={`child-${index}-year`} className="text-sm text-muted-foreground">
                                {locale === "en" ? "Year" : "年"}
                              </Label>
                              <Input
                                id={`child-${index}-year`}
                                type="number"
                                min="2017"
                                max={new Date().getFullYear()}
                                placeholder="YYYY"
                                value={child.year}
                                onChange={(e) => updateChild(index, "year", e.target.value)}
                                required
                                className="text-center"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button
                        type="button"
                        onClick={addChild}
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10"
                      >
                        + {locale === "en" ? "Add Another Child" : "新增子女"}
                      </Button>
                    </div>
                  </div>

                  {/* Start Date */}
                  <div className="border-t border-border pt-8">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-primary">
                      <Clock className="h-6 w-6" />
                      {locale === "en" ? "Timeline" : "時間規劃"}
                    </h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="tourDateTime">
                          {locale === "en" ? "Preferred Tour Date & Time" : "偏好參觀日期時間"}
                        </Label>
                        <Select value={tourDateTime} onValueChange={setTourDateTime} name="tourDateTime">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={locale === "en" ? "Select a tour time..." : "請選擇參觀時間..."} />
                          </SelectTrigger>
                          <SelectContent className="min-w-[320px]">
                            {fridaySlots.map((slot, index) => (
                              <SelectItem key={index} value={slot.value}>
                                {slot.display}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate">
                          {locale === "en" ? "Desired Start Date" : "期望開始日期"}
                        </Label>
                        <Select value={startDate} onValueChange={setStartDate} name="startDate">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={locale === "en" ? "Select..." : "請選擇..."} />
                          </SelectTrigger>
                          <SelectContent className="min-w-[200px]">
                            <SelectItem value="Within a Month">{locale === "en" ? "Within a Month" : "一個月內"}</SelectItem>
                            <SelectItem value="1-3 Months">{locale === "en" ? "1-3 Months" : "1-3 個月"}</SelectItem>
                            <SelectItem value="3-6 Months">{locale === "en" ? "3-6 Months" : "3-6 個月"}</SelectItem>
                            <SelectItem value="6-9 Months">{locale === "en" ? "6-9 Months" : "6-9 個月"}</SelectItem>
                            <SelectItem value="9+ Months">{locale === "en" ? "9+ Months" : "9 個月以上"}</SelectItem>
                            <SelectItem value="Unsure">{locale === "en" ? "Unsure at this time" : "尚未確定"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="border-t border-border pt-8">
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {locale === "en" ? "Comments or Questions" : "備註或問題"}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder={locale === "en" ? "What would you like to learn on your tour?" : "您想在參觀時了解什麼？"}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="border-t border-border pt-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary py-6 text-lg font-semibold text-white hover:bg-primary/90 disabled:opacity-50"
                    >
                      {isSubmitting
                        ? locale === "en"
                          ? "Sending..."
                          : "傳送中..."
                        : locale === "en"
                        ? "Schedule Tour"
                        : "預約參觀"}
                    </Button>
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
