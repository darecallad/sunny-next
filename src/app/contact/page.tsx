"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  const { locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preferredLanguage, setPreferredLanguage] = useState("en");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      preferredLanguage: preferredLanguage,
      locale: locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          locale === "en"
            ? "Message sent successfully! We'll get back to you soon."
            : "訊息已成功發送！我們會盡快回覆您。",
          { duration: 5000 }
        );
        formRef.current?.reset();
        setPreferredLanguage("en");
      } else {
        toast.error(
          locale === "en"
            ? "Failed to send message. Please try again."
            : "發送訊息失敗，請重試。",
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
            backgroundImage: "url('/images/banners/staffbanner.webp')",
            backgroundPosition: "50% 40%"
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
              {locale === "en" ? "Contact Us" : "聯絡我們"}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
              {locale === "en"
                ? "We'd love to hear from you. Reach out with any questions."
                : "我們很樂意聽取您的意見。如有任何問題，請隨時聯絡我們。"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  {locale === "en" ? "Get in Touch" : "聯絡資訊"}
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:translate-x-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {locale === "en" ? "Phone" : "電話"}
                      </p>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:translate-x-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {locale === "en" ? "Email" : "電子郵件"}
                      </p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-slate-600 hover:text-amber-600 transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:translate-x-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {locale === "en" ? "Address" : "地址"}
                      </p>
                      <a
                        href="https://www.google.com/maps/place/Sunny+Child+Care+Center/@37.3951,-121.9113"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-green-600 transition-colors"
                      >
                        {siteConfig.contact.address}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group flex gap-4 rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:translate-x-1">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {locale === "en" ? "Hours" : "營業時間"}
                      </p>
                      <p className="text-slate-600">
                        {siteConfig.contact.hours[locale]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-2xl bg-white p-8 shadow-lg border border-blue-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                  <div className="relative z-10">
                    <h3 className="mb-3 text-xl font-bold text-slate-800">
                      {locale === "en" ? "Ready to visit?" : "準備好參觀了嗎？"}
                    </h3>
                    <p className="mb-6 text-slate-600">
                      {locale === "en" 
                        ? "Schedule a tour to see our campus in person." 
                        : "預約參觀，親自體驗我們的校園環境。"}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all"
                    >
                      <a href="/admission/tuition" className="flex items-center justify-center gap-2">
                        {locale === "en" ? "Schedule a Tour" : "預約參觀"}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-md overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-[length:200%_100%] animate-shimmer" />
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <MessageSquare className="h-6 w-6 text-amber-500" />
                        {locale === "en" ? "Send us a Message" : "發送訊息"}
                      </h2>
                      <p className="mt-2 text-slate-600">
                        {locale === "en" 
                          ? "Fill out the form below and we'll get back to you as soon as possible." 
                          : "請填寫下方表單，我們會盡快回覆您。"}
                      </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Name */}
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {locale === "en" ? "Name" : "姓名"} *
                          </Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                            placeholder={locale === "en" ? "Your name" : "請輸入您的姓名"}
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            {locale === "en" ? "Phone Number" : "聯絡電話"} *
                          </Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                            placeholder="(510) 333-5943"
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Email */}
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            {locale === "en" ? "Email Address" : "電子郵件"} *
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        {/* Preferred Language */}
                        <div className="space-y-2">
                          <Label htmlFor="preferredLanguage">
                            {locale === "en" ? "Preferred Language" : "首選語言"} *
                          </Label>
                          <Select
                            value={preferredLanguage}
                            onValueChange={setPreferredLanguage}
                            required
                          >
                            <SelectTrigger id="preferredLanguage" className="bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500">
                              <SelectValue placeholder={locale === "en" ? "Select language" : "選擇語言"} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="zh">中文</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {locale === "en" ? "Message" : "訊息內容"} *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="bg-slate-50 border-slate-200 focus:border-amber-500 focus:ring-amber-500"
                          placeholder={
                            locale === "en"
                              ? "Tell us about your inquiry..."
                              : "請告訴我們您的需求..."
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_100%] animate-shimmer text-white shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02] hover:shadow-amber-500/40 rounded-xl"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            {locale === "en" ? "Sending..." : "傳送中..."}
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
                            {locale === "en" ? "Send Message" : "發送訊息"}
                          </span>
                        )}
                      </Button>
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
