import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'vite.svg'],
      manifest: {
        name: 'Todo List',
        short_name: 'Todos',
        description: 'The multi UI todo list for your daily life',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'list.png',
            sizes: '256x256',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
