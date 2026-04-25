// ═══════════════════════════════════════════════════════════════════════════════
//  GTM Channel Compass — Decisions Engine
const ARCHETYPES = {
    focused_builder: {
        name: 'Сфокусированный билдер', icon: '[FB]',
        tagline: 'Dev-утилита · Self-serve · Технический покупатель',
        primaryChannel: 'Reddit-сообщества + Hacker News',
        primaryReason: 'Технические покупатели находят инструменты через экспертные сообщества, а не через поиск или рекламу. Стек вовлечения: (1) r/SaaS (410K участников, еженедельные треды фидбека) (2) r/SideProject (500K, разрешён шеринг проектов, самый быстрый рост) (3) Indie Hackers (самая высокая конверсия на пост) (4) Hacker News Show HN (высокий статус). Стратегия: валидация боли → совет → мягкое упоминание. Этот подход 4:1 обходит фильтры сообществ.',
        tabooChannel: 'SEO',
        tabooReason: 'Нулевой авторитет домена означает 6–18 месяцев ожидания трафика. Пока вы ждёте SEO, вы не знаете, нужен ли продукт кому-то. Reddit r/SaaS даст 10 реальных реакций разработчиков к четвергу бесплатно. Сигнал на этой неделе или трафик через 18 месяцев — выбор очевиден.',
        bias: 'Разрыв активности и целей',
        biasDetail: 'Ваш мозг заменяет сложную задачу (общение с юзерами, риск отказа) знакомым дофаминовым циклом написания кода. Канемановское замещение Системы 1 — «Как мне найти юзеров?» незаметно превращается в «Как мне отрефакторить эту функцию?». Миндалевидное тело видит в аутриче социальную угрозу и возвращает вас к терминалу.',
        buyerMode: 'Оценка дорогого сигнала',
        buyerDetail: 'Технические покупатели применяют теорию «дорогого сигнала». Качество вашего GitHub, аргументация в тредах и глубина документации — это прокси компетентности продукта. Они оценивают не фичи, а «свой ли вы». Пост, написанный как маркетолог, вызывает мгновенное отторжение.',
        redDoorTactics: 'Напишите скрипт, решающий реальную боль (даже без вашего SaaS), и поделитесь им бесплатно в самом специфичном сабреддите. Метрика: вовлечение в комментариях и ЛС, а не апвоуты.',
        week4metric: '5+ качественных сессий фидбека или GitHub issues от реальных разработчиков',
        warningSignal: 'Ноль комментариев или только реакции типа "cool project" после 10+ постов'
    },
    vertical_hunter: {
        name: 'Вертикальный охотник', icon: '[VH]',
        tagline: 'Vertical SaaS · Чёткий ICP · Нетехнический покупатель',
        primaryChannel: 'Cold Email + Отраслевые рассылки',
        primaryReason: 'У вас есть точный список — это меняет всё. Холодный email — единственный канал, где вы можете достать 100 конкретных ЛПР на этой неделе. Стек: (1) Список: Apollo или LinkedIn Sales Nav для поиска конкретных ролей (2) Сигнал персонализации: один конкретный инсайт об их процессе, а не шаблонное вступление (3) Бенчмарк: 5–10% ответов на персонализированные письма. Дополнительно: отраслевые рассылки (логистика, стоматология, стройка) обычно имеют 10–50K сабов с почти нулевой конкуренцией рекламодателей.',
        tabooChannel: 'Product Hunt',
        tabooReason: 'Данные подтверждают: запуск на PH приносит строителей и ранних последователей, а не менеджеров по логистике или владельцев клиник. Ваш покупатель сидит в отраслевой рассылке или LinkedIn-группе, а не листает Product Hunt. Топ-10 запуск на PH стоит 3 недели работы и приносит ноль квалифицированных вертикальных лидов.',
        bias: 'Эффект присоединения к большинству',
        biasDetail: 'Стадное поведение, подпитываемое окситоцином — запуск на PH или пост в r/SaaS снижает уровень кортизола через чувство безопасности в толпе, независимо от того, подходит ли канал вашему ICP. Вы оптимизируете социальное одобрение от других фаундеров, а не продажи.',
        buyerMode: 'Избегание потерь + Сигнал авторитета',
        buyerDetail: 'Нетехнические покупатели в вертикалях испытывают в 2 раза больше боли от плохой покупки, чем удовольствия от хорошей. Холодное письмо с конкретным инсайтом об их процессе обезоруживает защитную реакцию. Первый вопрос покупателя: не «что это делает?», а «можно ли доверять этому человеку?»',
        redDoorTactics: 'Составьте список из 50 контактов в вашей вертикали и отправьте письмо из 3 строк с одним инсайтом о процессе — без предложения демо. Метрика: reply rate, а не open rate.',
        week4metric: '5–10% reply rate на персонализированные холодные письма по списку 50+ контактов',
        warningSignal: 'Bounce rate >10% или ноль содержательных ответов после 20+ персонализированных писем'
    },
    content_authority: {
        name: 'Контент-авторитет', icon: '[CA]',
        tagline: 'Horizontal SaaS · Фаундер-писатель · Покупатель знает проблему',
        primaryChannel: 'Long-tail SEO + Substack',
        primaryReason: 'Ваш ICP находится в Системе 2 Канемана — активно исследует боль, а не решение. Они вбивают симптомы в Google: «как снизить накладные расходы», «автоматизация сверки инвойсов». Стек: (1) Long-tail SEO по симптомам — посты на 2000+ слов (2) Substack как собственная дистрибуция — стройте аудиторию вокруг проблемы, а не имени продукта (3) Посевы в сообществах: кейсы на r/SaaS приносят огромный охват. Модели для подражания: Arvid Kahl и Harry Dry.',
        tabooChannel: 'Платная реклама',
        tabooReason: 'Покупатели, осознающие проблему, находятся в режиме исследования — они не готовы покупать. Реклама прерывает их процесс, а не конвертирует. Разработчики сразу считывают коммерческий интерес и уходят. Каждый доллар на рекламу сейчас покупает дорогое обучение, которое контент доставил бы бесплатно и с большим доверием.',
        bias: 'Предвзятость подтверждения (Ловушка горизонтали)',
        biasDetail: 'Эвристика доступности заставляет думать, что «писать для всех» рационально — рынок кажется огромным. Но успех горизонтальных SaaS на бутстрапе без $1M инвестиций — ниже 5%. Нишевание кажется риском. Но отсутствие ниши И ЕСТЬ риск.',
        buyerMode: 'Режим осознанного исследования (Система 2)',
        buyerDetail: 'Такие покупатели находятся в Системе 2 — медленной, обдуманной. Образовательный контент идеально совпадает с их когнитивным режимом. Реклама — это прерывание Системы 1, вызывающее психологическое сопротивление: «Почему вы мне это продаёте?». Вы выигрываете, становясь гидом, который объясняет карту.',
        redDoorTactics: 'Опубликуйте один «Конфликтный пост» — бросьте вызов общепринятому убеждению в индустрии с данными и контр-тезисом. Сначала в Substack, затем посев в сообществах.',
        week4metric: '100+ качественных прочтений одной статьи (сессия >3 мин, bounce rate <80%)',
        warningSignal: 'Bounce rate >80% или средняя сессия меньше 90 секунд'
    },
    networker: {
        name: 'Сетевик', icon: '[NW]',
        tagline: 'Horizontal-продукт · ICP не определён · Отношения прежде всего',
        primaryChannel: 'LinkedIn CustDev звонки',
        primaryReason: 'Ваш ICP недостаточно точен для холодного email или рекламы — в этом и проблема. Звонки в LinkedIn — механизм, который это чинит. Процесс: (1) Найдите 3–5 профилей ICP (2) Свяжитесь с 20–30 каждым в LinkedIn: «Я строю X, чтобы решить Y — хочу понять, есть ли у вас эта проблема» (3) Каждый звонок даёт точные фразы, которые станут вашим копирайтом и позиционированием. Звонок И ЕСТЬ исследование рынка. Исследование рынка И ЕСТЬ канал.',
        tabooChannel: 'Платная реклама',
        tabooReason: 'Реклама усиливает работающее сообщение. У вас его ещё нет. Каждый доллар в платный трафик сейчас просто подтверждает, что сообщение не работает. Хуже того: решение запустить рекламу даёт дофаминовый сигнал действия («мы что-то делаем»), пока реальная проблема — «мы не знаем кому продаём» — не решается.',
        bias: 'Предвзятость отбора',
        biasDetail: 'Избегание социальной угрозы — мозг защищает эго, ограничивая охват знакомыми территориями. Холодные разговоры с ЛПР активируют те же нейронные цепи угрозы, что и публичное отвержение. В итоге вы масштабируете комфортные низкосигнальные действия вместо высокосигнальных разговоров.',
        buyerMode: 'Социальное доказательство + Статусный сигнал',
        buyerDetail: 'Покупатели горизонтальных решений с неопределённой болью спрашивают: «Кто ещё этим пользуется?». Социальное доказательство здесь — не тактика конверсии, а обязательное условие. Дискавери-звонки — это не продажи. Это способ выучить язык вашего ICP.',
        redDoorTactics: 'Забронируйте 5 дискавери-звонков в LinkedIn на этой неделе — без питча и демо. Только один вопрос: «Что самое сложное в [проблеме, которую вы решаете]?» Записывайте фразы.',
        week4metric: '20% конверсия из охвата LinkedIn в 30-минутные звонки; найдены 3+ повторяющиеся фразы о боли',
        warningSignal: 'Собеседники не говорят о срочности, бюджете или текущих костылях — боль недостаточно острая'
    },
    consumer_catalyst: {
        name: 'Потребительский катализатор', icon: '[CC]',
        tagline: 'Consumer app · Виральная петля · Индивидуальный покупатель',
        primaryChannel: 'Виральная инженерия + Короткие видео',
        primaryReason: 'Потребительские продукты живут или умирают за счёт встроенной виральности. Стек: (1) K-factor аудит: если он ниже 0.1, никакой канал не спасёт (2) Короткие видео (TikTok, Reels, Shorts): вовлечение в 10 раз выше текста — показывайте продукт в реальных ситуациях (3) Twitter Build-in-public: фото-AI levelsio дошёл до $10K MRR за 3 недели через публичную документацию метрик.',
        tabooChannel: 'Поисковая реклама',
        tabooReason: 'Потребительские приложения не конвертируются через поисковый интерес — они распространяются через миметическое желание. Экономика платного поиска никогда не сойдётся при потребительском LTV: если подписка стоит $10, а клик $5–20, вам нужна почти 100% конверсия. Этого не будет. Чините виральную петлю.',
        bias: 'BIRGing (Греться в лучах чужой славы)',
        biasDetail: 'Социальное зеркалирование — мозг имитирует стратегии Notion или Slack, чтобы снизить тревогу. Это социальное доказательство Чалдини наоборот: вместо создания доказательств для других, вы ищете валидацию, подражая гигантам. Итог — стратегия B2B дистрибуции для продукта, который растёт только через виральность.',
        buyerMode: 'Миметическое желание + FOMO-каскад',
        buyerDetail: 'Потребительское принятие идет через миметическое желание Жирара — пользователи хотят то, что хотят другие. Каждый органический шер — это триггер. K-factor ниже 1.0 означает, что каскад провалился. Инженерия момента шеринга — это не хак, а единственный рабочий механизм.',
        redDoorTactics: 'Добавьте один момент вынужденного шеринга в основной флоу (шер для разблокировки, инвайт для результата). Метрика: количество шеров на активного юзера.',
        week4metric: 'K-factor > 0.1 и рост DAU ≥ 15% неделя к неделе',
        warningSignal: 'K-factor < 0.1 при здоровом инбаунде — сломана петля продукта, а не канал'
    },
    enterprise_sniper: {
        name: 'Энтерпрайз-снайпер', icon: '[ES]',
        tagline: 'Dev-утилита · Высокий ACV · Enterprise-покупатель',
        primaryChannel: 'Founder-led Outbound + Технический авторитет',
        primaryReason: 'Энтерпрайз-покупатели не сидят в сообществах — они оценивают вендоров через референсы и прямые технические диалоги. Стек для ACV $10K+: (1) Прямой аудит фаундером: найдите проблему в публичном стеке цели (GitHub, блог) и напишите письмо без коммерческого интереса (2) Технический контент в LinkedIn: пишите глубокий анализ. Когда вас увидят как равного, пойдёт инбаунд.',
        tabooChannel: 'Посты в сообществах',
        tabooReason: '100 апвоутов на HN дают дофаминовый сигнал тяги, но это не так. Закупочные комитеты не читают r/SaaS. Видимость в сообществе и контракты на $10K+ не связаны причинно-следственной связью. Вы тратите время на других фаундеров (которые не купят) вместо техлидов и CTO.',
        bias: 'Пренебрежение базовым уровнем',
        biasDetail: 'Мозг использует эвристику доступности, считая лайки и комменты пайплайном. Это не так. В энтерпрайзе вовлеченность в сообществе и выручка разделены пропастью. Вы гонитесь за цифрами, которые не ведут к деньгам.',
        buyerMode: 'Когнитивный авторитет + Взаимность коллег',
        buyerDetail: 'Старшие инженеры и CTO находятся в режиме постоянной «защиты от продаж». Технический диалог «фаундер-фаундеру» обходит это, триггеря взаимность вместо защиты. Цель первого контакта — ноль коммерции. Только тогда начинается реальная оценка.',
        redDoorTactics: 'Найдите одну техническую проблему в стеке целевой компании (GitHub issues, вакансии). Отправьте письмо из 4 строк — без упоминания продукта.',
        week4metric: '3–5 квалифицированных звонков в неделю из аутрича; минимум 1 переходит в фоллоу-ап',
        warningSignal: 'Разговоры прыгают к безопасности или закупкам до того, как вы установили ценность продукта'
    },
    conversion_architect: {
        name: 'Архитектор конверсии', icon: '[CV]',
        tagline: 'Любой продукт · Покупатель знает продукт · 100+ юзеров',
        primaryChannel: 'BOFU SEO + Ретаргетинг + Сайты отзывов',
        primaryReason: 'У вас уже есть спрос — люди ищут именно то, что вы построили. На этапе 100+ юзеров проблема канала решена; рост убивает проблема конверсии. Стек: (1) Bottom-of-funnel SEO: запросы типа «[продукт] vs [конкурент]», «цены [продукта]» (2) Ретаргетинг: те, кто зашёл на страницу цен, но не купил — ваши лучшие кандидаты (3) Сайты отзывов (G2, Capterra): 75% B2B покупателей проверяют их перед покупкой.',
        tabooChannel: 'ToFU образовательный контент',
        tabooReason: 'Образовательный контент строит осведомленность, которая у вас уже есть. Каждый ресурс здесь украден у конверсии готового спроса. Если bounce rate страницы цен >80%, у вас проблема конверсии, а не трафика. Заливать трафик в дырявую воронку — значит ускорять утечку.',
        bias: 'Предвзятость оптимизации',
        biasDetail: 'Дофаминовая петля новизны — генерация новых лидов дает немедленное вознаграждение. Исправление слоя конверсии когнитивно сложно и дает отложенный эффект. Мозг выбирает активность, которая кажется продуктивной, вместо той, что реально продуктивна.',
        buyerMode: 'Усталость от принятия решений + Избегание потерь',
        buyerDetail: 'Покупатели приходят на страницу цен в состоянии усталости — они уже сравнили 3–7 альтернатив. Они боятся выбрать неправильно больше, чем хотят выбрать правильно. Каждая убранная точка трения (таблица сравнения, ROI) снижает порог решения.',
        redDoorTactics: 'Проведите аудит страницы цен: добавьте таблицу сравнения, ROI-калькулятор и 3+ цитаты клиентов. Замерьте конверсию до и после.',
        week4metric: 'Конверсия лид → клиент > 5% на BOFU-лендингах',
        warningSignal: 'Bounce rate страницы цен >80% при нулевых триалах или покупках — сломан слой конверсии'
    },
    vertical_synthesizer: {
        name: 'Вертикальный синтезатор', icon: '[VS]',
        tagline: 'Vertical SaaS · Фаундер-писатель · Ниша знает проблему',
        primaryChannel: 'Гипер-нишевое SEO + Отраслевые издания',
        primaryReason: 'Ваш покупатель ищет симптомы на языке своей индустрии — терминами, которых ваши горизонтальные конкуренты даже не знают. Стек: (1) Гипер-нишевое SEO по терминам отрасли (2) Отраслевые рассылки: найдите 3 самые читаемые в вашей нише (3) Контент для конференций и ассоциаций: одна статья в профильном журнале бьёт 50 общих постов.',
        tabooChannel: 'Широкая поисковая реклама',
        tabooReason: 'Широкие запросы приносят горизонтальных покупателей, для которых ваш продукт слишком сложен или дорог. Конкурировать с Notion за $10/мес — проигрышная битва. Широкая реклама убыточна для вертикального SaaS: вы проигрываете по бюджету и широте фич.',
        bias: 'Эффект присоединения к большинству',
        biasDetail: 'Уменьшение когнитивного диссонанса — «вертикаль слишком мала» это не анализ, а рационализация страха. Глубокое нишевание вызывает дискомфорт, закрывая ментальные двери. Но данные говорят: вертикальный SaaS побеждает за счет эффективности CAC.',
        buyerMode: 'Когнитивная легкость + Групповое признание',
        buyerDetail: 'Покупатели в вертикалях обрабатывают профильный язык почти без усилий — это их родная речь. Как только ваш контент использует их терминологию, срабатывает признание: «Этот человек понимает». Когнитивная легкость — это и есть механизм доверия.',
        redDoorTactics: 'Найдите 3 самые читаемые рассылки в вашей вертикали. Предложите им практическую статью на их языке. На этой неделе.',
        week4metric: '20+ опт-инов из вашей специфической вертикали; минимум 1 входящий запрос на языке отрасли',
        warningSignal: 'Трафик идет по широким горизонтальным запросам — ваше SEO привлекает не тех'
    }
};is the entire trust mechanism.',
        redDoorTactics: 'Find the 3 most-read trade newsletters in your vertical via Google. Pitch a byline to each — a practical piece using their industry vocabulary. This week.',
        week4metric: '20+ opt-ins from within your specific vertical; at least 1 inbound inquiry using vertical-specific language',
        warningSignal: 'Traffic coming from broad horizontal keywords despite vertical positioning — your SEO is attracting the wrong buyers'
    }
};

