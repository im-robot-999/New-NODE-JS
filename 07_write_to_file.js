const fs = require('fs');
fs.appendFile('sample.txt', 'Appended line\n', () => {});
