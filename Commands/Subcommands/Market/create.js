const Discord = require('discord.js')
const fs = require('fs')

exports.run = (client, message, args, ops, eEmb, userData, write) => {    

    const marketData = JSON.parse(fs.readFileSync('./Data/MarketItems.json', 'utf8'))

        try {

            if(userData[message.author.id].Viridan == false && userData[message.author.id].market.itemsCreated == 1)return message.channel.send("🚫 You can not make more than 1 item as a non-Viridian!")

            
            

        } catch(e) {
            eEmb(e)
        }
    }