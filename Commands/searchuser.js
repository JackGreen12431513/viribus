const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb) => {
    try {
        let users = client.users;

        let searchTerm = args[0];
        if(!searchTerm) return message.channel.send("Please supply valid paramaters!")
        
        let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
        var matchF = matches.map(u => u.tag).join("\n")
        if(matchF == "") {
            var emb = new Discord.RichEmbed()
            .setTitle("No Users Found!")
            .setColor(ops.embColor)
            .setFooter("Note: This is across all guilds this bot is in!")
            message.channel.send(emb)   
        } else {
            var emb = new Discord.RichEmbed()
            .setTitle("Users:")
            .setDescription(matchF)
            .setColor(ops.embColor)
            .setFooter("Note: This is across all guilds this bot is in!")
            message.channel.send(emb)   
        }

    } catch(e) {
        eEmb(e)
    }
}