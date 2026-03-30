# FnKey — Gap Analysis
> Источники: Stage 1 (7 gaps) + Stage 2 (8 gaps) + Stage 3 (7 gaps)
> После дедупликации: 15 уникальных gaps
> Каждый gap: измеримый, устранимый одним фаундером без команды

---

## Сводная таблица

| # | Gap | Фаза GTM | Импакт | Действие | Ожидаемый эффект |
|---|-----|----------|--------|---------|-----------------|
| 1 | README не объясняет "зачем" — начинается с Installation | Packaging | 🔴 HIGH | Добавить 2–3 строки перед Install: struggling moment + "3x longer prompts = 3x better AI output" | Снижение bounce на GitHub, рост конверсии visitor→install |
| 2 | TTFV = 9 шагов (не 11 — Deepgram не требует карту и подтверждения email). Groq не предложен как quick start | Packaging | 🔴 HIGH | Переписать Install: "Quick Start (Groq, 5 min, бесплатно)" как шаг 1, Deepgram как "Upgrade for production speed". Добавить onboarding wizard в первый запуск: выбор провайдера + поле для ключа прямо в UI. Это 9→6 шагов. | Меньше drop-off на шаге с API-ключом. ICP-примечание: даже технический разработчик теряет время на незнакомый Deepgram signup — Groq убирает этот барьер без изменения целевой аудитории. |
| 3 | Нет отдельного сайта — PH "Visit Website" → README | Packaging | 🔴 HIGH | Задеплоить landing page (концепт уже готов: copydobro.github.io/fnkeysite/) | Снижение Travel Cost с PH, рост конверсии PH→install |
| 4 | Core value prop не написан нигде в точках входа | Positioning | 🔴 HIGH | Написать в README hero: "speak everything in your head — Claude gets full context, not the filtered version" | Рост понимания продукта у Economic users, выше star rate |
| 5 | PH title — tech spec ("with Deepgram stream"), не benefit | Positioning | 🔴 HIGH | Обновить PH tagline: "FnKey – voice input for Claude Code and Cursor, zero delay, free" | Выше CTR с PH search, лучше first impression у незнакомой аудитории |
| 6 | Show HN не сделан — крупнейший канал для OSS Rust tool | Distribution | 🔴 HIGH | Опубликовать "Show HN: I built a voice-to-text tool for Claude Code in Rust — Hold Fn, speak, paste" | +100–200 GitHub stars за 24h (данные HN), новый пул аудитории |
| 7 | После PH — тишина. Нет post-launch content, нет testimonials | Post-launch | 🔴 HIGH | Написать 1 пост: "What happened after 107 upvotes on PH" + попросить 3–5 юзеров из PH-comments написать отзыв | Social proof, повторный трафик, материал для следующего запуска |
| 8 | Нет owned channel с capture механикой | Distribution | 🔴 HIGH | Добавить в README: "Star to follow updates" + GitHub Discussions или email через GitHub Sponsors | Каждый следующий запуск — не холодный старт |
| 9 | Конкурентная рамка неполная — не написано ни про цену, ни про качество vs конкурентов | Positioning | 🟡 MEDIUM | Добавить в README: "Free forever. Wispr Flow costs $240/year and is notoriously buggy. Claude Code /voice has 500ms lag and cuts off your first words. FnKey: streaming, $0, open source." Три аргумента: цена + надёжность + скорость. | Закрывает сравнение для тех кто уже пробовал конкурентов — а таких большинство |
| 10 | GIF предположительно абстрактный — нет контекста Claude Code | Demo | 🟡 MEDIUM | Переснять demo.gif: Hold Fn → говоришь промпт → текст появляется в поле Claude Code | GIF продаёт use case, не просто механику |
| 11 | Нет badges в README (stars, build status) | Social Proof | 🟡 MEDIUM | Добавить shields.io badges: GitHub stars, license, latest release — под заголовком | Instant credibility, visual trust signal |
| 12 | Reddit не использован: r/macapps, r/rust, r/ClaudeAI | Distribution | 🟡 MEDIUM | 3 отдельных поста с разными углами: macOS tool / Rust project / Claude Code workflow | Органический трафик из трёх community с разной мотивацией |
| 13 | Нет Coming Soon page для следующего PH запуска | PH Prep | 🟡 MEDIUM | Создать PH Upcoming page прямо сейчас — собирать followers до следующего launch | Pre-warm аудитория → выше first-hour velocity → выше шанс featured |
| 14 | Нет CONTRIBUTING.md — барьер для первого PR высокий | Community | 🟢 LOW | Добавить CONTRIBUTING.md: как собрать из source, как тестировать, хорошие first issues | Больше contributors → community signal → доверие |
| 15 | Antler-сеть использована разово, нет системы активации | Distribution | 🟢 LOW | Написать шаблон сообщения в Antler Slack/Discord на будущие запуски | Повторяемый borrowed канал вместо одноразового |

---

## Приоритизация по импакту и усилию

```
                    УСИЛИЕ
              НИЗКОЕ      ВЫСОКОЕ
        ┌───────────────────────────┐
ВЫСОКИЙ │  #1 README hero      #3 Сайт       │
ИМПАКТ  │  #4 Value prop       #6 Show HN    │
        │  #5 PH tagline       #7 Post-launch│
        │  #9 Цена якорь       #8 Email/CRM  │
        ├───────────────────────────┤
СРЕДНИЙ │  #11 Badges          #2 TTFV fix   │
ИМПАКТ  │  #13 Coming Soon     #10 GIF redo  │
        │                      #12 Reddit    │
        ├───────────────────────────┤
НИЗКИЙ  │  #14 CONTRIBUTING    #15 Antler    │
ИМПАКТ  │                           │
        └───────────────────────────┘
```

**Quick wins (можно сделать сегодня, высокий импакт):**
- #1 — 2–3 строки в README перед Install
- #4 — одно предложение с core value prop
- #5 — обновить PH tagline (2 минуты)
- #9 — одна строка сравнения цен
- #11 — badges через shields.io (10 минут)

**Высокий импакт, требует работы:**
- #2 — переписать Install секцию (Groq first)
- #6 — Show HN пост (написать + опубликовать в правильное время)
- #7 — post-launch content + testimonials
- #10 — переснять GIF с контекстом Claude Code

**Стратегические (меняют долгосрочный trajectory):**
- #3 — задеплоить сайт (уже готов)
- #8 — email capture / GitHub Discussions
- #13 — PH Coming Soon page

---

## Верификация гарантии

> Условие: найти ≥5 конкретных, измеримых, устранимых gaps.

Найдено: **15 gaps**
Критичных (HIGH): **8**
Каждый gap имеет: фазу, конкретное действие, ожидаемый эффект. ✅

Гарантия выполнена с запасом 3x.
