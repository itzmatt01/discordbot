const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json");

module.exports = {
    config: {
        name: "staffinfo",
        description: "Sends Hosturly Info & Links.",
        usage: "staffinfo",
        category: "misccellaneous",
        accessableby: "Staff",
    },
    run: async (bot, message, args) => {  
    message.delete(); 
    let Embed = new MessageEmbed()
    .setColor(blue)
    .setTitle("Staff Information")
    .setDescription(`
    Below you will find all of the Hosturly Staff Information & Links. If anyone sees an outdated link then please Contact Matthew C. to update it.

    Useful Links

    Submit a ticket:
    https://hosturly.com/billing/contact.php
    
    Review us on these sites:
    Trustpilot: https://www.trustpilot.com/review/hosturly.com
    • [Customer Support Roster](https://docs.google.com/spreadsheets/d/1aAN8oIvKc_IZz16wEm15vWUzpLRIqz6L_NGnvBZPg0U/edit?usp=sharing)  
    • [Sales Team Roster]()
    • [Billing Team Roster]()
    • [Management Team Roster](https://docs.google.com/spreadsheets/d/1OJCanPT8-d_mZfE_kIzUdtUlGGMxHsrjIO36-gdb60M/edit?usp=sharing)
    Twitter: https://twitter.com/hosturly/
    Facebook: https://facebook.com/hosturly/
    Instagram: https://instagram.com/hosturly/
    Linkedin: https://linkedin.com/company/hosturly/`)
    .setFooter("Last Updated:")
    .setTimestamp()
    message.channel.send({embed: Embed});
  }
}