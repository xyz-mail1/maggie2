module.exports = {
  name: "kemonomimi",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "kemonomimi");
  },
};
