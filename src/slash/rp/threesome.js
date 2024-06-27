const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const purr = require("../../wrapper/purr");
const api = new purr();
module.exports = {
  data: new SlashCommandBuilder()
    .setName("threesome")
    .setDescription("have a threesome with ppl!")
    .addUserOption((onee) =>
      onee
        .setName("person1")
        .setDescription("first person to invite in threesome")
        .setRequired(true)
    )
    .addUserOption((twoe) =>
      twoe
        .setName("person2")
        .setDescription("second person to invite in threesome")
        .setRequired(true)
    )
    .addStringOption((o) =>
      o
        .setName("type")
        .setDescription("The type of threesome")
        .addChoices(
          { name: "fff", value: "fff" },
          { name: "ffm", value: "ffm" },
          { name: "mmf", value: "mmf" }
        )
    ),
  async execute(interaction, client) {
    let choice = "ffm";
    const user1 = interaction.options.getUser("person1");
    const user2 = interaction.options.getUser("person2");
    const arg = interaction.options.getString("type");
    if (arg) choice = arg;
    const gif = await api.nsfw(`threesome_${choice}`);
    if (!gif) {
      return interaction.reply({
        content: "error getting gif",
        ephemeral: true,
      });
    } else {
      const embed = new EmbedBuilder()
        .setImage(gif.link)
        .setDescription(`${interaction.user} fucks ${user1} and ${user2}`)
        .setColor("Green");
      interaction.reply({ embeds: [embed] });
    }
  },
};
