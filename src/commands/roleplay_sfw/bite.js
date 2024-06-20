module.exports = {
  name: "bite",
  aliases: ["eat", "nom"],
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.handleCommand(client, message, "bite");
  },
};
