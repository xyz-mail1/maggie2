const { NekoBot } = require("nekobot-api");
const api = new NekoBot();

// maige endpoint
(async () => {
  const image = await api.get("ass");
  console.log(image);
})();

console.log("");
