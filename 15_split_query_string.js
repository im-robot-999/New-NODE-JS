const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  for (const k in q) console.log(`${k}: ${q[k]}`);
  console.log('All query parameters have been logged.');
  res.end('Split logged');
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
