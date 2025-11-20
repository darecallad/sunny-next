<div id="top"></div>

# Sunny Child Care | 陽光雙語幼兒園

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

**Bilingual Mandarin-English Immersion Childcare Website** serving San Jose families with comprehensive programs for ages 0-6 years.

🌐 **Live Site**: [www.sunnychildcare.com](https://www.sunnychildcare.com)

[Documentation](docs/README.md) • [SEO Strategy](docs/seo-optimization.md) • [GEO Optimization](docs/geo-local-seo.md) • [Changelog](docs/CHANGELOG.md)

</div>

---

## 📑 快速導航 (Quick Navigation)

<table>
<tr>
<td width="25%" align="center">

### 🎯 [核心功能](#-features)
**Core Features**

</td>
<td width="25%" align="center">

### 🚀 [快速開始](#-getting-started)
**Quick Start**

</td>
<td width="25%" align="center">

### 📚 [文檔](#-documentation)
**Documentation**

</td>
<td width="25%" align="center">

### 🛠️ [技術棧](#️-tech-stack)
**Tech Stack**

</td>
</tr>
<tr>
<td width="25%" align="center">

### 📝 [更新日誌](docs/CHANGELOG.md)
**Changelog**

</td>
<td width="25%" align="center">

### 🔍 [SEO 優化](docs/seo-optimization.md)
**SEO Strategy**

</td>
<td width="25%" align="center">

### 🌐 [項目結構](#-project-structure)
**Structure**

</td>
<td width="25%" align="center">

### ⭐ [關於我們](#-about)
**About**

</td>
</tr>
</table>

---

## ✨ Features

### 🌐 Complete Bilingual Support (完整雙語支援)
- **Full English & Traditional Chinese** content across all 10+ pages
- **Instant Language Toggle** in header with persistent localStorage
- **Culturally Adapted** content optimized for both audiences
- **Noto Sans TC Font** for authentic Chinese typography

### 📋 Interactive Tour Booking System
- **Comprehensive Form**: Parent info, child details, preferred dates with time slots
- **Google Calendar Integration**: Automatic calendar events with .ics attachments
- **One-Click Calendar**: "Add to Google Calendar" button in emails
- **Smart Reminders**: 24-hour advance notifications
- **Email Integration**: Nodemailer with Gmail SMTP
- **Dual Notifications**: Automatic emails to both admin and parents
- **Toast Notifications**: Sonner toast library for user feedback
- **shadcn/ui Components**: Modern Input, Label, Textarea, Select components

### 🎓 Complete Program Information
- **Infant & Toddler** (Ages 0-3): Nurturing care with bilingual exposure
- **Preschool** (Ages 2-6): Play-based learning with Mandarin-English immersion
- **Pre-K/TK/Kindergarten** (Ages 4-6): School readiness with STEAM curriculum
- **Nutritious Menus**: Chef-designed meals with organic options
- **Daily Schedules**: Detailed 18-21 time slot schedules for each program

### 🎨 Modern UI/UX Design
- **Mobile-First Approach**: Fully responsive across all devices
- **shadcn/ui Integration**: 11 high-quality components (Button, Card, Badge, Input, Select, etc.)
- **Custom Brand Colors**: Navy (#324f7a) and Amber (#f2a63b) throughout
- **Smooth Animations**: Polished transitions and interactions
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation

### 📍 Location & Contact
- **Google Maps Integration**: Embedded interactive map
- **Complete Contact Info**: Address, phone, email, hours
- **Service Area**: 2586 Seaboard Ave, San Jose, CA 95131
- **Operating Hours**: Mon-Fri 8:30am-6pm

### 🔍 SEO & Local Search Optimization
- **San Jose Local SEO**: All 12 pages optimized for "San Jose, CA 95131"
- **Geographic Targeting**: Full address (2586 Seaboard Ave) on key pages
- **Google Search Console**: Verified and indexed
- **Comprehensive Metadata**: All pages with optimized titles, descriptions, keywords
- **Open Graph Tags**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **LocalBusiness Schema**: JSON-LD structured data for Google
- **Sitemap.xml**: Submitted with 12 routes
- **Robots.txt**: Optimized crawling directives
- **Target Keywords**: 80+ location-specific keywords including "childcare San Jose 95131", "bilingual preschool San Jose"

### 📱 Performance Optimized
- **Next.js 16**: Latest App Router with Server Components
- **Image Optimization**: Next/Image with WebP and AVIF support
- **Fast Loading**: Optimized bundle size and code splitting
- **TypeScript**: Type-safe development
- **ESLint**: Code quality and consistency

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.0.3** - React framework with App Router and Turbopack
- **React 19.2** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development environment

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS with custom design tokens
- **shadcn/ui** - 11 high-quality React components
  - Button, Card, Badge, NavigationMenu, Sheet, Separator
  - Input, Label, Textarea, Select (with sub-components), Sonner
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful, consistent icon library
- **Noto Sans TC** - Professional Traditional Chinese font

### Backend & Integration
- **Nodemailer 7** - Email sending library with calendar attachments
- **iCalendar (RFC 5545)** - Standard .ics file generation
- **Google Calendar API** - URL-based event creation
- **Gmail SMTP** - Email service provider
- **Next.js API Routes** - Server-side API endpoints

### Development Tools
- **ESLint 9** - Code linting and quality
- **TypeScript Compiler** - Static type checking
- **dotenv** - Environment variable management

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.18+ or 20+
- **npm** 9+ or **pnpm**
- **Gmail Account** (for email functionality)

### 1. Clone & Install

```powershell
# Clone repository
git clone https://github.com/darecallad/sunny-next.git
cd sunny-next

# Install dependencies
npm install
```

### 2. Environment Setup

Create `.env.local` file in the root directory:

```env
# Gmail SMTP Configuration (Required for Tour Booking Form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_TO=Center.admin@sunnychildcare.com

# Optional: Custom SMTP settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

**Gmail App Password Setup** (2 minutes):
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate App Password for "Mail"
4. Copy the 16-character password to `EMAIL_PASSWORD`

### 3. Run Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Test the site:**
- ✅ Toggle between English and 中文
- ✅ Navigate through all 12 pages
- ✅ Submit tour booking form (check email with calendar button)
- ✅ Click "Add to Google Calendar" or download .ics attachment
- ✅ Test mobile responsive design

### 4. Test Email Functionality

```powershell
node scripts/test-email.js
```

Check your inbox for the test email.

### Additional Scripts

```powershell
npm run build        # Production build with optimization
npm run start        # Start production server
npm run lint         # Run ESLint checks
npx tsc --noEmit    # TypeScript type checking
```

---

## 📁 Project Structure

```
sunny-next/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage with hero, features, testimonials
│   │   ├── layout.tsx         # Root layout with LanguageProvider + GSC verification
│   │   ├── globals.css        # Global styles and Tailwind
│   │   ├── sitemap.ts         # Dynamic XML sitemap (12 routes)
│   │   ├── robots.ts          # Search engine directives
│   │   ├── about/
│   │   │   ├── page.tsx       # About Sunny with 3 principles
│   │   │   ├── layout.tsx     # About page SEO metadata (San Jose)
│   │   │   ├── our-staff/     # Staff page
│   │   │   └── photo-gallery/ # Gallery page
│   │   ├── admission/
│   │   │   ├── process/       # 4-step enrollment process
│   │   │   │   └── layout.tsx # Process page SEO metadata (San Jose)
│   │   │   └── tuition/       # Tour booking form with calendar integration
│   │   │       └── layout.tsx # Tuition page SEO metadata (San Jose)
│   │   ├── contact/
│   │   │   ├── page.tsx       # Contact page with Google Maps
│   │   │   └── layout.tsx     # Contact SEO metadata (San Jose 95131)
│   │   ├── locations/
│   │   │   ├── page.tsx       # Locations with Google Maps
│   │   │   └── layout.tsx     # Location SEO metadata (San Jose 95131)
│   │   ├── programs/
│   │   │   ├── infant/        # Infant & Toddler program
│   │   │   │   └── layout.tsx # Infant SEO metadata (San Jose)
│   │   │   ├── preschool/     # Preschool program
│   │   │   │   └── layout.tsx # Preschool SEO metadata (San Jose)
│   │   │   ├── kindergarten/  # Pre-K/TK/K program
│   │   │   │   └── layout.tsx # Kindergarten SEO metadata (San Jose)
│   │   │   └── menus/         # Nutrition & menus
│   │   │       └── layout.tsx # Menus SEO metadata (San Jose)
│   │   ├── resources/
│   │   │   ├── page.tsx       # Parent resources (4 cards)
│   │   │   └── layout.tsx     # Resources SEO metadata (San Jose)
│   │   └── api/
│   │       └── tour/
│   │           └── route.ts   # Tour booking with Google Calendar integration
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx    # Navigation with language toggle
│   │   │   ├── site-footer.tsx    # Footer with contact info
│   │   │   └── language-toggle.tsx # EN/中文 switcher
│   │   ├── sections/
│   │   │   ├── announcement-banner.tsx # Cupertino Feb 2026 announcement
│   │   │   ├── hero-section.tsx       # Homepage hero
│   │   │   ├── value-grid.tsx         # 3 core values
│   │   │   ├── video-spotlight.tsx    # Video section
│   │   │   ├── testimonials.tsx       # Parent testimonials
│   │   │   └── cta-banner.tsx         # Call-to-action
│   │   ├── seo/
│   │   │   └── local-business-schema.tsx # JSON-LD schema
│   │   └── ui/                 # shadcn/ui components (11 total)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── sheet.tsx
│   │       ├── separator.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── textarea.tsx
│   │       ├── select.tsx
│   │       └── sonner.tsx
│   ├── context/
│   │   └── language-context.tsx    # Bilingual state management
│   ├── data/
│   │   └── site.ts            # All bilingual content (1200+ lines)
│   └── lib/
│       ├── email.ts           # Nodemailer configuration
│       ├── fonts.ts           # Google Fonts setup
│       └── utils.ts           # Utility functions (cn helper)
├── public/
│   ├── images/
│   │   ├── banners/           # 13 page banners (WebP + JPG)
│   │   │   ├── about.webp
│   │   │   ├── location.webp
│   │   │   ├── booking.jpg
│   │   │   ├── process.jpeg
│   │   │   ├── infant.webp
│   │   │   ├── preschool.webp
│   │   │   ├── kindergarten.webp
│   │   │   ├── menu.webp
│   │   │   ├── resources.jpg
│   │   │   ├── staff.webp
│   │   │   └── gallery.jpg
│   │   ├── about/             # 3 principle images
│   │   │   ├── health-safety.webp
│   │   │   ├── personal-development.webp
│   │   │   └── teachers-family.webp
│   │   ├── resources/         # 4 resource cards
│   │   │   ├── brightwheel.jpeg
│   │   │   ├── calendar.jpeg
│   │   │   ├── parents.jpeg
│   │   │   └── staff.jpeg
│   │   ├── Flogo.png          # Main bilingual logo
│   │   ├── hero-pexels.jpg    # Homepage hero image
│   │   └── sunny-logomark.png # Logomark (also favicon)
│   └── site.webmanifest       # PWA manifest
├── scripts/
│   └── test-email.js          # Email testing script
├── docs/
│   ├── README.md                        # Documentation index
│   ├── CHANGELOG.md                     # Detailed project history
│   ├── seo-optimization.md              # SEO strategy and tracking
│   ├── geo-local-seo.md                 # San Jose local SEO guide
│   ├── google-calendar-integration.md   # Calendar integration docs
│   ├── google-search-console-quick-start.md # GSC setup (Chinese)
│   └── seo-mobile-optimization.md       # Mobile SEO guide
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind configuration
├── components.json            # shadcn/ui configuration
└── .env.local                 # Environment variables (create this)
```

**Detailed Documentation**: [docs/README.md](docs/README.md)

---

## 📚 Documentation

### For New Team Members
Start here to understand the project:

1. **[Documentation Index](docs/README.md)** - Complete overview and quick start
2. **[Changelog](docs/CHANGELOG.md)** - Detailed project history and recent updates
3. **[SEO Strategy](docs/seo-optimization.md)** - Search optimization plan and progress
4. **[GEO Local SEO](docs/geo-local-seo.md)** - San Jose geographic targeting strategy
5. **[Google Calendar Integration](docs/google-calendar-integration.md)** - Tour booking automation

### For Developers

1. **[Changelog - Completed Section](docs/CHANGELOG.md)** ⭐ - See what's been built
2. **[Changelog - In Progress](docs/CHANGELOG.md)** - Current work and pending tasks
3. **Technical Stack** - See [Tech Stack](#️-tech-stack) section above
4. **Component Library** - Explore `src/components/ui/` for shadcn components

### For Content Managers

1. **[Content Data File](src/data/site.ts)** - All bilingual content in one place
2. **Image Assets** - See `public/images/` directory structure
3. **Update Process**: Edit `site.ts` → Test locally → Deploy

### Key Documentation Files

- **[README.md](docs/README.md)** - Documentation hub with quick start guide
- **[CHANGELOG.md](docs/CHANGELOG.md)** - Complete project history (November 19, 2025)
  - Post-launch refinements (announcement banner, logo design, SEO)
  - San Jose local SEO optimization (all 12 pages)
  - Google Search Console verification
  - Google Calendar integration
- **[seo-optimization.md](docs/seo-optimization.md)** - SEO strategy document
  - 80+ San Jose-specific keywords
  - Page-by-page optimization plan
  - Implementation progress tracking
- **[geo-local-seo.md](docs/geo-local-seo.md)** - Geographic targeting guide
  - Four-tier keyword strategy
  - NAP consistency guidelines
  - LocalBusiness schema
  - Competitive analysis
- **[google-calendar-integration.md](docs/google-calendar-integration.md)** - Calendar automation
  - .ics file generation
  - Google Calendar URL integration
  - 24-hour reminders
  - Testing checklist

📖 **Always check [CHANGELOG.md](docs/CHANGELOG.md) first when resuming development!**

---

## 🔍 SEO Optimization Status

### ✅ Completed (November 19, 2025)
- **12/12 Pages** with San Jose local SEO optimization
- **Google Search Console** verified and sitemap submitted
- **80+ Location Keywords**: "San Jose", "San Jose, CA 95131", "2586 Seaboard Ave"
- **LocalBusiness Schema** (JSON-LD) on homepage
- **Open Graph** and **Twitter Card** tags on all pages
- **Sitemap.xml** with 12 routes submitted to GSC
- **Robots.txt** with optimized crawling directives
- **Image Alt Text** for all images with descriptive text
- **Canonical URLs** to prevent duplicate content issues

### 🎯 Target Keywords (San Jose Local)
- **Primary**: childcare San Jose 95131, bilingual preschool San Jose, daycare Seaboard Ave
- **Secondary**: infant care San Jose, toddler daycare San Jose, kindergarten prep San Jose
- **Geographic**: near me, San Jose CA, 95131 ZIP code

### 📊 Expected Results
- Top 3 ranking for "childcare San Jose 95131" within 3 months
- Google Local Pack appearance for "childcare near me" searches
- 50% increase in organic traffic from San Jose area
- Enhanced local map visibility

**Full SEO Strategy**: [docs/seo-optimization.md](docs/seo-optimization.md) · [GEO Optimization](docs/geo-local-seo.md)

---

## 🌐 Deployment

### Vercel (Recommended - 1 Click Deploy)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/darecallad/sunny-next)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Add environment variables:
   - `EMAIL_USER` - Your Gmail address
   - `EMAIL_PASSWORD` - Gmail app password
   - `EMAIL_TO` - Center.admin@sunnychildcare.com
4. Click "Deploy"!

### Manual Deployment Steps

```powershell
# 1. Build for production
npm run build

# 2. Test production build locally
npm start

# 3. Visit http://localhost:3000 to verify

# 4. Deploy to your hosting platform
# - Upload .next/ folder
# - Set environment variables
# - Configure domain
```

**Required Environment Variables**:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=Center.admin@sunnychildcare.com
```

**Build Output**:
- ✅ 12 total routes with San Jose SEO
- ✅ Optimized images with WebP/AVIF
- ✅ Google Calendar integration with .ics attachments
- ✅ TypeScript compilation passed
- ✅ ESLint checks passed

---

## 📞 Contact

- **Website**: [www.sunnychildcare.com](https://www.sunnychildcare.com)
- **Email**: Center.admin@sunnychildcare.com
- **Phone**: (510) 333-5943
- **Address**: 2586 Seaboard Ave, San Jose, CA 95131
- **Hours**: Monday - Friday, 8:30am - 6:00pm
- **Languages**: English and Traditional Chinese (中文)

---

## ⭐ About

Sunny Child Care provides high-quality Mandarin-English immersion childcare and preschool education for children ages 0-6 in San Jose, California. Our programs focus on:

- **Bilingual Development**: Daily Mandarin-English immersion
- **STEAM Curriculum**: Science, Technology, Engineering, Arts, Math
- **Performing Arts**: Music, dance, and creative expression
- **Health & Safety**: First priority in all activities
- **Family Partnership**: Strong parent-teacher collaboration
- **Nutritious Meals**: Chef-designed meals with organic options

### 30+ Years of Excellence
Established in 1995, Sunny Child Care has been serving San Jose and Bay Area families for over three decades with a commitment to developing confident, curious, and bilingual children.

### 🎉 Coming Soon: Cupertino Location
**Opening February 2026** - New location expanding to serve more families in the Bay Area!

### Why This Platform?
This modern Next.js website showcases:
- **Best Practices**: Latest React and Next.js patterns
- **Bilingual Architecture**: Complete i18n implementation with language context
- **Local SEO**: Comprehensive San Jose geographic targeting
- **Performance**: Optimized for speed and SEO (Core Web Vitals)
- **Accessibility**: WCAG 2.1 compliant design
- **Automation**: Google Calendar integration for tour bookings
- **Maintainability**: Clean code with TypeScript and modular components

---

## 🙏 Acknowledgments

Built with modern web technologies:
- [Next.js](https://nextjs.org/) - React framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Lucide](https://lucide.dev/) - Icon library
- [Nodemailer](https://nodemailer.com/) - Email integration
- [Google Fonts](https://fonts.google.com/) - Montserrat & Noto Sans TC fonts
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📄 License

MIT License

Copyright (c) 2025 Sunny Child Care

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

See [LICENSE](LICENSE) file for full details.

---

## 🔝 回到頂部 (Back to Top)

[⬆️ Back to Top](#top)

---

**Built with ❤️ for Sunny Child Care | Serving San Jose families since 1995 | 自1995年起服務聖荷西家庭**

