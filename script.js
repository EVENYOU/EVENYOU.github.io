/**
 * ============================================================================
 * ЛОГИКА И ИНТЕРАКТИВНОСТЬ САЙТА — EVENYOU STUDIO (script.js)
 * ============================================================================
 * 
 * Этот файл отвечает за:
 * 1. Хранение текущего состояния (выбранный язык, активные фильтры, открытое окно).
 * 2. Автоматическую подстановку логотипов платформ (Windows, macOS, iOS, Android, WebGL).
 * 3. Переключение Светлой и Тёмной темы (с сохранением выбора в браузере).
 * 4. Перевод текстов между русским (RU) и английским (EN) языками.
 * 5. Отрисовку всех секций и карточек на основе данных из файла `data.js`.
 * 6. Плавную FLIP-анимацию раскрытия карточки проекта или новости в модальное окно.
 * ============================================================================
 */

/* ══════════════════════════════════════════════════════════════════════════
   1. ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ СОСТОЯНИЯ
   ══════════════════════════════════════════════════════════════════════════ */
let currentLang = 'ru';        // Язык по умолчанию ('ru' или 'en')
let currentGameFilter = 'all'; // Текущий фильтр игр ('all', 'paid', 'free', 'dev')
let currentNewsFilter = 'all'; // Текущий фильтр новостей ('all', 'announcement', 'devlog', 'release')
let activeProject = null;      // Объект открытого сейчас проекта (или null, если окно закрыто)
let activeNews = null;         // Объект открытой сейчас новости (или null)
let activeSourceCardEl = null; // DOM-элемент карточки, из которой открылось модальное окно
let isAnimatingModal = false;  // Защита от повторных кликов во время анимации открытия/закрытия


/* ══════════════════════════════════════════════════════════════════════════
   2. АВТОМАТИЧЕСКИЕ ИКОНКИ ПЛАТФОРМ И СТУДИИ (Evenyou Studio, Windows, macOS, iOS, Android, WebGL)
   ══════════════════════════════════════════════════════════════════════════
   Функция `withPlatformLogos(str)` ищет в любой строке упоминания платформ
   и бренда `Evenyou Studio` и автоматически добавляет перед ними логотип:
   - Для Evenyou Studio — фирменная векторная эмблема геймпада с лучами (из logo.png).
   - Для Windows, Android и WebGL — встроенные векторные SVG-значки.
   - Для macOS, Mac и iOS — оригинальный символ яблока ``.
   ══════════════════════════════════════════════════════════════════════════ */
const PLATFORM_SVGS = {
  evenyou: `<svg class="plat-svg plat-svg-evenyou" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M11.87 2.17L11.60 2.31L11.39 2.64L11.39 4.93L12.00 5.40L12.47 5.07L12.47 2.51L12.13 2.17ZM5.00 5.27L4.66 5.61L4.66 6.01L6.21 7.56L6.48 7.69L6.62 7.56L7.09 7.22L6.95 6.68L5.40 5.27ZM8.77 5.27L8.57 5.47L8.57 5.74L8.90 5.94L9.11 5.74L9.11 5.34ZM14.96 5.27L14.76 5.47L14.76 5.74L15.16 5.88L15.43 5.47L15.23 5.27ZM18.46 5.27L16.91 6.82L16.91 7.36L17.12 7.56L17.79 7.56L19.34 6.01L19.34 5.61L19.00 5.27ZM10.92 6.35L10.79 6.48L9.85 6.62L7.96 7.69L6.82 8.84L6.01 10.18L6.08 10.25L6.62 9.71L7.29 9.31L8.23 9.17L8.37 9.04L9.58 9.17L10.38 9.58L11.19 10.38L12.67 10.38L12.94 10.12L14.02 9.31L14.96 9.17L15.10 9.04L15.63 9.04L15.77 9.17L16.31 9.17L17.12 9.58L17.92 10.38L17.99 10.32L17.45 9.24L16.17 7.83L14.42 6.75L13.62 6.48L13.21 6.48L13.08 6.35ZM2.85 9.04L2.51 9.51L2.98 9.85L3.32 9.38ZM20.75 9.04L20.41 9.51L20.88 9.85L21.22 9.38ZM8.10 9.85L7.15 10.25L6.41 10.99L6.01 11.80L5.88 12.74L5.74 12.88L5.74 13.95L5.61 14.09L5.74 16.64L5.88 16.78L5.88 17.32L6.41 18.80L7.15 19.54L8.10 19.54L8.50 19.27L9.11 18.26L9.91 15.30L10.79 14.29L11.46 14.02L12.54 14.02L13.35 14.42L14.09 15.43L14.36 16.64L14.76 18.12L15.16 18.93L15.63 19.40L15.90 19.54L16.71 19.54L17.45 18.93L17.99 17.59L18.12 16.38L18.26 16.24L18.26 13.14L18.12 13.01L17.99 11.93L17.59 11.12L16.58 10.12L15.90 9.85L14.83 9.85L14.42 9.98L13.75 10.38L13.08 11.06L10.79 11.06L9.58 9.98L9.17 9.85ZM8.43 10.86L9.04 10.79L9.24 10.99L9.24 11.80L9.44 12.00L10.25 12.00L10.45 12.20L10.45 12.88L10.25 13.08L9.44 13.08L9.24 13.28L9.24 14.09L9.11 14.22L8.30 14.22L8.10 13.08L7.09 13.01L7.09 12.20L7.29 12.00L8.10 12.00L8.30 11.80L8.30 10.99ZM14.89 10.86L15.50 10.79L15.84 11.12L15.84 11.53L15.57 11.93L14.96 12.00L14.62 11.66L14.62 11.12ZM1.77 11.87L1.43 12.20L1.43 12.61L1.77 12.94L4.06 12.94L4.39 12.61L4.39 12.20L4.06 11.87ZM13.95 11.93L14.42 12.00L14.76 12.47L14.62 12.88L14.15 13.21L13.48 13.08L13.28 12.74L13.41 12.20L13.62 12.00ZM19.94 11.87L19.61 12.20L19.61 12.74L19.94 12.94L22.23 12.94L22.57 12.34L22.43 12.07L22.10 11.87ZM15.97 12.07L16.71 12.00L16.91 12.20L17.05 12.74L16.91 13.01L16.71 13.08L16.58 13.21L16.04 13.21L15.70 12.88L15.70 12.34ZM11.39 12.61L12.40 12.54L12.61 12.74L12.47 13.14L11.60 13.21L11.26 13.01ZM14.89 13.28L15.50 13.21L15.84 13.55L15.84 13.95L15.57 14.36L14.96 14.42L14.62 14.09L14.62 13.55ZM11.87 14.69L11.19 14.96L10.72 15.43L10.59 15.84L12.00 15.90L13.21 15.90L13.28 15.57L13.14 15.30L12.54 14.83ZM2.85 15.10L2.51 15.43L2.98 15.90L3.32 15.43ZM20.75 15.10L20.41 15.43L20.68 15.84L20.88 15.90L21.22 15.43ZM5.13 17.65L4.73 17.92L4.53 18.26L4.66 18.93L5.00 19.00L5.27 19.00L5.61 18.66L5.34 17.86ZM18.73 17.65L18.39 18.80L18.60 19.00L19.13 19.00L19.47 18.66L19.47 18.26ZM11.73 19.00L11.39 19.34L11.39 21.36L11.73 21.83L12.13 21.83L12.47 21.49L12.47 19.34L12.13 19.00Z"/></svg>`,
  windows: `<svg class="plat-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.45L10.94 4.3v7.12H3V5.45zm0 13.1l7.94 1.15v-7.18H3v6.03zm8.82 1.28L21 21.2v-8.68h-9.18v7.31zm0-15.66v7.25H21V2.8l-9.18 1.37z"/></svg>`,
  android: `<svg class="plat-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.6 11.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 7.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C3.48 13.13 1.5 16.05 1.22 19.5h21.56c-.28-3.45-2.26-6.37-5.18-8.02zM7.5 16.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>`,
  web: `<svg class="plat-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="fill:none"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 0 0 18M12 3a14.5 14.5 0 0 1 0 18"/></svg>`
};

