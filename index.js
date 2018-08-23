const Discord = require('discord.js')
const bot = new Discord.Client()
const client = require('nekos.life');
const neko = new client();
 



bot.on('message', function(message){
    if(message.channel.id === ('481901539456450579'))
        if(message.content.startsWith('!NSFW')){
            switch(message.content){
                case '!NSFW tits':
                    neko.getNSFWBoobs().then((boobies) => {
                        message.reply(boobies.url)
                    })
                    break;
                case '!NSFW ass':
                    neko.getNSFWAnal().then((asses) => {
                        message.reply(asses.url)
                    })
                break;
                case '!NSFW pussy':
                    neko.getNSFWPussy().then((pussies) => {
                        message.reply(pussies.url)
                    })
                break;
                
            }
        }     
    }
)

bot.login('NDgxODk1NDc1Mzk4ODM2MjI0.Dl8_8w.QFhx-UhyTM72klYhtk9HxrMCs7E')

