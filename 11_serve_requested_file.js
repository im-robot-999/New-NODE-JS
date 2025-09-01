const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
  const p = url.parse(req.url).pathname.substr(1);
  fs.readFile(p, (e, d) => {
    res.end(e ? '404' : d);
  });
}).listen(8080);
