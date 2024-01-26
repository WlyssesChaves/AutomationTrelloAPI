const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      config.env.TRELLO_API_KEY = process.env.TRELLO_API_KEY;
      config.env.TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;

      return config;
    },
    baseUrl: "https://api.trello.com",
    env: {
      TRELLO_API_KEY: "YOUR_TRELLO_API_KEY",
      TRELLO_API_TOKEN: "YOUR_TRELLO_API_TOKEN",
    },
  },
});
