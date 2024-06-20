module.exports = {
  name: "bite",
  aliases: ["eat", "nom"],
  cooldown: 3,
  SnM: false,
  run: async (client, message, args) => {
    const commandUsed = message.content.split(" ")[0].slice(1); // Extract command name
    const type =
      commandUsed === "bite" || commandUsed === "eat" || commandUsed === "nom"
        ? commandUsed
        : "bite"; // Default to "bite" if somehow it doesn't match
    await client.handleCommand(client, message, type);
  },
};
