module.exports = {
  name: "hyuri",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hyuri");
  },
};
