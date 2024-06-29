const Discord = require("discord.js");
const PurrBot = require("$purr/purr");

const api = new PurrBot();

module.exports = (client) => {
  async function sendGif(client, message, type, isNsfw) {
    const gif = await (isNsfw ? api.nsfw(type) : api.sfw(type));
    if (!gif) return;

    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setImage(gif.link);

    const author = message.author;
    const mention = message.mentions.users.first() || message.author;

    embed.setDescription(`${message.author} ${type}s ${mention}`);

    if (mention === author) {
      embed.setDescription(`${message.author} ${type}s themselves`);
    }

    return message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  }

  client.purrPrefixSfw = async (client, message, type) => {
    await sendGif(client, message, type, false);
  };

  client.purrPrefixNsfw = async (client, message, type) => {
    await sendGif(client, message, type, true);
  };
};
