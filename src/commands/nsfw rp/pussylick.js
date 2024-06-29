module.exports = {
  name: "pussylick",
  aliases: ["pl"],
  cooldown: 3,
  SnM: 1,
  run: async (client, message, args) => {
    await client.purrPrefixNsfw(client, message, "pussylick", true, "licks");
  },
};
