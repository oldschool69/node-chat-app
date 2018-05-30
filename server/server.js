
const http = require('http');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io')
const {generateMessage, generateLocationMessage} = require('./utils/message');

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
        callback();
    });

    socket.on('createLocationMessage', (coords) =>{
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
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

