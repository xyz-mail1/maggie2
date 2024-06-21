module.exports = {
  name: "hneko",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hneko");
  },
};
