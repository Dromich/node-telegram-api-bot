const TelegramBot = require('node-telegram-bot-api');
const TOKEN = require('./TOKEN.js');

console.log('main started...')

const bot = new TelegramBot(TOKEN.T,{
	polling:{
		interval:300,
		autoStart:true,
		params:{
			timeout:10
		}
	}
	
})
bot.on('message',msg =>{
	bot.sendMessage(msg.chat.id,'Im bot')
})