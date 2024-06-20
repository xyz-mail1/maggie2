const Discord = require("discord.js");
const PurrBot = require("$purr/purr");
const api = new PurrBot();

module.exports = (client) => {
  client.handleCommand = async function (client, message, type) {
    const sender = message.author.id;
    const mention = message.mentions.users.first() || message.author;
    const target = mention.id;
    const gif = await api.sfw(type);
    if (!gif) return;

    client.incrementCount(`${type}s`, sender, target);
    const count = await client.getCount(`${type}s`, sender, target);

    const embed = new Discord.EmbedBuilder()
      .setColor("Random")
      .setDescription(`${message.author} ${type}s ${mention}`)
      .setImage(gif.link);
    embed.setFooter({ text: `${type} count: ${count}` });

    await message.reply({
      embeds: [embed],
      allowedMentions: { repliedUser: false },
    });
  };
};
