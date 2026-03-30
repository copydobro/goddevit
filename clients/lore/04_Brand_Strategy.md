# Lore — Brand Strategy
> Framework: 7-step Brand Strategist
> Date: 2026-03-19
> Derived from: 01_Author_Analysis.md + 02_Competitor_Analysis.md + 03_Design_Benchmark.md

---

## 1. Brand Context Assessment

### Category Definition
Lore operates at the intersection of two categories:
- **PKM (Personal Knowledge Management):** Obsidian, Logseq, Capacities, Reflect — structured, folder/graph-based, knowledge architecture
- **AI note-takers:** Voicenotes, Reflect AI — capture + retrieval with cloud AI

Lore **doesn't fit either category cleanly**, which is the point. It's closer to a new category: **ambient memory for developers** — zero-friction capture with local AI recall.

### Competitive Landscape Summary

| Dimension | State of field | Lore's position |
|---|---|---|
| Capture speed | All require opening an app | Hotkey summon — never leave context |
| AI recall | Reflect/Capacities have it (cloud) | Only tool with fully local RAG |
| Privacy model | Encrypted servers | No servers — AI runs on your machine |
| Organization required | Yes (all competitors) | None — Lore organizes nothing |
| Price | Free tier or $10–20/mo | Free forever, MIT license |
| OSS | Logseq, AFFiNE | Yes — full source on GitHub |

### Target Audience (from Author Analysis)
**Primary:** Overloaded Dev — engineer, 25–35, context-switching constantly, loses thoughts between tasks. Uses Obsidian but finds it too heavy. Trusts local > cloud on principle.

**Secondary:** Privacy Thinker — information security aware, anti-surveillance stance, values sovereignty over convenience.

**Latent:** Casual Thinker — not a note-taker by identity, but captures thoughts if friction is near-zero.

