# Lexara Design System

Lexara — платформа с агентной AI-системой для анализа договоров и выработки стратегии переговоров. (Lexara is a platform with an agentic AI system for contract analysis and negotiation strategy.)

The product blends two demanding domains: **enterprise legal tooling** (where trust, precision, and clarity matter more than expressiveness) and **agentic AI surfaces** (where the experience must convey reasoning, momentum, and confidence). The visual system reflects that — calm, glassy, layered, with restrained chromatic accents, and an editorial type rhythm that lets long-form contract content breathe.

## Sources

- **Figma:** "DesignCode UI — Figma Design UI Kit & Design System (Community)" mounted as a virtual filesystem under `.fig/`. This kit was used as the visual foundation; tokens (color palette, typography scale, spacing, shadows, glass cards) come from there. Lexara-specific surfaces are recomposed on top of it.
- **Brand description:** the user-supplied one-liner above. No codebase, no website, no live UI was provided — every product surface here is a **proposed** recreation built from the brand statement and category conventions, not a reproduction of an existing Lexara product.

> ⚠️ Because no production Lexara source was attached, the UI kits below are best-guess hi-fi mockups. Treat them as a directional starting point — names, taxonomies, copy, and screen layouts are placeholders waiting for the real product to slot in.

---

## Index

| File | Purpose |
| --- | --- |
| `README.md` | This file. |
| `colors_and_type.css` | All design tokens: brand + neutral colors, semantic surface/text vars, typography scale, spacing, radii, shadows. Import this in any Lexara surface. |
| `SKILL.md` | Agent skill manifest (also usable in Claude Code). |
| `fonts/` | Webfonts (Inter variable + JetBrains Mono). |
| `assets/` | Logos, glyph marks, illustrations, background images. |
| `preview/` | Self-contained HTML cards that populate the Design System tab — colors, type, components, etc. |
| `ui_kits/app/` | Lexara web app — workspace, contract review, negotiation strategy, agent chat. |
| `ui_kits/marketing/` | Marketing site — hero, features, pricing teaser. |
| `scraps/` | Reference material from the source Figma. Not a deliverable. |

---

## Content fundamentals

Lexara's voice sits between **calm trusted advisor** and **technically sharp colleague**. It never patronises, never hypes.

- **Person.** First-person plural ("We flag …"), and second-person direct address to the user ("You can override any clause Lexara highlights"). Avoid "I" — Lexara is a system, not a sidekick persona.
- **Tone.** Measured, declarative, specific. Lead with the finding, then the reasoning. Numbers and clause references over adjectives.
- **Casing.** Sentence case for everything — buttons, headers, nav, table headers. No Title Case Buttons. No SHOUTY UI.
- **Punctuation.** Em dashes for asides. Oxford commas. No exclamation points. Periods at the end of full sentences in body, optional on single-line UI strings.
- **Lengths.** Buttons 1–3 words. Section headers ≤ 6 words. Toast/inline messages ≤ 12 words. Body copy aims for 50–75 chars per line.
- **Emoji.** No. Lexara is enterprise legal — emoji feel out of register. The single exception is the "✓" checkmark glyph used in success affordances (rendered as an SVG icon, not an emoji).
- **Numbers + currency.** Always concrete. "12 risk clauses flagged across 4 sections", not "many issues found". Currencies use locale-aware formatting; legal references (ст., §, cl.) preserved as-is.
- **AI honesty.** When Lexara is uncertain, say so. "Likely unfavourable — confirm with counsel" is on-brand; "Unfavourable!" is not. Show confidence as a number when one exists.
- **Bilingual readiness.** Strings are designed to work in Russian and English. Russian copy is the primary; English mirrors it. Avoid idioms that don't translate cleanly.

**Examples**

| Good | Bad |
| --- | --- |
| "Lexara found 3 unusual indemnity terms in §7." | "Heads up — looks like there's some weird stuff in your contract!!" |
| "Counter-offer drafted. Review before sending." | "Done! ✨ Your counter is ready 🎉" |
| "Confidence 84%. Based on 1,240 similar NDAs." | "We're pretty sure about this one." |
| "Negotiation strategy" | "Negotiation Strategy Hub" |

---

## Visual foundations

**Mood.** Glass-and-graphite. Surfaces are translucent or near-white, set on cool neutral backgrounds with quiet light leaks. The system feels like reading on premium paper under soft daylight — never neon, never "AI-purple-gradient slop."

