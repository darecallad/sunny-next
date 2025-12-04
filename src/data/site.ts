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
      { title: { en: "Menus", zh: "營養餐點" }, href: "/programs/menus" },
    ],
  },
  {
    title: { en: "Admission", zh: "入學資訊" },
    children: [
      { title: { en: "Process", zh: "入學流程" }, href: "/admission/process" },
      { title: { en: "Tuition & Openings", zh: "學費與名額" }, href: "/admission/tuition" },
      { title: { en: "Contact Us", zh: "聯絡我們" }, href: "/contact" },
    ],
  },
  { title: { en: "Resources", zh: "親職資源" }, href: "/resources" },
];

export const heroContent = {
  eyebrow: {
    en: "Mandarin-English Immersion in San Jose",
    zh: "聖荷西中英雙語沉浸",
  },
  title: {
    en: "Premier Bilingual (Mandarin-English) Daycare & Preschool in San Jose",
    zh: "自信、好奇、雙語力一起綻放",
  },
  description: {
    en: "Sunny Child Care provides top-rated bilingual childcare in San Jose. We blend play-based academics, nutritious meals, and a warm community for infants to kindergarten.",
    zh: "Sunny 將遊戲式課程、營養熱食與家的溫度結合，讓孩子每天都期待上學。",
  },
  primaryCta: {
    label: { en: "Schedule a tour", zh: "預約參觀" },
    href: "/admission/tuition",
  },
  secondaryCta: {
    label: { en: "About Sunny", zh: "關於我們" },
    href: "/about",
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
      value: { en: "3 meals a day", zh: "每日 3 餐" },
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
    en: "Tours run daily. We'll walk you through classrooms, menus, and the Mandarin-English immersion experience.",
    zh: "每日皆提供導覽，帶您參觀教室、菜單與雙語沉浸課程。",
  },
  primaryCta: { label: { en: "Schedule a tour", zh: "預約參觀" }, href: "/admission/tuition" },
  secondaryLabel: { en: "Call admissions", zh: "電話洽詢" },
};

