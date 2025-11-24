"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            {locale === "en" ? "Contact Us" : "聯絡我們"}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white/95">
            {locale === "en"
              ? "Have questions about our programs or enrollment? We're here to help. Fill out the form below and we'll get back to you as soon as possible."
              : "對我們的課程或入學有任何疑問嗎？我們隨時為您服務。請填寫下方表單，我們會盡快回覆您。"}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
            {/* Contact Information - 2 columns */}
            <div className="lg:col-span-2">
              <Card className="h-full bg-white shadow-lg">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold text-primary">
                    {locale === "en" ? "Get in Touch" : "聯絡資訊"}
                  </h2>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Phone className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">
                          {locale === "en" ? "Phone" : "電話"}
                        </p>
                        <a
                          href="tel:+15103335943"
                          className="text-muted-foreground hover:text-primary"
                        >
                          (510) 333-5943
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Mail className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">
                          {locale === "en" ? "Email" : "電子郵件"}
                        </p>
                        <a
                          href="mailto:Center.admin@sunnychildcare.com"
                          className="text-muted-foreground hover:text-primary"
                        >
                          Center.admin@sunnychildcare.com
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                        <MapPin className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">
                          {locale === "en" ? "Address" : "地址"}
                        </p>
                        <a
                          href="https://www.google.com/maps/place/Sunny+Child+Care+Center/@37.3951,-121.9113"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          2586 Seaboard Ave<br />
                          San Jose, CA 95131
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                        <Clock className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">
                          {locale === "en" ? "Hours" : "營業時間"}
                        </p>
                        <p className="text-muted-foreground">
                          {locale === "en"
                            ? "Mon – Fri"
                            : "週一至週五"}
                          <br />
                          8:30 AM – 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 rounded-lg bg-secondary/20 p-6">
                    <p className="mb-4 font-semibold text-primary">
                      {locale === "en"
                        ? "Ready to visit?"
                        : "準備好參觀了嗎？"}
                    </p>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <a href="/admission/tuition">
                        {locale === "en" ? "Schedule a Tour" : "預約參觀"}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold text-primary">
                    {locale === "en" ? "Send us a Message" : "發送訊息"}
                  </h2>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                        placeholder={
                          locale === "en" ? "Your name" : "請輸入您的姓名"
                        }
                      />
                    </div>

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
                        placeholder={
                          locale === "en"
                            ? "your.email@example.com"
                            : "your.email@example.com"
                        }
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
                        placeholder={
                          locale === "en" ? "(510) 333-5943" : "(510) 333-5943"
                        }
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
                        <SelectTrigger id="preferredLanguage">
                          <SelectValue placeholder={locale === "en" ? "Select language" : "選擇語言"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="zh">中文</SelectItem>
                        </SelectContent>
                      </Select>
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
                        placeholder={
                          locale === "en"
                            ? "Tell us about your inquiry..."
                            : "請告訴我們您的問題..."
                        }
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary py-6 text-lg font-semibold text-white hover:bg-primary/90 disabled:opacity-50"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting
                        ? locale === "en"
                          ? "Sending..."
                          : "傳送中..."
                        : locale === "en"
                        ? "Send Message"
                        : "發送訊息"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
