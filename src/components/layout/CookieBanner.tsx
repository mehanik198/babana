import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.css';

const STORAGE_KEY = 'nanobabana-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Согласие на использование cookie">
      <p className={styles.text}>
        Мы используем файлы cookie и сервис «Яндекс.Метрика» для анализа посещаемости и улучшения сайта. Продолжая пользоваться сайтом, вы соглашаетесь с обработкой данных.
      </p>
      <button type="button" className={styles.button} onClick={accept}>
        Хорошо
      </button>
    </div>
  );
}