// ─── Questions ─────────────────────────────────────────────────────────────────
const QUESTIONS = {
    Q1: {
        prompt: t('q1_prompt'),
        context: t('q1_context'),
        options: [
            { key: 'A', text: t('q1_a') },
            { key: 'B', text: t('q1_b') }
        ]
    },
    Q2: {
        prompt: t('q2_prompt'),
        context: t('q2_context'),
        options: [
            { key: 'A', text: t('q2_a') },
            { key: 'B', text: t('q2_b') },
            { key: 'C', text: t('q2_c') }
        ]
    },
    Q3: {
        prompt: t('q3_prompt'),
        context: t('q3_context'),
        options: [
            { key: 'A', text: t('q3_a') },
            { key: 'B', text: t('q3_b') }
        ]
    },
    Q4: {
        prompt: t('q4_prompt'),
        context: t('q4_context'),
        options: [
            { key: 'A', text: t('q4_a') },
            { key: 'B', text: t('q4_b') }
        ]
    },
    Q5: {
        prompt: t('q5_prompt'),
        context: t('q5_context'),
        options: [
            { key: 'A', text: t('q5_a') },
            { key: 'B', text: t('q5_b') }
        ]
    },
    Q6: {
        prompt: t('q6_prompt'),
        context: t('q6_context'),
        options: [
            { key: 'A', text: t('q6_a') },
            { key: 'B', text: t('q6_b') }
        ]
    },
    Q7: {
        prompt: t('q7_prompt'),
        context: t('q7_context'),
        options: [
            { key: 'A', text: t('q7_a') },
            { key: 'B', text: t('q7_b') }
        ]
    },
    Q8: {
        prompt: t('q8_prompt'),
        context: t('q8_context'),
        options: [
            { key: 'A', text: t('q8_a') },
            { key: 'B', text: t('q8_b') },
            { key: 'C', text: t('q8_c') }
        ]
    }
};

