const TelegramBot = require('node-telegram-bot-api');
const TOKEN = require('./TOKEN.js');
const helps = require('./helps')

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
	const { id } = msg.chat 

bot.sendMessage(id,'Клавіатура інлайн',{
	reply_markup:{
		inline_keyboard:[
			[
				{
					text:'Replay',
					callback_data:'replay'
			
				},
				{
					text:"Forward",
					callback_data:"forward"
				}
			],
			[
				{
					text:'Google',
					url:'https://google.com.ua'
				}
			]
		]
		
	}

})


})

// bot.onText(/\/start/,msg =>{
// 	const { id } = msg.chat

// 	bot.sendMessage(id,helps.debug(msg))

// })

bot.on('callback_query',query =>{
	//bot.sendMessage(query.message.chat.id,helps.debug(query))

if (query.data === 'forward') {
	bot.sendPhoto(query.message.chat.id, './love_pic/love_is_01.jpg')
	
}else{
	bot.sendPhoto(query.message.chat.id, './love_pic/love_is_02.jpg')
}


	//bot.answerCallbackQuery(query.id,`${query.data}`)

})
