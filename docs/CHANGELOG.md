# Changelog

All notable changes to the Sunny Child Care Next.js project will be documented in this file.

## [Current] - 2025-11-18

### ✅ Completed - Route Restructure

#### Merged Booking into Tuition Page
- **Purpose:** Aligned with legacy Sunny site structure where "Tuition & Openings" page includes tour scheduling
- **Changes:**
  - Moved `/booking` page content to `/admission/tuition`
  - Renamed component from `BookingPage` to `TuitionPage`
  - Updated page title from "Schedule a Tour" to "Tuition & Openings"
  - Deleted `/src/app/booking` directory
  - Updated all navigation links and CTAs:
    - `src/data/site.ts`: Removed "Schedule a Tour" from Admission dropdown
    - `src/data/site.ts`: Updated CTA href from `/booking` to `/admission/tuition`
    - `src/components/layout/site-header.tsx`: Updated mobile menu button
    - `src/app/about/page.tsx`: Updated CTA link
    - `src/app/locations/page.tsx`: Updated CTA link
- **Result:** Navigation now matches legacy site structure with tour form on tuition page

#### Location Banner Positioning
- **Purpose:** Adjusted background image position to match legacy site visual style
- **Implementation:**
  - Added `backgroundPosition: '50% 70%'` to location page hero
  - Image now shows more of the lower portion (toys and play area)
  - Maintains consistent visual hierarchy with text overlay

### ✅ Completed - Banner Background Images

#### Banner Image Migration
- **Purpose:** Added page-specific banner background images from legacy Sunny site to all hero sections
- **Implementation:**
  - Created `/public/images/banners/` directory
  - Copied 11 banner images from legacy project with consistent naming:
    - `about.webp` - About Sunny page (from ourcenter/V.webp)
    - `location.webp` - Visit Our Center page (from center/center.webp)
    - `booking.jpg` - Schedule a Tour page (from admission/pexels-yan-krukau-8612925.jpg)
    - `staff.webp` - Our Staff page (from ourcenter/staffbanner.webp)
    - `gallery.jpg` - Photo Gallery page (from event/banner.jpg)
    - `infant.webp` - Infant Program page
    - `preschool.webp` - Preschool Program page
    - `kindergarten.webp` - Kindergarten Program page
    - `menu.webp` - Menu page
    - `process.jpeg` - Admission Process page
    - `resources.jpg` - Resources page

#### Hero Section Updates
- **About Page (`src/app/about/page.tsx`):**
  - Added background image with `bg-cover bg-center`
  - Overlay: `bg-gradient-to-b from-black/60 to-black/40` for text contrast
  - Changed text colors from gray to white for readability on dark overlay
  - Positioned content with `relative z-10` above overlay

- **Location Page (`src/app/locations/page.tsx`):**
  - Added background image with `bg-cover bg-center`
  - Overlay: `bg-gradient-to-b from-black/60 to-black/40`
  - Updated text colors to white with `text-white/95` for descriptions
  - Applied z-index layering for proper content visibility

- **Booking Page (`src/app/booking\page.tsx`):**
  - Added background image with custom positioning: `backgroundPosition: '50% 70%'`
  - Overlay: `bg-gradient-to-b from-black/60 to-black/40`
  - Changed text colors from `text-gray-700` to `text-white/95`
  - Maintained form section below with original styling

