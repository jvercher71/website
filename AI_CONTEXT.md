# AI Context: Vercher Technologies (VTOne)

This document is the primary source of truth for AI assistants working on the Vercher Technologies platform.

## 1. Project Overview
**Vercher Technologies** is a family-owned and operated software development firm based on the **Mississippi Gulf Coast** (Gulfport, MS). We specialize in bridging the gap between high-end enterprise solutions and affordable utility software.

### Core Philosophy
- **Family-First Integrity**: Personal interest in every project; work reflects the family name.
- **Gulf Coast Proud**: Committed to the Southern tech landscape.
- **Tailored Innovation**: Bespoke solutions for unique business needs.

## 2. Technology Stack
- **Frontend**: Vite + React
- **Routing**: `react-router-dom` (Version 7+)
- **Styling**: Vanilla CSS (Global `index.css` for design system, component-specific CSS files).
- **Deployment**: Vercel (linked to GitHub `main` branch).

## 3. Site Map & Navigation
- `/`: Home (Strategic paths for **Software Solutions** vs. **Strategic Partnerships**).
- `/about`: Company story and leadership (John Austin, John Manuel Vercher, Seth Lawrence).
- `/products`: Marketplace for "Core Utility" software (Direct Consumer/Ministry Sales).
- `/products/shepherdscore`: Flagship church management product (**Sales Page**).
    - **Marketing Focus**: **Stewardship & Simplicity** for small to medium congregations.
    - **Key Argument**: $600 lifetime ownership vs. cloud subscriptions.
- `/projects/shepherdscore`: Technical Case Study (**Skill Showcase**).
    - **Engineering Focus**: Local-First architecture, SQLite, and data sovereignty.
- `/contact`: Lead capture for custom builds and partnerships.

## 4. Business Model: The "Core to Custom" Foundation
We operate a dual-model approach:
1. **Custom Development**: Bespoke builds for industry leaders, providing deep operational insights. These are showcased as **Technical Case Studies** in the `/projects` section.
2. **Core Utility**: Independent products built with a focus on simplicity and high utility. These are sold directly via the `/products` section.
3. **Flexible Scaling**: Any core utility can be expanded into a fully bespoke solution as a client's needs grow.

## 5. Marketing & Identity Standards
- **Tone & Voice**: Conversational, grounded, and approachable. Emphasis on family-owned integrity and Mississippi roots. Focus on being a "Local Firm for Local Needs."
- **Plain English**: Avoid corporate jargon and rigid "marketing-speak." Use direct, active verbs and simpler descriptions. 
    - **Avoid**: "Absolute," "Uncompromising," "Ultimate," "High-Fidelity."
    - **Prefer**: "Simple," "Honest," "Built to last," "Trustworthy."
- **Sales vs. Skill**: 
    - **Sales (Products)**: Focus on simplicity, stewardship, and "No monthly bills."
    - **Skill (Projects)**: Focus on architecture, technical problem-solving, and engineering excellence.
- **Small-Church Priority**: Highlight that we build for the congregations that cloud vendors often overlook—those who need simple, powerful tools without the subscription bloat.
- **Stewardship First**: Position software purchases as high-fidelity investments that protect ministry legacies and financial resources.
- **Visuals**: Always prioritize high-fidelity UI previews or CSS-based mockups to maintain a "Premium" aesthetic.

## 6. Technical Case Study Standards
Every project in the `/projects` directory must follow this technical deep-dive structure:
- **Challenge**: The business or technical problem identified.
- **Architecture**: The stack and specific engineering decisions (e.g., Local-First, SQL, Security).
- **Execution**: The technical journey of solving the problem.
- **Result**: The measured impact or the high-fidelity outcome.

## 7. Repository & Branch Strategy
- **Primary Origin (Main Live Site)**: [https://github.com/jvercher71/website.git](https://github.com/jvercher71/website.git)
- **Secondary Archive**: [https://github.com/jvercher71/websites.git](https://github.com/jvercher71/websites.git)
- **Primary Branch**: `main` (All production-ready work must be pushed to singular `website.git`).
- **Deployment**: Vercel (Auto-deployed directly from `website.git/main`).

> [!IMPORTANT]
> **Production Source**: The singular `website.git` is the ONLY source for the live site. Do not use the plural `websites.git` for production deployment.

## 7. Technical Standards
- **Responsive**: Mobile-first architecture required.
- **Aesthetics**: Premium, high-fidelity design with glassmorphism and modern typography (Outfit/Inter).
- **Branding**: Text-based branding with the stylized "VERCHER TECHNOLOGIES" logo in the footer.

---
*Last Updated: 2026-03-23 (Post-Repository Unification)*
