import { PreviewCard } from './PreviewCard';
import styles from './LandingPage.module.css';

const MAIN_SITE = 'https://nanobanana.ru';
const GALLERY_URL = `${MAIN_SITE}/gallery`;

const features = [
  {
    title: 'Генерация по описанию',
    desc: 'Введите текстовый запрос — Nano Banana создаст изображение с нуля. Фотореалистичные портреты, аниме, иллюстрации, концепт-арт.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4V2" />
        <path d="M15 16v-2" />
        <path d="M8 9h2" />
        <path d="M20 9h2" />
        <path d="M17.8 11.8 19 13" />
        <path d="M15 9h.01" />
        <path d="M17.8 6.2 19 5" />
        <path d="m3 21 9-9" />
        <path d="M12.2 6.2 11 5" />
      </svg>
    ),
  },
  {
    title: 'Редактирование без Фотошопа',
    desc: 'Загрузите фото и опишите правку — ИИ изменит сцену, одежду, фон или стиль и сохранит черты лица.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Готовые промпты',
    desc: 'Галерея из 1000+ примеров: фотосессии, аниме, открытки, карточки для маркетплейсов. Берите за основу и меняйте под себя.',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
];

const faq = [
  {
    q: 'Что такое Nano Banana?',
    a: 'Nano Banana — нейросеть для генерации и редактирования изображений по текстовому описанию. Создаёт фотореалистичные портреты, аниме, иллюстрации, карточки товаров и редактирует фото с сохранением черт лица.',
  },
  {
    q: 'Можно ли пользоваться без VPN?',
    a: 'Да. Сервис работает в обычном браузере на территории России без VPN — никаких блокировок и сторонних плагинов.',
  },
  {
    q: 'Сколько это стоит?',
    a: 'Старт бесплатный — можно попробовать генерации без оплаты. Дальше доступны пакеты с разным количеством запросов; точные тарифы — в личном кабинете на nanobanana.ru.',
  },
  {
    q: 'Чем Nano Banana отличается от Midjourney и DALL·E?',
    a: 'Главное отличие — точное следование промпту и сохранение лица персонажа при редактировании фото. Подходит для рабочих задач: карточки маркетплейсов, фотосессии из селфи, серии иллюстраций в одном стиле.',
  },
  {
    q: 'Какие форматы и разрешения поддерживаются?',
    a: 'На вход — JPG, PNG, WebP. На выход — изображения в высоком разрешении до 4K, в зависимости от выбранной модели и параметров генерации.',
  },
  {
    q: 'Сохраняются ли мои изображения?',
    a: 'Все ваши генерации хранятся в личном кабинете — можно вернуться, скачать или повторить. Загруженные исходники используются только для обработки запроса.',
  },
  {
    q: 'Нужна ли регистрация?',
    a: 'Чтобы посмотреть галерею промптов — нет. Для генерации нужен аккаунт: вход через Telegram или email с подтверждением кода.',
  },
];

const previewPrompts = [
  {
    title: 'Профессиональная фотосессия из селфи',
    category: 'портрет',
    imageUrl: '/images/preview/1.jpeg',
  },
  {
    title: 'Аниме-стиль по описанию',
    category: 'аниме',
    imageUrl: '/images/preview/2.jpg',
  },
  {
    title: 'Карточка товара для маркетплейса',
    category: 'товар',
    imageUrl: '/images/preview/3.jpg',
  },
  {
    title: 'Кинематографичный портрет',
    category: 'кино',
    imageUrl: '/images/preview/4.jpg',
  },
  {
    title: 'Иллюстрация для соцсетей',
    category: 'арт',
    imageUrl: '/images/preview/5.jpg',
  },
  {
    title: 'Открытка с поздравлением',
    category: 'открытка',
    imageUrl: '/images/preview/6.jpeg',
  },
];

export function LandingPage() {
  return (
    <main className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero} aria-label="Нано Банана — генерация изображений">
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleGold}>Nano Banana</span>
          </h1>
          <p className={styles.heroDesc}>
            Нейросеть Nano Banana генерирует и редактирует изображения по текстовому описанию: фотореалистичные портреты, аниме, открытки, карточки для маркетплейсов. Точные промпты, сохранение лица и сцены, быстрый результат — без VPN и установки программ.
          </p>
          <div className={styles.heroCtas}>
            <a href={GALLERY_URL} className={styles.ctaGold} rel="noopener">
              Попробуйте бесплатно →
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.section} aria-labelledby="features-title">
        <h2 id="features-title" className={styles.sectionTitle}>Что умеет Nano Banana</h2>
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature.title} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Gallery preview ── */}
      <section className={styles.section} aria-labelledby="gallery-title">
        <h2 id="gallery-title" className={styles.sectionTitle}>Берите готовые промпты — создавайте уникальные изображения</h2>
        <div className={styles.previewGrid}>
          {previewPrompts.map((prompt, idx) => (
            <PreviewCard
              key={prompt.title}
              title={prompt.title}
              category={prompt.category}
              imageUrl={prompt.imageUrl}
              href={GALLERY_URL}
              priority={idx < 3}
            />
          ))}
        </div>
        <div className={styles.seeAllWrap}>
          <a href={GALLERY_URL} className={styles.seeAll} rel="noopener">Смотреть все →</a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section} aria-labelledby="faq-title">
        <h2 id="faq-title" className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
        <div className={styles.faqList}>
          {faq.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                <span>{item.q}</span>
                <span className={styles.faqChevron} aria-hidden>+</span>
              </summary>
              <div className={styles.faqAnswer}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p className={styles.footerCopy}>© 2026 НаноБанана</p>
      </footer>
    </main>
  );
}
