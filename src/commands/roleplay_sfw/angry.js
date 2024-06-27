module.exports = {
  name: "angry",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "angry", false);
  },
};
