module.exports = {
  name: "hug",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "hug", true);
  },
};
