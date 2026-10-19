/**
 * ============================================================================
 * БАЗА ДАННЫХ САЙТА — EVENYOU ENTERTAINMENT (data.js)
 * ============================================================================
 * 
 * Здесь хранятся:
 * 1. `studio`   — Информация о студии и авторе
 * 2. `games`    — Раздел «Игры» (Games)
 * 3. `software` — Раздел «Программы и ОС» (Software & OS)
 * 
 * Как добавить новую игру или программу:
 * Скопируй ШАБЛОН ниже и вставь его в массив `games` или `software`.
 * Если каких-то данных нет (скриншотов, ссылок, размера) — оставь `[]` или `null`.
 * Сайт сам напишет «Скриншоты не предоставлены» / «Не предоставлено».
 * 
 * Категории оплаты (`pricing` и `status.type`):
 * - "paid"    — Платный проект (Paid)
 * - "free"    — Бесплатный проект (Free)
 * - "dev"     — В разработке (In Development)
 * - "concept" — Концепт (Concept)
 * - "arch"    — Архив (Archived)
 * 
 * ----------------------------------------------------------------------------
 * ШАБЛОН ПРОЕКТА (для `games` или `software`):
 * ----------------------------------------------------------------------------
 * {
 *   id: "my-project",
 *   featured: false, // true — карточка во всю ширину, false — обычная
 *   pricing: "paid", // "paid" | "free" | "arch" (для фильтрации и плашки цены)
 *   name: "Название проекта",
 *   kicker: { en: "Genre or Type · Platform", ru: "Жанр или тип · Платформа" },
 *   headline: {
 *     en: "Short one-line description.",
 *     ru: "Короткое описание в одну строку."
 *   },
 *   icon: {
 *     text: "MP",
 *     image: "", // Путь к иконке (например "img/icon.png"), если есть
 *     bg: "#1d1d1f",
 *     color: "#ffffff"
 *   },
 *   banner: {
 *     image: "" // Путь к обложке карточки, если есть
 *   },
 *   status: {
 *     type: "paid", // "paid", "free", "dev", "concept", "arch"
 *     label: { en: "Paid · $4.99", ru: "Платно · $4.99" }
 *   },
 *   specs: {
 *     price: { en: "Paid", ru: "Платная" },
 *     genre: { en: "Action", ru: "Экшен" },
 *     platform: "Windows, Mac",
 *     year: "2025",
 *     language: "RU, EN",
 *     downloadSize: null, // Вес для скачивания (например "450 MB")
 *     installSize: null,  // Вес для установки (например "1.2 GB")
 *     age: "12+"
 *   },
 *   screenshots: [],
 *   description: { en: "", ru: "" },
 *   features: [
 *     // { title: { en: "Feature", ru: "Особенность" }, desc: { en: "Details", ru: "Описание" } }
 *   ],
 *   devNote: { en: "", ru: "" },
 *   links: [
 *     // Варианты загрузки (источники) — отображаются в шапке и ниже сегмента автора:
 *     // { label: { en: "Get it on GameJolt", ru: "Скачать на GameJolt" }, source: "Game Jolt", url: "https://..." }
 *   ]
 * }
 * ============================================================================
 */

