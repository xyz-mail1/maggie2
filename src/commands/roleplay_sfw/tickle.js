module.exports = {
  name: "tickle",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "tickle", true);
  },
};
