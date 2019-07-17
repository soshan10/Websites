var app = require('express')();
var httpServer = require('http').createServer(app);
var path = require('path');
var io = require('socket.io')(httpServer);

app.get('/', 
    function(req, res){
        //res.send('<h1>Hello world</h1>');
        res.sendFile(path.join(__dirname, "../public/index.html"));
    }
);

io.on('connection', function(socket){
    console.log('a user connected. ID:' + socket.client.id);
    socket.on('disconnect', function(){
      console.log('user disconnected. ID:' + socket.client.id);
    });
    socket.on('chat message', function(msg){
        console.log('Chat message ' + msg);
        io.emit('chat message', msg);
    })
  });

httpServer.listen(3000,
    function(){
        console.log('listening on port 3000');
    }
);
