module.exports = {
  name: "poke",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.handleCommand(client, message, "poke");
  },
};
