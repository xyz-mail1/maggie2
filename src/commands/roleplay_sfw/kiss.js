module.exports = {
  name: "kiss",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.purrPrefixSfw(client, message, "kiss");
  },
};
