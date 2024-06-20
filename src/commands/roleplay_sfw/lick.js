module.exports = {
  name: "lick",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.handleCommand(client, message, "lick");
  },
};
