const Discord = require("discord.js");
const { NekoBot } = require("nekobot-api");
const neko = new NekoBot();

module.exports = (client) => {
  client.handleNeko = async function (client, message, type) {
    const image = await neko.get(type);
    if (!image) return message.reply("error");
    const embed = new Discord.EmbedBuilder().setColor("Random").setImage(image);
    await message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
};
