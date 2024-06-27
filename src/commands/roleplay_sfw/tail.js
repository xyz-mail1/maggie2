module.exports = {
  name: "tail",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "tail", false);
  },
};