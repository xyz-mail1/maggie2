const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  EmbedBuilder,
} = require("discord.js");
const p = require("$purr/purr");
const api = new p();
module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Fuck")
    .setType(ApplicationCommandType.User),
  async execute(interaction, client) {
    const sender = interaction.user.id;
    const target = interaction.targetUser.id;
    const gif = await api.nsfw("fuck");

    const embed = new EmbedBuilder()
      .setColor("White")
      .setImage(gif.link)
      .setDescription(`<@${sender}> fucks <@${target}>`);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
