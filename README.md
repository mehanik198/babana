# nanobabana.ru — SEO landing

Одностраничный SEO‑сайт для домена `nanobabana.ru`. Ведёт трафик на основной проект `https://nanobanana.ru/gallery`.

## Стек

- Vite 7 + React 19 + TypeScript
- Без роутера, без API, без авторизации — чистый статический лендинг

## Скрипты

```bash
npm install
npm run dev      # dev-сервер
npm run build    # сборка в dist/
npm run preview  # просмотр сборки
npm run lint     # ESLint
```

## Структура

- `index.html` — мета‑теги, JSON‑LD, Яндекс.Метрика.
- `src/main.tsx` — точка входа.
- `src/App.tsx` — обёртка.
- `src/components/landing/LandingPage.tsx` — единственная страница (Hero + видео, шаги, превью галереи из 6 статичных карточек, статьи, footer). Все CTA и ссылки в footer ведут на `https://nanobanana.ru`.
- `src/components/landing/PreviewCard.tsx` — карточка превью промпта.
- `public/images/preview/*.svg` — 6 SVG‑плейсхолдеров. Заменить на реальные изображения по необходимости — расширения и пути править в `LandingPage.tsx` (`previewPrompts`).
- `public/videonb.mp4`, `public/videonb.webm` — видео для hero.
- `public/robots.txt`, `public/sitemap.xml` — для индексации.

## Деплой

Содержимое `dist/` после `npm run build` раскатывается на любой статик‑хостинг (Nginx, Vercel и т.п.).
