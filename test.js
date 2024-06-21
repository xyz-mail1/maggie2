const justreddit = require("justreddit");
(async () => {
  const image = await justreddit.randomImageFromSub({
    subReddit: "nsfwcosplay",
    postGetLimit: 1,
    sortType: "random",
  });

  console.log(image);
})();
