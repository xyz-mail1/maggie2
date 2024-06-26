const fs = require("fs");
const { REST, Routes } = require("discord.js");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync(`./src/slash`);
    client.logger.log("----- LOADING SLASH COMMANDS -----");

    let totalFilesLoaded = 0;

    for (const folder of commandFolders) {
      const commandFiles = fs.readdirSync(`./src/slash/${folder}`);
      let filesLoadedInFolder = 0;

      for (const file of commandFiles) {
        const command = require(`../slash/${folder}/${file}`);

        client.slash.set(command.data.name, command);
        client.slashData.push(command.data.toJSON());

        filesLoadedInFolder++;
        totalFilesLoaded++;
      }
      client.logger.log(
        `Loaded ${filesLoadedInFolder} commands from folder: ${folder}`
      );
    }

    client.logger.log(`Total number of commands loaded: ${totalFilesLoaded}`);
    const clientid = process.env.clientid;
    const guildid = process.env.guildid;
    const rest = new REST().setToken(process.env.token);
    try {
      client.logger.log("Started refreshing interaction commands");
      await rest.put(Routes.applicationCommands(clientid), {
        body: client.slashData,
      });
    } catch (error) {
      client.logger.error(`Failed to load a slash command. Reason: ${error}`);
    }
  };
};
