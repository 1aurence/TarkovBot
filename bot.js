require('dotenv').config()
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const Maps = require('./Maps')

bot.login(TOKEN);

//Add space to avoid equalty check conflicts in commands
let botCommands = ['!maps {mapName}', '!maps list', '!franklin ', '!wep {weapon}']

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);

});

//Commands
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

    if (msg.content.toLowerCase().startsWith("!maps")) {
        let userInput = msg.content.split(' ');
        let mapsCommand = userInput[1] //list or mapName
        let mapFile = Maps.getMapImage(mapsCommand)

        if (mapsCommand == 'list') {
            msg.channel.send(Maps.listMapNames())
        } else {
            if (mapFile) {
                msg.channel.send(`${mapsCommand}:`, {
                    file: mapFile
                })
            } else {
                msg.reply(`Map "${mapsCommand}" does not exist. Use !maps to see available maps.`)

            }
        }





    }

    //////////////////////////////////////////////////////////////////////





});