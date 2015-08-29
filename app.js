var http = require('http');

var server = http.createServer(function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end("Tis is it");
});

server.listen(3000,function()
{
console.log('Server running at port 3000');
});
