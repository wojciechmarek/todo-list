import React from 'react';
import ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics';
import { App } from './App';
import { ModalProvider, ThemeProvider } from './providers';
import { StorageProvider } from './providers/Storage';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StorageProvider>
        <ThemeProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </ThemeProvider>
      </StorageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
