import { Component, StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/fonts.css';
import './styles/global.css';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, textAlign: 'center', color: '#f4f6ff' }}>
          <h2>Что-то пошло не так</h2>
          <p style={{ color: '#9da7c2' }}>Попробуйте перезагрузить страницу</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: '12px 24px',
              borderRadius: 12,
              border: 'none',
              background: '#f5c400',
              color: '#0a0c16',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Перезагрузить
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
