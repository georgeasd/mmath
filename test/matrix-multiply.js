var assert = require('assert');
var mmath = require('..');

describe('Matrix#multiply', function() {
  it('should multiply the matrices together', function() {
    var matrix = new mmath.Matrix([
      [2,-3, 0],
      [1, 4,-4]
    ]);
    var toMultiply  = new mmath.Matrix([
      [1, 2, 3, 4],
      [5, 6, 7, 6],
      [5, 4, 3, 2]
    ]);
    var shouldEqual = new mmath.Matrix([
      [-13,-14,-15,-10],
      [  1, 10, 19, 20]
    ]);
    assert.deepEqual(matrix.multiply(toMultiply), shouldEqual);
  });
});
