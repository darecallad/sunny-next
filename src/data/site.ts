import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BookOpenCheck,
  ChefHat,
  GraduationCap,
  Home,
  Languages,
  MessageCircleHeart,
  Users,
} from "lucide-react";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export type LocalizedString = Record<Locale, string>;

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export type NavItem = {
  title: LocalizedString;
  href?: string;
  description?: LocalizedString;
  badge?: LocalizedString;
  children?: NavItem[];
};

export type Feature = {
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
  accent?: string;
};

export type Testimonial = {
  quote: LocalizedString;
  author: string;
  role?: string;
  source?: LocalizedString;
  href?: string;
};

export const siteConfig = {
  name: "Sunny Child Care",
  nameZh: "中英雙語幼兒園",
  tagline: {
    en: "Mandarin-English immersion in San Jose",
    zh: "聖荷西中英雙語沉浸式課程",
  },
  description:
    "A bilingual childcare community where little explorers grow through curiosity, creativity, and care.",
  descriptionZh:
    "在聖荷西結合溫暖照顧與中英雙語教學，陪伴孩子自信探索、快樂成長。",
  contact: {
    phone: "(510) 333-5943",
    email: "Center.admin@sunnychildcare.com",
    address: "2586 Seaboard Ave, San Jose, CA 95131",
    hours: {
      en: "Mon – Fri · 8:30 a.m. – 6:00 p.m.",
      zh: "週一至週五 · 8:30 – 18:00",
    },
  },
  socials: [
    { title: "Instagram", href: "https://www.instagram.com/sunnychildcare" },
    { title: "Facebook", href: "https://www.facebook.com/sunnychildcare" },
    { title: "YouTube", href: "https://www.youtube.com/@sunnychildcare" },
  ],
};

export const navigation: NavItem[] = [
  {
    title: { en: "Our Center", zh: "園所介紹" },
    children: [
      {
        title: { en: "About Sunny", zh: "關於 Sunny" },
        href: "/about",
        description: {
          en: "Mission, vision, and campus",
          zh: "園所理念與校舍環境",
        },
      },
      {
        title: { en: "Our Staff", zh: "教學團隊" },
        href: "/about/our-staff",
        description: {
          en: "Meet the bilingual team",
          zh: "雙語師資介紹",
        },
      },
      {
        title: { en: "Photo Gallery", zh: "校園剪影" },
        href: "/about/photo-gallery",
        description: {
          en: "Peek inside our day",
          zh: "每日生活點滴",
        },
      },
      {
        title: { en: "Testimonials", zh: "家長回饋" },
        href: "/#testimonials",
        description: {
          en: "Stories from families",
          zh: "家長真實分享",
        },
      },
      {
        title: { en: "Location", zh: "交通與位置" },
        href: "/locations",
        description: {
          en: "Schedule an in-person tour",
          zh: "預約現場參觀",
        },
      },
    ],
  },
  {
    title: { en: "Programs", zh: "課程介紹" },
    children: [
      { title: { en: "Infant & Toddler", zh: "嬰幼班" }, href: "/programs/infant" },
      { title: { en: "Preschool", zh: "幼兒園" }, href: "/programs/preschool" },
      { title: { en: "TK / Kindergarten", zh: "學前 / 小學" }, href: "/programs/kindergarten" },
      { title: { en: "Summer", zh: "夏令營" }, href: "/summer" },
      { title: { en: "Menus", zh: "營養餐點" }, href: "/programs/menus" },
    ],
  },
  {
    title: { en: "Admission", zh: "入學資訊" },
    children: [
      { title: { en: "Process", zh: "入學流程" }, href: "/admission/process" },
      { title: { en: "Tuition & Openings", zh: "學費與名額" }, href: "/admission/tuition" },
      { title: { en: "Schedule a Tour", zh: "預約參觀" }, href: "/booking" },
    ],
  },
  { title: { en: "Resources", zh: "親職資源" }, href: "/resources" },
];

