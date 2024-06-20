module.exports = {
  name: "blowjob",
  aliases: ["bj"],
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    await client.nsfw(client, message, "blowjob");
  },
};
