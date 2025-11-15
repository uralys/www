import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import yaml from '@modyfi/vite-plugin-yaml';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [topLevelAwait({}), react(), yaml()],
  server: {
    port: 6001
  }
});
