
$(document).ready(function (){
	let socket = io.connect();
	let messages = $('#messages');
	let chatBox = $("#chatBox");
	let chat = $('#chat');

	let room = $('#room').val();

	socket.emit("joinRoom",room)

	chatBox.submit(function(){
		socket.emit("sendMessage",room,chat.val());
		var li = $('<li/>').append($('<p/>',{
			text:chat.val()
		}))
		messages.append(li);
		chat.val('');
		return false;
	})

	socket.on('sendMessage',function(message){
		var li = $('<li/>').append($('<p/>',{
			text:message
		}))
		messages.append(li);
	})

})