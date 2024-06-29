module.exports = {
  name: "pussylick",
  aliases: ["pl"],
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.purrPrefixNsfw(client, message, "pussylick");
  },
};
