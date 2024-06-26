// database.js
const Database = require("better-sqlite3");
const db = new Database("bot.db");

// Create tables if they don't exist
db.prepare(
  `
    CREATE TABLE IF NOT EXISTS counts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    variable TEXT,
    sender TEXT,
    target TEXT,
    count INTEGER
  )
`
).run();

module.exports = db;
