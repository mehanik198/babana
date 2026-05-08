import styles from './App.module.css';
import { LandingPage } from './components/landing/LandingPage';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
