"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { locale } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="relative bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <p className="text-sm font-semibold sm:text-base lg:text-lg">
              {locale === "en" ? (
                <>
                  🎉 <span className="font-bold">Coming February 2026:</span> New location opening in Cupertino!
                </>
              ) : (
                <>
                  🎉 <span className="font-bold">2026年2月開幕：</span>Cupertino 新校區即將登場！
                </>
              )}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full text-secondary-foreground hover:bg-black/5"
            onClick={() => setIsVisible(false)}
            aria-label={locale === "en" ? "Close announcement" : "關閉公告"}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
