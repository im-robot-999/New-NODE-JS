const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  for (const k in q) console.log(`${k}: ${q[k]}`);
  res.end('Split logged');
}).listen(3000);
