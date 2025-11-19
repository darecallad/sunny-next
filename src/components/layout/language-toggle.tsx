"use client";

import { Button } from "@/components/ui/button";
import { localeLabels, locales, type Locale } from "@/data/site";
import { useLanguage } from "@/context/language-context";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  const handleToggle = (value: Locale) => {
    if (value !== locale) {
      setLocale(value);
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/30 bg-[#324f7a]/70 p-1 text-xs font-semibold uppercase shadow-lg shadow-black/20 md:p-1 ${className}`}
    >
      {locales.map((value) => (
        <Button
          key={value}
          type="button"
          size="sm"
          variant="ghost"
          className={
            locale === value
              ? "h-7 rounded-full bg-[#f2a63b] px-3 text-[#1f2b3d] shadow md:h-9 md:px-5"
              : "h-7 rounded-full px-3 text-white/70 hover:text-white md:h-9 md:px-4"
          }
          onClick={() => handleToggle(value)}
        >
          {localeLabels[value]}
        </Button>
      ))}
    </div>
  );
}
