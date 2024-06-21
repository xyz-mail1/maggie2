module.exports = {
  name: "kanna",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "kanna");
  },
};
