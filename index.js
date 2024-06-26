require("dotenv").config();
require("module-alias/register");

var PrettyError = require("pretty-error");
var pe = new PrettyError();

const token = process.env.token,
  BotClient = require(`./src/helpers/bot`),
  client = new BotClient();

client.loadHandlers();
client.handleCommands();
process.on("unhandledRejection", (error) => {
  console.log(error);
});
process.on("uncaughtException", (error) => {
  console.log(pe.render(error));
});

client.login(token);
