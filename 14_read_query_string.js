const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  console.log('Received query:', q); // Log the query object
  res.end('Query logged');
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
