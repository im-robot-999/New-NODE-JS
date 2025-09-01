const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (e, d) => console.log(d.split('\n')));
