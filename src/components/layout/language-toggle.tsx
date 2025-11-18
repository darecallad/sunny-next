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
      className={`inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 p-1 text-xs font-semibold uppercase shadow-lg shadow-black/10 ${className}`}
    >
      {locales.map((value) => (
        <Button
          key={value}
          type="button"
          size="sm"
          variant="ghost"
          className={
            locale === value
              ? "h-8 rounded-full bg-[#f2a63b] px-4 text-[#1f2b3d] shadow"
              : "h-8 rounded-full px-3 text-white/70 hover:text-white"
          }
          onClick={() => handleToggle(value)}
        >
          {localeLabels[value]}
        </Button>
      ))}
    </div>
  );
}
