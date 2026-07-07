---
name: dark-editorial-portfolio
description: Premium dark editorial design skill for portfolios, creative developer sites, and agency landing pages. Near-black base with a single bold accent, aggressive uppercase typography, scroll-reveal sequencing, one deliberate light color-block, and zero decoration-only elements.
---

# Dark Editorial Portfolio — Design Skill

> Personal portfolios, creative developer sites, agency landing pages, and premium single-page brand surfaces. Not dashboards, not data tables, not multi-step product UI.
> Every rule below is **contextual**. None of it fires automatically. First read the brief, then pull only what fits.

---

## 0. BRIEF INFERENCE

Before touching code, **infer what the user actually wants**. This aesthetic is specific — it does not fit every brief.

### 0.A When this skill applies

This skill was extracted from a real production portfolio (Kodiah Bertrand). It applies when the brief reads as:

1. **Page kind** — personal portfolio (developer / designer / creative), agency landing page, creative studio site, premium single-page brand surface.
2. **Vibe words** — "dark", "editorial", "premium", "bold", "minimal but loud", "uppercase", "mono labels", "creative developer", "brand identity site".
3. **Reference signals** — the user names Awwwards editorial sites, dark-mode portfolios, creative agency work, sites with big display type and restrained color.
4. **Audience** — design-conscious hiring managers, potential clients, creative peers. The aesthetic signals taste, craft, and confidence.

### 0.B When this skill does NOT apply

- B2B SaaS landing pages (use the general design-taste-frontend skill)
- Dashboards or data-heavy product UI
- Public-sector / trust-first / accessibility-critical sites
- Multi-step product UI or e-commerce
- Light-mode-only editorial or print-emulating sites

### 0.C Output a one-line "Design Read"

Before any code: **"Reading this as: \<page kind> for \<audience>, dark editorial portfolio aesthetic, \<design system or stack>."**

Examples:

- _"Reading this as: creative developer portfolio for potential clients, dark editorial aesthetic, Next.js + Tailwind + Motion."_
- _"Reading this as: design agency landing page for brand-conscious founders, dark editorial aesthetic, Next.js + Tailwind + Motion."_

### 0.D If the brief is ambiguous, ask ONE question

Example: _"Should this feel more minimal-restrained or more expressive-editorial?"_

If you can infer, do not ask. Declare the design read and proceed.

---

## 1. THE THREE DIALS

This aesthetic operates at a specific point on the dial spectrum. Defaults are set. Override only when the brief demands it.

| Dial               | Default | Range | Notes                                                                                |
| ------------------ | ------- | ----- | ------------------------------------------------------------------------------------ |
| `DESIGN_VARIANCE`  | 7       | 6–8   | Asymmetric enough to feel authored, not chaotic enough to feel unreadable            |
| `MOTION_INTENSITY` | 5       | 4–7   | Scroll reveals only. No GSAP hijacks, no marquees beyond one logo strip, no parallax |
| `VISUAL_DENSITY`   | 3       | 2–4   | Art-gallery spacing. Generous section gaps. No cramming                              |

**Baseline:** `7 / 5 / 3`. These are the dial values of the reference project. Adjust only when the brief explicitly calls for more or less of something.

### 1.A How the dials drive output

- `DESIGN_VARIANCE: 7` → Staggered project grids, asymmetric about layout, one deliberate theme-flip section, slash-labels that accumulate.
- `MOTION_INTENSITY: 5` → Scroll-reveal stagger on every section, one logo marquee, hover-translate on CTAs. No scroll-jacking, no sticky-stack, no horizontal-pan.
- `VISUAL_DENSITY: 3` → `py-28 lg:py-40` section spacing, large display type, generous whitespace, max-width 1400px content containment.

---

## 2. DESIGN SYSTEM — THE DARK EDITORIAL STACK

This is a **specific aesthetic system**, not a component library. It has a defined color palette, type stack, component vocabulary, and layout rules.

### 2.A Color System

| Token    | Hex       | CSS Variable       | Role                                               |
| -------- | --------- | ------------------ | -------------------------------------------------- |
| Ink      | `#111111` | `--color-ink`      | Page base / background                             |
| Ink Soft | `#161616` | `--color-ink-soft` | Raised dark surfaces                               |
| Panel    | `#232423` | `--color-panel`    | Dropdown / inset panels (mobile menu)              |
| Bone     | `#c2c2c2` | `--color-bone`     | Body text on dark backgrounds                      |
| Paper    | `#eeeeee` | `--color-paper`    | The ONE light section (Projects/Work)              |
| Accent   | `#df720c` | `--color-accent`   | Orange — CTAs, highlights, slash labels, selection |
| Gold     | `#f8c100` | `--color-gold`     | Rating badge ONLY (testimonials)                   |

**Hard rules:**

- ONE accent color for the entire page. Lock it. Audit every component.
- ONE light section allowed per page (the "color block"). Never alternate dark/light/dark/light.
- Do NOT use pure black (`#000`) or pure white (`#fff`). Always off-black and off-white.
- The accent is saturated but restrained — no neon, no glow, no gradient text.

### 2.B Type System

