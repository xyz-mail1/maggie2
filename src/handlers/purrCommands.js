const Discord = require("discord.js");
const PurrBot = require("$purr/purr");

const api = new PurrBot();
const { updateCommandUsage, getCommandUsage } = require("../utils/utils");

module.exports = (client) => {
  async function sendGif(client, message, type, db, isNsfw) {
    const gif = await (isNsfw ? api.nsfw(type) : api.sfw(type));
    if (!gif) return;

    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setImage(gif.link);
    if (db) {
      const author = message.author;
      const mention = message.mentions.users.first() || message.author;

      updateCommandUsage(type, author.id, mention.id);
      const usageCount = await getCommandUsage(type, author.id, mention.id);

      embed
        .setDescription(`${message.author} ${type}s ${mention}`)
        .setFooter({ text: `${type} count: ${usageCount}` });

      if (mention === author) {
        embed.setDescription(`${message.author} ${type}s themselves`);
      }
    }

    return message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  }

  client.purrPrefixSfw = async (client, message, type, db) => {
    await sendGif(client, message, type, db, false);
  };

  client.purrPrefixNsfw = async (client, message, type, db) => {
    await sendGif(client, message, type, db, true);
  };
};
