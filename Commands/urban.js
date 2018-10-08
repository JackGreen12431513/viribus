exports.run = async (client, message, args, ops, eEmb) => {
    try {
        const Discord = require("discord.js");
        const snek = require("snekfetch");

        if(!message.channel.nsfw)return message.channel.send("🚫 Please use this command in a NSFW channel!")

        if(!args) {
          return message.reply("Give me something to search!");
        }
        snek.get("http://api.urbandictionary.com/v0/define?term=" + args).then(res => {
          if(res.body.list[0] === undefined) {
            return message.channel.send("Could not find that term");
          }
          const def = res.body.list[0].definition;
          const word = res.body.list[0].word;
          const author = res.body.list[0].author;
          const exam = res.body.list[0].example;
          const thumbup = res.body.list[0].thumbs_up;
          const thumbdown = res.body.list[0].thumbs_down;
          const embed = new Discord.RichEmbed()
          .setColor(ops.embColor)
          .setTitle(`Info for: **${word}**`)
          .addField("Definition:", `${def}`)
          .addField("Author:", `${author}`)
          .addField("Ratings", `:thumbsup: ${thumbup} :thumbsdown: ${thumbdown}`, true)
          message.channel.send({embed}).catch(e => eEmb(e));
        }).catch(err => {
          if(err) {}
        });
    } catch(e) {
        eEmb(e)
    }
}