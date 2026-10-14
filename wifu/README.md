# Wifu — маркетинговый сайт

Сайт сервиса свадебных сайтов и онлайн-приглашений Wifu (WIFU YAZILIM VE ORGANİZASYON HİZMETLERİ A.Ş.).
Astro + Tailwind CSS, полностью статический. Турецкий — основной язык (`/`), английский — `/en/`.

| Страница | TR (основной) | EN |
| --- | --- | --- |
| Главная (лендинг) | `/` | `/en/` |
| Демо свадебного сайта пары | `/demo/` | `/en/demo/` |
| Демо онлайн-приглашения | `/demo/invite/` | `/en/demo/invite/` |
| Цены | `/pricing/` | `/en/pricing/` |
| Политика конфиденциальности / условия | `/privacy/`, `/terms/` | `/en/privacy/`, `/en/terms/` |
| «Спасибо» после формы | `/thanks/` | `/en/thanks/` |

У демо-сайта и демо-приглашения есть три темы оформления: Minimal, Bahçe (сад), Şehir (город) (переключатель внизу экрана).
Тему можно открыть сразу по ссылке: `/demo/invite/?theme=garden`.

## Запуск локально

```bash
cd wifu
npm install
npm run dev        # http://localhost:4321
npm run build      # готовый сайт в wifu/dist/
npm run preview    # посмотреть собранный сайт
npm run check      # проверка типов
```

Нужен Node 20+ (лучше 22).

> Сайт лежит в папке `wifu/`, потому что в корне репозитория находится другой сайт (LaunchOnNato).
> Во всех командах и настройках хостинга рабочая папка — `wifu`.

## Деплой

Домен: **wifupad.com** (задан в `astro.config.mjs`, можно переопределить переменной окружения `SITE_URL`)
От домена зависят canonical-ссылки, Open Graph, `sitemap-index.xml` и `robots.txt`.

**Ваш хостинг по SSH (GitHub Actions, настроено):** `.github/workflows/deploy-wifu.yml` собирает сайт и заливает
`wifu/dist/` в `domains/wifupad.com/public_html` при каждом пуше в ветку `claude/project-thread-jsoiyz`, если менялась
папка `wifu/`. Запустить вручную: Actions → Deploy Wifu → Run workflow.
Один раз добавьте секреты в Settings → Secrets and variables → Actions → New repository secret:
`WIFU_SSH_HOST`, `WIFU_SSH_PORT`, `WIFU_SSH_USER`, `WIFU_SSH_PASSWORD` (отдельные от секретов сайта LaunchOnNato).
Другую папку или адрес можно задать переменными `WIFU_DEPLOY_PATH` и `WIFU_SITE_URL`. В папку сайта natolaunch деплой не зальёт.

Форма на этом хостинге: сейчас форма «Напишите нам» открывает почтовую программу посетителя с готовым письмом на info@wifupad.com (см. «Формы»).

**Netlify (проще всего — формы работают сразу):**
1. Add new site → Import from Git → этот репозиторий.
2. **Base directory: `wifu`**. Build command и publish directory подтянутся из `wifu/netlify.toml` (`npm run build` → `dist`).
3. Site configuration → Environment variables → `SITE_URL` = ваш домен.
4. После первого деплоя откройте *Forms*: появятся формы `contact` и `rsvpDemo`. В *Forms → Form notifications* включите письма на почту.

**Vercel:**
1. Add New → Project → этот репозиторий.
2. **Root Directory: `wifu`**. Фреймворк Astro определится сам.
3. Environment Variables → `SITE_URL`.
4. Netlify Forms на Vercel не работают — переключите формы на Formspree (ниже).

## Формы (контакт и RSVP)

Настройки в `src/config.ts` → `forms.provider`, отдельно для каждой формы:

- `contact: 'mailto'` (сейчас) — кнопка «Gönder» открывает почтовую программу посетителя с готовым письмом
  на `brand.email`. Работает на любом хостинге, но посетителю нужно нажать «Отправить» в своей почте.
- `'formspree'` — письма приходят вам без участия почты посетителя. Создайте форму на https://formspree.io,
  вставьте адрес в `forms.formspree.contact` (вида `https://formspree.io/f/abcdwxyz`) и поставьте `contact: 'formspree'`.
- `'netlify'` — Netlify Forms, только если сайт на Netlify.
- `rsvpDemo: 'none'` (сейчас) — демо-RSVP ничего не отправляет, просто показывает «Спасибо».

## Где что менять

