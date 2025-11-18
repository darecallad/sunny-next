# Sunny Child Care Next.js Platform - Documentation Index

_Last updated: November 17, 2025_

Welcome to the comprehensive documentation for the Sunny Child Care Next.js platform. This index provides a roadmap for understanding, developing, and maintaining the bilingual childcare website.

## 📋 Quick Start for Developers

### 🚀 Resuming Development After Interruption
**Follow this checklist to get back up to speed quickly:**

1. **Read [CHANGELOG.md](CHANGELOG.md) - Section "✅ Completed"** ⭐
   - Review what's been finished since last session
   - Note any structural changes

2. **Check [CHANGELOG.md](CHANGELOG.md) - "🔧 Recent Fixes & Changes"**
   - See latest updates (last 24-48 hours)
   - Understand any breaking changes

3. **Review [CHANGELOG.md](CHANGELOG.md) - "🚧 In Progress / Pending"**
   - See what's currently in development
   - Identify next priority tasks

4. **Run Development Server**
   ```bash
   cd sunny-next
   npm install    # If first time or package.json changed
   npm run dev
   ```
   - Verify everything works: http://localhost:3000
   - Test language toggle (EN ↔ 中文)

5. **Check Git Status**
   ```bash
   git status
   git log --oneline -5
   ```

6. **Lint & Build Test**
   ```bash
   npm run lint
   npm run build
   ```

---

## 📖 Documentation Files

### [CHANGELOG.md](CHANGELOG.md) ⭐ **MOST IMPORTANT**
**Your first stop when resuming work** - Contains:
- ✅ **Completed features** with implementation details
- 🚧 **In-progress work** and pending tasks
- 🔧 **Recent fixes** and changes
- 📋 **Future roadmap**

---

## 🎯 Project Overview

### Technology Stack
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui (Button, Badge, Navigation Menu, Sheet, Separator)
- **Fonts:** Noto Sans TC (Traditional Chinese), sans-serif (English)

### Bilingual Support
- **Languages:** English and Traditional Chinese (中文)
- **Implementation:** Custom `LanguageProvider` context with localStorage persistence
- **Data Structure:** All content uses `{ en: string, zh: string }` format
- **Toggle Location:** Header and mobile menu

### Project Structure
```
sunny-next/
├── src/
│   ├── app/              # Next.js pages and routes
│   │   ├── about/        # About pages
│   │   ├── admission/    # Admission pages
│   │   ├── booking/      # Tour booking
│   │   ├── locations/    # Location page
│   │   ├── programs/     # Program pages
│   │   ├── resources/    # Resources page
│   │   ├── summer/       # Summer program
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer, Language Toggle
│   │   ├── sections/     # Hero, Features, Testimonials
│   │   └── ui/           # shadcn/ui components
│   ├── context/          # React contexts (LanguageProvider)
│   ├── data/             # Content data (site.ts)
│   └── lib/              # Utilities
├── public/
│   └── images/           # Static assets (Flogo.png, hero images)
└── docs/                 # Documentation (you are here)
```

---

## 🎨 Brand Assets

### Colors
- **Primary (Amber):** `#f2a63b` - CTA buttons, active states
- **Secondary (Navy):** `#324f7a` - Header/footer background
- **Accent:** Warm whites and creams for backgrounds

### Logo
- **Bilingual Logo:** `/public/images/Flogo.png`
  - Contains both "陽光雙語" and "Sunny Child Care"
  - Used in header (h-12, w-auto)

### Key Images
- `hero-pexels.jpg` - Main hero background
- `legacy-hero.webp` - Alternative hero
- `sunny-logomark.png` - Brand logomark

---

## 🔧 Common Development Tasks

### Adding New Page Content
1. Open `src/data/site.ts`
2. Add bilingual content:
   ```typescript
   export const newContent = {
     title: { en: "English", zh: "中文" },
     description: { en: "Description", zh: "描述" }
   };
   ```
3. Import in page component
4. Test both languages

### Creating New Routes
1. Create `src/app/[route]/page.tsx`
2. Add metadata:
   ```typescript
   export const metadata: Metadata = {
     title: "Title | 標題",
     description: "Description"
   };
   ```
3. Add component with default export
4. Update navigation in `src/data/site.ts`

### Updating Header/Navigation
- **Header Component:** `src/components/layout/site-header.tsx`
- **Navigation Data:** `src/data/site.ts` → `navigation` array
- **Mobile Menu:** Same component handles both desktop and mobile

### Updating Footer
- **Footer Component:** `src/components/layout/site-footer.tsx`
- **Contact Data:** `src/data/site.ts` → `siteConfig`

---

## 📊 Current Status (Nov 17, 2025)

### ✅ Completed
- Core Next.js 16 setup with TypeScript & Tailwind
- Header with bilingual navigation (13 menu items)
- Footer with contact info and links
- Language toggle (EN/中文) with localStorage
- Hero section with background image
- 13 page routes created (skeleton structure)
- All navigation links functional

### 🚧 Pending
- Actual page content (currently placeholders)
- Forms (booking, contact) implementation
- Email integration (Nodemailer)
- Complete asset migration from legacy site
- SEO optimization
- Performance optimization

**For detailed status, see [CHANGELOG.md](CHANGELOG.md)**

---

## 💻 Development Commands

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

---

## 📝 Documentation Maintenance

**When making changes:**

1. **Update [CHANGELOG.md](CHANGELOG.md)** ⭐
   - Add completed items to ✅ section
   - Move tasks from 🚧 to ✅
   - Add recent changes to 🔧 section
   - Include date and description

2. **Update this README**
   - Keep "Current Status" accurate
   - Update "Last updated" date

3. **Document patterns**
   - Add new patterns to "Common Tasks"
   - Include code examples

### Update Template for CHANGELOG.md
```markdown
#### November XX, 2025
- **[Component Name]:** Brief description of what was changed
- **[New Feature]:** What was added and why
- **[Bug Fix]:** Problem and solution
```

---

## 📞 Getting Help

1. **Check [CHANGELOG.md](CHANGELOG.md)** for current state
2. **Review code** in `src/` directories
3. **Examine data** in `src/data/site.ts`
4. **Test locally** with `npm run dev`
5. **Check errors** with `npm run lint`

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Remember: Always check [CHANGELOG.md](CHANGELOG.md) first when resuming development! ⭐**
