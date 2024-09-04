const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:5173', // Update this if your Vite app runs on a different port
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});