module.exports = {
  name: "comfy",
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    client.purrPrefixSfw(client, message, "comfy", false);
  },
};