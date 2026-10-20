/**
 * ============================================================================
 * БАЗА ДАННЫХ САЙТА — EVENYOU STUDIO (data.js)
 * ============================================================================
 * 
 * Здесь хранятся:
 * 0. `studios`  — Справочник студий-разработчиков (для карточек и страниц проектов)
 * 1. `studio`   — Информация о главной студии Evenyou Studio (главный экран и раздел «О студии»)
 * 2. `games`    — Раздел «Игры» (Games)
 * 3. `software` — Раздел «Программы и ОС» (Software & OS)
 * 
 * ────────────────────────────────────────────────────────────────────────────
 * КАК ИЗМЕНИТЬ ИЛИ ДОБАВИТЬ СТУДИЮ ДЛЯ ПРОЕКТА:
 * ────────────────────────────────────────────────────────────────────────────
 * Способ 1 (через список `studios` ниже — рекомендуется):
 *   1. В блоке `studios` измени данные `"evenyou"` или добавь новую студию по ключу
 *      (например, `"my-team": { name: "My Team", logo: "my-logo.png", ... }`).
 *   2. У нужной игры или программы в поле `studio` укажи этот ключ:
 *      `studio: "my-team"`
 * 
 * Способ 2 (напрямую внутри конкретного проекта):
 *   Внутри объекта игры/программы можно указать:
 *   `author: "Название студии"`,
 *   `authorLogo: "путь/к/логотипу.png"`,
 *   `authorSubtitle: { en: "Indie Team", ru: "Инди-команда" }`,
 *   `authorBadge: { en: "Partner Project", ru: "Партнёрский проект" }`
 * 
 * ────────────────────────────────────────────────────────────────────────────
 * Категории оплаты (`pricing` и `status.type`):
 * - "paid"    — Платный проект (Paid)
 * - "free"    — Бесплатный проект (Free)
 * - "dev"     — В разработке (In Development)
 * - "concept" — Концепт (Concept)
 * - "arch"    — Архив (Archived)
 * ============================================================================
 */