const QUESTION_ORDER = ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8'];

// ─── Stage Cost Data ───────────────────────────────────────────────────────────
const STAGE_COSTS = {
    A: {
        label: t('q8_a'),
        headline: 'Бесконечный цикл валидации без выручки',
        body: 'Без четкого канала вы тратите 80% времени на "улучшение продукта" вместо поиска юзеров. Это путь к медленной смерти через "продукт ради продукта".',
        source: "[Статистика: 34% стартапов умирают из-за отсутствия product-market fit]"
    },
    B: {
        label: t('q8_b'),
        headline: 'Месяцы работы без повторяемого пайплайна',
        body: "Каналы с высоким CAC (общая реклама, массовый контент) без отлаженной воронки = слитый бюджет и ноль лидов. Сначала один канал. Один кейс. Потом масштаб.",
        source: "[Методология: Four Fits Framework]"
    },
    C: {
        label: t('q8_c'),
        headline: 'Разрушенный LTV:CAC в момент масштабирования',
        body: "Неверный канал при масштабировании убивает юнит-экономику. Исследования показывают, что 53–70% маркетингового бюджета в скейлапах сливается впустую именно из-за этого.",
        source: "[Данные: Forrester + Gartner]"
    }
};

// ─── Routing ───────────────────────────────────────────────────────────────────
function determineArchetype(answers) {
    if (answers.Q1 === 'A') return 'consumer_catalyst';
    if (answers.Q2 === 'A') {
        if (answers.Q3 === 'A') return 'focused_builder';
        if (answers.Q3 === 'B') return 'enterprise_sniper';
    }
    if (answers.Q2 === 'B') {
        if (answers.Q4 === 'A') return 'content_authority';
        if (answers.Q4 === 'B') {
            if (answers.Q6 === 'A') return 'vertical_synthesizer';
            if (answers.Q6 === 'B') {
                if (answers.Q7 === 'A') return 'conversion_architect';
                if (answers.Q7 === 'B') return 'vertical_hunter';
            }
        }
    }
    if (answers.Q2 === 'C') {
        if (answers.Q5 === 'A') return 'vertical_hunter';
        if (answers.Q5 === 'B') return 'networker';
    }
    return 'focused_builder';
}

