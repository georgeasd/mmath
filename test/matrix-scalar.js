var assert = require('assert');
var mmath = require('..');

describe('Matrix#scalar', function() {
  it('should multiple the matrix by a scalar', function() {
    var matrix = new mmath.Matrix([[1, 2, 3], [4, 5, 6]]);
    var shouldEqual = new mmath.Matrix([[2, 4, 6], [8, 10, 12]])
    assert.deepEqual(matrix.scalar(2), shouldEqual);
  });
});
