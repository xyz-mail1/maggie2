module.exports = {
  name: "smile",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "smile", false);
  },
};