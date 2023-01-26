import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ModalProvider, ThemeProvider } from './providers';
import { StorageProvider } from './providers/Storage';
import './styles/index.css';

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
