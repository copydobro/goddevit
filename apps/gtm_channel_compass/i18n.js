// ═══════════════════════════════════════════════════════════════════════════════
//  GTM Channel Compass — i18n.js
//  Internationalization layer · EN/RU · Russian default
// ═══════════════════════════════════════════════════════════════════════════════

const I18N = {
    // ─── Current language (Forced to RU) ──────────────────────────────────────
    _lang: 'ru',

    get lang() { return this._lang; },
    set lang(v) {
        // No-op to prevent language switching
    },

    // ─── Translation getter ───────────────────────────────────────────────────
    t(key, replacements) {
        const val = this.strings[this._lang]?.[key] ?? this.strings['en']?.[key] ?? key;
        if (!replacements) return val;
        return val.replace(/\{(\w+)\}/g, (_, k) => replacements[k] ?? `{${k}}`);
    },

    // ─── All strings ──────────────────────────────────────────────────────────
    strings: {

// ═════════════════════════════════════════════════════════════════════════
//  ENGLISH
// ═════════════════════════════════════════════════════════════════════════
en: {
    // --- Meta / HTML ---
    meta_title: 'GTM Channel Compass — Find Your Distribution Channel in 8 Questions',
    meta_description: 'Stop guessing your GTM channel. 8-question diagnostic maps your product, stage, and founder type to the highest-leverage distribution move. Free. No fluff.',

    // --- Boot ---
    boot_1: '[ OK ] Initializing GTM Channel Compass v1.0.0...',
    boot_2: '[ OK ] Loading 8-archetype decision matrix...',
    boot_3: '[ OK ] Compiling behavioral bias detection layer...',
    boot_4: '[ OK ] Verified: 9 routing paths, 0 dead ends...',
    boot_5: '[ OK ] Connecting to GTM intelligence engine...',

    // --- Intro ---
    intro_cmd: '[root@goddevit ~]$ ./channel-compass --init\n\nStop guessing. Engineer your distribution.\n',
    intro_stat: '62% of technical founders fail not because of bad code, but because of <strong>"Channel-Model Mismatch"</strong>. Most burn 6-18 months on SEO or Ads that were never meant to work for their stage.',
    intro_sub: 'Our 8-layer diagnostic (Four Fits Matrix) maps your product across ACV, founder skill, and buyer intent to calculate your optimal path.',
    intro_out_label: 'In 2 minutes, you will get:',
    intro_b1: 'Your Founder-Channel Archetype',
    intro_b2: 'The "Alpha" Channel (Highest leverage point)',
    intro_b3: 'The "Taboo" List (What\'s burning your runway)',
    intro_b4: 'Week-1 Tactical Roadmap (Tools + Actions)',
    intro_cta_hint: '[ Press ENTER to start the 8-question diagnostic ]',
    intro_start_btn: 'Start Diagnostic →',

    // --- Questions ---
    q1_prompt: 'Who is this product for, and how is it bought?',
    q1_context: "Look at your codebase and pricing page. Focus on the buyer's actual workflow — not the category label you use in pitches.",
    q1_a: 'Personal, lifestyle, or social use — purchased by an individual consumer',
    q1_b: 'Code, API, or B2B utility — purchased by a developer, team, or business',

    q2_prompt: 'What consumed 80% of your time in the last 7 days?',
    q2_context: 'Open your calendar, commit log, and browser history. What actually occupied most of your working hours?',
    q2_a: 'Code, commits, pull requests, UI/UX work',
    q2_b: 'Long-form writing, documentation, newsletters, or industry reports',
    q2_c: 'Zoom calls, CRM, industry events, or direct messages',

    q3_prompt: "What's your ACV, and who physically signs the purchase?",
    q3_context: 'Check your checkout flow or last contract. Focus on the actual buyer mechanism — not aspirational enterprise plans.',
    q3_a: 'ACV <$5,000. Self-serve checkout. Individual dev or small team buys without procurement',
    q3_b: 'ACV >$10,000. Requires procurement, security review, or enterprise stakeholder sign-off',

    q4_prompt: 'Are your paying users in one industry or spread across several?',
    q4_context: 'Look at your actual paying users — not your target market. Where does the money actually come from today?',
    q4_a: 'Multiple industries — solves a general function (HR, PM, analytics) for any business type',
    q4_b: 'Concentrated in one narrow vertical (dental, logistics, restaurants, legal...)',

    q5_prompt: 'Can you export a list of 100 leads right now — names, titles, contacts?',
    q5_context: "Don't answer with what you plan to build. Answer from what you can actually pull from CRM or LinkedIn today.",
    q5_a: 'Yes — I know exactly who, what role, and how to reach 100 qualified contacts right now',
    q5_b: 'No — still running discovery calls across different roles and industries',

    q6_prompt: 'What does your ideal buyer type into Google right now?',
    q6_context: "Write 3 actual search queries your ICP uses today. Are they searching the pain — or the solution category?",
    q6_a: "Pain symptoms (\"how to reduce compliance overhead\") — they don't know software is the answer yet",
    q6_b: 'Specific software categories, vendor comparisons, or feature-level searches',

    q7_prompt: 'When a buyer lands on your site — education or comparison table?',
    q7_context: 'Check your analytics. What pages do they visit? What questions appear in your support queue or trial feedback?',
    q7_a: 'Pricing page, comparison chart, or ROI calculator — ready to buy, needs validation',
    q7_b: 'Understanding your unique approach before they compare you to alternatives',

    q8_prompt: 'What is your current growth stage?',
    q8_context: 'Count active users or paying customers — not signups. Be honest about your signal strength.',
    q8_a: '0–10 users — validating the problem, no repeatable sales motion yet',
    q8_b: '10–100 users — finding patterns, working toward first repeatable channel',
    q8_c: '100+ users — have demand signal, ready to scale a proven channel',

    question_hint: 'Press {keys} to select — or click an option',

    // --- Email Gate ---
    gate_title: 'Diagnostic Complete. <br>Your {archetype} roadmap is ready.',
    gate_text: 'We\'ve processed your profile through the 8-layer founder-channel fit matrix. We\'ve identified the <strong>primary distribution leak</strong> in your current model and mapped your path to a repeatable sales motion.',
    gate_b1: '<strong>1. The "Alpha" Channel</strong> — The single high-leverage channel for your founders-type.',
    gate_b2: '<strong>2. The Taboo List</strong> — 3 "best practices" you must stop immediately to save runway.',
    gate_b3: '<strong>3. Week-1 Tactical Plan</strong> — 3 specific actions + named tools for this week.',
    gate_b4: '<strong>4. The "Stop Signal"</strong> — The exact metric that tells you when to pivot.',
    gate_b5: '<strong>5. Bias Detection</strong> — The specific cognitive bias skewing your GTM decisions.',
    gate_teaser: '[ DATA READY: 10/10 GAPS IDENTIFIED  |  BURN RISK CALCULATED  |  SUCCESS METRIC DEFINED ]',
    gate_name_placeholder: 'Name',
    gate_email_placeholder: 'Work email',
    gate_submit: '[ SEND MY REPORT → ]',
    gate_sending: '[ SENDING... ]',
    gate_footer_1: 'Report delivered to your inbox in ~1 minute.',
    gate_footer_2: 'By submitting you agree to receive GTM insights from God Dev it.',
    gate_footer_3: 'Unsubscribe any time — one click in any email.',

    // --- Check Email ---
    check_status: '<span class="status-ok">[ OK ]</span> Report dispatched.',
    check_cmd: '[root@goddevit ~]$ send --to "{email}" --report gtm-compass',
    check_body: 'Your <strong>{archetype} GTM Report</strong> is on its way.<br>Check your inbox — delivery in ~1 minute.',
    check_extra: 'We\'ll also send you GTM insights relevant to your archetype — founder strategy, channel breakdowns, and case studies. No fluff.<br>Every email has a one-click unsubscribe.',
    check_spam: 'Check spam if nothing arrives within 5 minutes.',
    check_rerun: '[ Run Again for a Different Product ]',

    // --- Generating ---
    gen_cmd: '[root@goddevit ~]$ ./channel-compass --analyze',
    gen_1: 'Running Founder-Channel Fit Matrix...',
    gen_2: 'Mapping archetype against 8 behavioral dimensions...',
    gen_3: 'Calculating bias interference coefficient...',
    gen_4: 'Cross-referencing buyer cognitive mode...',
    gen_5: 'Generating personalized Week-1 tactical plan...',

    // --- Result ---
    archetype_identified: 'ARCHETYPE IDENTIFIED',
    bias_audit: '[!] BIAS AUDIT',
    primary_channel_label: 'PRIMARY CHANNEL',
    taboo_channel_label: 'TABOO CHANNEL',
    buyer_mode_label: "[i] BUYER'S COGNITIVE MODE",
    week1_label: '── WEEK 1 TACTICAL PLAN ──────────────────────',
    red_door_label: 'THE RED DOOR:',
    success_metric_label: '── SUCCESS METRIC ───────────────────────────',
    warning_signal_label: 'Warning signal:',
    cta_headline: 'We found your channel. But distribution has 11 layers.<br><strong>A full audit finds all gaps — guaranteed. $500.</strong>',
    cta_button: '→ Book GTM Audit',
    cta_sub: 'Money-back guarantee if less than 5 actionable gaps found.',
    share_label: 'Share:',
    run_again: '[ Run Again ]',
    share_text: 'I just found out I\'m a "{archetype}" founder.\nMy GTM channel: {channel}.\nArchetype test → {url}',

    // --- Progress ---
    progress_step: 'Step {num}',

    // --- LLM Prompt Language ---
    llm_lang: 'English'
},

// ═════════════════════════════════════════════════════════════════════════
//  RUSSIAN
// ═════════════════════════════════════════════════════════════════════════
ru: {
    // --- Meta / HTML ---
    meta_title: 'GTM Channel Compass — Найди свой канал дистрибуции за 8 вопросов',
    meta_description: 'Перестань гадать с каналом. 8-вопросная диагностика маппит продукт, стадию и тип фаундера на самый высокорычажный ход. Бесплатно. Без воды.',

    // --- Boot ---
    boot_1: '[ OK ] Инициализация GTM Channel Compass v1.0.0...',
    boot_2: '[ OK ] Загрузка матрицы 8 архетипов...',
    boot_3: '[ OK ] Компиляция слоя детекции когнитивных искажений...',
    boot_4: '[ OK ] Проверено: 9 маршрутов, 0 тупиков...',
    boot_5: '[ OK ] Подключение к GTM-движку аналитики...',

    // --- Intro ---
    intro_cmd: '[root@goddevit ~]$ ./channel-compass --init\n\nХватит гадать. Инженерь свою дистрибуцию.\n',
    intro_stat: '62% технических фаундеров проваливаются не из-за плохого кода, а из-за <strong>«Channel-Model Mismatch»</strong> — несовпадения канала и модели. Большинство сжигают 6–18 месяцев на SEO или рекламу, которые никогда не должны были работать на их стадии.',
    intro_sub: 'Наша 8-слойная диагностика (Four Fits Matrix) маппит твой продукт по ACV, скиллу фаундера и намерению покупателя, чтобы рассчитать оптимальный путь.',
    intro_out_label: 'Через 2 минуты ты получишь:',
    intro_b1: 'Твой архетип Фаундер-Канал',
    intro_b2: '«Альфа»-канал (точка максимального рычага)',
    intro_b3: '«Табу»-лист (что прямо сейчас сжигает runway)',
    intro_b4: 'Тактический план на Неделю 1 (инструменты + действия)',
    intro_cta_hint: '[ Нажми ENTER чтобы начать 8-вопросную диагностику ]',
    intro_start_btn: 'Начать диагностику →',

    // --- Questions ---
    q1_prompt: 'Для кого этот продукт и как его покупают?',
    q1_context: 'Посмотри на свой код и страницу с ценами. Фокус на реальном рабочем процессе покупателя — не на категорийном ярлыке из питча.',
    q1_a: 'Персональное, лайфстайл или социальное использование — покупает индивидуальный потребитель',
    q1_b: 'Код, API или B2B-утилита — покупает разработчик, команда или бизнес',

    q2_prompt: 'Что заняло 80% твоего времени за последние 7 дней?',
    q2_context: 'Открой календарь, историю коммитов и браузер. Чем ты реально занимался большую часть рабочих часов?',
    q2_a: 'Код, коммиты, пул-реквесты, UI/UX работа',
    q2_b: 'Лонгриды, документация, рассылки или отраслевые отчёты',
    q2_c: 'Зумы, CRM, отраслевые ивенты или директ-сообщения',

    q3_prompt: 'Какой у тебя ACV и кто физически подписывает покупку?',
    q3_context: 'Проверь свой чекаут или последний контракт. Фокус на реальном механизме покупки — не на мечтах об энтерпрайзе.',
    q3_a: 'ACV <$5,000. Селф-серв чекаут. Отдельный разработчик или малая команда покупает без закупок',
    q3_b: 'ACV >$10,000. Нужен закупочный процесс, ревью безопасности или подпись стейкхолдера',

    q4_prompt: 'Платящие юзеры в одной индустрии или разбросаны по нескольким?',
    q4_context: 'Посмотри на реальных платящих юзеров — не на целевой рынок. Откуда реально приходят деньги сегодня?',
    q4_a: 'Несколько индустрий — решает общую функцию (HR, PM, аналитика) для любого типа бизнеса',
    q4_b: 'Сконцентрированы в одной узкой вертикали (стоматология, логистика, рестораны, юриспруденция...)',

    q5_prompt: 'Можешь ли ты прямо сейчас выгрузить список из 100 лидов — имена, должности, контакты?',
    q5_context: 'Не отвечай тем, что планируешь построить. Отвечай из того, что реально можешь вытащить из CRM или LinkedIn сегодня.',
    q5_a: 'Да — я точно знаю кто, в какой роли и как связаться с 100 квалифицированными контактами прямо сейчас',
    q5_b: 'Нет — пока провожу дискавери-звонки по разным ролям и индустриям',

    q6_prompt: 'Что твой идеальный покупатель вбивает в Google прямо сейчас?',
    q6_context: 'Напиши 3 реальных поисковых запроса, которые ICP использует сегодня. Они ищут боль — или категорию решения?',
    q6_a: 'Симптомы боли ("как сократить compliance-нагрузку") — они ещё не знают, что софт это ответ',
    q6_b: 'Конкретные категории ПО, сравнения вендоров или запросы по фичам',

    q7_prompt: 'Когда покупатель попадает на твой сайт — ему нужно образование или таблица сравнения?',
    q7_context: 'Проверь аналитику. Какие страницы посещают? Какие вопросы появляются в саппорте или фидбеке по триалу?',
    q7_a: 'Страница цен, таблица сравнения, ROI-калькулятор — готов покупать, нужна валидация',
    q7_b: 'Понять ваш уникальный подход, прежде чем сравнивать с альтернативами',

    q8_prompt: 'Какая у тебя текущая стадия роста?',
    q8_context: 'Считай активных юзеров или платящих клиентов — не регистрации. Будь честен насчёт силы сигнала.',
    q8_a: '0–10 юзеров — валидирую проблему, повторяемого процесса продаж пока нет',
    q8_b: '10–100 юзеров — ищу паттерны, иду к первому повторяемому каналу',
    q8_c: '100+ юзеров — есть сигнал спроса, готов масштабировать проверенный канал',

    question_hint: 'Нажми {keys} чтобы выбрать — или кликни на вариант',

    // --- Email Gate ---
    gate_title: 'Диагностика завершена. <br>Твой роадмап «{archetype}» готов.',
    gate_text: 'Мы прогнали твой профиль через 8-слойную матрицу фаундер-канал фит. Мы выявили <strong>основную утечку дистрибуции</strong> в твоей текущей модели и построили путь к повторяемой продажной воронке.',
    gate_b1: '<strong>1. «Альфа»-канал</strong> — Единственный высокорычажный канал для твоего типа фаундера.',
    gate_b2: '<strong>2. Табу-лист</strong> — 3 «лучших практики», которые надо прекратить немедленно, чтобы сохранить runway.',
    gate_b3: '<strong>3. Тактический план Неделя 1</strong> — 3 конкретных действия + названные инструменты на эту неделю.',
    gate_b4: '<strong>4. «Стоп-сигнал»</strong> — Точная метрика, которая скажет, когда пивотить.',
    gate_b5: '<strong>5. Детекция искажений</strong> — Конкретное когнитивное искажение, искажающее твои GTM-решения.',
    gate_teaser: '[ ДАННЫЕ ГОТОВЫ: 10/10 ПРОБЕЛОВ НАЙДЕНО  |  РИСК СГОРАНИЯ РАССЧИТАН  |  МЕТРИКА УСПЕХА ОПРЕДЕЛЕНА ]',
    gate_name_placeholder: 'Имя',
    gate_email_placeholder: 'Рабочий email',
    gate_submit: '[ ОТПРАВИТЬ ОТЧЁТ → ]',
    gate_sending: '[ ОТПРАВЛЯЕМ... ]',
    gate_footer_1: 'Отчёт будет доставлен в почту в течение ~1 минуты.',
    gate_footer_2: 'Отправляя форму, ты соглашаешься получать GTM-инсайты от God Dev it.',
    gate_footer_3: 'Отписаться в любой момент — одним кликом в любом письме.',

    // --- Check Email ---
    check_status: '<span class="status-ok">[ OK ]</span> Отчёт отправлен.',
    check_cmd: '[root@goddevit ~]$ send --to "{email}" --report gtm-compass',
    check_body: 'Твой <strong>{archetype} GTM-отчёт</strong> уже в пути.<br>Проверь почту — доставка в течение ~1 минуты.',
    check_extra: 'Мы также отправим тебе GTM-инсайты, релевантные твоему архетипу — стратегия фаундера, разборы каналов, кейсы. Без воды.<br>В каждом письме — отписка в один клик.',
    check_spam: 'Проверь спам, если ничего не пришло в течение 5 минут.',
    check_rerun: '[ Запустить заново для другого продукта ]',

    // --- Generating ---
    gen_cmd: '[root@goddevit ~]$ ./channel-compass --analyze',
    gen_1: 'Запуск матрицы Фаундер-Канал Фит...',
    gen_2: 'Маппинг архетипа по 8 поведенческим измерениям...',
    gen_3: 'Расчёт коэффициента интерференции искажений...',
    gen_4: 'Кросс-референс когнитивного режима покупателя...',
    gen_5: 'Генерация персонализированного тактического плана на Неделю 1...',

    // --- Result ---
    archetype_identified: 'АРХЕТИП ОПРЕДЕЛЁН',
    bias_audit: '[!] АУДИТ ИСКАЖЕНИЙ',
    primary_channel_label: 'ОСНОВНОЙ КАНАЛ',
    taboo_channel_label: 'ТАБУ-КАНАЛ',
    buyer_mode_label: '[i] КОГНИТИВНЫЙ РЕЖИМ ПОКУПАТЕЛЯ',
    week1_label: '── ТАКТИЧЕСКИЙ ПЛАН НЕДЕЛЯ 1 ─────────────────',
    red_door_label: 'КРАСНАЯ ДВЕРЬ:',
    success_metric_label: '── МЕТРИКА УСПЕХА ───────────────────────────',
    warning_signal_label: 'Сигнал тревоги:',
    cta_headline: 'Мы нашли твой канал. Но у дистрибуции 11 слоёв.<br><strong>Полный аудит находит все пробелы — гарантированно. $500.</strong>',
    cta_button: '→ Заказать GTM-аудит',
    cta_sub: 'Гарантия возврата денег, если найдём менее 5 действенных пробелов.',
    share_label: 'Поделиться:',
    run_again: '[ Заново ]',
    share_text: 'Я только что узнал, что я фаундер-«{archetype}».\nМой GTM-канал: {channel}.\nТест архетипа → {url}',

    // --- Progress ---
    progress_step: 'Шаг {num}',

    // --- LLM Prompt Language ---
    llm_lang: 'Russian'
}

    } // end strings
}; // end I18N

// Shorthand
function t(key, replacements) { return I18N.t(key, replacements); }
