import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

console.log('--- Brian McCarthy Portfolio Debug ---');
console.log('Timestamp:', new Date().toISOString());
console.log('URL:', window.location.href);
console.log('Base URL:', (import.meta as any).env.BASE_URL);

if (!rootElement) {
  console.error('CRITICAL: #root element not found in index.html');
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    console.log('React application mounted successfully');
  } catch (err) {
    console.error('FAILED to mount React application:', err);
    rootElement.innerHTML = `
      <div style="background: #fee2e2; color: #991b1b; padding: 2rem; font-family: system-ui; border-radius: 8px; margin: 2rem;">
        <h1 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">Deployment Load Error</h1>
        <p style="font-size: 0.875rem;">The application script loaded but failed to initialize.</p>
        <pre style="background: #fff; padding: 1rem; border-radius: 4px; overflow: auto; margin-top: 1rem; font-size: 0.75rem;">${err instanceof Error ? err.stack : String(err)}</pre>
      </div>
    `;
  }
}
