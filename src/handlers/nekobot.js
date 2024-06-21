const Discord = require("discord.js");
const nekobot = require("$purr/neko");
const api = new nekobot();
module.exports = (client) => {
  client.handleNeko = async function (client, message, type) {
    const image = await api.image(type);

    if (!image) return message.reply("error");
    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setImage(image.message);
    await message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
};