export const aboutContent = {
  hero: {
    title: { en: "About Us", zh: "關於我們" },
    subtitle: {
      en: "At Sunny Child Care, we embrace the following principles:",
      zh: "在 Sunny，我們秉持以下核心理念：",
    },
  },
  principles: [
    {
      title: { en: "Health, Safety, and Wellness", zh: "健康、安全與福祉" },
      description: {
        en: "Safety and wellness is our top priority, and we take it very seriously. We leave no detail, big or small, unattended when it comes to ensuring the well-being of your children. You can trust that your child is in the most capable hands every day at our center.",
        zh: "安全與健康是我們的首要任務，我們非常重視這一點。無論大小細節，我們都不會忽略孩子的福祉。您可以放心，孩子每天都在我們最專業的照顧下。",
      },
    },
    {
      title: { en: "Fostering Personal Development", zh: "培養個人發展" },
      description: {
        en: "Education extends beyond acquiring knowledge; it's about nurturing the social and emotional growth that will serve children throughout their lives. In each of our classrooms, we create a micro-community where every child is supported in achieving success on their own terms.",
        zh: "教育不僅僅是知識的獲取；更重要的是培養社交和情感成長，這將陪伴孩子一生。在每個教室中，我們創造一個小型社群，讓每個孩子都能以自己的方式獲得成功。",
      },
    },
    {
      title: { en: "Teachers Who Become Family", zh: "像家人一樣的老師" },
      description: {
        en: "Our teachers are not just educators; they are caregivers who genuinely care. They go beyond the role of teaching, taking into account each child's unique needs. At Sunny Child Care, your child will find mentors who believe in them, instilling the confidence to explore new experiences and form meaningful friendships.",
        zh: "我們的老師不僅是教育者；他們是真心關懷的照顧者。他們超越教學角色，考慮每個孩子的獨特需求。在 Sunny，您的孩子會找到相信他們的導師，培養探索新體驗和建立有意義友誼的信心。",
      },
    },
  ],
  philosophy: {
    en: "We uphold these principles within a curriculum and philosophical framework that is rooted in play and research-based approaches.",
    zh: "我們在以遊戲和研究為基礎的課程和哲學框架中堅持這些原則。",
  },
  story: {
    title: { en: "Our Story", zh: "我們的故事" },
    paragraphs: [
      {
        en: "Established in 1995, our founders recognized the considerable challenges faced by working parents when it comes to childcare. What began as a large-scale childcare facility in Taiwan has evolved over the years. In 2009, we expanded our commitment to families by opening our first home-based childcare facility in the Bay Area.",
        zh: "成立於 1995 年，我們的創辦人認識到職場父母在育兒方面面臨的巨大挑戰。從台灣的大型托育機構開始，多年來不斷發展。2009 年，我們在灣區開設了第一家家庭式托育中心，擴大對家庭的承諾。",
      },
      {
        en: "At the core of our mission is the unwavering dedication to providing families with a nurturing and enriching environment that feels like a second home. We believe that a child's world expands with every step, crawl, roll, or hop into our classrooms.",
        zh: "我們的使命核心是堅定不移地為家庭提供一個像第二個家一樣的培育和豐富環境。我們相信，孩子的世界會隨著每一步、每一次爬行、滾動或跳躍進入我們的教室而擴展。",
      },
      {
        en: "Our classrooms and curriculums are meticulously designed to cater to the unique needs of each child. We're committed to helping children reach their full potential, fostering growth in intellect, emotional well-being, social skills, physical fitness, cognitive development, and cultural appreciation. All of this is offered through our immersive Mandarin-English program.",
        zh: "我們的教室和課程經過精心設計，以滿足每個孩子的獨特需求。我們致力於幫助孩子發揮最大潛力，促進智力、情感健康、社交技能、體能、認知發展和文化欣賞的成長。所有這些都通過我們的中英雙語沉浸式課程提供。",
      },
      {
        en: "With decades of experience in childcare, we've cultivated a safe and loving space that welcomes children from all backgrounds. We firmly place children's needs and interests at the heart of everything we do. Learning through play is at the forefront of our approach, and our highly-trained staff are not only dedicated teachers but also enthusiastic learners alongside the children.",
        zh: "憑藉數十年的托育經驗，我們培育了一個安全且充滿愛的空間，歡迎來自各種背景的孩子。我們堅定地將孩子的需求和興趣放在我們所做一切的核心。透過遊戲學習是我們方法的前沿，我們訓練有素的員工不僅是敬業的老師，也是與孩子一起學習的熱情學習者。",
      },
      {
        en: "Our mission is clear: to provide a nurturing, enriching, and supportive environment that promotes well-rounded development. We are proud to serve our community and look forward to being a trusted partner in your child's educational journey.",
        zh: "我們的使命很明確：提供一個培育、豐富和支持性的環境，促進全面發展。我們很自豪能夠為社區服務，並期待成為您孩子教育旅程中值得信賴的夥伴。",
      },
    ],
  },
};