window.SITE_DATA = {

  // ══════════════════════════════════════════════════════════════════════════
  // 1. ОБО МНЕ И О СТУДИИ (HERO & RESUME)
  // ══════════════════════════════════════════════════════════════════════════
  studio: {
    name: "Evenyou Studio",
    author: { en: "Evenyou Studio", ru: "Evenyou Studio" },
    logo: "logo.png",
    email: "feedplay.team@gmail.com",
    location: {
      en: "",
      ru: ""
    },
    heroKicker: {
      en: "About Me",
      ru: "Обо мне"
    },
    heroTitle: {
      en: "Hi. I'm a programmer<br>and game designer.",
      ru: "Привет. Я программист<br>и геймдизайнер."
    },
    heroSub: {
      en: "I create games and interactive projects, building them completely solo (almost) — from writing code to crafting mechanics and the player experience. I like combining strict logic with creativity: not just writing scripts, but designing rules, details, and how a game will feel.",
      ru: "Создаю игры и интерактивные проекты, собирая их полностью самостоятельно (почти) — от написания кода до проработки механик и игрового опыта. Мне нравится совмещать строгую логику с творчеством: не просто писать скрипты, а продумывать правила, детали и то, как игра будет ощущаться."
    },
    aboutTitle: {
      en: "Full-cycle independent<br>development.",
      ru: "Полный цикл независимой<br>разработки."
    },
    aboutParagraphs: [
      {
        en: "I create games and interactive projects completely solo under Evenyou Studio — from writing code and architecture to designing mechanics, 3D visuals, and sound.",
        ru: "Создаю игры и интерактивные проекты, собирая их полностью самостоятельно — от написания кода до проработки механик и игрового опыта."
      },
      {
        en: "I love combining strict logic with creativity: not just writing scripts, but thinking through the rules, subtle details, and how every project actually feels to play and use.",
        ru: "Мне нравится совмещать строгую логику с творчеством: не просто писать скрипты, а продумывать правила, детали и то, как игра будет ощущаться."
      }
    ],
    stats: [
      { num: "6+", label: { en: "Games & Prototypes", ru: "Игр и прототипов" } },
      { num: "4", label: { en: "Core Disciplines", ru: "Направления (Код, 3D, UI, Звук)" } },
      { num: "100%", label: { en: "In-house Production", ru: "Собственная разработка" } },
      { num: "PC · Mobile", label: { en: "Target Platforms", ru: "Windows, macOS, Android" } }
    ],
    disciplines: [
      {
        tag: { en: "01 · Engineering", ru: "01 · Инженерия и код" },
        title: { en: "Game Systems & AI", ru: "Игровые системы и ИИ" },
        desc: {
          en: " Complex behavioral AI, active procedural ragdoll physics, custom shaders, and gameplay architecture built on Unity (including Unity 6 URP) and C#.",
          ru: "Адаптивный ИИ с системой состояний, процедурная физика активного рэгдолла, кастомные механики взаимодействия с ОС и архитектура на Unity 6 (URP) и C#."
        }
      },
      {
        tag: { en: "02 · Software & Cloud", ru: "02 · Софт и облако" },
        title: { en: "Apps, Backend & OS Design", ru: "Приложения, бэкенд и ОС" },
        desc: {
          en: "Cross-platform applications with Flutter / Dart, Python automation & data processing, PlayFab cloud backends, and minimalist OS architecture.",
          ru: "Кроссплатформенная разработка на Flutter и Dart, инструменты на Python, работа с Big Data, облачные сервисы PlayFab и проектирование систем EvenOS."
        }
      },
      {
        tag: { en: "03 · Visuals & UX", ru: "03 · Визуал и интерфейсы" },
        title: { en: "3D Modeling & Product UI", ru: "3D-графика и UI/UX дизайн" },
        desc: {
          en: "3D asset creation, lighting, and atmosphere in Blender paired with clean, functional, Apple-inspired interface systems.",
          ru: "Моделирование и сборка сцен в Blender, работа со светом и пост-обработкой, а также чистый продуктовый дизайн интерфейсов."
        }
      },
      {
        tag: { en: "04 · Audio", ru: "04 · Звук и музыка" },
        title: { en: "Sound Design & Scoring", ru: "Саунд-дизайн и композиция" },
        desc: {
          en: "Original dark ambient soundtracks, spatial horror audio cues, and procedural soundscapes produced in Logic Pro and FL Studio.",
          ru: "Написание оригинальных саундтреков, давящего эмбиента и пространственных звуковых эффектов в Logic Pro и FL Studio."
        }
      }
    ],
    timeline: [
      {
        period: "2025 – 2026",
        title: {
          en: "Flagship Horror Titles & EvenOS Ecosystem",
          ru: "Флагманские хоррор-проекты и экосистема EvenOS"
        },
        desc: {
          en: "Active development of psychological thriller SCREEN, Unity 6 survival horror Love Me or Rot, physics sandbox RagMania, and EvenOS concepts.",
          ru: "Разработка триллера SCREEN, сурвайвал-хоррора Love Me or Rot на Unity 6 (URP), физической песочницы RagMania и концептов EvenOS."
        }
      },
      {
        period: "2024",
        title: {
          en: "Public Releases on PC & Google Play",
          ru: "Релизы на ПК и в Google Play"
        },
        desc: {
          en: "Shipped tactical survival horror The Endless Night at Freddy's on Game Jolt and mobile arcade BrainRot Jumper on Android.",
          ru: "Выпуск тактического хоррора The Endless Night at Freddy's на Game Jolt и мобильного аркадного платформера BrainRot Jumper в Google Play."
        }
      },
      {
        period: "2022 – 2023",
        title: {
          en: "Cloud Architecture & Early R&D",
          ru: "Облачная архитектура и R&D-прототипы"
        },
        desc: {
          en: "Built early prototypes (Best Way) focusing on PlayFab cloud saves, player telemetry, authentication, and live leaderboards.",
          ru: "Создание ранних проектов и прототипов (Best Way) с облачными сохранениями, авторизацией и таблицами лидеров на базе PlayFab."
        }
      }
    ],
    techStack: [
      "Unity 6 (URP)", "C#", "Python", "Flutter / Dart", "Blender",
      "Logic Pro", "FL Studio", "Big Data", "Google Play", "PlayFab"
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. ИГРЫ (GAMES)
  // ══════════════════════════════════════════════════════════════════════════
  games: [
    {
      id: "screen",
      featured: true,
      pricing: "paid",
      name: "SCREEN",
      kicker: {
        en: "Psychological Horror · Windows, Mac, Android, iOS",
        ru: "Психологический хоррор · Windows, Mac, Android, iOS"
      },
      headline: {
        en: "NullPath watches every move you make.",
        ru: "NullPath следит за каждым твоим шагом."
      },
      icon: {
        text: "SCR",
        image: "",
        bg: "linear-gradient(135deg, #1e152a, #0e0b14)",
        color: "#c4b5fd"
      },
      banner: { image: "" },
      status: {
        type: "paid",
        label: { en: "Paid · In Dev", ru: "Платно · В разработке" }
      },
      specs: {
        price: { en: "4.99$", ru: "4.99$" },
        genre: { en: "Psychological Horror", ru: "Психологический хоррор" },
        platform: "Windows, macOS, Android, iOS",
        year: "2025",
        language: "EN, RU",
        downloadSize: null,
        installSize: null,
        age: "16+"
      },
      screenshots: [],
      description: {
        en: "SCREEN is a fourth-wall-breaking psychological thriller where your computer screen becomes the setting. Monitored by NullPath, every window you open and every decision you make is observed.",
        ru: "SCREEN — психологический триллер, ломающий четвёртую стену, где местом действия становится экран твоего компьютера. Система NullPath наблюдает за каждым открытым окном и каждым решением."
      },
      features: [
        
      ],
      devNote: {
        en: "Commercial flagship title in active development for Windows and macOS. Planned release in 2025.",
        ru: "Коммерческий флагманский проект в активной разработке для Windows и macOS. Релиз запланирован на 2025 год."
      },
      links: []
    },

    {
      id: "endless-night-at-freddys",
      featured: false,
      pricing: "free",
      name: "The Endless Night at Freddy's",
      kicker: {
        en: "Tactical Horror · PC, macOS",
        ru: "Тактический хоррор · PC, macOS"
      },
      headline: {
        en: "Survive an unforgiving night where every watt of power counts.",
        ru: "Переживи ночь, где на счету каждый процент энергии."
      },
      icon: {
        text: "TN",
        image: "TENAF/icon.jpg",
        bg: "linear-gradient(135deg, #241708, #120b04)",
        color: "#fbbf24"
      },
      banner: { image: "TENAF/Screenshots/34597794-evxympdm-v4.webp" },
      status: {
        type: "free",
        label: { en: "Free · Game Jolt", ru: "Бесплатно" }
      },
      specs: {
        price: { en: "Free", ru: "Бесплатно" },
        genre: { en: "Tactical Horror", ru: "Тактический хоррор" },
        platform: "PC (Windows), macOS",
        year: "2026",
        language: "EN, RU",
        downloadSize: "175 MB",
        installSize: ">500 MB",
        age: "12+"
      },
      screenshots: [
        "TENAF/Screenshots/34597794-evxympdm-v4.webp",
        "TENAF/Screenshots/34597795-s3km5bmg-v4.webp",
        "TENAF/Screenshots/34597798-fchggbsa-v4.webp",
        "TENAF/Screenshots/48719548-pec4kj4v-v4.webp",
        "TENAF/Screenshots/48719551-arbxazhu-v4.webp",
        "TENAF/Screenshots/48719598-aae6j9rx-v4.webp"
      ],
      description: {
        en: "A tactical survival horror fan game inspired by FNaF. Demands constant resource management, audio tracking, and split-second decisions under relentless pressure.",
        ru: "Тактический сурвайвал-хоррор по мотивам FNaF. Требует строгого контроля ресурсов, отслеживания звуковых сигналов и быстрых решений под постоянным давлением."
      },
      features: [
        {
          title: { en: "Endless Escalation", ru: "Бесконечная эскалация" },
          desc: {
            en: "Dynamic difficulty that pushes tactical reflexes to the limit.",
            ru: "Динамическая сложность, постепенно наращивающая темп и агрессию."
          }
        },
        {
          title: { en: "Positional Audio & Cameras", ru: "Звук и камеры" },
          desc: {
            en: "Rebuilt lighting, camera interference, and spatial audio cues.",
            ru: "Переработанный свет, помехи камер и пространственные звуковые ориентиры."
          }
        }
      ],
      devNote: {
        en: "Released and available for free on Game Jolt.",
        ru: "Проект завершён и бесплатно доступен на Game Jolt."
      },
      links: [
        {
          label: { en: "Get it on GameJolt", ru: "Скачать на GameJolt" },
          source: "Game Jolt",
          url: "https://gamejolt.com/games/TENAFR/913822"
        },
        {
          label: { en: "Get it on Itch IO", ru: "Скачать на Itch IO" },
          source: "Itch.io",
          url: "https://evenyou-entertainment.itch.io/tenaf"
        }
      ]
    },

    {
      id: "brainrot-jumper",
      featured: false,
      pricing: "arch",
      name: "BrainRot Jumper",
      kicker: {
        en: "Casual Arcade · Android",
        ru: "Казуалка · Android"
      },
      headline: {
        en: "Fast vertical arcade action built for quick mobile sessions.",
        ru: "Динамичный вертикальный джампер для быстрых сессий."
      },
      icon: {
        text: "BR",
        image: "BrainRotJumper/Icon.png",
        bg: "linear-gradient(135deg, #0d2416, #07140c)",
        color: "#34d399"
      },
      banner: { image: "BrainRotJumper/Screenshots/unnamed.png" },
      status: {
        type: "free",
        label: { en: "In Development", ru: "В разработке" }
      },
      specs: {
        price: { en: "Free", ru: "Бесплатно" },
        genre: { en: "Casual Arcade", ru: "Аркада" },
        platform: "Android",
        year: "2024",
        language: "EN, RU",
        downloadSize: null,
        installSize: null,
        age: "3+"
      },
      screenshots: [
        "BrainRotJumper/Screenshots/unnamed.png",
        "BrainRotJumper/Screenshots/unnamed (1).png",
        "BrainRotJumper/Screenshots/unnamed (2).png",
        "BrainRotJumper/Screenshots/unnamed (3).png"
      ],
      description: {
        en: "An energetic mobile jumper designed for instant pick-up-and-play sessions. Responsive one-thumb controls and procedural platform layouts.",
        ru: "Бодрый мобильный платформер для мгновенного старта. Отзывчивое управление одним пальцем и процедурная генерация уровней."
      },
      features: [
        {
          title: { en: "One-Thumb Controls", ru: "Управление одной рукой" },
          desc: {
            en: "Tuned specifically for mobile screens with zero input lag.",
            ru: "Откалиброванная физика прыжка для комфортной игры на смартфоне."
          }
        },
        {
          title: { en: "Procedural Climb", ru: "Бесконечный подъём" },
          desc: {
            en: "Stages get faster and trickier the higher you go.",
            ru: "Уровни генерируются на лету и усложняются с каждой сотней метров."
          }
        }
      ],
      devNote: {
        en: "Request beta test on feedplay.team@gmail.com.",
        ru: "Запросите бета тест на feedplay.team@gmail.com."
      },
      links: [
       
      ]
    },

    {
      id: "ragmania",
      featured: false,
      pricing: "paid",
      name: "RagMania",
      kicker: {
        en: "Physics Sandbox · PC",
        ru: "Физическая песочница · PC"
      },
      headline: {
        en: "Active-ragdoll chaos, contraptions, and emergent physics.",
        ru: "Активный рэгдолл, механизмы и честная физика."
      },
      icon: {
        text: "RM",
        image: "",
        bg: "linear-gradient(135deg, #0f1b2e, #090f1a)",
        color: "#60a5fa"
      },
      banner: { image: "" },
      status: {
        type: "paid",
        label: { en: "Paid · In Dev", ru: "Платно · В разработке" }
      },
      specs: {
        price: { en: "Paid", ru: "Платная" },
        genre: { en: "Physics Sandbox", ru: "Песочница" },
        platform: "PC (Windows)",
        year: "TBA",
        language: "EN, RU",
        downloadSize: null,
        installSize: null,
        age: "12+"
      },
      screenshots: [],
      description: {
        en: "A physics-driven sandbox focused on expressive active ragdolls, destructible environments, and experimental tools.",
        ru: "Песочница, построенная вокруг процедурной физики активного рэгдолла, разрушаемого окружения и экспериментов."
      },
      features: [
        {
          title: { en: "Active Ragdoll Physics", ru: "Активный рэгдолл" },
          desc: {
            en: "Characters balance and react dynamically to every impact.",
            ru: "Персонажи удерживают баланс и физически реагируют на столкновения."
          }
        },
        {
          title: { en: "Sandbox Tools", ru: "Инструменты песочницы" },
          desc: {
            en: "Build chain reactions with props, joints, and thrusters.",
            ru: "Создавай цепные реакции из объектов, связок и ускорителей."
          }
        }
      ],
      devNote: {
        en: "Currently refining physics stability and sandbox tools for PC release.",
        ru: "Идёт доработка стабильности физических связей и набора инструментов для релиза на ПК."
      },
      links: []
    },

    {
      id: "best-way-archives",
      featured: false,
      pricing: "arch",
      name: "Sempai's Nightmare: The Deadly Pursuit",
      kicker: {
        en: "PlayFab · Cloud · Canceled",
        ru: "PlayFab · Cloud · Отменено"
      },
      headline: {
        en: "Early experiments with cloud backends and prototypes.",
        ru: "Ранние разработки, облачные системы и прототипы."
      },
      icon: {
        text: "SN",
        image: "SMTDP/GameIcon.png",
        bg: "linear-gradient(135deg, #222225, #121214)",
        color: "#a1a1aa"
      },
      banner: { image: "SMTDP/ScreenShots/High.png" },
      status: {
        type: "arch",
        label: { en: "Archived", ru: "Архив" }
      },
      specs: {
        price: { en: "Archived", ru: "Архив" },
        genre: { en: "R&D / Prototypes", ru: "R&D / Прототипы" },
        platform: "PC / Android",
        year: "2022–2023",
        language: "RU, EN",
        downloadSize: null,
        installSize: null,
        age: null
      },
      screenshots: [
        "SMTDP/ScreenShots/High.png",
        "SMTDP/ScreenShots/1BpnD0.png",
        "SMTDP/ScreenShots/EJkmwj.png",
        "SMTDP/ScreenShots/yW90Dj.png"
      ],
      description: {
        en: "A collection of earlier games and technical prototypes — including Best Way — exploring cloud saves, PlayFab authentication, and leaderboards.",
        ru: "Собрание ранних проектов и технических прототипов (включая Best Way), на которых отрабатывались облачные сохранения и архитектура PlayFab."
      },
      features: [
        {
          title: { en: "PlayFab Cloud", ru: "Облако PlayFab" },
          desc: {
            en: "Accounts, remote configuration, and cloud data storage.",
            ru: "Аккаунты, удалённая конфигурация и облачное хранение данных."
          }
        }
      ],
      devNote: {
        en: "Archived as part of the studio's early history.",
        ru: "В архиве как часть ранней истории студии."
      },
      links: []
    },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // 3. ПРОГРАММЫ И ОС (SOFTWARE & OS)
  // ══════════════════════════════════════════════════════════════════════════
  software: [
    {
      id: "evenos",
      featured: false,
      pricing: "free",
      name: "EvenOS",
      kicker: {
        en: "Desktop OS · Concept",
        ru: "Десктопная ОС · Концепт"
      },
      headline: {
        en: "No bloat. No tracking. Just your computer.",
        ru: "Никакого блоата. Никакой слежки. Просто твой компьютер."
      },
      icon: {
        text: "OS",
        image: "",
        bg: "linear-gradient(135deg, #1d1836, #0d0b18)",
        color: "#a78bfa"
      },
      banner: { image: "" },
      status: {
        type: "concept",
        label: { en: "Concept", ru: "Концепт" }
      },
      specs: {
        price: { en: "Concept", ru: "Концепт" },
        genre: { en: "Operating System", ru: "Операционная система" },
        platform: "Desktop (x86 / ARM)",
        year: "2025–2026",
        language: "EN, RU",
        downloadSize: null,
        installSize: null,
        age: null
      },
      screenshots: [],
      description: {
        en: "A personal concept for what a desktop operating system could feel like — minimal, fast, private. Built around calm computing, where the OS respects your attention and hardware.",
        ru: "Личный концепт того, какой могла бы быть десктопная операционная система — минималистичная, быстрая, приватная. Без навязчивых сервисов и скрытых фоновых процессов."
      },
      features: [
        {
          title: { en: "Less UI", ru: "Меньше интерфейса" },
          desc: {
            en: "The interface gets out of the way when you don't need it.",
            ru: "Интерфейс уходит в сторону, когда он не нужен."
          }
        },
        {
          title: { en: "No Bloat", ru: "Без мусора" },
          desc: {
            en: "Nothing runs in the background unless you explicitly asked for it.",
            ru: "Ничто не работает в фоне без твоего ведома."
          }
        },
        {
          title: { en: "Your Data", ru: "Твои данные" },
          desc: {
            en: "Zero telemetry. No mandatory cloud accounts. It's your machine.",
            ru: "Никакой телеметрии и обязательных аккаунтов. Это твоя машина."
          }
        }
      ],
      devNote: {
        en: "Design & architecture concept.",
        ru: "На стадии концепта и проектирования."
      },
      links: []
    },

    {
      id: "evenos-mobile",
      featured: false,
      pricing: "free",
      name: "EvenOS Mobile",
      kicker: {
        en: "Mobile Environment · Concept",
        ru: "Мобильная ОС · Концепт"
      },
      headline: {
        en: "A phone that works for you, not against you.",
        ru: "Телефон, который работает на тебя, а не против."
      },
      icon: {
        text: "EM",
        image: "",
        bg: "linear-gradient(135deg, #0b291e, #06140f)",
        color: "#34d399"
      },
      banner: { image: "" },
      status: {
        type: "concept",
        label: { en: "Concept", ru: "Концепт" }
      },
      specs: {
        price: { en: "Concept", ru: "Концепт" },
        genre: { en: "Mobile OS", ru: "Мобильная ОС" },
        platform: "Mobile",
        year: "2025–2026",
        language: "EN, RU",
        downloadSize: null,
        installSize: null,
        age: null
      },
      screenshots: [],
      description: {
        en: "Your phone, not theirs. EvenOS Mobile reimagines mobile ergonomics around one-handed comfort, true app termination with zero background drain, and instant local continuity with desktop.",
        ru: "Твой телефон, не их. Переосмысление мобильного интерфейса: удобство управления одной рукой, честное закрытие приложений без расхода батареи в фоне и прямая связка с десктопом."
      },
      features: [
        {
          title: { en: "One-Handed by Default", ru: "Одна рука по умолчанию" },
          desc: {
            en: "Everything you need lives at the bottom of the screen. No stretching.",
            ru: "Всё нужное — внизу экрана. Никаких растяжек."
          }
        },
        {
          title: { en: "Actually Closed Apps", ru: "Честно закрытые приложения" },
          desc: {
            en: "When you close an app, it uses 0% battery. Zero silent telemetry.",
            ru: "Закрытое приложение потребляет 0% заряда. Никакой фоновой слежки."
          }
        },
        {
          title: { en: "Continuity with Desktop", ru: "Связь с десктопом" },
          desc: {
            en: "Shared clipboard and instant local file handoff with EvenOS.",
            ru: "Общий буфер обмена и мгновенная передача файлов с EvenOS."
          }
        }
      ],
      devNote: {
        en: "UX & system behavior concept.",
        ru: "UX-концепт мобильной среды."
      },
      links: []
    }
  ]
};
