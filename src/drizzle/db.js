const { drizzle } = require("drizzle-orm/node-postgres");
const { Client } = require("pg");
const schema = require("./schema.ts"); 
const client = new Client({
  connectionString: "postgresql://ayush:pass@localhost:5432/cabit",
});

client.connect();

const db = drizzle(client, { schema });

module.exports = { db };
