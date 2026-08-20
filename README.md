# Zaviko — Premium Digital Product & Engineering Agency

> **Designing, engineering, and automating bespoke digital experiences for ambitious businesses.**

Zaviko is a high-performance digital studio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **WebGL Fluid Simulation**.

---

## ✨ Features

- **Dark-First Architectural Aesthetic**: Deep obsidian foundations (`#0B0910`, `#131119`, `#191622`) with hairline borders and lavender/violet illumination accents (`#CCC2DC`, `#A78BFA`).
- **WebGL Fluid Cursor Simulation**: Real-time fluid dynamics canvas with performance optimization and mobile/reduced-motion guardrails.
- **Mouse Parallax**: Multi-layered inertia physics on hero product previews with GSAP transforms.
- **Lenis Smooth Scroll**: Native momentum scrolling with 1:1 wheel response.
- **Interactive Case Studies**: 6 selected works with high-fidelity UI mockups (fintech order book, AI node graph, spatial 3D e-commerce, diagnostic waveforms).
- **Interactive Services Matrix**: 6 capability pillars with expandable deliverable drawers.
- **Process & Delivery Framework**: 5-step methodology with shared-layout spotlight hover physics.
- **Verified Testimonials**: Realistic founder and executive reviews with measurable ROI badges.
- **Project Scope Builder**: Multi-step booking questionnaire (`/book`) with Radix UI components.
- **Centralized Data Architecture**: All content, navigation, and metrics configurable in `src/data/index.ts`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [SASS](https://sass-lang.com/)
- **Animation**: [Framer Motion 11](https://www.framer.com/motion/) & [GSAP 3](https://greensock.com/gsap/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Graphics**: WebGL Fragment & Vertex Shaders
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/)

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Start production server
npm start
```

---

## 📁 Architecture & Directory Structure

```
src/
├── app/                  # Next.js App Router (pages & server layout)
│   ├── layout.tsx        # SEO metadata, Google Montserrat font, smooth scroll provider
│   ├── page.tsx          # Main landing composition
│   └── book/             # Project inquiry & scope questionnaire page
├── components/           # Reusable UI & Providers
│   ├── providers/        # SmoothScrollProvider (Lenis wrapper)
│   ├── ServiceCard/      # Interactive capability row with expandable drawers
│   ├── SidebarMenu/      # Slide-out drawer navigation
│   └── ui/               # Button, SectionTitle, SectionOpacity, HoverCards, ShadowCursor
├── composables/          # Inertia mouse parallax hooks (useFloatingImages)
├── data/                 # Centralized agency data layer (single source of truth)
├── shared/               # Global styles, SCSS tokens, WebGL fluid utilities
└── widgets/              # Page sections (Navigation, Hero, Trust, Work, Services,
                          # Capabilities, Approach, About, Testimonials, CallToAction, BookForm)
```

---

## 📄 License

Proprietary © 2026 Zaviko Digital Studio Inc. All rights reserved.
