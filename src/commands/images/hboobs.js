module.exports = {
  name: "hboobs",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hboobs");
  },
};
