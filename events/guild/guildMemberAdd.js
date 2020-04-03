const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json")

module.exports = async (bot, member, message) => {
    member.guild.channels.cache.find(c => c.name === 'new-members').send(`Welcome to **${member.guild}**, ${member}! We offer **cheap**, **fast**, and **reliable** Game Servers, VPS Hosting, Website Hosting, and Dedicated Servers. If you are interested in placing an order, head over to <https://hosturly.com/>. If you ever need any assistance, just open a ticket and a support agent will be with you shortly! Thanks for joining and believing in Hosturly!
    `)
    let server = bot.channels.cache.get(`670043957350236161`);
    if(!server) return;
    
    let embed = new MessageEmbed() 
        .setTitle("Member Joined")
        .setDescription(` ${member.user.tag} joined.`)
        .setColor(blue)
        .setTimestamp()
        .setFooter(`ID: ${member.id}`)
        server.send(embed)
        
        member.roles.add(member.guild.roles.cache.get(`670043027464781865`))
  };