import Matrix from './matrix';

Matrix.prototype.transpose = function() {
  var {rows, rowLength, colLength} = this;
  var k;
  var newRows = Array(colLength);
  for (k = 0; k < colLength; k++) {
    newRows[k] = [];
  }
  var i, j;
  for (i = 1; i <= rowLength; i++) {
    for (j = 1; j <= colLength; j++) {
      newRows[j - 1][i - 1] = (this.get(i, j));
    }
  }
  return new Matrix(newRows);
};
