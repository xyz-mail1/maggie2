module.exports = {
  name: "anal",
  cooldown: 3,
  SnM: false,
  disabled: true,
  run: async (client, message, args) => {
    client.purrPrefixNsfw(client, message, "anal", true);
  },
};
