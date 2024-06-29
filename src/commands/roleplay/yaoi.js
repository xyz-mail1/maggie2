module.exports = {
  name: "yaoi",
  cooldown: 3,
  SnM: 0,
  run: async (client, message, args) => {
    client.purrPrefixNsfw(client, message, "yaoi", true, "fucks");
  },
};
