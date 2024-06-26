// commands/fight.js
const { SlashCommandBuilder } = require("@discordjs/builders");
const { updateCommandUsage, getCommandUsage } = require("../../utils/utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fight")
    .setDescription("Initiate a fight with another user")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user to fight")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const user = interaction.user;
    const targetUser = interaction.options.getUser("target");

    // Ensure user and targetUser are not the same
    if (user.id === targetUser.id) {
      await interaction.reply("You can't fight yourself!");
      return;
    }

    // Update command usage count bidirectionally
    updateCommandUsage(user.id, targetUser.id, "fight");

    // Fetch and send command usage count
    const usageCount = getCommandUsage(user.id, targetUser.id, "fight");
    await interaction.reply(
      `${user.username} initiated a fight with ${targetUser.username}!\n` +
        `They have fought ${usageCount} times.`
    );
  },
};