function getNextQuestion(currentQ, answer) {
    switch (currentQ) {
        case 'Q1': return answer === 'A' ? 'Q8' : 'Q2';
        case 'Q2': return answer === 'A' ? 'Q3' : answer === 'B' ? 'Q4' : 'Q5';
        case 'Q3': return 'Q8';
        case 'Q4': return answer === 'A' ? 'Q8' : 'Q6';
        case 'Q5': return 'Q8';
        case 'Q6': return answer === 'A' ? 'Q8' : 'Q7';
        case 'Q7': return 'Q8';
        case 'Q8': return null;
    }
    return null;
}

// ─── State ─────────────────────────────────────────────────────────────────────
const state = {
    currentStep: 'BOOT',
    answers: {},
    questionPath: [],
    archetypeId: null,
    aiDiagnosis: null,
    aiWeek1Override: null,
    email: '',
    name: ''
};

const dom = {
    bootScreen: document.getElementById('boot-screen'),
    bootLogs:   document.getElementById('boot-logs'),
    terminal:   document.getElementById('terminal'),
    screen:     document.getElementById('screen'),
    flash:      document.getElementById('flash'),
    progressBar:document.getElementById('progress-bar'),
    progressText:document.getElementById('progress-text')
};

// ─── i18n Helpers ──────────────────────────────────────────────────────────────
function updateMetaTags() {
    document.title = t('meta_title');
    const m = (s, a, k) => { const el = document.querySelector(s); if (el) el.setAttribute(a, t(k)); };
    m('meta[name="description"]', 'content', 'meta_description');
    m('meta[property="og:title"]', 'content', 'meta_title');
    m('meta[property="og:description"]', 'content', 'meta_description');
    m('meta[name="twitter:title"]', 'content', 'meta_title');
    m('meta[name="twitter:description"]', 'content', 'meta_description');
}

