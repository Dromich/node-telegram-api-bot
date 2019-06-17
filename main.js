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

	// const html = `
	// <strong>Helo ${msg.from.username}</strong>
	
	// <a href="google.com">google</a>
	// `

	// if (msg.text.toLowerCase() == 'hello') {
	// 	bot.sendMessage(id,`Heloo ${msg.from.username}`)
	// }else{
	// 	bot.sendMessage(id,html,{
	// 		parse_mode:'HTML'
	// 	})
	// }
	
switch (msg.text ) {
	case 'Закрити':
		bot.sendMessage(id,'Закриваю клавіатуру',{
			reply_markup:{
				remove_keyboard:true
			}
		})
		break;
		case 'Відповідь':
		bot.sendMessage(id,'Відповідаю',{
			reply_markup:{
				force_reply:true
			}
		})
		break;
		case 'Відповідь':
		bot.sendMessage(id,'Відповідаю',{
			reply_markup:{
				force_reply:true
			}
		})
		break;
		case 'Відправити контакт':
		bot.sendMessage(id,'Відповідаю',{
			reply_markup:{
				force_reply:true
			}
		})
		break;
	default:
	bot.sendMessage(id,'Закриваю клавіатуру',{
		reply_markup:{
			remove_keyboard:true
		}
	})
		break;
}

bot.sendMessage(id,'Клавіатура',{
	reply_markup:{
		keyboard:[
			[{
				text:'Місце',
				request_location:true
			}],
			['Відповідь','Закрити'],
			[{
				text:'Відправити контакт',
				request_contact:true
			}]

		],
		one_time_keyboard:true
		
	}

})


})

// bot.onText(/\/start/,msg =>{
// 	const { id } = msg.chat

// 	bot.sendMessage(id,helps.debug(msg))

// })