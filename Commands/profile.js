const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb, userData) => {
    
        try {
            if(!message.mentions.members.first()) {
                var myEmb = new Discord.RichEmbed()
                .setTitle(`Your Profile (${message.author.username})`)
                .setThumbnail(message.author.avatartURL)
                .addField(`General:`, `Coins: ${userData[message.author.id].coins}\nViridian: ${userData[message.author.id].Viridian}\nUser Value: ${userData[message.author.id].userValue}`)
                .addField(`Market:`, `Items: ${userData[message.author.id].market.itemsCreated}`)
                .setColor(ops.embColor)
                message.channel.send(myEmb)
            } else {
                var yourEmb = new Discord.RichEmbed()
                .setTitle(`${message.mentions.members.first().user.username}'s Profile`)
                .setThumbnail(message.author.avatartURL)
                .addField(`General:`, `Coins: ${userData[message.mentions.members.first().id].coins}\nViridian: ${userData[message.mentions.members.first().id].Viridian}\nUser Value: ${userData[message.mentions.members.first().id].userValue}`)
                .addField(`Market:`, `Items: ${userData[message.mentions.members.first().id].market.itemsCreated}`)
                .setColor(ops.embColor)
                message.channel.send(yourEmb)
            }
        } catch(e) {
            eEmb(e)
        }
}