| Role             | Font          | CSS Variable     | Weight | Notes                                                              |
| ---------------- | ------------- | ---------------- | ------ | ------------------------------------------------------------------ |
| Mega display     | Humane        | `--font-display` | 400    | Hero headline, footer wordmark. `text-[clamp(4.75rem,21vw,19rem)]` |
| Section headings | Bebas Neue    | `--font-heading` | 400    | All headings. `text-[clamp(2.75rem,6vw,5.5rem)]`                   |
| Body             | IBM Plex Sans | `--font-sans`    | 400    | Paragraphs, contact info, body copy                                |
| Labels / UI      | IBM Plex Mono | `--font-mono`    | 400    | Nav items, eyebrows, tags, buttons, form labels, captions          |

**Hard rules:**

- ALL headings are uppercase. Never mixed-case headings.
- ALL labels, nav items, buttons, tags, and captions are uppercase mono at `text-[12px]` or `text-[13px]` with `tracking-wide` or `tracking-[0.04em]`.
- Body text is the ONLY mixed-case text on the page. Everything else is uppercase.
- No serif fonts. Ever. The aesthetic is sans-display, not editorial-serif.
- No Inter. No Fraunces. No Instrument Serif.
- Fonts are self-hosted via `@font-face` with `font-display: swap`. Never Google Fonts `<link>`.
- The display font (Humane) gets `leading-[0.8]` or tighter. Headings get `leading-[0.92]`. Body gets `leading-relaxed`.

### 2.C Stack (mandatory)

| Layer      | Choice                    | Notes                                                         |
| ---------- | ------------------------- | ------------------------------------------------------------- |
| Framework  | Next.js 15 (App Router)   | Server Components by default                                  |
| Styling    | Tailwind CSS v4           | `@theme` tokens in globals.css, `@tailwindcss/postcss` plugin |
| Animation  | Motion (`motion/react`)   | Scroll-reveal only. Import from `motion/react`                |
| Icons      | `@phosphor-icons/react`   | SSR variants (`/dist/ssr`) for server components              |
| Utilities  | `clsx` + `tailwind-merge` | Standard `cn()` helper                                        |
| Fonts      | Self-hosted `@font-face`  | Served from CDN. `font-display: swap`                         |
| TypeScript | Strict mode               | `tsc --noEmit` for type-checking                              |

**No GSAP. No Three.js. No Framer Motion legacy package.** The motion layer is scroll-reveal only — Motion's `whileInView` covers everything.

---

## 3. ARCHITECTURE & FILE STRUCTURE

### 3.A Directory Layout

```
src/
  app/
    globals.css          Theme tokens, fonts, base styles, utilities
    layout.tsx           Root layout, metadata, viewport themeColor
    page.tsx             Single-page composition (thin route)
  components/
    site-header.tsx      Fixed header, scroll-aware bg, mobile slide-out
    hero.tsx             Full-viewport hero
    client-strip.tsx     Logo marquee
    about.tsx            Portrait + bio + role bar
    services.tsx         Accordion-style service list
    projects.tsx         THE light section — staggered gallery + stats
    testimonials.tsx     Horizontal scroll-snap testimonial rail
    contact.tsx          Contact info + form with all UI states
    site-footer.tsx      Nav links, oversized wordmark, copyright
    ui/
      reveal.tsx         Scroll-reveal wrapper (Client Component)
      section-label.tsx  Slash-prefixed mono label (Server Component)
      gradient-orb.tsx   Decorative blurred blob (Server Component)
  lib/
    content.ts           ALL copy, nav links, images, data — single source of truth
    utils.ts             cn() helper
```

### 3.B Layer Rules

- **`app/`** — thin routes. `layout.tsx` wraps everything. `page.tsx` composes section components. No logic here.
- **`components/`** — section components and UI primitives. Server Components by default. Add `"use client"` ONLY when the component uses hooks, event handlers, or Motion.
- **`components/ui/`** — shared primitives with zero business logic. Reusable across projects.
- **`lib/`** — pure logic. Content data, utility functions. No JSX, no hooks, no components.

### 3.C State Management

- `useState` only. Two components need it: `site-header` (scroll + mobile menu state) and `contact` (form state).
- No Zustand. No Jotai. No React Context. No global state.
- Never `useState` for scroll position — use `scroll` event listener in the header (the one exception, because it only sets a boolean once per scroll, not on every frame).

### 3.D Responsiveness

- Standard breakpoints: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Content containment: `max-w-[1400px] mx-auto` on every section.
- Section padding: `px-5 py-28 sm:px-8 lg:py-40` (default). Hero uses `pt-24 pb-16`.
- Hero: `min-h-[100dvh]`, never `h-screen`.
- Nav: single line at desktop, hamburger at `< md`. Height: 68px.
- Mobile collapse: every multi-column layout has an explicit `< md` fallback in the same component.

### 3.E Images

- ALL images served from CDN (Google Cloud Storage or equivalent). Nothing in `public/`.
- Next.js `<Image>` with explicit `width`, `height`, `sizes`, and `alt` on every instance.
- `next.config.ts` whitelists CDN hostnames in `images.remotePatterns`.
- Portraits: grayscale. Project images: full color, hover zoom.
- Testimonial avatars: 48×48, rounded-full, object-cover.
- Service images: 300px width on desktop, aspect-[4/3], object-cover.

