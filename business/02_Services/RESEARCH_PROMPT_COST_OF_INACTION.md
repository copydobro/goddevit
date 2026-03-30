# Research Prompt: Cost of Inaction Benchmarks
> Цель: собрать реальные данные по каждому GTM-каналу и упаковочному решению
> Использование: Cost of Inaction Matrix — артефакт GTM-аудита для dev/OSS продуктов
> Запускать в: Perplexity Pro, ChatGPT с browsing, Gemini Deep Research

---

## Контекст для исследователя

Мы — GTM-агентство для dev и OSS-фаундеров. Наш продукт: GTM Strategy Audit ($500).
Один из ключевых артефактов аудита — **Cost of Inaction Matrix**: таблица которая показывает
инженеру не "тебе нужно сделать X", а "если ты не сделаешь X в этом месяце, ты теряешь Y".

Наша аудитория — технические фаундеры. Они не реагируют на "это важно для роста".
Они реагируют на конкретные числа с источниками. Поэтому каждый бенчмарк
должен быть подкреплён реальным примером или исследованием.

**Тип продуктов для которых нужны бенчмарки:**
- Open source developer tools (CLI, macOS apps, IDE plugins, productivity tools)
- Бесплатные / freemium
- Дистрибуция через GitHub, HN, Reddit, Product Hunt
- Аудитория: разработчики, solo devs, indie hackers, AI/ML engineers

---

## Задача

Найди реальные данные (кейсы, постмортемы, исследования, твиты с цифрами)
для каждого из 9 разделов ниже.

**Формат каждого бенчмарка:**
```
Действие: [что сделали]
Результат: [конкретные числа — stars, visitors, signups, upvotes]
Продукт/источник: [название + ссылка]
Тип продукта: [CLI / macOS app / web tool / etc]
Временной горизонт: [за 24ч / за неделю / за месяц]
Качество данных: [прямая цитата автора / аналитика / оценка]
```

---

## Раздел 1: Show HN на Hacker News

**Вопрос:** Сколько GitHub stars / visitors / signups получает типичный OSS developer tool
от одного Show HN поста?

**Ищи:**
- Постмортемы фаундеров: "我 launched on Show HN and got X stars"
- Треды на HN где авторы делятся результатами своего Show HN
- Сравнение: Show HN для Rust tools, CLI tools, macOS apps, AI tools
- Данные по velocity: сколько stars в первые 24ч vs первую неделю
- Провальные Show HN vs успешные — в чём разница (заголовок, время, тип продукта)

**Конкретные поисковые запросы:**
- "Show HN results stars github" site:news.ycombinator.com
- "launched on hacker news got X stars" site:reddit.com OR site:indiehackers.com
- "show hn postmortem" github stars traffic
- "hacker news launch" rust CLI tool results

**Что нас интересует:**
- Медиана stars за 24ч для OSS tool (не SaaS)
- Диапазон: нижняя граница (провал) и верхняя (хит)
- Конверсия HN visitors → GitHub stars (если есть данные)
- Decay: через сколько дней трафик возвращается к baseline

---

## Раздел 2: Reddit — каналы для dev tools

**Вопрос:** Сколько stars / visitors даёт пост в конкретных subreddits?

**Subreddits которые нас интересуют:**
- r/rust — для Rust-инструментов
- r/macapps — для macOS productivity/dev tools
- r/ClaudeAI — для AI coding tools
- r/LocalLLaMA — для open source AI tools
- r/commandline / r/linux — для CLI tools
- r/SideProject — для indie dev launches

**Ищи:**
- Посты с пометкой "I made this" или "Show r/X" + комментарии где автор делится цифрами
- Треды на r/indiehackers или r/startups о результатах Reddit-запусков
- Сравнение engagement по subreddits для dev tools

**Что нас интересует:**
- Типичный upvote count для успешного поста в каждом subreddit
- Конверсия upvotes → GitHub stars (если кто-то делился)
- Лучшее время публикации
- Типы заголовков которые работают (Show r/X vs вопрос vs описание)

---

## Раздел 3: Product Hunt

**Вопрос:** Что даёт запуск на PH для OSS dev tool — реально, не в теории?

**Ищи:**
- Постмортемы PH-запусков для developer tools: трафик, signups, installs, GitHub stars
- Разница между #1 дня vs #5 дня vs #15 дня (как у FnKey) по трафику
- Конверсия PH upvote → реальный пользователь (install или signup)
- Данные по Coming Soon: сколько followers нужно для хорошего launch day velocity
- "Product Hunt launch results" для бесплатных OSS tools

**Конкретные поисковые запросы:**
- "product hunt launch results" developer tool github stars
- "product hunt postmortem" signups traffic open source
- "PH #1 product of day" traffic analytics results
- product hunt coming soon followers launch velocity correlation

**Что нас интересует:**
- Медианный трафик с PH для #1 / #5 / #15 дня
- Retention: сколько из PH-посетителей возвращаются через месяц
- GitHub stars с PH запуска (диапазон)
- Разница между "Visit Website → лендинг" vs "Visit Website → GitHub README"

---

## Раздел 4: README оптимизация

**Вопрос:** Как конкретные изменения в README влияют на конверсию visitor → star / install?

**Ищи:**
- Исследования или A/B тесты: README с problem statement vs без
- Данные о влиянии GIF/видео демо на конверсию (есть ли исследования?)
- Влияние badges (stars counter, license) на доверие и конверсию
- Влияние TTFV (Time to First Value) на install rate: сколько шагов = какая конверсия
- "README best practices" с конкретными данными (не советы а цифры)
- Сравнение GitHub repos с одинаковым продуктом но разным README quality

