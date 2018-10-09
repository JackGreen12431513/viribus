const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb, userData, write) => {
    
        try {
        let commandFile = require(`./Subcommands/Market/${args[0]}.js`);
        commandFile.run(client, message, args, ops, eEmb, userData, write);
        } catch(e) {
            eEmb(e)
        }
}