---

## 4. COMPONENT PATTERNS (The Kodiah Vocabulary)

These are the specific component patterns that define this aesthetic. Each has a canonical structure.

### 4.A SectionLabel — The Slash Marker

The signature section marker. An orange mono caption prefixed with accumulating forward slashes.

```tsx
export function SectionLabel({
    slashes = 1,
    children,
    className,
}: {
    slashes?: number
    children: React.ReactNode
    className?: string
}) {
    return (
        <p
            className={cn(
                "text-accent font-mono text-[13px] tracking-[0.04em] uppercase",
                className
            )}
        >
            <span aria-hidden className="text-accent/70 mr-2">
                {"/".repeat(slashes)}
            </span>
            {children}
        </p>
    )
}
```

**Rule:** slashes accumulate as you move down the page. Hero = 0, About = 1, Services = 2, Projects = 3, Testimonials = 4, Contact = 5. The count is not displayed as a number — it's visual rhythm, not enumeration.

**Anti-pattern:** Never write `01 / SERVICES` or `002 · Capabilities`. The slashes replace section numbering entirely.

### 4.B Reveal — Scroll-Reveal Wrapper

A Client Component that wraps content in Motion's `whileInView` stagger.

```tsx
"use client"
import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react"

type RevealProps = HTMLMotionProps<"div"> & {
    delay?: number
    y?: number
}

export function Reveal({ delay = 0, y = 28, children, ...props }: RevealProps) {
    const reduce = useReducedMotion()
    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            {...props}
        >
            {children}
        </motion.div>
    )
}
```

**Critical details:**

- The custom cubic-bezier `[0.16, 1, 0.3, 1]` is the signature easing. Never substitute.
- `amount: 0.25` — triggers when 25% of the element is in view. Not `0.5`.
- `once: true` — content reveals once, stays visible. No exit animations.
- `useReducedMotion()` — collapses to static when user prefers reduced motion.
- Default travel: `y: 28`. Default duration: `0.7s`.
- Stagger is achieved by passing increasing `delay` props (0, 0.06, 0.12, 0.18...).

**Rule:** every section gets Reveal wrapping. The hero's first element gets `delay={0}`, the headline gets `delay={0.08}`, the subtext gets `delay={0.16}`, the CTAs get `delay={0.24}`. Service items in a list get `delay={i * 0.05}`. This creates a consistent reading rhythm.

### 4.C GradientOrb — Ambient Glow

A decorative blurred gradient blob. Always `pointer-events-none`, `aria-hidden`, rendered at `-z-10` with `blur-[120px]`.

```tsx
export function GradientOrb({
    className,
    variant = "amber",
}: {
    className?: string
    variant?: "amber" | "moss"
}) {
    const palette =
        variant === "amber"
            ? "from-accent/45 via-accent/10"
            : "from-emerald-500/25 via-emerald-600/8"

    return (
        <div
            aria-hidden
            className={cn(
                "pointer-events-none absolute -z-10 rounded-full bg-gradient-to-br to-transparent blur-[120px]",
                palette,
                className
            )}
        />
    )
}
```

**Rule:** maximum 2 orbs on the page at once. Hero gets one amber + one moss. About gets one moss. Contact gets one amber. Footer gets one amber. Never put orbs in every section. Never let them overlap text legibly. They are background atmosphere, not foreground decoration.

### 4.D The Hero

The hero has a specific structure. It is NOT flexible — it is a proven composition.

```
┌──────────────────────────────────────────┐
│  [GradientOrb moss]    [GradientOrb amber]│
│                                          │
│    ● One project slot open for Q3  (pill)│
│                                          │
│         CREATIVE                         │
│         DEVELOPER.  (mega display, clamp)│
│                                          │
│  I'm Name, a creative developer building │
│  premium digital products...  (≤25 words)│
│                                          │
│    [View work →]   [Get in touch]  (CTAs)│
│                                          │
└──────────────────────────────────────────┘
```

**Hero composition rules:**

1. **Eyebrow:** A pill badge with availability info. `rounded-full border border-white/12 bg-white/5`. Contains a small colored dot (`size-1.5 rounded-full bg-accent`) + mono text. This replaces AI-default eyebrows like "V0.6", "BETA", "EARLY ACCESS" — the pill shows real availability, not a version label.
2. **Headline:** Mega display font, `text-[clamp(4.75rem,21vw,19rem)]`, `leading-[0.8]`, uppercase. Max 2-3 words per line. Ends with an accent-colored period.
3. **Subtext:** `text-lg leading-relaxed text-bone/90`, max 25 words, max 3 lines. The value prop in one sentence.
4. **CTAs:** Two buttons side by side. Primary = `bg-accent text-ink` (filled). Secondary = `border border-white/15 text-white` (outline). Both are `rounded-full`, mono uppercase, with `hover:-translate-y-px active:translate-y-0`.
5. **Total hero elements:** Exactly 4 (eyebrow, headline, subtext, CTAs). No logo wall in the hero. No tagline below CTAs. No trust micro-strip.

### 4.E The Logo Marquee (ClientStrip)

A single horizontal marquee of brand logos. This is the ONE marquee allowed per page.

