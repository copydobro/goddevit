# Lore — GitHub README Copy Analysis ($100M Offers Framework)
> Date: 2026-03-19
> Source: github.com/ErezShahaf/Lore (100 ⭐, 6 forks)
> Framework: Grand Slam Offer Creation ($100M Offers, Alex Hormozi)

---

## Собранные тексты с GitHub

### Repo description (tagline)
> "Summon it with a keystroke, throw in anything you want to remember or ask your own memory. A local LLM agent that restructures your knowledge into a vectorized DB. fully private, zero cloud. Built for developers."

### README — H1
> "AI-powered thought capture and recall — runs entirely on your machine."

### README — What is Lore
> "Lore is a lightweight desktop app that sits in your system tray and lets you pop-up a hover chat with a button click to quickly capture thoughts. It uses a local LLM (via Ollama) and a local vector database (LanceDB) to store, understand, and retrieve your information — no cloud services, no API keys, complete privacy."
>
> "Think of it as your private second memory — a place to store anything you might need later. From long-form guides you've written for yourself, todo lists, decision summaries, urls, or even that exact curl you used to reproduce the bug in production. Everything stays organized and instantly searchable by simply describing it in plain language — even by date, or topic."

### Key features (дословно)
- Quick capture — press a global shortcut to pop up a chat bar, type a thought, and it's stored instantly
- Smart recall — ask questions in natural language and get answers sourced from your stored thoughts
- AI classification — input is automatically classified as a thought, question, command, or instruction
- Todo management — add, list, complete, and organize todos with priority and categories
- RAG pipeline — retrieval-augmented generation finds relevant context from your notes before answering
- Fully local — all data and AI processing stays on your machine

### Usage examples — storing
```
"Daily note - sarah needs help with feature implementation"
"The stripe webhook event that caused our refund bug {schawarma: true}"
"add to my todo 'talk to Daniel about the integration tomorrow'"
"todos: buy milk on the way home, and jump 12 times"
```

### Usage examples — recall
```
"What notes did I write at daily today"
"I'm about to go home, is there anything I need to do on the way home?"
"what was the stripe webhook event that caused our refund bug"
"show me the original content & dates of the rows in the database which helped you give me this information"
```

### Getting help examples
```
"What can you do?"
"Wassup my brotha Lore, tell me what u can do or I uninstall"
```

---

## Анализ по $100M Offers

### 1. Уравнение ценности

```
Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)
```

**Dream Outcome — 4/10**

Текущее: *"AI-powered thought capture and recall"* — говорит ЧТО делает продукт, не КАКОЙ РЕЗУЛЬТАТ получает пользователь.

Сравни с тем, как Capacities формулирует то же самое:
> *"Your best thinking keeps slipping away"* → потом решение.

Lore описывает механизм (capture + recall), а не outcome (сохранить мысль которую ты бы потерял). Dream Outcome не назван.

**Perceived Likelihood — 5/10**

Есть: 100 ⭐, MIT, TypeScript. Нет: ни одного testimonial в README, нет "X людей используют это", нет кейсов с результатом. Usage examples сырые (`{schawarma: true}`) — аутентичны, но не убеждают незнакомца.

**Time Delay — 7/10**

"stored instantly", "pop-up a hover chat" — есть, но не акцентировано. Нигде нет числа "3 секунды". Онбординг описан детально (выбрать директории, скачать модели) — это увеличивает perceived Time Delay.

**Effort & Sacrifice — 5/10**

Установка описывается как 4-шаговый процесс: Download → Install → Choose models → Shortcut. Для MVP-README нормально, но для лендинга убивает конверсию — выглядит сложнее, чем есть на самом деле.

---

### 2. Starving Crowd

README заканчивается фразой "Built for developers" — правильно, но закопано в конце repo description. В самом тексте README аватар не назван ни разу.

Примеры использования (`sarah needs help with feature implementation`, `stripe webhook event`) косвенно сигнализируют девелоперскую аудиторию — хорошо, но неосознанно.

**Сильный инсайт:** примеры настоящие, живые, developer-specific. Stripe webhook, sarah, curl команды — это настоящая жизнь разработчика. Это лучший social proof в README — и он похоронен в разделе "Storing thoughts". На лендинге это должно быть в hero.

