const {
    Client,
    GatewayIntentBits: GB,
    Partials,
    Collection,
  } = require("discord.js"),
  fs = require("node:fs"),
  Logger = require(`./logger`);

module.exports = class BotClient extends Client {
  constructor() {
    super({
      intents: [
        GB.AutoModerationConfiguration,
        GB.AutoModerationExecution,
        GB.DirectMessageReactions,
        GB.DirectMessageTyping,
        GB.DirectMessages,
        GB.GuildEmojisAndStickers,
        GB.GuildInvites,
        GB.GuildMembers,
        GB.GuildMessageReactions,
        GB.GuildMessageTyping,
        GB.GuildMessages,
        GB.GuildModeration,
        GB.GuildPresences,
        GB.GuildScheduledEvents,
        GB.GuildVoiceStates,
        GB.GuildWebhooks,
        GB.Guilds,
        GB.MessageContent,
      ],
      partials: [Partials.Message],
      shards: "auto",
    });

    this.wait = require("util").promisify(setTimeout);
    this.logger = Logger;
    this.commands = new Collection();
    this.slash = new Collection();
    this.cooldowns = new Collection();
    this.slashData = [];
  }

  loadHandlers() {
    const handlers = fs.readdirSync("./src/handlers");

    for (const file of handlers) {
      require(`../handlers/${file}`)(this);
    }
  }
};
