module.exports = {
  name: "pussy",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "pussy");
  },
};