**Конкретные поисковые запросы:**
- "readme optimization github stars" A/B test results
- "github readme gif demo" conversion impact
- "time to first value" onboarding steps conversion rate developer tools
- "github readme best practices" data study research
- OSS project "rewrote readme" stars before after

**Что нас интересует:**
- Конверсия visitor → star с хорошим README vs плохим (есть ли данные?)
- Влияние GIF демо на bounce rate / star rate
- Сколько шагов установки = какой drop-off (по каждому лишнему шагу)
- Badges: есть ли данные что они влияют на доверие/конверсию?

---

## Раздел 5: Контент маркетинг (dev.to, blog posts, Twitter/X threads)

**Вопрос:** Что даёт один качественный пост о продукте?

**Ищи:**
- Данные по dev.to: типичный охват поста, конверсия в GitHub stars/visits
- Twitter/X threads о dev tools: views → stars correlation
- "I wrote a blog post and got X stars" — реальные кейсы
- Сравнение: технический пост (how I built it) vs маркетинговый (why you need this)
- Karpathy effect: что происходит когда high-profile аккаунт упоминает инструмент

**Что нас интересует:**
- dev.to: медианные views для поста о dev tool, конверсия в stars
- Twitter thread: views → GitHub stars для developer audience
- Organic mention от influencer (10K+ followers): типичный лифт в stars
- Decay: через сколько дней трафик с поста возвращается к нулю

---

## Раздел 6: GitHub-специфичные механики

**Вопрос:** Как внутренние GitHub-механики влияют на discoverability и рост?

**Ищи:**
- GitHub Trending: что нужно чтобы попасть, какой трафик это даёт
- "Awesome-X" листинги: сколько stars/visits приносит попадание в awesome list
- GitHub topics: влияет ли правильный набор тегов на discovery
- GitHub Stars → Watch → Fork correlation: какое соотношение у healthy OSS project
- Sponsored/Featured repos: существует ли это, как работает

**Что нас интересует:**
- Средний лифт от попадания в GitHub Trending (daily)
- Stars с одного качественного "awesome-X" листинга
- Конверсия star → fork → contributor для dev tools

---

## Раздел 7: Owned channels (email, Discord, GitHub Discussions)

**Вопрос:** Насколько owned channel меняет результаты следующего запуска?

**Ищи:**
- Данные о разнице между "cold launch" vs "warm launch с email list"
- GitHub Discussions: есть ли данные что активные Discussions → больше stars/contributors?
- "Email list" для OSS project: типичный open rate, конверсия при следующем запуске
- Indie hacker данные: correlation между newsletter size и MRR/traction

**Что нас интересует:**
- Cold start (0 subscribers) vs 500 email → разница в первые 24ч запуска
- GitHub Discussions activity → star growth correlation
- Типичный open rate для dev-ориентированного newsletter

---

## Раздел 8: Время и decay

**Вопрос:** Как долго "живут" спайки трафика с разных каналов?

**Ищи:**
- HN traffic decay: через сколько часов/дней трафик возвращается к baseline
- PH traffic decay: первые 24ч vs неделя vs месяц
- Reddit traffic decay: типичная кривая для r/rust, r/macapps поста
- "Content half-life" для dev tools на разных платформах

**Что нас интересует:**
- Для каждого канала: % от peak трафика через 24ч / 7 дней / 30 дней
- Какой канал даёт самый долгоживущий трафик (SEO? HN? Reddit?)
- Compound effect: что происходит если сделать HN + Reddit + PH в течение 2 недель

---

## Раздел 9: Стоимость альтернатив (якорь для цены)

**Вопрос:** Сколько стоит получить тот же результат другими способами?

**Ищи:**
- Стоимость GitHub star через платную рекламу (если кто-то тестировал)
- Стоимость одного пользователя через paid acquisition для dev tools
- Зарплата/ставка growth engineer или developer advocate (месяц работы)
- Стоимость GTM-консультации у freelance growth consultant (hourly rate)
- Стоимость полного GTM-проекта у специализированного агентства для стартапов

**Конкретные поисковые запросы:**
- "developer advocate salary" 2025 2026
- "growth engineer" hourly rate freelance
- "github stars cost" paid promotion
- "developer marketing agency" pricing packages
- cost per user acquisition developer tools B2D

---

## Формат итогового документа

Организуй результаты по следующей структуре:

### [Название канала/действия]

**Медианный результат:** [число + единица измерения]
**Диапазон:** [нижняя граница — верхняя граница]
**Временной горизонт:** [за сколько времени]
**Decay:** [через сколько возвращается к baseline]
**Лучший кейс:** [название продукта + результат + ссылка]
**Худший кейс или провал:** [пример если есть]
**Условия:** [что нужно чтобы получить медианный результат — тип продукта, качество поста, etc]
**Источник данных:** [ссылки]

---

**В конце документа добавь:**

### Сводная таблица: Cost of NOT doing (за 1 месяц промедления)

| Действие | Потеря за месяц | Единица | Уверенность в данных |
|----------|----------------|---------|---------------------|
| Show HN не опубликован | X | stars | высокая / средняя / низкая |
| README без problem statement | X | % конверсии | ... |
| PH Coming Soon не создан | X | followers к запуску | ... |
| Reddit посты не сделаны | X | stars | ... |
| GIF демо отсутствует | X | % bounce | ... |
| Нет owned channel | X | cold start penalty | ... |
| TTFV 9 шагов vs 3 | X | % drop-off | ... |

---

## Важные ограничения

- Только реальные данные — не теория и не "best practices без цифр"
- Если данных нет — пиши "данных не найдено" для этого пункта, не придумывай
- Приоритет источников: прямые цитаты фаундеров > аналитические исследования > оценки
- Фокус на бесплатных OSS developer tools — не SaaS, не B2B enterprise
- Данные за 2023-2026 (более старые могут не отражать текущий HN/PH/Reddit)
