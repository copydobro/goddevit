# FnKey — Launch Audit
> Скилы: launch-strategy (ORB framework) + ph-launch-readiness (5 блоков)
> Источники: PH listing, dev.to, evoleinik.com, соцсети, awesome-mac

---

## ЧАСТЬ 1: КАРТА КАНАЛОВ (ORB FRAMEWORK)

### Owned — свои каналы

| Канал | Аудитория | Активность | Оценка |
|-------|-----------|-----------|--------|
| GitHub repo | 43 stars, 7 forks | Есть релизы (v0.4.0) | ⚠️ Есть база, нет growth loop |
| evoleinik.com | Неизвестно | 14 постов, 2 про FnKey | ⚠️ Низкий трафик предположительно |
| Telegram | **4 подписчика** | Мёртвый | ❌ |

**Вывод:** Owned каналов практически нет. GitHub — единственный рабочий owned канал, но без механики удержания (нет email, нет changelog-подписки).

---

### Rented — арендованные каналы

| Канал | Аудитория | Активность про FnKey | Оценка |
|-------|-----------|---------------------|--------|
| X / Twitter | **35 фолловеров** | Минимальная | ❌ Мёртвый |
| dev.to | Неизвестно | 2 поста (Dec 2025) | ✅ Единственный рабочий rented |
| Product Hunt | — | Запущен (~Mar 2026) | ✅ Сделан, но однократно |

---

### Borrowed — заёмные каналы

| Канал | Как использован | Оценка |
|-------|----------------|--------|
| **Antler Global** | Evgeny — Founder in Residence. ~300+ фаундеров в когорте. Это главный источник 107 upvotes на PH. | ✅ Ключевой актив |
| awesome-mac | Попал в curated list — органически | ✅ Пассивный, не повторяемый |
| PH community | 107 upvotes, #15 дня | ✅ Использован |

**Критический инсайт про Antler:**
107 upvotes при 35 фолловерах X и 4 подписчиках Telegram = цифры не сходятся без внешнего сетевого импульса. Antler-когорта — это единовременный borrowed канал. Он сработал один раз. Он не масштабируется и не повторяется автоматически.

---

## ЧАСТЬ 2: PH LAUNCH READINESS (РЕТРОСПЕКТИВНЫЙ АУДИТ)

### Счёт: 56/100 — PREP NEEDED

| Блок | Score | Max | Статус |
|------|-------|-----|--------|
| Launch Readiness | 11 | 20 | ⚠️ |
| Page Clarity | 14 | 25 | ⚠️ |
| Social Momentum | 7 | 20 | ❌ Главный блокер |
| Maker Credibility | 11 | 15 | ✅ |
| Conversion Path | 13 | 20 | ✅ |

---

### Блок 1: Launch Readiness — 11/20

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Product completeness | 8 | 8 | Рабочий app, есть релизы, можно установить и попробовать |
| Coming Soon page | 0 | 6 | Нет данных о pre-launch followers. Судя по результату — Coming Soon не использовался |
| Launch date planning | 3 | 6 | Дата неизвестна. Нет данных что выбирался Tuesday–Thursday 12:01am PST |

---

### Блок 2: Page Clarity — 14/25

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Tagline | 5 | 10 | "macOS dictation with Deepgram stream" — tech spec, не outcome formula. Нет "[Product] – [Verb] [Outcome] for [Audience]" |
| Description | 6 | 7 | Maker comment структурирован хорошо: проблема ("batch mode") → решение (streaming) → privacy claim. Минус: нет конкретной аудитории (devs with Claude Code) |
| Media quality | 3 | 8 | Неизвестно качество PH cover image. GIF в README есть — попал ли он на PH страницу: неизвестно |

---

### Блок 3: Social Momentum — 7/20

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Pre-launch social posts | 3 | 8 | dev.to посты были в Dec 2025 — за ~3 месяца до PH. Слишком рано чтобы считать pre-launch. Прямых постов перед запуском не найдено |
| Community warm-up | 1 | 7 | Нет данных о мобилизации Discord/Slack/IH. Только Antler-сеть (неформально) |
| Day-of traffic plan | 3 | 5 | Antler-сеть частично активирована. Без системного плана |

