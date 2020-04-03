const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json");

module.exports = {
    config: {
        name: "links",
        description: "Sends Hosturly Info & Links.",
        usage: "!links",
        category: "misccellaneous",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {  
    message.delete(); 
    let Embed = new MessageEmbed()
    .setColor(blue)
    .setDescription(`**[Welcome to Hosturly's Dicord](https://hosturly.com/)**\n
    This is our official discord server which allows members to interact with one another and request customer support. Support is providied by our employees on our website. Alternatively, member(s) of our community may choose to assist you in #community-support.

    Useful Links

    Submit a ticket:
    https://hosturly.com/billing/contact.php
    
    Review us on these sites:
    Hostpicker: 
    Trustpilot: https://www.trustpilot.com/review/hosturly.com

    Social Media
    Twitter: https://twitter.com/hosturly/
    Facebook: https://facebook.com/hosturly/
    Instagram: https://instagram.com/hosturly/
    Linkedin: (Coming Soon)`)
    .setFooter("Last Updated:")
    .setTimestamp()
    message.channel.send({embed: Embed});
  }
}