const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb, userData, write) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
        let commandFile = require(`./Subcommands/Work/${args[0]}.js`);
        commandFile.run(client, message, args, ops, eEmb, userData, write);
        } catch(e) {
            eEmb(e)
        }
}