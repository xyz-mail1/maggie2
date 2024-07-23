const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const p = require("$purr/purr");
const api = new p();

module.exports = (name, type, desc, grammar) => {
  const data = new SlashCommandBuilder()
    .setName(name)
    .setDescription(desc)
    .addUserOption((option) =>
      option
        .setName("person")
        .setDescription("The person to fuck")
        .setRequired(true)
    );

  const execute = async (interaction, client) => {
    const target = interaction.options.getUser("person");
    const gif = await api.nsfw(type);
    if (!gif)
      return interaction.reply({
        content: "Couldn't get gif",
        ephemeral: true,
      });

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setImage(gif.link)
      .setDescription(`<@${interaction.user.id}> ${grammar} <@${target.id}>`);
    interaction.reply({
      embeds: [embed],
    });
  };

  return { data, execute };
};
