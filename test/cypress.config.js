const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://csundash.kyeou.xyz",
    specPattern: "cypress/integration/**/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});