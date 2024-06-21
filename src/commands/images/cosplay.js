const reddit = require("reddit-image-fetcher");

module.exports = {
  name: "cosplay",
  run: async (client, message, args) => {
    const result = await reddit.fetch({
      type: "custom",
      total: 1,
      subreddit: ["nsfwcosplay"],
      allowNSFW: true,
    });
    const img = result[0].image;
    await message.reply(img);
  },
};
