import Matrix from './matrix';

Matrix.prototype.multiply = function(matrix) {
  var {rows, rowLength, colLength} = this;
  var total;
  var k;
  if (colLength !== matrix.rowLength) {
    throw new Error('you can only multiply a nXm matrix with a mXp matrix');
  }
  var newRows = [];
  for (var i = 1; i <= rowLength; i++) {
    var newRow = [];
    for (var j = 1; j <= matrix.colLength; j++) {
      var total = 0;
      for (k = 1; k <= colLength; k++) {
        total += this.get(i, k) * matrix.get(k, j);
      }
      newRow.push(total);
    }
    newRows.push(newRow);
  }
  return new Matrix(newRows);
};
