const discord = require('discord.js')

exports.run = (client, message, args, ops, eEmb, userData, write) => {
        if(message.author.id !== ops.ownerID) return message.channel.send("🚫 Sorry, you can not use this command!")
    
        try {
            try {
              const code = message.content.replace("vir!eval", "");
              let evaled = eval(code);
            
              if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
            
              //message.channel.send(clean(evaled), {code:"xl"});
              var embed = new discord.RichEmbed()
              .setColor(ops.embColor)
              .setTitle("Viribus Eval!")
              .addField('Input:', `\`\`\`js\n${code}\`\`\``)
              .addField('Output:', `\`\`\`js\n${clean(evaled)}\`\`\``)
              message.channel.send(embed)
            } catch (err) {
              message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }

            function clean(text) {
                if (typeof(text) === "string")
                  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                else
                    return text;
              }
        } catch(e) {
            eEmb(e)
        }
}
