module.exports = {
  name: "pout",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "pout", false);
  },
};