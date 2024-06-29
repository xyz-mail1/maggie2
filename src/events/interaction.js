const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  execute: async (interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.slash.get(interaction.commandName);
      if (!command) return;
      try {
        const whitelist = [
          "911822497891102741",
          "901366487850303499",
          "1107228788569423965",
          "1124643555948900433",
        ];
        if (command.SnM) {
          if (!whitelist.includes(interaction.user.id))
            return interaction.reply({
              content: "This command can only be used by shiv and maggie",
              ephemeral: true,
            });
        }
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: "There was an error while executing this command!",
            ephemeral: true,
          });
        } else {
          await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
          });
        }
      }
    } else if (interaction.isContextMenuCommand()) {
      const contextCommand = interaction.client.slash.get(
        interaction.commandName
      );
      if (!contextCommand) return;
      try {
        await contextCommand.execute(interaction);
      } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp({
            content: "There was an error while executing this command!",
            ephemeral: true,
          });
        } else {
          await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
          });
        }
      }
    }
  },
};
