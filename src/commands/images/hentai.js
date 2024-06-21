module.exports = {
  name: "hentai",
  cooldown: 3,
  run: async (client, message, args) => {
    await client.handleNeko(client, message, "hentai");
  },
};
