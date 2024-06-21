module.exports = {
  name: "boobs",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "boobs");
  },
};
