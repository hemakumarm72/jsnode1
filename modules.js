var fs = require('http');
var receives = require('./returnvalue');

fs.createServer( function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('Date and time for return fucntion'+receives.datetime());
    res.end();
   
}).listen(8080);

