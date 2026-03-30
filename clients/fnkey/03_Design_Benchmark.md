# FnKey — Design Benchmark (конкурентные сайты)
> Collected: 2026-03-17 | Для использования при проектировании лендинга FnKey

---

## Паттерны Hero-секции

### Headline формулы
| Конкурент | Формула | Пример |
|---|---|---|
| Wispr Flow | Imperative contrast | "Don't type, just speak" |
| Superwhisper | Action + outcome | "Just speak. Write faster." |
| Aqua Voice | Provocation + call to change | "We've typed for 150 years. It's time to speak." |
| **FnKey гипотеза** | Tech advantage + simplicity | "Hold Fn. Speak. Done." |

**Вывод:** Все три конкурента используют короткий, директивный headline (3–7 слов). Ни один не говорит про технологию в headline — только про действие и результат.

### Subheadline паттерн
- Wispr Flow: объясняет механизм + охват ("в каждом приложении")
- Superwhisper: нет — сразу CTA
- Aqua Voice: объясняет + добавляет "Fast, accurate" + "works with every app"

**Вывод:** Subheadline должна закрыть вопрос "как это работает в двух словах" + убрать главный страх (работает везде / не нужно настраивать).

### CTA паттерн
- Все три: прямой download CTA в hero ("Download for Mac", "Download for Windows")
- Aqua Voice: "Start transcribing" → web app (исключение, они SaaS)
- Superwhisper: два равнозначных CTA (Mac + Windows)
- **Wispr Flow:** один CTA, адаптируется под ОС пользователя

**Вывод для FnKey:** CTA = "Download for Mac" + ссылка на GitHub (secondary). Не "View on GitHub" как primary — это отпугивает нетехнических пользователей.

---

## Demo / Product Visualization

### Форматы (от простого к сложному)
1. **Static GIF** — минимально (как у FnKey в README сейчас)
2. **Animated SVG/CSS** — Wispr Flow hero-анимация (raw → polished text)
3. **Embedded YouTube** — Wispr Flow secondary demo
4. **Interactive** — Aqua Voice "Hold Space and try yourself", Superwhisper "Play Demo"

**Вывод:** Минимальная планка для лендинга — animated before/after. Идеал — интерактивный элемент. Для первой версии: короткое screen recording (10–15 сек) в формате looping video/GIF.

### Что показывают в demo
- Wispr Flow: трансформация raw speech → polished text (с ошибками → без)
- Superwhisper: разные контексты (Slack, Notes, Code), переключение режимов
- Aqua Voice: coding context (Claude Code, terminal), затем productivity

**Вывод для FnKey:** Показывать primary use case — developer диктует код/команду. Вторично — Slack сообщение. Не пытаться охватить всё в одном demo.

---

## Структура страницы (порядок секций)

### Wispr Flow
1. Topbar banner (промо)
2. Hero (headline + subheadline + CTA + платформы)
3. Animated demo (before/after)
4. YouTube demo
5. Social proof (logo ticker)
6. Speed metric (4x faster)
7. Feature carousel (AI edits, Dictionary, Snippets, Tones, Languages)
8. Platform (cross-device)
9. Testimonials
10. Use cases (by role)
11. Final CTA

### Superwhisper
1. Hero (fullscreen cinematic)
2. Platform switcher (Slack / Notes / Code)
3. "Used by those who move fast" (logo strip)
4. Adaptability demo (тональность)
5. Features grid
6. Custom Mode deep-dive
7. Integrations
8. iOS section
9. Social proof (Karpathy, Levels, Rauch)
10. Pricing
11. Tutorial videos
12. FAQ

### Aqua Voice
1. Hero + interactive demo
2. Speed metric (5x)
3. Works with all apps
4. Coding section (Avalon)
5. Productivity section (Slack)
6. Content editing section
7. Feature list (numbered)
8. Accuracy benchmark (vs NVIDIA/Whisper/ElevenLabs)
9. Social proof (Twitter)
10. Pricing
11. Final CTA

