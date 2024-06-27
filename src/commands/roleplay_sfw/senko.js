module.exports = {
  name: "senko",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "senko", false);
  },
};