**Color.**
- **Neutrals carry 90% of the UI.** A warm-cool slate scale (`N10`–`N900`) from the source kit anchors text, surfaces and dividers. Page backgrounds sit at `N10`/`N20`; cards lift to `#ffffff` with a subtle border.
- **Brand accent: Lexara Indigo** (`#3D3FE2`, derived from the kit's indigo family). Used sparingly — primary buttons, active states, key data viz, the wordmark. One accent at a time per screen.
- **Secondary accent: Citrine** (`#E8B23B`) — for highlight badges and "Lexara found this" affordances.
- **Semantic:** `success #007D00`, `warning #C54600`, `danger #B00020`, `info #0D69D4`. Pulled from the kit's high-contrast palette.
- **No bluish-purple gradients.** No emoji-coloured cards. No left-border accent cards.

**Typography.**
- **Inter** for everything UI and body. Variable weight (400 / 500 / 600 / 700).
- **JetBrains Mono** for clause IDs, contract diffs, and confidence numbers — anywhere monospaced precision matters.
- Display sizes (40px+) tighten letter-spacing to `-0.02em` and use 100% line-height. Body is 16/24, footnote 14/20, caption 13/18, small 12/16. Full scale in `colors_and_type.css`.

**Backgrounds.** Three patterns:
1. *Calm sheet* — solid `N10`, our default. 95% of screens.
2. *Soft aurora* — pale conic-ish gradient from `#EFE9FF` to `#F2F6FF` to `#FFFFFF`. Used behind hero modules, splash, empty states.
3. *Dark canvas* — `#0A0A12` for AI chat surfaces in dark mode; thin grain optional. Never full-bleed in light mode.

No hand-drawn illustrations. No photographic stock unless flagged as such.

**Glassmorphism.** Lifted cards use `backdrop-filter: blur(20px)` over a `rgba(255,255,255,0.5) → rgba(255,255,255,0.25)` linear gradient with a `1px` `rgba(255,255,255,0.05)` border. Layered shadow:  
`0 1px 0 rgba(0,0,0,.05), 0 4px 4px rgba(0,0,0,.05), 0 10px 10px rgba(0,0,0,.1)`.

**Cards.** Default card = `#FFFFFF`, `border-radius: 16px`, `1px solid rgba(0,0,0,0.05)`, shadow `0 1px 2px rgba(9,30,66,0.08)`. Inset cards (inside another card) drop the shadow and use `rgba(0,0,0,0.04)` border. No colored left-border cards.

**Corner radii.** `4 / 8 / 12 / 16 / 24 / 999`. Buttons and inputs at 8. Cards at 16. Modals and hero containers at 24. Pills/avatars at 999. Never use 6/10/14 — keep the rhythm.

**Spacing.** 4px base. Scale `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56 / 80`. Form rows 12px gap; card padding 20–24; section gaps 56–80.

**Shadows / elevation.** Three named tiers:
- `shadow-sm` — `0 1px 2px rgba(9,30,66,.08)` — resting cards.
- `shadow-md` — `0 4px 12px rgba(9,30,66,.10)` — popovers, dropdowns.
- `shadow-lg` — `0 10px 32px rgba(9,30,66,.16)` — modals, command palette.
- `shadow-glass` — the layered glass stack above.

**Borders.** 1px. Default `rgba(9,30,66,0.08)`. Focus ring: `0 0 0 3px rgba(61,63,226,0.25)` + `border-color: var(--brand)`.

**Hover states.** Buttons darken by ~6% (lower L* in oklch). Cards lift `translateY(-1px)` and bump shadow to `md`. Links go from `N700` to `brand`. Never invert colors on hover.

**Press states.** `transform: scale(0.98)` on buttons. No color change.

**Animation.** 150ms `cubic-bezier(0.2, 0.8, 0.2, 1)` for most state changes. 240ms for layout shifts. No bounces. No springy overshoot — Lexara should feel deliberate, not playful. Reduce-motion users get fades only.

**Transparency / blur.** Used for the global navigation bar (sticky, `backdrop-filter: blur(12px)` over `rgba(255,255,255,0.7)`), command palette overlay, and the agent's thinking surface. Avoid blur on dense content.

**Imagery vibe.** Cool, neutral, slightly desaturated. If photography is needed: natural daylight, no people staring at the camera, paper/desk/architecture textures preferred.

**Layout rules.**
- Max content width 1200px. Wider for tables and the contract reader (1440px).
- Sticky top nav 64px tall on web, 56px in app surfaces.
- App surfaces use a 240px collapsible left rail.
- Right inspector panel 360–400px when present.

---

## Iconography

The source DesignCode kit ships an extensive Communication / Editing / Files / Finance / Office / Tech / User / Symbols icon set. **We use Lucide** as our primary CDN icon system because the visual weight (1.5px stroke, rounded line caps, 24px grid) matches the Figma kit's outline icons closely and is easy to drop into HTML. Lucide is loaded from CDN (`https://unpkg.com/lucide@latest`) in every UI surface.

- **Stroke style:** outline only, 1.5px nominal stroke, rounded caps and joins.
- **Sizing:** 16 / 20 / 24 / 32 px. 16 inside dense rows, 20 default in buttons, 24 in nav, 32 for empty-state hero icons.
- **Color:** inherits `currentColor`. Never multi-coloured. Brand accent only when active.
- **Custom marks:** the Lexara wordmark and "balance / scales" glyph live in `assets/` as SVG. The glyph is the only proprietary icon — everything else comes from Lucide.
- **No emoji as icons.** No PNG icons. No unicode glyphs as decoration except in monospaced contexts (•, →, ↗ for inline arrows).

> **⚠️ Substitution flag:** the original Figma kit's icon set was not exported into this design system as individual SVGs (it would have been ~600 icons of varying styles). Lucide is a close stylistic match but not identical. If pixel-fidelity to the kit's icons is required, ask and we'll extract specific icon SVGs from `.fig/Icons/`.

---

## Font substitution flag

**Inter** is the actual kit font and is loaded from Google Fonts.  
**JetBrains Mono** is added by Lexara for code/contract/diff surfaces — not in the source kit. If a different mono is preferred, swap the `--font-mono` var.  
The kit also references `SF Pro` (Apple system) sparingly. We do not ship SF Pro (it's not freely redistributable); Inter handles all text.
