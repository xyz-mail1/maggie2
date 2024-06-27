const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const purrBot = require("$purr/purr");
const api = new purrBot();
const { updateCommandUsage, getCommandUsage } = require("../../utils/utils");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("cum")
    .setDescription("You cant hold it anymore 😩")
    .addBooleanOption((option) =>
      option
        .setName("ephemeral")
        .setDescription("Whether or not the echo should be ephemeral")
    ),
  async execute(interaction, client) {
    const gif = await api.nsfw("cum");
    if (!gif)
      return interaction.reply({
        content: "Couldn't get gif",
        ephemeral: true,
      });

    const embed = new EmbedBuilder().setImage(gif.link).setColor("Green");
    try {
      if (interaction.options.getBoolean("ephemeral")) {
        await interaction.reply({
          embeds: [embed],
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          embeds: [embed],
        });
      }
    } catch (err) {
      interaction.reply({
        content: "error sending embed",
        ephemeral: true,
      });
      console.error(err);
    }
  },
};
