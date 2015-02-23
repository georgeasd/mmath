var assert = require('assert');
var mmath = require('..');

describe('Matrix#cofactor', function() {
  it("returns the matrix's cofactor", function() {
    var matrix = new mmath.Matrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9,10,11,12]
    ]);
    var shouldEqual  = new mmath.Matrix([
      [1, 2, 4],
      [9,10,12]
    ]);
    assert.deepEqual(matrix.cofactor(2,3), shouldEqual);
  });
});
