const db = require("./db");

function updateCommandUsage(user1Id, user2Id, commandName) {
  // Update command usage count bidirectionally
  const entry1to2 = db
    .prepare(
      "SELECT * FROM command_usage WHERE user_id_1 = ? AND user_id_2 = ? AND command_name = ?"
    )
    .get(user1Id, user2Id, commandName);
  if (entry1to2) {
    db.prepare(
      "UPDATE command_usage SET count = count + 1 WHERE user_id_1 = ? AND user_id_2 = ? AND command_name = ?"
    ).run(user1Id, user2Id, commandName);
  } else {
    db.prepare(
      "INSERT INTO command_usage (user_id_1, user_id_2, command_name, count) VALUES (?, ?, ?, 1)"
    ).run(user1Id, user2Id, commandName);
  }

  const entry2to1 = db
    .prepare(
      "SELECT * FROM command_usage WHERE user_id_1 = ? AND user_id_2 = ? AND command_name = ?"
    )
    .get(user2Id, user1Id, commandName);
  if (entry2to1) {
    db.prepare(
      "UPDATE command_usage SET count = count + 1 WHERE user_id_1 = ? AND user_id_2 = ? AND command_name = ?"
    ).run(user2Id, user1Id, commandName);
  } else {
    db.prepare(
      "INSERT INTO command_usage (user_id_1, user_id_2, command_name, count) VALUES (?, ?, ?, 1)"
    ).run(user2Id, user1Id, commandName);
  }
}

function getCommandUsage(user1Id, user2Id, commandName) {
  // Fetch command usage count for user1 to user2
  const entry1to2 = db
    .prepare(
      "SELECT * FROM command_usage WHERE user_id_1 = ? AND user_id_2 = ? AND command_name = ?"
    )
    .get(user1Id, user2Id, commandName);
  return entry1to2 ? entry1to2.count : 0;
}

module.exports = { updateCommandUsage, getCommandUsage };
