const { MessageEmbed } = require("discord.js")
const { botversion } = require("../../config/config");

module.exports = {
    config: {
        name: "info",
        description: "Sends the Bot Info.",
        usage: "!info",
        category: "miscellaneous",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
        message.delete()
        let botembed = new MessageEmbed()
        .setTitle("Hosturly Bot")
        .setDescription("The Hosturly Bot is coded and maintained by Matthew C.")
        .addField("Version:", `${botversion}`)
        .setColor(`#1badfa`)
        .setFooter("Last Updated:")
        .setTimestamp()
          message.channel.send(botembed);
    }
}