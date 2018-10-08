    const Discord = require('discord.js')
    const fs = require('fs')
    
    exports.run = (client, message, args, ops, eEmb, userData, write) => {
            if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
        
            try {
    
                var object = userData[message.author.id].jobInfo.jobID;
                var jobData = JSON.parse(JSON.stringify(fs.readFileSync('./Data/Jobs.json', 'utf8')))
    
                if(userData[message.author.id].jobInfo.jobID != "0") {
                    var hiredEmb = new Discord.RichEmbed()
                    .setTitle(`${message.author.username}'s Job Info`)
                    .setDescription(`Job Title: ${jobData[object].jTitle}\nCompany: ${jobData[object].jCompany}`)
                    .setColor(ops.embColor)
                    message.channel.send(hiredEmb)
                } else {
                    message.channel.send(`🚫 Sorry, **${message.author.username}**, you are not employed!`)
                }
    
    
            } catch(e) {
                eEmb(e)
            }
        }