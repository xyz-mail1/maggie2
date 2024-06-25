const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  execute: async (interaction, client) => {
    if (interaction.isChatInputCommand()) {
      /**    const { slash } = client;
      const { commandName } = interaction;
      const command = slash.get(commandName);
      if (!command) return;***/
      const command = interaction.client.slash.get(interaction.commandName);
      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    } else if (interaction.isContextMenuCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const contextCommand = commands.get(commandName);
      if (!contextCommand) return;
      try {
        await contextCommand.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
