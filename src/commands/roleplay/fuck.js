module.exports = {
  name: "fuck",
  aliases: ["sex", "bang", "rape"],
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    const commandUsed = message.content.split(" ")[0].slice(1); // Extract command name
    const type =
      commandUsed === "fuck" ||
      commandUsed === "sex" ||
      commandUsed === "bang" ||
      commandUsed === "rape"
        ? commandUsed
        : "fuck";
    await client.nsfw(client, message, type);
  },
};