```
Edge-fade mask ─────────────────────────────
  [logo] [logo] [logo] [logo] [logo] [logo] → infinite loop
Edge-fade mask ─────────────────────────────
```

**Canonical structure:**

- `border-y border-white/8` to separate from hero and next section
- Small eyebrow above: `"Worked with teams using"` in mono, low opacity
- Logos from Simple Icons CDN: `https://cdn.simpleicons.org/{slug}/c2c2c2`
- Double the array for seamless looping: `[...clients, ...clients]`
- CSS animation: `@keyframes marquee { from { translateX(0) } to { translateX(-50%) } }` at 38s linear infinite
- Edge-fade mask via `.edge-fade` class (CSS `mask-image` with gradient transparency)
- Logos: `h-7 w-auto opacity-55 hover:opacity-100`
- No category labels under logos. Logos only.

**Anti-patterns:** Two or more marquees on the same page is banned. This is the one.

### 4.F The About Section

The signature asymmetric about layout.

```
┌──────────────────────────────────────────────┐
│  [GradientOrb moss]                          │
│                                              │
│  /// About  (section label)                  │
│                                              │
│  I DESIGN AND BUILD DIGITAL EXPERIENCES      │
│  THAT HELP AMBITIOUS BRANDS LOOK SHARP,      │
│  MOVE BEAUTIFULLY, AND FEEL INEVITABLE.      │
│                                              │
│  Creative Developer  |  Based in Brooklyn    │
│                       |  Available Q3        │
│                                    ┌────────┐│
│                                    │        ││
│                                    │ portrait││
│                                    │        ││
│                             small caption───┘│
└──────────────────────────────────────────────┘
```

**Rules:**

- Grid: `lg:grid-cols-[0.82fr_1.18fr]` — the text side is wider, the portrait side is narrower.
- On mobile, portrait stacks second (`order-2 lg:order-1`).
- Role bar below heading: mono uppercase, pipe-separated (via `w-px bg-white/15` dividers), with accent color on availability.
- Portrait: grayscale, `max-w-md`.
- Small caption under portrait: right-aligned, `text-bone/70`.

### 4.G The Services Section

An accordion-style vertical list — NOT cards, NOT a grid.

```
─── border-t border-white/10 ───
  01  WEB DESIGN & DEVELOPMENT
      [image 300px 4:3]  [tag pill] [tag pill] [tag pill]
─── divide-y border-white/10 ───
  02  BRANDING & IDENTITY
      [image 300px 4:3]  [tag pill] [tag pill]
─── divide-y border-white/10 ───
```

**Rules:**

- Each service is an `<article>` with `grid lg:grid-cols-2`.
- Left column: number badge (`rounded-md border bg-white/5 px-2.5 py-1 font-mono`) + heading.
- Right column: image (`aspect-[4/3] w-[300px]`) + tag pills (`rounded-full bg-white/8 px-4 py-2 font-mono`).
- Dividers: `border-t` on the container, `divide-y divide-white/10` between items.
- Number badges use 2-digit zero-padded format: `01`, `02`, `03`, `04`. This is data, not section numbering — each service number is intrinsic to the service, not a page-position label.

### 4.H The Projects Section — THE Light Color Block

This is the ONE section on the page that flips to light mode. It is deliberate, not accidental.

```
┌──────────────────────────────────────────────┐
│  bg-paper (the ONE light section)            │
│                                              │
│  ////// Selected Work  (section label)       │
│  RECENT PROJECTS I'M PROUD OF                │
│                                              │
│  ┌──────────┐    ┌──────────┐               │
│  │          │    │          │               │
│  │  image   │    │  image   │  ← offset     │
│  │          │    │          │               │
│  └──────────┘    └──────────┘               │
│  Project Title   Project Title               │
│  Category        Category                    │
│                                              │
│  ─── border-t border-ink/10 ───              │
│  10+              120+    40+     4.9        │
│  Years designing  Products Brands  Rating    │
└──────────────────────────────────────────────┘
```

**Rules:**

- Section background: `bg-paper` (`#eeeeee`). Text color: `text-ink`.
- 2-column grid: `grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16`.
- Stagger: every other project has `md:mt-28` (the `offset` boolean in content data).
- Hover: image scales to `1.04` with `duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`.
- Project title: `font-heading uppercase`. Category: `font-mono text-[12px] uppercase text-ink/50`.
- Stats bar below the grid: `<dl>` with `grid-cols-2 lg:grid-cols-4`, separated by `border-t border-ink/10 pt-16`.
- Stat values: large display numbers (`font-heading text-[clamp(3.5rem,7vw,5.5rem)]`). Stat labels: small mono (`font-mono text-[12px] uppercase`).

**Critical rule:** This light section is the ONLY theme flip on the page. No other section uses `bg-paper`. The contrast is what makes it work. Two light sections would dilute it.

### 4.I The Testimonials Section

A horizontal scroll-snap rail — NOT a grid, NOT cards in a row.

```
┌──────────────────────────────────────────────┐
│  //////// Testimonials          [★ 4.9 avg] │
│  WHAT CLIENTS SAY                            │
│                                              │
│  ← scroll →                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ "quote"  │ │ "quote"  │ │ "quote"  │     │
│  │          │ │          │ │          │     │
│  │ ● Name   │ │ ● Name   │ │ ● Name   │     │
│  │   Role   │ │   Role   │ │   Role   │     │
│  └──────────┘ └──────────┘ └──────────┘     │
└──────────────────────────────────────────────┘
```