function withPlatformLogos(str) {
  if (!str) return '';
  // Защита от повторного вызова: разворачиваем уже вставленные .plat-inline и убираем  перед macOS/Mac/iOS,
  // но сохраняем символ () в юридических упоминаниях "логотип Apple ()" / "the Apple logo ()"
  let out = String(str)
    .replace(/<span class="plat-inline">[\s\S]*?<span>(Evenyou Studio|Windows|Android|WebGL)<\/span><\/span>/g, '$1')
    .replace(/\s*(?=(?:macOS|Mac|iOS)\b)/g, '');

  // Заменяем упоминания Evenyou Studio и платформ на иконку + название
  out = out.replace(/\b(Evenyou Studio|Windows|macOS|Mac|iOS|Android|WebGL)\b/g, match => {
    if (match === 'Evenyou Studio') {
      return `<span class="plat-inline">${PLATFORM_SVGS.evenyou}<span>Evenyou Studio</span></span>`;
    }
    if (match === 'Windows') {
      return `<span class="plat-inline">${PLATFORM_SVGS.windows}<span>Windows</span></span>`;
    }
    if (match === 'macOS' || match === 'Mac' || match === 'iOS') {
      return `${match}`;
    }
    if (match === 'Android') {
      return `<span class="plat-inline">${PLATFORM_SVGS.android}<span>Android</span></span>`;
    }
    if (match === 'WebGL') {
      return `<span class="plat-inline">${PLATFORM_SVGS.web}<span>WebGL</span></span>`;
    }
    return match;
  });
  return out;
}


/* ══════════════════════════════════════════════════════════════════════════
   3. ПЕРЕКЛЮЧАТЕЛЬ СВЕТЛОЙ / ТЁМНОЙ ТЕМЫ
   ══════════════════════════════════════════════════════════════════════════ */
/**
 * Применяет выбранную тему ('light' или 'dark') к тегу <html>
 * и меняет иконку луны/солнца на кнопке в шапке.
 */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  const moon = document.getElementById('theme-icon-moon');
  const sun = document.getElementById('theme-icon-sun');
  if (moon && sun) {
    moon.style.display = theme === 'dark' ? 'none' : 'block';
    sun.style.display = theme === 'dark' ? 'block' : 'none';
  }
}

/**
 * Вызывается при нажатии на кнопку смены темы в шапке сайта.
 * Сохраняет выбор пользователя в `localStorage` браузера.
 */
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  try {
    localStorage.setItem('evenyou-theme', next);
  } catch (e) {}
  applyTheme(next);
}

// При загрузке страницы сразу проверяем, сохранял ли пользователь тему ранее
(function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem('evenyou-theme');
  } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  }
})();


/* ══════════════════════════════════════════════════════════════════════════
   4. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ПЕРЕВОДА И ОБРАБОТКИ ДАННЫХ ИЗ `data.js`
   ══════════════════════════════════════════════════════════════════════════ */
/**
 * Возвращает текст на текущем выбранном языке (`currentLang`).
 * Понимает как строки ("SCREEN"), так и двуязычные объекты ({ en: "...", ru: "..." }).
 */
function t(val, fallbackEn = 'Not provided', fallbackRu = 'Не предоставлено') {
  if (val === null || val === undefined || val === '') {
    return currentLang === 'ru' ? fallbackRu : fallbackEn;
  }
  if (typeof val === 'object') {
    const text = val[currentLang] ?? val.en ?? val.ru ?? '';
    if (!text || text.trim() === '') {
      return currentLang === 'ru' ? fallbackRu : fallbackEn;
    }
    return text;
  }
  return String(val);
}

/**
 * Проверяет, пустое ли поле в `data.js` (чтобы вывести аккуратную плашку «Не предоставлено»).
 */
function isEmptyField(val) {
  if (val === null || val === undefined || val === '') return true;
  if (typeof val === 'object') {
    const text = val[currentLang] ?? val.en ?? val.ru ?? '';
    return !text || text.trim() === '';
  }
  return false;
}

/**
 * Проверяет, задана ли у проекта реальная картинка обложки (`banner.image`).
 * Если картинки нет — обложка в карточке и в модальном окне не показывается.
 */
function hasProjectCover(item) {
  return Boolean(item && item.banner && typeof item.banner.image === 'string' && item.banner.image.trim() !== '');
}

/**
 * Проверяет, задана ли у новости реальная картинка обложки (`cover.image`).
 * Если картинки нет — блок обложки в карточке новости и в окне статьи скрывается.
 */
function hasNewsCover(newsItem) {
  return Boolean(newsItem && newsItem.cover && typeof newsItem.cover.image === 'string' && newsItem.cover.image.trim() !== '');
}

/**
 * Генерирует CSS-стиль фона обложки для карточки проекта (используется только когда есть `banner.image`).
 */
function getBannerStyle(item) {
  if (hasProjectCover(item)) {
    return `background-image: url('${item.banner.image}');`;
  }
  return '';
}

/**
 * Генерирует CSS-стиль обложки для карточки новости (используется только когда есть `cover.image`).
 */
function getNewsCoverStyle(newsItem) {
  if (hasNewsCover(newsItem)) {
    return `background-image: url('${newsItem.cover.image}');`;
  }
  return '';
}

/**
 * Определяет студию-разработчика для конкретного проекта или новости.
 * Ищет ключ `item.studio` в справочнике `window.SITE_DATA.studios` (в `data.js`),
 * либо берёт прямые поля `author`, `authorLogo`, `authorSubtitle`, `authorBadge` из самого проекта.
 */
