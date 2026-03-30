# FnKey — 30-Day Distribution Protocol
> Приоритизация через стоимость бездействия. Задачи упорядочены по принципу: максимальный impactт при минимальном усилии, с учётом зависимостей между шагами.
> Базовый темп без действий: 14 stars/мес. Цель после 30 дней: 200+ stars.

---

## Принцип приоритизации

Каждое действие оценивается по трём параметрам:
- **Stars/час** — сколько stars даёт действие делённое на время выполнения
- **Decay** — теряет ли смысл если отложить (HN-пост теряет смысл, badges — нет)
- **Compound** — усиливает ли последующие действия (owned channel усиливает всё)

---

## Неделя 1 — Quick Wins + Show HN

### День 1 (2 часа) — README fix + PH tagline

**Почему первым:** Всё что приведёт трафик на следующей неделе будет конвертировать лучше если README уже исправлен. Нельзя сначала запускать Show HN а потом чинить README — люди придут и уйдут.

**Задача 1.1** — Добавить problem statement в первые 3 строки README (20 мин):
```
You think faster than you type. FnKey turns that gap into an advantage.
Hold Fn → speak your full thought → paste into Claude Code.
3x longer prompts. 3x better AI output. Real-time stream, zero batch delay.
```
Cost of not doing: 4% vs 20% visitor→star конверсия (TOAST UI benchmark). ~56 stars/мес разница.

**Задача 1.2** — Обновить PH tagline (5 мин):
```
FnKey – voice input for Claude Code. Hold Fn, speak, paste. Free, real-time, open source.
```

**Задача 1.3** — Добавить конкурентное сравнение (10 мин):
```
Free forever. Wispr Flow costs $240/year. superwhisper $8/month. FnKey: $0, open source.
```

**Задача 1.4** — Добавить badges через shields.io (10 мин):
```markdown
![GitHub Stars](https://img.shields.io/github/stars/evoleinik/fnkey)
![License](https://img.shields.io/github/license/evoleinik/fnkey)
![Release](https://img.shields.io/github/v/release/evoleinik/fnkey)
```

**Задача 1.5** — Обновить PH "Visit Website" → copydobro.github.io/fnkeysite/ (2 мин)

---

### День 2 (2 часа) — Show HN

**Почему вторым:** README уже исправлен — HN трафик попадёт на оптимизированную страницу. Каждый день промедления = ещё один день без медианных 289 stars.

**Cost of not doing:** 289 stars медиана за 7 дней = 20 месяцев органики. Аудитория HN не возвращается смотреть старые посты.

**Заголовок:**
```
Show HN: FnKey – hold Fn, speak, paste. Voice-to-text for Claude Code in Rust (macOS)
```

**Тело поста (шаблон):**
```
I built FnKey because I kept urging myself to type shorter prompts in Claude Code.
The full thought was there. The motivation to type it out wasn't.

FnKey: hold Fn, speak your full prompt, release, paste. Streams to Deepgram Nova-3
in real time — no batch delay, no 500ms gap.

It's free, open source (GPL-3.0), Rust, macOS only for now.

GitHub: [link]

Happy to answer questions about the Deepgram streaming implementation or the Rust
keyboard hook approach.
```

**Протокол публикации:**
- Время: вторник–среда, 7–9 AM PT (= 17–19 MSK / 22–24 SGT)
- Ответить на каждый комментарий в первые 4 часа
- 58% HN-пользователей блокируют Google Analytics — не пугаться низким числам в статистике

---

### День 3 (30 мин) — Email capture

**Почему сразу после Show HN:** HN принесёт трафик. Без capture механики все они уйдут навсегда.

**Задача:** Добавить в README одну строку:
```
⭐ Star to follow updates — or join the discussion in GitHub Discussions
```
Создать GitHub Discussions если не создан.

---

### День 4–5 — Reddit (3 часа суммарно)

**Cost of not doing:** r/ClaudeAI = 1,100 stars за 40 часов от одного поста (прямые данные). 300+ stars = 21 месяц органики.

