
const http = require('http');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io')


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

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

