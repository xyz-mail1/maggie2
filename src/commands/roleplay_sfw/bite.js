module.exports = {
  name: "bite",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "bite", true);
  },
};
