# FnKey — Brand Strategy
> Framework: Brand Strategist (7 шагов)
> Дата: 2026-03-17

---

## Шаг 1: Brand Context Assessment

**Категория:** AI Dictation / Voice-to-Text, macOS
**Objective:** Awareness + adoption для OSS инструмента (не коммерческий запуск)
**Конкурентный ландшафт:** 9 конкурентов, все получают 2–6/10 по Hormozi — категория без лидера бренда
**Аудитория:** Mac developers (primary), knowledge workers / writers (secondary)

### "Only-we" тест — что никто не может повторить

- ✅ Только мы стримим через WebSocket в реальном времени (не batch)
- ✅ Только мы бесплатны И open source одновременно
- ✅ Только у нас hardware-level privacy proof (жёлтая точка macOS = физический факт)
- ✅ Только у нас нет single point of failure API (Groq fallback)

**Checkpoint: пройден** — "only-we" тест по всем 4 пунктам.

---

## Шаг 2: Positioning

### Positioning Statement

```
For Mac developers and technical knowledge workers
Who need voice input that keeps pace with how they actually think
FnKey is the only real-time streaming dictation tool
That delivers text before you release the key — at zero cost
Unlike Wispr Flow, Superwhisper, SuprFlow, and every other paid tool
We stream audio as you speak, cost nothing, and prove privacy
through your Mac's own microphone indicator — not a promise
```

### Positioning Map

```
                    High Price
                        |
    Wispr Flow      ----+----    (пусто — нет luxury)
    Superwhisper        |
    Monologue           |
                        |
    Low Innovation -----+----- High Innovation
                        |
    Snaply          ----+----    ★ FnKey
    TalkTastic (β)      |        * Streaming (уникально)
                        |        * Free + OSS
                    Low Price
```

FnKey занимает квадрант **DISRUPTOR** — высокая инновация, нулевая цена. Незанятая позиция.

### Competitive Positioning Matrix

| Attribute | FnKey | Wispr Flow | Superwhisper | SuprFlow | Snaply |
|---|---|---|---|---|---|
| Price | **$0** | $15/мес | Freemium | $49.99 | $0 (beta) |
| Streaming (real-time) | **✅ Yes** | ❌ Batch | ❌ Batch | ❌ Batch | ❌ Batch |
| Open Source | **✅ GPL-3.0** | ❌ | ❌ | ❌ | ❌ |
| Hardware privacy proof | **✅ Yellow dot** | ❌ | ❌ | ❌ | ❌ |
| API fallback | **✅ Groq** | ❌ | ❌ | ❌ | ❌ |
| macOS native (Rust) | **✅** | ❌ Electron | ❌ | ❌ | ❌ |

---

## Шаг 3: Brand Identity System

### Visual Identity

**Якорный образ бренда:** жёлтая точка macOS (mic indicator) — не просто privacy feature, а визуальный символ: "FnKey активен — ты в контроле."

#### Цветовая палитра

| Роль | Цвет | HEX | Обоснование |
|---|---|---|---|
| Primary accent | Янтарный | `#F5C842` | macOS mic indicator yellow |
| Background | Почти чёрный | `#0F0F0F` | developer aesthetic |
| Secondary | Off-white | `#F0F0F0` | чистота, читаемость |
| Code accent | Terminal green | `#A8FF78` | developer cred |

#### Типографика

| Роль | Шрифт |
|---|---|
| Headlines | Inter / SF Pro Display — macOS-native |
| Code / Tech | JetBrains Mono — сразу ясно, это для девов |
| Body | Inter Regular — нейтрально, читаемо |

#### Logo / Icon
Стилизованная клавиша `Fn` с волновым индикатором внутри (аудиоволна = streaming). Просто, узнаваемо, функционально.

#### Imagery Rules
- ✅ Скриншоты реального использования (Terminal, Cursor, Slack, Claude)
- ✅ macOS UI элементы (жёлтая точка, menu bar)
- ✅ Code snippets, терминальный вывод
- ❌ Stock photos людей с наушниками
- ❌ Generic "voice waves" illustrations

---

### Verbal Identity

**Brand Voice (3 прилагательных):** Честный. Точный. Прямой.

Это голос Eugene в его LinkedIn посте — метрики вместо обещаний, факты вместо hype.

#### Tone Framework

| Контекст | Тон | Пример |
|---|---|---|
| Hero / Landing | Уверенный, провокационный | "They charge $15/mo for batch. We stream. Free." |
| Feature descriptions | Технически точный | "WebSocket to Deepgram Nova-3 — 54% lower WER on streaming" |
| Privacy claims | Фактический, без пафоса | "macOS shows the yellow dot. That's your proof, not ours." |
| GitHub / Docs | Peer-to-peer, builder tone | "Hold Fn, speak, release. That's it." |
| Social proof | Metric-first | "#15 Product of the Day. 107 upvotes. 57 cloners." |

