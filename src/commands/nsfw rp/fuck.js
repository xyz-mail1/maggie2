module.exports = {
  name: "fuck",
  aliases: ["sex", "bang", "rape"],
  cooldown: 3,
  SnM: 1,
  run: async (client, message, args) => {
    const startTime = Date.now();
    client.purrPrefixNsfw(client, message, "fuck", true, "fucks");
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    console.log(
      `Command '${module.exports.name}' executed in ${elapsedTime}ms`
    );
  },
};
