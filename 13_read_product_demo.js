const http = require('http');
http.get('http://example.com', (r) => {
  let d = '';
  r.on('data', (c) => d += c);
  r.on('end', () => console.log(d));
});