**Пост 1 — r/ClaudeAI** (приоритет #1, точный ICP):
```
Title: I built free voice input for Claude Code. Hold Fn, speak, paste. No subscription.

Body: Been using Claude Code daily. The bottleneck isn't the AI — it's me editing down
my prompts because typing everything out feels too slow.

FnKey: hold Fn, speak the full thought, release. Real-time stream, zero delay.
Free, open source. [GitHub link]

Anyone else using voice input with AI coding tools?
```

**Пост 2 — r/macapps** (другая аудитория, другой угол):
```
Title: FnKey – hold Fn to dictate anywhere on macOS. Free, open source, real-time.

Body: No subscription (unlike Wispr Flow $240/yr), no app switching.
Built in Rust, streams to Deepgram. [GitHub link]
```

**Пост 3 — r/rust** (community validation + contributors):
```
Title: Show r/rust: voice-to-text macOS app using Deepgram streaming API

Body: Built FnKey for AI-assisted coding — the Rust part was interesting:
keyboard hooks via CGEventTap, async Deepgram WebSocket streaming, real-time
text injection. [brief technical detail] Full source on GitHub. [link]
```

**Правило:** Публиковать в разные дни. Пт–вс избегать.

---

### День 6–7 — Post-launch content

**Задача:** Написать один пост "What happened after 107 upvotes on Product Hunt"

Включить:
- Текущие stars (сколько стало после Show HN + Reddit)
- Кто реально использует (паттерны из GitHub issues/Discussions)
- Что изменилось в продукте с тех пор
- Что дальше

Опубликовать на: dev.to + продублировать в личный блог.

Попросить 3–5 PH-комментаторов написать отзыв в GitHub Discussions.

---

## Неделя 2 — Demo + Onboarding

### День 8–9 (1 час) — Переснять GIF

**Текущая проблема:** GIF показывает механику (voice → text), не контекст (voice → Claude Code prompt).

**Новый GIF:** Hold Fn → говоришь промпт → текст появляется в Claude Code terminal/chat.
Формат: 5–10 секунд, показывает проблему (пустое поле) → решение (FnKey заполняет).

---

### День 10–14 (1–2 дня разработки) — Onboarding wizard

**Задача:** Добавить первый запуск с выбором провайдера:
```
Welcome to FnKey

Choose your speech provider:

[Groq — Free, no credit card]    [Deepgram — Production speed]

Paste your API key: [________________]
                    [Get Groq API Key →]

[Start FnKey]
```

Ключ сохраняется в `~/.config/fnkey/config.toml` автоматически.
Результат: 9 шагов → 6 шагов. Устраняет ручное редактирование `~/.zshrc`.

---

## Неделя 3 — PH Preparation

### День 15–17 — PH Coming Soon page

**Задача:** Создать Upcoming product page на Product Hunt.

**Почему сейчас:** Следующий PH launch будет в конце месяца (день 28–30). Нужно 2 недели на сбор followers.

**Warm audience multiplier:** Rolyai (0 followers) = 26 signups. Dub.co (25K email) = 663 signups. Каждый follower на Coming Soon = меньше холодный старт.

---

### День 18–21 — Content для PH warm-up

**Задача:** 2–3 поста в X/Twitter в стиле build-in-public:
- "Show HN results: X stars in Y days"
- "What FnKey users actually say" (testimonials из Discussions)
- "New in FnKey: Groq quick start + onboarding wizard"

Цель: подогреть аудиторию перед re-launch.

---

## Неделя 4 — Re-launch PH

### День 28–30 — Product Hunt Re-launch

**Подготовка:**
- Обновлённый tagline ✅ (сделан в день 1)
- Обновлённый GIF ✅ (сделан в неделю 2)
- Website link → сайт ✅ (сделан в день 1)
- Coming Soon followers ✅ (собраны за 2 недели)
- Post-launch content готов ✅

**Цель:** Top 10 PotD → 500+ visitors → 50+ stars в день запуска.

---

## Прогноз по stars

| Действие | Stars (консерватив) | Stars (медиана) | Источник |
|----------|--------------------|-----------------|-|
| README fix | +56/мес (конверсия) | +56/мес | TOAST UI A/B |
| Show HN | +100 | +289 (7 дней) | ArXiv n=138 |
| r/ClaudeAI | +300 | +400 | GitHub issue прямые данные |
| r/macapps + r/rust | +100 | +200 | AFFiNE estimate |
| PH re-launch top-10 | +30 | +80 | Watermelon/Corbado |
| **Итого за 30 дней** | **+530** | **+969** | |

При текущем органическом темпе 14 stars/мес: 30 дней = 14 stars.
После протокола: 30 дней = 530–969 stars.

**Разница: 38–69x от тех же 30 дней.**

---

## Что НЕ делать

- Не публиковать Show HN и Reddit в один день — размывает momentum
- Не публиковать в пятницу–воскресенье на HN
- Не делать generic "check out my project" посты — только проблемно-ориентированные заголовки
- Не запускать PH re-launch без Coming Soon warmup — холодный старт убивает ранг
- Не игнорировать комментарии в первые 4 часа после Show HN — алгоритм HN учитывает engagement

---

> Следующий документ: `09_PROCESS_LOG.md`
> Продукт: GTM Strategy Audit by MWS Agency
