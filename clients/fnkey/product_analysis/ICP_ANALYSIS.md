# FnKey — ICP Analysis
> Методология: `icp-definition` skill (Mode A — Signal Mining)
> Дата: 2026-03-25
> Статус: гипотеза средней уверенности — требует валидации

---

## Исходные данные

| Источник | Что получили | Качество |
|----------|-------------|---------|
| GitHub stargazers | 24 из 44 профилей, ~10 с видимым bio | Слабый — большинство без контекста |
| Product Hunt comments | Недоступно (403) | Нет данных |
| GitHub issues | 0 открытых issues | Нет данных |
| dev.to посты автора | 2 поста, явный struggling moment описан | Сигнал от фаундера, не от пользователей |
| Конкурентный анализ | Wispr Flow, superwhisper, Aqua Voice | Прокси-данные |

**Вывод по данным:** Mode A работает частично. Stargazer data слишком тонкая (большинство без bio). PH-комментарии недоступны. Итоговый ICP — гипотеза средней уверенности, не вывод из данных.

---

## Сценарий фаундера

**Сценарий A: фаундер строил под себя.**

Евгений Олейник, CTO AirShelf (Antler-backed), ежедневно использует Claude Code.
Момент: "Говорю всё что у меня в голове — Claude получает полный контекст, не отфильтрованную версию. Это 3x более длинные промпты = 3x лучший ответ."

Первая гипотеза ICP = люди в точно такой же ситуации что Евгений в момент когда ему это понадобилось.

---

## Паттерн из stargazers (24 профиля)

**Что подтверждено:**
- Все — разработчики (GitHub-аккаунты активны, есть репозитории)
- Диверсифицированы: big tech (Google, Bosch), стартапы (Labelbox, OpenObserve), indie devs, фрилансеры
- Географически глобальные: Китай, Германия, Испания, Турция, Сингапур

**Что НЕ подтверждено:**
- Никто явно не идентифицирован как "Claude Code / Cursor heavy user"
- Нет сигналов специфически AI-assisted coding workflow
- Labelbox (ML data labeling) — AI-adjacent, но не AI coding

**Вывод:** "Девелоперы" подтверждено. "AI coding tool users" — гипотеза фаундера, данными не подтверждена.

---

## ICP-гипотезы (2 варианта)

### Гипотеза A — Narrow: AI-assisted developers

**Кто они:**
Разработчики (solo или small team) на macOS, которые ежедневно используют Claude Code, Cursor или Copilot как основной рабочий инструмент. Технически грамотны — готовы настроить API ключи, знакомы с Homebrew.

**Ситуация (struggling moment):**
Середина coding сессии. Сложная задача с полным контекстом в голове. Открывают промпт-поле. Начинают печатать — и осознают что фильтруют мысли на лету. Отправляют тонкий промпт. Получают тонкий ответ. Итерируют 5 раз вместо одного.
*Паттерн: ситуация (открываю промпт) → обходной путь (пишу укороченно) → последствие (плохой ответ, больше итераций)*

**Что делали до:**
- Apple Dictation: слишком медленно (batch mode, 2-3 сек задержка)
- Wispr Flow / superwhisper: $10-20/мес, не заточены под terminal workflow
- Просто печатали и мирились

**Язык (из dev.to поста автора — единственный прямой источник):**
> "I say everything in my head — Claude gets the full context, not the filtered version"
> "3x longer prompts = 3x better output"

**Где их найти:**
- r/ClaudeAI, r/cursor (Reddit)
- HN: threads о Claude Code, AI coding workflows
- GitHub: репозитории с claude-code тегом, dotfiles с AI tools
- Discord: Anthropic, Cursor сообщества

**Кто точно НЕ ICP:**
- Нетехнические пользователи (барьер установки через Homebrew)
- Пользователи без Claude Code / Cursor / Copilot workflow
- Те кто хочет офисную диктовку (Word, email)

**Уровень уверенности:** Средний — основан на гипотезе фаундера + логике продукта. Данными не подтверждён.

---

### Гипотеза B — Broad: macOS developers (любой workflow)

**Кто они:**
Разработчики на macOS которые хотят голосовой ввод в любом контексте — не обязательно AI coding. Технически грамотны, но не обязательно используют AI tools активно.

**Ситуация:**
Хотят говорить вместо печатать в любом приложении. Видели голосовой ввод у других. Искали бесплатную альтернативу Wispr Flow.

**Что делали до:**
- Apple Dictation (неудобно)
- Wispr Flow (дорого, $240/год)
- Ничего

**Где их найти:**
- r/macapps, r/mac (Reddit)
- awesome-mac listings
- HN: threads о macOS productivity tools

**Кто точно НЕ ICP:**
- Windows пользователи
- Нетехническая аудитория

**Уровень уверенности:** Средний — согласуется с разнородностью stargazers, но не объясняет почему именно FnKey а не Wispr Flow.

---

## Выбор между гипотезами

Оценка по трём критериям:

```
                          Гипотеза A          Гипотеза B
                          (AI devs)           (broad macOS devs)

Острота проблемы:         ВЫСОКАЯ             СРЕДНЯЯ
Typing bottleneck в AI    "Просто хочу
workflow — реальная боль  голосовой ввод"
с прямым следствием       слабее мотивирует

Доступность канала:       ВЫСОКАЯ             СРЕДНЯЯ
r/ClaudeAI, HN/Show HN,  r/macapps есть,
Cursor Discord — четкие   но конкуренция
сообщества                с Wispr Flow выше

Близость фаундера:        ВЫСОКАЯ             НИЗКАЯ
Евгений = этот ICP        Евгений не строил
сам, ежедневно            для "любого dev"

ИТОГ:                     ✅ ПРИОРИТЕТ        Резерв
```

