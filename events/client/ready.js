const { MessageEmbed } = require("discord.js")
const { blue } = require("../../colours.json")

module.exports = async bot => {
    console.log(`${bot.user.tag} has logged in.`)
    let server = bot.channels.cache.get(`670043928501813248`);
    if(!server) return;
      
    let Var = bot.guilds.cache.get("669217989027168258");
    
    let rEmbed = new MessageEmbed()
      .setAuthor("Bot Restarted!", Var.iconURL)
      .setDescription(`I have either been restarted manually or automatically after an error occurred. Check bot logs for more information.`)
      .setColor(blue)
      .setTimestamp()
    server.send(rEmbed);

}