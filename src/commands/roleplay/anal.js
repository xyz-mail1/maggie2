module.exports = {
  name: "anal",
  cooldown: 3,
  SnM: 1,
  disabled: false,
  run: async (client, message, args) => {
    client.purrPrefixNsfw(client, message, "anal", true, "fucks");
  },
};
