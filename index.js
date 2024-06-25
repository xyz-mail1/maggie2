require("dotenv").config();
require("module-alias/register");

var PrettyError = require("pretty-error");
var pe = new PrettyError();

const sqlite = require("better-sqlite3");
const db = new sqlite("./new.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS counts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    variable TEXT,
    sender TEXT,
    target TEXT,
    count INTEGER
  )
`);

async function getCount(variable, sender, target) {
  try {
    const stmt = db.prepare(
      "SELECT count FROM counts WHERE (variable = ? AND sender = ? AND target = ?) OR (variable = ? AND sender = ? AND target = ?)"
    );
    const result = await stmt.all(
      variable,
      sender,
      target,
      variable,
      target,
      sender
    );

    return result.reduce((total, row) => total + row.count, 1);
  } catch (err) {
    client.logger.error(`Error during getCount: ${err.message}`);
  }
}

const token = process.env.token,
  BotClient = require(`./src/helpers/bot`),
  client = new BotClient();

client.loadHandlers();
client.handleCommands();
process.on("unhandledRejection", (error) => {
  console.log(error);
});
process.on("uncaughtException", (error) => {
  console.log(pe.render(error));
});

client.login(token);
module.exports = {
  incrementCount: async function (variable, sender, target) {
    // Check if entry for the users already exists in the db
    try {
      const select = db.prepare(
        `SELECT * FROM counts WHERE (variable = ? AND sender = ? AND target = ?) OR (variable = ? AND sender = ? AND target = ?)`
      );
      const entry = await select.get(
        variable,
        sender,
        target,
        variable,
        target,
        sender
      );
      if (entry) {
        const updateCount = db.prepare(
          `UPDATE counts SET count = count + 1 WHERE (variable = ? AND sender = ? AND target = ?) OR (variable = ? AND sender = ? AND target = ?)`
        );
        updateCount.run(variable, sender, target, variable, target, sender);
      } else {
        const insert = db.prepare(
          `INSERT INTO counts (variable, sender, target, count) VALUES (?, ?, ?, ?)`
        );
        insert.run(variable, sender, target, 1);
      }
    } catch (err) {
      console.error(`Error during incrementCount: ${err.message}`);
    }
  },
};
