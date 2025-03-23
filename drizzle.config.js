const { defineConfig } = require("drizzle-kit");
const { z } = require("zod");
const { env } = require("./src/data/env/server");

module.exports = defineConfig({
  dialect: "postgresql",  
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dbCredentials: {
    url: env.DB_URL,
  },
});