function getQuestion(qId) {
    const n = qId.replace('Q', '');
    const orig = QUESTIONS[qId];
    return {
        prompt: t(`q${n}_prompt`),
        context: t(`q${n}_context`),
        options: orig.options.map(opt => ({ key: opt.key, text: t(`q${n}_${opt.key.toLowerCase()}`) }))
    };
}

function initLangSwitcher() {
    const sw = document.getElementById('lang-switch');
    if (!sw) return;
    sw.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === I18N.lang) btn.classList.add('active');
        btn.addEventListener('click', () => {
            if (btn.dataset.lang === I18N.lang) return;
            I18N.lang = btn.dataset.lang;
            sw.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateMetaTags();
            if (state.currentStep === 'INTRO') renderIntro();
        });
    });
    updateMetaTags();
}

// ─── Utilities ─────────────────────────────────────────────────────────────────
async function typewriter(text, targetEl, append = false, speed = CONFIG.typeSpeed) {
    return new Promise(resolve => {
        if (!append) targetEl.innerHTML = '';
        let i = 0;
        const container = document.createElement('div');
        container.className = 'typing-text';
        targetEl.appendChild(container);
        function type() {
            if (i < text.length) {
                container.innerHTML += text[i] === '\n' ? '<br>' : text[i];
                i++;
                setTimeout(type, text[i-1] === '.' || text[i-1] === '?' ? Math.min(speed * 6, 80) : speed);
            } else { resolve(); }
        }
        type();
    });
}

function screenFlash() {
    dom.flash.classList.remove('flash-animate');
    void dom.flash.offsetWidth;
    dom.flash.classList.add('flash-animate');
}

function updateProgress(currentQ) {
    if (!currentQ || currentQ === 'INTRO') {
        dom.progressBar.style.display = 'none';
        return;
    }
    const stepNum = state.questionPath.length;
    const maxSteps = 6;
    const filled = Math.min(Math.round((stepNum / maxSteps) * 20), 20);
    const empty = 20 - filled;
    dom.progressText.innerHTML =
        `<span class="progress-fill">${'█'.repeat(filled)}</span>` +
        `<span class="progress-step">${'░'.repeat(empty)}</span>` +
        `  ${t('progress_step', {num: stepNum + 1})}  ──  ${currentQ}`;
    dom.progressBar.style.display = 'block';
}

