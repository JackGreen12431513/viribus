const Discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb) => {
    try {
        if(!args[0]) {
            const normal = new Discord.RichEmbed()
            .setAuthor("Viribus Help")
            .addField("📰 General:", "`vir!help general`", true)
            .addField("🎪 Fun", "`vir!help fun`", true)
            .setColor(ops.embColor)
            message.channel.send(normal)
        } else if (args[0] == "general") {
            const general = new Discord.RichEmbed()
            .setTitle("Viribus Help | General")
            .setDescription("`stats, urban`")
            .setColor(ops.embColor)
            message.channel.send(general)
        } else if (args[0] == "fun") {
            const fun = new Discord.RichEmbed()
            .setTitle("Viribus Help | Fun")
            .setDescription("`mine`")
            .setColor(ops.embColor)
            message.channel.send(fun)
        }
    } catch(e) {
        eEmb(e)
    }
}