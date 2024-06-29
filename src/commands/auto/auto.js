const { EmbedBuilder } = require("discord.js");
const nekobot = require("../../wrapper/neko");
const api = new nekobot();
module.exports = {
  name: "auto",
  SnM: true,
  run: async (client, message, args) => {
    const channel = message.channel.id;
    async function autolewd() {
      const image = await api.image(args);
      const link = image.message;
      const embed = new EmbedBuilder()
        .setImage(link)
        .setColor("LuminousVividPink");
      await client.channels.cache.get(channel).send({ embeds: [embed] });
    }
    try {
      setInterval(autolewd, 60000);
    } catch (err) {
      message.channel.send({ content: `auto command stopped due to error` });
      console.log(err);
    }
  },
};
