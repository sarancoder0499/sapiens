import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // To use global test functions like `describe`, `it`, etc.
    environment: 'jsdom', // Use jsdom for testing React components
  },
});