// ─── LLM API ───────────────────────────────────────────────────────────────────
async function callLLM(archetypeId, answers) {
    const arch = ARCHETYPES[archetypeId];
    const stageMap = { A: '0–10 юзеров', B: '10–100 юзеров', C: '100+ юзеров' };
    const founderSkill = answers.Q2 === 'A' ? 'Билдер (код-центричный)' : answers.Q2 === 'B' ? 'Райтер (контент-центричный)' : 'Нетворкер (связи-центричный)';
    const stage = stageMap[answers.Q8] || 'неизвестно';

    const lang = t('llm_lang');
    const prompt = `You are a GTM strategist for technical founders. Be specific, direct, use founder language. No marketing speak.
IMPORTANT: Respond in ${lang}.

Founder profile:
- Archetype: ${arch.name} (${arch.tagline})
- Founder skill: ${founderSkill}
- Growth stage: ${stage}
- Recommended channel: ${arch.primaryChannel}
- Channel to avoid: ${arch.tabooChannel}

Return a valid JSON object ONLY — no markdown, no explanation:
{
  "diagnosis": "Одна фраза, описывающая их самую вероятную текущую GTM-ошибку. Начни с 'Вы...'. Будь конкретен относительно их архетипа.",
  "week1": ["конкретное действие 1", "конкретное действие 2", "конкретное действие 3"]
}

Сделай действия на Неделю 1 максимально конкретными. Названия инструментов, каналов, конкретные цифры и объемы.`;

    async function callModel(model) {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin,
                'X-Title': 'GTM Channel Compass'
            },
            body: JSON.stringify({ model, messages: [{ role: 'user', content: prompt }], temperature: 0.2, max_tokens: 500 })
        });
        if (!res.ok) throw new Error(`API ${res.status}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error.message);
        return data.choices[0]?.message?.content?.trim();
    }

    let content;
    try {
        content = await callModel(OPENROUTER_MODEL);
    } catch(e) {
        content = await callModel(OPENROUTER_MODEL_FALLBACK);
    }

    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('No JSON');
    const parsed = JSON.parse(match[0]);
    return parsed;
}

// ─── State Machine ────────────────────────────────────────────────────────────
async function transition(step, payload) {
    state.currentStep = step;
    screenFlash();

    if (step === 'INTRO')       return renderIntro();
    if (step.startsWith('Q'))   return renderQuestion(step);
    if (step === 'EMAIL_GATE')  return renderEmailGate();
    if (step === 'GENERATING')  return renderGenerating();
    if (step === 'RESULT')      return renderResult();
}

// ─── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const lines = [t('boot_1'), t('boot_2'), t('boot_3'), t('boot_4'), t('boot_5')];
    let delay = 0;
    lines.forEach((line, idx) => {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'boot-line';
            el.innerHTML = line.replace('[ OK ]', '<span class="status-ok">[ OK ]</span>');
            dom.bootLogs.appendChild(el);
            if (idx === lines.length - 1) {
                setTimeout(() => transition('INTRO'), 800);
            }
        }, delay);
        delay += CONFIG.bootDelay + Math.random() * 40;
    });

    initLangSwitcher();

    document.addEventListener('keydown', (e) => {
        if (state.currentStep === 'INTRO' && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            transition('Q1');
        }
    });
});

// ─── INTRO ─────────────────────────────────────────────────────────────────────
async function renderIntro() {
    dom.bootScreen.style.display = 'none';
    dom.terminal.classList.add('visible');
    dom.progressBar.style.display = 'none';
    dom.screen.innerHTML = '';

    if (typeof posthog !== 'undefined') posthog.capture('compass_viewed');

    // Typing header for that terminal feel
    await typewriter(t('intro_cmd'), dom.screen, false, CONFIG.fastTypeSpeed);

    const introContent = document.createElement('div');
    introContent.className = 'intro-container';
    introContent.innerHTML = `
        <div class="intro-box">
            <p class="intro-text">${t('intro_stat')}</p>
            <p class="intro-subtext">${t('intro_sub')}</p>
            
            <div class="intro-out-label">${t('intro_out_label')}</div>
            <ul class="intro-benefits">
                <li class="intro-benefit"><span class="arr-icon">&rarr;</span> ${t('intro_b1')}</li>
                <li class="intro-benefit"><span class="arr-icon">&rarr;</span> ${t('intro_b2')}</li>
                <li class="intro-benefit"><span class="arr-icon">&rarr;</span> ${t('intro_b3')}</li>
                <li class="intro-benefit"><span class="arr-icon">&rarr;</span> ${t('intro_b4')}</li>
            </ul>

            <div class="intro-cta-hint">${t('intro_cta_hint')}</div>
            
            <div class="intro-actions">
                <button class="terminal-btn primary" id="start-btn">${t('intro_start_btn')}</button>
            </div>
        </div>
    `;
    dom.screen.appendChild(introContent);
    
    document.getElementById('start-btn').addEventListener('click', () => {
        if (typeof posthog !== 'undefined') posthog.capture('quiz_started');
        transition('Q1');
    });
}

// ─── QUESTION ──────────────────────────────────────────────────────────────────
function renderQuestion(qId) {
    const q = getQuestion(qId);
    if (!q) return;

    state.questionPath.push(qId);
    updateProgress(qId);

    dom.screen.innerHTML = '';
    const block = document.createElement('div');
    block.className = 'question-block';

    const promptEl = `<div class="question-prompt"><span style="color:var(--text-dim)">[root@goddevit ~]$</span> ./ask --question ${qId}<br><br>${q.prompt}</div>`;
    const contextEl = `<div class="question-context">${q.context}</div>`;

    let optionsHtml = '<ul class="answer-options">';
    q.options.forEach(opt => {
        optionsHtml += `
            <li class="answer-option" data-key="${opt.key}" role="button" tabindex="0">
                <span class="answer-key">${opt.key}</span>
                <span class="answer-text">${opt.text}</span>
            </li>`;
    });
    optionsHtml += '</ul>';

    block.innerHTML = promptEl + contextEl + optionsHtml +
        `<div class="question-hint">${t('question_hint', {keys: q.options.map(o => o.key).join(' / ')})}</div>`;
    dom.screen.appendChild(block);

    // Interactions
    function handleAnswer(key) {
        const validKeys = q.options.map(o => o.key);
        if (!validKeys.includes(key)) return;

        // Visual feedback
        document.querySelectorAll('.answer-option').forEach(el => {
            el.classList.remove('selected');
            if (el.dataset.key === key) el.classList.add('selected');
        });

        state.answers[qId] = key;
        if (typeof posthog !== 'undefined') posthog.capture('question_answered', { question: qId, answer: key });

        setTimeout(() => {
            const next = getNextQuestion(qId, key);
            if (next) {
                transition(next);
            } else {
                state.archetypeId = determineArchetype(state.answers);
                if (typeof posthog !== 'undefined') {
                    const arch = ARCHETYPES[state.archetypeId];
                    posthog.capture('quiz_completed', {
                        archetype:       state.archetypeId,
                        archetype_name:  arch ? arch.name : null,
                        primary_channel: arch ? arch.primaryChannel : null,
                        answers:         state.answers,
                        questions_path:  state.questionPath,
                    });
                }
                transition('EMAIL_GATE');
            }
        }, 300);
    }

    document.querySelectorAll('.answer-option').forEach(el => {
        el.addEventListener('click', () => handleAnswer(el.dataset.key));
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handleAnswer(el.dataset.key); });
    });

    const keyHandler = (e) => {
        if (state.currentStep !== qId) { document.removeEventListener('keydown', keyHandler); return; }
        const upper = e.key.toUpperCase();
        const validKeys = q.options.map(o => o.key);
        if (validKeys.includes(upper)) { handleAnswer(upper); document.removeEventListener('keydown', keyHandler); }
    };
    document.addEventListener('keydown', keyHandler);
}

// ─── EMAIL GATE ────────────────────────────────────────────────────────────────
function renderEmailGate() {
    dom.screen.innerHTML = '';
    dom.progressBar.style.display = 'none';

    const arch = ARCHETYPES[state.archetypeId];
    const p = (cmd) => `<span class="op-t">~</span> <span class="op-d">$</span> ./${cmd}.sh`;

    const el = document.createElement('div');
    el.className = 'gate-container';
    el.innerHTML = `
        <div class="gate-header">${p('unlock-full-diagnostic')}</div>
        
        <div class="gate-content">
            <h2 class="gate-title">${t('gate_title', {archetype: arch.name})}</h2>
            
            <p class="gate-text">${t('gate_text')}</p>

            <div class="gate-benefits">
                <div class="benefit-item">${t('gate_b1')}</div>
                <div class="benefit-item">${t('gate_b2')}</div>
                <div class="benefit-item">${t('gate_b3')}</div>
                <div class="benefit-item">${t('gate_b4')}</div>
                <div class="benefit-item">${t('gate_b5')}</div>
            </div>

            <div class="gate-teaser-stats">${t('gate_teaser')}</div>

            <form id="gate-form" class="gate-form">
                <div class="form-group">
                    <input type="text" id="lead-name" placeholder="${t('gate_name_placeholder')}" class="gate-input">
                </div>
                <div class="form-group">
                    <input type="email" id="lead-email" placeholder="${t('gate_email_placeholder')}" required class="gate-input">
                </div>
                <button type="submit" id="gate-submit" class="gate-button">${t('gate_submit')}</button>
                <div id="gate-error" class="gate-error"></div>
            </form>

            <div class="gate-footer">
                ${t('gate_footer_1')}<br>
                ${t('gate_footer_2')}<br>
                ${t('gate_footer_3')}
            </div>
        </div>
    `;

    dom.screen.appendChild(el);

    document.getElementById('gate-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('lead-email').value.trim();
        const name  = document.getElementById('lead-name').value.trim();
        const submitBtn = document.getElementById('gate-submit');
        const errorEl  = document.getElementById('gate-error');

        if (!email) return;
        state.email = email;
        state.name  = name;

        submitBtn.disabled = true;
        submitBtn.textContent = t('gate_sending');
        errorEl.textContent = '';

        try {
            await fetch(`${API_BASE_URL}/api/gtm/capture-lead`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    name,
                    archetype: state.archetypeId,
                    answers: state.answers,
                    lang: I18N.lang,
                })
            });

            if (typeof posthog !== 'undefined') {
                const arch = ARCHETYPES[state.archetypeId];
                posthog.identify(email, {
                    email,
                    name: name || null,
                    archetype: state.archetypeId,
                    archetype_name: arch ? arch.name : null,
                });
                posthog.capture('lead_captured', {
                    archetype:      state.archetypeId,
                    archetype_name: arch ? arch.name : null,
                    primary_channel: arch ? arch.primaryChannel : null,
                    questions_answered: Object.keys(state.answers).length,
                    has_name: !!name,
                });
            }

            renderCheckEmail(email);

        } catch(err) {
            console.error('Lead capture error:', err);
            renderCheckEmail(email);
        }
    });
}

function renderResult() {
    dom.screen.innerHTML = '';
    const arch      = ARCHETYPES[state.archetypeId];
    const stageCost = STAGE_COSTS[state.answers.Q8] || STAGE_COSTS.A;
    const diagnosis = state.aiDiagnosis || `Your GTM strategy likely suffers from ${arch.bias.split(' ')[0]} — optimizing the wrong variables for your stage.`;
    const week1     = state.aiWeek1Override || (arch.week1 ? arch.week1 : [arch.redDoorTactics, "Identify your top 5 competitors’ keywords.", "Draft one ‘Conflict-first’ post."]);

    const block = document.createElement('div');
    block.className = 'result-block';

    block.innerHTML = `
        <div class="archetype-card">
            <div class="archetype-id">${t('archetype_identified')}  ·  ${arch.icon}</div>
            <div class="archetype-name">${arch.name}</div>
            <div class="archetype-tagline">${arch.tagline}</div>
        </div>

        <div class="bias-alert">
            <div class="alert-header">${t('bias_audit')}</div>
            <div class="alert-title">${arch.bias}</div>
            <div class="alert-body">${arch.biasDetail}</div>
        </div>

        <div class="result-grid">
            <div class="res-card">
                <div class="res-label">${t('primary_channel_label')}</div>
                <div class="res-value highlight">${arch.primaryChannel}</div>
                <div class="res-reason">${arch.primaryReason}</div>
            </div>
            
            <div class="res-card">
                <div class="res-label">${t('taboo_channel_label')}</div>
                <div class="res-value taboo-text">${arch.tabooChannel}</div>
                <div class="res-reason">${arch.tabooReason}</div>
            </div>
        </div>

        <div class="mindset-box">
            <div class="mind-header">${t('buyer_mode_label')}</div>
            <div class="mind-mode">${arch.buyerMode}</div>
            <div class="mind-detail">${arch.buyerDetail}</div>
        </div>

        <div class="result-section">
            <div class="section-label">${t('week1_label')}</div>
            <ul class="week1-list">
                ${week1.map((action, i) => `
                <li class="week1-item">
                    <div class="week1-check"></div>
                    <span>${action}</span>
                </li>`).join('')}
            </ul>
            <div class="red-door-tip">
                <span class="tip-label">${t('red_door_label')}</span> ${arch.redDoorTactics}
            </div>
        </div>

        <div class="result-section">
            <div class="section-label">${t('success_metric_label')}</div>
            <div class="metric-block">${arch.week4metric}</div>
            <div class="warning-signal">${t('warning_signal_label')} ${arch.warningSignal}</div>
        </div>

        <div class="cta-block">
            <div class="cta-headline">${t('cta_headline')}</div>
            <a href="${PAYMENT_URL}" target="_blank" class="cta-button" onclick="if(typeof posthog!=='undefined')posthog.capture('cta_clicked',{cta:'gtm_audit_500',archetype:'${state.archetypeId}',source:'result_page'})">${t('cta_button')}</a>
            <div class="cta-sub">${t('cta_sub')}</div>
        </div>

        <div class="share-row">
            <span class="share-label">${t('share_label')}</span>
            <button class="share-btn" onclick="shareResult('threads')">Threads</button>
            <button class="share-btn" onclick="shareResult('twitter')">X/Twitter</button>
            <button class="share-btn" onclick="copyResult()">Copy</button>
            <a href="#" onclick="location.reload()" class="reload-link">${t('run_again')}</a>
        </div>
    `;

    dom.screen.appendChild(block);
    dom.screen.scrollTop = 0;
    if (typeof posthog !== 'undefined') posthog.capture('result_viewed', { archetype: state.archetypeId });
}

// ─── CHECK EMAIL ──────────────────────────────────────────────────────────────
function renderCheckEmail(email) {
    dom.screen.innerHTML = '';
    dom.progressBar.style.display = 'none';
    screenFlash();

    const el = document.createElement('div');
    el.className = 'check-email-container';
    el.innerHTML = `
        <div class="check-email-block">
            <div class="check-email-status">${t('check_status')}</div>
            <div class="check-email-cmd">${t('check_cmd', {email})}</div>

            <div class="check-email-body">
                <p>${t('check_body', {archetype: ARCHETYPES[state.archetypeId]?.name || 'archetype'})}</p>
                <p style="color:#666;font-size:12px;">${t('check_extra')}</p>
            </div>

            <div class="check-email-hint">${t('check_spam')}</div>

            <a href="#" onclick="location.reload()" class="reload-link" style="display:inline-block;margin-top:24px;">
                ${t('check_rerun')}
            </a>
        </div>
    `;
    dom.screen.appendChild(el);
}

// ─── GENERATING ───────────────────────────────────────────────────────────────
async function renderGenerating() {
    dom.screen.innerHTML = '';
    dom.progressBar.style.display = 'none';

    const el = document.createElement('div');
    el.className = 'generating-container';
    el.innerHTML = `
        <div class="gen-header">${t('gen_cmd')}</div>
        <div class="gen-lines" id="gen-lines"></div>
    `;
    dom.screen.appendChild(el);

    const lines = [t('gen_1'), t('gen_2'), t('gen_3'), t('gen_4'), t('gen_5')];
    const genLines = el.querySelector('#gen-lines');
    for (const line of lines) {
        await new Promise(r => setTimeout(r, 400 + Math.random() * 200));
        const d = document.createElement('div');
        d.className = 'gen-line';
        d.innerHTML = `<span class="status-ok">[ OK ]</span> ${line}`;
        genLines.appendChild(d);
    }

    try {
        const result = await callLLM(state.archetypeId, state.answers);
        state.aiDiagnosis = result.diagnosis || null;
        state.aiWeek1Override = (Array.isArray(result.week1) && result.week1.length) ? result.week1 : null;
    } catch(e) {
        state.aiDiagnosis = getStaticDiagnosis(state.archetypeId);
        state.aiWeek1Override = null;
    }

    transition('RESULT');
}

// ─── Share / Copy ──────────────────────────────────────────────────────────────
function shareResult(platform) {
    const arch = ARCHETYPES[state.archetypeId];
    const text = t('share_text', {archetype: arch.name, channel: arch.primaryChannel, url: window.location.href});
    if (platform === 'threads') {
        window.open(`https://www.threads.com/intent/post?text=${encodeURIComponent(text)}`, '_blank');
    } else {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    }
    if (typeof posthog !== 'undefined') posthog.capture('shared', { platform, archetype: state.archetypeId });
}

