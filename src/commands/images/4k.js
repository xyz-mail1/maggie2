module.exports = {
  name: "4k",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "4k");
  },
};
