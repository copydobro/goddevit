# FnKey — Cost of Inaction Matrix
> Каждый незакрытый gap имеет измеримую цену. Этот документ переводит GTM-пробелы в конкретные единицы — stars, месяцы роста, упущенные пользователи.
> Базовый темп FnKey: ~43 stars за ~3 месяца = **14 stars/месяц органики**.
> Источник бенчмарков: `revenue_and_growth/01_market_research/coast benchmark.md`

---

## Как читать этот документ

```
GAP → текущее состояние → если не исправить → теряешь X → в переводе = Y месяцев органики
```

Единица измерения "месяцы органики" = сколько месяцев при текущем темпе (14 stars/мес)
нужно чтобы получить то, что один правильный action даёт за день.

---

## Gap 1 — README не объясняет "зачем". Начинается с Installation.

**Текущее состояние:** README hero = установочные команды. Нет problem statement, нет value prop.

**Бенчмарк:** TOAST UI Editor — единственный задокументированный A/B тест README в OSS.
Переписали README без изменения кода → конверсия visitor→star выросла с 4% до 20% (5x).
3,000 stars за 1 неделю вместо 160 за 3 года до этого.
Источник: прямая аналитика GitHub Insights, опубликована автором на freeCodeCamp/Medium.

**Расчёт для FnKey:**
- Предположим FnKey получает X GitHub-посетителей в месяц
- При конверсии 4% (текущий, без problem statement) → 14 stars/мес
- При конверсии 20% (после переписи README) → ~70 stars/мес
- Разница: **56 stars/месяц теряется прямо сейчас**
- В переводе: = **4 месяца органики каждый месяц промедления**

**Уверенность:** 🟢 ВЫСОКАЯ — прямые данные аналитики, одно изменение, изолированный эксперимент.

**Что нужно сделать:** Добавить 3 строки перед Installation:
```
You think faster than you type. FnKey turns that gap into an advantage.
Hold Fn → speak your full thought → paste into Claude Code.
3x longer prompts. 3x better AI output. Real-time stream, zero batch delay.
```
Усилие: 20 минут.

---

## Gap 2 — TTFV = 9 шагов. Groq не предложен как Quick Start.

**Текущее состояние:** Первый шаг = Deepgram signup. 9 шагов до первого запуска инструмента.

**Бенчмарк (adjacent products):**
- Strava deep-linked onboarding: 41% engagement в 24h vs 8% generic (5x разница)
- Duolingo: 70%+ completion первого урока → 4x выше 7-day retention для completers
- Figma: 5x выше 48h return rate когда юзер создаёт design в первую сессию
- Reforge (Dan Wolchonok): 15% улучшение Week-1 retention → 2x retained users после 10 недель
Источник: Section 4, TTFV benchmarks from adjacent products.

**Расчёт для FnKey:**
- Снижение TTFV с 9 до 6 шагов = устранение ручного редактирования shell-конфига + выбор Groq (бесплатно, без карты)
- По аналогии со Strava: конверсия install→first-use может вырасти с ~20% до ~40-50%
- Нет прямых OSS CLI данных → уверенность средняя

**Уверенность:** 🟡 СРЕДНЯЯ — adjacent product data, прямых OSS CLI данных нет.

**Что нужно сделать:** Реструктурировать README Install section + добавить onboarding wizard в первый запуск (выбор провайдера + поле для ключа прямо в UI). Groq = шаг 1. Deepgram = "Upgrade for production speed."
Усилие: 1-2 дня разработки для wizard, 30 минут для README.

---

## Gap 6 — Show HN не сделан.

**Текущее состояние:** Нет ни одного поста на Hacker News. Крупнейший канал для OSS Rust tools не тронут.