function getProjectStudioInfo(item) {
  const studiosMap = window.SITE_DATA.studios || {};
  const studioKey = item.studio || 'evenyou';
  const fromDict = studiosMap[studioKey] || studiosMap['evenyou'] || {};
  const defaultStudio = window.SITE_DATA.studio || {};

  let name = t(fromDict.name || defaultStudio.author || defaultStudio.name, 'Evenyou Studio', 'Evenyou Studio');
  if (item.author && !isEmptyField(item.author)) name = t(item.author);
  else if (item.specs?.author && !isEmptyField(item.specs.author)) name = t(item.specs.author);

  let logo = fromDict.logo || defaultStudio.logo || 'logo.png';
  if (item.authorLogo && item.authorLogo.trim() !== '') logo = item.authorLogo;

  let monochromeLogo = fromDict.monochromeLogo !== undefined ? fromDict.monochromeLogo : (logo === 'logo.png');
  if (item.authorMonochromeLogo !== undefined) monochromeLogo = item.authorMonochromeLogo;

  const subtitle = item.authorSubtitle
    ? t(item.authorSubtitle)
    : t(fromDict.subtitle || defaultStudio.location, 'Independent game & software studio', 'Независимая студия игр и ПО');

  const badge = item.authorBadge
    ? t(item.authorBadge)
    : t(fromDict.badge, 'In-House Production', 'In-House проект');

  return { name, logo, monochromeLogo, subtitle, badge };
}

function getProjectAuthor(item) {
  return getProjectStudioInfo(item).name;
}

function getProjectAuthorLogo(item) {
  return getProjectStudioInfo(item).logo;
}

/**
 * Возвращает крупный заголовок для обложки карточки (`coverTitle`).
 * Если `coverTitle` не задан, использует название проекта (`name`).
 */
function getCoverTitle(item) {
  if (item.coverTitle && !isEmptyField(item.coverTitle)) {
    return t(item.coverTitle);
  }
  return t(item.name);
}

/**
 * Возвращает читаемую метку цены/модели распространения ("Бесплатно", "4.99$", "Концепт", "Архив").
 */
function getProjectPriceLabel(item) {
  if (item.specs && !isEmptyField(item.specs.price)) {
    return t(item.specs.price);
  }
  if (item.pricing === 'paid' || item.status?.type === 'paid') {
    return currentLang === 'ru' ? 'Платная' : 'Paid';
  }
  if (item.pricing === 'free' || item.status?.type === 'free') {
    return currentLang === 'ru' ? 'Бесплатно' : 'Free';
  }
  if (item.status?.type === 'concept') {
    return currentLang === 'ru' ? 'Концепт' : 'Concept';
  }
  if (item.status?.type === 'arch' || item.pricing === 'arch') {
    return currentLang === 'ru' ? 'Архив' : 'Archived';
  }
  return null;
}

/**
 * Формирует подпись источника скачивания (например, "Game Jolt · gamejolt.com").
 */
function getSourceSubtitle(lnk) {
  let host = '';
  if (lnk.url) {
    try {
      host = new URL(lnk.url).hostname.replace(/^www\./, '');
    } catch (e) {
      host = lnk.url;
    }
  }
  if (lnk.source && !isEmptyField(lnk.source)) {
    return host ? `${t(lnk.source)} · ${host}` : t(lnk.source);
  }
  return host || (currentLang === 'ru' ? 'Внешний источник' : 'External source');
}


/* ══════════════════════════════════════════════════════════════════════════
   5. ГЕНЕРАЦИЯ HTML ДЛЯ КАРТОЧЕК ПРОЕКТОВ И НОВОСТЕЙ В КАТАЛОГЕ
   ══════════════════════════════════════════════════════════════════════════ */
/**
 * Создаёт HTML-код одной карточки игры или программы (`.today-card`).
 */
function renderCardHtml(item) {
  // Иконка в нижнем доке: картинка (если есть) или короткие буквы ("SCR", "RM" и т.д.)
  const iconContent = item.icon && item.icon.image
    ? `<img src="${item.icon.image}" alt="${t(item.name)}">`
    : (item.icon && item.icon.text ? item.icon.text : t(item.name).slice(0, 2).toUpperCase());

  const hasCover = hasProjectCover(item);
  const bannerStyle = getBannerStyle(item);
  // Подпись статуса (например «Бесплатно», «В разработке») — показывается при наведении (title)
  const statusText = t(item.status?.label, 'Open', 'Открыть');
  // Под названием — только платформы с логотипами (студия одна, поэтому её имя здесь не повторяем)
  const platformSub = item.specs?.platform ? withPlatformLogos(t(item.specs.platform)) : '';

  return `
    <article class="today-card ${item.featured && currentGameFilter === 'all' ? 'featured' : ''} ${hasCover ? '' : 'no-cover'} fade"
             data-project-id="${item.id}"
             title="${statusText}"
             onclick="openProjectById('${item.id}', this)">
      ${hasCover ? `<div class="today-card-art" style="${bannerStyle}"></div>` : ''}
      <div class="today-card-top">
        <span class="today-card-kicker">${withPlatformLogos(t(item.kicker))}</span>
        <div class="today-card-copy">
          <h3 class="today-card-title">${getCoverTitle(item)}</h3>
          ${isEmptyField(item.headline) ? '' : `<p class="today-card-headline">${t(item.headline)}</p>`}
        </div>
      </div>
      <div class="today-card-dock">
        <div class="today-dock-left">
          <div class="app-squircle" style="background:${item.icon?.bg || '#1d1d1f'};color:${item.icon?.color || '#fff'}">
            ${iconContent}
          </div>
          <div class="today-dock-info">
            <p class="today-dock-name">${t(item.name)}</p>
            <p class="today-dock-sub">${platformSub}</p>
          </div>
        </div>
        <span class="today-card-arrow" aria-hidden="true">↗</span>
      </div>
    </article>
  `;
}

/**
 * Создаёт HTML-код одной карточки новости в стиле Apple Newsroom (`.news-card`).
 * Если у новости нет картинки обложки (`cover.image`), блок `.news-card-media` не выводится.
 */
