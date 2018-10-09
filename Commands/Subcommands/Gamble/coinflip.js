const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args, ops, eEmb, userData, write) => {

        try {

            if(!args[1])return message.channel.send("You must put a bet!")

            var choice = "";
            var bet = args[1];

            if(bet > userData[message.author.id].coins)return message.channel.send("You can not bet more than you have!")

            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            collector.on('collect', message => {
                if(message.content.toLowerCase() == "heads") {
                    message.reply("Bet set to HEADS!")
                    choice = "heads";
                    collector.stop();
                    sendRes(choice, bet, doRandHT())
                } else if (message.content.toLowerCase() == "tails") {
                    message.reply("Bet set to TAILS!")
                    collector.stop();
                    choice = "tails";
                    
            sendRes(choice, bet, doRandHT())
                } else {
                    message.reply("Huh?")
                }
            })

            function sendRes(uC, uB, rHit) {
                if(uC == rHit) {
                    message.channel.send(`**You WIN! $V${uB * 2} was added to your balanace!**`)
                    userData[message.author.id].coins += uB * 2
                    write(1)
                } else {
                    message.channel.send(`**You LOOSE! V$${uB} was removed from your balanace!**`)
                    userData[message.author.id].coins -= uB
                    write(1)
                }
            }
            
            function doRandHT() {
                var rand = ['tails','heads'];
                
                return rand[Math.floor(Math.random()*rand.length)];
            }
        } catch(e) {
            eEmb(e)
        }
}