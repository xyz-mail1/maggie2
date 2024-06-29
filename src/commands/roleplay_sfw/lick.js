module.exports = {
  name: "lick",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "lick");
  },
};
