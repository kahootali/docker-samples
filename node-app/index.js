const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer(function (request, response) {   
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
 });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});