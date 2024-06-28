const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute: async (client) => {
    client.logger.log(`Ready! Logged in as ${client.user.tag}`);
    client.logger.log("Guilds");
    client.guilds.cache.forEach((guild) => {
      client.logger.log(`${guild.name} | ${guild.id}`);
    });
  },
};
