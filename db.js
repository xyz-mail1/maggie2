const Database = require("better-sqlite3");
const db = new Database("bot.db");

// Create tables if they don't exist
db.prepare(
  `
    CREATE TABLE IF NOT EXISTS command_usage (
        user_id_1 TEXT,
        user_id_2 TEXT,
        command_name TEXT,
        count INTEGER DEFAULT 0,
        PRIMARY KEY (user_id_1, user_id_2, command_name)
    )
`
).run();

module.exports = db;
