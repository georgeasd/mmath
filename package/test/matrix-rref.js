var assert = require('assert');
var mmath = require('..');

describe('Matrix#transpose', function() {
  it('should transpose the matrix', function() {
    var matrix = new mmath.Matrix([
      [1, 2, 1, 5],
      [3, 4,-1, 6],
      [3,-2,-1, 7]
    ]);
    var shouldEqual = new mmath.Matrix([
      [1, 0, 0,   3],
      [0, 1, 0, 0.4],
      [0, 0, 1, 1.2]
    ]);
    assert.deepEqual(matrix.rref(), shouldEqual);
  });
});
