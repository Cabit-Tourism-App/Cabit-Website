const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  dialect: "postgresql",  
  out: "./src/db/migrations",
  schema: "./src/db/schema.js",
  dbCredentials: {
    url: "postgres://ayush:pass@localhost:5432/cabit",
  },
});
