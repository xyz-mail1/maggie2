module.exports = {
  name: "blush",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "blush", false);
  },
};