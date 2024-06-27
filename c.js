const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
  console.log("Usage: node generateCommand.js <command_name> [isSpecial]");
  process.exit(1);
}

const commandName = process.argv[2];
const isSpecial = process.argv.length >= 4 ? process.argv[3] === "true" : false; // Default to false if not provided
const outputDirectory = path.join(__dirname, "src", "commands", "roleplay_sfw");
const fileName = `${commandName}.js`;

const fileContent = `
module.exports = {
  name: "${commandName}",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "${commandName}", ${isSpecial});
  },
};
`;

const filePath = path.join(outputDirectory, fileName);

fs.writeFile(filePath, fileContent.trim(), (err) => {
  if (err) {
    console.error("Error creating file:", err);
  } else {
    console.log(`File ${filePath} created.`);
  }
});
