const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  console.log(q);
  res.end('Query logged');
}).listen(3000);
