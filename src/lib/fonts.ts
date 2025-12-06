import { Montserrat, Noto_Sans_TC, Playfair_Display } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sunny-display",
  weight: ["400", "500", "600", "700"],
});

export const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-sunny-sans",
  weight: ["400", "500", "700"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});
