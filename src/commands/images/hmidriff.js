module.exports = {
  name: "hmidriff",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hmidriff");
  },
};