### Market Timing Signal
Tana (3.4K followers, #1 Day Rank) is pivoting away from PKM outliner to enterprise meetings. Their user base is actively looking for a replacement. Lore's philosophy (zero organization, instant capture) is a direct counter-reaction to Tana's complexity.

---

## 2. Positioning

### Positioning Statement

```
For developers and privacy-conscious knowledge workers
who lose thoughts between context switches,
Lore is the ambient memory tool
that captures and recalls any idea in seconds —
without organization, without cloud, without compromise.

Unlike Obsidian (requires structure) or Reflect (requires trust in servers),
Lore is the only tool where the AI runs on your machine,
thinks in your language, and gets out of your way.
```

### The Only-We Test

"Only Lore..."
- **...captures a thought in under 3 seconds without leaving your current app.** (Obsidian, Logseq, Capacities all require you to navigate to their app)
- **...recalls it with local AI that never phones home.** (Reflect's AI uses OpenAI; Voicenotes uses cloud transcription)
- **...requires zero organizational decisions.** (Every competitor forces folders, tags, graphs, or types)
- **...is free forever, MIT licensed, with no API keys required.** (Voicenotes is $7.99/mo; Reflect is $10/mo; Capacities is $9/mo)
- **...runs the entire intelligence stack locally.** (Ollama + LanceDB — the AI itself is local, not just the storage)

### Positioning Map

```
                  HIGH INTELLIGENCE (AI-assisted recall)
                              │
              Reflect         │         [Lore: target position]
          (cloud AI)          │         (local AI)
                              │
REQUIRES ────────────────────────────────────── ZERO
ORGANIZATION                  │              ORGANIZATION
                              │
          Obsidian             │         Logseq
          (plugins/vaults)     │         (outliner)
                              │
                  LOW INTELLIGENCE (manual search only)
```

Lore's target quadrant (top-right) is **unoccupied** in the competitive landscape.

### Brand Territory
**Claimed:** "Your thought in 3 seconds. On your machine. Forever."

This territory is:
- Speed of capture (3 seconds = faster than anyone)
- Local intelligence (on your machine = stronger than encryption claims)
- Permanence (forever = zero attrition of ideas)

---

## 3. Brand Identity System

### Visual Identity

**Core Palette:**
- Background: `#0A0A0B` — near-black, not pure black (warmer, less harsh)
- Surface/card: `#111113` — slightly lifted surface
- Border/divider: `#1E1E21` — subtle separation
- Accent primary: `#EF9F27` — amber/warm gold (unique in category — all competitors use purple/blue)
- Accent secondary: `#F5C870` — lighter amber for highlights
- Text primary: `#F2F2F3` — warm white (not pure #FFFFFF — softer)
- Text muted: `#6B6B72` — subdued secondary text
- Success/local indicator: `#4ADE80` — green pulse for "local active" status

**Why amber:** Amber on near-black = candlelight, thought, warmth. Contrasts the cold blue/purple dominating the category. Visually unique — no competitor owns this combination. Psychologically: gold = value, thought, intelligence.

**Typography:**
- Headlines: **Inter** — modern sans, confident, clean. Not a "hacker" font but not corporate.
- Body: **Inter** — consistent weight range (300–600)
- Monospace/shortcuts: **JetBrains Mono** — exclusively for hotkey callouts (Cmd+Shift+Space), code references, and terminal-style elements. Creates visual code-literacy signal.
- UI labels (small): Inter 400, 12px, muted color

**Typography rhythm:**
- H1: Inter 600, 56–72px (hero only)
- H2: Inter 600, 36–42px (section headers)
- H3: Inter 500, 24px (VP titles)
- Body: Inter 400, 16–18px, line-height 1.6
- Small/caption: Inter 400, 13–14px
- Hotkey: JetBrains Mono 500, highlighted amber background, small padding

### Verbal Identity

**Voice attributes:**
1. **Peer-to-peer** — not a company talking down to a user. Speaks like a developer talking to a developer. "You know the feeling." not "Our product helps you."
2. **Precise over expansive** — says one thing clearly. Never 3 adjectives when 1 is enough. "3 seconds" not "ultra-fast."
3. **Understated confidence** — doesn't shout about features. States facts. "No servers. No folders. No API key." — not "REVOLUTIONARY AI!"
4. **Direct pronouns** — "Your thought" not "user thoughts." "You press one key" not "Users can press."
5. **Anti-hype** — avoids: "revolutionary", "game-changing", "second brain", "AI-powered" as a standalone claim.

**What Lore never says:**
- "Second brain" — owned by Tiago Forte / Obsidian ecosystem
- "Supercharged notes" — generic SaaS puffery
- "AI-powered [noun]" — means nothing in 2026
- "Seamless", "effortless", "frictionless" — developer audience is cynical about these
- "Never miss a note again" — Reflect owns this
- Any cloud AI model name (GPT-4, Claude, etc.) — Lore's differentiation IS that it doesn't use these

**What Lore says instead:**
- Metrics: "3 seconds", "15 GitHub stars growing", "122 upvotes on launch day"
- Negatives as proof: "No cloud. No API key. No folders."
- Actions: "Press. Type. Close. Back to work."
- Specificity: "LanceDB vector storage" (for technical credibility), "Ollama" (not "local AI")
- Peer acknowledgment: "You already know this feeling."

---

## 4. Messaging Architecture

### Master Narrative

**The Privacy Tax**

Every SaaS tool you use for thinking is charging you a privacy tax. You pay it invisibly — in data sent to servers, in models trained on your thoughts, in the implicit agreement that your ideas aren't fully yours. You accepted this tax because there was no alternative.

Until now. Lore runs entirely on your machine. The AI is local. The vectors are local. There is no server to breach, no subscription to cancel, no thoughts to harvest.

Your thinking is yours again.

### 3 Messaging Pillars

**Pillar 1: Instant Capture**
> "Your thought in 3 seconds."

- The problem it solves: context-switch thought loss
- The mechanism: `Cmd+Shift+Space` → type → dismiss
- The proof point: "Never leave your current app"
- The contrast: "Other tools ask you to navigate to them. Lore meets you where you are."

Key messages under this pillar:
- "Press one key anywhere on your Mac"
- "Back to work in 3 seconds"
- "No windows to open, no apps to switch to"
- "Zero organization decisions"

**Pillar 2: Local Intelligence**
> "AI that lives on your machine."

- The problem it solves: privacy tax + cloud dependency
- The mechanism: Ollama (local LLM) + LanceDB (local vector DB)
- The proof point: "No server exists. Not 'encrypted'. Doesn't exist."
- The contrast: "Reflect uses GPT-4. Voicenotes uses cloud transcription. Lore uses your CPU."

Key messages under this pillar:
- "Ask in plain language. Get your own memory back."
- "The intelligence is local — no API key, no server, no send button"
- "Encrypted doesn't mean private. Local means private."
- "Everything stays on your machine. Not because we promise. Because there's nowhere else for it to go."

**Pillar 3: Zero Cloud**
> "Free forever. Open source. MIT."

- The problem it solves: subscription fatigue + vendor lock-in + trust
- The mechanism: MIT license, GitHub source, Ollama/LanceDB stack
- The proof point: GitHub stars + MIT badge + no credit card required
- The contrast: "Reflect is $10/mo. Voicenotes is $8/mo. Lore is free. Not 'free tier'. Free."

Key messages under this pillar:
- "Free forever. No credit card. MIT license."
- "Read the source code. Run it offline. Fork it."
- "No billing page, no enterprise tier, no 'unlimited plan'"

---

## 5. Brand Architecture

### Single-Product Model
Lore is a single product, single audience. No tiers to confuse, no enterprise variant to dilute the message.

**Current state:** Validation landing page → OSS distribution (GitHub + website download)
**Future state:** If paid features emerge (sync, mobile, team), they sit ABOVE the free local core. The free local version remains the hero product.

**Distribution hierarchy:**
1. GitHub (source of truth for technical credibility)
2. Direct download (lore.app or similar)
3. Product Hunt (discovery channel for ICP)
4. Discord (community, retention)

### Relationship to Creator
Erez Shahaf (@appcharge) is a known builder in the PH community. His personal credibility amplifies the product. The brand should feel like a product from a thoughtful engineer — not a VC-backed startup, not a side project that'll disappear. Human name attached = accountability.

---

## 6. Brand Governance

### Core Rules

**Rule 1: Metrics beat adjectives.**
Never say "fast". Say "3 seconds". Never say "secure". Say "no server exists". Never say "smart recall". Say "ask in plain language".

**Rule 2: Prove privacy claims structurally.**
Never say "we care about your privacy". Instead: describe the architecture that makes privacy inevitable. "There's no server to send your data to — the entire stack runs locally."

**Rule 3: Respect the developer's skepticism.**
Developers have seen hundreds of "AI-powered" tools. Don't lead with AI. Lead with the problem it solves, then reveal the mechanism. "You lost a thought switching tabs. Lore captures it before it's gone. How? Local LLM runs on your machine."

**Rule 4: Own the negatives.**
"No folders" sounds like a limitation — frame it as a feature. "No organization required" → "Lore doesn't ask you to decide where something lives. Just type it." Same for "no cloud", "no API key", "no subscription".

**Rule 5: Short over complete.**
The hero headline is 3–5 words max. Subheadlines are 1–2 sentences. CTA copy is 2–3 words. No feature-list heroes.

**Rule 6: The tone is a peer, not a vendor.**
"You already know this feeling" not "Many users experience". "We built this for ourselves first" not "Our mission is to improve your productivity." The product was built by a developer for developers — the copy should read that way.

### What to Never Do
- Use purple/violet accent (visually indistinguishable from Obsidian/Reflect)
- Use "second brain" or "digital garden" vocabulary
- Show a cloud upload animation or server diagram in the hero
- List competitors by name in marketing copy (positioning by contrast, not by name)
- Put pricing before social proof (trust before cost)

---

## 7. Brand Health Dashboard (Baseline — 2026-03-19)

| Metric | Current | 90-day target |
|---|---|---|
| GitHub stars | 15 | 150 |
| PH launch upvotes | 122 | — (one-time) |
| PH Day Rank | #15 | #5 on next launch |
| PH followers | 108 | 300 |
| Discord members | Unknown | 50 |
| Landing page visits | 0 (not live) | 2,000/mo |
| Landing page → GitHub click rate | — | 15%+ |
| Landing page → Download rate | — | 10%+ |

### Acquisition hypothesis
Primary acquisition loop: **PH → landing page → GitHub stars → PH credibility → more discovery**. GitHub stars are both a vanity metric AND a trust signal for the developer audience — every star is public social proof.

Secondary loop: **Twitter/X thread by Erez** (behind-the-scenes build story) → viral developer audience → PH re-discovery.

### North Star Metric
**GitHub stars** — a proxy for developer credibility and word-of-mouth spread in the target audience. Stars are the developer-community equivalent of Capacities' "50K+ users" claim.