**Rules:**

- Rating badge: `bg-gold text-ink rounded-full` with a filled star icon, the numeric rating in `font-heading`, and "avg rating" in mono. Positioned top-right on desktop, inline on mobile.
- Cards: `w-[86vw] sm:w-[440px] flex-none snap-start` — not equal-width grid columns.
- Container: `flex snap-x snap-mandatory gap-5 overflow-x-auto`.
- Hide scrollbar: `.no-scrollbar` class.
- Edge-fade mask on the container for the horizontal scroll experience.
- Card background: `bg-white/[0.06] p-8` — subtle elevation, not a bordered card.
- Quotes: `text-lg leading-relaxed text-white`, wrapped in typographic quotes (`&ldquo;`/`&rdquo;`).
- Attribution: `font-mono uppercase` name + `font-mono text-bone/55` role.
- Avatar: `size-12 rounded-full object-cover`.
- Max 3 lines per quote. Cut longer quotes.

### 4.J The Contact Section

A two-column layout: contact info on the left, form on the right.

```
┌──────────────────────────────────────────────┐
│  [GradientOrb amber centered bottom]         │
│                                              │
│  ///// Contact          ┌──────────────────┐ │
│  LET'S WORK             │  Full name       │ │
│  TOGETHER               │  ─────────────── │ │
│                         │  Email           │ │
│  Email →                │  ─────────────── │ │
│  hello@...com           │  Project details │ │
│                         │  ─────────────── │ │
│  Phone                  │                  │ │
│  +1 (312) 847-1928      │  [Send message]  │ │
│                         └──────────────────┘ │
│  [GitHub] [LinkedIn]                         │
│  [X] [Dribbble]                              │
└──────────────────────────────────────────────┘
```

**Rules:**

- Grid: `lg:grid-cols-2 lg:gap-24`.
- Heading: `font-heading text-[clamp(3rem,7vw,7rem)] uppercase leading-[0.88]`.
- Contact links: label above value. Label = `font-mono text-[12px] uppercase text-bone/55`. Value = `text-xl text-white`.
- Email link has an `ArrowUpRight` icon and `hover:text-accent`.
- Social icons: `size-11 rounded-full border border-white/15`, hover changes border to accent.
- Form background: `bg-white/[0.05] p-7 sm:p-10` — subtle panel, not a white card.

### 4.K Form Pattern

The contact form uses **border-bottom inputs** — no full boxes, just an underline.

```tsx
<input className="placeholder:text-bone/30 focus:border-accent border-b border-white/15 bg-transparent py-3 text-white transition-colors outline-none" />
```

**Rules:**

- Label ABOVE input: `font-mono text-[12px] uppercase tracking-wide text-bone`.
- Input: border-bottom only, transparent background, white text, accent on focus.
- No placeholder-as-label. Placeholder is styling hint only (`text-bone/30`).
- Textarea: same border-bottom pattern, `resize-none`, `rows={4}`.
- Submit button: `rounded-full bg-white text-ink font-mono uppercase`, full width.
- Form states implemented: idle, submitting (button says "Sending...", disabled at 60% opacity), success (check icon + "Message sent" + personalized thank-you), error (red text below inputs with specific message).
- Validation: name/email/message required, email regex checked. Error message describes what's wrong.
- No real backend — simulated 900ms delay. The states are real, the submission is not.

### 4.L Navigation

A fixed header with scroll-aware background and mobile slide-out panel.

**Desktop nav:**

- Fixed at top: `fixed inset-x-0 top-0 z-50`.
- Transparent when at top, gains `bg-ink/80 backdrop-blur-xl border-b border-white/10` after scrolling 24px.
- Height: 68px. Max 80px.
- Logo: `font-heading text-2xl uppercase text-white` with accent period.
- Nav links: `font-mono text-[13px] uppercase tracking-[0.02em] text-bone hover:text-white`, spaced `gap-9`.
- CTA: `rounded-full bg-white text-ink`, always visible on desktop.
- Single line at desktop. If items don't fit, condense or hamburger.

**Mobile nav:**

- Hamburger button: `size-10 rounded-full border border-white/15`.
- Slide-out panel: slides from right, `w-[78%] max-w-sm`, `bg-panel`.
- Backdrop: `bg-black/70 backdrop-blur-sm`.
- Transition: `duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`.
- Nav items: `font-heading text-4xl uppercase`, stack vertically.
- CTA at bottom of panel: `bg-accent rounded-full`, full width.
- Body scroll locks when menu is open (`document.body.style.overflow = "hidden"`). Restored on close and on unmount.

### 4.M Footer

```
┌──────────────────────────────────────────────┐
│  [GradientOrb amber center]                  │
│                                              │
│  Kodiah.     Navigate       Studio           │
│  tagline     Work           Brooklyn, NY     │
│              About          email            │
│              Services                        │
│              Contact                         │
│                                              │
│           KODIAH©  (mega wordmark)           │
│                                              │
│  ─── border-t ───────────────────────────── │
│  © 2026 Kodiah Bertrand    Built with care   │
└──────────────────────────────────────────────┘
```

