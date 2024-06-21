module.exports = {
  name: "gonewild",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "gonewild");
  },
};
