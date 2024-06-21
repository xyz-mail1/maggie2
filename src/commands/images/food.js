module.exports = {
  name: "food",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "food");
  },
};
