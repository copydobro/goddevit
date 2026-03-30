# FnKey — Packaging Audit
> Скилы: github-traction-audit + copywriting
> Источники: README.md (локальная копия — полный оригинал), PH listing + comments

---

## ЧАСТЬ 1: GITHUB TRACTION SCORE

### Итоговый счёт: 44/100 — WORK NEEDED

| Блок | Score | Max | Статус |
|------|-------|-----|--------|
| Repo Positioning | 13 | 25 | ⚠️ Partial |
| README Conversion | 11 | 25 | ⚠️ Основной блокер |
| Demo Strength | 14 | 20 | ✅ Есть база |
| Developer Onboarding | 4 | 15 | ⚠️ Слабо |
| External Distribution | 4 | 15 | ⚠️ Частично |

---

### Блок 1: Repo Positioning — 13/25

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Tagline | 5 | 8 | "A tiny Rust menu bar app for macOS. Hold Fn, speak, paste." — механика понятна, архитектура ясна. Нет "alternative to X", нет outcome. Не отвечает "зачем?" |
| Topics/tags | 4 | 7 | Базовые теги предположительно есть. Не хватает: ai-tools, claude-code, developer-productivity, speech-to-text, dictation |
| License | 4 | 5 | GPL-3.0 указан. Для dev-tool ограничивает корпоративный форк — для indie OSS аудитории нормально |
| Website link | 0 | 5 | Нет отдельного сайта. PH "Visit Website" → этот же README |

---

### Блок 2: README Conversion — 11/25

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Problem statement | 2 | 6 | Первая строка описывает продукт ("A tiny Rust menu bar app..."), не проблему. "Thinking faster than you type costs you context" — нет нигде. |
| Value proposition | 2 | 6 | "Hold Fn, speak, paste" — это инструкция к использованию, не value prop. Ни "3x longer prompts", ни "$0 vs $240/year" не написано. |
| Quick start | 5 | 7 | Bash команды copy-paste ready — хорошо. Таблица разрешений — хорошо. Минус: шаг 3 (API ключ) требует внешней регистрации — не объяснено что это 2 минуты и бесплатно. |
| Social proof | 2 | 6 | Есть star request ("please star the repo") — правильное место (сразу после демо). Нет badges, нет "used by", нет счётчика downloads. |

**Главная проблема:** README объясняет ЧТО и КАК, но не ЗАЧЕМ. Visitor открывает README с вопросом "это мне нужно?" — ответа нет. GIF отвечает на вопрос "как работает?" но не "почему это меняет мой workflow".

---

### Блок 3: Demo Strength — 14/20

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| GIF / video demo | 8 | 10 | `demo.gif` есть, расположен в верхней части README — правильно. Минус: неизвестно показывает ли GIF aha-момент (мгновенность paste) или просто факт работы |
| Screenshots | 4 | 5 | `menu-bar.png` есть — показывает menu bar icon. Минус: нет скриншота реального использования (текст появляется в редакторе/Claude Code) |
| Live demo | 2 | 5 | Нет live demo (native app — это нормально). Нет YouTube/Loom видео с реальным use case. |

**Что работает:** GIF + скриншот сразу после первой строки — правильная структура. Visitor видит продукт до установки.

**Что можно усилить:** GIF должен показывать конкретный контекст — Claude Code, Cursor, или любой AI tool. Сейчас (предположительно) показывает абстрактную демонстрацию. Один GIF "Hold Fn → говоришь промпт → текст появляется в поле Claude Code" = 10/10.

---

### Блок 4: Developer Onboarding — 4/15

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Docs site | 0 | 6 | Нет. README — единственная документация. |
| Contributing guide | 1 | 5 | Нет CONTRIBUTING.md, нет issue templates. TODO секция есть (честно показывает что ещё не сделано) — это хорошо для доверия, плохо для adoption. |
| Changelog / releases | 3 | 4 | 4 релиза до v0.4.0 — история есть. |

**Заметка:** TODO секция в README с незакрытыми пунктами ("No-speech detection", "Backend toggle") — неоднозначно. Для разработчиков это transparency, для обычных пользователей это сигнал "сырой продукт".

---

### Блок 5: External Distribution — 4/15

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Hacker News | 0 | 6 | Show HN не найден. Потенциал: +100-200 stars за 24h. Самый высокоimpact канал для OSS Rust tool — не использован. |
| Reddit | 0 | 4 | Нет постов в r/macapps, r/rust, r/ClaudeAI. Все три — прямые аудитории продукта. |
| Blog/content | 3 | 3 | 2 поста на dev.to (Dec 2025) + личный блог. Хорошо. |
| Twitter/X | 1 | 2 | 35 фолловеров. Минимальная активность. |

