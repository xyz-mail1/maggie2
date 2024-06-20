module.exports = {
  name: "kiss",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.handleCommand(client, message, "kiss");
  },
};