**Вывод — рекомендуемая структура для FnKey v1:**
1. Hero (headline + subheadline + Download CTA)
2. Демо (screen recording / GIF)
3. Ключевой value prop (streaming = no delay — никто так явно не говорит)
4. Privacy section (mic only while holding Fn)
5. Почему бесплатно / open source (доверие)
6. Установка (упрощённая, не терминальная)
7. Social proof (107 upvotes PH + GitHub stars)
8. GitHub CTA secondary

---

## Цвет / Визуальный тон

| Конкурент | Схема | Ощущение |
|---|---|---|
| Wispr Flow | Кремово-бежевый (#FFFFEB) + чёрный | Тёплый, human, премиум |
| Superwhisper | Тёмный hero → светлые секции | Cinematic, power-user |
| Aqua Voice | Полный dark mode | Developer, технический |

**Вывод для FnKey:**
- macOS-native ощущение — светлый, чистый (как Apple)
- Не dark mode (это уже занято Aqua)
- Не warm/creamy (это Wispr Flow)
- Вариант: нейтральный серо-белый с зелёным акцентом (отсылка к жёлтому/зелёному macOS mic indicator)

---

## Типографика и копирайтинг

### Паттерны которые работают
- **Короткие секции:** 1 headline + 1-2 строки описания + CTA
- **Числа как якоря:** "4x faster", "220 WPM", "100+ languages", "97.3% accuracy"
- **Специфика > обобщения:** "54% lower word error rate than competitors on streaming" лучше чем "very accurate"
- **Privacy через конкретику:** "mic only active while holding Fn, macOS yellow dot confirms" — лучше чем "privacy-first"
- **No bullshit tone:** Superwhisper и Aqua избегают корпоративного языка

### Чего избегать
- "State of the art AI" — все так пишут
- "Seamless", "powerful", "robust" — бессодержательно
- Длинные параграфы в hero
- Pricing без Free tier объяснения

---

## Social Proof паттерны

| Тип | Wispr Flow | Superwhisper | Aqua Voice |
|---|---|---|---|
| Founder/CEO quotes | ✓ (Superhuman CEO) | ✓ (Karpathy, Levels, Vercel CEO) | ✓ (Monzo founder) |
| Logo ticker | ✓ | ✓ | ✓ |
| Twitter/X embeds | ✗ | ✓ | ✓ |
| Metrics (reviews/stars) | "57 reviews 4.7" (PH) | "hundreds of thousands" | YC W24 badge |
| Video testimonials | ✗ | ✗ | ✗ |

**Вывод для FnKey:** Нет громких имён — поэтому делать ставку на:
1. Product Hunt: "#15 of the day, 107 upvotes" (цифры реальные)
2. GitHub stars (38) + forks (6) + listed on awesome-mac
3. Конкретные комментарии с PH — они честные и технические (это доверие в developer community)

---

## Pricing секция паттерны

- Все используют **бесплатный tier** как точку входа
- Superwhisper явно помечает Lifetime как "Top choice" — это конверсионный трюк
- Aqua Voice: Team план с "Enforce privacy mode org-wide" — privacy как enterprise feature
- Wispr Flow: pricing не на главной странице — фокус на value, не на цене

**Вывод для FnKey:** FnKey полностью бесплатный — это нужно показать как силу, не как "мы пока маленькие". Формулировка: "Free forever. Open source." — ни одному конкуренту нельзя сказать то же самое.

---

## Ключевые незакрытые ниши в категории

1. **Streaming без задержки** — Wispr Flow и Superwhisper работают batch или с задержкой. FnKey единственный кто стримит через WebSocket. Никто это не артикулировал маркетингово.
2. **Бесплатный + open source** — категория платная. FnKey уникален.
3. **Privacy by hardware design** — mic физически активен только при зажатой клавише. Конкуренты говорят про privacy, но ни у кого нет такого hardware-level ограничения.
4. **macOS native / Rust** — нет Electron, нет bloat. Разработчики это ценят.
