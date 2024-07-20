require('dotenv').config();
const
  { Client } = require('discord.js-selfbot-v13'),
  client = new Client({ checkUpdate: false, }),
  reloadPresence = require("./config.js"),
  keepAlive = require('./keep_alive.js');

keepAlive();

if (!process.env.TOKEN) {
  console.error("Add a token inside Secrets.");
  process.exit();
}

client.login(process.env.TOKEN);

// console.clear();
client.on("ready", async () => {
  global.startTime = new Date();
  reloadPresence(client);
})
