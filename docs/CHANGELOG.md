# Changelog

All notable changes to the Sunny Child Care Next.js project will be documented in this file.

## [Current] - 2025-11-18

### ✅ Completed - Homepage

#### Project Setup & Foundation
- **Framework:** Next.js 16 with React 19, TypeScript 5, Tailwind CSS 4
- **UI Components:** shadcn/ui integration (Button, Badge, Navigation Menu, Sheet, Separator)
- **Localization System:** Custom LanguageProvider context with localStorage persistence
- **Asset Migration:** Cleaned up and optimized project assets:
  - `Flogo.png` - Bilingual logo (陽光雙語 | Sunny Child Care)
  - `hero-pexels.jpg` - Hero background (pexels-yan-krukau-8612914.jpg)
  - `sunny-logomark.png` - Brand logomark (also used as favicon)
  - Removed unused Next.js default assets (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
  - Removed unused legacy hero images (hero-banner.png/.webp, legacy-hero.png/.webp)

#### Data Structure & Content
- **Central Data File:** `src/data/site.ts` with TypeScript interfaces
  - `NavItem` interface for typed navigation
  - `navigation` array with bilingual menu structure
  - `siteConfig` object with site metadata
  - `heroContent`, `features`, `testimonials`, `careHighlights`, `ctaSection` data
- **Bilingual Content:** All content objects use `{ en: string, zh: string }` structure
- **City Correction:** Updated all references from "Santa Clara" to "San Jose"
- **Naming Update:** Changed Chinese name from "陽光中英幼兒園" to "中英雙語幼兒園" (removed redundant 陽光)

#### Header Component (`src/components/layout/site-header.tsx`)
- **Logo Display:** Single Flogo.png image in rounded capsule (h-12, w-auto)
- **Navigation Menu:** Desktop mega menu with dropdowns for "Our Center", "Programs", "Admission"
- **Mobile Menu:** Sheet component with collapsible sections
- **Language Toggle:** Pill-style toggle with amber active state (bg-[#f2a63b])
- **Call-to-Action:** Prominent phone number with icon, single-line display
- **Removed Items:**
  - Stacked logo + tagline structure (simplified to logo only)
  - "Discounts" navigation item (per user request)
  - Tagline display below logo (per user request)

#### Hero Section (`src/components/sections/hero-section.tsx`)
- **Background Image:** `hero-pexels.jpg` displayed across entire section with optimized overlay
- **Visual Hierarchy:** Balanced background visibility with text readability
  - Background overlay: `from-white/50 via-white/60 to-white/70` (50-70% opacity)
  - Ensures background is subtly visible without overwhelming content
- **Left Content Area:**
  - Title, description, CTA buttons, statistics with proper z-index layering
  - Description text: `text-gray-700 font-medium` for improved readability
- **Right Card Structure:**
  - Top section: Clear visible photo (hero-pexels.jpg, h-64) without heavy overlay
  - Bottom section: Dark gradient background (#2a3f5f to #1a2940) for content
  - Logo badge, Programs section, Visit Us section with excellent contrast
- **Z-index Management:** Removed `-z-10` from background, added `z-10` to content container for proper layering

#### Footer Component (`src/components/layout/site-footer.tsx`)
- **Logo Section:** Single Flogo.png display (removed tagline below logo)
- **Content:** Description, contact info, navigation links, social links
- **Quick Links:** All 14 navigation items with verified working hrefs
- **Contact Information:** Clickable phone and email links
- **Styling:** Consistent border radius and shadow styling matching header

#### Video Spotlight Section (`src/components/sections/video-spotlight.tsx`)
- **YouTube Embed:** Sunny Child Care campus tour video
- **Layout:** Two-column (text left, video right) with amber gradient background
- **Content:** Badge, title, description (removed redundant subtitle)
- **Styling:** Rounded borders, shadow effects

#### Testimonials Section (`src/components/sections/testimonials.tsx`)
- **Layout:** Three-column grid of testimonial cards
- **Content:** Parent testimonials with author names and source badges
- **Links:** All "Read full story" links point to correct Google Maps page
  - URL: `https://www.google.com/maps/place/Sunny+Child+Care+Center/@37.3789363,-121.940731...`
- **Typography:** `text-balance` class for optimal line breaks
- **Styling:** White cards on amber gradient background

#### Language Toggle (`src/components/layout/language-toggle.tsx`)
- **Design:** Pill toggle with border-white/30, bg-[#324f7a]/70 container
- **Active State:** bg-[#f2a63b] (amber) for selected language
- **Labels:** "EN" / "中文"

#### Page Routes - All Created with Basic Structure
**Our Center (園所介紹):**
- ✅ `/about` - About Sunny (關於 Sunny)
- ✅ `/about/our-staff` - Our Staff (教學團隊)
- ✅ `/about/photo-gallery` - Photo Gallery (校園剪影)
- ✅ `/locations` - Location (交通與位置)

**Programs (課程介紹):**
- ✅ `/programs/infant` - Infant & Toddler (嬰幼班)
- ✅ `/programs/preschool` - Preschool (幼兒園)
- ✅ `/programs/kindergarten` - TK / Kindergarten (學前 / 小學)
- ✅ `/programs/menus` - Menus (營養餐點)

**Admission (入學資訊):**
- ✅ `/admission/process` - Process (入學流程)
- ✅ `/admission/tuition` - Tuition & Openings (學費與名額)
- ✅ `/booking` - Schedule a Tour (預約參觀)

**Other:**
- ✅ `/summer` - Summer Program (夏令營)
- ✅ `/resources` - Resources (親職資源)
- ✅ `/` - Homepage with hero, features, testimonials, CTA sections

#### Homepage Sections - All Completed ✅
- **Hero Section:** Background image, dual-column layout with CTA cards
- **Features Section:** Grid of key features and benefits
- **Video Spotlight Section:** Campus tour video embed
- **Testimonials Section:** Three parent testimonials with Google Maps links
- **CTA Section:** Final call-to-action for booking tours

#### Code Quality
- **Linting:** ESLint 9 configured, all code passes `npm run lint`
- **TypeScript:** Strict type checking enabled
- **No Build Errors:** All imports cleaned, no missing exports

### 🚧 In Progress / Pending

#### Content Development
- [ ] Fill in actual content for all page routes (currently showing "Content coming soon...")
- [ ] Add real images to photo gallery
- [ ] Create staff profile content with photos
- [ ] Write detailed program descriptions
- [ ] Create admission process flowchart
- [ ] Add menu PDFs or images
- [ ] Develop resources section content

#### Forms & Functionality
- [ ] Implement tour booking form with React Hook Form
- [ ] Create contact form
- [ ] Set up email integration (Nodemailer + Gmail SMTP)
- [ ] Add form validation and error handling
- [ ] Create API routes for form submissions

#### Additional Features
- [ ] Testimonials carousel functionality
- [ ] Photo gallery lightbox
- [ ] Interactive location map
- [ ] Downloadable brochure PDF
- [ ] FAQ accordion section
- [ ] Events calendar

#### Assets & Media
- [ ] Complete asset migration from legacy Sunny project
- [ ] Optimize all images for web (WebP format)
- [ ] Create missing program images
- [ ] Design classroom photos
- [ ] Create staff headshots placeholder system

#### SEO & Performance
- [ ] Add structured data (JSON-LD) for LocalBusiness
- [ ] Create sitemap.xml
- [ ] Configure robots.txt
- [ ] Add OpenGraph images for social sharing
- [ ] Implement page-specific meta descriptions
- [ ] Set up analytics (Google Analytics or alternative)

#### Documentation
- [ ] Technical architecture documentation
- [ ] Content management guide
- [ ] Brand guidelines
- [ ] Deployment guide
- [ ] Contributing guidelines

### 🔧 Recent Fixes & Changes

#### November 18, 2025
- **Homepage Statistics Update:**
  - Updated "Families served" stat from 200+ to 400+ in both English and Chinese
  
- **Favicon Implementation:**
  - Replaced default favicon.ico with sunny-logomark.png
  - Created `src/app/icon.png` for automatic Next.js favicon handling
  - Added `icons` metadata to layout.tsx for proper favicon configuration
  - Removed old favicon.ico file
  
- **Project Cleanup:**
  - Removed unused Next.js default SVG files (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
  - Removed unused legacy hero images (hero-banner.png/.webp, legacy-hero.png/.webp)
  - Cleaned public folder: now contains only actively used assets
  - Final asset inventory: Flogo.png, hero-pexels.jpg, sunny-logomark.png

- **Homepage Completion:** ✅ All sections finalized and optimized
  
- **Footer Updates:**
  - Removed tagline display ("Mandarin-English immersion in San Jose")
  - Verified all 14 Quick Links have correct hrefs and are clickable
  - Simplified logo section to single Flogo display
  
- **Testimonials Section:**
  - Updated all "Read full story" links to correct Google Maps URL
  - Changed from "Google Reviews" to "Parent Testimonial" for accuracy
  - Applied `text-balance` to description for better text wrapping
  - Correct location: Sunny Child Care Center, 2586 Seaboard Ave, San Jose, CA 95131
  
- **Video Spotlight Section:**
  - Removed redundant subtitle text
  - Kept clean layout with title and main description only
  
- **Hero Section Final Optimization:**
  - Adjusted background overlay to 50-70% opacity for better balance
  - Enhanced description text readability with `font-medium text-gray-700`
  - Fixed z-index layering: removed `-z-10` from background, added `z-10` to content
  - Right card top photo displays clearly without heavy overlay
  - Background image subtly visible across entire section
  - Achieved optimal visual hierarchy: readable text + visible background

#### November 17, 2025
- **Header Simplification:**
  - Removed "Discounts" from navigation array in `site.ts`
  - Simplified header logo display (removed stacked tagline below logo)
  - Changed from complex flex-col structure to single Link wrapper
- **Import Cleanup:**
  - Removed stale `announcement`, `Badge`, `ArrowRight` imports from hero-section.tsx
  - Fixed build error after announcement export was deleted
- **Lint Validation:** All changes pass ESLint with zero errors

---

## Version History Note

This project is a complete rebuild of the legacy Sunny Child Care website using modern Next.js. Previous version history from the static HTML site is not included here.

## Future Roadmap

### Phase 1: Content & Core Features (Current)
- Complete all page content
- Implement booking and contact forms
- Add email functionality
- Full asset migration

### Phase 2: Enhanced Features
- Photo gallery with filtering
- Staff profiles with bios
- Interactive campus tour
- Parent portal login (future consideration)

### Phase 3: Optimization & Launch
- Performance optimization
- SEO implementation
- Accessibility audit
- Production deployment
- Domain setup and SSL

---

_This changelog follows [Keep a Changelog](https://keepachangelog.com/) principles._
_For development workflow, see [Development Guide](development-guide.md)._
