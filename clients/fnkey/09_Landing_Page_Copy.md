# FnKey — Landing Page Copy

---

## SCREEN 1 — HERO (Above the Fold)

### Left Column (Typewriter animation, slow)
`fn_`

### Right Column (Instant appearance)

**Headline:**
```
Your keyboard is holding you back.
```

**Subheadline:**
```
40 WPM is the ceiling.
Hold Fn and work twice as fast.
```

**CTA Button:**
```
Break the ceiling.
```

**Micro-copy below button:**
```
Free for macOS. Forever.
Hold. Speak. Release. Done.
```

---

## SCREEN 1 — RUSSIAN (Reference for creator)

### Headline:
```
Твоя клавиатура тебя тормозит.
```

### Subheadline:
```
40 слов в минуту — это потолок продуктивности печати на клавиатуре.
Зажми Fn и решай задачи в 2 раза быстрее.
```

### CTA Button:
```
Пробить потолок.
```

### Micro-copy:
```
Бесплатно для macOS. Навсегда.
Зажал. Сказал. Отпустил. Готово.
```

---

## SCREEN 2 — SPEED

### Left Column (Typewriter animation, slow)
`speed_`

### Right Column (Instant appearance)

**Headline:**
```
You've been typing at 40 WPM your whole life.
```

**Subheadline:**
```
Your thoughts move at 150. That gap is where your ideas get lost.
```

**Visual Block (two-column comparison):**
```
⌨  KEYBOARD          🎙  FNKEY
───────────          ──────────
~40 WPM              ~150 WPM
letter by letter     thought by thought
backspace, retype    streams as you speak
fingers limit you    voice sets you free
```

**Supporting Copy:**
```
Not batch processing. Audio streams to Deepgram Nova-3 in real time via WebSocket.
By the time you release Fn — the transcription is already done.
```

---

## SCREEN 2 — RUSSIAN (Reference)

### Headline:
```
Всю жизнь ты печатаешь со скоростью 40 слов в минуту.
```

### Subheadline:
```
Твои мысли движутся со скоростью 150. В этом разрыве теряются идеи.
```

### Visual Block:
```
⌨  КЛАВИАТУРА        🎙  FNKEY
──────────────       ──────────────
~40 слов/мин         ~150 слов/мин
буква за буквой      мысль за мыслью
опечатки, backspace  стримит пока говоришь
пальцы — твой потолок голос — твой масштаб
```

### Supporting Copy:
```
Не пакетная обработка. Аудио стримится в Deepgram Nova-3 в реальном времени через WebSocket.
К моменту когда ты отпустишь Fn — транскрипция уже готова.
```

---

## Copy Principles

1. **Terminal aesthetic** — short, declarative, no fluff
2. **Two Worlds metaphor** — every line reinforces the before/after split
3. **Mechanic-first** — "Hold. Speak. Release. Done." is the entire product
4. **Specific numbers** — 40 WPM vs 150 WPM creates visceral contrast
5. **Direct address** — "Your keyboard", "your thoughts" — second person
6. **No marketing speak** — no "effortless", "AI-powered", "unlock your potential"

---

## Left Column Animation Strategy

Every section's left label types out slowly (80ms per character) while right column content appears instantly. This isn't decoration — it **demonstrates** the product value in real time. By the time "speed_" finishes typing, the user has already read the entire speed comparison on the right.

---

## Interaction Model

- **Desktop**: HOLD any key → hero animation responds in real time
- **Mobile**: TAP and HOLD → same effect
- The page demonstrates the product before the user reads a single word about it
