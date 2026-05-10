# Cursor Design System

Source-of-truth foundations + UI kit recreation of Cursor's marketing site, built from `uploads/DESIGN.md` (alpha spec).

> **Note on input:** the brief field read `надоже!скетчинг` but the only attached spec is Cursor's design system. The system is built against the spec; flag if a different brand was intended.

---

## Overview

**Cursor** is an AI-first code editor. Their *marketing site* — what this design system captures — reads like a quietly-confident developer-tools brand: warm-cream editorial canvas (`#f7f7f4`) instead of dark IDE atmosphere, near-black warm ink (`#26251e`) for body and display alike, a single brand voltage of **Cursor Orange** (`#f54e00`) reserved for primary CTAs and the wordmark, generous 80px section rhythm, hairline-only depth (no shadows). CursorGothic for display + body, JetBrains Mono on every code surface — and code surfaces are roughly half the page.

The signature visual is the **AI-timeline pastel pill palette** (peach / mint / blue / lavender / gold) marking AI-action stages — Thinking / Grepping / Reading / Editing / Done — used **only inside in-product timeline visualizations**, never as system action colors.

### Sources
- `uploads/DESIGN.md` — full token + component spec (read this first; it's the canonical source).

There is no codebase, Figma file, or screenshot pack attached. All recreations in `ui_kits/` and `preview/` are built from the DESIGN.md spec only.

---

## Content fundamentals

The voice is **quietly confident, editorial, developer-native**. Closer to a print magazine than a tech-bombastic landing page.

- **Casing:** Sentence case for headings and CTAs. UPPERCASE reserved for tiny tracked labels (`caption-uppercase`, 11px / 0.88px tracking) — section eyebrows, timeline pill labels.
- **Pronouns:** Implicit "you" — addresses the developer directly without saying it. Product is "Cursor."
- **Tone:** Specific, technical, understated. Names mechanisms (Tab, Agent, Composer, Apply) more often than benefits.
- **No emoji.** None in marketing surface, none in the spec, none in the timeline pills (color carries the affect).
- **No exclamation points.** The brand is calm.
- **Typographic restraint:** display sits at weight 400 with negative letter-spacing — never bold, never SCREAMING. The voice depends on this.
- **Code is content.** Inline mono samples, IDE-mockup cards, file diffs, and command syntax all read as primary copy, not decoration.

#### Sample voice
> "Tab completes anything. The default model can complete edits across multiple lines, taking into account your recent changes."

> "Cursor's Agent fixes the bug for you. Run terminal commands, search the codebase, and edit files — with your approval."

Headings stay short and concrete: "Built to make you extraordinarily productive." "The best way to code with AI." Lists prefer noun phrases over verb phrases ("Codebase context," "Multi-file edits," "Terminal control").

---

## Visual foundations

### Colors
- **Canvas is warm cream** (`#f7f7f4`), never pure white. Pure white (`#ffffff`) is the *card* surface — slight contrast against cream is the entire elevation system.
- **Ink is warm near-black** (`#26251e`), not `#000`. Body text drops to `#5a5852` for running prose.
- **Cursor Orange (`#f54e00`) is scarce.** One per screen at most: the primary CTA *or* the wordmark. Never both as competing accents.
- **Timeline pastels are scoped.** Peach / mint / blue / lavender / gold appear only inside in-product agent-timeline pills. They are not action colors, not card backgrounds, not nav highlights.
- **Semantic** colors (success `#1f8a65`, error `#cf2d56`) are dedicated tokens, distinct from the timeline palette.

### Type
- **CursorGothic** for display + body. Licensed; we substitute **Inter @ -1.5% letter-spacing** per the spec's own substitution note.
- **JetBrains Mono** on every code surface — inline code, IDE panes, terminal mockups, command samples.
- **Display weight stays at 400.** Negative letter-spacing (-2.16px on the 72px hero) gives the magazine feel. Bold display would break the voice entirely.
- Body weight runs 400 / 500 / 600. Buttons at 500. Section eyebrow caps at 600 with 0.88px tracking.

### Spacing
- **4px base unit.** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 80.
- **80px section rhythm** is the dominant cadence. CTA bands stretch to 96px vertical.
- **Card gutters** sit at 16–24px — tight inside generous bands.

### Backgrounds & imagery
- No full-bleed photography on the marketing site. No hand-drawn illustrations. No repeating textures, no grain.
- The "imagery" of the site is **IDE-mockup cards** — white cards with realistic multi-pane editor screenshots inside, set in JetBrains Mono.
- **No gradients** — flat cream canvas, flat ink CTAs, flat pastel pills.

### Animation
- The spec marks animation timings as out-of-scope. Inferred convention: subtle fades and 200ms ease-out transitions for hover state changes; agent-timeline pills enter sequentially. **No bounces.** No spring physics. Motion is editorial, never performative.

### Hover states
- Spec explicitly says "Hover state never documented." Inferred: text links shift from `--body` to `--ink`; buttons darken from `--primary` toward `--primary-active`; cards do not lift (no shadow system to lift into).

### Press states
- Buttons darken to `--primary-active` (#d04200). No scale-down, no inner shadow.

### Borders, shadows, depth
- **Hairline-only depth.** Every card outlines with 1px `--hairline` (#e6e5e0). No drop shadows anywhere.
- IDE-mockup cards are the only "elevated" element — and they're elevated purely through white-on-cream contrast plus a hairline.
- Three hairline weights for hierarchy: `--hairline-soft` `#efeee8`, `--hairline` `#e6e5e0`, `--hairline-strong` `#cfcdc4`.

### Transparency, blur
- Not used. The brand is opaque, calm, flat. No frosted-glass surfaces, no protection gradients, no scrims.

### Cards
- 12px corner radius (`--radius-lg`).
- 1px `--hairline` border.
- White (`--surface-card`) on cream canvas.
- 24px padding standard; 32px on pricing cards.
- Pricing's "featured" tier inverts to ink — same shape, dark — instead of using a colored ribbon.

### Corner radii
- 0 / 4 / 6 / 8 / 12 / 16 / 9999.
- **CTAs and inputs at 8px** (developer dialect — not pill, not square).
- **Cards and IDE panes at 12px.**
- **Pills at 9999px** — timeline pills, badges, avatars.

### Layout rules
- 1200px max content width. 12-column editorial grid. Footer is a 5-column link list.
- The top nav (`--canvas` background, 64px height) does **not** float / stick / blur over content — it sits flat on the canvas.

### Imagery vibe
- N/A. No photography in the marketing surface. The vibe is type-and-code-and-cream.

---

## Iconography

The DESIGN.md spec does **not** ship an icon system. No icon font is referenced, no SVG sprite, no specific library. Inferred conventions:

- **No emoji** — none anywhere on the marketing surface or in spec. Color carries affect (timeline pastels), not emoji.
- **No unicode-glyph icons** as filler.
- **Tiny structural glyphs** (carets, arrows, x's) are likely inline SVG drawn at 1.5px stroke matching the editorial line weight.
- The **Cursor wordmark** itself is the strongest "icon" on the brand — set in CursorGothic, often colored `--primary`.

### Substitution
For app-icon and metaphor coverage where the marketing surface needs an icon (e.g. UI kit recreation), we link **[Lucide](https://lucide.dev)** via CDN — 1.5px stroke matches the editorial weight and the timeline-pill restraint better than Heroicons or Phosphor. **This is a substitution, flagged here**, not a Cursor decision.

In the in-product agent timeline, "icons" are colored **pastel pills with uppercase mono-style labels** ("THINKING", "READING") — the pill itself is the icon. Don't replace pills with glyphs.

### Logos / brand marks
- `assets/wordmark.svg` — Cursor wordmark recreated as type (Inter substitute @ display weight, `--primary` orange). The licensed CursorGothic wordmark is the production asset; this is a placeholder.
- `assets/wordmark-ink.svg` — same, ink color, for use on photographic backgrounds (none currently exist on the marketing surface).

No background images, no full-bleed photography, no generic illustrations — none exist in the spec to copy in.

---

## Index — what's in this folder

```
README.md                     ← you are here
colors_and_type.css           ← CSS vars: colors, type, spacing, radii (single source)
SKILL.md                      ← cross-compat with Agent Skills

assets/
  wordmark.svg                ← Cursor wordmark (orange, type-based recreation)
  wordmark-ink.svg            ← Ink variant

fonts/                        ← (linked from Google Fonts; no local files)

preview/                      ← Design System tab cards (700×~auto each)
  type-*.html
  color-*.html
  spacing-*.html
  component-*.html
  brand-*.html

ui_kits/
  marketing-site/
    README.md
    index.html                ← interactive marketing-site recreation
    TopNav.jsx
    HeroBand.jsx
    IdeMockupCard.jsx
    FeatureCard.jsx
    TimelinePill.jsx
    PricingTier.jsx
    CtaBand.jsx
    Footer.jsx
    Buttons.jsx

uploads/
  DESIGN.md                   ← original spec (canonical)
```

### UI kits provided
- **`marketing-site`** — the public Cursor.com surface. Top nav, hero with IDE-mockup card, feature grid, AI-timeline showcase, pricing tiers, CTA band, footer.

### Substitutions flagged
1. **CursorGothic → Inter** (`-1.5%` letter-spacing) per spec's own note. Drop the licensed font into `fonts/` and update the first entry of `--font-display` / `--font-body` in `colors_and_type.css`.
2. **Iconography → Lucide via CDN.** Spec does not define an icon system; Lucide's 1.5px stroke is the closest editorial match.

---

## Caveats

- No codebase or Figma access — all UI kit recreations are built from `DESIGN.md` prose alone, supplemented by the typical structure of a developer-tools marketing site.
- The Cursor wordmark in `assets/` is a type-based placeholder, not the licensed mark.
- Animation timings are inferred (the spec marks them out-of-scope).
- In-product surfaces beyond the marketing IDE-mockup card are not in scope — only the agent-timeline pill palette is captured.
