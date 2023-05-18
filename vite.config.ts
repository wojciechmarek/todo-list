import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [''],
      manifest: {
        name: 'Todo List',
        short_name: 'MyApp',
        description: 'Multi UI design todo list for your daily life',
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
