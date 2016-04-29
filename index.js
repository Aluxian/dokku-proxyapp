var http = require('http');
var port = process.env.PORT || 5000;

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(port);

console.log('Dummy server running at 127.0.0.1:' + port);
