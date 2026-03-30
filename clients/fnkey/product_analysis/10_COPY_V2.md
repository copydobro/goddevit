# FnKey — Copy V2
> Основа: ICP research (2026-03-25), 35+ цитат
> Изменения vs V1: AI coding context, filtering angle, competitive frame, social proof
> Принципы: язык из реальных цитат, specific > generic, no marketing speak

---

## README — Hero Section (заменяет первые 3 строки)

### Было
```
# FnKey.app

A tiny Rust menu bar app for macOS. Hold Fn, speak, paste.
Microphone is only active while you hold the key...
```

### Стало
```
# FnKey

AI coding tools removed the bottleneck of writing code.
They created a new one: how fast you can type prompts.

Hold Fn. Speak everything in your head.
Claude Code gets the full context — not the filtered version.
```

**Почему:** первые три слова оригинала ("A tiny Rust") — это описание реализации. ICP не ищет "Rust menu bar app" — он ищет решение конкретной боли. Новый hero называет боль (typing bottleneck в AI workflow) и результат (полный контекст) до установки.

---

## README — Install (переструктурирован)

### Было
```
3. Set your API key(s):
   # Deepgram (streaming, recommended) — $200 free credit
   # Groq (batch fallback if no Deepgram key)
```

### Стало
```
## Quick Start (5 minutes, free, no credit card)

1. Download from Releases: FnKey-arm64.zip (Apple Silicon) or FnKey-x64.zip (Intel)

2. Move to Applications:
   unzip FnKey-arm64.zip && mv FnKey.app /Applications/

3. Get a free Groq key at console.groq.com/keys — takes 60 seconds, no card required.
   echo 'your-groq-key' > ~/.config/fnkey/api_key

4. Launch: open /Applications/FnKey.app

5. Grant permissions in System Settings → Privacy & Security:
   Input Monitoring + Microphone + Accessibility

Done. Hold Fn, speak, release.

---

## Upgrade to Streaming (optional)

Groq is batch mode — audio sent after you release the key (~1 sec delay).
Deepgram is streaming — transcription ready the moment you release, zero wait.

   mkdir -p ~/.config/fnkey
   echo 'your-deepgram-key' > ~/.config/fnkey/deepgram_key

Get key at console.deepgram.com ($200 free credit, no charge until you exceed it).
If both keys are set, Deepgram streaming is used automatically.
```

**Почему:** research показал что Deepgram signup создаёт friction (незнакомый сервис, нужно найти раздел API Keys). Groq проще и быстрее. Переструктурирование с "Quick Start (Groq)" → "Upgrade (Deepgram)" снижает TTFV с 9 до ~6 шагов без изменения ICP.

---

## README — Competitive Block (новый, после Features)

```
## Why not Wispr Flow / SuperWhisper?

They work. But:
- Wispr Flow: $120/year. Frequently buggy — cuts out mid-sentence,
  no response from support. Users stay because voice input is too
  valuable to give up, not because the product is good.
- SuperWhisper: solid, but no native IDE integration.
  Copy-paste breaks your flow.
- Claude Code /voice (built-in): transcription only, 500ms lag,
  cuts off the first word of every sentence.

FnKey: $0. Open source. Streaming. Mic active only while you hold the key.
You keep your flow. Claude gets the full context.
```

**Почему:** research показал что большинство ICP уже пробовали Wispr Flow и недовольны багами — "extremely buggy, cuts out randomly, worst customer service I've ever experienced." Это не нападение на конкурента — это признание реального опыта аудитории и объяснение почему FnKey существует.

---

## ЛЕНДИНГ — Обновлённые и новые секции

### Screen 1 — Hero (обновлено)

**Headline:**
```
The bottleneck is no longer your code.
It's your keyboard.
```

**Subheadline:**
```
Claude Code can think in seconds.
You type at 40 WPM.
Every prompt you send is shorter than the thought behind it.
```

**CTA Button:**
```
Download free for macOS
```

**Micro-copy:**
```
Hold Fn. Speak. Release. Done.
Works with Claude Code, Cursor, Copilot — any app.
```

**Почему изменили:** оригинальный hero ("Your keyboard is holding you back") — хороший hook, но generic. Новый называет конкретный контекст (Claude Code) и конкретную потерю (prompt shorter than the thought). ICP узнаёт себя с первой строки.

