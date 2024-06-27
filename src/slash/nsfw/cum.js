const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const purrBot = require("$purr/purr");
const api = new purrBot();
module.exports = {
  data: new SlashCommandBuilder()
    .setName("cum")
    .setDescription("You cant hold it anymore 😩")
    .addUserOption((o) =>
      o.setName("person").setDescription("Person to cum in")
    ),
  async execute(interaction, client) {
    const gif = await api.nsfw("cum");
    if (!gif)
      return interaction.reply({
        content: "Couldn't get gif",
        ephemeral: true,
      });
    if (interaction.options.getUser("person")) {
      const target = interaction.options.getUser("person");
      const embed = new EmbedBuilder()
        .setImage(gif.link)
        .setColor("Green")
        .setDescription(`${interaction.user} cums in ${target}`);
      return interaction.reply({ embeds: [embed] });
    } else {
      const embed = new EmbedBuilder()
        .setImage(gif.link)
        .setColor("Green")
        .setAuthor({
          name: `${interaction.user.username} cums`,
          iconURL: interaction.user.avatarURL(),
        });

      try {
        await interaction.reply({
          embeds: [embed],
        });
      } catch (err) {
        interaction.reply({
          content: "error sending embed",
          ephemeral: true,
        });
        console.error(err);
      }
    }
  },
};
