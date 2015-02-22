var assert = require('assert');
var mmath = require('..');

describe('Matrix#add', function() {
  it('should add the matrices together', function() {
    var matrix = new mmath.Matrix([[ 1, 2], [ 3, 4]]);
    var toAdd  = new mmath.Matrix([[10,20], [30,40]]);
    var shouldEqual = new mmath.Matrix([[11,22], [33,44]])
    assert.deepEqual(matrix.add(toAdd), shouldEqual);
  });
});
