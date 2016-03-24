var fs = require('fs');
var path = process.argv[2];

var buffer =  fs.readFileSync(path).toString();
var bu = buffer.split('\n');

console.log(bu.length);