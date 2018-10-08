const Discord = require('discord.js')
const fs = require('fs')

exports.run = (client, message, args, ops, eEmb, userData, write) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
            if(!userData[message.author.id].jobInfo.jobTitle == "Unemployed") {
                message.channel.send("🚫 Sorry, you are currently employed!")
            }

            message.channel.send("Would you like to make your own buisnes? (**V$500**)\n Respond with either 💵 or 🚫")
            client.on('messageReactionAdd', (reaction, user) => {
                if(reaction.emoji.name === "💵") {
                    //Run Code for Custom Buisness
                } 
                else if(reaction.emoji.name === "🚫") 
                {
                    const jobs = JSON.parse(fs.readFileSync('./Data/Jobs.json', 'utf8'))
                    const values = Object.values(jobs)
                
                    const randomValue = values[parseInt(Math.random() * values.length)]
                message.channel.send(`The selected job for you is: ${randomValue.jTitle}`)
                var jInfoEmb = new Discord.RichEmbed()
                .setTitle(randomValue.jTitle)
                .addField("Job Info:", `Owner: ${randomValue.jOwner}\nCompany: ${randomValue.jCompany}`)
                .setColor(ops.embColor)
                message.channel.send(jInfoEmb)
                userData[message.author.id].jobInfo.jobID = randomValue.jID;
                write(1)
            }
            });
    
        } catch(e) {
            eEmb(e)
        }
    }