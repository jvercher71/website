# AI Context: Vercher Technologies (VTOne)

This document serves as the primary source of truth for AI assistants working on the Vercher Technologies platform.

## 1. Project Overview
**Vercher Technologies** is a premium software collective specializing in "Purposive Engineering." We follow a strategic "Custom to Utility" pipeline:
- **Custom Development**: Bespoke enterprise solutions for high-end clients.
- **Utility Products**: Stripped-down, generalized versions of custom builds sold as SaaS/Sourced products (e.g., **ShepherdsCore** for church management).
- **Managed Services**: Long-term developer partnerships and system administration.

## 2. Technology Stack
- **Framework**: Vite + React
- **Routing**: `react-router-dom` (Version 7+)
- **Styling**: Vanilla CSS with a global `index.css` defining the design system (HSL colors, glassmorphism).
- **Deployment**: Vercel (GitHub integration)
- **Application Preset**: Vite

## 3. Core Pages & Routes
- `/`: Home (Strategic paths for Buyers vs. Clients).
- `/about`: Leadership team (John Austin, John Manuel Vercher, Seth Lawrence).
- `/products`: Marketplace for utility software.
- `/projects`: Portfolio highlighting the "Custom to Utility" pipeline.
- `/contact`: Dedicated lead capture for custom builds and managed services.
- `/products/shepherdscore`: Flagship product detail page.
- `/products/shepherdscore/demo`: Specialized ministry-focused demo request.
- `/products/shepherdscore/buy`: Tiered pricing with an **Enterprise Upsell** for custom builds.

## 4. Business Logic & Conversion Goals
- **Dual Funnel**: The site must clearly distinguish between users looking to buy ready-made software and those needing a professional developer relationship.
- **Custom Upsell**: Product pages should always offer a "Bespoke" or "Custom Build" alternative to capture high-value enterprise leads from basic product traffic.

## 5. Technical Context for Future Assistants
- **State Management**: Currently high-fidelity static data (mocked in component arrays).
- **Backend Readiness**: All forms and data-driven sections are ready for API integration (see `integration_guide.md` in root).
- **Responsive Design**: Mobile-first architecture (320px to 4K), including fully responsive Pipeline and Projects grids.
- **Branding**: Currently text-based logo (`.logo-text`, `.logo-sub`). Official logo integration is a pending next step.

## 6. Repository
- **GitHub**: [Vercherja/Vercher-Technologies-UI](https://github.com/Vercherja/Vercher-Technologies-UI.git)
- **Deployment**: Linked to Vercel via `main` branch.

---
*Last Updated: 2026-03-15*