**Rules:**

- Oversized wordmark: `font-display text-[clamp(7rem,30vw,26rem)] uppercase leading-[0.78]` with an accent-colored copyright symbol. `pointer-events-none select-none` — it's pure atmosphere.
- Top section: logo + tagline, nav links column, studio info column.
- Bottom bar: `border-t border-white/8 py-8`, copyright left, tagline right. Everything mono uppercase.
- Copyright uses `new Date().getFullYear()` — always current.

---

## 5. CONTENT ARCHITECTURE

### 5.A Centralized Content

ALL copy, imagery, and data live in `src/lib/content.ts`. This is non-negotiable. No hardcoded strings in components.

```ts
export const site = {
    name,
    wordmark,
    role,
    email,
    phone,
    location,
    availability,
}

export const nav = [{ label, href }]

export const clients = [
    // Simple Icons slugs
]

export const services = [{ no, title, tags, image, alt }]

export const projects = [{ title, category, image, alt, offset }]

export const stats = [{ value, label }]

export const testimonials = [{ quote, name, role, avatar }]

export const socials = [{ label, href }]
```

**Rules:**

- Images are constructed via a helper function that builds CDN URLs: `img(hash, generation)`.
- Every project has an `offset` boolean for the staggered grid.
- Every service has a `no` (2-digit string) for the number badge.
- Testimonials have real avatars, real names, real roles. No "Jane Doe".
- Stats values are strings (they include "+" or "." characters).
- Social links have both a `label` (for aria-label) and an `href`.
- Client logos use Simple Icons slugs for CDN rendering.

### 5.B Copy Rules

- Headlines: short, punchy, uppercase. 3-8 words. "Creative Developer.", "What clients say", "Let's work together".
- Subtext: 20-25 words max. One value-prop sentence.
- Eyebrows (section labels): one or two words. "About", "Services", "Selected Work", "Testimonials", "Contact".
- The pill badge text: real availability info. "One project slot open for Q3". Not "BETA" or "V0.6".
- Button labels: 1-3 words. "View work", "Get in touch", "Send message". Consistent across the page — the same label appears in nav, hero, and footer CTAs.
- No filler verbs: no "elevate", "seamless", "unleash", "revolutionize", "next-gen".
- No startup-slop brand names. Real-sounding names for projects, clients, testimonials.
- No em-dashes. Hyphens only.
- Real typographic quotes (`&ldquo;`/`&rdquo;`) for testimonials. Not straight ASCII.

---

## 6. MOTION LAYER

### 6.A Scroll-Reveal Only

This aesthetic uses ONE animation pattern: scroll-triggered reveal. Nothing else.

**Allowed:**

- `Reveal` component (Motion `whileInView`) on every section
- CSS marquee animation for the logo strip (one instance)
- CSS transitions on hover/active (`hover:-translate-y-px`, `hover:scale-[1.04]`, `hover:text-accent`)
- `transition-colors` on links and buttons

**Banned:**

- GSAP ScrollTrigger (no scroll-jacking)
- Sticky-stack sections
- Horizontal scroll hijack
- Parallax
- Magnetic hover effects
- Particle effects
- Glitch effects
- Text scramble
- Typewriter animations
- Infinite micro-animations (pulse, float, shimmer)
- `window.addEventListener("scroll")` for anything beyond the header's boolean toggle

### 6.B Reduced Motion

Every animation MUST respect `prefers-reduced-motion`:

- `Reveal` component: `useReducedMotion()` → renders static
- CSS marquee: `@media (prefers-reduced-motion: reduce)` → `animation: none`
- All transitions: `animation-duration: 0.001ms !important` under reduced motion
- `scroll-behavior: smooth` → `scroll-behavior: auto` under reduced motion

---

## 7. PERFORMANCE & ACCESSIBILITY

### 7.A Images

- Next.js `<Image>` with explicit `width`, `height`, `sizes`, `alt` — always.
- No `fill` without `sizes`.
- Service images: `sizes="(max-width: 640px) 100vw, 300px"`.
- Project images: `sizes="(max-width: 768px) 100vw, 45vw"`.
- Avatars: fixed `width={48} height={48}`.

### 7.B Core Web Vitals

- Hero has no blocking images — gradient orbs are CSS, text renders immediately.
- All images below the fold use `loading="lazy"` or are inside `Reveal` (which delays render anyway).
- Fonts use `font-display: swap` — text is visible during font load.
- No heavy JavaScript — Motion is the only animation library.
- Scroll listener in header uses `{ passive: true }`.

### 7.C Accessibility

- All interactive elements have focus-visible styles.
- Form inputs have associated `<label>` elements with `htmlFor`.
- Error messages use `role="alert"`.
- Mobile menu button uses `aria-expanded` and `aria-label`.
- Gradient orbs use `aria-hidden`.
- Duplicate marquee logos use `aria-hidden`.
- Slash prefix in SectionLabel uses `aria-hidden`.
- Color contrast: bone (`#c2c2c2`) on ink (`#111111`) passes WCAG AA. Accent (`#df720c`) on ink passes for large text.
- `prefers-reduced-motion` fully respected.
- Keyboard-navigable mobile menu: `tabIndex` toggles with open state.

