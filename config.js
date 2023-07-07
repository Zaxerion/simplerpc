const
  discord = require("discord.js-selfbot-v13");
 
function reloadPresence(client) {
    const activity = new discord.RichPresence()
      //see all command https://discordjs-self-v13.netlify.app/#/docs/docs/main/class/RichPresence or https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md
        .setApplicationId("your bot application id")
        .setType("PLAYING")
        .setName("Cyber punk")
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("mp:icons/1120755328267583559/a65ec7583c9986ea1faf8c3f02259916.webp")
        .setAssetsSmallImage("mp:avatars/390832676778803200/f72c077c48fb9b5c42a1d44330ec5f22.png")
        .setAssetsSmallText("Zaxerion")
        .addButton('Github', "https://github.com/Zaxerion/")
        .addButton('Paypal', "https://paypal.me/zaxerion")
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("idle")
};
module.exports = reloadPresence;
