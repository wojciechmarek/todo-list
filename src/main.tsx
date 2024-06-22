import React from 'react';
import ReactDOM from 'react-dom/client';
import { inject } from '@vercel/analytics';
import { App } from './App';
import { ModalProvider, ThemeProvider } from './providers';
import { StorageProvider } from './providers/Storage';
import { BrowserRouter } from 'react-router-dom';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { providerTreeBuilder } from './utilities/providers-tree-builder';
import './styles/index.css';

injectSpeedInsights();
inject();

const ProvidersTree = providerTreeBuilder([
  [React.StrictMode],
  [BrowserRouter],
  [StorageProvider],
  [ThemeProvider],
  [ModalProvider],
  [App],
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProvidersTree />
);
