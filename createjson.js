const fs = require('fs');
const json1 = require('./src/ejs/data/source/index.json');
const json2 = require('./src/ejs/data/source/sample.json');

const merged = Object.assign(json1, json2);

fs.writeFileSync('./src/ejs/data/data.json', JSON.stringify(merged, '', ' '));
