var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    io.emit('health-check', 'health check started...');
});

let started = false;
module.exports.start = function(port){   
    http.listen(port||3000, function(){
        started = true;
        console.log('listening on *:3000');
    });
}

module.exports.stop = function(){
    started = false;
}

module.exports.ouput = function(msg){
    io.emit('health-check', msg);
}


