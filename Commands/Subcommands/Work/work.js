const Discord = require('discord.js')
const fs = require('fs')

let lastWorkCommandUse, lastWorkCommandUser;

exports.run = (client, message, args, ops, eEmb, userData, write) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
            
        } catch(e) {
            eEmb(e)
        }
    }