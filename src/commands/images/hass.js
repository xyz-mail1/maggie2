module.exports = {
  name: "hass",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hass");
  },
};