function copyResult() {
    const arch = ARCHETYPES[state.archetypeId];
    const week1 = state.aiWeek1Override || [arch.redDoorTactics];
    const text = `Архетип: ${arch.name} (${arch.tagline})\nОсновной канал: ${arch.primaryChannel}\nЧего избегать: ${arch.tabooChannel}\nНеделя 1: ${week1.join(' | ')}\nМетрика: ${arch.week4metric}`;
    navigator.clipboard.writeText(text).catch(() => {});
}

// ─── Static Diagnosis Fallback ─────────────────────────────────────────────────
function getStaticDiagnosis(archetypeId) {
    const map = {
        focused_builder:     "Вы оптимизируете SEO и контент, в то время как ваши покупатели узнают об инструментах через посты в сообществах от коллег — а не через поиск.",
        vertical_hunter:     "Вы запускаетесь на горизонтальных платформах (Product Hunt), когда ваш ICP сконцентрирован в одной вертикали, до которой можно достучаться напрямую.",
        content_authority:   "Вы запускаете платную рекламу на аудиторию, которая осознает проблему, но еще не приняла софт как решение — сжигая бюджет на прерывание вместо обучения.",
        networker:           "Вы масштабируете верх воронки до того, как убедились, что ваше сообщение вообще конвертирует — бежите быстрее в неверном направлении.",
        consumer_catalyst:   "Вы используете B2B тактики дистрибуции для потребительского продукта, которому нужна виральность, встроенная в сам продукт.",
        enterprise_sniper:   "Вы постите в сообществах и пишете контент, когда энтерпрайз-покупателям нужен прямой разговор с фаундером, чтобы вообще начать оценку.",
        conversion_architect:"Вы генерируете больше лидов на входе, когда бутылочное горлышко — ваша страница цен и слой конверсии. Трафик не исправит сломанную воронку.",
        vertical_synthesizer:"Вы целитесь в широкие горизонтальные ключи, когда ваш ICP ищет очень специфические симптомы в одной вертикали, которой вы могли бы владеть полностью."
    };
    return map[archetypeId] || "Вы тратите усилия не на тот канал для вашей текущей стадии и профиля фаундера.";
}
