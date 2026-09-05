# KRONA™ — Digital Agency & Creative Engineering Studio

<p align="center">
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" alt="KRONA Studio Banner" width="100%" style="border-radius: 12px;" />
</p>

<p align="center">
  <strong>An award-winning digital atelier and creative engineering showcase built with Next.js 14, TypeScript, and Tailwind CSS.</strong><br />
  <span>Crafted & Engineered by <a href="https://idankuz.dev"><strong>idankuz.dev</strong></a></span>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Author-idankuz.dev-emerald?style=for-the-badge" alt="Author" />
  <img src="https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
</p>

---

## ✦ Overview

**KRONA Studio** is an ultra-high-polish, client-ready agency and portfolio showcase website created by **[idankuz.dev](https://idankuz.dev)**. Designed with the aesthetics of leading digital studios (*Awwwards Site of the Year, Basic/Dept, Active Theory, Locomotive*), it demonstrates senior frontend architecture, modern motion aesthetics, and real-world commercial value.

### Key Highlights
- **Creator Attribution:** Seamlessly integrated badges and links pointing to [idankuz.dev](https://idankuz.dev).
- **Obsidian Dark Aesthetic:** Refined `#09090b` palette with subtle ambient radial glow effects and typographic hierarchy.
- **Interactive Project Case Studies:** Dynamic modal breakdown for each project detailing the challenge, engineering solution, verified business impact, and architecture stack.
- **Infinite Client Marquee:** Smooth hardware-accelerated ticker showcasing prestigious partners.
- **Interactive Scope & Pricing Calculator:** Real-time engagement model selector with dynamic timeline and investment calculations.
- **Multi-Step Onboarding Flow:** 3-step interactive inquiry form with validation and animated confirmation.
- **100% Responsive & Accessible:** Designed mobile-first with desktop keyboard shortcuts (`ESC` to dismiss modals).

---

## ✦ Project Structure

```
krona-studio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Custom scrollbars, marquee keyframes, radial glows
│   │   ├── layout.tsx           # Geist typography, SEO OpenGraph metadata, idankuz.dev
│   │   └── page.tsx             # Root assembly with state orchestration
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky blurred header, idankuz.dev badge, live clock
│   │   ├── Hero.tsx             # High-impact typography, metrics bar, showreel modal
│   │   ├── ClientMarquee.tsx    # Infinite ticker marquee
│   │   ├── WorksSection.tsx     # Filterable portfolio grid (All, Products, 3D, Systems)
│   │   ├── ProjectModal.tsx     # Case study deep-dive slideover/modal
│   │   ├── ServicesSection.tsx  # Capabilities accordion with deliverables & tech
│   │   ├── PricingCalculator.tsx# Interactive scope calculator
│   │   ├── Testimonials.tsx     # Endorsements slider with client metrics
│   │   ├── InquiryModal.tsx     # Multi-step project inquiry onboarding
│   │   └── Footer.tsx           # idankuz.dev credits, global studio hubs
│   └── data/
│       ├── projects.ts          # Mock case studies & performance data
│       ├── services.ts          # Studio capabilities & tools
│       └── testimonials.ts      # Client endorsements & verified outcomes
```

---

## ✦ Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/krona-studio.git
cd krona-studio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## ✦ Deployment

Deploy with one click to **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/)

---

## ✦ Creator

Developed & Designed with passion by **[idankuz.dev](https://idankuz.dev)**.
Distributed under the MIT License.
