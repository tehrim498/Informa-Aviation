import { defineConfig } from "cypress";

module.exports = defineConfig({
  projectId: "ocnw76",
  video: true,

  reporter: "cypress-mochawesome-reporter",

  e2e: {
    baseUrl:
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);


      
    },
  },
  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  },
});
