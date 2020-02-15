const express = require('express')
let router = express.Router()

router.get('/', function(req, res, next) {
	let topJsItem = [
		'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'
		,'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js'
		,'/javascripts/socketClient.js'
	]

	let roomId = 123
	
	res.render('chat/index'
				,{
					title: 'Chat Room'
					,roomId: roomId
					,topJsItem:topJsItem
				}
			)
})

module.exports = router
