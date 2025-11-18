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

export type NavItem = {
  title: string;
  href?: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  source?: string;
  href?: string;
};

export const siteConfig = {
  name: "Sunny Child Care",
  shortTagline: "Mandarin-English immersion in Santa Clara",
  description:
    "A bilingual childcare community where little explorers grow through curiosity, creativity, and care.",
  contact: {
    phone: "(408) 663-2573",
    email: "center.admin@sunnychildcare.com",
    address: "3455 Flora Vista Ave, Santa Clara, CA 95051",
    hours: "Mon–Fri · 7:30a – 6:00p",
  },
  socials: [
    { title: "Instagram", href: "https://www.instagram.com/sunnychildcare" },
    { title: "Facebook", href: "https://www.facebook.com/sunnychildcare" },
    { title: "YouTube", href: "https://www.youtube.com/@sunnychildcare" },
  ],
};

export const navigation: NavItem[] = [
  {
    title: "Our Center",
    children: [
      { title: "About Sunny", href: "/about", description: "Mission, vision, and campus" },
      { title: "Our Staff", href: "/about/our-staff", description: "Meet the bilingual team" },
      { title: "Photo Gallery", href: "/about/photo-gallery", description: "Peek inside our day" },
      { title: "Testimonials", href: "#testimonials", description: "Stories from families" },
      { title: "Location", href: "/locations", description: "Schedule an in-person tour" },
    ],
  },
  {
    title: "Programs",
    children: [
      { title: "Infant & Toddler", href: "/programs/infant" },
      { title: "Preschool", href: "/programs/preschool" },
      { title: "TK / Kindergarten", href: "/programs/kindergarten" },
      { title: "Summer", href: "/summer" },
      { title: "Menus", href: "/programs/menus" },
    ],
  },
  {
    title: "Admission",
    children: [
      { title: "Process", href: "/admission/process" },
      { title: "Tuition & Openings", href: "/admission/tuition" },
      { title: "Schedule a Tour", href: "/booking" },
    ],
  },
  { title: "Resources", href: "/resources" },
  { title: "Discounts", href: "/discount" },
];

export const heroContent = {
  eyebrow: "Mandarin-English Immersion",
  title: "Grow confident, curious, and bilingual",
  description:
    "Sunny Child Care blends play-based academics, nutritious meals, and a bilingual community so every child feels at home while reaching their fullest potential.",
  primaryCta: { label: "Schedule a tour", href: "/admission/tuition" },
  secondaryCta: { label: "Download brochure", href: "/resources" },
  stats: [
    { label: "Families served", value: "200+" },
    { label: "Teacher ratio", value: "1:6" },
    { label: "Warm meals", value: "3 daily" },
  ],
};

export const features: Feature[] = [
  {
    title: "Bilingual immersion",
    description:
      "Native Mandarin and English educators weave vocabulary, stories, and songs into every routine for natural language growth.",
    icon: Languages,
  },
  {
    title: "Home-like environment",
    description:
      "Spacious classrooms, indoor gross-motor zones, and a secure campus help children feel safe while they explore.",
    icon: Home,
  },
  {
    title: "Play-first academics",
    description:
      "STEAM provocations, literacy circles, and project work build strong foundations without losing the joy of play.",
    icon: GraduationCap,
  },
  {
    title: "Caring bilingual staff",
    description:
      "Low ratios and passionate teachers create consistent relationships with every child and family.",
    icon: Users,
  },
  {
    title: "Wholesome nutrition",
    description:
      "Chef-designed menus feature warm lunches, hearty soups, organic milk, and seasonal fruit served family-style.",
    icon: ChefHat,
  },
  {
    title: "Transparent communication",
    description:
      "Brightwheel updates, daily photos, and quick parent messaging keep you connected from drop-off to pick-up.",
    icon: MessageCircleHeart,
  },
];

export const careHighlights: Feature[] = [
  {
    title: "Infant & toddler",
    description: "Responsive routines, bilingual songs, and sensory invitations for ages 6–24 months.",
    icon: Baby,
  },
  {
    title: "Preschool explorers",
    description: "Project-based investigations, social-emotional coaching, and pre-literacy foundations.",
    icon: BookOpenCheck,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our daughter sprints to the door every morning. She chats in both Mandarin and English now and brings home the sweetest crafts.",
    author: "Rachel W.",
    source: "Yelp",
    href: "https://www.yelp.com/biz/sunny-house-daycare-sunnyvale",
  },
  {
    quote:
      "The teachers care about the whole child—healthy meals, social skills, and academics. Communication is instant and reassuring.",
    author: "Grace L.",
    source: "Parent Survey",
  },
  {
    quote:
      "It feels like an extended family. My son is thriving, confident, and so proud of his bilingual songs and poems!",
    author: "William C.",
    source: "Google Reviews",
  },
];

export const spotlight = {
  videoId: "V-l9O8LTY7E",
  title: "Live life with children",
  description:
    "Take a two-minute tour of our Santa Clara campus and see how curiosity, culture, and care connect in every classroom.",
  badge: "Campus story",
};

export const announcement = {
  badge: "Now enrolling 2025",
  title: "New families receive 10% off the first three months when enrolled by December 31.",
  href: "/discount",
};
