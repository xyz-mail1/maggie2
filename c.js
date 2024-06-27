const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
  console.log("Usage: node generateCommand.js <command_name>");
  process.exit(1);
}

const commandName = process.argv[2];
const outputDirectory = path.join(__dirname, "src", "commands", "roleplay_sfw");
const fileName = `${commandName}.js`;

const fileContent = `
module.exports = {
  name: "${commandName}",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "${commandName}");
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
