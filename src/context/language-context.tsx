"use client";

import { createContext, useContext, useState } from "react";

import type { Locale } from "@/data/site";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("sunny-locale") as Locale | null;
      if (stored === "en" || stored === "zh") {
        return stored;
      }
    }
    return "en";
  });

  const updateLocale = (value: Locale) => {
    setLocale(value);
    window.localStorage.setItem("sunny-locale", value);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: updateLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
