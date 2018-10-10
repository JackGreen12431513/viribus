const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
            message.channel.bulkDelete(args[0])
        } catch(e) {
            eEmb(e)
        }
}