export const admissionProcessContent = {
  hero: {
    title: { en: "Admission Process", zh: "入學流程" },
  },
  steps: [
    {
      title: { en: "Step 1: Campus Visit", zh: "第一步：校園參觀" },
      description: {
        en: "Hello! We're excited to meet your family as you explore our admissions process. To start, simply request a tour of our facility. Our Admissions team will contact you to arrange a date and time that suits your schedule.",
        zh: "您好！我們很高興在您探索入學流程時與您的家庭見面。首先，只需申請參觀我們的校園。我們的招生團隊會與您聯繫，安排適合您的日期和時間。",
      },
    },
    {
      title: { en: "Step 2: Application or Waitlist", zh: "第二步：申請或候補名單" },
      description: {
        en: "Following your visit, you can complete our online application form or join our waitlist by submitting a waitlist application form. Our team will carefully review your application and may contact you with any questions to facilitate the enrollment process.",
        zh: "參觀後，您可以填寫我們的線上申請表，或提交候補名單申請表加入我們的候補名單。我們的團隊會仔細審查您的申請，如有任何問題會與您聯繫，以促進入學流程。",
      },
    },
    {
      title: { en: "Step 3: Enrollment", zh: "第三步：註冊入學" },
      description: {
        en: "Upon successful application review and based on program availability, your child will receive an admission offer. If your child is offered enrollment, we will send you an enrollment invitation. You'll be required to complete necessary paperwork and make payments (registration fee, material fee, and security deposit) via Brightwheel to secure your child's spot. In cases where the desired program is full, your child will be added to a waitlist based on their application date.",
        zh: "在成功審查申請並根據課程名額後，您的孩子將收到入學通知。如果您的孩子獲得入學資格，我們會向您發送註冊邀請。您需要完成必要的文件並透過 Brightwheel 支付費用（註冊費、材料費和押金）以確保您孩子的名額。如果所需課程已滿，您的孩子將根據申請日期加入候補名單。",
      },
    },
    {
      title: { en: "Step 4: Becoming Part of the Community", zh: "第四步：成為社區的一員" },
      description: {
        en: "Once you accept the program enrollment, we will provide you with additional information, including a parent's handbook. You can also schedule preparation days for your child to meet teachers and ease their transition to school. We eagerly anticipate welcoming your child into our community.",
        zh: "一旦您接受課程註冊，我們會為您提供更多資訊，包括家長手冊。您還可以安排準備日，讓您的孩子與老師見面，輕鬆過渡到學校。我們熱切期待歡迎您的孩子加入我們的社區。",
      },
    },
  ],
};

