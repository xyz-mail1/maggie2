const Discord = require("discord.js");
const PurrBot = require("$purr/purr");

const api = new PurrBot();

module.exports = (client) => {
  async function sendGif(client, message, type, isNsfw, needTag, desc) {
    const gif = await (isNsfw ? api.nsfw(type) : api.sfw(type));
    if (!gif) return;

    const embed = new Discord.EmbedBuilder()
      .setColor("Blue")
      .setImage(gif.link);
    if (!needTag) {
      return message.reply({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      });
    } else {
      const author = message.author;
      const mention = message.mentions.users.first() || message.author;

      embed.setDescription(`${message.author} ${desc} ${mention}`);

      if (mention === author) {
        embed.setDescription(`${message.author} ${desc} themselves`);
      }

      return message.reply({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      });
    }
  }

  client.purrPrefixSfw = async (client, message, type, needTag, desc) => {
    await sendGif(client, message, type, false, needTag, desc);
  };

  client.purrPrefixNsfw = async (client, message, type, needTag, desc) => {
    await sendGif(client, message, type, true, needTag, desc);
  };
};
