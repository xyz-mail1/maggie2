const Discord = require("discord.js");
const PurrBot = require("$purr/purr");
const api = new PurrBot();
const { updateCommandUsage, getCommandUsage } = require("../../utils");
module.exports = (client) => {
  client.handleCommand = async function (client, message, type) {
    const mention = message.mentions.users.first() || message.author;
    const author = message.author;
    const gif = await api.sfw(type);
    if (!gif) return;
    updateCommandUsage(author.id, mention.id, type);

    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setDescription(`${message.author} ${type}s ${mention}`)
      .setImage(gif.link);

    await message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
  client.nsfw = async function (client, message, type) {
    const mention = message.mentions.users.first() || message.author;

    const gif = await api.nsfw(type);
    if (!gif) return;

    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setDescription(`${message.author} ${type}s ${mention}`)
      .setImage(gif.link);

    await message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
};
