const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { isPasswordValidPart2 } = require('./solution');

const fileStream = fs.createReadStream(path.join(__dirname, '/puzzle.txt'));
const lineReader = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let count = 0;

lineReader
  .on('line', (line) => {
    if (isPasswordValidPart2(line)) count++;
  })
  .on('close', () => {
    console.log('Number of valid passwords is', count);
  });
