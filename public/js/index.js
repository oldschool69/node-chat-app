var socket = io();

socket.on('connect', function(){
    console.log('Connect to server');

    socket.emit('createMessage', {
        from: 'Batista',
        text: 'Fala maninho, como vao as coisas??'
    });

});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('New Message', message);
});