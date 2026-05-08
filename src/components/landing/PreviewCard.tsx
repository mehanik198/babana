import styles from './PreviewCard.module.css';

interface PreviewCardProps {
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  priority?: boolean;
}

export function PreviewCard({ title, category, imageUrl, href, priority = false }: PreviewCardProps) {
  const fallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='520' viewBox='0 0 400 520'><rect width='400' height='520' fill='%230b1224'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23f5c400' font-family='Arial' font-size='20'>image</text></svg>";

  return (
    <a className={styles.card} href={href} rel="noopener">
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={imageUrl}
          alt={title}
          width={400}
          height={520}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          onError={(e) => {
            if (e.currentTarget.src !== fallback) {
              e.currentTarget.src = fallback;
            }
          }}
        />
        <div className={styles.gradient} />
        <div className={styles.topRow}>
          <span className={styles.tag}>{category}</span>
        </div>
        <div className={styles.bottomInfo}>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </a>
  );
}
