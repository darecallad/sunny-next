# Sunny Child Care – Rebuild Notes

## 1. Snapshot
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript 5
- **UI Toolkit**: Tailwind CSS 4 + shadcn/ui (button, card, badge, navigation-menu, sheet, separator)
- **Fonts**: Montserrat (Latin), Noto Sans TC (Traditional Chinese)
- **Color DNA**: Navy `#27466F` (header/footer), Sunrise amber `#FFBB5C`, Warm white `#FFF8EE`

## 2. Layout + Components
| Area | Implementation | Notes |
| --- | --- | --- |
| Header | `SiteHeader` + `NavigationMenu` + mobile sheet | Mirrors legacy mega-nav structure, adds shadcn language toggle + CTA |
| Footer | `SiteFooter` | Uses navy background, bilingual contact block, flatten nav links |
| Sections | `HeroSection`, `ValueGrid`, `VideoSpotlight`, `TestimonialsSection`, `CtaBanner` | All strings sourced from `src/data/site.ts` for single-point edits |

## 3. Bilingual System
- `src/context/language-context.tsx` supplies locale state (EN/中文) via client provider.
- `LanguageToggle` component surfaces the switch (header + mobile drawer) and persists choice in `localStorage`.
- All structured content (`navigation`, hero copy, features, testimonials, CTAs) now uses `{ en, zh }` localized objects.
- Sections call `useLanguage()` and read localized fields—keeps JSX clean and avoids branching logic.

## 4. Styling + Tokens
- `src/app/globals.css` defines Tailwind CSS variables for Sunny’s palette (navy background, amber primary, cream neutrals).
- Header/footer use explicit brand colors to match original site screenshot; rest of the UI inherits Tailwind tokens.
- Added `tw-animate-css` + shadcn CSS variables for future section motion.

## 5. Content Data (`src/data/site.ts`)
- Houses navigation tree, hero stats, feature cards, testimonials, CTA text, and contact info.
- Provides `localeLabels`, `locales`, and typed helpers (`LocalizedString`, `NavItem`, etc.) to keep TypeScript aware of bilingual requirements.

## 6. Next Steps
1. **Page routing** – scaffold `/about`, `/programs/*`, `/admission/*`, `/resources`, `/discount`, `/summer` using the same data-driven approach.
2. **Forms & API** – port the Express `/send-email` logic into a Next.js route, pairing React Hook Form + Zod on the client.
3. **Asset migration** – import `docs/images` from the legacy repo, convert to optimized formats, and wire them into sections with `next/image`.
4. **Localization polish** – expand translations beyond hero/sections, add bilingual metadata + sitemap entries.
5. **Deployment** – prep Vercel project with `EMAIL_*` secrets, verify production build + analytics tags.
