const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "clear",
        description: "Clears a certain amount of messages.",
        usage: "!clear",
        category: "moderation",
        accessableby: "Staff",
    },
    run: async (bot, message, args) => {
    let server = bot.channels.cache.get(`670043957350236161`);
    if(!server) return;
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are not allowed to use this command.")
    if(!args[0]) return message.channel.send("Enter a number from 2 to 100 for me to delete.");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`:hammer: **${message.author.username}#${message.author.discriminator}** Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));

        let embed = new MessageEmbed()
        .setTitle("Bulk Messages Deleted")
        .setColor(`#1badfa`)
        .addField("Deleted messages:", `${args[0]}`)
        .addField("Channel", `<#${message.channel.id}>`)
        .setFooter(`Command executed by ${message.author.username}`)
        .setTimestamp()
    
        server.send(embed);
    });
    }
}