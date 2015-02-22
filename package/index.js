require("babel/register")({experimental: true});
var reglob = require('reglob');

exports.Matrix = require('./lib/matrix');
reglob(__dirname + '/lib/matrix-*.js');
