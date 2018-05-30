
const http = require('http');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io')
const {generateMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Wellcome to the chat!'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined to the chat'));

    socket.on('createMessage', (message, callback) => {
        console.log('New Message', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server.');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

});


app.get('/', (req, res) => {
    res.render('index');
});


server.listen(port, () => {
    console.log(`Listening on ${port}`);
});