export const heroContent = {
  eyebrow: {
    en: "Mandarin-English Immersion",
    zh: "中英雙語沉浸",
  },
  title: {
    en: "Grow confident, curious, and bilingual",
    zh: "自信、好奇、雙語力一起綻放",
  },
  description: {
    en: "Sunny Child Care blends play-based academics, nutritious meals, and a bilingual community so every child feels at home while reaching their fullest potential.",
    zh: "Sunny 將遊戲式課程、營養熱食與家的溫度結合，讓孩子每天都期待上學。",
  },
  primaryCta: {
    label: { en: "Schedule a tour", zh: "預約參觀" },
    href: "/admission/tuition",
  },
  secondaryCta: {
    label: { en: "Download brochure", zh: "下載簡介" },
    href: "/resources",
  },
  stats: [
    {
      label: { en: "Families served", zh: "服務家庭" },
      value: { en: "400+", zh: "400+" },
    },
    {
      label: { en: "Teacher ratio", zh: "師生比" },
      value: { en: "1:6", zh: "1:6" },
    },
    {
      label: { en: "Warm meals", zh: "每日熱餐" },
      value: { en: "3 daily", zh: "每日 3 餐" },
    },
  ],
};

export const valueIntro = {
  eyebrow: {
    en: "Why Sunny Child Care",
    zh: "為何選擇 Sunny",
  },
  title: {
    en: "Everything a modern bilingual family needs—under one sunny roof.",
    zh: "雙語家庭需要的溫暖與專業，在 Sunny 一次到位",
  },
  body: {
    en: "Families choose us for immersive classrooms, wholesome meals, and transparent communication. Explore the pillars of our program.",
    zh: "沉浸式課程、營養餐點、即時溝通，貼近在地家庭的每個需求。",
  },
};

export const features: Feature[] = [
  {
    title: { en: "Bilingual immersion", zh: "中英雙語浸潤" },
    description: {
      en: "Native Mandarin and English educators weave vocabulary, stories, and songs into every routine for natural language growth.",
      zh: "中英教師在每個活動中融入詞彙、故事、歌謠，語言自然萌芽。",
    },
    icon: Languages,
  },
  {
    title: { en: "Home-like environment", zh: "像家一樣的環境" },
    description: {
      en: "Spacious classrooms, indoor gross-motor zones, and a secure campus help children feel safe while they explore.",
      zh: "寬敞教室、感統空間與嚴密安控，讓探索更安心。",
    },
    icon: Home,
  },
  {
    title: { en: "Play-first academics", zh: "玩中學的課程" },
    description: {
      en: "STEAM provocations, literacy circles, and project work build strong foundations without losing the joy of play.",
      zh: "結合 STEAM、共讀與專題探究，在玩樂中奠定學習力。",
    },
    icon: GraduationCap,
  },
  {
    title: { en: "Caring bilingual staff", zh: "專業雙語師資" },
    description: {
      en: "Low ratios and passionate teachers create consistent relationships with every child and family.",
      zh: "低師生比與熱情老師，與每個家庭建立信任連結。",
    },
    icon: Users,
  },
  {
    title: { en: "Wholesome nutrition", zh: "暖心營養餐" },
    description: {
      en: "Chef-designed menus feature warm lunches, hearty soups, organic milk, and seasonal fruit served family-style.",
      zh: "主廚設計的熱騰騰正餐、湯品與有機牛奶，守護孩子健康。",
    },
    icon: ChefHat,
  },
  {
    title: { en: "Transparent communication", zh: "即時親師互動" },
    description: {
      en: "Brightwheel updates, daily photos, and quick parent messaging keep you connected from drop-off to pick-up.",
      zh: "Brightwheel 即時訊息、照片與通知，隨時掌握孩子一天。",
    },
    icon: MessageCircleHeart,
  },
];

