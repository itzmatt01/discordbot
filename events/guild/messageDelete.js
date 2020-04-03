const { bot, MessageEmbed } = require('discord.js');

module.exports = async (message) => { 
    if(!message.partial) {
        const channel = client.channels.cache.get('669217989027168258')
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle("Deleted Message")
                .addField('Author', `${message.author.tag} (${message.author.id})`)
                .addField('Channel', `${message.channel.name} (${message.channel.id})`)
                .setDescription(message.content)
                .setThumbnail();
            channel.send(embed);
        }
    }
};