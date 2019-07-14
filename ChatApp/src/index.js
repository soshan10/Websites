var app = require('express')();
var httpServer = require('http').createServer(app);

app.get('/', 
    function(req, res){
        res.send('<h1>Hello world</h1>');
    }
);

httpServer.listen(3000,
    function(){
        console.log('listening on port 3000');
    }
);
