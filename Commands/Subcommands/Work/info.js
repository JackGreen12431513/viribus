const Discord = require('discord.js')
const fs = require('fs')

exports.run = (client, message, args, ops, eEmb, userData, write) => {
    
        try {

            var object = userData[message.author.id].jobInfo.jobID;
            var jobData = fs.readFileSync('./Data/Jobs.json', 'utf8')

            if(userData[message.author.id].jobInfo.jobID != "0") {
                var obj = JSON.parse(jobData[object]);
                console.log(object)
                var hiredEmb = new Discord.RichEmbed()
                .setTitle(`${message.author.username}'s Job Info`)
                .setDescription(`Job Title: ${obj.jTitle}\nCompany: ${obj.jCompany}`)
                .setColor(ops.embColor)
                message.channel.send(hiredEmb)
            } else {
                message.channel.send(`🚫 Sorry, **${message.author.username}**, you are not employed!`)
            }


        } catch(e) {
            eEmb(e)
        }
    }