### 7.D Z-Index Scale

- `z-50`: fixed header
- `z-10`: nothing by default (gradient orbs use `-z-10`)
- No arbitrary `z-50` or `z-10` elsewhere. The scale is: header gets `z-50`, everything else is auto.

---

## 8. FORBIDDEN PATTERNS (AI Tells)

These patterns were deliberately avoided in the reference project. They are banned in this aesthetic.

### 8.A Typography

- NO mixed-case headings. ALL headings are uppercase.
- NO serif fonts. Period.
- NO Inter as default.
- NO em-dashes (`—`). Hyphens only.
- NO oversized H1s that just scream. Scale is controlled by the display font, not by `text-8xl` on a sans-serif.
- NO `<br>`-broken italic headlines. Headlines are single statements, not line-break poetry.
- NO em-dash or en-dash in quotes. Attribution uses a regular hyphen with spaces.

### 8.B Color

- NO AI-purple gradients. The accent is orange. If the brand is not orange, pick ONE other saturated accent.
- NO pure black (`#000`) or pure white (`#fff`).
- NO oversaturated accents. `df720c` is saturated but not neon.
- NO gradient text on headers.
- NO multiple light sections. ONE light section per page.
- NO warm beige/cream/brass/oxblood palette. This is a dark editorial aesthetic, not premium-consumer.

### 8.C Layout

- NO centered hero (except on mobile, where everything stacks). Desktop hero is centered only because it's a single-column layout with full-width type.
- NO 3-column equal feature cards. The services section uses a vertical accordion list, not cards.
- NO zigzag image-text alternation beyond the services section's natural 2-column layout (which is not "zigzag" — it's a list with consistent left-number + right-image structure).
- NO bento grids. Project grid is a simple 2-column staggered gallery.
- NO section-numbering labels (`01 / SERVICES`, `002 · Capabilities`). The slash labels provide visual rhythm without enumeration.
- NO "left big headline + right small explainer" split-header pattern.

### 8.D Content

- NO "Jane Doe" or generic names. Real-sounding, context-appropriate names.
- NO "Acme", "Nexus", "SmartFlow" brand names.
- NO fake-perfect numbers. Stats have "+" signs and realistic values.
- NO "Quietly trusted by" or "Quietly in use at" copy.
- NO weather strips, locale strips, time displays.
- NO scroll cues (`Scroll ↓`, `Scroll to explore`).
- NO version labels (`V0.6`, `BETA`, `ALPHA`, `INVITE-ONLY PREVIEW`).
- NO photo-credit captions as decoration (`Field study no. 12 · Photographer Name`).
- NO pills or tags overlaid on images. Tags are separate elements alongside images, not on top.
- NO "From the field" / "Field notes" / "On our desks" style poetic labels.
- NO micro-meta-sentences under section headings cluttering the space.
- NO `border-t` + `border-b` on every row of a list. The services section uses `border-t` on the container and `divide-y` between items — one separator per item, not two.

### 8.E Decoration

- NO decoration text strip at hero bottom (`BRAND. MOTION. SPATIAL.`).
- NO crosshair/hairline grid lines as decoration.
- NO decorative colored status dots everywhere. The ONE dot in the hero pill is there because it conveys real availability status (green dot = open slot).
- NO floating top-right sub-text in section headings.
- NO scoring/progress bars with filled background tracks.
- NO vertical rotated text.
- NO pills/labels overlaid on images.

---

## 9. DARK MODE PROTOCOL

This aesthetic is **dark by default**. The page base is `--color-ink` (`#111111`). There is no light-mode toggle — the Projects section is a deliberate design choice, not a mode switch.

- No `prefers-color-scheme` switching. The page IS dark mode.
- The `themeColor` viewport meta is set to `#111111`.
- Selection highlight is `bg-accent text-ink` — orange on black.
- The one light section uses `bg-paper text-ink` — all text colors are explicitly set to dark variants in that section only.
- If dark mode MUST be optional (user demand), use CSS variables and `prefers-color-scheme`, but the default is dark.

---

## 10. REDESIGN PROTOCOL

When applying this aesthetic to an existing site:

1. **Audit first.** Document current brand tokens, IA, content, and patterns.
2. **Preserve IA.** Keep URLs, nav labels, and content structure stable.
3. **Extract the accent.** If the brand already has a strong accent color, use it instead of orange. Orange is the reference's accent, not a mandatory color.
4. **Apply in order:**
    1. Color system (ink base + accent + one light section)
    2. Typography swap (Humane/Bebas/IBM stack → brand-appropriate equivalents)
    3. Section spacing and layout restructure
    4. Content centralization into `content.ts`
    5. Motion layer (scroll reveals)
    6. Polish (form states, hover transitions, mobile collapse)

---

## 11. OUT OF SCOPE

This skill is NOT for:

- B2B SaaS landing pages
- Dashboards or admin panels
- Data tables or dense data UI
- Multi-step forms or wizards
- E-commerce product pages
- Public-sector or accessibility-critical-only sites
- Light-mode-only editorial sites
- Blog or publication layouts with long-form reading

If the brief is one of the above, say so explicitly and reach for a different skill.

---

