const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const fs = require('fs');

const userData = JSON.parse(fs.readFileSync('./Data/userData.json', 'utf8'))

const prefix = "vir!"

function write(type) {
    if(type === 1) {
        fs.writeFileSync('./Data/userData.json', JSON.stringify(userData))
    }
}

client.login(process.env.vibTK);

client.on('ready', () => {

})

client.on('guildMemberAdd', member => {
    
})

client.on('message', message => {

    if(!userData[message.author.id]) userData[message.author.id] = {
        realName: message.author.username,
        coins: 0,
        pickaxe: "Rusty Pickaxe",
        emojis: 0,
        timeoutDuration: 10000,
        pickDura: 100
    }
    
    userData[message.author.id].coins++;

    write(1)


    let args = message.content.slice(prefix.length).trim().split(' ')
    let cmd = args.shift().toLowerCase();

    if(message.author.bot)return;
    if(!message.content.startsWith(prefix))return;
    if(message.channel.type == 'dm')return message.channel.send("Unable to use commands in DM's!");

    try {

        delete require.cache[require.resolve(`./Commands/${cmd}.js`)]

        let ops = {
            ownerID: process.env.ownerID,
            embColor: "0xF66A6C"
        }

        function eEmb(eCode) {
            var embed = new Discord.RichEmbed()
            .setColor(ops.embColor)
            .setTitle("Viribus Error!")
            .addField('Output:', `\`\`\`js\n${eCode}\`\`\``)
            .setFooter(Date())
            message.channel.send(embed)
        }


        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(client, message, args, ops, eEmb, userData, write);

    } catch(e) {
        console.log(e.stack);
    }
})

/*var port = process.env.PORT || 5000;
const http = require('http')
var server = http.createServer();
server.listen(process.env.PORT || 5000)

setInterval(function() {
    http.get("http://abraxasdiscordbot.herokuapp.com");
    console.log("Pinged!")
}, 300000); // every 5 minutes (300000)*/
