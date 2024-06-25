const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  EmbedBuilder,
} = require("discord.js");
const p = require("$purr/purr");
const api = new p();

module.exports = (commandName, nsfwType, countType, grammar) => {
  const data = new ContextMenuCommandBuilder()
    .setName(commandName)
    .setType(ApplicationCommandType.User);

  const execute = async (interaction, client) => {
    const sender = interaction.user.id;
    const target = interaction.targetUser.id;
    const gif = await api.nsfw(nsfwType);
    client.incrementCount(countType, sender, target);
    const count = await client.getCount(countType, sender, target);
    const embed = new EmbedBuilder()
      .setColor("White")
      .setImage(gif.link)
      .setDescription(`<@${sender}> ${grammar} <@${target}>`)
      .setFooter({ text: `${commandName} count: ${count}` });
    await interaction.reply({
      embeds: [embed],
    });
  };

  return { data, execute };
};
