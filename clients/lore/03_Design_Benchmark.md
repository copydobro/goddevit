# Lore — Design Benchmark
> Derived from: live competitor site analysis (02_Competitor_Analysis.md)
> Date: 2026-03-19

---

## 1. Hero Section Patterns

### Headline Formulas Used in Category

| Product | Headline | Formula |
|---|---|---|
| Obsidian | "Sharpen your thinking." | Verb + outcome. Short, imperative. |
| Reflect | "Think better with Reflect" | Verb + better + brand. |
| Logseq | "Connect your notes, increase understanding." | Action pair — what you do + what you get. |
| Capacities | "A studio for your mind" | Metaphor + possession. |
| Voicenotes | (award-winning AI note-taker) | Category + superlative. |
| AFFiNE | "Write, Draw, Plan, All at Once." | Feature list → synthesis punch. |
| Deta Surf | "Elevate your thinking." | Verb + abstract benefit. |

**Pattern:** The strongest headlines (Obsidian, Reflect, Capacities) are **short (3–5 words), benefit-first, and avoid naming features**. They describe what the user becomes, not what the product does.

**What's missing in the category:** A headline that speaks to **speed of capture + privacy in one line**. No one says "Your thought in 3 seconds. On your machine. Forever."

### Subheadline Patterns

- Obsidian: "The free and flexible app for your private thoughts." — Audience + value + differentiator in one sentence.
- Reflect: "Never miss a note, idea or connection." — Negative framing (fear of loss).
- Capacities: "Capacities turns your ideas into connected objects, not files buried in folders." — Problem → solution contrast.
- AFFiNE: "Get more things done, your creativity isn't monotone." — Outcome + brand personality.

**Best practice:** Subheadline should contrast "old way vs new way" OR name the core fear ("never miss", "stop losing").

### CTA Button Patterns

| Product | Primary CTA | Secondary CTA |
|---|---|---|
| Obsidian | "Get Obsidian for [OS]" (auto-detected) | "More platforms" |
| Reflect | "Sign up" | "Login" |
| Logseq | "Download for [OS]" | "Live Demo" |
| Capacities | "Start Free" | "Discover Product" |
| Voicenotes | Platform download buttons | — |
| AFFiNE | "Get Started" | "Get the App" |
| Deta Surf | "Download" | — |

**Patterns:**
- OS-specific CTAs (Obsidian, Logseq) reduce friction for desktop apps
- "Start Free" (Capacities) outperforms generic "Sign Up" for freemium
- Secondary CTA always softer — demo or platform list
- **For Lore:** "Download for [OS]" + "View on GitHub" is the right combination — matches dev audience expectations

### Demo Format Patterns

| Product | Demo Type | Effectiveness |
|---|---|---|
| Obsidian | Static product screenshots | Medium — shows UI, no flow |
| Reflect | Video with play button | High — shows the experience |
| Logseq | Screenshots with use-case overlays | Medium |
| Capacities | Animated screenshots + before/after visuals | High — shows transformation |
| Voicenotes | Platform icons + testimonial feed | Medium |
| AFFiNE | Screenshots of doc + canvas modes | Medium |
| Deta Surf | Video (browser window in action) | High — unique mechanic |

**Best practice:** Animated or video demo is significantly stronger for tools with a unique UX mechanic. For Lore, the **hotkey summon → type → dismiss → recall** sequence is the product's core magic. A looping GIF or short video (6–8 sec) showing this flow is essential.

---

## 2. Navigation Patterns

**What all competitors include:**
- Logo (left)
- Download / Get Started (primary CTA, right or top-right)
- Pricing (always visible — even free tools link to it)
- Community / Discord
- Documentation

**What Lore needs minimum:**
```
[Logo: Lore]    [GitHub ↗]    [Discord ↗]    [Download ↓]
```
Simple, 4 items max. No nested menus — this is a validation page.

---

## 3. Color & Visual Tone Patterns

### Dark vs Light