function renderNewsCardHtml(newsItem) {
  const isRu = currentLang === 'ru';
  const hasCover = hasNewsCover(newsItem);
  const coverStyle = getNewsCoverStyle(newsItem);
  const catClass = newsItem.category || 'announcement';
  const tagText = t(newsItem.tag, 'News', 'Новость');
  const dateText = t(newsItem.date, '', '');
  const readMoreLabel = isRu ? 'Читать' : 'Read';
  const linkedProject = newsItem.projectId ? findProjectById(newsItem.projectId) : null;

  // В нижней части карточки новости показываем связанный проект (если указан projectId) или имя студии
  let footerLeftHtml = '';
  if (linkedProject) {
    const miniIcon = linkedProject.icon && linkedProject.icon.image
      ? `<img src="${linkedProject.icon.image}" alt="${t(linkedProject.name)}">`
      : (linkedProject.icon?.text || t(linkedProject.name).slice(0, 2).toUpperCase());
    footerLeftHtml = `
      <div class="news-project-chip">
        <div class="news-project-mini-icon" style="background:${linkedProject.icon?.bg || '#1d1d1f'};color:${linkedProject.icon?.color || '#fff'}">
          ${miniIcon}
        </div>
        <span class="news-project-chip-name">${t(linkedProject.name)}</span>
      </div>
    `;
  } else {
    const studioInfo = getProjectStudioInfo(newsItem);
    footerLeftHtml = `<span class="news-project-chip-name">${withPlatformLogos(studioInfo.name)}</span>`;
  }

  const mediaKicker = newsItem.cover?.kicker
    ? `<span class="news-card-media-kicker">${withPlatformLogos(t(newsItem.cover.kicker))}</span>`
    : (linkedProject ? `<span class="news-card-media-kicker">${withPlatformLogos(t(linkedProject.kicker))}</span>` : '');

  const mediaHtml = hasCover ? `
      <div class="news-card-media">
        <div class="news-card-media-art" style="${coverStyle}"></div>
        ${mediaKicker}
      </div>` : '';

  return `
    <article class="news-card ${newsItem.featured && currentNewsFilter === 'all' ? 'featured' : ''} ${hasCover ? '' : 'no-cover'} fade"
             data-news-id="${newsItem.id}"
             onclick="openNewsById('${newsItem.id}', this)">
      ${mediaHtml}
      <div class="news-card-body">
        <div>
          <div class="news-meta-row">
            <span class="news-tag-pill ${catClass}">${tagText}</span>
            <span class="news-date">${dateText}</span>
          </div>
          <h3 class="news-card-title">${withPlatformLogos(t(newsItem.title))}</h3>
          <p class="news-card-summary">${withPlatformLogos(t(newsItem.summary))}</p>
        </div>
        <div class="news-card-footer">
          ${footerLeftHtml}
          <span class="news-read-more"><span>${readMoreLabel}</span><span>→</span></span>
        </div>
      </div>
    </article>
  `;
}


/* ══════════════════════════════════════════════════════════════════════════
   6. ФИЛЬТРАЦИЯ И ГЛАВНАЯ ФУНКЦИЯ ОТРИСОВКИ САЙТА (`renderSite`)
   ══════════════════════════════════════════════════════════════════════════ */
