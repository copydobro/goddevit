# Lore — Visual Concept & Design System
> Date: 2026-03-19
> Derived from: 04_Brand_Strategy.md + 03_Design_Benchmark.md

---

## 1. Core Visual Metaphor

### The Hotkey Moment

The entire visual language of Lore is built around one moment: **the overlay appearing**.

A developer is buried in work — VS Code open, 14 tabs in the browser, Terminal in the background. A thought fires. They press `⌘⇧Space`. The screen darkens slightly. A minimal amber-bordered panel appears at center. They type. They press Enter. Everything goes back to normal. The thought is saved.

That moment — **the flash between having a thought and losing it** — is what Lore's design captures. The visual language should make you feel:
1. The calm of the dark workspace (your normal context)
2. The amber flash of the capture moment (Lore's interruption, minimal and purposeful)
3. The return to calm (the panel dismisses, you're back instantly)

**Visual vocabulary that flows from this metaphor:**
- Near-black backgrounds — the "dark workspace" you're always in
- Amber as the only warm element — the "flash" of a captured thought
- Minimal UI chrome — the panel is barely there, doesn't compete
- JetBrains Mono for input — this is a developer's terminal, familiar and trusted
- Subtle glow/blur effects — the overlay emerging from the dark

**What to avoid:** Gradients, particles, brain illustrations, network node graphs (all used by competitors). Lore's visual identity is the **absence of visual noise**, with a single amber accent.

---

## 2. Hero Section — Visual Direction

### Layout
```
[NAV: Lore logo ←——————————————————→ GitHub ↗  Discord ↗  Download ↓]

                    [Social proof strip: ★ PH #15 Day ·  122 upvotes  ·  15 GitHub ★]

                         Your thought in 3 seconds.
                     On your machine. Forever.

                  Lore captures what you're about to lose —
              a hotkey, a type, a dismiss. No folders. No cloud.
                  The AI runs locally so nothing leaves.

             [↓ Download for macOS]        [View on GitHub ↗]

        ┌────────────────────────────────────────────┐
        │  [HERO DEMO: looping GIF / video 6–8 sec]  │
        │                                            │
        │  Dark macOS desktop → ⌘⇧Space → amber     │
        │  panel → user types → panel closes →       │
        │  desktop back to normal                    │
        └────────────────────────────────────────────┘
```

### Hero Demo — Exact Animation Storyboard

**Duration:** 7 seconds, looping with 1-second hold at end before restart

| Frame | Time | What happens |
|---|---|---|
| 1 | 0:00 | macOS desktop, VS Code + browser visible, blurred/dimmed. Cursor blinks in VS Code. |
| 2 | 0:01 | Dark overlay dims screen 20%. `⌘⇧Space` key flash appears top-right for 0.3s. |
| 3 | 0:02 | Lore panel slides in (center, fast: 150ms ease-out). Panel: dark `#111113`, amber border glow `rgba(239,159,39,0.4)`, cursor blinks inside input. |
| 4 | 0:02.5 | Text types itself: `"follow up with Alex about the API rate limits"`. JetBrains Mono, amber text. |
| 5 | 0:05 | Enter key indicator flash. Panel fades out (200ms). |
| 6 | 0:05.5 | Desktop returns to normal. VS Code in focus. 1-second hold. |
| 7 | 0:07 | Loop restart. |

**Production notes:**
- Capture as actual screen recording on macOS (not illustrated)
- Use a real developer desktop for context realism (VS Code with code visible, meaningful tab titles)
- Export as both WebM (video autoplay loop) and GIF fallback
- Panel border: `1px solid rgba(239,159,39,0.35)`, `box-shadow: 0 0 40px rgba(239,159,39,0.12)`

---

## 3. Color System

### Palette

```
Background (page):     #0A0A0B
Surface (cards):       #111113
Surface elevated:      #161618
Border subtle:         #1E1E21
Border strong:         #2A2A2E

Accent primary:        #EF9F27  (amber)
Accent secondary:      #F5C870  (lighter amber, highlights)
Accent glow:           rgba(239,159,39,0.15)  (for glows and halos)

Text primary:          #F2F2F3
Text secondary:        #9B9BA2
Text muted:            #6B6B72
Text disabled:         #3D3D42

Success / local:       #4ADE80  (green, for "running locally" indicators)
Code / mono text:      #EF9F27  (amber, for JetBrains Mono elements)
```

### Usage Rules

- **Amber is earned** — only use `#EF9F27` for: the panel border in the demo, hotkey pills, CTA button text, section labels, and icon accents. Overuse kills the signal.
- **No gradients in copy sections** — gradients only in hero illustration background (subtle radial from `#0F0F10` to `#0A0A0B`). Copy sections stay flat.
- **White text for headlines** — `#F2F2F3` on `#0A0A0B`. Don't use amber for long-form text.
- **Green for local status** — the "Lore is running locally" indicator pill (in nav or hero) uses `#4ADE80`. This is the only green. It signals: active, alive, local.

---

## 4. Typography System

### Type Scale

```css
/* Hero Headline */
font: 600 68px/1.1 'Inter', sans-serif;
letter-spacing: -0.03em;
color: #F2F2F3;

/* Section Headline */
font: 600 40px/1.2 'Inter', sans-serif;
letter-spacing: -0.02em;

/* VP Card Title */
font: 500 20px/1.3 'Inter', sans-serif;

/* Body */
font: 400 17px/1.65 'Inter', sans-serif;
color: #9B9BA2;

/* Caption / Label */
font: 400 13px/1.5 'Inter', sans-serif;
color: #6B6B72;
letter-spacing: 0.02em;
text-transform: uppercase;

/* Hotkey Pill */
font: 500 13px/1 'JetBrains Mono', monospace;
background: rgba(239,159,39,0.12);
color: #EF9F27;
border: 1px solid rgba(239,159,39,0.3);
border-radius: 4px;
padding: 3px 7px;
```

### Typography Moments

**Hero headline — line break treatment:**
```
Your thought in 3 seconds.
On your machine. Forever.
```
Two-line structure, each line completes a thought. First line = speed. Second line = privacy + permanence.

**Section label style (above section headlines):**
```
SECTION_LABEL    (uppercase, muted amber, 12px, letter-spacing 0.1em)
Big Section Headline
```
Label anchors the section semantically; headline delivers the emotional hook.

**Hotkey callouts in copy:**
Inline `⌘⇧Space` rendered as amber pill — never spell out "Command-Shift-Space" in running text. The pill is a visual anchor that communicates developer audience.

---

## 5. Layout System

### Grid

```
Max content width: 1120px
Gutters: 24px (mobile) / 40px (desktop)
Section padding: 96px top/bottom (desktop) / 60px (mobile)
Card gap: 24px
```

### Section Rhythm

Each section follows a consistent 3-level hierarchy:
1. **Section label** — amber, uppercase, small — context anchor
2. **Section headline** — large, primary text — emotional hook
3. **Section body / cards** — secondary text — proof and detail

---

## 6. Section-by-Section Visual Direction

### NAV
```
[Lore]  ●  (amber dot = local status indicator, tooltip: "running locally")

                           [GitHub ↗] [Discord ↗] [Download ↓]
```
- `[Lore]` logo: Inter 600, white. No icon needed — the name is distinct.
- Amber dot: `8px`, `#4ADE80` (green — indicates app is alive), subtle pulse animation
- Nav background: `rgba(10,10,11,0.85)` + `backdrop-filter: blur(12px)` — sticky, frosted glass
- Download button: amber text, `#111113` background, amber border — not filled, outlined

---

### HERO

Visual hierarchy:
1. Social proof strip (top, small — earn trust before asking for click)
2. Headline (dominant, 68px)
3. Subheadline (17px, muted)
4. CTA pair (primary + secondary, 48px height)
5. Demo (below fold-line or in-frame depending on screen height)

**Social proof strip — pill format:**
```
[ ★ Product Hunt  #15 Day Rank · 122 upvotes ]   [ ⭐ 15 GitHub stars ]
```
Small, centered, above the headline. Dark background pills, amber star icons.

**CTA Button Treatment:**
- Primary (`Download for macOS`): amber background `#EF9F27`, near-black text `#0A0A0B`, 48px height, 16px radius, Inter 500 16px. On hover: brightness 110%, subtle amber glow shadow.
- Secondary (`View on GitHub ↗`): transparent background, amber text, amber border `1px`, same size. On hover: `rgba(239,159,39,0.08)` fill.

---

### PROBLEM SECTION

**No visuals.** Pure typography. The power is in the copy + white space.

Layout: centered, max-width 680px, larger body text (20px).

Visual treatment:
- Section label: `THE COST OF LOSING IT` (or similar)
- Body: alternating emphasis using amber for the key numbers/words inline

---

### HOW IT WORKS (3 Steps)

Layout: horizontal 3-column on desktop, stacked on mobile.

**Step card anatomy:**
```
┌─────────────────────────┐
│  01  (muted, large #)   │
│                         │
│  [micro-demo or icon]   │
│                         │
│  Capture                │  ← Inter 500, white, 20px
│  Press ⌘⇧Space.        │  ← Inter 400, muted, 15px
│  Type anything.         │
│  Close. Back to work.   │
└─────────────────────────┘
```

Step numbers: `#2A2A2E`, Inter 700, 80px — large and ghosted behind step label.

**Step micro-demos:**
- Step 1 (Capture): Short 2-second clip showing the overlay summon
- Step 2 (Store): Static illustration — a laptop with small icons inside (Ollama logo + LanceDB icon) labeled. No cloud. No arrows leaving the device.
- Step 3 (Recall): Short 2-second clip showing the natural language query and amber-highlighted result

---

### FEATURES (4 Cards — 2×2 Grid)

**Card anatomy:**
```
┌─────────────────────────────────────────────┐
│ ▎ (amber left border, 2px)                  │
│                                             │
│  ⚡ (icon, amber, 24px)                     │
│  Card Title                                 │
│  1–2 sentences of copy. Muted text. No      │
│  more than 40 words.                        │
└─────────────────────────────────────────────┘
```

Background: `#111113`, `1px border: #1E1E21`, `border-left: 2px solid rgba(239,159,39,0.5)`, `border-radius: 12px`.

Icons: Simple line icons, amber `#EF9F27`, 24px. SVG preferred.

Cards:
1. ⚡ **Instant Capture** — 3 seconds from thought to saved
2. 🧠 **Local Intelligence** — Ollama + LanceDB, everything on your machine
3. 🔒 **Zero Cloud** — No server. Not encrypted. Absent.
4. 🌱 **Free Forever** — MIT license, no credit card, no tiers

---

### SOCIAL PROOF

Layout: Left column = PH badge + stats. Right column = 2 testimonial quotes.

**PH badge treatment:** Custom styled badge in amber/dark scheme — not the default orange PH badge (clashes). Show: Product Hunt logo + "#15 Day Rank" + upvote count.

**Quote card treatment:**
```
┌──────────────────────────────────────────────────┐
│  "                                               │
│  After trying this I deleted Obsidian. The       │
│  speed difference is insane — I never have to    │
│  decide where something goes.                    │
│                                                  │
│  — @username  ·  Software Engineer               │
└──────────────────────────────────────────────────┘
```
Quote marks: amber, oversized (60px). Text: muted white. Attribution: small, muted. Card: `#111113` bg.

---

### PRIVACY ARCHITECTURE SECTION

**Visual concept:** A single diagram — "Everything inside one machine."

```
  ┌─────────────────── Your MacBook ──────────────────┐
  │                                                    │
  │   ⌘⇧Space                                         │
  │   Lore Overlay ──→ [Ollama LLM] ──→ [LanceDB]    │
  │                          ↕                        │
  │                   Plain language query            │
  │                          ↓                        │
  │                   [Your results]                  │
  │                                                    │
  │   ✗  No API calls out      ✗  No server           │
  │   ✗  No cloud storage      ✗  No model provider   │
  └────────────────────────────────────────────────────┘
```

Style: diagram drawn in amber line art on dark background. Clean, architectural. Not cartoonish.

**Copy contrast (below diagram):**
> Everyone else: *"Your data is encrypted on our servers."*
> Lore: *"There are no servers."*

---

### TECH SPECS

Minimal. Text-only. Small type.

```
Requires macOS 12+  ·  Apple Silicon or Intel  ·  Ollama installed
2GB model (~4GB RAM)  ·  Node.js 18+  ·  MIT License
```

GitHub install link. Terminal command option.

---

### FOOTER CTA

Large headline repeat of hero (rephrased), download button, GitHub + Discord + Twitter links.

Background: subtle radial gradient from `#0F0F12` to `#0A0A0B` — signals "end of page", slight warmth.

---

## 7. Motion & Interaction Rules

### Principles
1. **Fast in, slow out** — elements enter quickly (150ms ease-out), exit slowly (250ms ease-in). Lore itself is fast — the UI should feel fast.
2. **Amber appears last** — when a section loads, the amber accents fade in after the text (50ms delay). The accent is the reward, not the first thing you see.
3. **No decorative motion** — no floating particles, no endless scroll animations. Motion only for: overlay summon demo, CTA hover state, card hover (subtle lift).

### Scroll behavior
- Sections fade-in (opacity 0→1, translateY 20px→0) as they enter viewport
- Duration: 400ms, ease-out
- Stagger within sections: 80ms between child elements

### CTA hover
```css
.btn-primary:hover {
  filter: brightness(1.1);
  box-shadow: 0 0 24px rgba(239,159,39,0.25);
  transform: translateY(-1px);
  transition: all 150ms ease-out;
}
```

### Lore panel overlay (in demo)
```css
.lore-panel {
  background: #111113;
  border: 1px solid rgba(239,159,39,0.35);
  border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(239,159,39,0.1),
              0 8px 32px rgba(0,0,0,0.6),
              0 0 48px rgba(239,159,39,0.08);
  animation: lore-appear 150ms ease-out;
}
@keyframes lore-appear {
  from { opacity: 0; transform: scale(0.97) translateY(-4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
```

---

## 8. Responsive Behavior

| Breakpoint | Key changes |
|---|---|
| 1280px+ | Full layout as described above |
| 768–1279px | 2-col features grid → 2-col. Hero demo below CTA. |
| < 768px | Single column. Hero headline: 40px. Features stack vertically. Demo GIF full-width. |

---

## 9. Production Assets Needed

| Asset | Format | Notes |
|---|---|---|
| Hero demo (capture flow) | WebM + GIF | 7s loop, 1280×720, actual screen recording |
| Recall demo clip | WebM + GIF | 3s loop, query → results |
| Privacy architecture diagram | SVG | Amber line art on transparent bg |
| Feature icons (×4) | SVG | 24px, amber, line style |
| PH badge (custom styled) | SVG | Amber/dark theme |
| OG image | PNG 1200×630 | Hero headline on dark bg |
| Favicon | ICO + SVG | Amber "L" or spark mark on near-black |