export const programsContent = {
  infant: {
    hero: {
      title: { en: "Infant Care & Daycare in San Jose", zh: "聖荷西嬰兒托育與照顧" },
    },
    description: [
      {
        en: "Infants are naturally inclined to learn and exhibit unique developmental patterns. The initial years of life are a remarkable phase for human development.",
        zh: "嬰兒天生就有學習的傾向，並展現出獨特的發展模式。生命的最初幾年是人類發展的關鍵階段。",
      },
      {
        en: "At Sunny Child Care, we take a proactive approach to assess and foster the cognitive and physical growth of our infants and toddlers in a nurturing environment, laying a strong foundation for their future success in both school and life.",
        zh: "在 Sunny，我們採取積極的方法，在培育環境中評估和促進嬰幼兒的認知和身體成長，為他們在學校和生活中的未來成功奠定堅實的基礎。",
      },
      {
        en: "As early childhood educators and caregivers, we employ developmental domains to support various facets of each child's overall development. Grouping related behaviors and skills into these domains allows us to readily evaluate each child's progress. Our exclusive infant and toddler curriculum relies on four key developmental domains: Cognitive, Perceptual Motor, Speech & Language, and Social Intelligence.",
        zh: "作為幼兒教育者和照顧者，我們運用發展領域來支持每個孩子整體發展的各個方面。將相關的行為和技能分組到這些領域中，使我們能夠輕鬆評估每個孩子的進步。我們專屬的嬰幼兒課程依賴於四個關鍵發展領域：認知、感知運動、語言和社交智能。",
      },
    ],
    scheduleTitle: { en: "Infant & Young Toddler Daily Schedule", zh: "嬰幼兒每日作息表" },
    schedule: [
      { time: "08:30 - 09:15 am", activity: "Arrival / Free Play Time", isBold: false },
      { time: "09:15 - 09:30 am", activity: "Clean up / Wash hands / Diaper Checks", isBold: false },
      { time: "09:30 - 10:00 am", activity: "Snack Time / Water Time / Get ready for outside", isBold: false },
      { time: "10:00 - 10:30 am", activity: "Playground Time", isBold: true },
      { time: "10:30 - 10:45 am", activity: "Change shoes / Wash hands / Water Time", isBold: false },
      { time: "10:45 - 11:00 am", activity: "Morning Circle Time (English/ Chinese)", isBold: true },
      { time: "11:00 - 11:30 am", activity: "Structured Activity - Sensory / Art", isBold: true },
      { time: "11:30 - 12:15 pm", activity: "Clean up / Wash Hands / Lunchtime / Water Time", isBold: false },
      { time: "12:15 - 12:45 pm", activity: "Diaper Checks / Prepare Cots", isBold: false },
      { time: "12:45 - 01:00 pm", activity: "Bedtime Story", isBold: true },
      { time: "01:00 - 03:00 pm", activity: "Nap Time", isBold: false },
      { time: "03:00 - 03:30 pm", activity: "Getting Up / Diaper Checks / Water Time", isBold: false },
      { time: "03:30 - 03:45 pm", activity: "Afternoon Circle Time (English / Chinese)", isBold: true },
      { time: "03:45 - 04:15 pm", activity: "Playground Time", isBold: true },
      { time: "04:15 - 05:00 pm", activity: "Change shoes / Wash hands/ Dinnertime / Water Time", isBold: false },
      { time: "05:00 - 05:15 pm", activity: "Music / Movement Time", isBold: true },
      { time: "05:15 - 05:30 pm", activity: "Diaper Checks / Water Time", isBold: false },
      { time: "05:30 - 06:00 pm", activity: "Free Play Time and Clean Up", isBold: false },
    ],
    note: { 
      en: "Infants are on their own schedule for eating and sleeping; diaper checks every two hours.",
      zh: "嬰兒按照自己的時間表進食和睡覺；每兩小時檢查尿布。"
    },
  },
  preschool: {
    hero: {
      title: { en: "Bilingual (Mandarin/English) Preschool in San Jose", zh: "聖荷西中英雙語幼兒園" },
    },
    description: [
      {
        en: "Between the ages of 2 and 6, children undergo significant growth. They enhance their physical coordination, consolidate ideas, grasp more intricate games, and embark on a journey of self-discovery and social interaction.",
        zh: "在 2 到 6 歲之間，兒童經歷顯著的成長。他們增強身體協調能力，鞏固想法，掌握更複雜的遊戲，並踏上自我發現和社交互動的旅程。",
      },
      {
        en: "Encouraging playful learning is the most effective method to help children remember and subsequently apply the concepts they acquire. At Sunny Child Care, we seamlessly integrate play and performing arts into our daily activities.",
        zh: "鼓勵遊戲式學習是幫助孩子記住並隨後應用所學概念的最有效方法。在 Sunny，我們將遊戲和表演藝術無縫整合到日常活動中。",
      },
      {
        en: "Additionally, we introduce and progressively expand foreign language exposure within our preschool curriculum. Our dedicated teachers offer individualized attention to cater to the specific needs of each child, ensuring a well-rounded and personalized learning experience.",
        zh: "此外，我們在幼兒園課程中引入並逐步擴大外語接觸。我們敬業的老師提供個性化關注，滿足每個孩子的特定需求，確保全面和個性化的學習體驗。",
      },
    ],
    scheduleTitle: { en: "Preschool Daily Schedule", zh: "幼兒園每日作息表" },
    schedule: [
      { time: "08:30 - 09:15 am", activity: "Arrival / Free Play Time", isBold: false },
      { time: "09:15 - 09:45 am", activity: "Table Activities / Work Time", isBold: true },
      { time: "09:45 - 10:00 am", activity: "Clean up / Wash hands / Bathroom & Diaper Checks", isBold: false },
      { time: "10:00 - 10:15 am", activity: "Snack Time / Water Time / Get ready for outside", isBold: false },
      { time: "10:15 - 10:45 am", activity: "Playground Time", isBold: true },
      { time: "10:45 - 11:00 am", activity: "Change shoes / Wash hands / Water Time", isBold: false },
      { time: "11:00 - 11:30 am", activity: "Morning Circle Time (English/ Chinese)", isBold: true },
      { time: "11:30 - 11:45 am", activity: "Structured Activity - Sensory / Art", isBold: true },
      { time: "11:45 - 12:30 pm", activity: "Clean up / Wash hands/ Lunchtime / Water Time", isBold: false },
      { time: "12:30 - 01:00 pm", activity: "Bathroom & Diaper Checks / Prepare Cots", isBold: false },
      { time: "01:00 - 03:00 pm", activity: "Bedtime Story / Nap Time", isBold: false },
      { time: "03:00 - 03:15 pm", activity: "Getting Up / Bathroom & Diaper Check / Water Time", isBold: false },
      { time: "03:15 - 03:45 pm", activity: "Afternoon Circle Time (English / Chinese)", isBold: true },
      { time: "03:45 - 04:15 pm", activity: "Playground Time", isBold: true },
      { time: "04:15 - 05:00 pm", activity: "Change shoes / Wash hands/ Dinnertime / Water Time", isBold: false },
      { time: "05:00 - 05:15 pm", activity: "Music / Movement Time", isBold: true },
      { time: "05:15 - 05:45 pm", activity: "Free Play Time", isBold: false },
      { time: "05:45 - 06:00 pm", activity: "Story Time and Clean Up (Classroom Merge)", isBold: true },
    ],
  },
  kindergarten: {
    hero: {
      title: { en: "Bilingual Kindergarten Prep & TK in San Jose", zh: "聖荷西幼小銜接與學前班" },
    },
    description: [
      {
        en: "Our kindergarten curriculum places a strong emphasis on cultivating fundamental skills, laying a solid groundwork that equips students for their future educational journey in subjects such as mathematics, science, social studies, and language arts.",
        zh: "我們的小學課程非常重視培養基本技能，奠定堅實的基礎，為學生在數學、科學、社會研究和語言藝術等科目的未來教育之旅做好準備。",
      },
      {
        en: "These foundational skills are essential not only for immediate academic success but also for fostering a lifelong love for learning and intellectual growth. Through a comprehensive and engaging curriculum, we aim to provide students with a well-rounded educational experience that nurtures their curiosity and fosters a deep understanding of the world around them.",
        zh: "這些基礎技能不僅對即時的學業成功至關重要，而且對於培養終身學習熱愛和智力成長也至關重要。通過全面而引人入勝的課程，我們旨在為學生提供全面的教育體驗，培養他們的好奇心，並促進對周圍世界的深入理解。",
      },
    ],
    scheduleTitle: { en: "Pre-K / TK / Kindergarten Daily Schedule", zh: "學前班每日作息表" },
    schedule: [
      { time: "08:30 - 09:00 am", activity: "Arrival / Free Play Time", isBold: false },
      { time: "09:00 - 09:45 am", activity: "Table Activities / Work Time", isBold: true },
      { time: "09:45 - 10:00 am", activity: "Clean Up / Wash Hands / Bathroom Checks", isBold: false },
      { time: "10:00 - 10:15 am", activity: "Snack Time / Water Time / Get ready for circle", isBold: false },
      { time: "10:15 - 10:45 am", activity: "Morning Circle Time (English/ Chinese)", isBold: true },
      { time: "10:45 - 11:15 am", activity: "Structured Activity - STEAM", isBold: true },
      { time: "11:15 - 11:30 am", activity: "Change Shoes / Water Time", isBold: false },
      { time: "11:30 - 12:00 pm", activity: "Playground Time", isBold: true },
      { time: "12:00 - 12:45 pm", activity: "Change Shoes / Wash Hands / Lunchtime", isBold: false },
      { time: "12:45 - 01:00 pm", activity: "Bathroom Checks / Prepare Cots", isBold: false },
      { time: "01:00 - 01:15 pm", activity: "Group Reading", isBold: true },
      { time: "01:15 - 02:30 pm", activity: "Nap Time, Non-Napper: Reading / Writing", isBold: false },
      { time: "02:30 - 02:45 pm", activity: "Getting Up / Bathroom Checks / Get ready for outdoor", isBold: false },
      { time: "02:45 - 03:15 pm", activity: "Playground Time", isBold: true },
      { time: "03:15 - 03:30 pm", activity: "Change Shoes / Wash Hands / Bathroom Checks / Water Time", isBold: false },
      { time: "03:30 - 03:45 pm", activity: "Afternoon Circle Time (English / Chinese)", isBold: true },
      { time: "03:45 - 04:15 pm", activity: "Group Work Time", isBold: true },
      { time: "04:15 - 05:00 pm", activity: "Change shoes / Wash hands/ Dinnertime / Water Time", isBold: false },
      { time: "05:00 - 05:15 pm", activity: "Music / Movement Time", isBold: true },
      { time: "05:15 - 05:45 pm", activity: "Free Play Time", isBold: false },
      { time: "05:45 - 06:00 pm", activity: "Story Time and Clean Up (Classroom Merge)", isBold: true },
    ],
  },
  menus: {
    hero: {
      title: { en: "Menus", zh: "營養餐點" },
    },
    description: {
      en: "Our meal plans for children are carefully crafted to meet their unique nutritional requirements and support their growth and development. These meal plans are thoughtfully designed to provide a balanced and wholesome diet that includes a variety of food groups, ensuring that children receive the essential nutrients they need for optimal health.",
      zh: "我們為兒童精心設計的餐點計劃旨在滿足他們獨特的營養需求，支持他們的成長和發展。這些餐點計劃經過精心設計，提供均衡和健康的飲食，包括多種食物類別，確保兒童獲得最佳健康所需的基本營養素。",
    },
    downloadText: { en: "Download Menu", zh: "下載菜單" },
    downloadLink: "https://drive.google.com/file/d/1km_8gzJTu_f8Cza7CiJVWbbfQQvSHjFx/view?usp=drive_link",
  },
};

