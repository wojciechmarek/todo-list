import React from 'react';
import ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics';
import { App } from './App';
import { ModalProvider, ThemeProvider } from './providers';
import { StorageProvider } from './providers/Storage';
import './styles/index.css';

inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StorageProvider>
      <ThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </StorageProvider>
  </React.StrictMode>
);
