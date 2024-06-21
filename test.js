const RedditImageFetcher = require("reddit-image-fetcher");
RedditImageFetcher.fetch({
  type: "custom",
  total: 1,
  subreddit: ["nsfwcosplay"],
  allowNSFW: true,
}).then((result) => {
  console.log(result[0].image);
});
