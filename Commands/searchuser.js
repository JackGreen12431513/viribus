const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb) => {
    try {
        let users = client.users;

        let searchTerm = args[0];
        if(!searchTerm) return message.channel.send("Please supply valid paramaters!")
        
        let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

        var emb = new Discord.RichEmbed()
        .setTitle("Possible Users:")
        .setDescription(matches.map(u => u.tag).join("\n"))
        .setColor(ops.embColor)
        .setFooter("Note: This is across all guilds this bot is in!")
        message.channel.send(emb)

    } catch(e) {
        eEmb(e)
    }
}