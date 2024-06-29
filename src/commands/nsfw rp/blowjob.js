module.exports = {
  name: "blowjob",
  aliases: ["bj"],
  cooldown: 3,
  SnM: 1,
  run: async (client, message, args) => {
    client.purrPrefixNsfw(client, message, "blowjob", true, "blows");
  },
};