## 12. FINAL PRE-FLIGHT CHECK

Run every box before shipping. If any fails, fix it.

- [ ] **Design Read** declared (Section 0.C one-liner)?
- [ ] **Dial values** explicit: VARIANCE 6–8, MOTION 4–7, DENSITY 2–4?
- [ ] **Color lock**: ONE accent, used consistently across all sections?
- [ ] **ONE light section** on the page. No section alternation?
- [ ] **NO pure black or pure white** anywhere?
- [ ] **Type lock**: Humane/Bebas/IBM stack (or brand-equivalent mapped), ALL headings uppercase, ALL labels mono uppercase, body is the only mixed-case text?
- [ ] **NO serif fonts** anywhere?
- [ ] **NO Inter** as default?
- [ ] **NO em-dashes** (`—`) anywhere on the page?
- [ ] **Slash labels** used instead of section numbering?
- [ ] **Reveal wrapping** on every section, with staggered delays?
- [ ] **Reduced motion** handled in Reveal component AND CSS?
- [ ] **Gradient orbs**: max 2 on screen at once, always `aria-hidden pointer-events-none -z-10`?
- [ ] **Hero**: 4 elements max (eyebrow pill, headline, subtext ≤25 words, 2 CTAs), `min-h-[100dvh]`, `pt-24 pb-16`?
- [ ] **Hero eyebrow**: availability pill with real info, not version/BETA label?
- [ ] **Logo marquee**: ONE marquee total, Simple Icons CDN logos, no category labels, edge-fade mask?
- [ ] **Services**: vertical accordion list with dividers, NOT a card grid?
- [ ] **Projects**: THE light section, `bg-paper`, 2-column staggered grid, stats bar below?
- [ ] **Testimonials**: horizontal scroll-snap rail, max 3 lines per quote, rating badge, no em-dash in attribution?
- [ ] **Contact form**: border-bottom inputs, all states implemented (idle/submitting/success/error), labels ABOVE inputs?
- [ ] **Navigation**: single line at desktop (≤80px height), scroll-aware background, mobile slide-out with locked body scroll?
- [ ] **Footer**: oversized wordmark, nav + studio columns, copyright bar?
- [ ] **Content centralized** in `lib/content.ts`, no hardcoded strings in components?
- [ ] **All images** use Next.js `<Image>` with explicit `sizes`?
- [ ] **All images** served from CDN, `remotePatterns` configured?
- [ ] **No images in `public/`** directory?
- [ ] **Icons** from `@phosphor-icons/react` only, SSR variants in server components?
- [ ] **Client Components** only where necessary (header, contact form, Reveal)?
- [ ] **`"use client"`** at the top of every Client Component file?
- [ ] **`cn()` helper** used for conditional class merging?
- [ ] **No AI Tells** from Section 8 (no Jane Doe, no Acme, no version labels, no scroll cues, no decoration strips)?
- [ ] **Mobile collapse** explicit for every multi-column layout?
- [ ] **Copy audit**: every string is grammatical, no AI-hallucinated phrases?
- [ ] **CTA consistency**: same label for same intent across nav, hero, and footer?
- [ ] **WCAG AA contrast** on all text against its background?
- [ ] **No `h-screen`** — uses `min-h-[100dvh]`?
- [ ] **`max-w-[1400px] mx-auto`** on every section container?
- [ ] **Section spacing**: `py-28 lg:py-40` default, `px-5 sm:px-8`?

If a single checkbox cannot be honestly ticked, the page is not done. Fix it before delivering.

---

## APPENDIX A — Install Commands

```bash
# Core
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias

# Tailwind CSS v4 (if not included)
npm install tailwindcss @tailwindcss/postcss

# Animation
npm install motion

# Icons
npm install @phosphor-icons/react

# Utilities
npm install clsx tailwind-merge
```

## APPENDIX B — Tailwind v4 Theme Template (globals.css)

```css
@import "tailwindcss";

@theme {
    --color-ink: #111111;
    --color-ink-soft: #161616;
    --color-panel: #232423;
    --color-bone: #c2c2c2;
    --color-paper: #eeeeee;
    --color-accent: #df720c;
    --color-gold: #f8c100;

    --font-display: "Humane", "Arial Narrow", sans-serif;
    --font-heading: "Bebas Neue", "Arial Narrow", sans-serif;
    --font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
    --font-mono: "IBM Plex Mono", ui-monospace, "SFMono-Regular", monospace;
}
```

## APPENDIX C — next.config.ts Image Template

```ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "storage.googleapis.com" },
            { protocol: "https", hostname: "cdn.simpleicons.org" },
        ],
    },
}

export default nextConfig
```

## APPENDIX D — Edge-Fade & Marquee CSS

```css
.edge-fade {
    -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        #000 6%,
        #000 94%,
        transparent
    );
    mask-image: linear-gradient(
        to right,
        transparent,
        #000 6%,
        #000 94%,
        transparent
    );
}

.no-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
.animate-marquee {
    animation: marquee 38s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
    .animate-marquee {
        animation: none;
    }
    *,
    *::before,
    *::after {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
    }
}
```

---

**End of skill.** Every rule above was extracted from a real production portfolio. When in doubt, re-read the reference project components. The patterns are concrete, not theoretical.
