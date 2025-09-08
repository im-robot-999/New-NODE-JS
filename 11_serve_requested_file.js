const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res) => {
  const p = url.parse(req.url).pathname.substr(1);
  fs.readFile(p, (e, d) => {
    if (e) {
      console.log(`File not found: ${p}`);
      res.end('404');
    } else {
      console.log(`File served: ${p}`);
      res.end(d);
    }
  });
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
