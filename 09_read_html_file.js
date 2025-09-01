const fs = require('fs');
fs.readFile('index.html', 'utf8', (e, d) => console.log(d));
