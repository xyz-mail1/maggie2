const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  execute: async (interaction, client) => {
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.slash.get(interaction.commandName);
      if (!command) return;
      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    } else if (interaction.isContextMenuCommand()) {
      const contextCommand = interaction.client.slash.get(
        interaction.commandName
      );
      if (!contextCommand) return;
      try {
        await contextCommand.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
