module.exports = {
  name: "kiss",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "kiss", true);
  },
};
