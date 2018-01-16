const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Thot') {
    	message.reply('BE GONE THOT');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDAyNjY5MTQwODEwMzk5NzQ0.DT8Jaw.ufznTmJhouE0uG090bTSenL8-kM);
