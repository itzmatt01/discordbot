const Discord = require("discord.js")

  module.exports = {  
  config: {
    name: "say",
    description: "Send messages from the bot.",
    usage: "!say",
    catagory: "moderation",
    accessableby: "Moderators",
  },
  run: async (bot, message, args) => { 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to use this command.");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage)
  }
}