const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
            const path = require('path');
            const fs = require('fs');
            const directoryPath = __dirname;
            var itemsFile = "";
            fs.readdir(directoryPath, function (err, files) {
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                } 
                files.forEach(function (file) {
                    if(!itemsFile == "") {
                        itemsFile += ", " + file 
                    } else {
                        itemsFile += file
                    }
                });
                
                var emb = new Discord.RichEmbed()
                .setAuthor("Alfie Commands")
                .setDescription(itemsFile)
                .setFooter(Date())
                message.author.send(emb)
            });
        } catch(e) {
            eEmb(e)
        }
}