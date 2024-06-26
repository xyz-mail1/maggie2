const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const p = require("$purr/purr");
const api = new p();
const { updateCommandUsage, getCommandUsage } = require("../../../utils");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("fuck")
    .setDescription("fuck someone")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The person to fuck")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const sender = interaction.user.id;
    const target = interaction.options.getUser("target");
    const gif = await api.nsfw("fuck");
    updateCommandUsage("fuck", sender, target.id);
    const usageCount = await getCommandUsage("fuck", sender, target.id);
    const embed = new EmbedBuilder()
      .setColor("White")
      .setImage(gif.link)
      .setDescription(`<@${sender}> fucks <@${target.id}>`);
    embed.setFooter({ text: `Fuck count: ${usageCount}` });
    interaction.reply({
      embeds: [embed],
    });
  },
};