**Выбор: Гипотеза A.** Выше по всем трём критериям. Фаундер — этот ICP.

---

## Противоречия которые нужно исправить в других документах

### В `02_POSITIONING_ANALYSIS.md`

**Найдено противоречие:**
- Section 3 (Positioning Canvas): ICP = "технически грамотны, готовы настроить API ключи" ✅ согласовано с Гипотезой A
- Section 4 (Neuro-foraging), Travel Cost #1: "нетехническая аудитория уходит" ❌ противоречит ICP

**Правка:**
Travel Cost #1 переформулировать: проблема не в "нетехнических уходят" — а в том что даже технические разработчики, не знакомые с Deepgram, теряются на шаге API key. Разница важна: рекомендация остаётся (сайт нужен), но обоснование меняется.

### В `05_GTM_GAPS.md`

**Gap #2 — обоснование:**
"Нетехническая аудитория уходит на API-шаге" → заменить на:
"Даже технический разработчик, незнакомый с Deepgram, теряет 3-4 шага на регистрацию. Groq как Quick Start убирает этот барьер без изменения ICP."

### В `01_CLIENT_BRIEF.md`

**"Аудитория: Devs, Rust community, macOS power users"** → три разных сегмента.
Добавить приоритизацию: Primary ICP = AI-assisted developers (Гипотеза A). Rust community и macOS power users — потенциальные вторичные сегменты, отдельный messaging.

---

## Уровень уверенности

**ВЫСОКИЙ — подтверждён данными (2026-03-25)**

Источник: market research, 35+ цитат с 6 платформ.
Файл: `revenue_and_growth/01_market_research/compass_artifact_wf-9151bd32...md`

Три уровня доказательств:
1. Прямые цитаты — 10+ независимых источников описывают точный struggling moment
2. Поведение — 6+ самодельных инструментов на Show HN; Karpathy, Andrew Chen, Allie Miller публично используют voice
3. Рынок — 5+ коммерческих конкурентов; Anthropic и OpenAI встроили voice в CLI

---

## Итоговый ICP-документ

```
# ICP: Solo AI-Assisted Developer на macOS

## Кто они
Solo developer / indie hacker / small startup founder на macOS.
Ежедневно использует Claude Code и/или Cursor как основной рабочий
инструмент. Отправляет 20-70 промптов в день. Технически грамотен:
знает Homebrew, настраивает API ключи. Работает длинными сессиями.

## Ситуация (когда ищут решение)
Середина coding сессии. Сложная задача — полный контекст в голове:
ограничения, edge cases, архитектурные решения. Открывают промпт-поле.
Начинают печатать — и фильтруют мысли на лету. Отправляют упрощённую
версию. Получают слабый ответ. Итерируют лишние 3-5 раз.
ИЛИ: к вечеру руки устали — снижают темп или останавливаются.

## Что делали ДО
- Wispr Flow / SuperWhisper: используют, но Wispr "extremely buggy,
  cuts out randomly", плохая поддержка. SuperWhisper — нет copy-paste UX.
- Apple Dictation: batch delay, не понимает code-термины.
- Построили своё (Whisper pipeline, bash-скрипты) — 6+ Show HN.
- Большинство — просто мирились с печатью.

## Язык которым описывают проблему (дословно из источников)
"The bottleneck is our keyboard" (German Burgardt, dev.to)
"The major bottleneck is how fast I can express my ideas" (dimitri-vs)
"You end up simplifying your request because typing feels like writing a mini-essay"
"A prompt that would have been 3 sentences typed became 2 paragraphs spoken"
"I included context I would have skipped to avoid typing"
"I don't type anything anymore" (G4Q4, Cursor Forum)
"Talking to Cursor with Superwhisper is so much fun" (@karpathy)

## Где их найти
- Reddit: r/ClaudeAI, r/cursor, r/LocalLLaMA
- HN: Show HN, "Ask HN: voice for Claude Code / Cursor"
- GitHub: anthropics/claude-code issues, getcursor/cursor issues
- Twitter/X: #claudecode, #vibecoding, @karpathy circle
- Cursor Community Forum: voice-related threads

## Кто точно НЕ ICP
- Нетехнические пользователи (Homebrew — барьер)
- Разработчики без AI coding workflow (нет острой проблемы)
- Те кто хочет офисную диктовку (Word, email)
- Windows пользователи (FnKey macOS-only)

## Конкурентный контекст (обновлено)
Главный конкурент: Wispr Flow — багованный, плохая поддержка, $120/год.
Новый конкурент: Claude Code /voice (март 2026) — но примитивный,
500ms lag, пропускает начало фраз, только транскрипция.
FnKey окно: бесплатный + open source + streaming (не batch) +
privacy (mic только пока держишь клавишу).

## Источник данных
Market research (2026-03-25): 35+ цитат, 6 платформ, 15+ профилей.
Подтверждён гипотезой фаундера (Сценарий A).

## Уровень уверенности
ВЫСОКИЙ — подтверждён независимыми данными с множества платформ.
```
