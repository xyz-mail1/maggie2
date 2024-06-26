const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  EmbedBuilder,
} = require("discord.js");
const p = require("$purr/purr");
const api = new p();
const { updateCommandUsage, getCommandUsage } = require("../utils/utils");
module.exports = (commandName, type) => {
  const data = new ContextMenuCommandBuilder()
    .setName(commandName)
    .setType(ApplicationCommandType.User);

  const execute = async (interaction, client) => {
    const sender = interaction.user.id;
    const target = interaction.targetUser.id;
    const gif = await api.nsfw(type);
    updateCommandUsage(type, sender, target);
    const usageCount = await getCommandUsage(type, sender, target);
    const embed = new EmbedBuilder()
      .setColor("White")
      .setImage(gif.link)
      .setDescription(`<@${sender}> ${type}s <@${target}>`);
    embed.setFooter({ text: `${type} count: ${usageCount}` });
    interaction.reply({
      embeds: [embed],
    });
  };

  return { data, execute };
};
