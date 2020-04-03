const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json");

module.exports = {
    config: {
        name: "selfpromo",
        description: "Sends the self promotion rules.",
        category: "moderation",
        accessableby: "Moderators",
        deleteCommand: true
    },
    run: async (bot, message, args) => { 
        let sEmbed1 = new MessageEmbed()
        .setColor(blue)
        .setTitle(`**Self Promotion Rules**`)
        .setDescription(`This channel is for advertising anything as long as it abides by the rules. You **MAY NOT** post links to other companies here.

        - This channel will be cleared every month.
         
        - You may post anything (social media, communities, etc) so long as it is not a company.
        
        - Please only advertise your community one time, this includes other people advertising it for you.
        
        - You may bump your post, however you must delete the old message.
        
        - Make sure your invite link is permanent, if it expires you will be asked to fix it or your post may be deleted.
        
        - If you leave, your post will be deleted. If you join solely to advertise and leave after posting, you will be warned.
        
        - Do not post jokes, fake ads, or ads with servers who violate Discord TOS or may cause harm.
        
        - You may only post your ad once you have been a member here for AT LEAST **10 days**.`)
        message.channel.send({embed: sEmbed1});
    
    }
}
