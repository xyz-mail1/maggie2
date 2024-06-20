module.exports = {
  name: "blowjob",
  aliases: ["bj"],
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    const commandUsed = message.content.split(" ")[0].slice(1); // Extract command name
    const type =
      commandUsed === "bj" || commandUsed === "blowjob"
        ? commandUsed
        : "blowjob";
    await client.nsfw(client, message, type);
  },
};
