const fs = require('fs');
fs.appendFile('newfile.txt', 'Created with appendFile\n', () => {});
