import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './i18n';
import { initShieldedAnalytics } from './lib/botProtection';

// Initialize shielded Google Analytics with bot protection & interaction gating
initShieldedAnalytics('G-45X5CFN0X9');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
