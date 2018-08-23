const Discord = require('discord.js')
const bot = new Discord.Client()
const client = require('nekos.life');
const neko = new client();
 



bot.on('message', function(message){
    if(message.channel.id === ('481901539456450579'))
        switch(message.content.startsWith('@NSFW')){
            case message.content === '@NSFW tits'
                : message.reply(neko.getNSFWBoobs().content);
                break
            case message.content === '@NSFW ass'
                : message.reply(neko.getNSFWAnal().content);
                break
            case message.content === '@NSFW pussy'
                : message.reply(neko.getNSFWPussy().content);
                break


            default : message.reply("Not found what you asked for !")
            break;
        }       
    }
)

bot.login('NDgxODk1NDc1Mzk4ODM2MjI0.Dl8_8w.QFhx-UhyTM72klYhtk9HxrMCs7E')