**Бенчмарк:**
- ArXiv "Launch-Day Diffusion" study (Nov 2025, n=138 AI/LLM tool repos): медиана = **121 star за 24h, 289 stars за 7 дней**
- Нижняя граница: Watermelon (#2 front page) → 50+ stars за день 1
- Верхняя граница: Agentset.ai (#2, 26h) → 838 stars + 1,298 website visitors
- 42% первонедельных stars приходят в первые 24h
- Конверсия HN visitors → GitHub stars: 3–7%
- HN даёт 5x больше stars на посетителя чем PH (прямые данные Watermelon)
Источник: Section 1, показатели верифицированы несколькими founder postmortems.

**Расчёт для FnKey:**
- Консервативная оценка (нижняя треть диапазона): **100–150 stars за 24h**
- Умеренная оценка (медиана): **121 stars за 24h, ~289 за неделю**
- При текущем темпе 14 stars/мес: 289 stars = **20 месяцев органики за 7 дней**
- Вторичный эффект: 150+ backlinks от агрегаторов (RSS, Twitter, newsletters) — постоянный SEO-лифт

**Уверенность:** 🟢 ВЫСОКАЯ — академическое исследование n=138 + 7 founder postmortems с прямыми цифрами.

**Что нужно сделать:** Опубликовать Show HN с заголовком:
```
Show HN: FnKey – hold Fn, speak, paste. Voice-to-text for Claude Code in Rust (macOS)
```
Лучшее время: вторник–среда, 7–9 AM PT. Ответить на каждый комментарий.
Усилие: 2 часа написать пост + активная модерация в первые 4 часа.

---

## Gap 8 — Нет owned channel. Каждый запуск = холодный старт.

**Текущее состояние:** Нет email-листа, нет Discord, нет механики capture. 43 stars — это просто числа, не аудитория.

**Бенчмарк:**
- Rolyai (0 email, 0 social) → PH #13 → 26 signups, 0 платных
- Dub.co (25K email + 15K GitHub stars + Discord) → PH #1 → 663 signups (8x дневной avg)
- **25x разница** при холодном vs тёплом старте — прямое сравнение двух PH-запусков
- Loops прямо написал: "Coming into a Product Hunt launch with an existing audience is the single most beneficial thing you can do."
- ScrapeGraphAI: первые 1,000 stars за 6 месяцев, следующие 9,000 — за 4 месяца. "Growth compounds when you find the right audience."
Источник: Section 7, cold launch vs warm launch comparison.

**Расчёт для FnKey:**
- Если Show HN даёт 200 новых юзеров → без email capture они уходят навсегда
- Со списком 500 email: следующий PH запуск → потенциально 10–25x больше signups чем текущий
- Каждый месяц без capture = ещё один месяц когда следующий запуск будет холодным

**Уверенность:** 🟢 ВЫСОКАЯ — прямые сравнительные данные двух реальных запусков.

**Что нужно сделать:** Добавить в README один CTA:
```
⭐ Star this repo to follow updates — or join the discussion in GitHub Discussions
```
Долгосрочно: GitHub Sponsors waitlist или Substack для "FnKey changelog".
Усилие: 15 минут.

---

## Gap 12 — Reddit не использован.

**Текущее состояние:** Нет постов в r/macapps, r/rust, r/ClaudeAI, r/SideProject.

**Бенчмарк:**
- r/ClaudeAI: **1,100 stars за 40 часов** от одного хорошо оформленного setup guide поста (прямые данные из GitHub issue #3662 on sst/opencode)
- r/programming: 200–500 stars per successful post (AFFiNE COO estimate)
- r/neovim: 1,000 stars как primary growth channel для hardtime.nvim (прямые данные автора)
- Rybbit: ~5,000 stars за 9 дней с Reddit как primary channel, 4 поста → ~150K impressions
- Условие: "I built X to solve Y" заголовок outperforms любую другую форму
Источник: Section 2, subreddit benchmarks.

**Расчёт для FnKey:**
- r/ClaudeAI — самый релевантный: аудитория = люди которые используют Claude Code = точный ICP FnKey
- Консервативная оценка (треть медианы): 300–400 stars от одного r/ClaudeAI поста
- 300 stars = **21 месяц органики за один пост**
- Три поста (r/ClaudeAI + r/macapps + r/rust) = 3 разные аудитории, минимальная корреляция

**Уверенность:** 🟡 СРЕДНЯЯ — r/ClaudeAI данные конкретные, но один пример. r/programming и r/rust — оценки.

**Что нужно сделать:**
```
r/ClaudeAI: "I built a free voice input for Claude Code in Rust. Hold Fn, speak, paste. Zero delay."
r/macapps: "FnKey – hold Fn to dictate anywhere on macOS. Free, open source, real-time."
r/rust: "Show r/rust: voice-to-text macOS app in Rust using Deepgram streaming API"
```
Усилие: 3 часа (написать + подобрать время публикации).

---

## Gap 5 — PH title — tech spec, не benefit.

**Текущее состояние:** Текущий тайтл содержит "with Deepgram stream" — это архитектурная деталь, не ценность.

**Бенчмарк:**
- #14 rank (FnKey текущий) → 243 visitors, ~10 stars с PH
- #5 rank → 500–600 installs (Bird Eats Bug, прямые данные)
- #1–2 rank → 2,000+ visitors, 400–800+ stars
- Разница #1 vs #15: 8–10x посетителей
- Title + tagline — первое что видят при scroll PH listings
Источник: Section 3, traffic by rank.

**Расчёт для FnKey:**
- Улучшение tagline не гарантирует ранг, но критично для CTR при discovery на PH
- Реалистичная цель — сдвинуть на 3–5 позиций при следующем launch через Coming Soon warmup
- #10 вместо #15 → ~300–400 visitors вместо 243 → +30–60 stars

**Уверенность:** 🟡 СРЕДНЯЯ — прямая связь tagline → rank не доказана, но CTR механика очевидна.

**Что нужно сделать:**
```
До: FnKey - Superfast voice-to-text with Deepgram stream
После: FnKey – voice input for Claude Code. Hold Fn, speak, paste. Free, real-time, open source.
```
Усилие: 5 минут (PH profile update).

---

## Сводная таблица: цена промедления

| Gap | Потеря за 1 месяц промедления | Эквивалент в органике | Уверенность |
|-----|------------------------------|----------------------|-------------|
| **#6 Show HN** | ~289 stars/неделю (медиана) | **20 мес органики за 7 дней** | 🟢 Высокая |
| **#1 README hero** | ~56 stars/мес конверсии | **4 мес органики каждый месяц** | 🟢 Высокая |
| **#12 Reddit** | ~300–400 stars (r/ClaudeAI) | **21 мес органики за один пост** | 🟡 Средняя |
| **#8 Owned channel** | 25x cold start penalty на след. запуск | Компаундный эффект на каждый будущий запуск | 🟢 Высокая |
| **#2 TTFV** | install→use конверсия ~2–5x ниже | Каждый install который не стал активным юзером | 🟡 Средняя |
| **#5 PH tagline** | +30–60 stars при следующем launch | ~3 мес органики | 🟡 Средняя |

---

## Общий вывод

FnKey тратит **14 stars/месяц** на органике при потенциале **300–500+ stars/месяц** при скоординированном запуске Show HN + Reddit + README fix.

Разница = **21–35x** — не от рекламы, не от платных каналов.
От трёх конкретных действий которые занимают суммарно ~8 часов работы.

Каждый месяц без Show HN = 289 stars которые не придут никогда — потому что HN-аудитория видит продукты один раз и не возвращается смотреть старые посты.

---

> Документ создан как часть GTM Strategy Audit для FnKey
> Pipeline: Stage 1 Positioning → Stage 2 Packaging → Stage 3 Launch → Stage 4 Gaps → Stage 5 Report
> Следующий шаг: `07_30DAY_PROTOCOL.md`
