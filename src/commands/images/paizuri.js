module.exports = {
  name: "paizuri",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "paizuri");
  },
};
