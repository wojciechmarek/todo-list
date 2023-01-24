import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ModalProvider, ThemeProvider } from './providers';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
