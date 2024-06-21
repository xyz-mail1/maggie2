module.exports = {
  name: "neko",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "neko");
  },
};