---

## ЧАСТЬ 2: COPY AUDIT — PH LISTING

### Текущий copy

**Title:** `FnKey: macOS dictation with Deepgram stream`
**Maker comment (ключевое):** "I built FnKey because I wanted macOS dictation that actually feels instant. Most voice typing tools use Whisper in batch mode — you record, wait, then get text. FnKey streams audio to Deepgram Nova-3 over WebSocket while you speak."

---

### Аудит

**Title — проблема:**
"macOS dictation with Deepgram stream" — это tech spec.
Покупатель читает название сервиса, не benefit.

| Вариант | Почему лучше |
|---------|-------------|
| `FnKey: voice-to-text for Claude Code — zero delay, free` | Называет use case + два главных отличия |
| `FnKey: speak your full context into Claude, Cursor, Copilot` | Конкретная боль + конкретные инструменты |
| `FnKey: the dictation tool built for AI-assisted coding` | Категория + аудитория |

**Maker comment — что работает:**
- История "я построил потому что хотел" — authentic, dev аудитория ценит
- Объяснение streaming vs batch — технически точно, правильная аудитория поймёт
- "Mic only active while key held" — конкретный, проверяемый privacy claim

**Maker comment — чего не хватает:**
- Нет сравнения по цене ($0 vs $240/год Wispr Flow) — самый сильный якорь не использован
- Нет конкретного use case: где использовать (Claude Code, Cursor)
- Нет следующего шага для заинтересованного: "star the repo + install takes 5 min"

**PH comments — что они реально показывают:**
Три комментария про технический жаргон и код → ICP подтверждён: это devs, они используют в coding workflow. Evgeny ответил честно ("no overlapping speech handling, never had that issue") — это работает на доверие.

---

## ЧАСТЬ 3: TIME TO FIRST VALUE

```
Шаг 1:  Нашёл на PH / GitHub / awesome-mac
Шаг 2:  Клик → README. Видишь GIF (хорошо) и установку
Шаг 3:  Скачиваешь бинарь (нужно знать arch: arm64 vs x64)
Шаг 4:  unzip + mv /Applications/
Шаг 5:  Регистрация на deepgram.com → API ключ     ← ВНЕШНИЙ СЕРВИС
Шаг 6:  mkdir ~/.config/fnkey + echo key > файл
Шаг 7:  open /Applications/FnKey.app
Шаг 8:  System Settings → Input Monitoring (добавить)
Шаг 9:  System Settings → Microphone (добавить)
Шаг 10: System Settings → Accessibility (добавить)
Шаг 11: Первый тест

TTFV = 11 шагов, ~15-20 минут, 1 обязательный внешний сервис
```

**Benchmark конкурентов:**
- Wispr Flow: скачал dmg → установил → работает (встроенная модель). ~3 шага, 3 минуты.
- superwhisper: аналогично.

**Критичный момент — шаг 5:** README пишет "$200 free credit" но не пишет:
- что регистрация занимает 2 минуты
- что карта нужна только для верификации (кредит не списывается)
- что можно использовать Groq вместо Deepgram (он в README есть как fallback, но не как "простой старт")

**Groq как альтернативный путь входа (недооценён):**
Groq тоже даёт бесплатный ключ, проще в получении. Если README предлагал бы Groq как "quick start" вариант, а Deepgram как "upgrade for speed" — TTFV сократился бы до 7-8 шагов.

---

## ИТОГОВЫЕ GAPS ИЗ ЭТОГО ЭТАПА

| # | Gap | Блок | Приоритет |
|---|-----|------|-----------|
| 1 | README не отвечает на "зачем?" — нет problem statement в первых 3 строках | Conversion | ВЫСОКИЙ |
| 2 | PH title — tech spec вместо benefit/use case | Copy | ВЫСОКИЙ |
| 3 | TTFV = 11 шагов. Groq как "quick start" не предложен — сократил бы до 7 | Onboarding | ВЫСОКИЙ |
| 4 | Нет Show HN — самый высокоimpact канал для OSS Rust tool не использован | Distribution | ВЫСОКИЙ |
| 5 | "$0 vs $240/год" нигде не написано — самый сильный ценовой якорь отсутствует | Copy | СРЕДНИЙ |
| 6 | GIF предположительно абстрактный — нет контекста Claude Code/Cursor | Demo | СРЕДНИЙ |
| 7 | Нет Reddit: r/macapps, r/rust, r/ClaudeAI — три прямые аудитории | Distribution | СРЕДНИЙ |
| 8 | TODO секция с незакрытыми пунктами может восприниматься как "сырой продукт" | Trust | НИЗКИЙ |