---

### Screen 2 — The Filtering Problem (новый)

**Label (typewriter):**
`filter_`

**Headline:**
```
You don't just type slower than you think.
You edit yourself while typing.
```

**Body:**
```
"A prompt that would have been 3 sentences typed
became 2 paragraphs spoken."

"I included context I would have skipped
just to avoid typing."

"You end up simplifying your request because
typing out all the context feels like writing a mini-essay."
```
*(цитаты из реальных пользователей — без имён, без источников в UI)*

**Closing line:**
```
The problem isn't speed. It's what you leave out.
```

**Почему:** research выявил второй слой боли глубже скорости — self-censorship. Люди не просто медленно пишут, они активно фильтруют мысли чтобы не печатать много. FnKey решает и это. Экран с реальными цитатами (без attribution — так они читаются как универсальная правда, не как чужой опыт) создаёт мощное узнавание.

---

### Screen 3 — Speed (обновлено из V1)

**Label (typewriter):**
`speed_`

**Headline:**
```
Speaking is overpowered for AI coding.
```
*(дословная цитата из research — gerrywastaken, GitHub Claude Code issues)*

**Comparison block:**
```
⌨  TYPING              🎙  FNKEY
─────────              ──────────
~40 WPM                ~150 WPM
edits as you go        streams as you speak
filters context        dumps everything
Claude gets 3 lines    Claude gets 2 paragraphs
5 iterations           1-2 iterations
```

**Supporting copy:**
```
Streaming via Deepgram Nova-3. Audio travels over WebSocket while you speak.
By the time you release Fn — the transcription is already in your clipboard.
Not batch. Not waiting. Done.
```

---

### Screen 4 — Social Proof (новый)

**Label (typewriter):**
`proof_`

**Headline:**
```
The people who talk to AI all day
stopped typing a long time ago.
```

**Quote block 1:**
```
"I barely touch the keyboard. I talk to Composer with SuperWhisper."
— Andrej Karpathy, coined "vibe coding"
```

**Quote block 2:**
```
"I talk to Claude Code and other tools almost exclusively in voice.
I can't work at certain places because I can't dictate."
— Allie K. Miller, AI advisor
```

**Quote block 3:**
```
"The underappreciated limiting factor to AGI
is human typing speed."
— Alexander Embiricos, Head of Product, OpenAI Codex
```

**Closing:**
```
They use SuperWhisper and Wispr Flow.
FnKey does the same thing. Free. Open source. No subscription.
```

**Почему:** Karpathy "invented" vibe coding и публично использует voice. OpenAI exec назвал typing bottleneck главным ограничителем AGI. Это не testimonials — это market validation от людей у которых нет причин врать. Важно: в closing сразу убираем возражение "ну у них деньги на платные инструменты" — FnKey = то же самое, бесплатно.

---

### Screen 5 — Competitive (новый, упрощённый)

**Label (typewriter):**
`vs_`

**Headline:**
```
You've probably already tried Wispr Flow.
```

**Comparison table:**
```
                    WISPR FLOW    CLAUDE /VOICE    FNKEY
─────────────────   ──────────    ─────────────    ─────
Price               $120/year     free             free
Streaming           yes           no (500ms lag)   yes
Cuts out randomly   yes           yes              no
Open source         no            no               yes
Mic privacy         always-on     always-on        hold-only
```

**Copy below:**
```
"The only reason I still use Wispr Flow is I got a 50% discount.
The app is extremely buggy, constantly cuts out."
— Developer, Cursor Community Forum

FnKey exists because the alternative shouldn't cost $120/year
and drop your sentences.
```

**Почему:** не "мы лучше" а "мы понимаем почему ты недоволен тем что используешь". Цитата из research (реальный пользователь) делает это честным, не маркетинговым.

---

## Что НЕ меняется из V1

- Terminal aesthetic — typewriter animation, short declarative lines ✅
- "Hold. Speak. Release. Done." — остаётся как closing micro-copy ✅
- Direct address ("your keyboard", "your thoughts") ✅
- No marketing speak — "effortless", "unlock", "AI-powered" — нет ✅
- 40 WPM vs 150 WPM contrast — остаётся в Screen 3 ✅
- Interaction model (hold key on desktop = hero animation) ✅
