module.exports = {
  name: "hanal",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hanal");
  },
};