export const careHighlights: Feature[] = [
  {
    title: { en: "Infant & toddler", zh: "嬰幼探索" },
    description: {
      en: "Responsive routines, bilingual songs, and sensory invitations for ages 6–24 months.",
      zh: "6–24 個月專屬的彈性作息、雙語歌謠與感官遊戲。",
    },
    icon: Baby,
  },
  {
    title: { en: "Preschool explorers", zh: "幼兒探險" },
    description: {
      en: "Project-based investigations, social-emotional coaching, and pre-literacy foundations.",
      zh: "專題探究、情緒引導與前導識字，陪伴孩子全面成長。",
    },
    icon: BookOpenCheck,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "Our daughter sprints to the door every morning. She chats in both Mandarin and English now and brings home the sweetest crafts.",
      zh: "女兒每天衝著想上學，現在中英文都能自然表達，還常帶回驚喜作品。",
    },
    author: "Rachel W.",
    source: { en: "Parent Testimonial", zh: "家長分享" },
    href: "https://www.google.com/maps/place/Sunny+Child+Care+Center/@37.3789363,-121.940731,17z/data=!4m18!1m9!3m8!1s0x808fcbd7e7cb599b:0x5feb29d49ff1cc8d!2sSunny+Child+Care+Center!8m2!3d37.3789363!4d-121.9381561!9m1!1b1!16s%2Fg%2F11v9vt1x4y!3m7!1s0x808fcbd7e7cb599b:0x5feb29d49ff1cc8d!8m2!3d37.3789363!4d-121.9381561!9m1!1b1!16s%2Fg%2F11v9vt1x4y?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    quote: {
      en: "The teachers care about the whole child—healthy meals, social skills, and academics. Communication is instant and reassuring.",
      zh: "老師關心孩子的飲食、社交與學習，每天的即時回饋讓我們超安心。",
    },
    author: "Grace L.",
    source: { en: "Parent Testimonial", zh: "家長分享" },
    href: "https://www.google.com/maps/place/Sunny+Child+Care+Center/@37.3789363,-121.940731,17z/data=!4m18!1m9!3m8!1s0x808fcbd7e7cb599b:0x5feb29d49ff1cc8d!2sSunny+Child+Care+Center!8m2!3d37.3789363!4d-121.9381561!9m1!1b1!16s%2Fg%2F11v9vt1x4y!3m7!1s0x808fcbd7e7cb599b:0x5feb29d49ff1cc8d!8m2!3d37.3789363!4d-121.9381561!9m1!1b1!16s%2Fg%2F11v9vt1x4y?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    quote: {
      en: "It feels like an extended family. My son is thriving, confident, and so proud of his bilingual songs and poems!",
      zh: "這裡就像大家庭，孩子更自信，也會唱好多中英文童謠。",
    },
    author: "William C.",
    source: { en: "Parent Testimonial", zh: "家長分享" },
    href: "https://www.google.com/maps/place/Sunny+Child+Care+Center/@37.3789363,-121.940731,17z/data=!4m18!1m9!3m8!1s0x808fcbd7e7cb599b:0x5feb29d49ff1cc8d!2sSunny+Child+Care+Center!8m2!3d37.3789363!4d-121.9381561!9m1!1b1!16s%2Fg%2F11v9vt1x4y!3m7!1s0x808fcbd7e7cb599b:0x5feb29d49ff1cc8d!8m2!3d37.3789363!4d-121.9381561!9m1!1b1!16s%2Fg%2F11v9vt1x4y?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const spotlight = {
  videoId: "V-l9O8LTY7E",
  title: {
    en: "Live life with children",
    zh: "一起走進孩子的日常",
  },
  description: {
    en: "Take a two-minute tour of our San Jose campus and see how curiosity, culture, and care connect in every classroom.",
    zh: "透過 2 分鐘影片感受聖荷西校園氛圍，看看好奇心與文化如何在教室裡綻放。",
  },
  badge: { en: "Campus story", zh: "校園記錄" },
};

export const announcement = {
  badge: { en: "Now enrolling 2025", zh: "2025 新生招募" },
  title: {
    en: "New families receive 10% off the first three months when enrolled by December 31.",
    zh: "12/31 前完成入學，首三個月學費 9 折。",
  },
  href: "/discount",
};

export const ctaContent = {
  eyebrow: { en: "Book a visit", zh: "預約參觀" },
  title: {
    en: "Come see why Sunny feels like home.",
    zh: "親自體驗 Sunny 如何像家一樣溫暖。",
  },
  body: {
    en: "Tours run daily. We’ll walk you through classrooms, menus, and the Mandarin-English immersion experience.",
    zh: "每日皆提供導覽，帶您參觀教室、菜單與雙語沉浸課程。",
  },
  primaryCta: { label: { en: "Schedule a tour", zh: "預約參觀" }, href: "/booking" },
  secondaryLabel: { en: "Call admissions", zh: "電話洽詢" },
};
