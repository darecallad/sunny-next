import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/data/site";
import { LanguageProvider } from "@/context/language-context";
import { montserrat, notoSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://www.sunnychildcare.com"),
  icons: {
    icon: "/images/sunny-logomark.png",
    apple: "/images/sunny-logomark.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://www.sunnychildcare.com",
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${montserrat.variable} ${notoSans.variable} antialiased`}>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
