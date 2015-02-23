var assert = require('assert');
var mmath = require('..');

describe('Matrix#inverse', function() {
  it("returns the matrix's inverse", function() {
    var matrix = new mmath.Matrix([
      [1, 0, 0, 1],
      [0, 2, 1, 2],
      [2, 1, 0, 1],
      [2, 0, 1, 4]
    ]);
    var shouldEqual  = new mmath.Matrix([
      [-2, -1/2, 1, 1/2],
      [ 1,  1/2, 0,-1/2],
      [-8,   -1, 2,   2],
      [ 3,  1/2,-1,-1/2]
    ]);
    assert.deepEqual(matrix.inverse(), shouldEqual);
  });
});
