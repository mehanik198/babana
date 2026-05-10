import styles from './App.module.css';
import { LandingPage } from './components/landing/LandingPage';
import { CookieBanner } from './components/layout/CookieBanner';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <LandingPage />
      </div>
      <CookieBanner />
    </div>
  );
}

export default App;
