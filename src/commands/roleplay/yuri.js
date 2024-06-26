module.exports = {
  name: "yuri",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.purrPrefixNsfw(client, message, "yuri");
  },
};