#### Visual Improvements
- **Consistency:** All hero sections now have cohesive visual treatment matching legacy site
- **Readability:** Dark gradient overlays ensure text remains readable over photo backgrounds
- **Brand Alignment:** Banner images maintain the warm, welcoming aesthetic of Sunny Child Care
- **Future Ready:** Additional banner images prepared for remaining pages (staff, gallery, programs, admission, resources)

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
- **Schedule a Tour Page & Email System Completion:** ✅
  - Created full booking/tour request page (`/booking`) with comprehensive form
  - **Email Integration:**
    - Installed nodemailer + TypeScript types + dotenv
    - Created `src/lib/email.ts` with Gmail SMTP transporter
    - Created API route `/api/tour` for handling tour requests
    - Email sends to: Center.admin@sunnychildcare.com
    - Gmail SMTP using: darecallad0000@gmail.com (same as CPR project)
  - **Email Testing:** ✅ **Verified Working**
    - Created `scripts/test-email.js` for testing email functionality
    - Successfully tested SMTP connection
    - Test email delivered to Center.admin@sunnychildcare.com
    - Message ID: `<8198d3ad-8466-adec-c71b-284f57936657@gmail.com>`
    - Timestamp: 2025-11-18
  - **Form Features:**
    - Parent information: First name, last name, email, phone
    - Tour preferences: Chinese tour (Yes/No), contact method (Email/Phone)
    - Dynamic child management: Add/remove multiple children with DOB (MM/DD/YYYY)
    - Timeline: Desired start date dropdown
    - Comments/questions textarea
  - **Form Validation:** All required fields enforced with HTML5 validation
  - **Email Template:**
    - Professional HTML email with Sunny branding (Navy #324f7a, Amber #f2a63b)
    - Sections: Parent Info, Child Info, Tour Details, Comments
    - Both HTML and plain text versions
    - Reply-to set to parent's email for easy response
  - **UI/UX:**
    - Card-based design with sections divided by icons
    - Success/error status messages
    - Loading state during submission
    - Fully bilingual (English/Chinese)
    - Responsive grid layout
  - **Environment Configuration:**
    - Created `.env.local.example` with email setup instructions
    - `.env.local` configured with working credentials
    - Uses same EMAIL_USER and EMAIL_PASSWORD as CPR project
    - Emails route to Sunny's official email address
  - **Content Source:** Form structure based on legacy tuition.html

- **About Sunny Page Completion:** ✅
  - Created full About Us page (`/about`) with comprehensive content
  - **Hero Section:** Title and introductory subtitle
  - **Three Core Principles with Real Images:**
    1. Health, Safety, and Wellness (Shield icon) - health-safety.webp
    2. Fostering Personal Development (Heart icon) - personal-development.webp
    3. Teachers Who Become Family (Users icon) - teachers-family.webp
  - **Image Migration:** Copied three principle images from legacy Sunny project
    - Source: `Sunny/docs/images/ourcenter/` (mask@1x.webp, remove@1x.webp, teacher@1x.webp)
    - Destination: `public/images/about/` (renamed for clarity)
    - Using Next.js Image component with priority loading for first image
  - **Image Display Optimization:**
    - Fixed height containers: h-64 (mobile) / lg:h-80 (desktop)
    - `object-contain` mode ensures images display completely without cropping
    - White background with p-4 padding for clean presentation
    - Images maintain original aspect ratio and are centered
  - **Visual Layout:** Alternating text/image grid layout with balanced heights
  - **Philosophy Statement:** Highlighted section with play and research-based approach
  - **Our Story Section:** 
    - Five-paragraph narrative from 1995 founding to current mission
    - Card-based design with white background and shadow
    - Complete history: Taiwan origins (1995) → Bay Area expansion (2009) → Current mission
  - **Call-to-Action Section:** Schedule tour and call us buttons
  - **Content Source:** All content migrated from legacy about/aboutus.html
  - **Data Structure:** New `aboutContent` export in site.ts with bilingual support
  - **Bilingual Support:** Full English and Chinese translations
  - **Brand Colors:** Navy (#324f7a) and Amber (#f2a63b) throughout

- **Testimonials Navigation Fix:** ✅
  - Updated testimonials link in navigation from `#testimonials` to `/#testimonials`
  - Now correctly jumps to homepage testimonials section from any page
  - Works in both header navigation menu and footer quick links
  - Section already has proper `id="testimonials"` anchor

- **Location Page Completion:** ✅
  - Created full Location/Contact page (`/locations`)
  - **Google Maps Integration:** Embedded interactive map showing Sunny Child Care Center location
  - **Layout Alignment:** Map and Contact Information sections have equal height (items-stretch)
  - **Contact Information Section:** 
    - Address: 2586 Seaboard Ave, San Jose, CA 95131
    - Phone: (510) 333-5943 (clickable tel: link)
    - Email: Center.admin@sunnychildcare.com (clickable mailto: link)
    - Hours: Mon – Fri · 8:30 a.m. – 6:00 p.m.
    - License Numbers: 434416296 & 434416297
    - Meals: AM Snacks / Lunch / Dinner
  - **Icon System:** Lucide icons (MapPin, Phone, Mail, Clock, FileText, UtensilsCrossed) with navy background circles
  - **Call-to-Action Section:** Schedule tour and call us buttons
  - **Bilingual Support:** All content fully translated (English/Chinese)
  - **Responsive Design:** Two-column grid (map + info) on desktop, stacked on mobile
  - **Brand Colors:** Navy (#324f7a) and Amber (#f2a63b) throughout

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
