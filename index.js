require("dotenv").config();
require("module-alias/register");

const token = process.env.token,
  BotClient = require(`./src/helpers/bot`),
  client = new BotClient();

client.loadHandlers();
client.handleCommands();
process.on(["unhandledRejection", "uncaughtException"], (error) => {
  console.log(error);
});

client.login(token);
