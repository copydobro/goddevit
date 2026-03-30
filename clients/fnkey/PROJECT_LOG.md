# FnKey Landing Page — Project Log

**Статус:** ✅ Сайт готов к публикации. Нет отзывов, нет кейсов, нет всего — но это концепт, и он сделан. Готов к отправке Евгению.
**Live URL:** https://copydobro.github.io/fnkeysite/
**Репозиторий:** https://github.com/copydobro/fnkeysite
**Дата начала:** ~2026-03-16
**Последнее обновление:** 2026-03-21

---

## Что сделано

### Исследование
- Проанализирован автор: Евгений Олейник, CTO, 10+ лет опыта, Antler-backed стартап AirShelf
- Собраны конкуренты: Wispr Flow, Superwhisper, Aqua Voice, MacWhisper, TalkTastic и др.
- Унифицированы WPM-цифры: 40 WPM печать / 150 WPM речь (реальные данные)
- Задокументирована стратегия позиционирования: "Free Forever · Open Source · No Subscription" против платных конкурентов

### Landing Page — файлы
`D:\Business\TechStack\mws_content\apps\pixel_game\`
- `index.html` — структура страницы
- `style.css` — стили
- `game.js` — игровая логика + typewriter

### Что реализовано на странице

**Hero секция (два столбца):**
- Левый: typewriter-заголовок `Your keyboard is holding you back.` — человекоподобная скорость печати (переменные задержки: 55–145ms буквы, 280–400ms пунктуация, ~6% шанс паузы)
- Правый: subheadline + CTA + micro-copy, появляется мгновенно (fade-in 0.2s, delay 0.3s)

**CTA:** `Download for macOS`
**Micro-copy / Social proof:** `Open source · Free forever · No subscription`

**Canvas игра (640×360, DPR-aware):**
- Левый мир: зомби 40 WPM, медленно, частицы с Z-буквами
- Правый мир: runner 150 WPM, быстро, motion trail
- FN-кнопка в центре: нажатие переключает миры
- Таблица сравнения в canvas с переключением цветов при нажатии FN:
  - Заголовки: bold 17px (= размер WPM-цифр)
  - Строки: bold 13px (= размер предыдущих заголовков)
  - Отступ от горизонта увеличен
- Pixel art спрайты: зомби (2 кадра), runner (2 кадра)
- Wave ring анимация при переключении состояний

### Технические решения
- DPR scaling: `canvas.width = GAME_WIDTH * DPR`, `ctx.scale(DPR, DPR)` — чёткий текст на Retina
- Шрифт везде: `"JetBrains Mono", monospace`
- Без CSS image-rendering: pixelated (убрано — мешало тексту)
- Без resizeCanvas (убрано — canvas фиксированный 640×360)

---

## Текущее состояние страницы

```
Hero
├── [LEFT]  Typewriter headline — "Your keyboard is holding you back._"
└── [RIGHT] 40 WPM is the ceiling. Hold Fn and work twice as fast.
            [Download for macOS]
            Open source · Free forever · No subscription

Canvas Game (640×360)
├── Zombie (left) ←→ FN button ←→ Runner (right)
└── Comparison table below horizon (переключает цвета с FN)
```

**Что НЕ сделано (следующие этапы если проект пойдёт дальше):**
- How It Works секция (3 шага: Hold. Speak. Release.)
- FAQ (нужен ли Deepgram key? безопасно ли? какие приложения?)
- Final CTA
- Deploy на собственный домен (сейчас GitHub Pages)

---

## Анализ проекта

| Файл | Содержание |
|------|-----------|
| `01_Author_Analysis.md` | Профиль Евгения Олейника |
| `02_Competitor_Analysis.md` | Основные конкуренты |
| `03_Design_Benchmark.md` | Дизайн-бенчмарк |
| `04_Competitor_Analysis_Extended.md` | Расширенный анализ |
| `05_Hormozi_Competitor_Analysis.md` | Конкуренты через $100M Offers |
| `06_Grand_Slam_Offer.md` | Оффер для FnKey |
| `07_Brand_Strategy.md` | Бренд-стратегия |
| `08_Visual_Concept.md` | Визуальная концепция |
| `09_Landing_Page_Copy.md` | Копирайт (EN + RU) |
| `10_AirShelf_Analysis.md` | Анализ основного проекта Евгения |
| `11_AirShelf_Hormozi_Audit.md` | AirShelf через $100M Offers + стратегия апселла |

---

## Стратегия outreach

**Сообщение Евгению (196 символов):**
> Наткнулся на FnKey — единственный в категории без сайта. Сделал концепт: https://copydobro.github.io/fnkeysite/
> Если зайдёт — готов доделать, мне нужен кейс в портфолио.

**Апселл (после положительного ответа):**
После того как скажет что нравится → переход на AirShelf:
- $500 — переписать тексты под Hormozi-оффер
- $1000 — тексты + визуал + value stack + CTA редизайн

AirShelf текущая оценка по $100M Offers: **4/10** (нет гарантий, нет кейсов, нет named offer, латентный рынок)

---

## Social proof FnKey (на момент анализа)

- GitHub: **43 звезды**, 7 форков, 4 релиза (v0.4.0)
- Product Hunt: **107 upvotes**, #15 дня
- Listed on **awesome-mac**
- Конкурент MacWhisper для сравнения: 370,000 продаж, 2,093 оценки

---

*Лог создан: 2026-03-18*
