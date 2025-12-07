"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "zh" : "en";
    setLocale(nextLocale);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`
        h-9 min-w-[3.5rem] rounded-full border border-white/20 bg-white/10 
        px-3 text-sm font-bold text-white shadow-sm backdrop-blur-sm 
        transition-all hover:bg-white/20 hover:text-white hover:border-white/40
        ${className}
      `}
      aria-label={locale === "en" ? "Switch to Chinese" : "Switch to English"}
    >
      {locale === "en" ? "中文" : "EN"}
    </Button>
  );
}
