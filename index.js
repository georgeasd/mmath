require("babel/register")({experimental: true});
var reglob = require('reglob');

exports.Matrix = require('./lib/matrix');
reglob(__dirname + '/lib/matrix-*.js');

var m = new exports.Matrix([
  [6, 1,1],
  [4,-2,5],
  [2, 8,7]
]);
console.log(m.transpose())
