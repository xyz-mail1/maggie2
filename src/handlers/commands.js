const fs = require("fs");

module.exports = (client) => {
  let total = 0;
  const commandFolders = fs.readdirSync("./src/commands");

  commandFolders.forEach((folder) => {
    const commandFiles = fs
      .readdirSync(`./src/commands/${folder}`)
      .filter((file) => file.endsWith(".js"));
    let individual = 0;

    commandFiles.forEach((file) => {
      try {
        const command = require(`../commands/${folder}/${file}`);
        if (client.commands.has(command.name)) {
          client.logger.warn(`Duplicate command name: ${command.name}`);
        } else {
          client.commands.set(command.name, command);
          total++;
          individual++;
        }
      } catch (err) {
        client.logger.error(`Failed to load ${file}. Reason: ${err.message}`);
      }
    });

    client.logger.log(`Loaded ${individual} commands from ${folder}`);
  });

  client.logger.log(`Loaded total ${total} commands`);
};
