# FnKey — 30-дневный протокол GTM-исполнения
> Основан на: gap-анализ из 06_REPORT.md
> Исполнитель: solo-фаундер, команда не нужна
> Формат: понедельно, упорядочено по соотношению импакт/усилие

---

## Неделя 1 — Быстрые победы (День 1–7)
> Усилие: низкое. Импакт: немедленный. Все изменения — текстовые правки.

**День 1 — Операция README (2 часа)**

Заменить первые строки README на (из `10_COPY_V2.md`):

```markdown
# FnKey

AI coding tools removed the bottleneck of writing code.
They created a new one: how fast you can type prompts.

Hold Fn. Speak everything in your head.
Claude Code gets the full context — not the filtered version.
```

Добавить competitive block сразу после hero (второй слой — цена + надёжность + скорость):
```markdown
Free forever. Wispr Flow costs $240/year and cuts out mid-sentence.
Claude Code /voice has 500ms lag. FnKey: streaming, open source,
mic active only while you hold the key.
```

Добавить shields.io badges под заголовок:
```markdown
![GitHub Stars](https://img.shields.io/github/stars/copydobro/fnkey)
![License](https://img.shields.io/badge/license-GPL--3.0-green)
![Latest Release](https://img.shields.io/github/v/release/copydobro/fnkey)
```

**День 2 — Обновить тэглайн на PH (15 минут)**

Войти в Product Hunt. Изменить тэглайн на:
`FnKey – voice input for Claude Code and Cursor, zero delay, free`

**День 3 — Groq quick start (1 час)**

Переструктурировать секцию Installation (из `10_COPY_V2.md`):

```markdown
## Quick Start (5 minutes, free, no credit card)

1. Download: FnKey-arm64.zip (Apple Silicon) or FnKey-x64.zip (Intel)
2. mv FnKey.app /Applications/
3. Get free Groq key at console.groq.com/keys — 60 seconds, no card
   echo 'your-groq-key' > ~/.config/fnkey/api_key
4. open /Applications/FnKey.app
5. Grant permissions: Input Monitoring + Microphone + Accessibility

## Upgrade to Streaming (optional)
Groq = batch (~1 sec delay). Deepgram = streaming, zero wait.
Get key at console.deepgram.com ($200 free credit).
echo 'your-deepgram-key' > ~/.config/fnkey/deepgram_key
```

**День 4–5 — Задеплоить сайт (2–4 часа)**

Концепт лендинга на copydobro.github.io/fnkeysite/ уже существует.
- Просмотреть текущее состояние
- Обновить copy с новым value prop ("скажи всё что у тебя в голове")
- Добавить ссылку из README "Visit Website" → лендинг
- Обновить ссылку "Visit Website" на PH

**День 6 — GitHub Discussions (30 минут)**

Включить GitHub Discussions в репо.
Добавить в footer README:
```markdown
## Комьюнити
[GitHub Discussions](ссылка) — поделись своей настройкой, задай вопрос, предложи фичу
```

**День 7 — Ревью Недели 1**

Проверить: hero в README на месте. Тэглайн на PH обновлён. Сайт работает. Discussions включены.

---

## Неделя 2 — Высокоимпактная дистрибуция (День 8–14)

**День 8 — Show HN (написать сегодня, опубликовать вт/ср 8–10 утра ET)**

Черновик:
```
Show HN: FnKey – зажми Fn, говори, вставь в Claude Code (Rust, macOS, бесплатно)

Я построил это потому что каждый день использую Claude Code и заметил что
печатаю отфильтрованные версии своих мыслей. Умственные затраты на
keyboard → сложный промпт убивают преимущество быстрого LLM.

Зажать Fn → говорить → стриминг в реальном времени через Deepgram Nova-3 → вставить куда угодно.

Технологии: Rust, CoreAudio для системного захвата Fn-клавиши, GPL-3.0.
Groq теперь поддерживается как бесплатная альтернатива Deepgram.

GitHub: [ссылка]
Демо: [GIF]
```

Время публикации: вторник или среда, 8–10 утра ET. Не публиковать в понедельник и пятницу.

**День 9–10 — Reddit посты (3 отдельных поста, 3 разных дня)**

r/macapps:
> "Сделал hold-to-talk голосовой ввод для macOS. Зажми Fn, говори, вставь куда угодно. Бесплатно."

r/rust:
> "Show r/rust: Написал FnKey на Rust — голос в текст в реальном времени через CoreAudio и Deepgram streaming"

r/ClaudeAI:
> "Теперь использую Claude Code с голосом. Зажать Fn, произнести промпт, вставить. Сделал бесплатный macOS-инструмент."

Не публиковать все три в один день. Минимальный интервал — 2 дня.

**День 11–12 — Собрать testimonials**

