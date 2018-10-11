const Discord = require('discord.js')
const fs = require('fs')

exports.run = (client, message, args, ops, eEmb, userData, write) => {

        try {

            const viridians = JSON.parse(fs.readFileSync('../Data/Viridians.json', 'utf8'))

            if(viridians[message.author.id])return message.channel.send("🚫 You are already a Viridian!")

            message.channel.send("Are you sure you would like to buy Viridian Membership? (**V$2500**)\n React with eiter 💵 or 🚫")
            client.on('messageReactionAdd', (reaction, user) => {
                if(reaction.emoji.name === "💵") {
                    if(userData[message.author.id].coins >= 2500) {

                        viridians[message.author.id] = {
                            tag: message.author.tag
                        }

                        fs.writeFileSync('../Data/Viridians.json', JSON.stringify(viridians))
                        userData[message.author.id].coins -= 2500;
                        userData[message.author.id].Viridian = true;
                        write(1)
                    }
                } 
                else if(reaction.emoji.name === "🚫") 
                {
                    message.reply("cancelled buying Viridian!")
                }
            });
        } catch(e) {
            eEmb(e)
        }
}