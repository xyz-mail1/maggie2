module.exports = {
  name: "yaoi",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixNsfw(client, message, "yaoi", true);
  },
};
