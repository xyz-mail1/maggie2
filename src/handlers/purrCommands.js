const Discord = require("discord.js");
const PurrBot = require("$purr/purr");
const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");
const api = new PurrBot();
const { updateCommandUsage, getCommandUsage } = require("../../utils");
module.exports = (client) => {
  client.purrPrefixSfw = async function (client, message, type) {
    const mention = message.mentions.users.first() || message.author;
    const author = message.author;
    const gif = await api.sfw(type);
    if (!gif) return;
    updateCommandUsage(type, author.id, mention.id);
    const usageCount = await getCommandUsage(type, author.id, mention.id);
    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setDescription(`${message.author} ${type}s ${mention}`)
      .setImage(gif.link);
    embed.setFooter({ text: `${type} count: ${usageCount}` });

    return message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
  client.purrPrefixNsfw = async function (client, message, type) {
    const mention = message.mentions.users.first() || message.author;
    const author = message.author;
    const gif = await api.nsfw(type);
    if (!gif) return;
    updateCommandUsage(type, author.id, mention.id);
    const usageCount = await getCommandUsage(type, author.id, mention.id);

    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setDescription(`${message.author} ${type}s ${mention}`)
      .setImage(gif.link);
    embed.setFooter({ text: `${type} count: ${usageCount}` });

    return message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
};
