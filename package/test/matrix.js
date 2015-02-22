var assert = require('assert');
var mmath = require('..');

describe('Matrix', function() {
  it('should return a matrix object', function() {
    assert(new mmath.Matrix([]) instanceof mmath.Matrix);
  });
});
