const
  discord = require("discord.js-selfbot-v13");
 
function reloadPresence(client) {
    const activity = new discord.RichPresence()
      //more command https://discordjs-self-v13.netlify.app/#/docs/docs/main/class/RichPresence or https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md
        .setApplicationId("858672015451881483")
        .setType("PLAYING")
        .setName("MIAW")
        .setDetails("miawww...")
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("mp:icons/1120755328267583559/a65ec7583c9986ea1faf8c3f02259916.webp")
        .setAssetsLargeText("Miawww")
        .setAssetsSmallImage("mp:avatars/390832676778803200/f72c077c48fb9b5c42a1d44330ec5f22.png")
        .setAssetsSmallText("Zaxerion")
        .addButton('Facebook', "https://www.facebook.com/zaxerionn")
        .addButton('Paypal', "https://paypal.me/zaxerion")
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("idle")
};
module.exports = reloadPresence;
