require('dotenv').config()
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const Maps = require('./Maps')

bot.login(TOKEN);

//add space to avoid equalty check conflicts
let botCommands = ['!map {mapName}', '!maps ', '!franklin ', '!wep ']

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);

});
bot.on('message', msg => {
    if (msg.content.toLowerCase() == '!help') {
        msg.channel.send(botCommands)
    }

    //////////////////////////////////////////////////////////////////////

    if (msg.content.toLowerCase().startsWith('!wep')) {
        msg.channel.send("Command under construction")
    }

    //////////////////////////////////////////////////////////////////////

    if (msg.content.toLowerCase() == "!franklin") {
        msg.reply("kids like a creep or something that plays wow")
    }

    //////////////////////////////////////////////////////////////////////

    if (msg.content.toLowerCase().startsWith("!map")) {
        let userInput = msg.content.split(' ');
        let mapName = userInput[1].toLowerCase()
        let mapFile = Maps.getMapImage(mapName)
        if (mapFile) {
            msg.channel.send(`${mapName}:`, {
                file: mapFile
            })
        } else {
            msg.reply(`Map "${mapName}" does not exist. Use !maps to see available maps.`)
        }
    }

    //////////////////////////////////////////////////////////////////////

    if (msg.content.toLowerCase() == "!maps") {
        msg.channel.send(Maps.listMapNames())
    }




});