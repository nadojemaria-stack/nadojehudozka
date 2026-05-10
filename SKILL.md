---
name: cursor-design
description: Use this skill to generate well-branded interfaces and assets for Cursor, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- `colors_and_type.css` — single source of truth for color, type, spacing, radius tokens.
- `uploads/DESIGN.md` — canonical brand spec.
- `preview/` — small specimen cards per token group.
- `ui_kits/marketing-site/` — interactive recreation of cursor.com surface; lift `<TopNav>`, `<HeroBand>`, `<IdeMockupCard>`, `<TimelinePill>`, `<FeatureCard>`, `<PricingTier>`, `<CtaBand>`, `<Footer>`.
- `assets/` — wordmark variants.

## Non-negotiable rules
1. Page floor is **warm cream** `#f7f7f4` — never pure white.
2. **Cursor Orange `#f54e00`** is the only brand action color, used scarcely.
3. Display weight is **400** with negative letter-spacing — never bold.
4. Code surfaces are **JetBrains Mono**, body + display are CursorGothic (Inter substitute).
5. **Hairlines, not shadows.** No drop shadow on any surface.
6. **AI-timeline pastels** (peach/mint/blue/lavender/gold) appear ONLY inside in-product agent-timeline visualizations.
7. No emoji. No exclamation points. No gradients. No frosted glass.
