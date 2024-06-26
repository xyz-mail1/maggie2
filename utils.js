const db = require("./database");
async function updateCommandUsage(variable, sender, target) {
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
    console.error(`Error during incrementCount: ${err}`);
  }
}

async function getCommandUsage(variable, sender, target) {
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
    console.error(`Error during getCount: ${err}`);
  }
}

module.exports = { getCommandUsage, updateCommandUsage };