| Что | Файл |
| --- | --- |
| Турецкие тексты (основной язык) | `src/i18n/tr.ts` |
| Английские тексты | `src/i18n/en.ts` |
| Название, юрлицо, адрес, email, владельцы, соцсети, ссылка «Создать сайт», формы | `src/config.ts` |
| Дата демо-свадьбы (обратный отсчёт) | `src/config.ts` → `demoWeddingDate` |
| Домен | `SITE_URL` или `astro.config.mjs` |
| Цвета и шрифты сайта | `src/styles/global.css` (блок `@theme`) |
| Темы демо-сайта и приглашения | `src/styles/demo-themes.css` |
| Секции главной | `src/components/home/*.astro` |
| Мокапы телефона, ноутбука, сводки RSVP | `src/components/mockups/*.astro` |
| Страницы целиком | `src/views/*.astro` |
| Картинки | `public/images/` |
| Иконка сайта | `public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` |

Любой текст, который начинается с `TODO`, показывается на странице пунктирной плашкой — так видно, что ещё не заполнено.
Найти все: `grep -rn "TODO" src astro.config.mjs`.

Шрифты: **Gloock** для заголовков и **Figtree** для текста (оба поддерживают турецкие ğ, ş, ı, İ), подключены локально
через Fontsource, без запросов к Google.

## Картинки

Фото пар в `public/images/` — свободные фото с Unsplash (лицензия Unsplash, указание автора не требуется).
Шаблоны приглашений `invite-design-0X.jpg` нарисованы. Чтобы поставить свои фото, замените файл **под тем же именем** и запустите:

```bash
npm run images:fit
```

Скрипт обрежет и уменьшит фото до нужного размера и пережмёт их, чтобы Lighthouse оставался 90+.
Пересоздать недостающие заглушки: `npm run images` (с `-- --force` перерисует все, включая ваши фото).

| Файл | Размер · пропорции | Что на нём |
| --- | --- | --- |
| `hero-couple.jpg` | 1200×1500 · 4:5 | Живое фото пары, главный экран (поверх него телефон с сайтом) |
| `rsvp-couple.jpg` | 1200×1500 · 4:5 | Фото пары или гостей для блока RSVP |
| `guests-celebration.jpg` | 1200×900 · 4:3 | Гости и праздник |
| `invite-design-01.jpg` … `06.jpg` | 800×1120 · 5:7 | Скриншоты шаблонов приглашений (сейчас нарисованные примеры) |
| `demo-couple-cover.jpg` | 1920×1280 · 3:2 | Обложка демо-сайта и мокапов (держите лица по центру) |
| `demo-story.jpg` | 1000×1250 · 4:5 | Блок «Наша история» на демо-сайте |
| `demo-venue.jpg` | 1500×1000 · 3:2 | Место свадьбы на демо-сайте |
| `og-default.jpg` (TR), `og-default-en.jpg` | 1200×630 | Превью ссылки на сайт в мессенджерах и соцсетях |
| `og-invite.jpg` (TR), `og-invite-en.jpg` | 1200×630 | Превью ссылки на демо-приглашение |

Мокапы телефона, ноутбука и сводки RSVP на главной нарисованы в HTML (чёткие, переводятся вместе с сайтом).
Чтобы поставить свои скриншоты интерфейса, положите файлы (например `mockup-website-phone.png`,
`mockup-website-laptop.png`, `mockup-rsvp-phone.png`, `mockup-rsvp-dashboard.png`) в `public/images/`
и пропишите пути в `src/config.ts` → `mockupImages`.

## Что проверить и дозаполнить

Все тексты на сайте заполнены. Ниже то, что написано «от себя» и требует вашего решения или проверки.

### Написано от себя — проверьте
- [ ] Тарифы и цены: Free ₺0 (до 50 гостей) и Premium ₺1 499 разово за свадьбу, с НДС — `pricingPage`, `pricingTeaser`, `faq`
- [ ] Условия оплаты и возврата (карта, лиры, возврат в течение 14 дней, если приглашения не разосланы) — `pricingPage.faq`
- [ ] Политика конфиденциальности (с KVKK) и условия использования — `legal` в `tr.ts` / `en.ts`. Обязательно покажите юристу
- [ ] Срок ответа на письма: «1 рабочий день» — `thanks.text`
- [ ] Вишлист / денежный фонд: на сайте его нет; если нужен — добавлю секцию

### Нужны ваши данные — `src/config.ts`
- [ ] `socials` — ссылка на Instagram (сейчас иконка ведёт в никуда)
- [ ] Подтвердить данные владельцев и исправить телефон Yücel Efe: в `0216383492` не хватает одной цифры
- [ ] `appUrl` — куда ведут кнопки «Создать сайт» (сейчас на форму «Напишите нам»)
- [ ] По желанию: Formspree, чтобы письма с формы приходили без почты посетителя (см. «Формы»)

### Визуал
- [x] Живые фото пар (Unsplash)
- [ ] Скриншоты настоящих шаблонов приглашений вместо нарисованных — `invite-design-0X.jpg`
- [ ] По желанию: скриншоты интерфейса вместо HTML-мокапов — `mockupImages`

### Язык
- [ ] Вычитка турецких текстов носителем (`src/i18n/tr.ts`)