---

### 3. Оффер-стек — что есть vs. что должно быть

| Компонент | В README | На лендинге |
|---|---|---|
| Core offer | ✅ описан технически | → переформулировать через outcome |
| Bonus 1 (Zero install friction) | ❌ онбординг описан как сложный | → "60 seconds to first captured thought" |
| Bonus 2 (No API key) | ✅ "no API keys" упомянуто | → вынести в headline |
| Bonus 3 (MIT Forever Guarantee) | ✅ MIT badge есть | → назвать и продать как гарантию |
| Bonus 4 (Zero Cloud Privacy) | ✅ "fully private, zero cloud" | → "no server exists" сильнее |

---

### 4. Naming — MAGIC-анализ текущих формулировок

| Текст | Оценка | Проблема |
|---|---|---|
| `"AI-powered thought capture and recall"` | 3/10 | "AI-powered" — cliché 2026. Нет avatar, нет timeframe |
| `"runs entirely on your machine"` | 8/10 | Конкретно, отличительно, верифицируемо |
| `"fully private, zero cloud"` | 9/10 | Коротко, ясно, уникально в категории |
| `"Built for developers"` | 7/10 | Правильный avatar, без goal и timeframe |
| `"your private second memory"` | 5/10 | "Second brain/memory" — занятая территория |
| `"Summon it with a keystroke"` | **10/10** | Визуальное, действенное, мгновенно понятное |

**Лучшая фраза в README:** `"Summon it with a keystroke"` — это и есть hero headline для лендинга. Автор написал её в repo description, но не поставил в H1 README.

---

### 5. Что README делает хорошо (не трогать)

1. **Usage examples** — аутентичные, специфичные, developer-native. Stripe webhook, sarah, curl команды — настоящая жизнь разработчика. Золото для лендинга.
2. **"Summon it with a keystroke"** — лучший глагол в категории. Ни один конкурент не использует "summon".
3. **Tone** — peer-to-peer, без корпоративщины. "Wassup my brotha Lore" как пример запроса — это personality.
4. **Честность в стеке** — Ollama, LanceDB, TypeScript названы прямо. Для devs это доверие.

---

### 6. Правки для лендинга

| Проблема в README | Правка |
|---|---|
| H1: "AI-powered thought capture" — generic | → **"Summon it with a keystroke. Your thoughts stay on your machine."** |
| Dream Outcome не назван | → "Stop losing the thought between context switches" |
| "private second memory" — занятая территория | → "your memory, local AI, zero cloud" |
| Онбординг выглядит как 4 шага | → "60 seconds from download to first captured thought" |
| 100 ⭐ закопаны | → В social proof strip над headline |
| Testimonials отсутствуют | → Вытащить лучшие PH-комментарии |
| "Built for developers" в конце | → В первом предложении subheadline |
| Нет named guarantee | → **"The Forever Guarantee"** — MIT, код не исчезнет |

---

## Итоговый скор: 5/10

Технически точный, аутентично написан разработчиком для разработчиков, есть несколько gem-фраз (`summon`, `fully local`, usage examples). Но не продаёт — описывает механизм вместо outcome, хоронит лучшие фразы, не стекирует ценность, нет гарантии, нет scarcity.

**Хорошая новость:** сырьё для лендинга в README уже есть — нужно переставить акценты, не переписывать с нуля.

---

## Ключевые фразы из GitHub для переиспользования на лендинге

| Фраза | Откуда | Использование |
|---|---|---|
| "Summon it with a keystroke" | Repo description | Hero headline |
| "fully private, zero cloud" | Repo description | Privacy section headline |
| "Built for developers" | Repo description | Subheadline avatar signal |
| "runs entirely on your machine" | README H1 | Privacy VP card |
| "no cloud services, no API keys" | README body | Feature list |
| "stored instantly" | Features | Time Delay proof |
| stripe webhook / sarah examples | Usage examples | Hero demo caption / social proof |
| "Wassup my brotha Lore" | Getting help | Tone/personality signal for About section |
