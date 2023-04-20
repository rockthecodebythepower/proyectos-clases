import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    setupFiles: 'src/setupTests.js',
  },
  plugins: [react()],
});