export const resourcesContent = {
  hero: {
    title: { en: "Resources", zh: "親職資源" },
  },
  items: [
    {
      image: "/images/resources/brightwheel.jpeg",
      title: { en: "COMMUNICATION SYSTEM", zh: "溝通系統" },
      description: {
        en: "Sunny Child Care uses Brightwheel to connect with parents all day, every day!",
        zh: "Sunny 使用 Brightwheel 每天與家長保持聯繫！",
      },
      buttonText: { en: "Learn More", zh: "了解更多" },
      buttonLink: "https://mybrightwheel.com/solutions/parents/",
      isExternal: true,
    },
    {
      image: "/images/resources/calendar.jpeg",
      title: { en: "SCHOOL YEAR CALENDARS", zh: "學年行事曆" },
      description: {
        en: "Download our school year calendars to stay informed about important dates and events.",
        zh: "下載我們的學年行事曆，了解重要日期和活動。",
      },
      calendars: [
        {
          year: "2025/26",
          link: "https://drive.usercontent.google.com/u/0/uc?id=1GAXD8PXO4MhhAOrxjTPw9HJf7UeNKZQn&export=download",
        },
        {
          year: "2026/27",
          link: "https://drive.usercontent.google.com/u/0/uc?id=1tC4FhwbKbj-Lpbn6wz_LySrayMP6KOJX&export=download",
        },
      ],
    },
    {
      image: "/images/resources/parents.jpeg",
      title: { en: "For Our Parents", zh: "給家長" },
      description: {
        en: "You can access our parent handbook through Brightwheel portal.",
        zh: "您可以通過 Brightwheel 門戶訪問我們的家長手冊。",
      },
      buttonText: { en: "Parent Handbook", zh: "家長手冊" },
      buttonLink: "https://mybrightwheel.com/solutions/parents/",
      isExternal: true,
    },
  ],
};
