# FnKey — Positioning Analysis
> Скилы: problem-definition → value-architecture → positioning-messaging → neuro-foraging-cjm
> Источники: GitHub README, PH listing, dev.to посты, конкурентный анализ

---

## 1. PROBLEM DEFINITION

### Struggling Moment (Bob Moesta)
Ты в середине сессии с Claude Code. В голове — полный контекст: проблема, ограничения, крайние случаи, архитектурные решения. Начинаешь печатать промпт. На полпути теряешь половину деталей — потому что набор текста заставляет фильтровать мысли на лету. Отправляешь тонкий промпт. Получаешь тонкий ответ. Итерируешь 5 раз вместо одного.

**Конкретный момент:** курсор в поле промпта Claude Code, ты думаешь быстрее чем печатаешь, и знаешь что теряешь контекст прямо сейчас.

### Что делали до FnKey
| Альтернатива | Почему не работает |
|---|---|
| Apple Dictation | Batch mode: говоришь, ждёшь, получаешь. Прерывает поток. |
| Wispr Flow / superwhisper | $10–20/мес. Закрытые. Не для terminal workflow. |
| Просто печатать | Медленно. Самоцензура. Теряешь детали. |
| Groq Playground в браузере | Не встроено в рабочий процесс. Переключение контекста. |

### Корневая проблема
Не "неудобный ввод текста" — а **разрыв между скоростью мышления и скоростью передачи контекста AI**. FnKey закрывает этот разрыв. Но нигде это не написано именно так.

### Проблема позиционирования прямо сейчас
FnKey описывает **решение** ("Hold Fn, speak, paste"), а не **боль** ("thinking faster than you type costs you half the context"). Разработчик понимает проблему — dev.to пост говорит это прямо. На GitHub README этого нет.

---

## 2. VALUE ARCHITECTURE

### Слой 1: Функциональная ценность (JTBD)

**Работа которую нанимают FnKey:**
> "Помоги мне полностью выгрузить ментальный контекст в Claude Code без потери деталей из-за скорости набора"

**Job Map — где FnKey присутствует и где теряет ценность:**

| Этап | Что делает FnKey | Видно ли пользователю |
|------|-----------------|----------------------|
| Define | Ты говоришь — проблема формулируется полнее | Да — первый же запуск |
| Locate | — | — |
| Prepare | Установка API ключей, permissions | Нет — пользователь страдает молча |
| Confirm | — | — |
| Execute | Streaming transcription, paste | Да — это весь продукт |
| Monitor | — | — |
| Modify | Custom keywords | Частично |
| Conclude | — | Нет |

**Вывод:** FnKey отлично делает Execute. Всё остальное (особенно Prepare) — чёрный ящик. Ценность работы Prepare не артикулирована вообще.

### Слой 2: Статус (Prestige Signal)

FnKey — это не просто инструмент. Это сигнал: "я dev, который кодит по-другому".

Использование voice в terminal workflow в 2025 — это Veblen-сигнал в dev-культуре. Это то что делают люди из AirShelf, Antler, speed-running AI development. Это не для всех — это для тех кто уже понял что typing bottleneck реален.

**Что есть:** автор Evgeny публично говорит "я использую это с Claude Code" — это costly signal, потому что он CTO Antler-backed стартапа.

**Чего нет:** ни одного другого человека кто публично сказал "я использую FnKey" с именем и контекстом. Один costly signal работает плохо.

### Слой 3: Когнитивная архитектура (восприятие)

**Текущие якоря:**
- "Open source, free" — хорошо для adoption, плохо для восприятия ценности
- "GPL-3.0" — отпугивает корпоративных пользователей, неважно для indie devs
- "Deepgram Nova-3" — сильный технический якорь для тех кто знает. Непонятен остальным.

**Что не заякорено:**
- Vs Apple Dictation: "streaming vs batch — это разница в 2-3 секунды ожидания на каждой диктовке"
- Vs Wispr Flow: "$0 vs $240/год"
- Vs typing: "3x longer prompts = 3x better Claude output" — это Evgeny говорит в dev.to но не в README

**Стратегия Strategyn: Disruptive**
FnKey атакует переобслуженный сегмент (платные voice tools для macOS) упрощением + ценой. Но не коммуницирует это как дифференциацию.

### CART-Фрейминг

**C (Clarify):** Сделать видимым сравнение: Wispr Flow $240/год → FnKey $0. Apple Dictation 3 сек задержки → FnKey 0 сек.

**A (Anchor):** "3x longer prompts, 3x better AI output" — конкретный, измеримый, Evgeny его уже произнёс.

**R (Reinforce):** Усилить выгоду: "speak everything in your head, let the AI figure out the structure" — это то что разработчики хотят слышать.

**T (Test):** "Что важнее для вас — скорость или качество транскрипции?" → большинство скажут скорость → Deepgram streaming побеждает.

---

## 3. POSITIONING CANVAS

**1. ДЛЯ КОГО:**
Разработчики на macOS (Apple Silicon + Intel), активно использующие AI coding tools — Claude Code, Cursor, Copilot. Пишут длинные промпты. Уже поняли что typing — bottleneck. Технически грамотны (готовы настроить API ключи).

> ⚠️ ICP-статус: **гипотеза средней уверенности**. Основана на dev.to посте автора (фаундер = первый ICP) и частичном анализе stargazers (24/44, большинство без bio). PH-комментарии не получены. Stargazers подтверждают "разработчики" — не подтверждают "AI coding tool users" специфически. Полный анализ: `ICP_ANALYSIS.md`.

