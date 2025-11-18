<div align="center">

# Sunny Child Care (Next.js)
Mandarin-English immersion childcare site rebuilt with modern React, shadcn/ui, and Tailwind CSS 4.

</div>

## Overview

This repo is stage one of the Sunny Child Care migration from a legacy Express + static HTML site to a fully componentized Next.js 16 application. The new stack gives us:

- **App Router + Server Components** for fast, cacheable marketing pages
- **shadcn/ui** with Tailwind v4 design tokens aligned to Sunny’s warm brand palette
- **Modular content data** (`src/data/site.ts`) so marketing copy stays close to the code without repeating HTML
- **Reusable sections** (hero, value grid, video spotlight, testimonials, CTA) that map directly to the original Sunny storytelling

## Tech Stack

- Next.js 16 · React 19 · TypeScript 5
- Tailwind CSS 4 with custom tokens + Montserrat / Noto Sans TC fonts
- shadcn/ui components (button, card, badge, navigation menu, sheet, separator)
- Lucide icons, class-variance-authority utilities, tailwind-merge helpers

## Getting Started

Prereqs: Node.js 18.18+ (or 20+), npm 9+

```powershell
cd sunny-next
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the rebuilt homepage.

## Available Scripts

- `npm run dev` – start the local dev server
- `npm run lint` – run ESLint against the entire project
- `npm run build` – create an optimized production build
- `npm run start` – serve the production build locally

## Project Structure

```
src/
	app/              # App Router entrypoints/layout
	components/
		layout/         # Header, footer
		sections/       # Homepage sections (hero, testimonials, etc.)
		ui/             # Generated shadcn/ui primitives
	data/
		site.ts         # Navigation, hero copy, value props, testimonials
	lib/
		fonts.ts        # Google font helpers
		utils.ts        # cn() helper from shadcn
```

Public assets currently rely on gradients/typography; migrating existing imagery from the legacy repo is tracked as a follow-up task.

## Migration Roadmap

1. **Content parity** – bring in About, Programs, Admission, Resources, and seasonal pages as App Router routes backed by structured data files.
2. **Interactive forms** – rebuild the tour request + contact workflow using React Hook Form + a Next.js API route wired to Nodemailer (leveraging the existing Gmail OAuth credentials).
3. **Asset library** – import photos/icons from the legacy `docs/images` tree, optimize with `next/image`, and codify brand guidelines.
4. **Localization** – reuse the Waymaker CPR language toggle to present key sections in both English and Traditional Chinese.
5. **Deployment** – point Vercel (or preferred hosting) at this repo with environment secrets (`EMAIL_USER`, `EMAIL_PASSWORD`, etc.) configured.

## Contributing

1. Create a feature branch from `main`.
2. Keep sections modular—most content should live in `src/data` or dedicated `sections/` components.
3. Run `npm run lint` before opening a PR.

Questions? Open an issue or ping the team on Slack—let’s keep the sunshine going ☀️
