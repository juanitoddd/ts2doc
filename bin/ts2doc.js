const ts2doc = require('../dist');

const arguments = process.argv.slice(2);

const doc = ts2doc(arguments);

console.info(doc);
