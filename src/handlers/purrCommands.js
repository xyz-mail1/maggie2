const Discord = require("discord.js");
const PurrBot = require("$purr/purr");

const api = new PurrBot();
const { updateCommandUsage, getCommandUsage } = require("../utils/utils");
module.exports = (client) => {
  client.purrPrefixSfw = async function (client, message, type, db) {
    const gif = await api.sfw(type);
    if (!gif) return;
    if (db) {
      const author = message.author;
      const mention = message.mentions.users.first() || message.author;

      updateCommandUsage(type, author.id, mention.id);
      const usageCount = await getCommandUsage(type, author.id, mention.id);
      const embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setDescription(`${message.author} ${type}s ${mention}`)
        .setImage(gif.link)
        .setFooter({ text: `${type} count: ${usageCount}` });
      if (mention === author)
        embed.setDescription(`${message.author} ${type}s themselves`);

      return message.reply({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      });
    } else {
      const embed = new Discord.EmbedBuilder()
        .setImage(gif.link)
        .setColor("Random");
      return message.reply({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      });
    }
  };
  client.purrPrefixNsfw = async function (client, message, type) {
    const mention = message.mentions.users.first() || message.author;
    const gif = await api.nsfw(type);
    if (!gif) return;

    const author = message.author;

    updateCommandUsage(type, author.id, mention.id);
    const usageCount = await getCommandUsage(type, author.id, mention.id);

    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setDescription(`${message.author} ${type}s ${mention}`)
      .setImage(gif.link)
      .setFooter({ text: `${type} count: ${usageCount}` });
    if (mention === author)
      embed.setDescription(`${message.author} ${type}s themselves`);
    return message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
};
