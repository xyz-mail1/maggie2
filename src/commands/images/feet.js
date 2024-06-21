module.exports = {
  name: "feet",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "feet");
  },
};
