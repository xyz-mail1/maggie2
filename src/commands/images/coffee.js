module.exports = {
  name: "coffee",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "coffee");
  },
};
