module.exports = {
  name: "cuddle",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "cuddle", true);
  },
};
