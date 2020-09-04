var server = require('http')
var url = require('url')

server.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('\nTrying url:' + req.url);


    // q is url passsing method
    var q = url.parse(req.url ,true).query;
    var txt = q.year + " " + q.month;    
    // query is http://localhost:8080/?year=2020&month=june
    
     res.write('\nTrying url query' + txt);
     res.write('\n');
     res.end(txt);


}).listen(8080);