**Это и есть объяснение #15 а не #1–5.** Permit.io с похожим продуктом получил Product of the Day через координированную Slack-мобилизацию. У Evgeny был Antler-импульс, но без системы он угас в первые часы.

---

### Блок 4: Maker Credibility — 11/15

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| PH profile | 4 | 5 | Профиль есть, Evgeny активен на PH |
| PH karma & activity | 3 | 5 | Присутствие на PH есть. Насколько активен в community до запуска — неизвестно |
| Maker comment | 4 | 5 | Написан, честный, есть история "почему я это построил". Минус: нет приглашения к конкретному engagement |

---

### Блок 5: Conversion Path — 13/20

| Критерий | Score | Max | Обоснование |
|----------|-------|-----|-------------|
| Working site | 5 | 8 | GitHub работает, app скачивается. Но "сайт" = README = высокие Travel Costs (см. Packaging Audit) |
| Clear CTA | 3 | 6 | CTA размыт: "star the repo" есть, но нет чёткого пути от PH → установка → первый результат |
| Pricing transparency | 5 | 6 | Free/OSS — понятно сразу. Плюс $200 free credit Deepgram упомянут |

---

## ЧАСТЬ 3: TIMELINE ЗАПУСКОВ

```
Dec 22, 2025  → dev.to: "Adding LLM Polish to a Speech-to-Text App"
Dec 27, 2025  → dev.to: "Voice Transcription is a Superpower for AI-Assisted Coding"
               (2 поста объясняют продукт и use case)

Dec–Feb 2026  → Тишина. Нет постов, нет анонсов, нет ченлога.

~Mar 21, 2026 → Product Hunt запуск
               107 upvotes, #15 дня
               Источник: предположительно Antler-сеть + органика с dev.to

Mar 25, 2026  → Текущий момент
               43 stars GitHub, 7 forks
               Нет активности в соцсетях после PH
```

**Паттерн:** "Burst and silence". Один пик — и тишина. Нет системы поддержания импульса.

---

## ЧАСТЬ 4: ЧТО НЕ ИСПОЛЬЗОВАНО

| Канал | Потенциал | Почему критично |
|-------|-----------|----------------|
| **Show HN** | +100–200 stars / 24h (данные из скила) | Rust + macOS + AI tools = идеальная HN аудитория. "Show HN: I built a voice-to-text tool for Claude Code in Rust" → прямое попадание |
| **r/macapps** | 500K+ подписчиков | Категорийный subreddit для macOS утилит |
| **r/rust** | 350K+ подписчиков | Технический кейс "Rust menu bar app with Deepgram WebSocket" — интересен сам по себе |
| **r/ClaudeAI** | Растущий | "I built a voice input tool for Claude Code" — прямой use case |
| **Changelog / release notes** | Retention существующих users | Каждый релиз = повод вернуться и поделиться |
| **Email list / waitlist** | Owned канал с нуля | Даже 100 emails = база для следующего запуска |

---

## ИТОГОВЫЕ GAPS ИЗ ЭТОГО ЭТАПА

| # | Gap | Блок | Приоритет |
|---|-----|------|-----------|
| 1 | Show HN не сделан — самый высокоimpact канал для OSS Rust tool | Distribution | ВЫСОКИЙ |
| 2 | После PH запуска — тишина. Нет post-launch контента, нет testimonials | Post-launch | ВЫСОКИЙ |
| 3 | Нет owned channel с capture механикой (email, Discord) — каждый запуск холодный старт | Owned | ВЫСОКИЙ |
| 4 | dev.to посты были за 3 месяца до PH — не сработали как pre-launch warm-up | Timing | СРЕДНИЙ |
| 5 | r/macapps, r/rust, r/ClaudeAI — три канала с прямой аудиторией не использованы | Distribution | СРЕДНИЙ |
| 6 | Нет Coming Soon page — нет pre-launch follower base | PH prep | СРЕДНИЙ |
| 7 | Antler-сеть использована неформально — нет системы активации при следующем запуске | Borrowed | НИЗКИЙ |
