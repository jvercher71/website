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
- `/products/shepherdscore`: Flagship church management product ($600 Lifetime License).
    - **Marketing Focus**: **Stewardship & Simplicity** for small to medium congregations.
    - **Key Argument**: $600 lifetime ownership is a massive act of stewardship compared to cloud subscriptions ($4,000 - $7,000+ over 5 years).
    - **Data Sovereignty**: Physical control of data is a primary security and trust differentiator.
- `/projects`: Portfolio home for **Technical Case Studies** (Proof of skill for Custom Clients).
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
- **Primary Origin**: [https://github.com/jvercher71/website.git](https://github.com/jvercher71/website.git)
- **Primary Branch**: `main` (All work must be integrated into this branch).
- **Deployment**: Vercel (Auto-deployed directly from `origin/main`).

> [!IMPORTANT]
> **Source of Truth**: The `website.git` repository (singular, under `jvercher71`) is the only source of truth. All work must be conducted on the `main` branch. Avoid any disconnected histories or feature branches unless they are immediately merged and pushed to this primary origin.

## 7. Technical Standards
- **Responsive**: Mobile-first architecture required.
- **Aesthetics**: Premium, high-fidelity design with glassmorphism and modern typography (Outfit/Inter).
- **Branding**: Text-based branding with the stylized "VERCHER TECHNOLOGIES" logo in the footer.

---
*Last Updated: 2026-03-23 (Post-Repository Unification)*
