module.exports = {
  name: "pat",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "pat", true);
  },
};
