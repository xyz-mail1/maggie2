module.exports = {
  name: "tentacle",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "tentacle");
  },
};