function setGameFilter(filter) {
  currentGameFilter = filter;
  document.querySelectorAll('#games-filter .filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  renderSite();
}

function setNewsFilter(filter) {
  currentNewsFilter = filter;
  document.querySelectorAll('#news-filter .filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  renderSite();
}

function matchesGameFilter(game, filter) {
  if (filter === 'all') return true;
  if (filter === 'paid') {
    return game.pricing === 'paid' || game.status?.type === 'paid';
  }
  if (filter === 'free') {
    return game.pricing === 'free' || game.status?.type === 'free';
  }
  if (filter === 'dev') {
    const labelEn = typeof game.status?.label === 'object' ? (game.status.label.en || '') : String(game.status?.label || '');
    return game.status?.type === 'dev' || labelEn.toLowerCase().includes('dev');
  }
  return true;
}

function matchesNewsFilter(newsItem, filter) {
  if (filter === 'all') return true;
  return newsItem.category === filter;
}

/**
 * Главная функция, которая заполняет весь сайт данными из `window.SITE_DATA` (`data.js`).
 * Вызывается при загрузке страницы, смене языка (EN/RU) или переключении фильтров.
 */
function renderSite() {
  const data = window.SITE_DATA;
  if (!data) return;

  // 1. Заполняем Главный экран (Hero) и раздел «Об Evenyou Studio» (#about)
  document.getElementById('hero-kicker').innerHTML = t(data.studio.heroKicker || data.studio.location);
  document.getElementById('hero-title').innerHTML = t(data.studio.heroTitle);
  document.getElementById('hero-sub').innerHTML = t(data.studio.heroSub);
  document.getElementById('about-title').innerHTML = t(data.studio.aboutTitle);

  // Абзацы описания студии
  document.getElementById('about-paragraphs').innerHTML = (data.studio.aboutParagraphs || [])
    .map(p => `<p>${withPlatformLogos(t(p))}</p>`)
    .join('');

  // 4 карточки преимуществ студии (Independent, Small-scale, Experimental, Cross-platform)
  document.getElementById('about-stats').innerHTML = (data.studio.stats || [])
    .map(s => `<div class="stat-cell"><div class="stat-num">${s.num}</div><div class="stat-label">${withPlatformLogos(t(s.label))}</div></div>`)
    .join('');

  // Ключевые направления разработки (Capabilities)
  const disciplinesEl = document.getElementById('about-disciplines');
  if (disciplinesEl) {
    disciplinesEl.innerHTML = (data.studio.disciplines || []).map(d => `
      <div class="discipline-card fade">
        <p class="discipline-tag">${t(d.tag)}</p>
        <h3 class="discipline-title">${t(d.title)}</h3>
        <p class="discipline-desc">${withPlatformLogos(t(d.desc))}</p>
      </div>
    `).join('');
  }

  // Хронология развития по годам (Timeline)
  const timelineEl = document.getElementById('about-timeline');
  if (timelineEl) {
    timelineEl.innerHTML = (data.studio.timeline || []).map(row => `
      <div class="timeline-row fade">
        <div class="timeline-period">${t(row.period)}</div>
        <div>
          <p class="timeline-title">${withPlatformLogos(t(row.title))}</p>
          <p class="timeline-desc">${withPlatformLogos(t(row.desc))}</p>
        </div>
      </div>
    `).join('');
  }

  // Стек технологий
  document.getElementById('about-tech').innerHTML = (data.studio.techStack || [])
    .map(tag => `<span class="tech-tag">${withPlatformLogos(tag)}</span>`)
    .join('');

  // Контактный email
  if (data.studio.email) {
    const emailEl = document.getElementById('contact-email');
    emailEl.href = `mailto:${data.studio.email}`;
    emailEl.textContent = data.studio.email;
  }

  // 2. Отрисовываем сетку «Наши игры» (#games-grid)
  const allGames = data.games || [];
  const filteredGames = allGames.filter(g => matchesGameFilter(g, currentGameFilter));
  document.getElementById('games-grid').innerHTML = filteredGames.map(renderCardHtml).join('');

  // 3. Отрисовываем сетку «Программы и ОС» (#software-grid)
  const allSoftware = data.software || data.concepts || [];
  document.getElementById('software-grid').innerHTML = allSoftware.map(renderCardHtml).join('');

  // 4. Отрисовываем сетку «Новости и девлог» (#news-grid)
  const newsGridEl = document.getElementById('news-grid');
  if (newsGridEl) {
    const allNews = data.news || [];
    const filteredNews = allNews.filter(n => matchesNewsFilter(n, currentNewsFilter));
    newsGridEl.innerHTML = filteredNews.map(renderNewsCardHtml).join('');
  }

  // 5. Переводим все статичные заголовки, подвал и кнопки в HTML, у которых есть атрибуты data-ru / data-en
  document.querySelectorAll('[data-' + currentLang + ']').forEach(el => {
    const val = el.getAttribute('data-' + currentLang);
    if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
      el.value = val;
      el.textContent = val;
    } else {
      el.innerHTML = withPlatformLogos(val);
    }
  });

  // Запускаем отслеживание плавного появления карточек при скролле
  observeFades();

  // Если в момент смены языка было открыто модальное окно — обновляем его текст на лету
  if (activeProject) {
    renderModalInnerHtml(activeProject);
  } else if (activeNews) {
    renderNewsModalInnerHtml(activeNews);
  }
}

/**
 * Ищет проект (игру или программу) по его уникальному `id`.
 */
function findProjectById(id) {
  const data = window.SITE_DATA;
  return (data.games || []).find(g => g.id === id) ||
         (data.software || []).find(s => s.id === id) ||
         (data.concepts || []).find(c => c.id === id);
}

/**
 * Ищет новость по её уникальному `id`.
 */
function findNewsById(id) {
  const data = window.SITE_DATA;
  return (data.news || []).find(n => n.id === id);
}


/* ══════════════════════════════════════════════════════════════════════════
   7. ОТРИСОВКА ВНУТРЕННЕГО СОДЕРЖИМОГО МОДАЛЬНОГО ОКНА ПРОЕКТА И НОВОСТИ
   ══════════════════════════════════════════════════════════════════════════ */
/**
 * Заполняет модальное окно полной информацией о выбранной игре или программе.
 */
function renderModalInnerHtml(project) {
  const isRu = currentLang === 'ru';
  const notProvided = isRu ? 'Не предоставлено' : 'Not provided';

  const iconContent = project.icon && project.icon.image
    ? `<img src="${project.icon.image}" alt="${t(project.name)}">`
    : (project.icon && project.icon.text ? project.icon.text : t(project.name).slice(0, 2).toUpperCase());

  const hasCover = hasProjectCover(project);
  const bannerStyle = getBannerStyle(project);
  const modalCardEl = document.getElementById('appstore-modal');
  if (modalCardEl) modalCardEl.classList.toggle('modal-no-cover', !hasCover);
  const studioInfo = getProjectStudioInfo(project);
  const authorName = studioInfo.name;
  const authorLogo = studioInfo.logo;
  const priceLabel = getProjectPriceLabel(project);
  const statusLabel = project.status?.label ? t(project.status.label) : notProvided;

  // Кнопки действия в шапке окна
  const links = project.links || project.downloads || [];
  let actionsHtml = '';
  if (links.length > 0) {
    actionsHtml = links.map(lnk => `
      <a href="${lnk.url}" target="_blank" rel="noopener noreferrer" class="modal-action-link">
        <span>${t(lnk.label, 'Open', 'Открыть')}</span>
        <span>↗</span>
      </a>
    `).join('');
  } else {
    actionsHtml = `<span class="modal-status-tag">${statusLabel}</span>`;
  }

  const specs = project.specs || {};
  const downloadSize = specs.downloadSize ?? specs.size ?? null;
  const installSize = specs.installSize ?? null;

  // Вспомогательная функция для одной ячейки в верхней ленте характеристик (.specs-ribbon)
  const renderSpec = (labelEn, labelRu, val, subText = '', withLogos = false) => {
    const empty = isEmptyField(val);
    const renderedVal = empty ? notProvided : (withLogos ? withPlatformLogos(t(val)) : t(val));
    return `
      <div class="spec-item">
        <span class="spec-label">${isRu ? labelRu : labelEn}</span>
        <span class="spec-value ${empty ? 'empty-val' : ''}">${renderedVal}</span>
        ${subText ? `<span class="spec-sub">${subText}</span>` : ''}
      </div>
    `;
  };

  // Блок скриншотов
  const shots = project.screenshots || [];
  const screenshotsHtml = shots.length === 0
    ? `<div class="empty-inline">${isRu ? 'Скриншоты не предоставлены' : 'Screenshots not provided'}</div>`
    : `<div class="screenshots-track">
        ${shots.map(shot => {
          const src = typeof shot === 'string' ? shot : shot.src;
          return `<div class="screenshot-item"><img src="${src}" alt="${t(project.name)}" loading="lazy"></div>`;
        }).join('')}
       </div>`;

  // Блок описания
  const descHtml = isEmptyField(project.description)
    ? `<div class="empty-inline">${isRu ? 'Описание не предоставлено' : 'Description not provided'}</div>`
    : `<p class="modal-text">${withPlatformLogos(t(project.description))}</p>`;

  // Блок ключевых особенностей
  const feats = project.features || [];
  const featuresHtml = feats.length === 0
    ? `<div class="empty-inline">${isRu ? 'Особенности не предоставлены' : 'Features not provided'}</div>`
    : `<div class="modal-features">
        ${feats.map(f => `
          <div class="modal-feat-cell">
            <p class="modal-feat-title">${withPlatformLogos(t(f.title, notProvided, notProvided))}</p>
            <p class="modal-feat-desc">${withPlatformLogos(t(f.desc, notProvided, notProvided))}</p>
          </div>
        `).join('')}
       </div>`;

  // Блок статуса разработки
  const devHtml = isEmptyField(project.devNote)
    ? `<div class="empty-inline">${isRu ? 'Статус разработки не предоставлен' : 'Development status not provided'}</div>`
    : `<p class="modal-text">${withPlatformLogos(t(project.devNote))}</p>`;

  // Блок ссылок на скачивание
  const downloadSourcesHtml = links.length === 0
    ? `<div class="empty-inline">${isRu ? 'Источники загрузки не предоставлены' : 'Download sources not provided'}</div>`
    : `<div class="download-sources-list">
        ${links.map(lnk => `
          <a href="${lnk.url}" target="_blank" rel="noopener noreferrer" class="download-source-card">
            <div class="download-source-left">
              <div class="download-source-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <div class="download-source-info">
                <p class="download-source-title">${t(lnk.label, 'Download / Open', 'Скачать / Перейти')}</p>
                <p class="download-source-sub">${getSourceSubtitle(lnk)}</p>
              </div>
            </div>
            <span class="download-source-action">
              <span>${isRu ? 'Перейти' : 'Open Link'}</span>
              <span>↗</span>
            </span>
          </a>
        `).join('')}
       </div>`;

  // Юридическая сноска в самом конце открытой карточки (мелким шрифтом, как про Apple, Microsoft, Google):
  // - если у проекта задано поле `note: { en: "...", ru: "..." }` в data.js, оно выводится абзацем выше;
  // - общий правовой текст берётся из `SITE_DATA.studio.legalNote` в data.js.
  const studioLegalText = !isEmptyField(window.SITE_DATA?.studio?.legalNote)
    ? t(window.SITE_DATA.studio.legalNote)
    : (isRu
        ? 'Apple, логотип Apple (), Mac, macOS и iOS являются товарными знаками компании Apple Inc. Windows — товарный знак корпорации Microsoft. Android — товарный знак Google LLC.'
        : 'Apple, the Apple logo (), Mac, macOS, and iOS are trademarks of Apple Inc. Windows is a trademark of Microsoft Corporation. Android is a trademark of Google LLC.');

  const projectNoteLine = isEmptyField(project.note)
    ? ''
    : `<p class="modal-legal-line">${withPlatformLogos(t(project.note))}</p>`;

  const legalFooterHtml = `
    <div class="modal-legal-note">
      ${projectNoteLine}
      <p class="modal-legal-line">${withPlatformLogos(studioLegalText)}</p>
    </div>
  `;

  // Вспомогательная функция для строки в нижней таблице характеристик (.info-table)
  const renderInfoRow = (labelEn, labelRu, val, withLogos = false) => {
    const empty = isEmptyField(val);
    const renderedVal = empty ? notProvided : (withLogos ? withPlatformLogos(t(val)) : t(val));
    return `
      <div class="info-row">
        <span class="info-row-label">${isRu ? labelRu : labelEn}</span>
        <span class="info-row-val ${empty ? 'empty-val' : ''}">${renderedVal}</span>
      </div>
    `;
  };

  document.getElementById('appstore-modal-content').innerHTML = `
    <div class="modal-hero ${hasCover ? '' : 'no-cover'}">
      ${hasCover ? `<div class="modal-hero-art" style="${bannerStyle}"></div>` : ''}
      <div class="modal-hero-inner">
        <div class="modal-hero-top">
          <p class="modal-kicker">${withPlatformLogos(t(project.kicker))}</p>
          <h2 class="modal-title">${getCoverTitle(project)}</h2>
          <p class="modal-headline">${t(project.headline)}</p>
        </div>
        <div class="modal-identity-bar">
          <div class="modal-identity-left">
            <div class="modal-icon" style="background:${project.icon?.bg || '#1d1d1f'};color:${project.icon?.color || '#fff'}">
              ${iconContent}
            </div>
            <div class="modal-author-meta">
              <span class="modal-author-name">${t(project.name)}</span>
              <span class="modal-author-role">${withPlatformLogos(authorName)} · ${withPlatformLogos(t(specs.platform, 'Cross-platform', 'Кроссплатформа'))}</span>
            </div>
          </div>
          <div class="modal-header-actions">
            ${actionsHtml}
          </div>
        </div>
      </div>
    </div>

    <div class="modal-body">
      <!-- Лента ключевых фактов в стиле App Store (.facts-strip): цена, возраст, жанр, платформа, год, язык.
           Каждая ячейка — подпись сверху и значение ниже. Остальные характеристики — в таблице «Информация» внизу. -->
      <div class="facts-strip">
        ${renderSpec('Price', 'Цена', priceLabel)}
        ${renderSpec('Age', 'Возраст', specs.age)}
        ${renderSpec('Genre', 'Жанр', specs.genre)}
        ${renderSpec('Platform', 'Платформа', specs.platform, '', true)}
        ${renderSpec('Year', 'Год', specs.year)}
        ${renderSpec('Language', 'Язык', specs.language)}
      </div>

      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'Скриншоты и превью' : 'Screenshots & Preview'}</p>
        ${screenshotsHtml}
      </div>

      <!-- Блок «О проекте»: описание, под ним — заметка о статусе разработки (если есть) -->
      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'О проекте' : 'About'}</p>
        ${descHtml}
        ${isEmptyField(project.devNote) ? '' : `<p class="modal-dev-note">${withPlatformLogos(t(project.devNote))}</p>`}
      </div>

      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'Особенности' : 'Features'}</p>
        ${featuresHtml}
      </div>

      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'Разработчик' : 'Developer'}</p>
        <div class="author-segment-card">
          <div class="author-segment-left">
            <div class="author-logo-box ${studioInfo.monochromeLogo === false ? 'color-logo' : ''}">
              <img src="${authorLogo}" alt="${authorName}">
            </div>
            <div class="author-segment-info">
              <h5>${authorName}</h5>
              <p>${studioInfo.subtitle}</p>
            </div>
          </div>
          <span class="author-segment-badge">${studioInfo.badge}</span>
        </div>
      </div>

      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'Варианты загрузки (источники)' : 'Download Options (Sources)'}</p>
        ${downloadSourcesHtml}
      </div>

      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'Все характеристики' : 'Specifications'}</p>
        <div class="info-table">
          ${renderInfoRow('Developer', 'Разработчик', authorName, true)}
          ${renderInfoRow('Status', 'Статус проекта', statusLabel)}
          ${renderInfoRow('Price Model', 'Модель распространения', priceLabel)}
          ${renderInfoRow('Genre / Category', 'Жанр / Категория', specs.genre)}
          ${renderInfoRow('Platform', 'Платформа', specs.platform, true)}
          ${renderInfoRow('Release Year', 'Год релиза', specs.year)}
          ${renderInfoRow('Languages', 'Языки интерфейса', specs.language)}
          ${renderInfoRow('Age Rating', 'Возрастной рейтинг', specs.age)}
          ${renderInfoRow('Download Size', 'Вес для скачивания', downloadSize)}
          ${renderInfoRow('Install Size', 'Вес для установки', installSize)}
        </div>
        ${legalFooterHtml}
      </div>
    </div>
  `;
}

/**
 * Заполняет модальное окно полным текстом выбранной новости (`news`).
 */
function renderNewsModalInnerHtml(newsItem) {
  const isRu = currentLang === 'ru';
  const hasCover = hasNewsCover(newsItem);
  const coverStyle = getNewsCoverStyle(newsItem);
  const modalCardEl = document.getElementById('appstore-modal');
  if (modalCardEl) modalCardEl.classList.toggle('modal-no-cover', !hasCover);
  const studioInfo = getProjectStudioInfo(newsItem);
  const tagText = t(newsItem.tag, 'News', 'Новость');
  const dateText = t(newsItem.date, '', '');
  const readTimeText = newsItem.readTime ? ` · ${t(newsItem.readTime)}` : '';
  const linkedProject = newsItem.projectId ? findProjectById(newsItem.projectId) : null;

  // Собираем абзацы и подзаголовки статьи
  const paragraphs = newsItem.body || [];
  const articleHtml = paragraphs.map(block => {
    if (block.heading) {
      return `
        <h4 class="news-article-subhead">${withPlatformLogos(t(block.heading))}</h4>
        <p class="modal-text">${withPlatformLogos(t(block.text))}</p>
      `;
    }
    return `<p class="modal-text">${withPlatformLogos(t(block))}</p>`;
  }).join('');

  // Если к новости прикреплены скриншоты — рендерим галерею
  const shots = newsItem.screenshots || [];
  const screenshotsSecHtml = shots.length === 0 ? '' : `
    <div class="modal-sec">
      <p class="modal-sec-label">${isRu ? 'Изображения и кадры' : 'Images & Captures'}</p>
      <div class="screenshots-track">
        ${shots.map(shot => {
          const src = typeof shot === 'string' ? shot : shot.src;
          return `<div class="screenshot-item"><img src="${src}" alt="${t(newsItem.title)}" loading="lazy"></div>`;
        }).join('')}
      </div>
    </div>
  `;

  // Если в новости указан projectId — выводим карточку быстрого перехода к проекту
  let relatedProjectHtml = '';
  if (linkedProject) {
    const pIcon = linkedProject.icon && linkedProject.icon.image
      ? `<img src="${linkedProject.icon.image}" alt="${t(linkedProject.name)}">`
      : (linkedProject.icon?.text || t(linkedProject.name).slice(0, 2).toUpperCase());
    const pPlat = linkedProject.specs?.platform ? withPlatformLogos(t(linkedProject.specs.platform)) : '';
    relatedProjectHtml = `
      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'Связанный проект' : 'Related Project'}</p>
        <div class="related-project-card" onclick="switchToProjectFromNews('${linkedProject.id}')">
          <div class="today-dock-left">
            <div class="app-squircle" style="background:${linkedProject.icon?.bg || '#1d1d1f'};color:${linkedProject.icon?.color || '#fff'}">
              ${pIcon}
            </div>
            <div class="download-source-info">
              <p class="download-source-title">${t(linkedProject.name)}</p>
              <p class="download-source-sub">${withPlatformLogos(studioInfo.name)}${pPlat ? ' · ' + pPlat : ''}</p>
            </div>
          </div>
          <span class="download-source-action">
            <span>${isRu ? 'Открыть проект' : 'Open Project'}</span>
            <span>→</span>
          </span>
        </div>
      </div>
    `;
  }

  // Внешние ссылки внутри статьи (если указаны)
  const links = newsItem.links || [];
  const linksSecHtml = links.length === 0 ? '' : `
    <div class="modal-sec">
      <p class="modal-sec-label">${isRu ? 'Ссылки по теме' : 'Related Links'}</p>
      <div class="download-sources-list">
        ${links.map(lnk => `
          <a href="${lnk.url}" target="_blank" rel="noopener noreferrer" class="download-source-card">
            <div class="download-source-left">
              <div class="download-source-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <div class="download-source-info">
                <p class="download-source-title">${t(lnk.label, 'Open Link', 'Перейти')}</p>
                <p class="download-source-sub">${getSourceSubtitle(lnk)}</p>
              </div>
            </div>
            <span class="download-source-action">
              <span>${isRu ? 'Перейти' : 'Open Link'}</span>
              <span>↗</span>
            </span>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('appstore-modal-content').innerHTML = `
    <div class="modal-hero ${hasCover ? '' : 'no-cover'}">
      ${hasCover ? `<div class="modal-hero-art" style="${coverStyle}"></div>` : ''}
      <div class="modal-hero-inner">
        <div class="modal-hero-top" style="max-width: 720px;">
          <p class="modal-kicker">${tagText} · ${dateText}${readTimeText}</p>
          <h2 class="modal-title" style="font-size: clamp(1.55rem, 3.2vw, 2.25rem); line-height: 1.15;">${withPlatformLogos(t(newsItem.title))}</h2>
          <p class="modal-headline">${withPlatformLogos(t(newsItem.summary))}</p>
        </div>
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-sec news-article-body">
        ${articleHtml}
      </div>

      ${screenshotsSecHtml}
      ${relatedProjectHtml}
      ${linksSecHtml}

      <div class="modal-sec">
        <p class="modal-sec-label">${isRu ? 'Опубликовано студией' : 'Published by'}</p>
        <div class="author-segment-card">
          <div class="author-segment-left">
            <div class="author-logo-box ${studioInfo.monochromeLogo === false ? 'color-logo' : ''}">
              <img src="${studioInfo.logo}" alt="${studioInfo.name}">
            </div>
            <div class="author-segment-info">
              <h5>${studioInfo.name}</h5>
              <p>${studioInfo.subtitle}</p>
            </div>
          </div>
          <span class="author-segment-badge">${dateText}</span>
        </div>
        <div class="modal-legal-note">
          ${isEmptyField(newsItem.note) ? '' : `<p class="modal-legal-line">${withPlatformLogos(t(newsItem.note))}</p>`}
          <p class="modal-legal-line">
            ${withPlatformLogos(!isEmptyField(window.SITE_DATA?.studio?.legalNote)
              ? t(window.SITE_DATA.studio.legalNote)
              : (isRu
                  ? 'Apple, логотип Apple (), Mac, macOS и iOS являются товарными знаками компании Apple Inc. Windows — товарный знак корпорации Microsoft. Android — товарный знак Google LLC.'
                  : 'Apple, the Apple logo (), Mac, macOS, and iOS are trademarks of Apple Inc. Windows is a trademark of Microsoft Corporation. Android is a trademark of Google LLC.'))}
          </p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Переключает уже открытое окно новости сразу на страницу связанного проекта.
 */
function switchToProjectFromNews(projectId) {
  const project = findProjectById(projectId);
  if (!project) return;
  activeNews = null;
  activeProject = project;
  const scrollBox = document.getElementById('appstore-modal-scroll');
  scrollBox.scrollTo({ top: 0, behavior: 'smooth' });
  renderModalInnerHtml(project);
}


/* ══════════════════════════════════════════════════════════════════════════
   8. ПЛАВНАЯ FLIP-АНИМАЦИЯ ОТКРЫТИЯ И ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА
   ══════════════════════════════════════════════════════════════════════════
   Как это работает:
   1. Мы считываем точные экранные координаты нажатой карточки (`getBoundingClientRect()`).
   2. Ставим модальное окно ровно поверх карточки с её размерами.
   3. В следующем кадре плавно анимируем окно в центр экрана до размеров `860x820`.
   4. При закрытии возвращаем окно обратно в координаты исходной карточки.
   ══════════════════════════════════════════════════════════════════════════ */
function getTargetModalGeometry() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (vw <= 640) {
    return { top: 0, left: 0, width: vw, height: vh, borderRadius: 0 };
  }
  const width = Math.min(860, vw - 48);
  const height = Math.min(820, vh - 48);
  const left = Math.round((vw - width) / 2);
  const top = Math.round((vh - height) / 2);
  return { top, left, width, height, borderRadius: 26 };
}

function animateOpenModalFromCard(sourceCardEl) {
  const modal = document.getElementById('appstore-modal');
  const scrollBox = document.getElementById('appstore-modal-scroll');
  const backdrop = document.getElementById('appstore-backdrop');

  const startRect = sourceCardEl
    ? sourceCardEl.getBoundingClientRect()
    : { top: window.innerHeight / 2 - 120, left: window.innerWidth / 2 - 180, width: 360, height: 240 };

  isAnimatingModal = true;
  document.body.classList.add('modal-open');

  if (sourceCardEl) {
    sourceCardEl.classList.add('is-expanding-source');
  }

  modal.style.transition = 'none';
  modal.classList.remove('content-visible', 'is-scrollable');
  modal.classList.add('is-open');
  scrollBox.scrollTop = 0;

  modal.style.top = `${startRect.top}px`;
  modal.style.left = `${startRect.left}px`;
  modal.style.width = `${startRect.width}px`;
  modal.style.height = `${startRect.height}px`;
  modal.style.borderRadius = '26px';

  // Принудительный reflow браузера перед стартом CSS-перехода
  void modal.offsetWidth;

  const target = getTargetModalGeometry();
  backdrop.classList.add('active');

  modal.style.transition = `
    top 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    left 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    width 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.52s cubic-bezier(0.22, 1, 0.36, 1),
    border-radius 0.52s cubic-bezier(0.22, 1, 0.36, 1)
  `;

  modal.style.top = `${target.top}px`;
  modal.style.left = `${target.left}px`;
  modal.style.width = `${target.width}px`;
  modal.style.height = `${target.height}px`;
  modal.style.borderRadius = `${target.borderRadius}px`;

  modal.classList.add('content-visible');

  setTimeout(() => {
    modal.classList.add('is-scrollable');
    isAnimatingModal = false;
  }, 500);
}

/**
 * Открывает модальное окно проекта (вызывается при клике на `.today-card`).
 */
function openProjectById(projectId, sourceEl) {
  if (isAnimatingModal) return;
  const project = findProjectById(projectId);
  if (!project) return;

  activeProject = project;
  activeNews = null;
  activeSourceCardEl = sourceEl ? sourceEl.closest('.today-card') || sourceEl : null;

  renderModalInnerHtml(project);
  animateOpenModalFromCard(activeSourceCardEl);
}

/**
 * Открывает модальное окно новости (вызывается при клике на `.news-card`).
 */
function openNewsById(newsId, sourceEl) {
  if (isAnimatingModal) return;
  const newsItem = findNewsById(newsId);
  if (!newsItem) return;

  activeNews = newsItem;
  activeProject = null;
  activeSourceCardEl = sourceEl ? sourceEl.closest('.news-card') || sourceEl : null;

  renderNewsModalInnerHtml(newsItem);
  animateOpenModalFromCard(activeSourceCardEl);
}

/**
 * Плавно закрывает открытое модальное окно обратно в карточку.
 */
function closeProjectModal() {
  if ((!activeProject && !activeNews) || isAnimatingModal) return;
  isAnimatingModal = true;

  const modal = document.getElementById('appstore-modal');
  const scrollBox = document.getElementById('appstore-modal-scroll');
  const backdrop = document.getElementById('appstore-backdrop');

  modal.classList.remove('content-visible', 'is-scrollable');
  scrollBox.scrollTo({ top: 0, behavior: 'instant' });
  backdrop.classList.remove('active');

  let endRect = null;
  if (activeSourceCardEl && document.body.contains(activeSourceCardEl)) {
    endRect = activeSourceCardEl.getBoundingClientRect();
  }

  if (endRect && endRect.bottom > 0 && endRect.top < window.innerHeight) {
    modal.style.transition = `
      top 0.44s cubic-bezier(0.22, 1, 0.36, 1),
      left 0.44s cubic-bezier(0.22, 1, 0.36, 1),
      width 0.44s cubic-bezier(0.22, 1, 0.36, 1),
      height 0.44s cubic-bezier(0.22, 1, 0.36, 1),
      border-radius 0.44s cubic-bezier(0.22, 1, 0.36, 1)
    `;
    modal.style.top = `${endRect.top}px`;
    modal.style.left = `${endRect.left}px`;
    modal.style.width = `${endRect.width}px`;
    modal.style.height = `${endRect.height}px`;
    modal.style.borderRadius = '24px';
  } else {
    modal.style.transition = 'transform 0.3s ease, opacity 0.28s ease';
    modal.style.transform = 'scale(0.95)';
    modal.style.opacity = '0';
  }

  setTimeout(() => {
    modal.classList.remove('is-open');
    modal.style.transition = 'none';
    modal.style.transform = '';
    modal.style.opacity = '';
    if (activeSourceCardEl) {
      activeSourceCardEl.classList.remove('is-expanding-source');
    }
    document.body.classList.remove('modal-open');
    activeProject = null;
    activeNews = null;
    activeSourceCardEl = null;
    isAnimatingModal = false;
  }, 430);
}

// Подстраиваем размеры открытого окна при изменении размера браузера
window.addEventListener('resize', () => {
  if ((!activeProject && !activeNews) || isAnimatingModal) return;
  const modal = document.getElementById('appstore-modal');
  const target = getTargetModalGeometry();
  modal.style.transition = 'none';
  modal.style.top = `${target.top}px`;
  modal.style.left = `${target.left}px`;
  modal.style.width = `${target.width}px`;
  modal.style.height = `${target.height}px`;
  modal.style.borderRadius = `${target.borderRadius}px`;
});

// Закрытие модального окна по клавише Escape
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && (activeProject || activeNews)) {
    closeProjectModal();
  }
});


/* ══════════════════════════════════════════════════════════════════════════
   9. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА И ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ ПРОКРУТКЕ
   ══════════════════════════════════════════════════════════════════════════ */
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.textContent.toLowerCase() === lang)
  );
  renderSite();
}

let fadeObserver = null;
function observeFades() {
  if (!fadeObserver) {
    fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          fadeObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });
  }
  document.querySelectorAll('.fade:not(.in)').forEach((el, i) => {
    el.style.transitionDelay = ((i % 4) * 55) + 'ms';
    fadeObserver.observe(el);
  });
}

// Запускаем первичную отрисовку сайта, когда структура HTML загружена
document.addEventListener('DOMContentLoaded', renderSite);
