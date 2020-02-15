exports = module.exports = function(io){
	io.on('connection',function(socket){
		socket.on("joinRoom", function(room) {
			socket.join(room)
		})

		socket.on('sendMessage',function(room, message) {
			socket.broadcast.to(room).emit("sendMessage",message)
		});

	})
}