Просмотреть комментарии Product Hunt с оригинального запуска.
Найти 5–7 человек которые оставили позитивные комментарии.
Отправить каждому короткий DM:

```
Привет [имя] — ты комментировал FnKey на PH.
Не напишешь одно предложение о том как ты его используешь?
Собираю секцию с отзывами. Займёт 2 минуты.
```

**День 13–14 — Post-launch контент**

Написать и опубликовать: "Что произошло после 107 апвоутов на Product Hunt"

Включить:
- Откуда пришли голоса (гипотеза если не знаешь точно)
- Кто использует (что ты узнал)
- Что строишь дальше
- Ссылка на GitHub + новый лендинг

Опубликовать сначала на dev.to. Поделиться в X и LinkedIn.

---

## Неделя 3 — Демо и Social Proof (День 15–21)

**День 15–16 — Переснять demo GIF + собрать social proof assets**

*GIF:*
Сценарий — Claude Code открыт, курсор в поле промпта:
1. Зажать Fn
2. Произнести: "Refactor this function using async/await and add error handling for the network call — also make sure it handles timeouts after 5 seconds"
3. Текст появляется в поле Claude Code в реальном времени
4. Отпустить Fn. Готово.

Инструмент: Kap (macOS, бесплатно). Длина: 8–12 сек. Без аудио.
Заменить demo.gif в README.

*Social proof assets (для лендинга):*
Три цитаты для Screen 4 лендинга (из `10_COPY_V2.md`):
- Karpathy: "I barely touch the keyboard. I talk to Composer with SuperWhisper." — придумал "vibe coding"
- Allie Miller: "I can't work at certain places because I can't dictate."
- Alexander Embiricos (OpenAI Codex): "The underappreciated limiting factor to AGI is human typing speed."

Эти цитаты не требуют разрешения — они публичные, с источниками. Использовать на лендинге как market validation, не как endorsement.

**День 17–18 — PH Coming Soon страница**

Создать страницу "Upcoming" на Product Hunt для следующей версии FnKey.
Название: "FnKey 2.0 — voice workflows for Claude Code and Cursor"
Начать собирать фолловеров прямо сейчас.
Цель: 100+ фолловеров до следующего запуска.

**День 19–21 — Активация сети Antler**

Написать шаблонное сообщение для Antler Slack/Discord:
```
Привет Antler-фем — я выпустил небольшой macOS-инструмент для разработчиков использующих Claude Code.
FnKey: зажать Fn, говорить, вставить. Голосовой ввод в реальном времени, бесплатно.
Буду рад обратной связи от тех кто строит с AI coding assistants.
[GitHub ссылка] [лендинг ссылка]
```

Сохранить этот шаблон. Использовать при каждом следующем запуске.

---

## Неделя 4 — Измерить, итерировать, подготовить следующий запуск (День 22–30)

**День 22–24 — Ревью метрик**

Проверить:
- Дельта звёзд GitHub (до vs. после Show HN + Reddit)
- Трафик README (GitHub Insights → Traffic)
- Посетители сайта (добавить Plausible или Simple Analytics, бесплатный тариф)
- Discussions: появились ли треды?
- PH Upcoming: количество фолловеров

**День 25–26 — CONTRIBUTING.md**

Написать минимальный CONTRIBUTING.md:
- Как собрать из источника
- Как запустить тесты
- Как найти good first issues (поставить лейблы на GitHub)

**День 27–28 — Подготовить следующий запуск**

На основе результатов Недель 1–3:
- Обновить copy лендинга реальными testimonials
- Подготовить дату следующего запуска на PH (нужно минимум 90 дней после первого запуска)
- Написать план launch day: кому сообщить, что публиковать, когда

**День 29–30 — Задокументировать что сработало**

Написать внутреннюю заметку (или пост на dev.to):
- Что изменилось в README и каков был импакт
- Какой канал дистрибуции дал больше всего звёзд
- Каким оказался реальный ICP на основе Discussions / DM

Этот документ становится фундаментом для следующего GTM-цикла.

---

## Критерии успеха к 30-му дню

| Метрика | Базовый | Цель |
|---------|---------|------|
| Звёзды GitHub | 43 | 150+ |
| README содержит problem statement | Нет | Да |
| Сайт работает | Нет | Да |
| Show HN опубликован | Нет | Да |
| Собраны testimonials | 0 | 3+ |
| Owned канал (Discussions) | Нет | Да, активен |
| Фолловеры PH Coming Soon | 0 | 50+ |

---

## Временные затраты

| Неделя | Всего часов |
|--------|-------------|
| Неделя 1 | ~6 часов |
| Неделя 2 | ~5 часов |
| Неделя 3 | ~4 часа |
| Неделя 4 | ~3 часа |
| **Итого** | **~18 часов** |

18 часов за 30 дней. ~35 минут в день.
Без агентства. Без бюджета. Без команды.
