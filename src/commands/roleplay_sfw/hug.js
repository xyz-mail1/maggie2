module.exports = {
  name: "hug",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.purrPrefixSfw(client, message, "hug");
  },
};
