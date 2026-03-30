# Notion Case Study Page — Plan

**Назначение:** Конвертировать тёплый лид (запустил анализатор → оставил email) в платящего клиента.
**Аудитория:** Dev/OSS founder, только что увидел свои gaps, хочет понять что именно он получит за $500.
**Одна задача страницы:** Показать реальный deliverable до оплаты → снять риск → получить оплату.

---

## Почему Notion, а не лендинг

- Человек видит реальный документ — не рекламу
- Кейс FnKey = точный формат того что он получит
- Низкий порог доверия: Notion = рабочий инструмент, не сайт-продажник
- После оплаты: тот же воркспейс становится его рабочим пространством

---

## Структура страницы

### Заголовок
```
The Cold Start Audit — See a real one before you buy
```

---

### Блок 1: Контекст (3 строки, без украшений)
```
Below is a real audit we ran on FnKey — a macOS voice-to-text tool
with 43 GitHub stars and 107 Product Hunt upvotes.
This is exactly what your audit will look like.
```

**Зачем:** Убирает абстракцию. Человек понимает что смотрит на реальную работу, не шаблон.

---

### Блок 2: FnKey Case Study (toggle — раскрывается)
```
▸ FnKey Case Study — Full Audit [click to expand]
```

Внутри:
- **Скор:** 22/54 — GTM Readiness: Critical
- **Топ-5 gaps** с Cost of Inaction цифрами:
  - Show HN не сделан → медиана 289 stars/неделю потеряна
  - README без problem statement → 4% vs 20% конверсия (TOAST UI данные)
  - TTFV 9 шагов → 3-5x ниже активация (Strava/Figma бенчмарки)
  - Нет owned channel → 25x cold start penalty (Rolyai vs Dub.co)
  - Reddit не использован → r/ClaudeAI = 1,100 stars/40 часов не задействовано
- **30-Day Protocol preview** (первые 2 недели)
- Ссылка на полный отчёт: `→ 07_REPORT.md`

**Зачем:** Это главный якорь. Человек видит реальный deliverable — не описание того что будет, а сам продукт.

---

### Блок 3: Что ты получишь

```
DELIVERABLE 1 — Traction Gap Map
Notion-отчёт: каждый GTM-gap с приоритетом и конкретной правкой.
Ранжировано по импакту. Cost of Inaction на каждый gap.

DELIVERABLE 2 — 30-Day Distribution Protocol
Пошаговый план: какие каналы, что делать, как измерять.
Построен под твой продукт — не общий шаблон.

ГАРАНТИЯ — The 5-Gap Guarantee
Найдём минимум 5 измеримых, устранимых gaps
или вернём $500 полностью. Без вопросов.
```

---

### Блок 4: Процесс (3 шага, без звонков)

```
1. ОПЛАТА → ты получаешь ссылку на async-бриф (10 минут, 6 вопросов)
2. МЫ СТРОИМ АУДИТ → 7 рабочих дней
3. DELIVERABLES → появляются прямо в твоём Notion воркспейсе
         ↑ мы уведомляем тебя когда каждый готов
```

**Зачем:** Снимает страх "а вдруг придётся на звонки ходить". Async = уважение к времени инженера.

---

### Блок 5: Оплата

```
$500 · Async · 7 дней · 5-Gap Guarantee

[PAY $500 — START YOUR AUDIT →]
```

Под кнопкой мелко:
```
После оплаты мы создадим твой воркспейс и пришлём ссылку на бриф в течение 24 часов.
```

**Зачем:** Объясняет что произойдёт сразу после клика — убирает неопределённость.

---

### Блок 6: FAQ (toggle)

```
▸ Нужны ли звонки или встречи?
  Нет. Всё async. Бриф — 6 вопросов, 10 минут. Далее — только Notion.

▸ У меня 0 пользователей / 0 stars — подойдёт?
  Да. Именно для этого этот аудит существует. Лучше исправить gaps до
  первого запуска чем после.

▸ Что если я не получу минимум 5 gaps?
  Возвращаем $500 полностью. Без вопросов и условий.

▸ Сколько занимает бриф?
  10 минут. 6 вопросов. Отвечаешь в своём темпе.

▸ Как связаться если есть вопросы?
  [Telegram] [Email]
```

---

## Email который приходит после формы

**Тема:** `Your README scan results + the case study you asked for`

**Тело:**
```
You ran your README through the analyzer.

Here's the full case study we promised —
a real audit we ran on FnKey, a Rust macOS tool.
Same format. Same depth. Same guarantee.

→ [Open the case study in Notion]

If you want us to run this on your product:
→ [Start your audit — $500]

Questions? Reply to this email.
```

**Зачем такой email:** Короткий. Конкретный. Две ссылки. Без продажного давления.

---

## После оплаты — что происходит

1. Stripe webhook → Zapier/Make создаёт копию Notion-шаблона воркспейса
2. Воркспейс называется: `[Product Name] — Cold Start Audit`
3. Внутри:
   - Онбординг (договор, оплата подтверждена, что дальше)
   - Ссылка на бриф (Tally/Typeform)
   - Секция: In Progress (пустая — мы заполняем)
   - Секция: Deliverables (пустая — появляется по мере готовности)
4. Уведомление клиенту: "Воркспейс готов. Бриф занимает 10 минут."

---

## Email nurture для тех кто не оплатил

**Day 2:**
```
Тема: The most surprising gap we found in FnKey
Тело: Show HN не сделан. Медиана: 289 stars за неделю.
FnKey существует 4 месяца. Это 1,156 stars которых нет.
Твой README scanner показал похожий gap?
→ [See the full case study]
```

**Day 5:**
```
Тема: What 9 onboarding steps costs you (real data)
Тело: Strava: 9 шагов vs 3 = 5x разница в активации.
Если у тебя FAIL на TTFV — это конкретная цена.
→ [Book the audit — $500]
```

**Day 10:**
```
Тема: Last spot this month
Тело: Берём 3 клиентов в месяц. 2 занято.
Если хочешь — вот ссылка.
→ [Start your audit]
```

---

## Технический стек

| Задача | Инструмент |
|--------|-----------|
| Email форма (в приложении) | HTML input → Zapier webhook |
| Отправка email с Notion ссылкой | Resend / Loops / Mailchimp |
| Email nurture sequence | Resend / Loops |
| Оплата | Stripe Payment Link |
| Notion воркспейс | Notion API + шаблон |
| Автоматизация создания воркспейса | Zapier / Make |

---

## Статус

- [ ] Создать Notion-шаблон воркспейса
- [ ] Перенести FnKey кейс в Notion (публичная страница)
- [ ] Настроить Stripe Payment Link ($500)
- [ ] Подключить Zapier: email форма → письмо с ссылкой
- [ ] Написать 3 nurture письма
- [ ] Настроить webhook: Stripe → создание воркспейса
