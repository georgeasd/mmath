var assert = require('assert');
var mmath = require('..');

describe('Matrix#determinant', function() {
  it("should return the matrix's determinant", function() {
    var matrix = new mmath.Matrix([
      [6, 1,1],
      [4,-2,5],
      [2, 8,7]
    ]);
    assert.equal(matrix.determinant(), -306);
  });
});
