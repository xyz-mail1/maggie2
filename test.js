require("module-alias/register");
const purr = require("$purr/purr");
const api = new purr();
async function link() {
  const gif = await api.nsfw("blowjob");
  console.log(gif);
}
link();
