module.exports = {
  name: "fuck",
  aliases: ["sex", "bang", "rape"],
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.nsfw(client, message, "fuck");
  },
};