**2. STRUGGLING MOMENT:**
Середина coding сессии. Сложная проблема в голове. Открываешь промпт-поле. Начинаешь печатать — и знаешь что теряешь детали. Отправляешь упрощённую версию. Получаешь упрощённый ответ.

**3. КОНКУРЕНТНАЯ РАМКА:**
Переключаются с: Apple Dictation (batch delay) или Wispr Flow/superwhisper (платно, не для devs). Многие переключаются с "ничего" — просто мирились с печатью.

**4. УНИКАЛЬНАЯ ЦЕННОСТЬ:**
- Единственный бесплатный OSS voice-to-text для macOS с real-time streaming (не batch)
- Спроектирован для terminal/AI workflow, не для офисной диктовки
- Privacy by design: микрофон только пока держишь клавишу

**5. ДОКАЗАТЕЛЬСТВО:**
- Deepgram Nova-3 streaming: текст готов в момент отпускания клавиши
- Rust: нет memory bloat, нет background processes когда не используешь
- GPL-3.0: код открыт, можно проверить что нет слежки

**6. КОМУ НЕ ПОДХОДИТ:**
- Пользователи без технических навыков (нужна настройка API)
- Те кто хочет транскрибировать аудио файлы
- Windows пользователи
- Те кто хочет text cleanup/formatting (FnKey даёт raw transcription)

---

## 4. MESSAGING HIERARCHY

**Tagline (сейчас):**
"Hold Fn key, speak, paste transcribed text."
→ Описывает действие. Не описывает ценность.

**Tagline (предложение):**
"Your thoughts move faster than your fingers. FnKey closes the gap."
или короче:
"Speak your full context. Let Claude figure out the rest."

**Расширение (2-3 предложения):**
Most AI prompts are shorter than your thoughts — because typing filters. FnKey streams your voice directly to your clipboard while you speak, zero delay, zero subscription. Built for developers who use Claude Code, Cursor, or Copilot and are tired of losing context to keyboard speed.

**Proof Points:**
1. Real-time streaming via Deepgram Nova-3 — text is ready when you release the key
2. $0 vs $240/year (Wispr Flow) — same quality, no subscription
3. Mic active only while key held — privacy by design, macOS yellow indicator confirms
4. Rust — no memory overhead, no background processes
5. GPL-3.0 — open source, auditable

**CTA:**
"Star on GitHub → Install in 5 minutes → Never lose context again"

---

## 5. NEURO-FORAGING: ПУТЬ ПОЛЬЗОВАТЕЛЯ

### Текущие точки входа и FRR на каждой

```
[Product Hunt listing]
FRR: средний — описание понятное, upvotes создают social proof
Travel Cost: "Visit Website" → GitHub (переход снижает FRR)
Information Scent: есть (тема понятна), но обрывается при клике

    ↓

[GitHub README]
FRR: резко падает — первый экран это "Installation" с terminal commands
Travel Cost: ВЫСОКИЙ — нужно: скачать бинарь, создать директорию,
             получить API ключ Deepgram (регистрация), настроить файл конфига,
             выдать 3 системных разрешения (Accessibility, Input Monitoring, Microphone)
BRR: конкуренты (Wispr Flow) устанавливаются за 2 клика без API ключей
→ ГЛАВНАЯ ТОЧКА ОТВАЛА

    ↓

[Успешная установка]
FRR: очень высокий — продукт работает мгновенно, wow-эффект есть
ERN: низкий — продукт делает что обещает

    ↓

[Повторное использование]
FRR: высокий — hold key, speak, paste. Проще не бывает.
Retention: вероятно высокий у тех кто дошёл до этой точки
```

### Ключевые Travel Costs (приоритет по импакту)

| # | Travel Cost | Этап | Импакт |
|---|------------|------|--------|
| 1 | Нет сайта — PH ведёт в README | Pre-purchase | КРИТИЧНО |

> ⚠️ ICP-коррекция: Travel Cost описан как "нетехническая аудитория уходит". Если ICP = технические разработчики (Гипотеза A из ICP_ANALYSIS.md) — формулировка неточна. Точнее: "даже технический разработчик незнакомый с Deepgram теряется на шаге API key — сайт нужен чтобы объяснить ценность до установки, не чтобы упростить для нетехнических".|
| 2 | Нужен Deepgram API ключ (регистрация на внешнем сервисе) | Install | ВЫСОКИЙ |
| 3 | 3 системных разрешения macOS | Install | ВЫСОКИЙ |
| 4 | README начинается с установки, не с ценности | Pre-purchase | СРЕДНИЙ |
| 5 | Нет GIF/видео демо | Pre-purchase | СРЕДНИЙ |
| 6 | Нет онбординг-потока после установки | Post-install | НИЗКИЙ |

### MVT Диагностика

**FRR на README:** низкий — первый экран не даёт "нейронный кредит доверия"
**BRR:** высокий — Wispr Flow/superwhisper доступны в 2 клика
**Вывод:** FRR < BRR уже на уровне GitHub README. Economic users уходят здесь.

---

## ИТОГОВЫЕ GAPS ИЗ ЭТОГО ЭТАПА

| Gap | Фаза | Приоритет |
|----|------|-----------|
| README начинается с install, не с боли/ценности | Packaging | HIGH |
| Нет сайта — PH ведёт в техдокументацию | Packaging | HIGH |
| "3x longer prompts" не написано нигде кроме dev.to поста | Positioning | HIGH |
| Нет ни одного публичного user testimonial | Positioning | MEDIUM |
| Нет сравнения с Wispr Flow по цене нигде в README/PH | Positioning | MEDIUM |
| Нет GIF/видео демо | Packaging | MEDIUM |
| Onboarding требует Deepgram signup перед первым wow-моментом | Packaging | MEDIUM |
