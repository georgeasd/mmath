var assert = require('assert');
var mmath = require('..');

describe('Matrix#transpose', function() {
  it('should transpose the matrix', function() {
    var matrix = new mmath.Matrix([[1,2], [3,4]]);
    var shouldEqual = new mmath.Matrix([[1,3], [2,4]])
    assert.deepEqual(matrix.transpose(), shouldEqual);
  });
});
