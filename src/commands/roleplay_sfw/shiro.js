module.exports = {
  name: "shiro",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "shiro", false);
  },
};