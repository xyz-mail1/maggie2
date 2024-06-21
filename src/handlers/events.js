const { readdirSync } = require("node:fs");
const getAllFiles = require("../utils/getAllFiles");
const path = require("path");
module.exports = (client) => {
  const eventFolders = getAllFiles(path.join(__dirname, "..", "events"), true);
  console.log(eventFolders);
};
