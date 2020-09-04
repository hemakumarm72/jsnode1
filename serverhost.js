var server = require('http');
server.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Test successful');
    res.end();

}).listen(8000);

