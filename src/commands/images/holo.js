module.exports = {
  name: "holo",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "holo");
  },
};