window.SITE_DATA = {

  // ══════════════════════════════════════════════════════════════════════════
  // 0. СПИСОК СТУДИЙ-РАЗРАБОТЧИКОВ (ДЛЯ ПРИВЯЗКИ К ПРОЕКТАМ ПО ПОЛЮ `studio`)
  // ══════════════════════════════════════════════════════════════════════════
  studios: {
    "evenyou": {
      name: { en: "Evenyou Studio", ru: "Evenyou Studio" },
      logo: "logo.png",
      // monochromeLogo: true — логотип адаптируется под светлую/тёмную тему (чёрный/белый).
      // Поставь false, если используешь цветную картинку логотипа.
      monochromeLogo: true,
      subtitle: {
        en: "Independent game & software studio",
        ru: "Независимая студия игр и ПО"
      },
      badge: {
        en: "In-House Production",
        ru: "In-House проект"
      }
    }

    // Пример добавления ещё одной студии (раскомментируй при необходимости):
    /*
    "other-studio": {
      name: { en: "Other Studio", ru: "Другая студия" },
      logo: "other-logo.png",
      monochromeLogo: false,
      subtitle: {
        en: "Partner development team",
        ru: "Команда-партнёр"
      },
      badge: {
        en: "Co-Production",
        ru: "Совместный проект"
      }
    }
    */
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 1. О ГЛАВНОЙ СТУДИИ НА САЙТЕ (HERO & STUDIO PROFILE)
  // ══════════════════════════════════════════════════════════════════════════
  studio: {
    name: "Evenyou Studio",
    author: { en: "Evenyou Studio", ru: "Evenyou Studio" },
    logo: "logo.png",
    email: "feedplay.team@gmail.com",
    location: {
      en: "Independent game & software studio",
      ru: "Независимая студия игр и ПО"
    },
    heroKicker: {
      en: "Presents",
      ru: "Представляем"
    },
    heroTitle: {
      en: "Independent games<br>& software.",
      ru: "Независимые игры<br>и софт."
    },
    heroSub: {
      en: "We build games, software, and experimental digital projects — each one exploring a different idea, genre, or feeling.",
      ru: "Мы создаём видеоигры, программное обеспечение и экспериментальные цифровые проекты — каждый из которых исследует новую идею, жанр или ощущение."
    },
    aboutTitle: {
      en: "About Evenyou Studio.",
      ru: "Об Evenyou Studio."
    },
    aboutParagraphs: [
      {
        en: "Evenyou Studio is an independent studio building video games, software, and experimental digital projects.",
        ru: "Evenyou Studio — независимая студия, создающая видеоигры, программное обеспечение и экспериментальные цифровые проекты."
      },
      {
        en: "We don't follow a single genre or format. Each project is an opportunity to explore a new idea, technology, or feeling.",
        ru: "Мы не придерживаемся одного жанра или формата. Каждый проект — возможность исследовать новую идею, технологию или ощущение."
      }
    ],
    stats: [
      { num: "Independent", label: { en: "Independent studio and self-directed vision", ru: "Независимая студия и собственное видение" } },
      { num: "Small-scale", label: { en: "Small-scale development with attention to detail", ru: "Камерная разработка с вниманием к деталям" } },
      { num: "Experimental", label: { en: "Different genres, mechanics, and formats", ru: "Разные жанры, механики и форматы" } },
      { num: "Cross-platform", label: { en: "Projects for Windows, macOS, Android, iOS & Web", ru: "Проекты для Windows, macOS, Android, iOS и Web" } }
    ],
    disciplines: [
      {
        tag: { en: "01 · Games", ru: "01 · Игры" },
        title: { en: "Game Development", ru: "Game Development" },
        desc: {
          en: "Atmospheric horror, physics-driven sandboxes, and arcade projects built on Unity and C#.",
          ru: "Атмосферные хорроры, физические песочницы и аркадные игры на базе Unity и C#."
        }
      },
      {
        tag: { en: "02 · Software", ru: "02 · Программы" },
        title: { en: "Software Development", ru: "Software Development" },
        desc: {
          en: "Local-first utilities, audio software, and clean cross-platform applications built with Flutter and Dart.",
          ru: "Локальные утилиты, аудио-программы и кроссплатформенные приложения на Flutter и Dart."
        }
      },
      {
        tag: { en: "03 · Design", ru: "03 · Интерфейсы" },
        title: { en: "UI / UX", ru: "UI / UX" },
        desc: {
          en: "Minimalist interface systems, desktop and mobile OS concepts (EvenOS), and distraction-free ergonomics.",
          ru: "Минималистичные интерфейсные системы, концепты операционных сред EvenOS и чистая продуктовая эргономика."
        }
      },
      {
        tag: { en: "04 · Experiments", ru: "04 · Эксперименты" },
        title: { en: "Interactive Experiences", ru: "Interactive Experiences" },
        desc: {
          en: "Fourth-wall-breaking desktop narratives, procedural active-ragdoll physics, and digital experiments.",
          ru: "Проекты с разрушением четвёртой стены, процедурная физика активного рэгдолла и цифровые эксперименты."
        }
      },
      {
        tag: { en: "05 · Web", ru: "05 · Веб" },
        title: { en: "Web", ru: "Web" },
        desc: {
          en: "Fast, lightweight web interfaces, project showcases, and browser-accessible WebGL builds.",
          ru: "Быстрые и минималистичные веб-интерфейсы, интерактивные витрины и браузерные сборки на WebGL."
        }
      },
      {
        tag: { en: "06 · Mobile", ru: "06 · Мобайл" },
        title: { en: "Mobile", ru: "Mobile" },
        desc: {
          en: "Responsive one-thumb mobile games and ergonomic mobile interfaces for Android and iOS.",
          ru: "Мобильные игры с отзывчивым управлением одной рукой и интерфейсы для Android и iOS."
        }
      }
    ],
    timeline: [
      {
        period: "2025 – 2026",
        title: {
          en: "SCREEN, RagMania, EvenAudio & EvenOS",
          ru: "SCREEN, RagMania, EvenAudio и экосистема EvenOS"
        },
        desc: {
          en: "Active development of psychological thriller SCREEN, physics sandbox RagMania, local music player EvenAudio, and EvenOS desktop/mobile concepts.",
          ru: "Разработка психологического триллера SCREEN, физической песочницы RagMania, локального плеера EvenAudio и концептов EvenOS."
        }
      },
      {
        period: "2024",
        title: {
          en: "Public Releases on Windows, macOS & Android",
          ru: "Релизы на Windows, macOS и Android"
        },
        desc: {
          en: "Shipped tactical survival horror The Endless Night at Freddy's on Game Jolt & Itch.io and mobile arcade BrainRot Jumper on Android.",
          ru: "Выпуск тактического хоррора The Endless Night at Freddy's на Game Jolt и Itch.io, а также мобильного платформера BrainRot Jumper на Android."
        }
      },
      {
        period: "2022 – 2023",
        title: {
          en: "Cloud Architecture & Early Prototypes",
          ru: "Облачная архитектура и ранние прототипы"
        },
        desc: {
          en: "Built early studio prototypes (Sempai's Nightmare, Best Way) focusing on PlayFab cloud saves, authentication, and live leaderboards.",
          ru: "Создание ранних проектов и прототипов студии (Sempai's Nightmare, Best Way) с облачными сохранениями, авторизацией и таблицами лидеров."
        }
      }
    ],
    techStack: [
      "Unity",
      "C#",
      "Flutter",
      "Dart",
      "HTML / CSS / JavaScript",
      "Git",
      "Android",
      "WebGL"
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. ИГРЫ (GAMES)
  // ══════════════════════════════════════════════════════════════════════════
  games: [
    {
      id: "screen",
      studio: "evenyou",
      featured: true,
      pricing: "paid",
      name: "SCREEN",
      coverTitle: {
        en: "Your screen is the setting.",
        ru: "Твой экран — место действия."
      },
      kicker: {
        en: "Psychological Horror · Windows, macOS, Android, iOS",
        ru: "Психологический хоррор · Windows, macOS, Android, iOS"
      },
      headline: {
        en: "NullPath watches every window you open and every move you make.",
        ru: "NullPath следит за каждым открытым окном и каждым твоим шагом."
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
        {
          title: { en: "Fourth-Wall Interaction", ru: "Разрушение четвёртой стены" },
          desc: {
            en: "Your desktop environment and system windows become the setting of the story.",
            ru: "Рабочий стол и системные окна становятся непосредственным местом действия."
          }
        },
        {
          title: { en: "NullPath Surveillance", ru: "Наблюдение NullPath" },
          desc: {
            en: "Every window you open and every choice you make is tracked by the system.",
            ru: "Каждое открытое окно и каждое действие отслеживается системой NullPath."
          }
        }
      ],
      devNote: {
        en: "In active development for Windows, macOS, Android, and iOS.",
        ru: "Проект в активной разработке для Windows, macOS, Android и iOS."
      },
      links: []
    },

    {
      id: "endless-night-at-freddys",
      studio: "evenyou",
      featured: false,
      pricing: "free",
      name: "The Endless Night at Freddy's",
      coverTitle: {
        en: "Every watt of power counts.",
        ru: "На счету каждый процент энергии."
      },
      kicker: {
        en: "Tactical Horror · Windows, macOS",
        ru: "Тактический хоррор · Windows, macOS"
      },
      headline: {
        en: "Survive an unforgiving night under relentless pressure.",
        ru: "Переживи бесконечную ночь под постоянным давлением."
      },
      icon: {
        text: "TN",
        image: "TENAF/icon.jpg",
        bg: "linear-gradient(135deg, #241708, #120b04)",
        color: "#fbbf24"
      },
      banner: { image: "TENAF/Screenshots/48719548-pec4kj4v-v4.webp" },
      status: {
        type: "free",
        label: { en: "Free · Game Jolt", ru: "Бесплатно" }
      },
      specs: {
        price: { en: "Free", ru: "Бесплатно" },
        genre: { en: "Tactical Horror", ru: "Тактический хоррор" },
        platform: "Windows, macOS",
        year: "2026",
        language: "EN, RU",
        downloadSize: "175 MB",
        installSize: ">500 MB",
        age: "12+"
      },
      screenshots: [
        "TENAF/Screenshots/48719548-pec4kj4v-v4.webp",
        "TENAF/Screenshots/34597795-s3km5bmg-v4.webp",
        "TENAF/Screenshots/34597798-fchggbsa-v4.webp",
        "TENAF/Screenshots/34597794-evxympdm-v4.webp",
        "TENAF/Screenshots/48719551-arbxazhu-v4.webp",
        "TENAF/Screenshots/48719598-aae6j9rx-v4.webp"
      ],
      description: {
        en: "A tactical survival horror fan game inspired by FNaF. Demands constant resource management, audio tracking, and split-second decisions under relentless pressure.",
        ru: "Тактический сурвайвал-хоррор по мотивам FNaF. Требует строгого контроля ресурсов, отслеживания звуковых сигналов и быстрых решений под постоянным давлением."
      },
      features: [
        {
          title: { en: "What's difference?", ru: "В чем отличие?" },
          desc: {
            en: "Dynamic difficulty that pushes tactical reflexes to the limit. Game lasts until you die.",
            ru: "Динамическая сложность, постепенно наращивающая темп и агрессию. Игра длиться до самой смерти."
          }
        },
        {
          title: { en: "Partial controller support!", ru: "Частичная поддержка геймпада!" },
          desc: {
            en: "Take your Dualsense or Xbox to play! But it's still recomended to play on Keyboard/Mouse.",
            ru: "Для игры можно использовать контроллер DualSense или Xbox! Однако всё же рекомендуется играть с помощью клавиатуры и мыши."
          }
        }
      ],
      links: [
        {
          label: { en: "Get it on GameJolt", ru: "Скачать на GameJolt" },
          source: "Game Jolt",
          url: "https://gamejolt.com/games/TENAFR/913822"
        },
        {
          label: { en: "Get it on Itch.io", ru: "Скачать на Itch.io" },
          source: "Itch.io",
          url: "https://evenyou-entertainment.itch.io/tenaf"
        }
      ]
    },

    {
      id: "brainrot-jumper",
      studio: "evenyou",
      featured: false,
      pricing: "free",
      name: "BrainRot Jumper",
      coverTitle: {
        en: "Straight up, zero hesitation.",
        ru: "Только вверх, без остановки."
      },
      kicker: {
        en: "Casual Arcade · Android",
        ru: "Казуальная аркада · Android"
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
      links: []
    },

    {
      id: "ragmania",
      studio: "evenyou",
      featured: false,
      pricing: "paid",
      name: "RagMania",
      coverTitle: {
        en: "Pure emergent physics.",
        ru: "Песочница честной физики."
      },
      kicker: {
        en: "Physics Sandbox · Windows",
        ru: "Физическая песочница · Windows"
      },
      headline: {
        en: "Active-ragdoll chaos, contraptions, and sandbox experiments.",
        ru: "Активный рэгдолл, механизмы и полная свобода экспериментов."
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
        platform: "Windows",
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
        en: "Currently refining physics stability and sandbox tools for Windows release.",
        ru: "Идёт доработка стабильности физических связей и набора инструментов для релиза на Windows."
      },
      links: []
    },

    {
      id: "best-way-archives",
      studio: "evenyou",
      featured: false,
      pricing: "arch",
      name: "Sempai's Nightmare: The Deadly Pursuit",
      coverTitle: {
        en: "One maniac seven kids.",
        ru: "Один маньяк семь детей."
      },
      kicker: {
        en: "PlayFab · Cloud · Windows, Android",
        ru: "PlayFab · Cloud · Windows, Android"
      },
      headline: {
        en: "Who will win?",
        ru: "Кто же выйграет?"
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
        genre: { en: "Multiplayer, Survival horror", ru: "Мультиплеер, Хоррор на выживание" },
        platform: "Windows, Android",
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
        en: "Sempai's Nightmare: The Deadly Pursuit is an atmospheric survival horror game in which an ordinary night turns into a lethal game of cat and mouse. You find yourself trapped in an abandoned building, pursued by the mysterious Sampai. To escape, you must explore the rooms, search for keys and useful items, solve puzzles, and keep a close watch on your surroundings. The core gameplay revolves around evasion and survival: you cannot fight Sampai, so you must hide, push him away, find safe paths, and memorize the layout of the building. Any noise or wrong move could draw his attention. As you uncover the history of the building and Sampai himself, you begin to realize that this is no ordinary nightmare—it is the consequence of events that took place here many years ago. Survive until dawn, unravel the mystery, and don't let Sampai find you.",
        ru: "Sempai's Nightmare: The Deadly Pursuit — атмосферный survival horror, в котором обычная ночь превращается в смертельную игру в кошки-мышки. Игрок оказывается заперт в заброшенном здании, где его преследует загадочный Сэмпай. Чтобы выбраться, необходимо исследовать помещения, искать ключи и полезные предметы, решать небольшие головоломки и внимательно следить за окружением. Главная механика игры — погоня и выживание: сражаться с Сэмпаем нельзя, поэтому придётся прятаться, отвлекать его, искать безопасные маршруты и запоминать расположение помещений. Любой шум или неправильное действие может привлечь его внимание. По мере прохождения игрок начинает узнавать историю здания и самого Сэмпая, постепенно понимая, что происходящее — не обычный кошмар, а последствия событий, произошедших здесь много лет назад. Выживи до рассвета, раскрой тайну и не дай Сэмпаю тебя найти."
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
    }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // 3. ПРОГРАММЫ И ОС (SOFTWARE & OS)
  // ══════════════════════════════════════════════════════════════════════════
  software: [
    {
      id: "evenaudio",
      studio: "evenyou",
      featured: true,
      pricing: "free",
      name: "EvenAudio",
      coverTitle: {
        en: "Your library, under your control.",
        ru: "Твоя фонотека под твоим контролем."
      },
      kicker: {
        en: "Software · Flutter · Windows, macOS, Android",
        ru: "Софт · Flutter · Windows, macOS, Android"
      },
      headline: {
        en: "A simple local music player without subscriptions or cloud bloat.",
        ru: "Простой локальный музыкальный плеер без подписок и лишнего шума."
      },
      icon: {
        text: "EA",
        image: "",
        bg: "linear-gradient(135deg, #211638, #0e0a1a)",
        color: "#c4b5fd"
      },
      banner: { image: "" },
      status: {
        type: "dev",
        label: { en: "In Development", ru: "В разработке" }
      },
      specs: {
        price: { en: "Free trial, EvenAudio Basic, EvenAudio Plus, EvenAudio Premium Subscribtion avaiable", ru: "Доступны бесплатная бесплатная версия, а также подписки EvenAudio Basic, EvenAudio Plus и EvenAudio Premium" },
        genre: { en: "Music Player", ru: "Аудиоплеер" },
        platform: "Windows, macOS, Android",
        year: "2025–2026",
        language: "EN, RU",
        downloadSize: null,
        installSize: null,
        age: null
      },
      screenshots: [],
      description: {
        en: "EvenAudio is a simple local music player built around ownership, convenience, and control. Designed for clean, distraction-free listening without subscriptions or cloud bloat.",
        ru: "EvenAudio — лаконичный локальный музыкальный плеер, созданный вокруг контроля над своей фонотекой и удобства. Без подписок, лишнего шума и фоновой телеметрии."
      },
      features: [
        {
          title: { en: "Local Library Ownership", ru: "Своя локальная медиатека" },
          desc: {
            en: "Direct playback of your local audio files with zero cloud dependency.",
            ru: "Прямое воспроизведение локальных аудиофайлов без привязки к облаку."
          }
        },
        {
          title: { en: "Built with Flutter", ru: "Разработано на Flutter" },
          desc: {
            en: "Fast, minimal interface across desktop and mobile platforms.",
            ru: "Быстрый и минималистичный интерфейс для десктопных и мобильных платформ."
          }
        }
      ],
      devNote: {
        en: "In active development with Flutter and Dart.",
        ru: "В активной разработке на базе Flutter и Dart."
      },
      links: []
    },

    {
      id: "evenos",
      studio: "evenyou",
      featured: false,
      pricing: "free",
      name: "EvenOS",
      coverTitle: {
        en: "Just your computer.",
        ru: "Просто твой компьютер."
      },
      kicker: {
        en: "Desktop OS · Concept",
        ru: "Десктопная ОС · Концепт"
      },
      headline: {
        en: "No bloat. No tracking. Minimal and private desktop environment.",
        ru: "Никакого блоата, фоновой слежки и навязчивых сервисов."
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
      studio: "evenyou",
      featured: false,
      pricing: "free",
      name: "EvenOS Mobile",
      coverTitle: {
        en: "A phone that works for you.",
        ru: "Телефон, который работает на тебя."
      },
      kicker: {
        en: "Mobile Environment",
        ru: "Мобильная ОС"
      },
      headline: {
        en: "One-handed comfort, zero background drain, and desktop continuity.",
        ru: "Управление одной рукой, честное закрытие приложений и связка с ПК."
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
        platform: "EvenOS Mobile",
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
