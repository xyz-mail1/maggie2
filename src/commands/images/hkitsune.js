module.exports = {
  name: "hkitsune",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hkitsune");
  },
};
