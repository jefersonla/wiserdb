var http = require('http');
http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Wiser DB Pedia\n\n'+
                'Example DB for Wiser Devices');
}).listen(8040, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8040/');
