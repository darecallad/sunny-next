"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
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
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { 
  Calendar, 
  Clock, 
  Users, 
  Baby, 
  MessageSquare, 
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  CalendarCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

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
  const [bookingCounts, setBookingCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await fetch("/api/tour/availability");
        if (response.ok) {
          const data = await response.json();
          setBookingCounts(data);
        }
      } catch (error) {
        console.error("Failed to fetch availability", error);
      }
    };
    fetchAvailability();
  }, []);

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
    
    // Set minimum date to Jan 16, 2026
    const minDate = new Date("2026-01-16T00:00:00");
    
    // Start looking from the later of today or minDate
    const startDate = today < minDate ? minDate : today;
    
    const currentDay = startDate.getDay(); // 0 = Sunday, 5 = Friday
    
    // Calculate days until next Friday
    let daysUntilFriday = (5 - currentDay + 7) % 7;
    
    if (daysUntilFriday === 0 && startDate.toDateString() === today.toDateString()) {
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
      const targetDate = new Date(startDate);
      targetDate.setDate(startDate.getDate() + daysUntilFriday + (weekOffset * 7));
      
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
        const morningCount = bookingCounts[morningValue] || 0;
        const isMorningFull = morningCount >= 4;
        
        slots.push({ 
          display: isMorningFull ? `${morningDisplay} (Full)` : morningDisplay, 
          value: morningValue,
          disabled: isMorningFull
        });
        
        // Afternoon slot: 3:30 PM - English Tour
        const afternoonTime = locale === "en" ? "3:30 PM" : "下午 3:30";
        const afternoonTour = locale === "en" ? "English Tour" : "英文 Tour";
        const afternoonDisplay = locale === "en" 
          ? `${month}/${day} ${weekday} ${afternoonTime} - ${afternoonTour}`
          : `${month}/${day} ${weekday} ${afternoonTime} ${afternoonTour}`;
        const afternoonValue = `${dateString} Friday 3:30 PM - English Tour`;
        const afternoonCount = bookingCounts[afternoonValue] || 0;
        const isAfternoonFull = afternoonCount >= 4;
        
        slots.push({ 
          display: isAfternoonFull ? `${afternoonDisplay} (Full)` : afternoonDisplay, 
          value: afternoonValue,
          disabled: isAfternoonFull
        });
        
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banners/booking.jpg')",
            backgroundPosition: "50% 70%"
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              {locale === "en" ? "Schedule a Visit" : "預約參觀"}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
              {locale === "en" 
                ? "Come see our classrooms, meet our teachers, and ask questions." 
                : "歡迎參觀我們的教室，認識我們的老師，並提出您的問題。"}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">
                  {locale === "en" ? "Why Tour Sunny?" : "為什麼要參觀 Sunny？"}
                </h2>
                <div className="space-y-6">
                  <div className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white hover:shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-800 mb-1">
                        {locale === "en" ? "Meet the Teachers" : "認識老師"}
                      </h3>
                      <p className="text-slate-600">
                        {locale === "en" 
                          ? "See our passionate educators in action and how they interact with children." 
                          : "親眼看看我們充滿熱情的教育工作者如何與孩子互動。"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white hover:shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-800 mb-1">
                        {locale === "en" ? "Experience the Environment" : "體驗環境"}
                      </h3>
                      <p className="text-slate-600">
                        {locale === "en" 
                          ? "Walk through our safe, clean, and stimulating classrooms and play areas." 
                          : "參觀我們安全、乾淨且充滿啟發性的教室和遊戲區。"}
                      </p>
                    </div>
                  </div>

                  <div className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white hover:shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-800 mb-1">
                        {locale === "en" ? "Ask Questions" : "提問"}
                      </h3>
                      <p className="text-slate-600">
                        {locale === "en" 
                          ? "Get detailed answers about our curriculum, schedule, and philosophy." 
                          : "詳細了解我們的課程、時間表和教育理念。"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full" />
                  <h3 className="font-semibold text-lg text-slate-800 mb-6 relative z-10">
                    {locale === "en" ? "Contact Information" : "聯絡資訊"}
                  </h3>
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center gap-4 text-slate-600 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <MapPin className="w-5 h-5 text-blue-500" />
                      </div>
                      <span>{siteConfig.contact.address}</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <Phone className="w-5 h-5 text-blue-500" />
                      </div>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-blue-600 transition-colors font-medium">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <Mail className="w-5 h-5 text-blue-500" />
                      </div>
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-blue-600 transition-colors font-medium">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-md overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_100%] animate-shimmer" />
                  <CardContent className="p-6 md:p-8 relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Parent Information */}
                      <div>
                        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-slate-800 border-b pb-2">
                          <Users className="h-5 w-5 text-blue-500" />
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
                              className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
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
                              className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
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
                              className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
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
                              className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Child Information */}
                      <div>
                        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-slate-800 border-b pb-2">
                          <Baby className="h-5 w-5 text-blue-500" />
                          {locale === "en" ? "Child Information" : "子女資訊"} *
                        </h2>
                        <div className="space-y-4">
                          {children.map((child, index) => (
                            <div key={index} className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all hover:border-blue-200">
                              <div className="mb-4 flex items-center justify-between">
                                <p className="font-medium text-slate-700">
                                  {locale === "en" ? `Child ${index + 1} - Date of Birth` : `子女 ${index + 1} - 出生日期`}
                                </p>
                                {children.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeChild(index)}
                                    className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
                                  >
                                    {locale === "en" ? "Remove" : "移除"}
                                  </button>
                                )}
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-1">
                                  <Label htmlFor={`child-${index}-month`} className="text-xs text-slate-500 uppercase tracking-wider">
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
                                    className="text-center bg-white"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <Label htmlFor={`child-${index}-day`} className="text-xs text-slate-500 uppercase tracking-wider">
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
                                    className="text-center bg-white"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <Label htmlFor={`child-${index}-year`} className="text-xs text-slate-500 uppercase tracking-wider">
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
                                    className="text-center bg-white"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                          <Button
                            type="button"
                            onClick={addChild}
                            variant="outline"
                            className="w-full border-dashed border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                          >
                            + {locale === "en" ? "Add Another Child" : "新增子女"}
                          </Button>
                        </div>
                      </div>

                      {/* Start Date */}
                      <div>
                        <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-slate-800 border-b pb-2">
                          <Clock className="h-5 w-5 text-blue-500" />
                          {locale === "en" ? "Timeline" : "時間規劃"}
                        </h2>
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="tourDateTime">
                              {locale === "en" ? "Preferred Tour Date & Time" : "偏好參觀日期時間"}
                            </Label>
                            <Select value={tourDateTime} onValueChange={setTourDateTime} name="tourDateTime">
                              <SelectTrigger className="w-full bg-slate-50 border-slate-200">
                                <SelectValue placeholder={locale === "en" ? "Select a tour time..." : "請選擇參觀時間..."} />
                              </SelectTrigger>
                              <SelectContent className="min-w-[320px]">
                                {fridaySlots.map((slot, index) => (
                                  <SelectItem key={index} value={slot.value} disabled={slot.disabled}>
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
                              <SelectTrigger className="w-full bg-slate-50 border-slate-200">
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
                      <div>
                        <div className="space-y-2">
                          <Label htmlFor="message">
                            {locale === "en" ? "Comments or Questions" : "備註或問題"}
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder={locale === "en" ? "What would you like to learn on your tour?" : "您想在參觀時了解什麼？"}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-shimmer text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-blue-500/40 rounded-xl"
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
