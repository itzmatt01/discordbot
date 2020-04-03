const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json");

module.exports = {
    config: {
        name: "jobs",
        description: "Sends Hosturly Info & Links.",
        usage: "jobs",
        category: "misccellaneous",
        accessableby: "Staff",
    },
    run: async (bot, message, args) => {  
    message.delete(); 
    let Embed = new MessageEmbed()
    .setColor(blue)
    .setDescription(`**Job Opportunities**
    Hello and welcome to Hosturly, LLC. We would love to see you join our team and join us as a company. We are currently not hiring at this moment!

    **Requirements:**
    • Must be 18 years or older
    • You must have a google account
    • You must be able to dedicate atleast 10 hours per week
    
    **Open Positions**
    There are no current open positions please check back at a later date.
    
    **Application Link**
    https://apply.hosturly.com`)
    .setFooter("Last Updated:")
    .setTimestamp()
    message.channel.send({embed: Embed});
    
    let disEmbed = new MessageEmbed()
    .setColor(blue)
    .setTitle("Disclaimer")
    .setDescription(`The open positions that are listed above are subject change at anytime at the discretion of Management Team.`)
    message.channel.send({embed: disEmbed});
  }
}