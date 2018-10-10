const discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb, userData, write) => {
try {

    var sender = message.author;
    let subCmdMine = args[0]
    if(!subCmdMine) {
       var mineEmb = new discord.RichEmbed()
       .setAuthor("")
       message.channel.send()
    }
    else if (subCmdMine == "start") {
        if (userData[sender.id].pickDura >= 1) {
            message.channel.send(`You started to mine with ${JSON.stringify(userData[sender.id].pickaxe)}`)
            setTimeout(function(){
                var coins = Math.floor(Math.random() * 20 ) + 1;
                var duraTakeaway = Math.floor(Math.random() * 15 ) + 1;
                message.channel.send(`You mined ${coins} coins, but your pickaxe durability went down ${duraTakeaway}!`);
                userData[sender.id].pickDura -= duraTakeaway
                userData[sender.id].coins += coins;
            }, userData[sender.id].timeoutDuration)
        } else {
            message.reply("Your pickaxe is broken! Would you like to repair it for `V$50` (✅ or 🚫)")
            client.on('messageReactionAdd', (reaction, user) => {
                if(reaction.emoji.name === "✅") {
                    if (userData[sender.id].coins >= 50) {
                        message.channel.send(`Repairing your pickaxe!`)
                        userData[sender.id].coins -= 50;
                        userData[sender.id].pickDura += 100;
                        write(1);
                    } else {
                        message.reply("You do not have enough coins!")
                    }
                } else  if(reaction.emoji.name === "🚫") {
                    message.channel.send(`Your pickaxe has not been repaired!`)
                }
            })
    
        }
    } else if (subCmdMine == "market") {
        var mineMarketEmb = new discord.RichEmbed()
        .setTitle("⛏ Mine Marketplace")
        .addField("Rusty Pickaxe", "Price: Free\nTimeout: 10s")
        .addField("Stone Pickaxe", "Price: V$500\nTimeout: 9s\nEmoji: 🕐")
        .addField("Iron Pickaxe", "Price: V$1000\nTimeout: 8s\nEmoji: 🕑")
        .setColor(ops.embColor)
        message.channel.send(mineMarketEmb);
        client.on('messageReactionAdd', (reaction, user) => {
        if(reaction.emoji.name === "🕐") {
            if (userData[sender.id].coins >= 500) {
                message.channel.send("Bought `Stone Pickaxe`")
                userData[sender.id].coins -= 500;
                userData[sender.id].pickaxe = "Stone Pickaxe";
                userData[sender.id].timeoutDuration = "9000";
                userData[sender.id].pickDura = "100";
                write(1);
                return;
            } else {
                message.channel.send("Not enough coins!")
            }
        } else if(reaction.emoji.name === "🕑") {
            if (userData[sender.id].coins >= 1000) {
                message.channel.send("Bought `Iron Pickaxe`")
                userData[sender.id].coins -= 1000;
                userData[sender.id].pickaxe = "Iron Pickaxe";
                userData[sender.id].timeoutDuration = "8000";
                userData[sender.id].pickDura = "100";
                write(1);
                return;
            } else {
                message.channel.send("Not enough coins!")
            }
        }
    })
    } else if (subCmdMine == "deposit") {
        if (userData[sender.id].coins >= 100) {
            userData[sender.id].coins -= 100;
            userData[sender.id].emojis += 1;
            message.channel.send("You now have " + userData[sender.id].emojis + " emojis!")
        } else {
            message.reply("You do not have enought to deposit!")
        }
    } else if (subCmdMine == "stats") {
        var statsEmb = new discord.RichEmbed()
        .setTitle(`Mine stats for ${sender.username}`)
        .addField(`Pickaxe:`, `Pickaxe: ${userData[sender.id].pickaxe}\nDurability: ${userData[sender.id].pickDura}/100\nTimeout: ${userData[sender.id].timeoutDuration}ms`)
        .addField(`Currency:`, `Coins: V$${userData[sender.id].coins}\nEmojis: ${userData[sender.id].emojis}`)
        .setColor(ops.embColor)
        message.channel.send(statsEmb);
    } else if (subCmdMine == "sell") {
        var sellPrices = [100,250,200,500,100,100,100,200,300,400,330,1000,100,250,200]
        var realSellPrice = sellPrices[Math.floor(Math.random()*sellPrices.length)];
        if (userData[sender.id].emojis >= 1) {
            message.channel.send(`Selling 1 emoji for V$${realSellPrice}`);
            userData[sender.id].emojis -= 1;
            userData[sender.id].coins += realSellPrice;
            write(1);
        } else {
            message.reply("not enough emojis!")
        }
    }
} catch(e) {
    eEmb(e)
}
}