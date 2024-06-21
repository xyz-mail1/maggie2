module.exports = {
  name: "hthigh",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hthigh");
  },
};
