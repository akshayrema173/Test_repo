const {readFileSync, writeFileSync} = require('fs');
// or const fs = require('fs'); 
// --- it gets everything instead of only one/two specific method
// Blcoking code -- approach

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./Content/result-sync.txt',
    `Here is the result ${first}, ${second}.`,
    {flag : 'a' });