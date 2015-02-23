var assert = require('assert');
var mmath = require('..');

describe('Matrix#adjugate', function() {
  it("should return the matrix's adjugate", function() {
    var matrix = new mmath.Matrix([
      [  1,  2,  3],
      [ 44,-55, 98],
      [777,888,999]
    ]);
    var shouldEqual = new mmath.Matrix([
      [-141969,  666,361],
      [ 32190,-1332, 34],
      [ 81807, 666, -143]
    ]);
    assert.deepEqual(matrix.adjugate(), shouldEqual);
  });
});
