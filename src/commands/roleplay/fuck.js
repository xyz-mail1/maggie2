module.exports = {
  name: "fuck",
  aliases: ["sex", "bang", "rape"],
  cooldown: 3,
  SnM: 1,
  run: async (client, message, args) => {
    client.purrPrefixNsfw(client, message, "fuck", true, "fucks");
  },
};
