var express = require('express');
var socket = require('socket.io');


//App Setup
var app = express();
var server = app.listen(4000, function () {
   console.log('listening to request on port 4000');
});


// Folder to Server
app.use(express.static('public'));


//Socket Setup
var io = socket(server);

io.on('connection', socket =>  {
    console.log('Made Socket Connection', socket.id);

    socket.on('chat',data => {
       io.sockets.emit('chat', data);
    });

    socket.on('typing', data  => {
        socket.broadcast.emit('typing', data);
    });

});