# Meta Hub (`meta-hub`)

A full, production-ready Next.js migration of the original multipage HTML website located in `d:\Meta Hubs`.

This project preserves every visual detail, layout, typography, asset, color, and interactive functionality pixel-for-pixel from the original source files without redesigns or modernizations.

---

## Project Structure & Architecture

```
Meta Hub/
├── public/
│   ├── assets/
│   │   ├── fonts/           # Gilroy-Light, Regular, Medium, SemiBold, Bold (.ttf)
│   │   ├── images/          # Product screenshots & workflow preview mockups
│   │   ├── icons/           # Integration & tool SVG icons
│   │   └── sources/         # Source provider SVG icons (Google, G2, etc.)
│   └── uploads/             # Testimonial and user avatar images
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, @font-face rules, keyframe animations
│   │   ├── layout.jsx       # Root App Router layout with SEO metadata & viewport
│   │   ├── page.jsx         # Homepage (Metahubs Home v2)
│   │   ├── product/         # Product page (/product)
│   │   ├── impact/          # Impact page (/impact)
│   │   ├── workflows/       # Workflows catalog (/workflows)
│   │   ├── pricing/         # Pricing & feature matrix (/pricing)
│   │   ├── security/        # Trust & Security (/security)
│   │   ├── metahubs-home/   # Legacy Metahubs Home v1 (/metahubs-home)
│   │   ├── boomerang-home/  # Boomerang Home (/boomerang-home)
│   │   ├── site-header/     # Site Header standalone preview (/site-header)
│   │   └── site-footer/     # Site Footer standalone preview (/site-footer)
│   └── components/
│       └── ui/
│           ├── Accordion/          # Interactive FAQ Accordion
│           ├── Badge/              # Brand, stone, emerald status badges
│           ├── BoomerangHomePage/  # Full Boomerang agent workflow homepage
│           ├── BrowserFrame/       # Mock browser container with controls
│           ├── Button/             # Multi-variant CTA button (brand, outline, ghost)
│           ├── Card/               # Surface card container
│           ├── Eyebrow/            # Section eyebrow labels
│           ├── Footer/             # Metahubs shared dark footer & demo CTA
│           ├── Header/             # Metahubs sticky responsive header & nav
│           ├── HomePage/           # Metahubs Home v2 page component
│           ├── ImpactPage/         # Impact metrics, ROI calculator, interactive tabs
│           ├── MetahubsHomeV1Page/ # Metahubs v1 home component
│           ├── PricingCard/        # Pricing tier cards with popular highlights
│           ├── PricingPage/        # Pricing comparison table & FAQ
│           ├── ProductPage/        # Product features & live approval trail demo
│           ├── SectionHeading/     # Reusable section title, eyebrow, and subtitle
│           ├── SecurityPage/       # Security controls, SOC2 trust center, FAQ
│           ├── SegmentedTabs/      # Interactive filter / switcher tabs
│           ├── SiteFooterPreview/  # Standalone site footer preview
│           ├── SiteHeaderPreview/  # Standalone site header preview
│           ├── StatBlock/          # Numeric metric showcase cards
│           ├── TestimonialCard/    # Customer quotes with avatars & titles
│           └── WorkflowsPage/      # Searchable workflows catalog with category filter
├── jsconfig.json
├── next.config.mjs
├── eslint.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

---

## Installed Versions & Environment

- **Framework**: Next.js `16.4.0` (App Router, Turbopack)
- **Runtime / React**: React `19.3.0`, React DOM `19.3.0`
- **Linter**: ESLint `9.39.5` with `eslint-config-next` `16.4.0`
- **Node Environment**: Node.js `v26.2.0`, npm `11.13.0`
- **OS**: Windows (PowerShell)

---

## Available Scripts

In the project directory (`d:\Meta Hubs\Meta Hub`), you can run:

### Development Server
```bash
npm run dev
```
Starts Next.js development server at `http://localhost:3000` with hot-module reloading and error reporting.

### Production Build
```bash
npm run build
```
Creates an optimized static production build. All 12 routes are pre-rendered into static HTML/assets.

### Production Server
```bash
npm run start
```
Starts the production server serving the built application.

### Linter
```bash
npm run lint
```
Runs ESLint across all source files in `src/` to ensure code quality and valid React/Next.js conventions.

---

## Page Migration Checklist & URL Rewrites

All original HTML files from `d:\Meta Hubs` are migrated into clean React components with colocated CSS Modules. Next.js rewrites in `next.config.mjs` preserve both clean URLs and legacy `.dc.html` paths:

| Original File | Modern Route | Legacy Rewrite Target | Status |
| :--- | :--- | :--- | :--- |
| `Metahubs Home v2.dc.html` | `/` | `/Metahubs%20Home%20v2.dc.html` | ✅ Migrated & Verified |
| `Metahubs Product.dc.html` | `/product` | `/Metahubs%20Product.dc.html` | ✅ Migrated & Verified |
| `Metahubs Impact.dc.html` | `/impact` | `/Metahubs%20Impact.dc.html` | ✅ Migrated & Verified |
| `Metahubs Workflows.dc.html` | `/workflows` | `/Metahubs%20Workflows.dc.html` | ✅ Migrated & Verified |
| `Metahubs Pricing.dc.html` | `/pricing` | `/Metahubs%20Pricing.dc.html` | ✅ Migrated & Verified |
| `Metahubs Security.dc.html` | `/security` | `/Metahubs%20Security.dc.html` | ✅ Migrated & Verified |
| `Metahubs Home.dc.html` | `/metahubs-home` | `/Metahubs%20Home.dc.html` | ✅ Migrated & Verified |
| `Boomerang Home.dc.html` | `/boomerang-home` | `/Boomerang%20Home.dc.html` | ✅ Migrated & Verified |
| `Site Header.dc.html` | `/site-header` | `/Site%20Header.dc.html` | ✅ Migrated & Verified |
| `Site Footer.dc.html` | `/site-footer` | `/Site%20Footer.dc.html` | ✅ Migrated & Verified |

---

## Interactive Features Migrated

1. **Sticky Header Navigation**: Responsive desktop navigation, mobile drawer toggle, active route highlighting, and smooth transitions.
2. **Hero Approval Toggle**: Interactive "Review & approve" / "Approved · Ready to post" toggle with status badges and simulated ERP entry sync.
3. **Workflow Category Filter & Search**: Instant real-time filtering by category (All, Month-End, AP/AR, Tax & Compliance, Audit) and keyword search.
4. **FAQ Accordion**: Single and multi-expand accordion components with chevron rotation and smooth collapsible content.
5. **Pricing Matrix**: 13-row feature comparison table across Starter, Professional, and Enterprise tiers.
6. **Marquee Animation**: Seamless infinite horizontal ticker for supported data sources and integrations.
7. **Contact / Demo Form**: Functional client-side form with success feedback and reset interaction.

---

## Verification Results

- **`npm run lint`**: Executed with code 0 (zero errors, zero warnings).
- **`npm run build`**: Executed with code 0 (12/12 static routes generated via Turbopack in ~2.4s).
- **Production Server (`npm run start`)**: Tested on port 3005; all 12 routes and legacy `.dc.html` rewrites responded with HTTP `200 OK`.
- **Static Assets**: All local fonts (`Gilroy`), logos, icons, source SVGs, and testimonial images verified with HTTP `200 OK`.
- **Original Files**: All original files in `d:\Meta Hubs` remain completely untouched and intact.
