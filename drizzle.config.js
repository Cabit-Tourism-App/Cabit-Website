const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  dialect: "postgresql",  
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dbCredentials: {
    url: "postgres://ayush:pass@localhost:5432/cabit",
  },
});
