const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json");

module.exports = {
    config: {
        name: "rules",
        description: "Sends the server rules.",
        category: "moderation",
        accessableby: "Moderators",
        deleteCommand: true
    },
    run: async (bot, message, args) => {   
    let sEmbed1 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 1: Respect**`)
    .setDescription(`Respect is to be shown to every member and discord staff team of the server. Disrespecting any member of the server is prohibited.`)
    message.channel.send({embed: sEmbed1});

    let sEmbed2 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 2: Advertising**`)
    .setDescription(`Advertising any other company is prohibited within this server without written consent from the Discord Staff Team. Excludes: DM advertising.`)
    message.channel.send({embed: sEmbed2});

    let sEmbed3 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 3: Spamming**`)
    .setDescription(`Spamming the server (included but not limited to emojis, chat, sending multiple messages in a row, etc.) is prohibited in this server.`)
    message.channel.send({embed: sEmbed3});

    let sEmbed4 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 4: Nicknames**`)
    .setDescription(`Nicknames containing inappropriate content, or a violation of any rule, is prohibited within this server.`)
    message.channel.send({embed: sEmbed4});

    let sEmbed5 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 5: Inappropriate Content**`)
    .setDescription(`Posting any inappropriate content, including but not limited to: nudity, gore, excessive cursing, etc. is prohibited in this server.`)
    message.channel.send({embed: sEmbed5});

    let sEmbed6 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 6: Tagging**`)
    .setDescription(`Excessively tagging members/employees is prohibited. Tagging Discord Staff members without just cause is prohibited within this server.`)
    message.channel.send({embed: sEmbed6});

    let sEmbed7 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 7: Immpersonation**`)
    .setDescription(`Impersonating an employee of Hosturly or the discord staff team is strictly prohibited.`)
    message.channel.send({embed: sEmbed7});

    let sEmbed8 = new MessageEmbed()
    .setColor(blue)
    .setTitle(`**Policy 8: Relevance**`)
    .setDescription(`If you come into our discord to try to gain any point of attack and use that against anyone in our discord, you will be punished. There is no point to public humiliate or bring up an event that has happened and does not relate to Hosturly. If it does not involve Hosturly, leave us out.`)
    message.channel.send({embed: sEmbed8});

  }
}