const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
            delete require.cache[require.resolve(`./${args[0]}.js`)]
        } catch(e) {
            return message.channel.send(`Unable to reload: \`${args[0]}\``)
        }
    
        message.channel.send(`Successfully reloaded: \`${args[0]}\``)
}