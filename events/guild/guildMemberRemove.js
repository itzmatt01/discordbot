const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json")

module.exports = async (bot, member, message) => {
    let server = bot.channels.cache.get(`670043957350236161`);
    if(!server) return;

    let embed = new MessageEmbed() 
        .setAuthor(member.displayAvatarURL)
        .setTitle("Member Left")
        .setDescription(` ${member.user.tag} left.`)
        .setColor(blue)
        .setTimestamp()
        .setFooter(`ID: ${member.id}`)
        server.send(embed)
  };