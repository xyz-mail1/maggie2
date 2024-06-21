module.exports = {
  name: "pgif",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "pgif");
  },
};