| Product | Mode | Background | Accent |
|---|---|---|---|
| Obsidian | Dark | #1a1a1e | Purple #7C5CBF |
| Reflect | Dark | #0f0f1a | Purple/violet gradient |
| Logseq | Dark | Dark blue-black | Blue/teal |
| Capacities | Light | White | Warm orange/amber |
| Tana | — (pivoted) | — | — |
| Voicenotes | Light | White/light | Minimal, clean |
| AFFiNE | Light | White | Purple/blue |
| Deta Surf | Dark | Near-black | Monochrome |

**Observation:** Dark mode dominates in developer/privacy-focused tools (Obsidian, Reflect, Logseq, Deta Surf). Light mode dominates in broader knowledge worker tools (Capacities, Voicenotes, AFFiNE).

**For Lore:** Dark is correct — it lives in a system tray, serves developers, and the brief already specifies `#0A0A0B`. Dark also visually differentiates from Capacities (biggest competitor for mindshare).

### Accent Color Analysis

- **Purple/violet:** Obsidian, Reflect, Logseq, AFFiNE — **oversaturated in the category**
- **Warm orange/amber:** Capacities — unique, warm, approachable
- **Monochrome:** Deta Surf — minimal, editorial
- **Amber/warm (#EF9F27):** Lore (from brief) — **correct and differentiating**. Same warm tone as Capacities' accent but darker/richer, not competing.

**Conclusion:** Lore's amber accent on dark background = unique in the competitive set. No direct visual collision.

---

## 4. Value Proposition Structure Patterns

### How many VPs competitors show

| Product | VP Count | Format |
|---|---|---|
| Obsidian | 4 core + features | Large text blocks, then feature grid |
| Reflect | 8 feature cards | Icon + title + 1 line |
| Logseq | 5 audience types + features | Tabs + cards |
| Capacities | 3 problem + 4 solution + 3 company values | Long-form storytelling |
| Voicenotes | 6 features + 3 use-case sections | Feature list + use-case tabs |
| AFFiNE | 4 pillars + templates | Section-per-feature |

**Best practice:** 4 VPs maximum in the hero-visible area. Beyond that, users scroll. The brief's 4-card grid (VP1–VP4) is correct.

### Order of Value Props

**Most effective ordering observed:**
1. Speed / immediate benefit (what you get right away)
2. Core mechanic (how it works)
3. Privacy / trust (reassurance)
4. Free / open source (remove final objection)

This matches Lore's proposed VP1→VP2→VP3→VP4 order from the brief.

---

## 5. Social Proof Patterns

### Types used in category

| Type | Used by | Strength |
|---|---|---|
| PH badge + upvotes | Most | Medium — developer cred |
| GitHub stars | Dev-focused tools | High for dev audience |
| Named testimonials with role | Capacities, Reflect | High — credibility |
| Twitter/X screenshot quotes | Reflect, Voicenotes | Medium |
| Numeric user counts | Capacities (50K+) | High |
| Press coverage | Deta Surf (The Verge) | High |

**For Lore:** PH #15 Day Rank badge + GitHub stars (15, but growing) + 1–2 PH comment quotes. Press mention if available. No LinkedIn testimonials needed — PH is the right channel for this audience.

**Key insight from Capacities:** Even "1 Discord user" testimonials work if they're specific and emotional. "After 24 hours I'm falling in love" > "Great product, 5 stars". Specificity = credibility.

---

## 6. Privacy Messaging Patterns

How competitors handle privacy claims:

| Product | Privacy Position | Copy Pattern |
|---|---|---|
| Obsidian | Core VP #1 | "No one else can read them, not even us." |
| Reflect | Feature item | "End-to-end encryption. Only you can access your notes." |
| Logseq | Brand promise | "Privacy first. You own your data locally forever." |
| Capacities | Company value | "Hosted in Europe. GDPR compliant. Encrypted Servers." |
| Voicenotes | Feature #6 | "Encrypted at rest, never used for AI training." |
| AFFiNE | VP copy | "Privacy-focused, local-first. You are in charge of your own data." |
| Deta Surf | Core principle | "Your data is stored on your device. Import, export, and manage it as you see fit." |

**What EVERYONE says:** "Encrypted", "your data", "private", "secure"

**What NO ONE says in the way Lore can:** "The AI itself runs on your machine — there's no server to send data to, because the intelligence is local." This is a categorically stronger privacy claim than encryption. Encryption = "we protect your data on our servers". Lore = "there are no servers".

---

## 7. Pricing Display Patterns

### How free tools handle pricing section

| Product | Approach |
|---|---|
| Obsidian | "Free without limits" as VP + separate Pricing page |
| Logseq | "Free forever for personal use" in About section |
| Capacities | "Free forever plan. No credit card required. Full export anytime." — 3 reassurances in footer CTA |
| AFFiNE | "Free for individuals" in open source section |
| Deta Surf | No pricing section — just "Download" |

**Best practice for Lore (free + open source):**
- Don't hide the free nature — make it a feature
- Capacities' triple reassurance works: "Free forever. No credit card. Full export."
- For Lore: "Free forever. No API key. MIT license." — same structure, Lore-specific proof points

---

## 8. "How it Works" Section Patterns

All competitors with strong 3-step sections:

**Capacities:**
1. Start with today — open daily note, just capture
2. Turn thoughts into objects — create types as you go
3. Watch connections grow — patterns emerge automatically

**Logseq:**
1. Think in sections, use indentation
2. Always find what you're looking for
3. (Review + recall)

**Pattern:** 3 steps max. Action verb + short outcome. Each step should sound easier than the last, building toward the "aha" of step 3.

**For Lore:**
1. **Capture** — Press Cmd+Shift+Space. Type anything. Close. Back to work.
2. **Store** — Lore vectorizes your thought locally. No files, no folders, no cloud.
3. **Recall** — Ask in plain language. Get your own memory back.

---

## 9. Design System Recommendations for Lore

### What to borrow from each competitor

| Competitor | Borrow | Reason |
|---|---|---|
| Obsidian | Dark background + hotkey callout style | Same audience, same aesthetic |
| Reflect | Premium feel in typography weight contrast | Elevated above "open source project" look |
| Capacities | Problem framing copy structure | Best in class emotional resonance |
| Logseq | "Free forever for personal use" phrasing | Exact framing for OSS tools |
| Voicenotes | Three-value company statement (privacy + longevity + beauty) | Works for trust-building |
| Deta Surf | "Radically personal and open" positioning language | Close philosophical kin |

### What to AVOID

| Pattern | Who does it | Why to avoid |
|---|---|---|
| Purple/violet accent | Obsidian, Reflect, Logseq, AFFiNE | Oversaturated — Lore would disappear |
| Generic "second brain" language | Obsidian ecosystem | Owned by Tiago Forte + Obsidian community |
| Feature list as hero subheadline | AFFiNE | Reads as spec sheet, not positioning |
| Light mode | Capacities, Voicenotes, AFFiNE | Wrong for developer/tray-tool context |
| Cloud AI as headline feature | Reflect ("GPT-4 and Whisper") | Lore's opposite — liability vs asset |

---

## 10. Landing Page Flow Template (Category Standard)

Based on analysis, the winning flow for this category:

```
[NAV] — minimal: logo + GitHub + Download

[HERO]
  Headline (3–5 words, benefit)
  Subheadline (1–2 sentences: old way vs new way)
  CTA pair: Primary download + Secondary GitHub
  Demo: Looping GIF / short video of core mechanic

[PROBLEM]
  Name the pain. 2–3 sentences max.
  No features yet. Just: "you know this feeling"

[HOW IT WORKS]
  3 steps. Action verb. 1 line each.
  Micro-demo (GIF/screenshot) per step

[FEATURES]
  4 cards, 2x2 grid
  Icon + Title + 1–2 sentences
  Order: Speed → Recall → Privacy → Free/OSS

[SOCIAL PROOF]
  PH badge + star count
  1–2 quotes (specific, emotional, real names)

[TECH SPECS]
  Small type: OS support, requirements, install link

[FOOTER CTA]
  Bold headline version of the hero
  Download + Waitlist email
  GitHub + Discord + Twitter
```

This flow is validated by: Obsidian (best-performing in category), Capacities (best copy), Voicenotes (best use-case expansion).
