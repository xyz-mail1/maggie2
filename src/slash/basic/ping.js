const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Pong!"),
  async execute(interaction, client) {
    const msg = await interaction.deferReply({
      fetchReply: true,
    });
    const ping = await interaction.client.ws.ping;
    await interaction.editReply({
      content: `API Latency: ${ping}ms\nClient Ping: ${
        msg.createdTimestamp - interaction.createdTimestamp
      }ms`,
    });
  },
};
