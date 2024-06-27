module.exports = {
  name: "dance",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "dance", false);
  },
};