#### Vocabulary — использовать
`streaming` · `WebSocket` · `real-time` · `Hold Fn` · `menu bar` · `open source` · `GPL-3.0` · `zero latency` · `mic indicator` · `fallback` · `no subscription`

#### Vocabulary — запрещено
`seamless` · `powerful` · `robust` · `state-of-the-art` · `revolutionary` · `game-changer` · `innovative solution` · `cutting-edge`

---

## Шаг 4: Messaging Architecture

### Master Narrative

> "Клавиатура — не лучший инструмент для мысли. Голос — лучший. Но все голосовые инструменты стали дорогими, облачными и навязчивыми. FnKey — это сброс настроек."

---

### 3 Messaging Pillars

#### Pillar 1: SPEED — "Текст появляется раньше, чем ты отпустил клавишу"
- **Proof 1:** Streaming WebSocket → Deepgram Nova-3 (не batch, не "запись → отправка → ответ")
- **Proof 2:** 54% lower word error rate на streaming vs конкуренты
- **Proof 3:** Текст идёт пока говоришь — к моменту release Fn уже готов
- **Copy pattern:** *"Every competitor records first, then sends. FnKey sends as you speak."*

#### Pillar 2: TRUST — "Микрофон мёртв, пока ты не держишь Fn"
- **Proof 1:** macOS жёлтая точка — системный индикатор, не наше обещание
- **Proof 2:** Open source GPL-3.0 — читай весь код, проверяй сам
- **Proof 3:** Нет always-on recording (в отличие от Wispr Flow, TalkTastic)
- **Copy pattern:** *"You can audit every line. The yellow dot doesn't lie."*

#### Pillar 3: FREEDOM — "Бесплатно. Навсегда. Без vendor lock."
- **Proof 1:** GPL-3.0 — форкни, меняй, используй вечно
- **Proof 2:** Groq fallback — нет зависимости от одного API
- **Proof 3:** $0 vs $15/мес Wispr Flow = $180/год которые остаются у тебя
- **Copy pattern:** *"$180/year stays in your pocket. The code stays on GitHub. Forever."*

---

### Audience-Specific Variants

| Аудитория | Акцент | Key message |
|---|---|---|
| **Developers** | Speed + Trust | "Stream your thoughts into Cursor, Terminal, Claude. Zero latency. Open source." |
| **Writers / Creators** | Speed + Freedom | "Speak faster than you type. Free forever. No subscription anxiety." |
| **Privacy-first users** | Trust + Freedom | "The yellow dot is your guarantee. Not our privacy policy." |

---

## Шаг 5: Brand Architecture

**Модель: Branded House**

```
FnKey (Master Brand)
  └── FnKey for Mac (current, v0.4.0)
  └── FnKey CLI (потенциально — headless mode)
  └── FnKey for Linux (community fork)
```

Логика: один автор, один продукт. Все расширения живут под FnKey. Защищает brand equity который будет накапливаться со временем.

---

## Шаг 6: Brand Governance (OSS-упрощённая)

**Single source of truth:** GitHub README + лендинг
**Brand assets:** Logo SVG, color palette, font stack → `/docs/brand/` в репо

### Правила
1. Все публичные тексты = метрики вместо прилагательных
2. Каждый claim требует proof point (не "fast" — а "54% lower WER")
3. Checkpoint для нового copy: проходит ли "only-we" тест?
4. Тон: peer-to-peer, не marketing-to-customer

---

## Шаг 7: Brand Health Dashboard (baseline)

| Метрика | Сейчас (17.03.2026) | Цель (3 мес) |
|---|---|---|
| GitHub Stars | 38 | 200 |
| GitHub Forks | 6 | 30 |
| GitHub Cloners | 57 | 300 |
| PH Upvotes | 107 | — (snapshot) |
| awesome-mac listing | ✓ | ✓ |
| Unaided awareness (dev community) | ~0% | измеримо через mentions |
| Share of Voice (PH AI Dictation) | #15/day | Top 5 weekly |

---

## Итоговый Brand Positioning Summary (одна карточка)

```
БРЕНД:      FnKey
КАТЕГОРИЯ:  AI Voice Dictation for Mac
АВАТАР:     Mac developers & technical knowledge workers
ПОЗИЦИЯ:    DISRUPTOR — высокая инновация, нулевая цена

ОДНА ФРАЗА: "Streaming dictation for Mac. Free forever. Open source."

3 PILLAR:   SPEED · TRUST · FREEDOM

ГОЛОС:      Честный. Точный. Прямой.
ЗАПРЕЩЕНО:  seamless / powerful / revolutionary / game-changer

ONLY-WE:    Streaming + Free + OSS + Hardware privacy proof — всё вместе,
            ни у кого больше нет.
```
