const Discord = require('discord.js')
const fs = require('fs');

exports.run = (client, message, args, ops, eEmb, userData, write) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
                const hat = JSON.parse(fs.readFileSync('./Marketplace/Items.json', 'utf8'))
                var catalogItems = [];
                const values = Object.values(hat)
            
                const randomValue = values[parseInt(Math.random() * values.length)]
            
                if (randomValue.ItemName != "Swarley Sword") {
            
                    if (!catalogItems.includes(randomValue.ItemName)) {
                
                        catalogItems.push(randomValue.ItemName)
                        var itemEmb = new Discord.RichEmbed()
                        .setAuthor("NEW ITEM RELEASED!")
                        .setTitle(`${randomValue.ItemName}`)
                        .addField(`Info`, `Description: ${randomValue.ItemDesc}\nPrice: V$${randomValue.ItemPrice}`)
                        .setThumbnail(randomValue.ItemImgURL)
                        .setFooter('React with 💵 to buy!')
                        message.channel.send(itemEmb)
                        client.on('messageReactionAdd', (reaction, user) => {
                            if(reaction.emoji.name === "💵") {
                                if (userData[user.id].coins >= randomValue.ItemPrice) {
                                    userData[user.id].coins -= randomValue.ItemPrice;
                                    userData[user.id].ItemsOwned[randomValue.ItemName.replace(/ /g,'')] += 1;
                                    userData[user.id].userValue += randomValue.ItemPrice;
                                    write(1)
                                } else {
            
                                }
                            }
                        });
                    } else {
            
                    }
                } else {
            
                }
        } catch(e) {
            eEmb(e)
        }
}